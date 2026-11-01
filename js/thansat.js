// Thần sát: tính các sao trên tứ trụ (và trên một trụ bất kỳ: đại vận / lưu niên)
(function () {
  var cs = BT.cs, mod = cs.mod;

  // Nhóm tam hợp của chi: 0 Thân Tý Thìn, 1 Hợi Mão Mùi, 2 Dần Ngọ Tuất, 3 Tỵ Dậu Sửu
  function nhomTamHop(b) { return [0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1][b]; }

  var BANG = {
    // theo can (ngày/năm) -> các chi
    thienAt: [[1, 7], [0, 8], [11, 9], [11, 9], [1, 7], [0, 8], [1, 7], [2, 6], [3, 5], [3, 5]],
    thaiCuc: [[0, 6], [0, 6], [3, 9], [3, 9], [4, 10, 1, 7], [4, 10, 1, 7], [2, 11], [2, 11], [5, 8], [5, 8]],
    vanXuong: [[5], [6], [8], [9], [8], [9], [11], [0], [2], [3]],
    quocAn: [[10], [11], [1], [2], [1], [2], [4], [5], [7], [8]],
    phucTinh: [[2, 0], [1, 3], [2, 0], [11], [8], [7], [6], [5], [4], [1, 3]],
    locThan: [[2], [3], [5], [6], [5], [6], [8], [9], [11], [0]],
    duongNhan: [[3], [2], [6], [5], [6], [5], [9], [8], [0], [11]], // buổi 22: chi tháng tàng Kiếp Tài của Nhật can
    kimDu: [[4], [5], [7], [8], [7], [8], [10], [11], [1], [2]],
    hocDuong: [[11], [6], [2], [9], [2], [9], [5], [0], [8], [3]],
    hongDiem: [[6, 8], [6, 8], [2], [7], [4], [4], [10], [9], [0], [8]], // buổi 22: can Giáp/Ất gặp Ngọ hoặc Thân
    // theo nhóm tam hợp (năm/ngày) -> chi
    daoHoa: [9, 0, 3, 6], dichMa: [2, 5, 8, 11], hoaCai: [4, 7, 10, 1], tuongTinh: [0, 3, 6, 9],
    kiepSat: [5, 8, 11, 2], vongThan: [11, 2, 5, 8], taiSat: [6, 9, 0, 3],
    // Ngũ Phú (buổi 22): địa chi sinh cho hành của tam hợp năm/ngày – Thân Tý Thìn → Dậu, Dần Ngọ Tuất → Mão, Hợi Mão Mùi → Tý, Tỵ Dậu Sửu → Ngọ
    nguPhu: [9, 0, 3, 6]
  };
  // Học Đường (buổi 23): tính theo NGŨ HÀNH NẠP ÂM năm sinh, xét ở trụ tháng/ngày/giờ (và vận, năm)
  // Kim → Tân Tỵ, Mộc → Kỷ Hợi, Thủy → Giáp Thân, Thổ → Mậu Thân, Hỏa → Bính Dần
  var HOC_DUONG = [[5, 11], [2, 2], [4, 8], [7, 5], [0, 8]]; // theo hành 0 Mộc,1 Hỏa,2 Thổ,3 Kim,4 Thủy: [can, chi]
  function hanhNapAm(ten) { return cs.HANH.indexOf(ten.split(' ').pop()); }
  // Từ quán (trụ hoàn chỉnh) theo can năm/ngày
  var TU_QUAN = [[6, 2], [7, 3], [1, 5], [4, 6], [3, 5], [6, 6], [8, 8], [9, 9], [9, 11], [8, 10]];
  // Thiên đức theo chi tháng: {t:'can'|'chi', v}
  var THIEN_DUC = { 2: ['c', 3], 3: ['b', 8], 4: ['c', 8], 5: ['c', 7], 6: ['b', 11], 7: ['c', 0], 8: ['c', 9], 9: ['b', 2], 10: ['c', 2], 11: ['c', 1], 0: ['b', 5], 1: ['c', 6] };
  var NGUYET_DUC = [8, 6, 2, 0, 8, 6, 2, 0, 8, 6, 2, 0]; // theo chi tháng -> can (Thân Tý Thìn Nhâm, Tỵ Dậu Sửu Canh, Dần Ngọ Tuất Bính, Hợi Mão Mùi Giáp)
  (function () { var m = { 8: 8, 0: 8, 4: 8, 5: 6, 9: 6, 1: 6, 2: 2, 6: 2, 10: 2, 11: 0, 3: 0, 7: 0 }; for (var k in m) NGUYET_DUC[k] = m[k]; })();
  var THAP_AC = ['0-4', '1-5', '2-8', '3-11', '4-10', '5-1', '6-4', '7-5', '8-8', '9-11'];
  var AM_DUONG_SAI = ['2-0', '3-1', '4-2', '7-3', '8-4', '9-5', '2-6', '3-7', '4-8', '7-9', '8-10', '9-11'];
  var KHOI_CANG = ['6-4', '6-10', '8-4', '4-10'];
  var CO_LOAN = ['1-5', '3-5', '7-11', '4-8', '0-2', '4-6', '8-0', '2-6'];
  var KIM_THAN = ['1-1', '5-5', '9-9'];
  // Giáp Dần, Ất Sửu, Ất Hợi, Bính Tý, Bính Tuất, Đinh Dậu, Mậu Thân, Kỷ Mùi, Canh Ngọ, Tân Tỵ, Nhâm Thìn, Quý Mão
  var HONG_DIEM_NGAY = ['2-2', '3-7', '9-7', '7-7', '1-7', '0-10', '6-10', '5-7'];
  var LUC_TU = ['4-0', '5-1', '7-5', '3-7', '2-6', '5-7'];
  var NHAT_QUY = ['9-3', '3-9', '3-11', '9-5'];
  var DA_MUU = ['7-5', '4-0'];
  var THOAI_THAN = ['3-1', '3-7', '8-4', '8-10'];
  var PHUC_TINH_NGAY = ['0-2', '1-1', '1-11', '2-0', '2-10', '3-9', '4-8', '5-7', '6-6', '7-5', '8-4', '9-3'];

  function khongVong(s, b) { return [mod(b - s + 10, 12), mod(b - s + 11, 12)]; }

  // Tính thần sát cho một trụ "target" (can s, chi b) dựa trên lá số gốc
  // trucViTri: tên vị trí ('Năm','Tháng','Ngày','Giờ','Đại vận','Lưu niên')
  function saoTrenTru(ls, s, b, viTri) {
    var Y = ls.tru[0], M = ls.tru[1], D = ls.tru[2];
    var out = [];
    function add(ten, nguon) { if (!out.some(function (x) { return x.ten === ten; })) out.push({ ten: ten, nguon: nguon }); }
    var dS = D.can, yS = Y.can;
    if (BANG.thienAt[dS].indexOf(b) >= 0 || BANG.thienAt[yS].indexOf(b) >= 0) add('Thiên Ất Quý Nhân', 'can ngày/năm');
    if (BANG.thaiCuc[dS].indexOf(b) >= 0 || BANG.thaiCuc[yS].indexOf(b) >= 0) add('Thái Cực Quý Nhân', 'can ngày/năm');
    if (BANG.vanXuong[dS].indexOf(b) >= 0 || BANG.vanXuong[yS].indexOf(b) >= 0) add('Văn Xương', 'can ngày/năm');
    if (BANG.quocAn[dS].indexOf(b) >= 0 || BANG.quocAn[yS].indexOf(b) >= 0) add('Quốc Ấn Quý Nhân', 'can ngày/năm');
    if (BANG.phucTinh[dS].indexOf(b) >= 0 || BANG.phucTinh[yS].indexOf(b) >= 0) add('Phúc Tinh Quý Nhân', 'can ngày/năm');
    // Lộc Thần, Kim Dư: dùng thiên can lộ ra của ngày và năm sinh (buổi 22)
    if (BANG.locThan[dS].indexOf(b) >= 0 || BANG.locThan[yS].indexOf(b) >= 0) add('Lộc Thần', 'can ngày/năm');
    // Dương nhẫn (buổi 22): trên lá số gốc CHỈ xét trụ tháng; ngoài ra gặp trong đại vận, lưu niên
    if (BANG.duongNhan[dS].indexOf(b) >= 0 && ['Năm', 'Ngày', 'Giờ'].indexOf(viTri) < 0) add('Kình Dương', 'can ngày');
    if (BANG.kimDu[dS].indexOf(b) >= 0 || BANG.kimDu[yS].indexOf(b) >= 0) add('Kim Dư', 'can ngày/năm');
    var hd = HOC_DUONG[hanhNapAm(Y.napAm)];
    if (viTri !== 'Năm' && hd && hd[0] === s && hd[1] === b) add('Học Đường', 'nạp âm năm sinh');
    if (BANG.hongDiem[dS].indexOf(b) >= 0 || BANG.hongDiem[yS].indexOf(b) >= 0) add('Hồng Diễm', 'can ngày/năm');
    var tq1 = TU_QUAN[dS], tq2 = TU_QUAN[yS];
    if ((tq1[0] === s && tq1[1] === b) || (tq2[0] === s && tq2[1] === b)) add('Từ Quán', 'can ngày/năm');
    // theo tam hợp chi năm & chi ngày
    var gy = nhomTamHop(Y.chi), gd = nhomTamHop(D.chi);
    var tamHopSao = [['daoHoa', 'Đào Hoa'], ['dichMa', 'Dịch Mã'], ['hoaCai', 'Hoa Cái'], ['tuongTinh', 'Tướng Tinh'],
      ['kiepSat', 'Kiếp Sát'], ['vongThan', 'Vong Thần'], ['taiSat', 'Tai Sát'], ['nguPhu', 'Ngũ Phú']];
    // Theo chi năm sinh (buổi 22, 23): Thiên Ách/Thiên Sát (năm Mão → Tuất, năm Thìn → Hợi), Tức Thần (năm Mão → Ngọ),
    // Thiên Không (cách an như tử vi: cung kế Thái Tuế)
    if (viTri !== 'Năm') {
      if (mod(Y.chi + 7, 12) === b) add('Thiên Ách – Thiên Sát', 'chi năm');
      if (mod(Y.chi + 3, 12) === b) add('Tức Thần', 'chi năm');
      if (mod(Y.chi + 1, 12) === b) add('Thiên Không', 'chi năm');
    }
    tamHopSao.forEach(function (p) {
      if (BANG[p[0]][gy] === b || BANG[p[0]][gd] === b) add(p[1], 'chi năm/ngày');
    });
    // Cô thần quả tú theo chi năm
    // Buổi 22: tính theo tuổi hoặc ngày sinh
    var mua = Math.floor(mod(Y.chi - 11, 12) / 3); // 0: Hợi Tý Sửu, 1: Dần Mão Thìn, 2: Tỵ Ngọ Mùi, 3: Thân Dậu Tuất
    var muaN = Math.floor(mod(D.chi - 11, 12) / 3);
    if ([2, 5, 8, 11][mua] === b || [2, 5, 8, 11][muaN] === b) add('Cô Thần', 'chi năm/ngày');
    if ([10, 1, 4, 7][mua] === b || [10, 1, 4, 7][muaN] === b) add('Quả Tú', 'chi năm/ngày');
    var hl = mod(3 - Y.chi, 12);
    if (hl === b) add('Hồng Loan', 'chi năm');
    if (mod(hl + 6, 12) === b) add('Thiên Hỷ', 'chi năm');
    // theo tháng
    var td = THIEN_DUC[M.chi];
    if ((td[0] === 'c' && td[1] === s) || (td[0] === 'b' && td[1] === b)) add('Thiên Đức Quý Nhân', 'chi tháng');
    if (NGUYET_DUC[M.chi] === s) add('Nguyệt Đức Quý Nhân', 'chi tháng');
    if (mod(M.chi - 1, 12) === b && viTri !== 'Tháng') add('Thiên Y', 'chi tháng');
    // Không vong theo trụ ngày & năm
    if (viTri !== 'Ngày') {
      var kv = khongVong(D.can, D.chi);
      if (kv.indexOf(b) >= 0) add('Không Vong', 'trụ ngày');
    }
    // Nguyên thần (Đại hao)
    var duongNam = (yS % 2 === 0) === (ls.gioiTinh === 'nam');
    var nt = duongNam ? mod(Y.chi + 7, 12) : mod(Y.chi + 5, 12);
    if (nt === b && viTri !== 'Năm') add('Nguyên Thần', 'chi năm');
    // Thiên la địa võng
    // Buổi 23: ngày Tuất gặp Hợi hoặc ngày Hợi gặp Tuất (nam); ngày Thìn gặp Tỵ hoặc ngày Tỵ gặp Thìn (nữ); gặp cả trong vận, năm
    if (ls.gioiTinh === 'nam' && ((D.chi === 10 && b === 11) || (D.chi === 11 && b === 10))) add('Thiên La', 'chi ngày');
    if (ls.gioiTinh === 'nu' && ((D.chi === 4 && b === 5) || (D.chi === 5 && b === 4))) add('Địa Võng', 'chi ngày');
    // Thiên Xá (buổi 23): theo mùa sinh, không giới hạn ở trụ ngày
    var txa = [[4, 2], [0, 6], [4, 8], [0, 0]][Math.floor(mod(M.chi - 2, 12) / 3)];
    if (s === txa[0] && b === txa[1]) add('Thiên Xá', 'chi tháng');
    return out;
  }

  // Thần sát đặc biệt theo trụ ngày / giờ / toàn cục
  function saoDacBiet(ls) {
    var D = ls.tru[2], H = ls.tru[3], M = ls.tru[1];
    var k = D.can + '-' + D.chi, r = [];
    // Thập ác (buổi 5, 6, 8): xét trụ THÁNG, NGÀY, GIỜ – không tính trụ năm (cả lứa tuổi cùng có)
    [[M, 'Tháng'], [D, 'Ngày'], [H, 'Giờ']].forEach(function (p) {
      if (p[0] && THAP_AC.indexOf(p[0].can + '-' + p[0].chi) >= 0) r.push({ ten: 'Thập Ác Đại Bại', viTri: p[1], can: p[0].can, chi: p[0].chi });
    });
    // Phúc Đức (buổi 20): chi ngày = chi tháng + 2 (tháng Dần – ngày Thìn, tháng Mão – ngày Tỵ, … tháng Hợi – ngày Sửu)
    if (mod(M.chi + 2, 12) === D.chi) r.push({ ten: 'Phúc Đức', viTri: 'Tháng – Ngày' });
    // Phúc Tinh theo ngày sinh (buổi 20)
    if (PHUC_TINH_NGAY.indexOf(k) >= 0) r.push({ ten: 'Phúc Tinh (ngày sinh)', viTri: 'Ngày' });
    if (AM_DUONG_SAI.indexOf(k) >= 0) r.push({ ten: 'Âm Dương Sai Thác', viTri: 'Ngày' });
    if (KHOI_CANG.indexOf(k) >= 0) r.push({ ten: 'Khôi Cang', viTri: 'Ngày' });
    if (CO_LOAN.indexOf(k) >= 0) r.push({ ten: 'Cô Loan Sát', viTri: 'Ngày' });
    if (H && KIM_THAN.indexOf(H.can + '-' + H.chi) >= 0) r.push({ ten: 'Kim Thần', viTri: 'Giờ' });
    // Các sao chỉ xét ngày sinh (buổi 22, 23)
    if (HONG_DIEM_NGAY.indexOf(k) >= 0) r.push({ ten: 'Hồng Diễm', viTri: 'Ngày' });
    if (LUC_TU.indexOf(k) >= 0) r.push({ ten: 'Lục Tú', viTri: 'Ngày' });
    if (NHAT_QUY.indexOf(k) >= 0) r.push({ ten: 'Nhật Quý', viTri: 'Ngày' });
    if (DA_MUU.indexOf(k) >= 0) r.push({ ten: 'Đa Mưu', viTri: 'Ngày' });
    if (THOAI_THAN.indexOf(k) >= 0) r.push({ ten: 'Thoái Thần', viTri: 'Ngày' });
    // Nhật Phá (buổi 23): chi ngày xung chi tháng hoặc chi giờ
    if (mod(D.chi - M.chi, 12) === 6 || (H && mod(D.chi - H.chi, 12) === 6)) r.push({ ten: 'Nhật Phá', viTri: 'Ngày' });
    // Tam Đài Quý Nhân (buổi 22): ba chi liền nhau đúng thứ tự, chỉ xét trên lá số gốc
    var dsChi = ls.tru.filter(Boolean).map(function (t) { return t.chi; });
    [[2, 4, 8], [3, 5, 6], [11, 0, 9]].forEach(function (t) {
      for (var i = 0; i + 2 < dsChi.length; i++) {
        if (dsChi[i] === t[0] && dsChi[i + 1] === t[1] && dsChi[i + 2] === t[2]) r.push({ ten: 'Tam Đài Quý Nhân', viTri: 'Toàn cục' });
      }
    });
    // Thiên la địa võng dạng (a): có cả Thìn và Tuất
    var chis = ls.tru.filter(Boolean).map(function (t) { return t.chi; });
    if (chis.indexOf(4) >= 0 && chis.indexOf(10) >= 0) r.push({ ten: 'Thiên La Địa Võng (Thìn–Tuất)', viTri: 'Toàn cục' });
    // Tam kỳ
    var cans = ls.tru.filter(Boolean).map(function (t) { return t.can; });
    var bo = [[0, 4, 6, 'Thiên thượng Tam kỳ (Giáp Mậu Canh)'], [1, 2, 3, 'Địa hạ Tam kỳ (Ất Bính Đinh)'], [8, 9, 7, 'Nhân trung Tam kỳ (Nhâm Quý Tân)']];
    bo.forEach(function (t) {
      for (var i = 0; i + 2 < cans.length; i++) {
        if (cans[i] === t[0] && cans[i + 1] === t[1] && cans[i + 2] === t[2]) r.push({ ten: 'Tam Kỳ Quý Nhân', ghiChu: t[3], loaiKy: bo.indexOf(t), viTri: 'Toàn cục' });
      }
    });
    return r;
  }

  BT.ts = { saoTrenTru: saoTrenTru, saoDacBiet: saoDacBiet, khongVong: khongVong, THAP_AC: THAP_AC };
})();
