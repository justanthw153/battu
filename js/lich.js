// Lịch pháp: Julian Day, kinh độ mặt trời, tiết khí, âm lịch (thuật toán Hồ Ngọc Đức)
var BT = window.BT || {};
window.BT = BT;

(function () {
  var PI = Math.PI, dr = PI / 180;
  var INT = Math.floor;

  // Julian Day (số thực) từ ngày giờ UT
  function jdFromUT(y, m, d, h) {
    if (m <= 2) { y -= 1; m += 12; }
    var A = INT(y / 100), B = 2 - A + INT(A / 4);
    if (y < 1582 || (y === 1582 && (m < 10 || (m === 10 && d < 15)))) B = 0;
    return INT(365.25 * (y + 4716)) + INT(30.6001 * (m + 1)) + d + (h || 0) / 24 + B - 1524.5;
  }

  function dateFromJD(jd) {
    var z = INT(jd + 0.5), f = jd + 0.5 - z, A = z;
    if (z >= 2299161) { var al = INT((z - 1867216.25) / 36524.25); A = z + 1 + al - INT(al / 4); }
    var B = A + 1524, C = INT((B - 122.1) / 365.25), D = INT(365.25 * C), E = INT((B - D) / 30.6001);
    var dayF = B - D - INT(30.6001 * E) + f;
    var day = INT(dayF), m = E < 14 ? E - 1 : E - 13, y = m > 2 ? C - 4716 : C - 4715;
    var hours = (dayF - day) * 24;
    return { y: y, m: m, d: day, h: hours };
  }

  // ΔT (giây) xấp xỉ, đủ dùng cho tính tiết khí
  function deltaT(y) {
    var t;
    if (y >= 2005 && y < 2150) { t = y - 2000; return 62.92 + 0.32217 * t + 0.005589 * t * t; }
    if (y >= 1986) { t = y - 2000; return 63.86 + 0.3345 * t - 0.060374 * t * t + 0.0017275 * t * t * t + 0.000651814 * Math.pow(t, 4) + 0.00002373599 * Math.pow(t, 5); }
    if (y >= 1961) { t = y - 1975; return 45.45 + 1.067 * t - t * t / 260 - t * t * t / 718; }
    if (y >= 1941) { t = y - 1950; return 29.07 + 0.407 * t - t * t / 233 + t * t * t / 2547; }
    if (y >= 1920) { t = y - 1920; return 21.20 + 0.84493 * t - 0.0761 * t * t + 0.0020936 * t * t * t; }
    if (y >= 1900) { t = y - 1900; return -2.79 + 1.494119 * t - 0.0598939 * t * t + 0.0061966 * t * t * t - 0.000197 * Math.pow(t, 4); }
    var u = (y - 1820) / 100; return -20 + 32 * u * u;
  }

  // Kinh độ biểu kiến của mặt trời (độ) tại JD (UT)
  function sunLongitude(jdUT) {
    var yr = 2000 + (jdUT - 2451545) / 365.25;
    var jde = jdUT + deltaT(yr) / 86400;
    var T = (jde - 2451545) / 36525;
    var L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
    var M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
    var C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M * dr) +
      (0.019993 - 0.000101 * T) * Math.sin(2 * M * dr) + 0.000289 * Math.sin(3 * M * dr);
    var om = 125.04 - 1934.136 * T;
    var lam = L0 + C - 0.00569 - 0.00478 * Math.sin(om * dr);
    lam = lam % 360; if (lam < 0) lam += 360;
    return lam;
  }

  // Tìm thời điểm (JD UT) mặt trời đạt kinh độ target, gần jdGuess
  function findSolarTerm(target, jdGuess) {
    var jd = jdGuess;
    for (var i = 0; i < 50; i++) {
      var diff = target - sunLongitude(jd);
      while (diff > 180) diff -= 360;
      while (diff < -180) diff += 360;
      if (Math.abs(diff) < 1e-7) break;
      jd += diff * 365.2422 / 360;
    }
    return jd;
  }

  // Phương trình thời gian (phút) – dùng cho giờ mặt trời thực
  function equationOfTime(jdUT) {
    var T = (jdUT - 2451545) / 36525;
    var L0 = (280.46646 + 36000.76983 * T) * dr;
    var M = (357.52911 + 35999.05029 * T) * dr;
    var e = 0.016708634 - 0.000042037 * T;
    var eps = (23.439291 - 0.0130042 * T) * dr;
    var y = Math.tan(eps / 2); y *= y;
    var E = y * Math.sin(2 * L0) - 2 * e * Math.sin(M) + 4 * e * y * Math.sin(M) * Math.cos(2 * L0) -
      0.5 * y * y * Math.sin(4 * L0) - 1.25 * e * e * Math.sin(2 * M);
    return E / dr * 4;
  }

  // ===== Âm lịch Việt Nam (Hồ Ngọc Đức) =====
  function jdFromDate(dd, mm, yy) {
    var a = INT((14 - mm) / 12), y = yy + 4800 - a, m = mm + 12 * a - 3;
    var jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
    if (jd < 2299161) jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
    return jd;
  }
  function jdToDate(jd) {
    var a, b, c;
    if (jd > 2299160) { a = jd + 32044; b = INT((4 * a + 3) / 146097); c = a - INT((b * 146097) / 4); }
    else { b = 0; c = jd + 32082; }
    var d = INT((4 * c + 3) / 1461), e = c - INT((1461 * d) / 4), m = INT((5 * e + 2) / 153);
    return [e - INT((153 * m + 2) / 5) + 1, m + 3 - 12 * INT(m / 10), b * 100 + d - 4800 + INT(m / 10)];
  }
  function getNewMoonDay(k, tz) {
    var T = k / 1236.85, T2 = T * T, T3 = T2 * T;
    var Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
    Jd1 += 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
    var M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
    var Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
    var F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
    var C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
    C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
    C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
    C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
    C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
    C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
    C1 = C1 + 0.0010 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
    var deltat = T < -11
      ? 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3
      : -0.000278 + 0.000265 * T + 0.000262 * T2;
    return INT(Jd1 + C1 - deltat + 0.5 + tz / 24);
  }
  function getSunLongSector(jdn, tz) {
    var T = (jdn - 2451545.5 - tz / 24) / 36525, T2 = T * T;
    var M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
    var L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
    var DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
    DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
    var L = (L0 + DL) * dr;
    L = L - PI * 2 * INT(L / (PI * 2));
    return INT(L / PI * 6);
  }
  function getLunarMonth11(yy, tz) {
    var off = jdFromDate(31, 12, yy) - 2415021;
    var k = INT(off / 29.530588853);
    var nm = getNewMoonDay(k, tz);
    if (getSunLongSector(nm, tz) >= 9) nm = getNewMoonDay(k - 1, tz);
    return nm;
  }
  function getLeapMonthOffset(a11, tz) {
    var k = INT((a11 - 2415021.076998695) / 29.530588853 + 0.5), last, i = 1;
    var arc = getSunLongSector(getNewMoonDay(k + i, tz), tz);
    do { last = arc; i++; arc = getSunLongSector(getNewMoonDay(k + i, tz), tz); } while (arc !== last && i < 14);
    return i - 1;
  }
  function solar2Lunar(dd, mm, yy, tz) {
    var dayNumber = jdFromDate(dd, mm, yy);
    var k = INT((dayNumber - 2415021.076998695) / 29.530588853);
    var monthStart = getNewMoonDay(k + 1, tz);
    if (monthStart > dayNumber) monthStart = getNewMoonDay(k, tz);
    var a11 = getLunarMonth11(yy, tz), b11 = a11, lunarYear;
    if (a11 >= monthStart) { lunarYear = yy; a11 = getLunarMonth11(yy - 1, tz); }
    else { lunarYear = yy + 1; b11 = getLunarMonth11(yy + 1, tz); }
    var lunarDay = dayNumber - monthStart + 1;
    var diff = INT((monthStart - a11) / 29);
    var lunarLeap = 0, lunarMonth = diff + 11;
    if (b11 - a11 > 365) {
      var leapMonthDiff = getLeapMonthOffset(a11, tz);
      if (diff >= leapMonthDiff) { lunarMonth = diff + 10; if (diff === leapMonthDiff) lunarLeap = 1; }
    }
    if (lunarMonth > 12) lunarMonth -= 12;
    if (lunarMonth >= 11 && diff < 4) lunarYear -= 1;
    return { d: lunarDay, m: lunarMonth, y: lunarYear, leap: lunarLeap };
  }
  function lunar2Solar(lunarDay, lunarMonth, lunarYear, lunarLeap, tz) {
    var a11, b11;
    if (lunarMonth < 11) { a11 = getLunarMonth11(lunarYear - 1, tz); b11 = getLunarMonth11(lunarYear, tz); }
    else { a11 = getLunarMonth11(lunarYear, tz); b11 = getLunarMonth11(lunarYear + 1, tz); }
    var off = lunarMonth - 11; if (off < 0) off += 12;
    if (b11 - a11 > 365) {
      var leapOff = getLeapMonthOffset(a11, tz), leapMonth = leapOff - 2;
      if (leapMonth < 0) leapMonth += 12;
      if (lunarLeap && lunarMonth !== leapMonth) return null;
      if (lunarLeap || off >= leapOff) off += 1;
    } else if (lunarLeap) return null;
    var k = INT(0.5 + (a11 - 2415021.076998695) / 29.530588853);
    var monthStart = getNewMoonDay(k + off, tz);
    var r = jdToDate(monthStart + lunarDay - 1);
    return { d: r[0], m: r[1], y: r[2] };
  }

  BT.lich = {
    jdFromUT: jdFromUT, dateFromJD: dateFromJD, sunLongitude: sunLongitude,
    findSolarTerm: findSolarTerm, equationOfTime: equationOfTime,
    jdFromDate: jdFromDate, solar2Lunar: solar2Lunar, lunar2Solar: lunar2Solar
  };
})();
