// Sinh nội dung luận giải từ lá số
(function () {
  var cs = BT.cs, T = BT.tt, mod = cs.mod;
  var VI_TRI = ['Năm', 'Tháng', 'Ngày', 'Giờ'];

  function hk(h) { return cs.HANH_KEY[h]; }
  function tagHanh(h, txt) { return '<span class="hanh h-' + hk(h) + '">' + (txt || cs.HANH[h]) + '</span>'; }
  function tenCan(s) { return '<span class="hanh h-' + hk(cs.CAN_HANH[s]) + '">' + cs.CAN[s] + '</span>'; }
  function tenChi(b) { return '<span class="hanh h-' + hk(cs.CHI_HANH[b]) + '">' + cs.CHI[b] + '</span>'; }
  function gz(s, b) { return tenCan(s) + ' ' + tenChi(b); }
  function p(t) { return '<p>' + t + '</p>'; }
  // 5 cách can – chi trong một trụ (buổi 25)
  function cachCanChi(s, b) {
    var r = mod(cs.CAN_HANH[s] - cs.CHI_HANH[b], 5);
    return ['dongHanh', 'chiSinhCan', 'chiKhacCan', 'canKhacChi', 'canSinhChi'][r];
  }
  function nhomChi(b) { return [0, 3, 6, 9].indexOf(b) >= 0 ? 'chinh' : ([4, 10, 1, 7].indexOf(b) >= 0 ? 'mo' : 'sinh'); }
  var TEN_CACH_CC = { dongHanh: 'Đồng thể', chiSinhCan: 'Tải (Chi sinh Can)', chiKhacCan: 'Tiệt cước (Chi khắc Can)', canKhacChi: 'Cái đầu (Can khắc Chi)', canSinhChi: 'Phúc (Can sinh Chi)' };
  function li(arr) { return arr.length ? '<ul>' + arr.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' : ''; }
  function sec(id, tieuDe, noiDung, moTa) {
    return '<section class="card luan" id="' + id + '"><h2>' + tieuDe + '</h2>' + (moTa ? '<p class="mota">' + moTa + '</p>' : '') + noiDung + '</section>';
  }
  function ttName(k) { return cs.THAP_THAN[k]; }
  function viTriTen(i) { return i === 'dv' ? 'Đại vận' : (i === 'ln' ? 'Lưu niên' : VI_TRI[i]); }

  function moTaQuanHe(x) {
    var q = x.q, k, txt = '';
    if (x.tang === 'can') {
      k = cs.key(x.x, x.y);
      if (q.loai === 'hop') {
        if (x.a === undefined) txt = T.canHopVan[k] + ' ' + T.canHopVanTru[x.b];
        else txt = (x.a === 2 || x.b === 2) ? T.canHop[k] + ' ' + T.canHopGhiChu : T.canHop[k].split(':')[0] + '. ' + T.canHopNgoai;
      }
      if (q.loai === 'xung') txt = cs.CAN[x.x] + '–' + cs.CAN[x.y] + ' xung. ' + T.canXung;
    } else if (x.tang === 'chi') {
      k = cs.key(x.x, x.y);
      if (q.loai === 'luchop') txt = T.lucHop[k];
      else if (q.loai === 'xung') txt = T.xung[k];
      else if (q.loai === 'hai') txt = T.hai[k];
      else if (q.loai === 'pha') txt = T.pha[k];
      else if (q.loai === 'tuhinh') txt = cs.CHI[x.x] + ' tự hình. ' + T.tuHinh;
      else if (q.loai === 'hinh') txt = cs.CHI[x.x] + '–' + cs.CHI[x.y] + ' tương hình. ' + T.hinh[q.ten];
      else if (q.loai === 'banhop') txt = (q.conTrungTam ? 'Bán tam hợp ' : 'Củng hợp (thiếu chữ giữa) ') + cs.HANH[q.hanh] + ' (' + cs.CHI[x.x] + '–' + cs.CHI[x.y] + '): ' + T.tamHop[[4, 0, 1, 3].indexOf(q.hanh)];
    } else if (x.tang === 'tru') {
      var kTru = x.a != null ? Math.min(x.a, x.b) + '-' + Math.max(x.a, x.b) : null;
      if (q.loai === 'phucngam') txt = T.phucNgam + (kTru && T.phucNgamTru[kTru] ? ' ' + T.phucNgamTru[kTru] : '');
      else txt = T.thienKhac + (kTru && T.phanNgamTru[kTru] ? ' ' + T.phanNgamTru[kTru] : '');
    } else if (x.tang === 'cuc') {
      if (q.loai === 'tamhop') txt = 'Tam hợp ' + T.tamHop[[4, 0, 1, 3].indexOf(q.hanh)] + ' Khí ' + cs.HANH[q.hanh] + ' được tăng cường mạnh trong lá số.';
      if (q.loai === 'tamhoi') txt = 'Tam hội ' + cs.HANH[q.hanh] + ' phương (' + q.chi.map(function (c) { return cs.CHI[c]; }).join('–') + '): một khí cực mạnh chi phối, tính chất ' + cs.HANH[q.hanh] + ' nổi bật trong tính cách và vận trình.';
      if (q.loai === 'tamhinh') txt = q.ten + '. ' + (q.ten.indexOf('Dần') === 0 ? T.hinh['Vô ân chi hình'] : T.hinh['Trì thế chi hình']);
    }
    return txt || '';
  }
  function nhanQuanHe(q) {
    return { hop: 'Hợp', xung: 'Xung', luchop: 'Lục hợp', hai: 'Lục hại', pha: 'Lục phá', tuhinh: 'Tự hình', hinh: 'Tương hình', banhop: 'Bán hợp', phucngam: 'Phục ngâm', thienkhacdiaxung: 'Thiên khắc địa xung', tamhop: 'Tam hợp', tamhoi: 'Tam hội', tamhinh: 'Tam hình' }[q.loai];
  }
  function lopQuanHe(q) {
    return ['hop', 'luchop', 'banhop', 'tamhop', 'tamhoi'].indexOf(q.loai) >= 0 ? 'tot' : 'xau';
  }

  // ===== 1. Tổng quan =====
  function tongQuan(ls) {
    var d = ls.nhatChu, vs = ls.vuongSuy, dt = ls.dungThan, c = T.can[d];
    var cc = xacDinhCachCuc(ls);
    var h = '<div class="tq-grid">' +
      '<div><b>Nhật chủ</b><div class="big">' + tenCan(d) + ' ' + cs.HANH[cs.CAN_HANH[d]] + '</div><small>' + cs.amDuong(d) + ' ' + cs.HANH[cs.CAN_HANH[d]] + ' – ' + c.hinhTuong + '</small></div>' +
      '<div><b>Vượng suy</b><div class="big">' + vs.muc + '</div><small>Phe ta (Tỷ Kiếp + Ấn) ≈ ' + vs.pctPhe.toFixed(0) + '% · ' + (vs.dacLenh ? 'Đắc lệnh' : 'Thất lệnh') + ' (' + vs.trangThaiLenh + ')</small></div>' +
      '<div><b>Cấu trúc</b><div class="big">' + cc.ten + '</div><small>' + (dt.cachDac ? 'Cách đặc biệt (ngoài bài giảng)' : 'Thập thần nổi trội nhất') + '</small></div>' +
      '<div><b>Dụng / Hỷ thần</b><div class="big">' + tagHanh(dt.dung) + ' · ' + tagHanh(dt.hy) + '</div><small>' + (dt.cauNoi && !dt.cauNoi.laKy ? 'Cầu nối: ' + tagHanh(dt.cauNoi.hanh) + ' · ' : '') + 'Kỵ: ' + dt.ky.map(function (x) { return tagHanh(x); }).join(', ') + '</small></div>' +
      '</div>';
    var tom = [];
    tom.push('Bạn là người <b>' + c.ten + ' ' + cs.HANH[cs.CAN_HANH[d]] + '</b> (' + c.hinhTuong.toLowerCase() + '). ' + c.tinhCach.split('. ')[0] + '.');
    var nh = ls.nguHanh.pct.map(function (v, i) { return [v, i]; }).sort(function (a, b) { return b[0] - a[0]; });
    tom.push('Ngũ hành nổi trội nhất là ' + tagHanh(nh[0][1]) + ' (' + nh[0][0].toFixed(0) + '%), yếu nhất là ' + tagHanh(nh[4][1]) + ' (' + nh[4][0].toFixed(0) + '%). Hãy nhìn vào <b>sự chênh lệch</b> giữa các hành hơn là con số phần trăm tuyệt đối.');
    var ttTop = ls.thapThan.pct.map(function (v, i) { return [v, i]; }).sort(function (a, b) { return b[0] - a[0]; });
    tom.push('Thập thần chủ đạo: <b>' + ttName(ttTop[0][1]) + '</b> và <b>' + ttName(ttTop[1][1]) + '</b> – ' + T.thapThan[ttTop[0][1]].tuKhoa.toLowerCase() + '; ' + T.thapThan[ttTop[1][1]].tuKhoa.toLowerCase() + '.');
    tom.push(dt.lyDo);
    if (dt.cauNoi && !dt.cauNoi.laKy) tom.push(cs.HANH[dt.cauNoi.tu] + ' khắc ' + cs.HANH[dt.cauNoi.den] + ' nên cần ' + tagHanh(dt.cauNoi.hanh) + ' làm cầu nối (' + cs.HANH[dt.cauNoi.tu] + ' sinh ' + cs.HANH[dt.cauNoi.hanh] + ', ' + cs.HANH[dt.cauNoi.hanh] + ' sinh ' + cs.HANH[dt.cauNoi.den] + ') – ' + cs.HANH[dt.cauNoi.hanh] + ' cũng là hành có ích.');
    if (dt.dieuHau) tom.push(dt.dieuHau.ghiChu);
    return sec('tong-quan', 'Tổng quan lá số', h + li(tom));
  }

  // ===== 2. Nhật chủ & tính cách =====
  function nhatChu(ls) {
    var d = ls.nhatChu, c = T.can[d], D = ls.tru[2];
    var out = '';
    out += '<div class="kv"><div><h4>Tính cách</h4>' + p(c.tinhCach) + '</div><div><h4>Điểm mạnh</h4>' + p(c.diemManh) + '</div><div><h4>Thử thách</h4>' + p(c.thuThach) + '</div><div><h4>Lời khuyên</h4>' + p(c.loiKhuyen) + '</div></div>';
    // Can chi trụ ngày
    var txt = T.canChi[cachCanChi(D.can, D.chi)] + (T.canChiRieng[D.can + '-' + D.chi] ? ' ' + T.canChiRieng[D.can + '-' + D.chi] : '');
    out += '<h4>Trụ ngày ' + gz(D.can, D.chi) + ' (' + D.napAm + ')</h4>';
    var napAm = T.napAmTinhCach[D.napAm] ? ['Nạp âm ' + D.napAm + ': ' + T.napAmTinhCach[D.napAm] + '.'] : [];
    out += li([txt].concat(napAm).concat([
      'Nhật chủ ngồi trên ' + cs.CHI[D.chi] + ' ở trạng thái <b>' + cs.TRUONG_SINH[D.truongSinh] + '</b>: ' + T.truongSinh[D.truongSinh],
      'Hình ảnh cung phối ngẫu <i>(tham khảo cổ điển, ngoài bài giảng)</i> – ' + T.chiNgay[D.chi]]));
    var dacDiem = [];
    var chis = ls.tru.filter(Boolean).map(function (t) { return t.chi; });
    var tuChinh = chis.filter(function (b) { return [0, 3, 6, 9].indexOf(b) >= 0; }).length;
    if (tuChinh >= 2) dacDiem.push('Có ' + tuChinh + ' chữ Tứ chính (Tý/Ngọ/Mão/Dậu): ngoại hình thường có nét, dễ thu hút.');
    if (D.can === 1 && D.chi === 3) dacDiem.push('Sinh ngày Ất Mão: quyến rũ tự nhiên từ ngoại hình đến cách ứng xử.');
    var soCanCungHanh = ls.tru.filter(function (t, i) { return t && i !== 2 && cs.CAN_HANH[t.can] === cs.CAN_HANH[d]; }).length;
    if (soCanCungHanh >= 2) dacDiem.push('Thiên can có nhiều chữ cùng hành với Nhật chủ – đặc tính của ' + c.ten + ' được khuếch đại, thể hiện rõ ra ngoài.');
    ls.tru.forEach(function (t, i) {
      if (t && i !== 2 && cs.quanHeCan(d, t.can).some(function (q) { return q.loai === 'hop'; })) {
        dacDiem.push('Nhật chủ hợp với can ' + cs.CAN[t.can] + ' ở trụ ' + VI_TRI[i] + ': ' + T.canHop[cs.key(d, t.can)]);
      }
    });
    if (dacDiem.length) out += '<h4>Đặc điểm nổi bật</h4>' + li(dacDiem);
    // Tính cách theo địa chi ngày (buổi 7)
    var nhom = nhomChi(D.chi);
    out += '<h4>Tính cách theo chi ngày ' + tenChi(D.chi) + ' (buổi 7)</h4>' + li([T.chi[D.chi], 'Thuộc nhóm <b>' + T.nhomChi[nhom].ten + '</b>: ' + T.nhomChi[nhom].tc + '.']);
    out += '<h4>Nghề nghiệp hợp với bản chất ' + c.ten + '</h4>' + p(c.congViec);
    if (c.ghiChu) out += p('<small class="mota">' + c.ghiChu + '</small>');
    return sec('nhat-chu', 'Nhật chủ & Tính cách', out, 'Thiên can ngày sinh (Nhật chủ) cho biết tư tưởng, quan điểm sống và cách bạn đối xử với những người thân thiết.');
  }

  // ===== 3. Ngũ hành =====
  function nguHanh(ls) {
    var pct = ls.nguHanh.pct, dh = cs.CAN_HANH[ls.nhatChu], out = '<div class="bars">';
    pct.forEach(function (v, i) {
      out += '<div class="bar-row"><span class="bl">' + tagHanh(i) + '</span><div class="bar"><div class="fill f-' + hk(i) + '" style="width:' + Math.max(v, 1).toFixed(1) + '%"></div></div><span class="bv">' + v.toFixed(1) + '%</span><span class="bd">' + ls.nguHanh.dem[i] + ' chữ</span></div>';
    });
    out += '</div>';
    var sorted = pct.map(function (v, i) { return [v, i]; }).sort(function (a, b) { return b[0] - a[0]; });
    var gap = sorted[0][0] - sorted[1][0];
    var nx = [];
    var manh = sorted[0][1], yeu = sorted[4][1];
    nx.push('Hành nổi bật nhất là ' + tagHanh(manh) + ': ' + T.hanh[manh].banChat + ' Đây là năng lượng bạn dùng nhiều và tự nhiên nhất.');
    if (sorted[4][0] >= 8) nx.push('Hành ít nhất là ' + tagHanh(yeu) + ' (' + sorted[4][0].toFixed(0) + '%, chênh ' + (sorted[0][0] - sorted[4][0]).toFixed(0) + '% so với hành mạnh nhất): ' + T.hanh[yeu].thieu);
    if (gap > 15) nx.push(tagHanh(sorted[0][1]) + ' vượt trội hẳn so với các hành còn lại (chênh ' + gap.toFixed(0) + '%) – đây là “màu” chủ đạo của con người bạn. Bát tự coi trọng cân bằng: một hành quá vượt trội có thể lấn át các hành khác.');
    pct.forEach(function (v, i) {
      var hh = T.hanh[i];
      if (v >= 30) nx.push('<b>' + tagHanh(i) + ' nhiều</b>: ' + hh.thua);
      else if (v < 8) {
        var note = (i === dh) ? ' (Lưu ý: Nhật chủ là ' + cs.HANH[i] + ' nên bản thân bạn vẫn mang tính ' + cs.HANH[i] + ' trong tư tưởng và cách đối xử – không phải là “không có”.)' : '';
        nx.push('<b>' + tagHanh(i) + ' ít</b>: ' + hh.thieu + note);
      }
    });
    if (pct[2] > 25 && pct[3] > 25) nx.push('Thổ và Kim cùng nhiều: dễ quá lý sự, có xu hướng giải quyết mọi vấn đề bằng lý lẽ.');
    if (pct[0] > 25 && pct[2] > 25 && pct[1] < 10) nx.push('Mộc và Thổ nhiều mà thiếu Hỏa: hay mâu thuẫn giữa hình tượng – địa vị với con người cá nhân độc đáo. Hỏa (niềm tin, đức tin, mục tiêu rõ ràng) là cầu nối giúp chuyển mâu thuẫn thành kiến tạo.');
    if (pct[4] > 30) nx.push('Thủy nhiều: suy nghĩ vượt ngoài khuôn phép, đôi khi nghĩ ngược với trật tự thông thường – nhưng nhờ vậy hiểu được những điều người khác không hiểu (kinh sách, triết lý).');
    nx.push('Khuyết thiếu không luôn là nhược điểm: đủ đầy không đồng nghĩa với tốt. Điều quan trọng là bạn biết hành nào cần bổ sung khi cuộc sống mất cân bằng.');
    out += '<h4>Nhận xét</h4>' + li(nx);
    var tbl = '<table class="tbl"><tr><th>Hành</th><th>Bản chất</th><th>Màu</th><th>Hướng</th><th>Cơ quan</th></tr>';
    T.hanh.forEach(function (hh, i) { tbl += '<tr><td>' + tagHanh(i) + '</td><td>' + hh.banChat + '</td><td>' + hh.mau + '</td><td>' + hh.huong + '</td><td>' + hh.coQuan + '</td></tr>'; });
    out += '<details><summary>Bảng tính chất ngũ hành</summary>' + tbl + '</table></details>';
    return sec('ngu-hanh', 'Tỷ trọng Ngũ hành', out, 'Tính có trọng số: thiên can 1 điểm, tàng can theo tỷ lệ chính khí – trung khí – dư khí; lệnh tháng nhân hệ số cao nhất. Bảng chỉ mang giá trị tham khảo.');
  }

  // ===== 4. Vượng suy & dụng thần =====
  // Giải thích từng bước vì sao chọn dụng thần – theo 3 điều kiện vượng suy của buổi 24
  var MUA = ['xuân (Mộc)', 'hạ (Hỏa)', 'thu (Kim)', 'đông (Thủy)'];
  var VAI_NHOM = [
    'Tỷ Kiếp – “anh em, bạn bè cùng gánh”',
    'Thực Thương – “mình bỏ sức ra để tạo tác, thể hiện” (làm hao sức mình)',
    'Tài – “việc, tiền mình phải nắm giữ, quản lý” (tốn sức mình)',
    'Quan Sát – “áp lực, trách nhiệm, người quản mình” (khắc mình)',
    'Ấn – “người thầy, cha mẹ, sự học, chỗ che chở” (sinh ra mình)'];
  function giaiThichDungThan(ls) {
    var vs = ls.vuongSuy, dt = ls.dungThan, d = ls.nhatChu, dh = cs.CAN_HANH[d], nhom = ls.nhom;
    var H = function (n) { return cs.hanhCuaNhom(dh, n); };
    var ten = cs.CAN[d] + ' ' + cs.HANH[dh], mua = Math.floor(mod(ls.tru[1].chi - 2, 12) / 3);
    var dk = function (ok) { return ok ? '<span class="dk ok">✓ Đạt</span>' : '<span class="dk no">✗ Không đạt</span>'; };
    var h = '<div class="buoc"><h4>Bước 1 – Xác định “mình” là ai</h4>' +
      p('Nhật chủ (can ngày) là <b>' + ten + '</b>. Muốn biết lá số cần gì, trước hết phải xem ' + tagHanh(dh) + ' của bạn đang <b>mạnh hay yếu</b>. Giống như một người: yếu thì cần được nâng đỡ, khỏe quá thì cần việc để làm và người để quản.') + '</div>';
    // Bước 2: 3 điều kiện
    var lenh = 'Sinh tháng ' + cs.CHI[ls.tru[1].chi] + ' thuộc mùa <b>' + MUA[mua] + '</b>. ';
    var mh = [0, 1, 3, 4][mua];
    if (mh === dh) lenh += 'Mùa cùng hành với ' + cs.HANH[dh] + ' → mùa “ngang vai”, được lệnh tháng.';
    else if (mh === mod(dh - 1, 5)) lenh += 'Hành của mùa sinh ra ' + cs.HANH[dh] + ' → được lệnh tháng.';
    else if (mh === mod(dh + 1, 5)) lenh += cs.HANH[dh] + ' phải bỏ sức ra sinh cho ' + cs.HANH[mh] + ' của mùa → bị hao, mất lệnh tháng.';
    else if (mh === mod(dh + 3, 5)) lenh += cs.HANH[mh] + ' của mùa khắc ' + cs.HANH[dh] + ' → bị khắc, mất lệnh tháng.';
    else lenh += cs.HANH[dh] + ' phải đi khắc ' + cs.HANH[mh] + ' của mùa → tốn sức, mất lệnh tháng.';
    h += '<div class="buoc"><h4>Bước 2 – Kiểm tra 4 điều kiện (buổi 24)</h4><ol class="dk-list">' +
      '<li><b>Được lệnh tháng?</b> ' + dk(vs.dacLenh) + '<br>' + lenh + '</li>' +
      '<li><b>Có Ấn / Tỷ Kiếp sinh trợ?</b> ' + dk(vs.sinhTro.length > 0) + '<br>' + (vs.sinhTro.length ? 'Có: ' + vs.sinhTro.join('; ') + '.' : 'Trong lá số không có ' + cs.HANH[mod(dh - 1, 5)] + ' (Ấn) hay ' + cs.HANH[dh] + ' (Tỷ Kiếp) nào ngoài Nhật chủ.') + '</li>' +
      '<li><b>Có thấu căn (địa chi của trụ NGÀY tàng can cùng hành Nhật chủ)?</b> ' + dk(vs.thauCan.length > 0) + '<br>' + (vs.thauCan.length ? 'Có: ' + vs.thauCan.join(', ') + '. Lưu ý: năm/vận xung (mạnh nhất), hình, hại chi ngày ' + cs.CHI[ls.tru[2].chi] + ' sẽ làm thấu căn yếu đi – những năm đó dễ mệt hơn.' : 'Chi ngày ' + cs.CHI[ls.tru[2].chi] + ' không tàng ' + cs.HANH[dh] + '.') + '</li>' +
      '<li><b>Có hợp hóa / nhị hợp / tam hợp sinh ra hành trợ giúp?</b> ' + dk(vs.hopSinh.length > 0) + '<br>' + (vs.hopSinh.length ? 'Có: ' + vs.hopSinh.join('; ') + ' – đây là phần ngũ hành “ẩn” mà bảng tỷ trọng không thể hiện.' : 'Không có tổ hợp nào sinh thêm ' + cs.HANH[dh] + ' hoặc ' + cs.HANH[mod(dh - 1, 5)] + '.') + '</li></ol>';
    var quyTac = vs.dacLenh
      ? 'Theo bài giảng: <i>đã được lệnh tháng thì Nhật chủ không suy</i> – chỉ bị yếu đi khi lực khắc chế (Tài + Quan Sát) quá nhiều.'
      : 'Theo bài giảng: <i>không được lệnh tháng chưa chắc đã yếu</i>, nhưng nên đạt 2–3 điều kiện còn lại mới vững; đạt 1 điều kiện thì “gỡ gạt” lại được chút ít; không đạt điều kiện nào thì yếu rõ.';
    h += p('Đạt <b>' + vs.soDieuKien + '/4</b> điều kiện. ' + quyTac) + '</div>';
    // Bước 3: kết luận mạnh yếu
    var lucKhac = nhom[1] + nhom[2] + nhom[3];
    h += '<div class="buoc"><h4>Bước 3 – Kết luận mạnh hay yếu</h4>' +
      p('Cân hai bên: phe <b>giúp mình</b> (Ấn + Tỷ Kiếp) ≈ ' + (nhom[0] + nhom[4]).toFixed(0) + '% so với phe <b>làm mình tốn sức</b> (Thực Thương + Tài + Quan Sát) ≈ ' + lucKhac.toFixed(0) + '%. Kết hợp với 3 điều kiện → Nhật chủ <b>' + vs.muc + '</b>.') +
      p(vs.score >= 46 ? (vs.score >= 56 ? 'Người Nhật chủ mạnh: kết cấu tâm lý vững sẵn từ bản tính. Nhưng bài giảng nhắc: Nhật chủ mạnh cần được <b>khai thác, quản chế và phát huy</b> – thêm Ấn thì dễ trì trệ, overthinking; thêm Tỷ Kiếp thì cái tôi quá cao.' : 'Hai phe khá cân nhau – lá số linh hoạt, tốt xấu phụ thuộc nhiều vào đại vận.')
        : 'Bài giảng mô tả: khi ngũ hành Nhật can yếu xuống thì <b>độ năng động giảm, sự thụ động trong suy nghĩ – tinh thần tăng lên</b>. Người Nhật chủ yếu thường lúc mới bước ra đời gặp nhiều thứ chưa ổn, nhờ trưởng bối, anh em và việc học mà vững dần.') + '</div>';
    // Bước 4: ai đang làm mất cân bằng
    var b4, b5, b6;
    if (dt.thuaMua) {
      var tm = dt.thuaMua, pT = ls.nguHanh.pct;
      b4 = 'Xét theo sức (bước 3) thì Nhật chủ ' + (vs.score < 46 ? 'hơi yếu' : 'không yếu') + ', nhưng nhìn bảng ngũ hành thì ' + tagHanh(tm.T) + ' lại là hành <b>thừa nhất</b> (' + pT[tm.T].toFixed(0) + '%), còn ' + tagHanh(tm.W) + ' yếu nhất (' + pT[tm.W].toFixed(0) + '%). Nếu chỉ theo phép phù ức (yếu thì bồi, mạnh thì tiết – chế) sẽ chọn ' + cs.HANH[tm.phuUcDung] + '/' + cs.HANH[tm.phuUcHy] +
        ([tm.phuUcDung, tm.phuUcHy].some(function (x) { return x === tm.T || x === mod(tm.T - 1, 5); }) ? ' – tức là đổ thêm vào chính hành đang thừa.' : ' – chưa phải lựa chọn tối ưu theo tiêu chuẩn thừa – thiếu của thầy (xem bước 5).');
      b5 = 'Thầy dạy (buổi 16, 19): <b>hành thừa mứa thì thành kỵ thần</b>, và hỷ thần là hành <b>vừa làm hao hành thừa vừa bù hành thiếu</b>. Ví dụ “Superman” của thầy: Quý Thủy sinh tháng Thổ nên Nhật chủ nhược, nhưng Thủy quá nhiều → thầy chọn <b>Mộc</b> làm dụng thần, Tỷ Kiếp (Thủy) là kỵ. Áp vào lá số này: ' +
        tagHanh(tm.tiet) + ' hao bớt ' + cs.HANH[tm.T] + ' (' + cs.HANH[tm.T] + ' sinh ' + cs.HANH[tm.tiet] + '), ' + tagHanh(tm.che) + ' chế ngự ' + cs.HANH[tm.T] + (mod(tm.che + 1, 5) === tm.W ? ' và còn sinh cho ' + cs.HANH[tm.W] + ' đang thiếu' : '') + '.' + (function () {
          var sT = mod(tm.T - 1, 5), lyDoBo = [];
          [tm.tiet, tm.che].forEach(function (x) {
            if (x === dt.dung || x === dt.hy) return;
            var v = [];
            if (mod(x + 1, 5) === sT && pT[sT] >= 15) v.push(cs.HANH[x] + ' lại sinh ' + cs.HANH[sT] + ' (' + pT[sT].toFixed(0) + '%), mà ' + cs.HANH[sT] + ' sinh ngược cho ' + cs.HANH[tm.T] + ' – chế bên này lại nuôi bên kia');
            if (mod(tm.W + 1, 5) === x) v.push(cs.HANH[x] + ' còn rút sức của ' + cs.HANH[tm.W] + ' vốn đang thiếu (' + cs.HANH[tm.W] + ' sinh ' + cs.HANH[x] + ')');
            if (pT[x] >= 25) v.push(cs.HANH[x] + ' trong lá số đã khá nhiều (' + pT[x].toFixed(0) + '%)');
            if (v.length) lyDoBo.push('Không lấy ' + cs.HANH[x] + ' làm chính vì ' + v.join('; ') + '.');
          });
          return lyDoBo.length ? ' ' + lyDoBo.join(' ') : '';
        })() + ' Chọn <b>' + cs.HANH[dt.dung] + '</b> làm dụng thần, ' + cs.HANH[dt.hy] + ' làm hỷ thần. Thầy cũng nói một lá số có thể có 2–3 hỷ thần – quan trọng là hiểu tác dụng của từng hành.';
      b6 = 'Kỵ thần là ' + dt.ky.map(function (x) { return tagHanh(x); }).join(', ') + ' – ' + (dt.ky.length > 1 ? 'hành đang thừa và hành nuôi nó.' : 'hành đang thừa mứa.') + (!tm.benTa ? ' Không xếp ' + cs.HANH[dh] + ' (Nhật chủ) và Ấn vào kỵ vì hành thừa đang rút sức chính Nhật chủ.' : '') + (pT[tm.W] < 10 && tm.W === mod(tm.T - 1, 5) ? ' Dù ' + cs.HANH[tm.W] + ' rất ít, không nên bù vì ' + cs.HANH[tm.W] + ' sinh thêm ' + cs.HANH[tm.T] + ' – đúng lời thầy: khuyết thiếu không luôn là nhược điểm.' : '');
    } else if (dt.cachDac) {
      b4 = 'Nhật chủ không còn chút gốc hay sinh trợ nào – trường hợp đặc biệt.';
      b5 = dt.lyDo; b6 = 'Kỵ thần là những hành cứu Nhật chủ (' + dt.ky.map(function (x) { return cs.HANH[x]; }).join(', ') + ') vì sẽ phá thế thuận theo.';
    } else if (vs.score < 46) {
      var hai = [1, 2, 3].sort(function (a, b) { return nhom[b] - nhom[a]; })[0];
      b4 = 'Lực lớn nhất đang làm Nhật chủ yếu là <b>' + VAI_NHOM[hai] + '</b>, hành ' + tagHanh(H(hai)) + ' (≈ ' + nhom[hai].toFixed(0) + '%).';
      if (hai === 3) b5 = tagHanh(H(3)) + ' đang khắc thẳng ' + tagHanh(dh) + '. Nếu chỉ thêm ' + cs.HANH[dh] + ' (Tỷ Kiếp) thì như thêm người cùng chịu trận, vẫn bị khắc trực tiếp. Cách hay hơn là thêm <b>' + cs.HANH[H(4)] + ' (Ấn)</b> đứng giữa: ' + cs.HANH[H(3)] + ' sinh ' + cs.HANH[H(4)] + ', ' + cs.HANH[H(4)] + ' sinh ' + cs.HANH[dh] + ' → áp lực không đánh thẳng vào mình mà đi vòng qua Ấn để <b>nuôi</b> mình. Bài giảng (buổi 21): khi Quan Sát áp đảo thì cần Ấn, Chính Ấn tốt hơn Thiên Ấn. Đời thực: người áp lực nhiều cần người thầy, sự học, chỗ dựa – áp lực khi đó biến thành uy tín.';
      else if (hai === 2) b5 = 'Việc/tiền (' + cs.HANH[H(2)] + ') nhiều hơn sức mình gánh nổi – “tài đa thân nhược”. Cần <b>' + cs.HANH[H(0)] + ' (Tỷ Kiếp)</b>: thêm người cùng gánh, chia việc; Ấn (' + cs.HANH[H(4)] + ') làm hỷ vì nuôi sức cho mình. Không dùng Ấn làm chính vì Tài khắc Ấn – Ấn đặt vào sẽ bị Tài đánh.';
      else b5 = 'Mình đang bỏ sức ra quá nhiều cho việc tạo tác, thể hiện (' + cs.HANH[H(1)] + '). Cần <b>' + cs.HANH[H(4)] + ' (Ấn)</b>: Ấn vừa sinh lại sức cho mình vừa khắc bớt Thực Thương – như nạp lại năng lượng bằng học hỏi, nghỉ ngơi.';
      b6 = 'Kỵ thần là ' + dt.ky.map(function (x) { return tagHanh(x); }).join(', ') + ' – chính là những lực đang làm mình yếu thêm (hoặc nuôi lực đó).';
    } else {
      if (nhom[0] >= nhom[4]) {
        b4 = 'Phe giúp mình chủ yếu là <b>' + VAI_NHOM[0] + '</b> (≈ ' + nhom[0].toFixed(0) + '%) – mình đã đủ sức, dư thừa.';
        b5 = nhom[3] >= 6 ? 'Người khỏe cần “được quản chế”: dùng <b>' + cs.HANH[H(3)] + ' (Quan Sát)</b> – trách nhiệm, kỷ luật – để định hướng sức mạnh; Tài (' + cs.HANH[H(2)] + ') làm hỷ vì Tài sinh Quan.' : 'Quan Sát trong lá số yếu, nên “khai thác” sức mạnh qua <b>' + cs.HANH[H(1)] + ' (Thực Thương)</b> – tạo tác, thể hiện; Tài (' + cs.HANH[H(2)] + ') làm hỷ để biến tài năng thành thành quả.';
      } else {
        b4 = 'Phe giúp mình chủ yếu là <b>' + VAI_NHOM[4] + '</b> (≈ ' + nhom[4].toFixed(0) + '%) – được che chở, học hỏi nhiều quá.';
        b5 = 'Ấn quá nhiều dễ trì trệ, nghĩ nhiều làm ít. Dùng <b>' + cs.HANH[H(2)] + ' (Tài)</b> vì Tài khắc Ấn – kéo mình ra hành động thực tế; Thực Thương (' + cs.HANH[H(1)] + ') làm hỷ vì sinh Tài.';
      }
      b6 = 'Kỵ thần là ' + dt.ky.map(function (x) { return tagHanh(x); }).join(', ') + ' – thêm nữa thì mình càng thừa, mất cân bằng.';
    }
    h += '<div class="buoc"><h4>Bước 4 – Điều gì đang làm lá số mất cân bằng?</h4>' + p(b4) + '</div>';
    h += '<div class="buoc"><h4>Bước 5 – Chọn dụng thần: ' + tagHanh(dt.dung) + ', hỷ thần: ' + tagHanh(dt.hy) + '</h4>' + p(b5) + '</div>';
    h += '<div class="buoc"><h4>Bước 6 – Kỵ thần</h4>' + p(b6 + ' Bài giảng: hành nào <b>thừa mứa</b> đến mức phá cân bằng các hành khác thì thành kỵ thần – kể cả Quan Sát, Ấn… vốn là thần tốt.') + '</div>';
    // 3 tiêu chuẩn chọn hỷ thần của bài giảng (buổi 16, 19)
    var tc1 = dt.dieuHau ? dt.dieuHau.ghiChu : 'Mùa sinh không chèn ép Nhật chủ đáng kể – tiêu chuẩn này không đòi hỏi thêm hành nào.';
    var nghe = [
      ['Làm trong công ty, muốn thăng tiến', [3, 4], 'Quan Sát (thăng tiến) + Ấn (được chọn vào vị trí)'],
      ['Tự kinh doanh, buôn bán', [2], 'Tài tinh (tiền, cơ hội)'],
      ['Kinh doanh có sản xuất, quản lý nhân sự', [2, 1], 'Tài tinh + Thực Thương (sản phẩm, nhân sự)'],
      ['Đang đi học, đi thi', [4, 3], 'Ấn (học vào) + Quan Sát; tránh Thương Quan vì cản thi cử']
    ];
    h += '<div class="buoc"><h4>Bước 7 – Đối chiếu 3 tiêu chuẩn chọn hỷ thần của thầy (buổi 16, 19)</h4>' +
      p('Thầy nói chọn hỷ thần “không đơn giản”, có <b>3 tiêu chuẩn</b>, và một lá số thường có <b>2–3 hỷ thần</b>, nên mỗi người xem có thể nói khác nhau – quan trọng là hiểu tác dụng của từng hành:') +
      '<ol class="dk-list"><li><b>Theo tháng sinh</b> – chọn hành làm dịu sức ép của mùa sinh lên Nhật chủ: ' + tc1 + '</li>' +
      '<li><b>Theo thừa – thiếu</b> – chọn hành vừa làm hao hành thừa vừa bù hành thiếu (ví dụ của thầy: Giáp Mộc, Hỏa nhiều, thiếu Kim → Thổ là hỷ thần vì Thổ hút bớt Hỏa và sinh Kim): kết quả là các bước 4–5 ở trên → ' + tagHanh(dt.dung) + ', ' + tagHanh(dt.hy) + '.</li>' +
      '<li><b>Theo công việc hiện tại</b> – mỗi hoàn cảnh cần một nhóm thập thần khác nhau:<ul>' +
      nghe.map(function (n) { return '<li>' + n[0] + ': cần ' + n[2] + ' → ' + n[1].map(function (g) { return tagHanh(H(g)); }).join(' + ') + '</li>'; }).join('') +
      '</ul></li></ol>' +
      p('<i>Tiêu chuẩn 1 và 2 chỉ đúng cho lá số gốc. Khi đi qua mỗi đại vận, tỷ trọng ngũ hành thay đổi nên hỷ thần cũng có thể đổi – xem ghi chú trong từng đại vận.</i>') +
      p('Tự kiểm chứng: thầy nói hỷ thần thường là <b>những thứ bản năng bạn tự tìm đến</b> – màu sắc, hoạt động tự nhiên muốn có. Hãy để ý những năm/vận mang hành ' + cs.HANH[dt.dung] + ' và ' + cs.HANH[dt.hy] + ' bạn có thấy dễ thở, năng động hơn không.') + '</div>';
    return h;
  }

  // Giải thích hành cầu nối (thông quan) – buổi 5, 19, 24
  function moTaCauNoi(dt) {
    var c = dt.cauNoi; if (!c) return '';
    var a = cs.HANH[c.tu], b = cs.HANH[c.den], x = cs.HANH[c.hanh];
    var vai = function (h) { return h === dt.dung ? 'dụng thần' : 'hỷ thần'; };
    if (c.laKy) return '<b>Lưu ý về cầu nối:</b> ' + a + ' (' + vai(c.tu) + ') khắc ' + b + ' (' + vai(c.den) + '); hành nối hai bên là ' + tagHanh(c.hanh) + ' (' + a + ' sinh ' + x + ', ' + x + ' sinh ' + b + ') nhưng ' + x + ' đang là kỵ thần của lá số – nên chỉ dùng ' + x + ' ở mức vừa phải, đủ để ' + a + ' và ' + b + ' không triệt tiêu nhau.';
    return '<b>Hành cầu nối: ' + tagHanh(c.hanh) + '.</b> ' + a + ' (' + vai(c.tu) + ') vốn khắc ' + b + ' (' + vai(c.den) + ') – nếu chỉ có hai hành này thì chúng dễ triệt tiêu nhau. ' + x + ' đứng giữa vòng tương sinh: <b>' + a + ' sinh ' + x + ', ' + x + ' sinh ' + b + '</b>, nên sức của ' + a + ' không đánh vào ' + b + ' mà chảy qua ' + x + ' để nuôi ' + b + '. Thầy gọi đây là ngũ hành trung gian (thông quan) – ví dụ buổi 5: lá số nhiều Thổ và Mộc thì Hỏa là trung gian giải mâu thuẫn; buổi 19: “muốn xử lý Thủy với Thổ thì phải có trung gian là Hỏa”. Vì vậy ' + x + ' cũng là hành có ích.';
  }
  function vuongSuyAnhHuong(ls) {
    var vs = ls.vuongSuy, vuong = vs.muc.indexOf('vượng') >= 0, nhuoc = vs.muc.indexOf('nhược') >= 0;
    var o = '<h4>Mức vượng suy ảnh hưởng thế nào (buổi 20, 21, 24)</h4>' +
      p('Đây là <b>sức gánh</b> của bạn, không phải điểm tốt xấu của lá số: cùng một sự việc có thể là cơ hội với người này và là gánh nặng với người khác. Mức của bạn là <b>' + vs.muc + '</b>. ' + T.vuongSuyMuc[vs.muc]);
    if (ls.dungThan.cachDac) o += p('<i>Lá số thuộc cách đặc biệt nêu ở trên nên cần đọc bảng này cùng với mô tả của cách đó.</i>');
    o += '<div class="scroll-x"><table class="tbl vs-bang"><thead><tr><th>Khi gặp</th><th' + (vuong ? ' class="vs-on"' : '') + '>Thân vượng</th><th' + (nhuoc ? ' class="vs-on"' : '') + '>Thân nhược</th></tr></thead><tbody>' +
      T.vuongSuyBang.map(function (d) { return '<tr><th>' + d[0] + '</th><td' + (vuong ? ' class="vs-on"' : '') + '>' + d[1] + '</td><td' + (nhuoc ? ' class="vs-on"' : '') + '>' + d[2] + '</td></tr>'; }).join('') + '</tbody></table></div>';
    var doi = [];
    if (!vs.dacLenh) doi.push('Bạn không được lệnh tháng nên sức đến từ các yếu tố khác: vận nhiều Tài (khắc Ấn) hoặc nhiều Quan Sát (khắc Tỷ Kiếp) sẽ làm bạn yếu đi, có khi nhiều tiền hơn mà nhiều vấn đề hơn, tinh thần cũng thụ động hơn.');
    else doi.push('Bạn được lệnh tháng nên sức khá vững, trừ khi vận gặp quá nhiều Tài hoặc Quan Sát.');
    if (vs.thauCan && vs.thauCan.length) doi.push('Bạn có thấu căn ở chi ngày ' + cs.CHI[ls.tru[2].chi] + ': năm hoặc vận xung (nặng nhất), hình, hại chữ này sẽ làm sức giảm.');
    if (nhuoc) doi.push('Nhược không có nghĩa là xấu: người có Ấn hoặc Tỷ Kiếp thường nhờ trưởng bối, anh em, việc học mà vững dần theo thời gian.');
    doi.push('Nhược không tự động cần thêm Ấn, vượng cũng không tự động cần tiết bớt: chọn dụng thần còn phải xem hành nào đang thừa, hành nào thiếu, như đã giải thích ở trên.');
    return o + li(doi);
  }
  function dungThan(ls) {
    var dt = ls.dungThan, out = giaiThichDungThan(ls);
    if (dt.cachDac) out += p('<b>Cách đặc biệt: ' + dt.cachDac + '</b> – ' + T.cachCuc[dt.cachDac]);
    if (dt.ghiChuCoDien) out += p('<small class="mota">' + dt.ghiChuCoDien + '</small>');
    var bang = '<div class="dt-grid">';
    var muc = [['Dụng thần', dt.dung, 'Hành quan trọng nhất giúp lá số cân bằng.'], ['Hỷ thần', dt.hy, 'Hành hỗ trợ dụng thần – thường là những thứ bản năng bạn tự tìm đến (màu sắc, hoạt động khiến bạn dễ chịu).']];
    if (dt.dieuHau && !dt.dieuHau.xungDot && dt.dieuHau.hanh !== dt.dung && dt.dieuHau.hanh !== dt.hy) muc.push(['Hỷ thần theo tháng sinh', dt.dieuHau.hanh, 'Hành làm dịu sức ép của mùa sinh (tiêu chuẩn 1 của bài giảng).']);
    if (dt.cauNoi && !dt.cauNoi.laKy && (!dt.dieuHau || dt.dieuHau.xungDot || dt.dieuHau.hanh !== dt.cauNoi.hanh)) muc.push(['Hành cầu nối', dt.cauNoi.hanh, 'Nối ' + cs.HANH[dt.cauNoi.tu] + ' sang ' + cs.HANH[dt.cauNoi.den] + ': ' + cs.HANH[dt.cauNoi.tu] + ' sinh ' + cs.HANH[dt.cauNoi.hanh] + ', ' + cs.HANH[dt.cauNoi.hanh] + ' sinh ' + cs.HANH[dt.cauNoi.den] + ' (thông quan).']);
    muc.forEach(function (m) {
      var hh = T.hanh[m[1]];
      bang += '<div class="dt-card b-' + hk(m[1]) + '"><b>' + m[0] + ': ' + cs.HANH[m[1]] + '</b><small>' + m[2] + '</small><ul><li>Màu: ' + hh.mau + '</li><li>Hướng: ' + hh.huong + '</li><li>Hoạt động bổ sung: ' + hh.hoatDong + '</li><li>Ngành nghề: ' + hh.nghe + '</li></ul></div>';
    });
    bang += '</div>';
    out += bang;
    if (dt.cauNoi) out += p(moTaCauNoi(dt));
    out += p('<b>Kỵ thần</b>: ' + dt.ky.map(function (x) { return tagHanh(x); }).join(', ') + ' – những năm/vận mang hành này nhiều thì dễ mất cân bằng; không cần né tránh tuyệt đối mà nên chủ động điều hòa bằng dụng – hỷ thần.');
    if (dt.nhan.length) out += p('<b>Nhàn thần</b>: ' + dt.nhan.map(function (x) { return tagHanh(x); }).join(', ') + ' – ảnh hưởng trung tính.');
    out += vuongSuyAnhHuong(ls);
    return sec('dung-than', 'Vượng suy & Dụng thần', out, 'Giải thích từng bước theo 4 điều kiện xét vượng suy của buổi 24: lệnh tháng, Ấn/Tỷ Kiếp sinh trợ, thấu căn (chi ngày), hợp hóa/tam hợp sinh trợ.');
  }

  // ===== 5. Thập thần =====
  function thapThan(ls) {
    var out = '<div class="bars">', tt = ls.thapThan;
    var nhomMau = ['moc', 'hoa', 'tho', 'kim', 'thuy'];
    var dh = cs.CAN_HANH[ls.nhatChu];
    ls.nhom.forEach(function (v, i) {
      var h = cs.hanhCuaNhom(dh, i);
      out += '<div class="bar-row"><span class="bl">' + cs.NHOM[i] + '</span><div class="bar"><div class="fill f-' + hk(h) + '" style="width:' + Math.max(v, 1).toFixed(1) + '%"></div></div><span class="bv">' + v.toFixed(1) + '%</span><span class="bd">' + cs.HANH[h] + '</span></div>';
    });
    out += '</div>';
    var ds = tt.pct.map(function (v, i) { return [v, i]; }).sort(function (a, b) { return b[0] - a[0]; });
    out += '<h4>Thập thần nổi bật</h4>';
    ds.slice(0, 3).forEach(function (x) {
      var t = T.thapThan[x[1]];
      var many = x[0] >= 22;
      out += '<div class="tt-item"><b>' + t.ten + '</b> <small>(' + x[0].toFixed(0) + '%) – ' + t.tuKhoa + '</small>' + p(t.tichCuc) + (many ? p('<i>Khá nhiều:</i> ' + t.nhieu) : p('<i>Lưu ý:</i> ' + t.tieuCuc)) + p('<i>Ngành phù hợp:</i> ' + t.nghe) + '</div>';
    });
    var thieu = [];
    var nhomCua = function (k) { return Math.floor(k / 2); };
    for (var n = 0; n < 5; n++) {
      if (ls.nhom[n] >= 4) continue;
      var dong = '<b>Thiếu ' + cs.NHOM[n] + '</b>: ' + T.thieuNhom[n];
      var van = ls.daiVan.ds.filter(function (v) { return nhomCua(cs.thapThan(ls.nhatChu, v.can)) === n || nhomCua(cs.thapThan(ls.nhatChu, cs.TANG_CAN[v.chi][0][0])) === n; });
      dong += van.length ? ' Đại vận có gặp lại nhóm này (' + van.map(function (v) { return cs.CAN[v.can] + ' ' + cs.CHI[v.chi] + ' từ ' + v.namBatDau; }).join(', ') + ') – giai đoạn đó được bù cả sự việc, cơ hội.' : ' Đại vận cũng hầu như không gặp lại nên đây là điểm cần chủ động bổ sung bằng lối sống, hoạt động thuộc hành tương ứng.';
      var canBu = [];
      ls.tru.forEach(function (t, i) {
        if (!t) return;
        var ds2 = (i === 2 ? [] : [t.can]).concat(t.tangCan.map(function (tc) { return tc.can; }));
        ds2.forEach(function (c) { if (T.canBuNhom[n].indexOf(c) >= 0 && canBu.indexOf(c) < 0) canBu.push(c); });
      });
      if (canBu.length) dong += ' Tuy vậy lá số có can ' + canBu.map(function (c) { return cs.CAN[c]; }).join(', ') + ' mang tính cách gần với ' + cs.NHOM[n] + ', nên vẫn có lối nghĩ của nhóm này – chỉ không bù được sự việc, cơ hội và người thân tương ứng (buổi 21).';
      thieu.push(dong);
    }
    if (thieu.length) out += '<h4>Thập thần khuyết (buổi 21)</h4>' + li(thieu);
    // Theo vị trí
    var pos = [];
    ls.tru.forEach(function (t, i) {
      if (!t || i === 2) return;
      var x = T.thapThanTru[t.thapThanCan][VI_TRI[i]];
      if (x) pos.push('<b>' + ttName(t.thapThanCan) + ' ở can ' + VI_TRI[i] + '</b> (' + cs.CAN[t.can] + '): ' + x);
    });
    ls.tru.forEach(function (t, i) {
      if (!t) return;
      var k = t.tangCan[0].thapThan, x = T.thapThanTru[k][VI_TRI[i]];
      if (x) pos.push('<b>' + ttName(k) + ' tàng ở chi ' + VI_TRI[i] + '</b> (' + cs.CHI[t.chi] + '): ' + x);
    });
    out += '<h4>Thập thần theo vị trí</h4>' + li(pos);
    var dl = '<p>Mỗi thập thần là một lối suy nghĩ và một nguồn động lực: <b>Quan Sát</b> làm việc vì trách nhiệm – liêm chính; <b>Tỷ Kiếp</b> vì niềm kiêu hãnh – tự hào; <b>Ấn</b> vì bao dung – yêu thương; <b>Tài</b> vì thù lao rõ ràng – xứng đáng; <b>Thực Thương</b> vì được sáng tạo – thể hiện. Biết lá số có nhiều lối suy nghĩ cho bạn lựa chọn để nghĩ khác đi và chia sẻ bớt áp lực.</p>';
    out += dl;
    return sec('thap-than', 'Thập Thần', out, 'Thập thần là tương tác giữa ngũ hành của Nhật chủ với các ngũ hành khác – cho biết nguồn lực của bạn phân bổ ra sao.');
  }

  // ===== 6. Cấu trúc lá số (cách thầy gọi “cách cục”) =====
  // Thầy không dạy 8 cách cổ điển theo lệnh tháng; khi nói cách cục của một lá số thầy dùng kiểu
  // “lá số thiên về cấu trúc Thất Sát”, “thiên về Chính Tài hay Thiên Tài” – tức là thập thần nổi trội.
  function cachCoDien(ls) {
    var M = ls.tru[1], d = ls.nhatChu, main = M.tangCan[0];
    if (cs.truongSinh(d, M.chi) === 3) return 'Kiến Lộc cách';
    if (cs.truongSinh(d, M.chi) === 4 && d % 2 === 0) return 'Dương Nhận cách';
    var lo = M.tangCan.filter(function (tc) { return ls.tru.some(function (t, i) { return t && i !== 2 && t.can === tc.can; }); });
    var tt = (lo.length ? lo[0] : main).thapThan;
    if (tt === 0 || tt === 1) {
      var khac = M.tangCan.filter(function (tc) { return tc.thapThan > 1; });
      if (!khac.length) return 'Kiến Lộc cách';
      tt = khac[0].thapThan;
    }
    return ttName(tt) + ' cách';
  }
  function xacDinhCachCuc(ls) {
    var dt = ls.dungThan;
    if (dt.cachDac) return { ten: dt.cachDac, moTa: T.cachCuc[dt.cachDac], coDien: dt.cachDac };
    var ds = ls.thapThan.pct.map(function (v, i) { return [v, i]; }).sort(function (a, b) { return b[0] - a[0]; });
    var tt = ds[0][1], ten = 'Thiên về ' + ttName(tt);
    var moTa = 'Lá số ' + T.cauTruc[tt] + '.';
    if (ds[1][0] >= ds[0][0] * 0.8) moTa += ' Kế đó là ' + ttName(ds[1][1]) + ' (' + T.cauTruc[ds[1][1]].replace('thiên về ' + ttName(ds[1][1]) + ' – ', '') + ').';
    return { ten: ten, moTa: moTa, coDien: cachCoDien(ls) };
  }
  function toHop(ls) {
    var pct = ls.thapThan.pct, lo = ls.canLo, vs = ls.vuongSuy, nhom = ls.nhom, r = [], thamKhao = [];
    var co = function (k, n) { return pct[k] >= (n || 6); };
    var coLo = function (k) { return lo.indexOf(k) >= 0; };
    var tang = function (k) { return ls.tru.some(function (t) { return t && t.tangCan.some(function (tc) { return tc.thapThan === k; }); }); };
    // Có trong bài giảng
    var vuongSat = vs.muc === 'Thân vượng' || vs.muc === 'Trung hòa';
    if (co(6) && ((vuongSat && co(2)) || co(9) || co(8))) r.push(T.toHop.satHoaThienQuan);
    if ((co(2) || co(3)) && (co(6) || co(7))) r.push(T.toHop.thucCheSat);
    if (coLo(3) && (coLo(7) || tang(7))) r.push(T.toHop.thuongKienQuan);
    var kieu = coLo(8) && (coLo(2) || ls.tru.some(function (t) { return t && t.thapThanCan === 8 && t.tangCan[0].thapThan === 2; }));
    if (kieu) r.push(T.toHop.kieuDoatThuc);
    if (nhom[2] > 28 && nhom[4] < 12) r.push(T.toHop.taiPhaAn);
    if (coLo(6) && coLo(7)) r.push(T.toHop.quanSatHonTap);
    if (coLo(6) && !coLo(7) && tang(7)) r.push(T.toHop.satLoQuanTang);
    var kv = ls.khongVong || [];
    if (ls.tru.some(function (t, i) { return t && i !== 2 && kv.indexOf(t.chi) >= 0 && (t.thapThanCan === 6 || t.thapThanCan === 7 || t.tangCan[0].thapThan === 6 || t.tangCan[0].thapThan === 7); })) r.push(T.toHop.quanSatKhongVong);
    var quanKiep = ls.tru.filter(function (t, i) { return t && i !== 2 && (t.thapThanCan === 6 || t.thapThanCan === 7) && t.tangCan.some(function (tc) { return tc.thapThan === 1; }); });
    if (quanKiep.length) r.push(T.toHop.quanTrenKiep + ' <i>(Trong lá số: trụ ' + quanKiep.map(function (t) { return t.viTri; }).join(', ') + '.)</i>');
    if (nhom[0] > 35) r.push(T.toHop.coDonNhieuKiep);
    else if (nhom[0] < 3) r.push(T.toHop.coDonKhongKiep);
    if (nhom[3] > 30 && nhom[0] >= 3 && nhom[0] < 15) r.push(T.toHop.coDonQuanKhac);
    var kiepLo = coLo(0) || coLo(1), kiepTang = tang(0) || tang(1);
    if (!kiepLo && kiepTang && nhom[2] < 12 && nhom[3] < 12) r.push(T.toHop.tranhDoatVoIch);
    if (kiepLo) r.push(T.toHop.tyKiepLo);
    else if (kiepTang) r.push(T.toHop.tyKiepTang);
    if (pct[4] >= 18 || lo.filter(function (k) { return k === 4; }).length >= 2) r.push(T.toHop.thienTaiNhieu);
    if (vs.score >= 56 && nhom[4] > 25) r.push(T.toHop.thanVuongThemAn);
    if (vs.score >= 56 && nhom[0] > 30) r.push(T.toHop.thanVuongThemKiep);
    // Ngoài bài giảng – tham khảo
    if (co(3) && (co(9) || co(8))) thamKhao.push(T.toHop.thuongBoiAn);
    if ((co(4) || co(5)) && (co(7) || co(6))) thamKhao.push(T.toHop.taiSinhQuan);
    if ((co(2) || co(3)) && (co(4) || co(5))) thamKhao.push(T.toHop.thucSinhTai);
    if (coLo(1) && (co(4) || co(5))) thamKhao.push(T.toHop.kiepDoatTai);
    if (nhom[2] > 30 && vs.score < 46) thamKhao.push(T.toHop.taiDaThanNhuoc);
    return { r: r, thamKhao: thamKhao };
  }
  function cachCuc(ls) {
    var cc = xacDinhCachCuc(ls), out = p('<b>' + cc.ten + '</b>: ' + cc.moTa);
    if (!ls.dungThan.cachDac) out += p('<small class="mota">Theo cách xếp cổ điển (lấy khí chủ của lệnh tháng) lá số này thuộc <i>' + cc.coDien + '</i> – khóa BTK1 không dạy cách xếp này nên chỉ ghi để tham khảo.</small>');
    var th = toHop(ls);
    if (th.r.length) out += '<h4>Các tổ hợp thập thần trong lá số (theo bài giảng)</h4>' + li(th.r);
    if (th.thamKhao.length) out += '<details><summary>Tổ hợp tham khảo ngoài bài giảng</summary>' + li(th.thamKhao) + '</details>';
    return sec('cach-cuc', 'Cấu trúc lá số & Tổ hợp', out, 'Thầy gọi cách cục của một lá số theo thập thần nổi trội (ví dụ “lá số thiên về cấu trúc Thất Sát”), kèm các tổ hợp thập thần đặc biệt.');
  }

  // ===== 7. Tứ trụ & tương tác =====
  function tuTru(ls) {
    var out = '';
    ls.tru.forEach(function (t, i) {
      if (!t) return;
      var ti = T.tru[VI_TRI[i]];
      var kcc = cachCanChi(t.can, t.chi);
      var rieng = T.canChiRieng[t.can + '-' + t.chi] ? ' ' + T.canChiRieng[t.can + '-' + t.chi] : '';
      var na = T.napAmTinhCach[t.napAm] ? ' Nạp âm ' + t.napAm + ': ' + T.napAmTinhCach[t.napAm] + '.' : '';
      out += '<div class="tru-luan"><h4>Trụ ' + VI_TRI[i] + ': ' + gz(t.can, t.chi) + ' <small>' + t.napAm + ' · ' + TEN_CACH_CC[kcc] + '</small></h4>' + p(ti.yNghia) +
        p('Thiên can ' + cs.CAN[t.can] + (i === 2 ? ' (Nhật chủ)' : ' là <b>' + ttName(t.thapThanCan) + '</b>') + '; địa chi ' + cs.CHI[t.chi] + ' tàng ' + t.tangCan.map(function (tc) { return cs.CAN[tc.can] + ' (' + cs.THAP_THAN_TAT[tc.thapThan] + ')'; }).join(', ') + '. Nhật chủ tại đây: ' + cs.TRUONG_SINH[t.truongSinh] + '.') +
        p(T.canChi[kcc] + rieng + (i !== 2 ? ' <i>(ứng vào giai đoạn và lĩnh vực của trụ ' + VI_TRI[i] + ')</i>' : '') + na) +
        (i !== 2 ? p('<small>Chữ ' + cs.CHI[t.chi] + ' ở trụ ' + VI_TRI[i] + ' (buổi 7): ' + T.chi[t.chi].replace(/^[^:]+: /, '') + '</small>') : '') + '</div>';
    });
    var qh = ls.tuongTac;
    if (qh.length) {
      out += '<h4>Tương tác giữa các trụ</h4><div class="qh-list">';
      qh.forEach(function (x) {
        var noi = x.tang === 'cuc' ? 'Toàn cục' : (VI_TRI[x.a] + ' – ' + VI_TRI[x.b]);
        var linhVuc = '';
        if (x.tang !== 'cuc' && lopQuanHe(x.q) === 'xau') {
          var ds = [x.a, x.b].map(function (i) { return { 0: 'gốc gác – cha mẹ', 1: 'công việc – cấp trên – anh em', 2: 'bản thân – hôn phối', 3: 'con cái – thành quả – nội tâm' }[i]; });
          linhVuc = ' <i>Ảnh hưởng tới: ' + ds.join(' và ') + '.</i>';
        }
        out += '<div class="qh ' + lopQuanHe(x.q) + '"><span class="qh-tag">' + nhanQuanHe(x.q) + '</span> <b>' + noi + '</b>' + p(moTaQuanHe(x) + linhVuc) + '</div>';
      });
      out += '</div>';
      var coHinh = qh.some(function (x) { return x.q.loai === 'hinh' || x.q.loai === 'tamhinh'; });
      var coQN = ls.tru.some(function (t) { return t && t.thanSat.some(function (s) { return ['Thiên Đức Quý Nhân', 'Nguyệt Đức Quý Nhân', 'Thiên Ất Quý Nhân'].indexOf(s.ten) >= 0; }); });
      if (coHinh && coQN) out += p('<b>Lưu ý:</b> lá số có quý nhân (Thiên Đức / Nguyệt Đức / Thiên Ất). ' + T.hinhGiam);
      out += p('<i>Xung, phá, hại, hình mang đến rắc rối nhưng cũng tạo ra sự phát triển nội lực và cơ hội; kết quả tồi tệ hay chuyển hóa thành cơ hội tùy vào thái độ nhìn nhận và cách đón nhận của mình.</i>');
    } else out += p('Các trụ không có xung – hợp – hình – hại đáng kể: cuộc sống nội tại tương đối êm, biến động chủ yếu đến từ đại vận và lưu niên.');
    return sec('tu-tru', 'Tứ trụ & Tương tác can chi', out);
  }

  // ===== 8. Thần sát =====
  function coSao(t, ten) { return t.thanSat.some(function (z) { return z.ten === ten; }); }
  function thanSatTheoTru(ls, gom) {
    var out = [], kv = ls.khongVong, chis = ls.tru.filter(Boolean).map(function (t) { return t.chi; }), nam = ls.gioiTinh === 'nam';
    var soKV = 0, coDuc = ['Thiên Ất Quý Nhân', 'Thiên Đức Quý Nhân', 'Nguyệt Đức Quý Nhân'];
    ls.tru.forEach(function (t, i) {
      if (!t) return;
      var nhom = Math.floor(t.thapThanCan / 2), ts = cs.truongSinh(t.can, t.chi);
      if (i !== 2 && coSao(t, 'Dịch Mã')) {
        out.push('<b>Dịch Mã trụ ' + VI_TRI[i] + '</b>: can trụ là ' + ttName(t.thapThanCan) + ' nên hay ' + T.dichMaTT[nhom] + '. ' + (ts === 9 ? 'Ngồi Tuyệt: thay đổi đến nhanh, có phần cực đoan.' : (ts === 6 ? 'Ngồi Bệnh: thay đổi miễn cưỡng, mình không phải người chủ động.' : ((ts === 0 || ts === 3) ? 'Ngồi ' + (ts === 0 ? 'Trường Sinh' : 'Lâm Quan') + ': thay đổi theo hướng tốt.' : ''))));
      }
      if (coSao(t, 'Vong Thần')) {
        var yeu = ts === 6 || ts === 7 || ts === 9 || ls.vuongSuy.muc === 'Thân nhược' || ls.vuongSuy.muc === 'Cực nhược';
        out.push('<b>Vong Thần trụ ' + VI_TRI[i] + '</b>: ' + (yeu ? 'dễ có cảm giác hụt hẫng, không rõ thật giả ở khía cạnh của trụ này, sinh ra bất cần, “lý trí dùng mình”; nên vạch rõ nguyên tắc và ranh giới sống.' : 'đủ lực nên vẫn giữ được ranh giới đạo đức: lý trí, nhiều mưu, chung thủy, hết mình cho khía cạnh của trụ này.'));
      }
      if (coSao(t, 'Nguyên Thần')) {
        var banHop = chis.indexOf(mod(t.chi + 4, 12)) >= 0 || chis.indexOf(mod(t.chi + 8, 12)) >= 0;
        if (banHop) out.push('<b>Nguyên Thần trụ ' + VI_TRI[i] + '</b> gặp bán tam hợp trên lá số: chuyển thành may mắn bất ngờ.');
      }
      if (i === 2 || kv.indexOf(t.chi) < 0) return;
      // Không vong đóng trên trụ này
      soKV++;
      var ds = ['<b>Không vong trụ ' + VI_TRI[i] + '</b> (' + cs.CHI[t.chi] + '): khó kiểm soát các việc của trụ này.'];
      var diem = BT.ls.diemHanh(ls, cs.CAN_HANH[t.can]);
      if (diem < 0) ds.push(ttName(t.thapThanCan) + ' ở trụ này thuộc hành kỵ, gặp Không vong lại tốt vì bớt gây rắc rối.');
      else if (diem > 0) ds.push(T.kvHy[nhom]);
      if (t.thapThanCan === 8) ds.push('Thiên Ấn đi với Không vong: nên cẩn thận khi học huyền học, tâm linh vì trực giác dễ sai lệch.');
      if (t.can === 2 || t.can === 3) ds.push('Can Bính/Đinh gặp Không vong: có thể giàu lên đột ngột, giữ được hay không tùy cách sống.');
      if (t.can === 6 || t.can === 7) ds.push('Can Canh/Tân gặp Không vong: có thể nổi danh hoặc mang tiếng đột ngột.');
      if (['Kiếp Sát', 'Kình Dương', 'Tai Sát'].some(function (z) { return coSao(t, z); })) ds.push('Sát tinh ở trụ này được Không vong làm giảm tai họa.');
      if (coDuc.some(function (z) { return coSao(t, z); })) ds.push('Sao quý nhân ở trụ này bị mất bớt tác dụng.');
      if (i === 3 && (nam ? nhom === 2 : nhom === 3)) ds.push('Sao phối ngẫu ở trụ giờ gặp Không vong: về hậu vận có xu hướng sống độc thân.');
      out.push(ds.join(' '));
    });
    if (soKV >= 3) out.push('<b>Tam Không</b> (ba trụ đều Không vong, “phản vi kỳ cách”): rắc rối lại được tháo gỡ; bớt định kiến nên có thể làm đơn giản mà vẫn thành; hay có may mắn hoặc sự cố bất ngờ.');
    ls.thanSatDacBiet.filter(function (z) { return z.ten === 'Thập Ác Đại Bại'; }).forEach(function (z) {
      var i = VI_TRI.indexOf(z.viTri), Y = ls.tru[0];
      if (Math.abs(Y.can - z.can) % 10 !== 0 && (mod(Y.can - z.can, 10) === 6 || mod(z.can - Y.can, 10) === 6) && mod(Y.chi - z.chi, 12) === 6) out.push('<b>Năm sinh phản ngâm trụ Thập ác ' + z.viTri + '</b>: đây là trường hợp thật sự cần lưu ý, dễ phạm sai lầm nghiêm trọng khi cảm xúc lên cao.');
      if (i !== 2 && kv.indexOf(z.chi) >= 0) out.push('<b>Trụ Thập ác ' + z.viTri + ' gặp Không vong</b>: được hóa giải, hết tính đại bại.');
    });
    if (coSaoLa(gom, 'Thiên La') || coSaoLa(gom, 'Địa Võng')) {
      var kim = ls.nguHanh.pct[3], dKim = BT.ls.diemHanh(ls, 3);
      out.push('<b>' + (nam ? 'Thiên La' : 'Địa Võng') + '</b>: ' + (kim < 10 || dKim < 0 ? 'hành Kim đang ít hoặc là hành kỵ nên khó dứt điểm những việc dây dưa, cần chủ động bổ sung Kim hợp lý trong lối sống.' : 'hành Kim đang đủ lực, mấy chuyện dây dưa rồi sẽ dứt được.'));
    }
    return out;
  }
  function coSaoLa(gom, ten) { return !!gom[ten]; }
  function thanSat(ls) {
    var out = '', all = [];
    ls.tru.forEach(function (t, i) { if (t) t.thanSat.forEach(function (s) { all.push({ ten: s.ten, viTri: VI_TRI[i] }); }); });
    ls.thanSatDacBiet.forEach(function (s) { all.push(s); });
    if (!all.length) return sec('than-sat', 'Thần sát', p('Không có thần sát nổi bật.'));
    var gom = {};
    all.forEach(function (s) { (gom[s.ten] = gom[s.ten] || []).push(s.viTri); });
    var tot = [], xau = [];
    Object.keys(gom).forEach(function (k) {
      var line = '<b>' + k + '</b> <span class="vt">(' + gom[k].join(', ') + ')</span>: ' + (T.thanSat[k] || '');
      (T.saoTot.indexOf(k) >= 0 ? tot : xau).push(line);
    });
    var thapAc = ls.thanSatDacBiet.filter(function (z) { return z.ten === 'Thập Ác Đại Bại'; });
    if (thapAc.length) xau.push('<b>Thập Ác trong lá số của bạn</b>: ' + thapAc.map(function (z) { return 'trụ ' + z.viTri + ' – ' + T.thapAcNgay[z.can + '-' + z.chi]; }).join(' ') +
      (thapAc.length >= 2 ? ' Có nhiều trụ Thập ác: tài năng nổi bật hơn nhưng cũng cần chăm sóc tâm lý nhiều hơn.' : ''));
    ls.thanSatDacBiet.forEach(function (z) { if (z.ten === 'Tam Kỳ Quý Nhân') tot.push(T.tamKy[z.loaiKy]); });
    if (tot.length) out += '<h4>Cát tinh – quý nhân</h4>' + li(tot);
    if (xau.length) out += '<h4>Sao cần lưu ý</h4>' + li(xau);
    var tt = thanSatTheoTru(ls, gom);
    if (tt.length) out += '<h4>Đọc sao theo vị trí trong lá số (buổi 22–24)</h4>' + li(tt);
    out += p('<i>Thần sát là “tượng sao” được tính từ tương tác can chi – mang tính gợi ý; hãy hiểu bản chất can chi tạo ra nó hơn là sợ hãi tên gọi. Sao nằm ở trụ nào thì ứng vào lĩnh vực/giai đoạn của trụ đó.</i>');
    out += p('Không vong (theo trụ ngày): <b>' + ls.khongVong.map(function (b) { return cs.CHI[b]; }).join(', ') + '</b> – những năm/tháng mang các chi này, điều thuộc về chúng dễ “trống rỗng”, khó nắm bắt.');
    return sec('than-sat', 'Thần sát', out);
  }

  // ===== 9. Tình cảm hôn nhân =====
  function honNhan(ls) {
    var nam = ls.gioiTinh === 'nam', D = ls.tru[2], out = [], pct = ls.thapThan.pct;
    var saoPN = nam ? [5, 4] : [7, 6];
    var tenSao = nam ? 'Tài tinh (Chính Tài = vợ, Thiên Tài = người tình)' : 'Quan tinh (Chính Quan = chồng, Thất Sát = người tình)';
    var tong = pct[saoPN[0]] + pct[saoPN[1]];
    out.push('Sao phối ngẫu: ' + tenSao + ' chiếm ≈ ' + tong.toFixed(0) + '%. ' + (tong < 5 ? 'Sao phối ngẫu yếu/ẩn: duyên đến muộn hoặc ít đặt nặng hôn nhân; nên chủ động mở lòng.' : (tong > 30 ? 'Sao phối ngẫu rất mạnh: nhiều duyên, nhiều lựa chọn – dễ phân tán hoặc chịu ảnh hưởng lớn từ người bạn đời.' : 'Sao phối ngẫu vừa phải: hôn nhân là một phần cân bằng của đời sống.')));
    if (nam && pct[4] > 6 && pct[5] > 6) out.push('Có cả Chính Tài và Thiên Tài: đời sống tình cảm phong phú, cần rõ ràng để tránh rắc rối.');
    if (!nam && ls.canLo.indexOf(6) >= 0 && ls.canLo.indexOf(7) >= 0) out.push('Quan Sát hỗn tạp với nữ: tình cảm dễ phức tạp, có nhiều người theo đuổi hoặc lưỡng lự lựa chọn.');
    out.push('Hình ảnh cung phối ngẫu – chi ngày <i>(tham khảo cổ điển, ngoài bài giảng)</i>: ' + T.chiNgay[D.chi]);
    // Buổi 20, 21: chất lượng sao phối ngẫu
    if (nam) {
      if (pct[5] >= 20) out.push('Chính Tài nhiều: theo bài giảng có xu hướng nhiều lần đổi vợ (có trường hợp đa thê) – cần chung thủy và rõ ràng.');
      if (pct[4] >= 20) out.push('Thiên Tài nhiều: thường nhiều bạn gái, duyên tình cảm phong phú.');
      if (ls.nhom[2] > 28 && ls.nhom[0] < 12) out.push('Tài tinh nhiều mà ít Tỷ Kiếp: người vợ dễ là người “áp chế” mình – trong nhà vợ có tiếng nói lớn.');
    } else {
      if (ls.nhom[3] < 3) out.push('Lá số không có Chính Quan, Thất Sát (buổi 21): vẫn có thể có chồng, bạn trai nhưng mối quan hệ ít chặt chẽ, mạnh mẽ; có người không có nhu cầu lấy chồng, nhất là khi đại vận cũng không gặp Quan Sát.');
    }
    if (ls.nhom[2] > 30 && ls.nhom[4] >= 3) out.push('Tài tinh nhiều khắc Ấn (Ấn là mẹ): người mẹ thường vất vả, sức khỏe mẹ cần được quan tâm.');
    if (ls.nhom[2] < 3) out.push('Thiếu Tài tinh (buổi 21): ít ý thức quản lý tiền bạc, hay phát sinh vấn đề với người cha.');
    var tc = D.tangCan[0].thapThan;
    out.push('Chi ngày tàng ' + ttName(tc) + ': ' + (T.thapThanTru[tc].Ngày || 'phối ngẫu mang màu sắc của ' + ttName(tc) + '.'));
    ls.tuongTac.forEach(function (x) {
      if (x.tang === 'chi' && (x.a === 2 || x.b === 2) && lopQuanHe(x.q) === 'xau') out.push('Chi ngày bị ' + nhanQuanHe(x.q).toLowerCase() + ' với trụ ' + VI_TRI[x.a === 2 ? x.b : x.a] + ': ' + moTaQuanHe(x));
      if (x.tang === 'chi' && (x.a === 2 || x.b === 2) && x.q.loai === 'luchop') out.push('Chi ngày lục hợp với trụ ' + VI_TRI[x.a === 2 ? x.b : x.a] + ': cung phối ngẫu được hỗ trợ, gắn kết.');
    });
    var sao = [];
    ls.tru.forEach(function (t) { if (t) t.thanSat.forEach(function (s) { sao.push(s.ten); }); });
    ls.thanSatDacBiet.forEach(function (s) { sao.push(s.ten); });
    ['Đào Hoa', 'Hồng Loan', 'Thiên Hỷ', 'Hồng Diễm', 'Cô Thần', 'Quả Tú', 'Âm Dương Sai Thác', 'Cô Loan Sát'].forEach(function (k) {
      if (sao.indexOf(k) >= 0) out.push('<b>' + k + '</b>: ' + T.thanSat[k]);
    });
    return sec('hon-nhan', 'Tình cảm – Hôn nhân', li(out));
  }

  // ===== 10. Sự nghiệp & tài chính =====
  function suNghiep(ls) {
    var out = [], pct = ls.thapThan.pct, nhom = ls.nhom, vs = ls.vuongSuy;
    var ds = nhom.map(function (v, i) { return [v, i]; }).sort(function (a, b) { return b[0] - a[0]; });
    var motaNhom = [
      'Tỷ Kiếp mạnh: hợp làm chủ, tự do, đồng sáng lập, công việc khẳng định bản sắc; cẩn trọng hùn hạp.',
      'Thực Thương mạnh: kiếm sống bằng tài năng, sáng tạo, chuyên môn, sản phẩm của mình; tiền vận có thể thử – sai nhiều, hậu vận thuận.',
      'Tài tinh mạnh: nhạy tiền bạc, hợp kinh doanh, tài chính, quản lý nguồn lực.',
      'Quan Sát mạnh: hợp môi trường tổ chức, quản lý, kỷ luật, thăng tiến theo cấp bậc.',
      'Ấn tinh mạnh: hợp nghiên cứu, giáo dục, chuyên gia, công việc cần kiến thức và độ tin cậy.'];
    out.push(motaNhom[ds[0][1]]);
    out.push(motaNhom[ds[1][1]]);
    if ((pct[2] + pct[3]) > 12 && (pct[4] + pct[5]) > 12) out.push('Có cả Thực Thương lẫn Tài: biết làm ra sản phẩm và biết bán – có thể giúp người khác kiếm tiền, đưa ra tầm nhìn cho doanh nghiệp.');
    else if ((pct[2] + pct[3]) > 15 && (pct[4] + pct[5]) < 6) out.push('Nhiều ý tưởng sản xuất nhưng chưa chắc biết cách bán – nên kết hợp với người có Tài tinh (giỏi thương mại).');
    if (pct[8] > 8) out.push('Thiên Ấn: có khiếu dự đoán xu hướng bằng trực giác; muốn kinh doanh cần thêm Thực Thương, Tài và Quan hỗ trợ.');
    var thienTaiLo = ls.canLo.filter(function (k) { return k === 4; }).length + ls.tru.filter(function (t) { return t && t.tangCan[0].thapThan === 4; }).length;
    if (thienTaiLo >= 2) out.push('Có từ 2 Thiên Tài trở lên: trong đầu đã có ý tưởng buôn bán – nên bắt đầu với vốn nhỏ.');
    // Tài khố
    var dh = cs.CAN_HANH[ls.nhatChu];
    var chiKho = [10, 1, 4, 7, 10][dh]; // theo hành Nhật chủ 0 Mộc,1 Hỏa,2 Thổ,3 Kim,4 Thủy: Tuất, Sửu, Thìn, Mùi, Tuất
    var coKho = ls.tru.filter(function (t) { return t && t.chi === chiKho; });
    var vanKho = ls.daiVan.ds.filter(function (v) { return v.chi === chiKho; });
    if (coKho.length) {
      var thucThuong = pct[2] + pct[3], ct = pct[5] - pct[4];
      out.push('Có <b>Tài khố</b> ' + cs.CHI[chiKho] + ' (trụ ' + coKho.map(function (t) { return t.viTri; }).join(', ') + ', buổi 20): dễ giữ được tiền mình kiếm ra, và có thể giữ tiền cho người khác. ' +
        (thucThuong >= 15 ? 'Thực Thương nhiều nên lượng tiền kiếm được và giữ được đều lớn. ' : (thucThuong < 5 ? 'Thực Thương ít nên kiếm tiền khá vất vả, nhưng tích lũy được. ' : '')) +
        (ct > 3 ? 'Chính Tài trội hơn: đi làm (làm thuê) có lợi hơn tự kinh doanh. ' : (ct < -3 ? 'Thiên Tài trội hơn: hợp tự kinh doanh, buôn bán. ' : '')) +
        'Năm ' + cs.CHI[mod(chiKho + 6, 12)] + ' xung mở kho là năm thuận để kiếm tiền.' +
        (coKho.some(function (t) { return ls.khongVong.indexOf(t.chi) >= 0; }) ? ' Lưu ý: Tài khố rơi vào Không vong – cẩn thận mất tiền đột ngột.' : '') +
        (coKho.some(function (t) { return t.thanSat.some(function (z) { return z.ten === 'Kiếp Sát'; }); }) ? ' Tài khố gặp Kiếp sát – cẩn thận mất trộm, giữ kỹ chỗ cất tiền.' : ''));
    } else if (vanKho.length) out.push('Lá số gốc không có Tài khố (' + cs.CHI[chiKho] + '), nhưng gặp trong đại vận ' + vanKho.map(function (v) { return cs.CAN[v.can] + ' ' + cs.CHI[v.chi] + ' (từ ' + v.namBatDau + ')'; }).join(', ') + ' – giai đoạn đó dễ tích lũy hơn (buổi 20).');
    else if ((pct[4] + pct[5]) > 20) out.push('Tài nhiều nhưng không có Tài khố (' + cs.CHI[chiKho] + '): tiền vào nhiều thì ra cũng nhiều – nên có kỷ luật tiết kiệm (buổi 20).');
    if (nhom[2] > 30 && vs.score < 46) out.push('Tài nhiều mà thân nhược: “thấy tiền nhưng gánh không nổi” – ưu tiên xây năng lực, hợp tác, tránh ôm đồm.');
    if (vs.score >= 56 && nhom[2] < 10) out.push('Thân vượng mà Tài yếu: năng lực có thừa nhưng cần học cách định giá và thương mại hóa năng lực.');
    var g = ls.tru[3];
    if (g && (g.thapThanCan === 9 || g.tangCan[0].thapThan === 9)) out.push('Chính Ấn ở trụ giờ: khi đầu tư sẽ kiểm tra thông tin rất kỹ, hợp sản phẩm bền vững – an toàn.');
    var dt = ls.dungThan;
    out.push('Theo dụng thần ' + cs.HANH[dt.dung] + ': ' + T.hanh[dt.dung].nghe + '. Hỷ thần ' + cs.HANH[dt.hy] + ': ' + T.hanh[dt.hy].nghe + '.');
    out.push('Theo bản chất Nhật chủ ' + cs.CAN[ls.nhatChu] + ': ' + T.can[ls.nhatChu].congViec);
    return sec('su-nghiep', 'Sự nghiệp – Tài chính', li(out), 'Cả 10 thập thần đều có thể dùng để xét tài chính, không chỉ riêng Tài tinh.');
  }

  // ===== 11. Sức khỏe =====
  function sucKhoe(ls) {
    var pct = ls.nguHanh.pct, out = [];
    pct.forEach(function (v, i) {
      if (v >= 32) out.push(tagHanh(i) + ' thừa (' + v.toFixed(0) + '%): chú ý ' + T.hanh[i].coQuan.toLowerCase() + '; hành bị ' + cs.HANH[i] + ' khắc là ' + tagHanh(mod(i + 2, 5)) + ' (' + T.hanh[mod(i + 2, 5)].coQuan.toLowerCase() + ') cũng dễ bị ảnh hưởng.');
      else if (v < 7) out.push(tagHanh(i) + ' thiếu (' + v.toFixed(0) + '%): ' + T.hanh[i].coQuan.toLowerCase() + ' là điểm yếu tiềm ẩn; bổ sung bằng ' + T.hanh[i].hoatDong.toLowerCase() + '.');
    });
    var sao = [];
    ls.tru.forEach(function (t) { if (t) t.thanSat.forEach(function (s) { sao.push(s.ten); }); });
    if (sao.indexOf('Kình Dương') >= 0 || sao.indexOf('Kiếp Sát') >= 0) out.push('Có Kình Dương/Kiếp Sát: cẩn thận va chạm, dao kéo, phẫu thuật; các năm kích hoạt sao này nên chú ý an toàn.');
    if (ls.thapThan.pct[6] > 20) out.push('Thất Sát mạnh: kiểu “bình thường không bệnh, đùng phát phải cấp cứu” – nên khám định kỳ.');
    if (ls.nhom[4] > 8) out.push('Có Ấn tinh: khi ốm thường nhẹ hơn và dễ gặp người chỉ đúng cách chữa.');
    ls.tuongTac.forEach(function (x) { if (x.tang === 'chi' && (x.a === 1 || x.b === 1) && ['xung', 'pha', 'hai'].indexOf(x.q.loai) >= 0) out.push('Trụ tháng bị ' + nhanQuanHe(x.q).toLowerCase() + ': chú ý vùng lưng – thắt lưng.'); });
    if (!out.length) out.push('Ngũ hành tương đối cân bằng, không có điểm yếu sức khỏe nổi bật từ lá số; duy trì lối sống điều độ.');
    out.push('<i>Đây là gợi ý theo ngũ hành, không thay thế chẩn đoán y khoa.</i>');
    return sec('suc-khoe', 'Sức khỏe', li(out));
  }

  // ===== Vận hạn =====
  var LN_TT = [
    'Tỷ Kiên: năm tự chủ, khẳng định bản sắc; bạn bè – anh em xuất hiện nhiều, cạnh tranh ngang hàng, chi tiêu tăng.',
    'Kiếp Tài: năm cạnh tranh, mở rộng quan hệ; dễ hao tài vì bạn bè – hùn hạp, cần giữ tiền cẩn thận.',
    'Thực Thần: năm sáng tạo, hưởng thụ, ăn uống (dễ tăng cân); thuận học kỹ năng, làm sản phẩm; nữ: chuyện con cái.',
    'Thương Quan: năm bứt phá, thể hiện bản thân; dễ va chạm cấp trên – quy định, thị phi lời nói.',
    'Thiên Tài: năm cơ hội tiền bạc, đầu tư, buôn bán; nam: duyên tình cảm; cẩn trọng rủi ro.',
    'Chính Tài: năm thu nhập ổn định, chăm chỉ được đền đáp; nam: chuyện vợ, hôn nhân.',
    'Thất Sát: năm áp lực, trách nhiệm lớn, cạnh tranh gay gắt; chú ý sức khỏe đột ngột; nữ: tình cảm mãnh liệt.',
    'Chính Quan: năm được công nhận, thăng tiến, có danh vị – trách nhiệm; nữ: duyên chồng, hôn nhân.',
    'Thiên Ấn: năm học kiến thức đặc thù, trực giác mạnh, hướng nội; dễ cô độc, suy nghĩ nhiều.',
    'Chính Ấn: năm học hành, bằng cấp, được nâng đỡ; thuận nhà cửa – giấy tờ; sức khỏe được che chở.'
  ];
  var LV_TRU = { 0: 'gốc gác, cha mẹ, việc đi xa', 1: 'công việc, cấp trên, đồng nghiệp, đối tác', 2: 'bản thân và người hôn phối', 3: 'con cái, cấp dưới, sản phẩm, đầu tư' };

  function danhGiaTru(ls, s, b) {
    var d1 = BT.ls.diemHanh(ls, cs.CAN_HANH[s]);
    var d2 = 0;
    cs.TANG_CAN[b].forEach(function (tc) { d2 += BT.ls.diemHanh(ls, cs.CAN_HANH[tc[0]]) * tc[1]; });
    var qh = BT.ls.tuongTacVoiLaSo(ls, s, b), adj = 0;
    qh.forEach(function (x) {
      if (x.tang === 'tru') adj -= 1;
      else if (x.tang === 'chi' && ['xung', 'pha', 'hai', 'hinh', 'tuhinh'].indexOf(x.q.loai) >= 0) adj -= (x.b === 2 ? 0.6 : 0.35);
      else if (x.tang === 'chi' && x.q.loai === 'luchop') adj += BT.ls.diemHanh(ls, x.q.hanh) * 0.25;
    });
    var score = d1 * 0.8 + d2 * 1.2 + adj;
    var muc = score >= 2 ? ['Rất thuận', 'r-rt'] : score >= 0.7 ? ['Thuận', 'r-t'] : score > -0.7 ? ['Bình', 'r-b'] : score > -2.2 ? ['Trắc trở', 'r-k'] : ['Nhiều thử thách', 'r-x'];
    return { score: score, muc: muc[0], lop: muc[1], qh: qh };
  }

  function canChiSoVoiNgay(ls, s, b) {
    var D = ls.tru[2], hs = cs.CAN_HANH[s], hd = cs.CAN_HANH[D.can], r = mod(hs - hd, 5);
    var canHoa = s === D.can || cs.quanHeCan(s, D.can).some(function (q) { return q.loai === 'hop'; });
    var canKhac = (r === 2 || r === 3) && !canHoa;
    var qh = cs.quanHeChi(b, D.chi);
    var chiKhac = qh.some(function (q) { return ['xung', 'pha', 'hai', 'hinh', 'tuhinh'].indexOf(q.loai) >= 0; });
    var chiHop = !chiKhac && qh.some(function (q) { return q.loai === 'luchop' || q.loai === 'banhop'; });
    if (canHoa && chiKhac) return T.canChiSoSanh.hoaKhac;
    if (canKhac && chiHop) return T.canChiSoSanh.khacHoa;
    return '';
  }
  function laThapAc(ls, i) { return ls.thanSatDacBiet.some(function (z) { return z.ten === 'Thập Ác Đại Bại' && z.viTri === VI_TRI[i]; }); }
  function luanTruVan(ls, s, b, loai) {
    var d = ls.nhatChu, ttC = cs.thapThan(d, s), ttB = cs.thapThan(d, cs.TANG_CAN[b][0][0]);
    var dg = danhGiaTru(ls, s, b), out = [];
    var hc = cs.CAN_HANH[s], hb = cs.CHI_HANH[b];
    out.push('Thiên can ' + cs.CAN[s] + ' (' + tagHanh(hc) + ') là <b>' + ttName(ttC) + '</b> – ' + (BT.ls.diemHanh(ls, hc) > 0 ? 'thuộc hành có lợi' : (BT.ls.diemHanh(ls, hc) < 0 ? 'thuộc hành kỵ' : 'thuộc hành trung tính')) + '. ' + LN_TT[ttC]);
    out.push('Địa chi ' + cs.CHI[b] + ' (' + tagHanh(hb) + ') chủ khí là <b>' + ttName(ttB) + '</b> – ' + (BT.ls.diemHanh(ls, hb) > 0 ? 'có lợi' : (BT.ls.diemHanh(ls, hb) < 0 ? 'bất lợi' : 'trung tính')) + '. Địa chi tác động sâu và kéo dài hơn thiên can.');
    out.push('Nhật chủ ở ' + cs.CHI[b] + ': ' + T.truongSinh[cs.truongSinh(d, b)]);
    dg.qh.forEach(function (x) {
      var vt = VI_TRI[x.b], q = x.q;
      if (x.tang === 'tru') {
        if (q.loai === 'phucngam') out.push('<b>Phục ngâm trụ ' + vt + '</b>: ' + T.tru[vt].van + ' ' + T.phucNgamThem);
        else {
          out.push('<b>Phản ngâm (thiên khắc địa xung) trụ ' + vt + '</b> – liên quan ' + LV_TRU[x.b] + ': cảm xúc dễ hỗn loạn, gặp chuyện trái với tư tưởng và cảm nhận của mình, dễ “hoài nghi nhân sinh”. Nên có người hỗ trợ cân bằng cảm xúc và học cách linh hoạt trong suy nghĩ.');
          if (laThapAc(ls, x.b)) out.push(T.thapAcPhanNgam);
        }
        return;
      }
      if (x.tang === 'chi' && ['xung', 'pha', 'hai', 'hinh', 'tuhinh'].indexOf(q.loai) >= 0) {
        out.push('<b>' + nhanQuanHe(q) + ' trụ ' + vt + '</b> (' + cs.CHI[x.x] + '–' + cs.CHI[x.y] + '): ảnh hưởng ' + LV_TRU[x.b] + '. ' + moTaQuanHe(x) + (q.loai !== 'tuhinh' ? ' ' + T.tru[vt].van : ''));
        if (q.loai === 'xung' && laThapAc(ls, x.b)) out.push(T.thapAcPhanNgam);
        if (q.loai === 'xung' && x.b === 1 && coSao(ls.tru[1], 'Kình Dương')) out.push('<b>Xung chữ Dương Nhẫn</b> ở tháng sinh: dễ gặp tai nạn, sự cố trong giai đoạn này (buổi 22).');
      } else if (x.tang === 'chi' && q.loai === 'luchop') {
        out.push('<b>Lục hợp trụ ' + vt + '</b>: thuận hòa, gắn kết trong ' + LV_TRU[x.b] + '. ' + moTaQuanHe(x));
      } else if (x.tang === 'chi' && q.loai === 'banhop' && q.conTrungTam) {
        out.push('<b>Bán hợp ' + cs.HANH[q.hanh] + ' với trụ ' + vt + '</b>: khí ' + cs.HANH[q.hanh] + ' được tăng cường (' + (BT.ls.diemHanh(ls, q.hanh) >= 0 ? 'có lợi' : 'bất lợi') + ').');
      } else if (x.tang === 'can' && q.loai === 'hop') {
        out.push('<b>Can hợp với trụ ' + vt + '</b>: ' + moTaQuanHe(x));
      } else if (x.tang === 'can' && q.loai === 'xung') {
        out.push('<b>Can xung trụ ' + vt + '</b>: va chạm ở bề mặt trong ' + LV_TRU[x.b] + '.');
      }
    });
    // Không vong
    if (ls.khongVong.indexOf(b) >= 0) out.push('<b>Rơi vào Không vong</b>: kế hoạch dễ hụt hẫng, nên tránh đầu tư vào thứ vô hình, thiếu kiểm chứng.');
    var sao = BT.ts.saoTrenTru(ls, s, b, loai).map(function (x) { return x.ten; });
    if (sao.indexOf('Nguyên Thần') >= 0 && ls.tru.some(function (t) { return t && (t.chi === mod(b + 4, 12) || t.chi === mod(b + 8, 12)); })) out.push('<b>Nguyên Thần</b> gặp bán tam hợp trên lá số: chuyển thành may mắn bất ngờ (buổi 24).');
    var soNgay = canChiSoVoiNgay(ls, s, b);
    if (soNgay) out.push('So với trụ ngày (buổi 23): ' + soNgay);
    var tenVan = loai === 'Đại vận' ? 'Vận này' : 'Năm này';
    var dh = cs.CAN_HANH[d];
    // Ba nhóm địa chi (buổi 7): tương tác của chi vận/năm với chi ngày
    var Dc = ls.tru[2].chi, nD = nhomChi(Dc), nV = nhomChi(b);
    if (b !== Dc && nD === nV && !dg.qh.some(function (x) { return x.tang === 'chi' && x.b === 2 && x.q.loai === 'luchop'; })) out.push('<span class="tag-lv">Thay đổi</span> Chi ' + cs.CHI[b] + ' ' + T.nhomChiVan.cungNhom[nD] + '.');
    if (nD === 'sinh' && nV === 'mo') out.push('<span class="tag-lv">Tính khí</span> ' + T.nhomChiVan.sinhGapMo);
    if (nD === 'sinh' && nV === 'chinh') out.push('<span class="tag-lv">Tính khí</span> ' + T.nhomChiVan.sinhGapChinh);
    // Buổi 24: năm/vận xung (mạnh nhất), hình, hại chi ngày làm thấu căn yếu đi
    var vsx = ls.vuongSuy;
    if (vsx.thauCan && vsx.thauCan.length && !vsx.dacLenh) {
      var pham = dg.qh.filter(function (x) { return x.tang === 'chi' && x.b === 2 && ['xung', 'hai', 'hinh', 'pha'].indexOf(x.q.loai) >= 0; });
      if (pham.length) out.push('<span class="tag-lv">Sức lực</span> ' + tenVan + ' ' + pham.map(function (x) { return nhanQuanHe(x.q).toLowerCase(); }).join(', ') + ' chi ngày ' + cs.CHI[Dc] + ' – chính là chỗ thấu căn (gốc) của Nhật chủ, mà Nhật chủ lại không được lệnh tháng. Theo bài giảng, giai đoạn này dễ <b>mệt hơn</b>, sức chống đỡ giảm' + (pham.some(function (x) { return x.q.loai === 'xung'; }) ? ' (xung là nặng nhất)' : '') + '.');
    }
    // Tự hình: năm/vận xung với chữ tự hình là lúc học được bài học (buổi 15)
    var chisLS = ls.tru.filter(Boolean).map(function (t) { return t.chi; });
    Object.keys(T.tuHinhXung).forEach(function (k) {
      k = +k;
      if (chisLS.filter(function (c) { return c === k; }).length >= 2 && T.tuHinhXung[k] === b) out.push('<span class="tag-lv">Bài học</span> Lá số có ' + cs.CHI[k] + '–' + cs.CHI[k] + ' tự hình; ' + tenVan.toLowerCase() + ' gặp chữ ' + cs.CHI[b] + ' xung với nó – theo thầy là lúc <b>học được bài học thấm thía</b>, thay đổi nhiều về điều mình hay lặp lại.');
    });
    // Tình cảm theo sao phối ngẫu (buổi 25): nam xét Tài, nữ xét Quan Sát
    var nhomPN = ls.gioiTinh === 'nam' ? 2 : 3, hPN = cs.hanhCuaNhom(dh, nhomPN);
    var tenSao = (ls.gioiTinh === 'nam' ? 'Tài tinh' : 'Quan Sát') + ' – hành ' + cs.HANH[hPN];
    var tc = [];
    var khacPN = [hc, hb].filter(function (h) { return mod(hPN - h, 5) === 2; }), sinhPN = [hc, hb].filter(function (h) { return mod(hPN - h, 5) === 1 || h === hPN; });
    if (khacPN.length) {
      var t1 = T.saoPhoiNgau.khac.replace('{van}', tenVan.toLowerCase()).replace('{sao}', tenSao);
      var pctPN = ls.nhom[nhomPN];
      if (pctPN < 5 || pctPN > 30) t1 += ' <i>Sao phối ngẫu gốc của bạn ' + (pctPN < 5 ? 'khá ít' : 'khá nhiều') + ' (≈ ' + pctPN.toFixed(0) + '%) – cần lưu ý hơn.</i>';
      if (mod(hPN - hc, 5) === 2) t1 += ' Hành khắc nằm ngay thiên can – dễ lộ ra thành mâu thuẫn rõ ràng.';
      tc.push(t1);
    } else if (sinhPN.length) tc.push(T.saoPhoiNgau.sinh.replace('{van}', tenVan.toLowerCase()).replace('{sao}', tenSao));
    if (dg.qh.some(function (x) { return x.tang === 'chi' && x.b === 2 && x.q.loai === 'luchop'; })) {
      tc.push(T.saoPhoiNgau.nhiHop.replace('{van}', tenVan) + (sao.indexOf('Đào Hoa') >= 0 ? T.saoPhoiNgau.nhiHopDaoHoa : ''));
    }
    tc.forEach(function (x) { out.push('<span class="tag-lv">Tình cảm</span> ' + x); });
    // Thay đổi công việc (buổi 25): tương tác với trụ chứa Quan Sát
    var truQS = [];
    ls.tru.forEach(function (t, i) { if (t && (t.thapThanCan === 6 || t.thapThanCan === 7 || t.tangCan.some(function (z) { return z.thapThan === 6 || z.thapThan === 7; }))) truQS.push(i); });
    var cvHop = [], cvXung = [];
    dg.qh.forEach(function (x) {
      if (truQS.indexOf(x.b) < 0) return;
      if ((x.tang === 'chi' && x.q.loai === 'luchop') || (x.tang === 'can' && x.q.loai === 'hop')) cvHop.push(VI_TRI[x.b]);
      if (x.tang === 'chi' && ['xung', 'pha', 'hai'].indexOf(x.q.loai) >= 0) cvXung.push(nhanQuanHe(x.q).toLowerCase() + ' trụ ' + VI_TRI[x.b]);
    });
    var vuong = ls.vuongSuy.score >= 46;
    if (cvHop.length) out.push('<span class="tag-lv">Công việc</span> ' + T.congViec.hop.replace('{van}', tenVan).replace('{tru}', 'trụ ' + cvHop.filter(function (v, k, a) { return a.indexOf(v) === k; }).join(', ')) + (vuong ? '' : T.congViec.nhuoc));
    if (cvXung.length) out.push('<span class="tag-lv">Công việc</span> ' + T.congViec.xung.replace('{van}', tenVan).replace('{loai}', cvXung.join(', ')).replace(' trụ chứa Quan Sát ({tru})', ' (trụ chứa Quan Sát)') + (vuong ? T.congViec.vuong : T.congViec.nhuoc));
    // Học tập (buổi 25)
    var ht = [];
    if (T.hocTap[ttC]) ht.push(T.hocTap[ttC]);
    if (loai === 'Đại vận' && s === 4) ht.push(T.hocTap.mau);
    if (loai === 'Đại vận' && s === 5) ht.push(T.hocTap.ky);
    var saoHoc = sao.filter(function (x) { return ['Văn Xương', 'Học Đường', 'Từ Quán'].indexOf(x) >= 0; });
    if (saoHoc.length) ht.push(T.hocTap.sao.replace('{sao}', saoHoc.join(', ')) + (sao.indexOf('Dịch Mã') >= 0 ? T.hocTap.duHoc : ''));
    if ((ttC === 4 || ttC === 5) && ls.nhom[4] >= 4) ht.push(T.hocTap.anBiPha);
    ht.forEach(function (x) { out.push('<span class="tag-lv">Học tập</span> ' + x); });
    var saoTot = sao.filter(function (x) { return T.saoTot.indexOf(x) >= 0; }), saoXau = sao.filter(function (x) { return T.saoTot.indexOf(x) < 0 && x !== 'Không Vong'; });
    if (saoTot.length) out.push('Cát tinh kích hoạt: <b>' + saoTot.join(', ') + '</b>' + (saoTot.indexOf('Thiên Đức Quý Nhân') >= 0 || saoTot.indexOf('Nguyệt Đức Quý Nhân') >= 0 ? ' – người phối ngẫu hiền hòa hơn, tai họa giảm nhẹ.' : '.'));
    if (saoXau.length) out.push('Sao cần lưu ý: <b>' + saoXau.join(', ') + '</b>' + (saoXau.indexOf('Dịch Mã') >= 0 ? ' – có di chuyển, thay đổi.' : '') + (saoXau.indexOf('Đào Hoa') >= 0 ? ' – duyên tình cảm, sức hút tăng.' : '') + (saoXau.indexOf('Kiếp Sát') >= 0 ? ' – cẩn thận sự cố nhanh, mất mát.' : ''));
    return { dg: dg, out: out, ttC: ttC, ttB: ttB };
  }

  function daiVan(ls) {
    var dv = ls.daiVan, out = '';
    out += p('Đại vận đi <b>' + (dv.thuan ? 'thuận' : 'nghịch') + '</b> (' + (dv.thuan ? 'dương nam / âm nữ' : 'âm nam / dương nữ') + '). Khởi vận lúc <b>' + dv.nam + ' tuổi ' + dv.thang + ' tháng</b> (khoảng năm ' + (ls.input.y + Math.round(dv.tuoiKhoi)) + '), mỗi vận 10 năm. Thiên can quản 5 năm đầu, địa chi quản 5 năm sau nhưng tác động sâu suốt cả vận.');
    var nay = new Date().getFullYear();
    out += '<div class="dv-strip">';
    dv.ds.forEach(function (t, i) {
      var r = danhGiaTru(ls, t.can, t.chi);
      var den = t.namBatDau + 9, active = nay >= t.namBatDau && nay <= den;
      out += '<button class="dv-cell ' + r.lop + (active ? ' active' : '') + '" data-dv="' + i + '"><small>' + Math.floor(t.tuoiBatDau) + '–' + (Math.floor(t.tuoiBatDau) + 9) + ' tuổi</small><b>' + cs.CAN[t.can] + '<br>' + cs.CHI[t.chi] + '</b><small>' + cs.THAP_THAN_TAT[t.thapThanCan] + ' / ' + cs.THAP_THAN_TAT[t.tangCan[0].thapThan] + '</small><small>' + t.namBatDau + '</small><span class="muc">' + r.muc + '</span></button>';
    });
    out += '</div><div id="dv-chitiet"></div>';
    return sec('dai-van', 'Đại vận', out, 'Đánh giá dựa trên dụng – hỷ – kỵ thần và tương tác của vận với tứ trụ. Bấm vào từng vận để xem luận giải.');
  }
  function chiTietDaiVan(ls, i) {
    var t = ls.daiVan.ds[i], r = luanTruVan(ls, t.can, t.chi, 'Đại vận');
    var h = '<div class="ct"><h3>Đại vận ' + gz(t.can, t.chi) + ' · ' + Math.floor(t.tuoiBatDau) + '–' + (Math.floor(t.tuoiBatDau) + 9) + ' tuổi (' + t.namBatDau + '–' + (t.namBatDau + 9) + ') <span class="pill ' + r.dg.lop + '">' + r.dg.muc + '</span></h3>' + li(r.out);
    h += p('<i>' + t.napAm + '.</i> Trong 10 năm này, xu hướng chung mang màu sắc của <b>' + ttName(r.ttC) + '</b> (5 năm đầu) chuyển dần sang <b>' + ttName(r.ttB) + '</b> (5 năm sau).');
    // 5 cách can – chi áp vào đại vận (buổi 25)
    h += p(T.canChiVan[cachCanChi(t.can, t.chi)] + (T.canChiRieng[t.can + '-' + t.chi] ? ' ' + T.canChiRieng[t.can + '-' + t.chi] : ''));
    if (T.napAmTinhCach[t.napAm]) h += p('Nạp âm ' + t.napAm + ' – tính cách trong giai đoạn này: ' + T.napAmTinhCach[t.napAm] + '.');
    // Vận Quý (kế tiếp là Giáp) – thay đổi lớn
    if (t.can === 9) h += p(T.quyGiap + ' Ở đây vận Quý là <b>' + ttName(t.thapThanCan) + '</b> của bạn.');
    // Dụng thần có thể đổi theo đại vận (buổi 16)
    var pct = ls.nguHanh.pct, thua = [cs.CAN_HANH[t.can], cs.CHI_HANH[t.chi]].filter(function (x, k, a) { return a.indexOf(x) === k && pct[x] >= 28; });
    if (thua.length) h += p('<i>Lưu ý hỷ thần trong vận này:</i> ' + thua.map(function (x) { return cs.HANH[x]; }).join(', ') + ' vốn đã nhiều trong lá số (≥ 28%), vận này càng thêm – dễ thừa mứa. Thầy nói hỷ thần có thể thay đổi theo đại vận: giai đoạn này nên chú trọng hành làm hao bớt ' + thua.map(function (x) { return cs.HANH[x] + ' (' + cs.HANH[mod(x + 1, 5)] + ' hoặc ' + cs.HANH[mod(x - 2, 5)] + ')'; }).join(', ') + '.');
    return h + '</div>';
  }

  function tamTai(ls, chiNam) {
    var g = [0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1][ls.tru[0].chi];
    var tt = [[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 0, 1]][g];
    return tt.indexOf(chiNam) >= 0;
  }

  function luuNien(ls, nam) {
    var tn = BT.ls.truNam(nam), r = luanTruVan(ls, tn.can, tn.chi, 'Lưu niên');
    var dv = BT.ls.daiVanTaiNam(ls, nam);
    var h = '<h3>Năm ' + nam + ' – ' + gz(tn.can, tn.chi) + ' <span class="pill ' + r.dg.lop + '">' + r.dg.muc + '</span></h3>';
    h += p('Tuổi: ' + (nam - ls.input.y) + ' (tuổi mụ ' + (nam - ls.input.y + 1) + ')' + (dv ? ' · đang trong đại vận ' + gz(dv.can, dv.chi) + ' (' + ttName(dv.thapThanCan) + ')' : ' · chưa khởi đại vận (vận tiểu nhi)') + '.');
    var them = [];
    if (tamTai(ls, tn.chi)) them.push('<b>Năm Tam tai</b> theo chi năm sinh: nên thận trọng các việc lớn, giữ sức khỏe, tránh liều lĩnh.');
    if (dv) {
      var q = BT.ls.tuongTacVoiLaSo({ tru: [dv] }, tn.can, tn.chi).filter(function (x) { return x.tang !== 'can' || x.q.loai === 'xung'; });
      q.forEach(function (x) {
        if (x.tang === 'chi' && x.q.loai === 'xung') them.push('Lưu niên <b>xung đại vận</b> (' + cs.CHI[tn.chi] + '–' + cs.CHI[dv.chi] + '): năm bản lề, nhiều thay đổi trong xu hướng của cả vận.');
        if (x.tang === 'tru' && x.q.loai === 'phucngam') them.push('Lưu niên <b>phục ngâm đại vận</b>: tính chất của vận được nhân đôi trong năm này.');
      });
    }
    h += li(r.out.concat(them));
    // lưu nguyệt
    h += '<h4>Lưu nguyệt ' + nam + '</h4><div class="ln-month">';
    var mStart = mod((tn.can % 5) * 2 + 2, 10);
    var TEN_TH = ['Dần (~4/2)', 'Mão (~6/3)', 'Thìn (~5/4)', 'Tỵ (~5/5)', 'Ngọ (~6/6)', 'Mùi (~7/7)', 'Thân (~8/8)', 'Dậu (~8/9)', 'Tuất (~8/10)', 'Hợi (~7/11)', 'Tý (~7/12)', 'Sửu (~6/1 năm sau)'];
    for (var m = 0; m < 12; m++) {
      var s = mod(mStart + m, 10), b = mod(2 + m, 12), dg = danhGiaTru(ls, s, b);
      var ghi = dg.qh.filter(function (x) { return x.tang === 'tru' || (x.tang === 'chi' && ['xung', 'pha', 'hai'].indexOf(x.q.loai) >= 0); })
        .map(function (x) { return x.tang === 'tru' ? (x.q.loai === 'phucngam' ? 'Phục ngâm ' : 'Thiên khắc địa xung ') + VI_TRI[x.b] : nhanQuanHe(x.q) + ' ' + VI_TRI[x.b]; });
      h += '<div class="mcell ' + dg.lop + '"><small>Tháng ' + TEN_TH[m] + '</small><b>' + cs.CAN[s] + ' ' + cs.CHI[b] + '</b><small>' + cs.THAP_THAN_TAT[cs.thapThan(ls.nhatChu, s)] + '</small><span>' + dg.muc + '</span>' + (ghi.length ? '<em>' + ghi.join(', ') + '</em>' : '') + '</div>';
    }
    h += '</div>';
    return h;
  }
  function bangLuuNien(ls, tu) {
    var h = '<table class="tbl ln-tbl"><tr><th>Năm</th><th>Can chi</th><th>Tuổi</th><th>Thập thần</th><th>Tương tác chính</th><th>Đánh giá</th></tr>';
    for (var y = tu; y < tu + 12; y++) {
      var tn = BT.ls.truNam(y), dg = danhGiaTru(ls, tn.can, tn.chi);
      var ghi = dg.qh.filter(function (x) { return x.tang === 'tru' || (x.tang === 'chi' && ['xung', 'pha', 'hai', 'hinh', 'tuhinh', 'luchop'].indexOf(x.q.loai) >= 0); })
        .map(function (x) { return x.tang === 'tru' ? (x.q.loai === 'phucngam' ? 'Phục ngâm ' : 'TKĐX ') + VI_TRI[x.b] : nhanQuanHe(x.q) + ' ' + VI_TRI[x.b]; });
      if (tamTai(ls, tn.chi)) ghi.push('Tam tai');
      h += '<tr class="ln-row" data-y="' + y + '"><td>' + y + '</td><td>' + gz(tn.can, tn.chi) + '</td><td>' + (y - ls.input.y) + '</td><td>' + cs.THAP_THAN_TAT[cs.thapThan(ls.nhatChu, tn.can)] + ' / ' + cs.THAP_THAN_TAT[cs.thapThan(ls.nhatChu, cs.TANG_CAN[tn.chi][0][0])] + '</td><td>' + (ghi.join(', ') || '—') + '</td><td><span class="pill ' + dg.lop + '">' + dg.muc + '</span></td></tr>';
    }
    return h + '</table>';
  }
  function luuNienSec(ls) {
    var nay = new Date().getFullYear();
    var out = '<div class="ln-ctl"><label>Chọn năm <input type="number" id="ln-nam" value="' + nay + '" min="1900" max="2200"></label> <button id="ln-xem" class="btn">Xem</button></div><div id="ln-chitiet">' + luuNien(ls, nay) + '</div><h4>Bảng 12 năm</h4><div id="ln-bang">' + bangLuuNien(ls, nay - 1) + '</div>';
    return sec('luu-nien', 'Lưu niên & Lưu nguyệt', out, 'Lưu niên xung, phá, hại, hình với chi ngày dễ ảnh hưởng quan hệ hôn phối; với trụ tháng – công việc; trụ năm – gia đình, đi xa; trụ giờ – con cái. Bấm vào một dòng của bảng để xem chi tiết.');
  }

  function tatCa(ls) {
    return tongQuan(ls) + nhatChu(ls) + nguHanh(ls) + dungThan(ls) + thapThan(ls) + cachCuc(ls) + tuTru(ls) + thanSat(ls) + honNhan(ls) + suNghiep(ls) + sucKhoe(ls) + daiVan(ls) + luuNienSec(ls);
  }

  BT.lg = { danhGiaTru: danhGiaTru, nhanQuanHe: nhanQuanHe, tatCa: tatCa, chiTietDaiVan: chiTietDaiVan, luuNien: luuNien, bangLuuNien: bangLuuNien, gz: gz, tenCan: tenCan, tenChi: tenChi, xacDinhCachCuc: xacDinhCachCuc };
})();
