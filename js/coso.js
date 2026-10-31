// Dữ liệu cơ sở: Can, Chi, Ngũ hành, Tàng can, Nạp âm, Trường sinh, Thập thần, Tương tác
(function () {
  var CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
  var CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
  var CAN_HAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  var CHI_HAN = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  var CON_GIAP = ['Chuột', 'Trâu', 'Hổ', 'Mèo', 'Rồng', 'Rắn', 'Ngựa', 'Dê', 'Khỉ', 'Gà', 'Chó', 'Lợn'];
  // Ngũ hành: 0 Mộc, 1 Hỏa, 2 Thổ, 3 Kim, 4 Thủy
  var HANH = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];
  var HANH_KEY = ['moc', 'hoa', 'tho', 'kim', 'thuy'];
  var CAN_HANH = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
  var CHI_HANH = [4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4];
  // Tàng can: [can, trọng số]
  var TANG_CAN = [
    [[9, 1]],
    [[5, 0.6], [9, 0.3], [7, 0.1]],
    [[0, 0.6], [2, 0.3], [4, 0.1]],
    [[1, 1]],
    [[4, 0.6], [1, 0.3], [9, 0.1]],
    [[2, 0.6], [4, 0.3], [6, 0.1]],
    [[3, 0.7], [5, 0.3]],
    [[5, 0.6], [3, 0.3], [1, 0.1]],
    [[6, 0.6], [8, 0.3], [4, 0.1]],
    [[7, 1]],
    [[4, 0.6], [7, 0.3], [3, 0.1]],
    [[8, 0.7], [0, 0.3]]
  ];
  var NAP_AM = ['Hải Trung Kim', 'Lư Trung Hỏa', 'Đại Lâm Mộc', 'Lộ Bàng Thổ', 'Kiếm Phong Kim', 'Sơn Đầu Hỏa',
    'Giản Hạ Thủy', 'Thành Đầu Thổ', 'Bạch Lạp Kim', 'Dương Liễu Mộc', 'Tuyền Trung Thủy', 'Ốc Thượng Thổ',
    'Tích Lịch Hỏa', 'Tùng Bách Mộc', 'Trường Lưu Thủy', 'Sa Trung Kim', 'Sơn Hạ Hỏa', 'Bình Địa Mộc',
    'Bích Thượng Thổ', 'Kim Bạc Kim', 'Phú Đăng Hỏa', 'Thiên Hà Thủy', 'Đại Trạch Thổ', 'Thoa Xuyến Kim',
    'Tang Đố Mộc', 'Đại Khê Thủy', 'Sa Trung Thổ', 'Thiên Thượng Hỏa', 'Thạch Lựu Mộc', 'Đại Hải Thủy'];
  var TRUONG_SINH = ['Trường sinh', 'Mộc dục', 'Quan đới', 'Lâm quan', 'Đế vượng', 'Suy', 'Bệnh', 'Tử', 'Mộ', 'Tuyệt', 'Thai', 'Dưỡng'];
  // Vị trí Trường sinh của 10 can (chi index); can dương đi thuận, can âm đi nghịch
  var TS_START = [11, 6, 2, 9, 2, 9, 5, 0, 8, 3];
  var THAP_THAN = ['Tỷ Kiên', 'Kiếp Tài', 'Thực Thần', 'Thương Quan', 'Thiên Tài', 'Chính Tài', 'Thất Sát', 'Chính Quan', 'Thiên Ấn', 'Chính Ấn'];
  var THAP_THAN_TAT = ['Tỷ', 'Kiếp', 'Thực', 'Thương', 'T.Tài', 'C.Tài', 'Sát', 'Quan', 'Kiêu', 'Ấn'];
  // Nhóm thập thần: 0 Tỷ kiếp, 1 Thực thương, 2 Tài, 3 Quan sát, 4 Ấn
  var NHOM = ['Tỷ Kiếp', 'Thực Thương', 'Tài Tinh', 'Quan Sát', 'Ấn Tinh'];

  function mod(a, n) { return ((a % n) + n) % n; }
  function sinh(a) { return (a + 1) % 5; }      // hành a sinh ra
  function khac(a) { return (a + 2) % 5; }      // hành a khắc
  // Thập thần của can x đối với nhật can d
  function thapThan(d, x) {
    var rel = mod(CAN_HANH[x] - CAN_HANH[d], 5); // 0 đồng,1 ta sinh,2 ta khắc,3 khắc ta,4 sinh ta
    var same = (d % 2) === (x % 2);
    return rel * 2 + (same ? 0 : 1);
  }
  function nhomThapThan(tt) { return Math.floor(tt / 2); }
  function truongSinh(can, chi) {
    var st = TS_START[can];
    var k = (can % 2 === 0) ? mod(chi - st, 12) : mod(st - chi, 12);
    return k;
  }
  function napAm(ganzhi) { return NAP_AM[Math.floor(ganzhi / 2)]; }
  function ganzhiIndex(s, b) { for (var i = 0; i < 60; i++) if (i % 10 === s && i % 12 === b) return i; return -1; }
  function tenGZ(s, b) { return CAN[s] + ' ' + CHI[b]; }
  function amDuong(s) { return s % 2 === 0 ? 'Dương' : 'Âm'; }
  function hanhCuaNhom(dmHanh, nhom) { return mod(dmHanh + nhom, 5); }

  // ===== Tương tác =====
  var CAN_HOP = { '0-5': 2, '1-6': 3, '2-7': 4, '3-8': 0, '4-9': 1 }; // hợp hóa
  var CAN_XUNG = ['0-6', '1-7', '2-8', '3-9'];
  var LUC_HOP = { '0-1': 2, '2-11': 0, '3-10': 1, '4-9': 3, '5-8': 4, '6-7': 1 };
  var LUC_HAI = ['0-7', '1-6', '2-5', '3-4', '8-11', '9-10'];
  var LUC_PHA = ['0-9', '3-6', '1-4', '7-10', '2-11', '5-8'];
  var TAM_HOP = [[8, 0, 4, 4], [11, 3, 7, 0], [2, 6, 10, 1], [5, 9, 1, 3]]; // 3 chi + hành
  var TAM_HOI = [[2, 3, 4, 0], [5, 6, 7, 1], [8, 9, 10, 3], [11, 0, 1, 4]];
  var TU_HINH = [4, 6, 9, 11];
  var key = function (a, b) { return Math.min(a, b) + '-' + Math.max(a, b); };

  function quanHeCan(a, b) {
    var r = [], k = key(a, b);
    if (CAN_HOP[k] !== undefined) r.push({ loai: 'hop', hanh: CAN_HOP[k] });
    if (CAN_XUNG.indexOf(k) >= 0) r.push({ loai: 'xung' });
    return r;
  }
  function quanHeChi(a, b) {
    var r = [], k = key(a, b);
    if (LUC_HOP[k] !== undefined) r.push({ loai: 'luchop', hanh: LUC_HOP[k] });
    if (mod(a - b, 12) === 6) r.push({ loai: 'xung' });
    if (LUC_HAI.indexOf(k) >= 0) r.push({ loai: 'hai' });
    if (LUC_PHA.indexOf(k) >= 0) r.push({ loai: 'pha' });
    if (a === b && TU_HINH.indexOf(a) >= 0) r.push({ loai: 'tuhinh' });
    // hình
    var vo_an = [2, 5, 8], tri_the = [1, 10, 7];
    if (a !== b && vo_an.indexOf(a) >= 0 && vo_an.indexOf(b) >= 0) r.push({ loai: 'hinh', ten: 'Vô ân chi hình' });
    if (a !== b && tri_the.indexOf(a) >= 0 && tri_the.indexOf(b) >= 0) r.push({ loai: 'hinh', ten: 'Trì thế chi hình' });
    if (k === '0-3') r.push({ loai: 'hinh', ten: 'Vô lễ chi hình' });
    // bán tam hợp (có chi chính giữa)
    TAM_HOP.forEach(function (t) {
      var set = t.slice(0, 3);
      if (a !== b && set.indexOf(a) >= 0 && set.indexOf(b) >= 0) r.push({ loai: 'banhop', hanh: t[3], conTrungTam: (a === t[1] || b === t[1]) });
    });
    return r;
  }

  BT.cs = {
    CAN: CAN, CHI: CHI, CAN_HAN: CAN_HAN, CHI_HAN: CHI_HAN, CON_GIAP: CON_GIAP, HANH: HANH, HANH_KEY: HANH_KEY,
    CAN_HANH: CAN_HANH, CHI_HANH: CHI_HANH, TANG_CAN: TANG_CAN, TRUONG_SINH: TRUONG_SINH,
    THAP_THAN: THAP_THAN, THAP_THAN_TAT: THAP_THAN_TAT, NHOM: NHOM, TAM_HOP: TAM_HOP, TAM_HOI: TAM_HOI,
    mod: mod, sinh: sinh, khac: khac, thapThan: thapThan, nhomThapThan: nhomThapThan, truongSinh: truongSinh,
    napAm: napAm, ganzhiIndex: ganzhiIndex, tenGZ: tenGZ, amDuong: amDuong, hanhCuaNhom: hanhCuaNhom,
    quanHeCan: quanHeCan, quanHeChi: quanHeChi, key: key
  };
})();
