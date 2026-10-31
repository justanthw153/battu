// Lập lá số Bát Tự: tứ trụ, tàng can, thập thần, ngũ hành, vượng suy, dụng thần, đại vận
(function () {
  var cs = BT.cs, L = BT.lich, mod = cs.mod;
  var TEN_TIET = ['Lập Xuân', 'Kinh Trập', 'Thanh Minh', 'Lập Hạ', 'Mang Chủng', 'Tiểu Thử', 'Lập Thu', 'Bạch Lộ', 'Hàn Lộ', 'Lập Đông', 'Đại Tuyết', 'Tiểu Hàn'];

  function taoTru(s, b, d, viTri) {
    var gz = cs.ganzhiIndex(s, b);
    var tru = { can: s, chi: b, gz: gz, viTri: viTri, napAm: cs.napAm(gz) };
    tru.tangCan = cs.TANG_CAN[b].map(function (t) {
      return { can: t[0], w: t[1], thapThan: d === null ? null : cs.thapThan(d, t[0]) };
    });
    if (d !== null) {
      tru.thapThanCan = cs.thapThan(d, s);
      tru.truongSinh = cs.truongSinh(d, b);   // nhật chủ tại chi này
      tru.tuToa = cs.truongSinh(s, b);        // can tự tọa
    }
    return tru;
  }

  // input: {y,m,d,h,mi, tz, gioiTinh:'nam'|'nu', kinhDo, gioMatTroi:bool, tyMuon:'sau'|'truoc', ten, khongGio}
  function lapLaSo(inp) {
    var tz = inp.tz != null ? inp.tz : 7;
    var hourLocal = inp.khongGio ? 12 : inp.h + inp.mi / 60;
    var jdUT = L.jdFromUT(inp.y, inp.m, inp.d, hourLocal - tz);
    var gioDung = hourLocal, ghiChuGio = '';
    if (inp.gioMatTroi && !inp.khongGio && inp.kinhDo) {
      var hc = (inp.kinhDo - tz * 15) * 4 + L.equationOfTime(jdUT);
      gioDung = hourLocal + hc / 60;
      ghiChuGio = 'Giờ mặt trời thực: hiệu chỉnh ' + (hc >= 0 ? '+' : '') + hc.toFixed(1) + ' phút';
    }
    // Ngày dương lịch dùng để tính trụ ngày (theo giờ đã hiệu chỉnh)
    var jdLocal = L.jdFromUT(inp.y, inp.m, inp.d, 0) + gioDung / 24;
    var dl = L.dateFromJD(jdLocal);
    var jdn = L.jdFromDate(dl.d, dl.m, dl.y);
    var h = dl.h;
    var tyMuonSangNgay = inp.tyMuon !== 'truoc';
    var dayJdn = jdn + ((h >= 23 && tyMuonSangNgay) ? 1 : 0);
    var dayGZ = mod(dayJdn + 49, 60);
    var dS = dayGZ % 10, dB = dayGZ % 12;
    // Năm & tháng theo tiết khí
    var lon = L.sunLongitude(jdUT);
    var y = inp.y;
    var jdLapXuan = L.findSolarTerm(315, L.jdFromUT(y, 2, 4, 0));
    var namBT = jdUT < jdLapXuan ? y - 1 : y;
    var yS = mod(namBT - 4, 10), yB = mod(namBT - 4, 12);
    var mIdx = Math.floor(mod(lon - 315, 360) / 30); // 0 = Dần
    var mB = mod(mIdx + 2, 12);
    var mS = mod((yS % 5) * 2 + 2 + mIdx, 10);
    var tru = [taoTru(yS, yB, dS, 'Năm'), taoTru(mS, mB, dS, 'Tháng'), taoTru(dS, dB, dS, 'Ngày')];
    if (!inp.khongGio) {
      var hB = Math.floor(mod(h + 1, 24) / 2);
      var hS = mod((dS % 5) * 2 + hB, 10);
      tru.push(taoTru(hS, hB, dS, 'Giờ'));
    } else tru.push(null);
    tru[2].thapThanCan = -1; // Nhật chủ

    // Tiết khí trước & sau
    var tietTruoc = L.findSolarTerm(mod(315 + mIdx * 30, 360), jdUT - 15);
    if (tietTruoc > jdUT) tietTruoc = L.findSolarTerm(mod(315 + mIdx * 30, 360), jdUT - 30);
    var tietSau = L.findSolarTerm(mod(315 + (mIdx + 1) * 30, 360), jdUT + 15);
    if (tietSau < jdUT) tietSau = L.findSolarTerm(mod(315 + (mIdx + 1) * 30, 360), jdUT + 30);

    var ls = {
      input: inp, ten: inp.ten || '', gioiTinh: inp.gioiTinh, tru: tru, nhatChu: dS, jdUT: jdUT, tz: tz,
      namBT: namBT, ghiChuGio: ghiChuGio,
      amLich: L.solar2Lunar(inp.d, inp.m, inp.y, tz),
      tiet: { truoc: { ten: TEN_TIET[mIdx], jd: tietTruoc }, sau: { ten: TEN_TIET[(mIdx + 1) % 12], jd: tietSau } },
      gioGiap: Math.min(jdUT - tietTruoc, tietSau - jdUT) < 1
    };
    ls.thangLenh = mB;
    tinhNguHanh(ls);
    tinhVuongSuy(ls);
    tinhDungThan(ls);
    tinhDaiVan(ls);
    tinhTuongTac(ls);
    tinhThanSat(ls);
    return ls;
  }

  // ===== Ngũ hành: điểm có trọng số =====
  function tinhNguHanh(ls) {
    var diem = [0, 0, 0, 0, 0], dem = [0, 0, 0, 0, 0], thapThan = new Array(10).fill(0), demTT = new Array(10).fill(0);
    ls.tru.forEach(function (t, i) {
      if (!t) return;
      var wCan = 1, wChi = (i === 1) ? 2.2 : 1.2; // lệnh tháng nặng nhất
      diem[cs.CAN_HANH[t.can]] += wCan; dem[cs.CAN_HANH[t.can]]++;
      if (i !== 2) { thapThan[t.thapThanCan] += wCan; demTT[t.thapThanCan]++; }
      dem[cs.CHI_HANH[t.chi]]++;
      t.tangCan.forEach(function (tc, j) {
        diem[cs.CAN_HANH[tc.can]] += tc.w * wChi;
        thapThan[tc.thapThan] += tc.w * wChi;
        if (j === 0) demTT[tc.thapThan] += 0.5;
      });
    });
    var tong = diem.reduce(function (a, b) { return a + b; }, 0);
    ls.nguHanh = { diem: diem, tong: tong, pct: diem.map(function (x) { return x / tong * 100; }), dem: dem };
    var tongTT = thapThan.reduce(function (a, b) { return a + b; }, 0);
    ls.thapThan = { diem: thapThan, pct: thapThan.map(function (x) { return x / tongTT * 100; }), dem: demTT };
    var nhom = [0, 0, 0, 0, 0];
    thapThan.forEach(function (v, k) { nhom[Math.floor(k / 2)] += v; });
    ls.nhom = nhom.map(function (x) { return x / tongTT * 100; });
    // Can lộ (thiên can xuất hiện, không tính nhật chủ)
    ls.canLo = ls.tru.filter(function (t, i) { return t && i !== 2; }).map(function (t) { return t.thapThanCan; });
  }

  // ===== Vượng suy nhật chủ: đắc lệnh, đắc địa, đắc thế =====
  function tinhVuongSuy(ls) {
    var d = ls.nhatChu, dh = cs.CAN_HANH[d], an = mod(dh - 1, 5);
    var mHanh = cs.CHI_HANH[ls.tru[1].chi];
    var mainMonth = cs.TANG_CAN[ls.tru[1].chi][0][0];
    var dacLenh = (mHanh === dh || mHanh === an);
    // Thổ tháng Thìn Tuất Sửu Mùi: xét chính khí
    var trangThaiLenh;
    var rel = mod(mHanh - dh, 5);
    trangThaiLenh = ['Vượng', 'Hưu', 'Tù', 'Tử', 'Tướng'][rel];
    var goc = []; // đắc địa: chi có tàng can cùng hành nhật chủ
    ls.tru.forEach(function (t, i) {
      if (!t) return;
      t.tangCan.forEach(function (tc, j) {
        if (cs.CAN_HANH[tc.can] === dh) goc.push({ tru: t.viTri, chi: cs.CHI[t.chi], loai: j === 0 ? 'gốc mạnh' : (j === 1 ? 'gốc vừa' : 'dư khí') });
      });
    });
    var nh = ls.nguHanh.diem;
    var phe = nh[dh] + nh[an];
    var pct = phe / ls.nguHanh.tong * 100;
    // điều chỉnh theo lệnh tháng
    var score = pct + (dacLenh ? 6 : -6) + (goc.some(function (g) { return g.loai === 'gốc mạnh'; }) ? 3 : 0);
    var muc;
    if (score >= 72) muc = 'Cực vượng';
    else if (score >= 56) muc = 'Thân vượng';
    else if (score >= 46) muc = 'Trung hòa';
    else if (score >= 28) muc = 'Thân nhược';
    else muc = 'Cực nhược';
    var dacThe = ls.tru.filter(function (t, i) { return t && i !== 2 && (cs.CAN_HANH[t.can] === dh || cs.CAN_HANH[t.can] === an); }).length;
    ls.vuongSuy = { dacLenh: dacLenh, trangThaiLenh: trangThaiLenh, goc: goc, dacThe: dacThe, pctPhe: pct, score: score, muc: muc, mainMonth: mainMonth };
  }

  // ===== Dụng thần (phù ức + điều hậu + tòng/chuyên vượng) =====
  function tinhDungThan(ls) {
    var d = ls.nhatChu, dh = cs.CAN_HANH[d], vs = ls.vuongSuy, nhom = ls.nhom;
    var H = function (n) { return cs.hanhCuaNhom(dh, n); };
    var dung, hy, ky = [], cachDac = null, lyDo = '';
    var coGocManh = vs.goc.some(function (g) { return g.loai === 'gốc mạnh'; });
    if (vs.muc === 'Cực nhược' && !coGocManh) {
      // Tòng cách: theo nhóm mạnh nhất trong Thực thương, Tài, Quan sát
      var best = [1, 2, 3].sort(function (a, b) { return nhom[b] - nhom[a]; })[0];
      cachDac = ['', 'Tòng Nhi', 'Tòng Tài', 'Tòng Sát'][best];
      dung = H(best); hy = H(best === 1 ? 2 : (best === 2 ? 1 : 2)); ky = [H(0), H(4)];
      lyDo = 'Nhật chủ cực nhược, không có gốc mạnh – thuận theo thế mạnh nhất (' + cs.NHOM[best] + '), kỵ sinh trợ Nhật chủ.';
    } else if (vs.muc === 'Cực vượng' && nhom[2] + nhom[3] < 12) {
      cachDac = 'Chuyên Vượng';
      dung = H(nhom[4] > nhom[0] ? 4 : 0); hy = H(1); ky = [H(3), H(2)];
      lyDo = 'Nhật chủ cực vượng, Tài–Quan rất yếu – thuận theo thế vượng, dùng ' + cs.HANH[dung] + ', thích tiết tú (' + cs.HANH[hy] + '), kỵ Quan Sát nghịch thế.';
    } else if (vs.score >= 46) {
      // Thân vượng hoặc trung hòa thiên vượng: cần khắc/tiết/hao
      if (nhom[0] >= nhom[4]) { // Tỷ kiếp nhiều -> Quan Sát chế, hoặc Thực thương tiết
        if (nhom[3] >= 6) { dung = H(3); hy = H(2); lyDo = 'Thân vượng do Tỷ Kiếp – lấy Quan Sát (' + cs.HANH[H(3)] + ') chế thân, Tài (' + cs.HANH[H(2)] + ') sinh Quan.'; }
        else { dung = H(1); hy = H(2); lyDo = 'Thân vượng do Tỷ Kiếp, Quan Sát yếu – lấy Thực Thương (' + cs.HANH[H(1)] + ') tiết tú, Tài (' + cs.HANH[H(2)] + ') làm hỷ.'; }
      } else { // Ấn nhiều -> Tài phá Ấn
        dung = H(2); hy = H(1); lyDo = 'Thân vượng do Ấn tinh nhiều – lấy Tài (' + cs.HANH[H(2)] + ') chế Ấn, Thực Thương (' + cs.HANH[H(1)] + ') sinh Tài.';
      }
      ky = [H(4), H(0)];
    } else {
      // Thân nhược: xét cái gì làm yếu
      var hai = [1, 2, 3].sort(function (a, b) { return nhom[b] - nhom[a]; })[0];
      if (hai === 3) { dung = H(4); hy = H(0); lyDo = 'Thân nhược vì Quan Sát mạnh – lấy Ấn (' + cs.HANH[H(4)] + ') hóa Sát sinh thân (Sát Ấn tương sinh), Tỷ Kiếp (' + cs.HANH[H(0)] + ') trợ.'; ky = [H(3), H(2)]; }
      else if (hai === 2) { dung = H(0); hy = H(4); lyDo = 'Thân nhược vì Tài nhiều (Tài đa thân nhược) – lấy Tỷ Kiếp (' + cs.HANH[H(0)] + ') giúp thân gánh Tài, Ấn (' + cs.HANH[H(4)] + ') làm hỷ.'; ky = [H(2), H(1)]; }
      else { dung = H(4); hy = H(0); lyDo = 'Thân nhược vì Thực Thương tiết khí – lấy Ấn (' + cs.HANH[H(4)] + ') chế Thực Thương, sinh thân.'; ky = [H(1), H(2)]; }
    }
    // Điều hậu
    var mB = ls.tru[1].chi, dieuHau = null;
    var dongLanh = [11, 0, 1].indexOf(mB) >= 0, haNong = [5, 6, 7].indexOf(mB) >= 0;
    var pct = ls.nguHanh.pct;
    if (dongLanh && pct[1] < 12) dieuHau = { hanh: 1, ghiChu: 'Sinh mùa đông, khí lạnh ẩm – cần Hỏa sưởi ấm (điều hậu). Hỏa vừa giúp tinh thần ấm áp, có động lực.' };
    if (haNong && pct[4] < 12) dieuHau = { hanh: 4, ghiChu: 'Sinh mùa hạ, khí nóng khô – cần Thủy làm mát (điều hậu). Thủy giúp bình tĩnh, linh hoạt, giảm nóng vội.' };
    var hanhTot = [dung, hy];
    if (dieuHau && hanhTot.indexOf(dieuHau.hanh) < 0 && ky.indexOf(dieuHau.hanh) < 0) hanhTot.push(dieuHau.hanh);
    var trung = [0, 1, 2, 3, 4].filter(function (x) { return hanhTot.indexOf(x) < 0 && ky.indexOf(x) < 0; });
    ls.dungThan = { dung: dung, hy: hy, ky: ky, nhan: trung, dieuHau: dieuHau, cachDac: cachDac, lyDo: lyDo, tot: hanhTot };
  }

  // Đánh giá một hành với lá số: +2 dụng, +1.5 hỷ/điều hậu, 0 nhàn, -1.5 kỵ
  function diemHanh(ls, h) {
    var dt = ls.dungThan;
    if (h === dt.dung) return 2;
    if (h === dt.hy) return 1.5;
    if (dt.dieuHau && h === dt.dieuHau.hanh) return 1.2;
    if (dt.ky.indexOf(h) >= 0) return (h === dt.ky[0] ? -1.5 : -1.2);
    return 0;
  }

  // ===== Đại vận =====
  function tinhDaiVan(ls) {
    var yS = ls.tru[0].can;
    var thuan = ((yS % 2 === 0) && ls.gioiTinh === 'nam') || ((yS % 2 === 1) && ls.gioiTinh === 'nu');
    var soNgay = thuan ? (ls.tiet.sau.jd - ls.jdUT) : (ls.jdUT - ls.tiet.truoc.jd);
    var tuoiKhoi = soNgay / 3; // 3 ngày = 1 năm
    var nam = Math.floor(tuoiKhoi), thang = Math.round((tuoiKhoi - nam) * 12);
    if (thang === 12) { nam++; thang = 0; }
    var M = ls.tru[1], ds = [];
    for (var i = 1; i <= 10; i++) {
      var s = mod(M.can + (thuan ? i : -i), 10), b = mod(M.chi + (thuan ? i : -i), 12);
      var t = taoTru(s, b, ls.nhatChu, 'Đại vận');
      t.tuoiBatDau = tuoiKhoi + (i - 1) * 10;
      t.namBatDau = ls.input.y + Math.round(t.tuoiBatDau);
      t.stt = i;
      ds.push(t);
    }
    ls.daiVan = { thuan: thuan, tuoiKhoi: tuoiKhoi, nam: nam, thang: thang, ds: ds, soNgay: soNgay };
  }

  // ===== Tương tác trong tứ trụ =====
  function tinhTuongTac(ls) {
    var r = [], T = ls.tru;
    for (var i = 0; i < 4; i++) for (var j = i + 1; j < 4; j++) {
      if (!T[i] || !T[j]) continue;
      cs.quanHeCan(T[i].can, T[j].can).forEach(function (q) { r.push({ tang: 'can', a: i, b: j, q: q, x: T[i].can, y: T[j].can }); });
      cs.quanHeChi(T[i].chi, T[j].chi).forEach(function (q) { r.push({ tang: 'chi', a: i, b: j, q: q, x: T[i].chi, y: T[j].chi }); });
      if (T[i].gz === T[j].gz) r.push({ tang: 'tru', a: i, b: j, q: { loai: 'phucngam' } });
      if (mod(T[i].can - T[j].can, 10) === 6 || mod(T[j].can - T[i].can, 10) === 6) {
        if (mod(T[i].chi - T[j].chi, 12) === 6) r.push({ tang: 'tru', a: i, b: j, q: { loai: 'thienkhacdiaxung' } });
      }
    }
    // Tam hợp, tam hội, tam hình đủ bộ
    var chis = T.filter(Boolean).map(function (t) { return t.chi; });
    cs.TAM_HOP.forEach(function (th) {
      if (chis.indexOf(th[0]) >= 0 && chis.indexOf(th[1]) >= 0 && chis.indexOf(th[2]) >= 0) r.push({ tang: 'cuc', q: { loai: 'tamhop', hanh: th[3], chi: th.slice(0, 3) } });
    });
    cs.TAM_HOI.forEach(function (th) {
      if (chis.indexOf(th[0]) >= 0 && chis.indexOf(th[1]) >= 0 && chis.indexOf(th[2]) >= 0) r.push({ tang: 'cuc', q: { loai: 'tamhoi', hanh: th[3], chi: th.slice(0, 3) } });
    });
    if ([2, 5, 8].every(function (c) { return chis.indexOf(c) >= 0; })) r.push({ tang: 'cuc', q: { loai: 'tamhinh', ten: 'Dần Tỵ Thân – Vô ân chi hình (đủ bộ)' } });
    if ([1, 10, 7].every(function (c) { return chis.indexOf(c) >= 0; })) r.push({ tang: 'cuc', q: { loai: 'tamhinh', ten: 'Sửu Tuất Mùi – Trì thế chi hình (đủ bộ)' } });
    ls.tuongTac = r;
  }

  // Tương tác của một trụ ngoài (đại vận/lưu niên) với tứ trụ
  function tuongTacVoiLaSo(ls, s, b) {
    var r = [];
    ls.tru.forEach(function (t, i) {
      if (!t) return;
      cs.quanHeCan(s, t.can).forEach(function (q) { r.push({ tang: 'can', b: i, q: q, x: s, y: t.can }); });
      cs.quanHeChi(b, t.chi).forEach(function (q) { r.push({ tang: 'chi', b: i, q: q, x: b, y: t.chi }); });
      if (t.can === s && t.chi === b) r.push({ tang: 'tru', b: i, q: { loai: 'phucngam' } });
      if (mod(s - t.can, 10) === 6 || mod(t.can - s, 10) === 6) if (mod(b - t.chi, 12) === 6) r.push({ tang: 'tru', b: i, q: { loai: 'thienkhacdiaxung' } });
    });
    return r;
  }

  function tinhThanSat(ls) {
    ls.tru.forEach(function (t) { if (t) t.thanSat = BT.ts.saoTrenTru(ls, t.can, t.chi, t.viTri); });
    ls.thanSatDacBiet = BT.ts.saoDacBiet(ls);
    ls.khongVong = BT.ts.khongVong(ls.tru[2].can, ls.tru[2].chi);
    ls.daiVan.ds.forEach(function (t) { t.thanSat = BT.ts.saoTrenTru(ls, t.can, t.chi, 'Đại vận'); });
  }

  // Trụ lưu niên / lưu nguyệt
  function truNam(y) { return { can: mod(y - 4, 10), chi: mod(y - 4, 12) }; }
  function daiVanTaiNam(ls, y) {
    var tuoi = y - ls.input.y;
    var ds = ls.daiVan.ds;
    for (var i = ds.length - 1; i >= 0; i--) if (tuoi >= Math.floor(ds[i].tuoiBatDau)) return ds[i];
    return null;
  }

  BT.ls = {
    lapLaSo: lapLaSo, taoTru: taoTru, diemHanh: diemHanh, tuongTacVoiLaSo: tuongTacVoiLaSo,
    truNam: truNam, daiVanTaiNam: daiVanTaiNam, TEN_TIET: TEN_TIET
  };
})();
