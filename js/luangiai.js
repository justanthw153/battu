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
      if (q.loai === 'hop') txt = T.canHop[k];
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
      txt = q.loai === 'phucngam' ? T.phucNgam : T.thienKhac;
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
      '<div><b>Cách cục</b><div class="big">' + cc.ten + '</div><small>' + (dt.cachDac ? 'Cách đặc biệt' : 'Theo lệnh tháng ' + cs.CHI[ls.tru[1].chi]) + '</small></div>' +
      '<div><b>Dụng / Hỷ thần</b><div class="big">' + tagHanh(dt.dung) + ' · ' + tagHanh(dt.hy) + '</div><small>Kỵ: ' + dt.ky.map(function (x) { return tagHanh(x); }).join(', ') + '</small></div>' +
      '</div>';
    var tom = [];
    tom.push('Bạn là người <b>' + c.ten + ' ' + cs.HANH[cs.CAN_HANH[d]] + '</b> (' + c.hinhTuong.toLowerCase() + '). ' + c.tinhCach.split('. ')[0] + '.');
    var nh = ls.nguHanh.pct.map(function (v, i) { return [v, i]; }).sort(function (a, b) { return b[0] - a[0]; });
    tom.push('Ngũ hành nổi trội nhất là ' + tagHanh(nh[0][1]) + ' (' + nh[0][0].toFixed(0) + '%), yếu nhất là ' + tagHanh(nh[4][1]) + ' (' + nh[4][0].toFixed(0) + '%). Hãy nhìn vào <b>sự chênh lệch</b> giữa các hành hơn là con số phần trăm tuyệt đối.');
    var ttTop = ls.thapThan.pct.map(function (v, i) { return [v, i]; }).sort(function (a, b) { return b[0] - a[0]; });
    tom.push('Thập thần chủ đạo: <b>' + ttName(ttTop[0][1]) + '</b> và <b>' + ttName(ttTop[1][1]) + '</b> – ' + T.thapThan[ttTop[0][1]].tuKhoa.toLowerCase() + '; ' + T.thapThan[ttTop[1][1]].tuKhoa.toLowerCase() + '.');
    tom.push(dt.lyDo);
    if (dt.dieuHau) tom.push(dt.dieuHau.ghiChu);
    return sec('tong-quan', 'Tổng quan lá số', h + li(tom));
  }

  // ===== 2. Nhật chủ & tính cách =====
  function nhatChu(ls) {
    var d = ls.nhatChu, c = T.can[d], D = ls.tru[2];
    var out = '';
    out += '<div class="kv"><div><h4>Tính cách</h4>' + p(c.tinhCach) + '</div><div><h4>Điểm mạnh</h4>' + p(c.diemManh) + '</div><div><h4>Thử thách</h4>' + p(c.thuThach) + '</div><div><h4>Lời khuyên</h4>' + p(c.loiKhuyen) + '</div></div>';
    // Can chi trụ ngày
    var hc = cs.CAN_HANH[D.can], hb = cs.CHI_HANH[D.chi], r = mod(hc - hb, 5), txt;
    if (r === 0) txt = T.canChi.dongHanh; else if (r === 1) txt = T.canChi.chiSinhCan; else if (r === 4) txt = T.canChi.canSinhChi;
    else if (r === 3) txt = T.canChi.canKhacChi; else txt = T.canChi.chiKhacCan;
    out += '<h4>Trụ ngày ' + gz(D.can, D.chi) + ' (' + D.napAm + ')</h4>';
    out += li([txt,
      'Nhật chủ ngồi trên ' + cs.CHI[D.chi] + ' ở trạng thái <b>' + cs.TRUONG_SINH[D.truongSinh] + '</b>: ' + T.truongSinh[D.truongSinh],
      'Cung phối ngẫu – ' + T.chiNgay[D.chi]]);
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
    out += '<h4>Nghề nghiệp hợp với bản chất ' + c.ten + '</h4>' + p(c.congViec);
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
  function dungThan(ls) {
    var vs = ls.vuongSuy, dt = ls.dungThan, d = ls.nhatChu, out = '';
    out += li([
      '<b>Đắc lệnh</b>: Nhật chủ ' + cs.HANH[cs.CAN_HANH[d]] + ' sinh tháng ' + cs.CHI[ls.tru[1].chi] + ' (' + cs.HANH[cs.CHI_HANH[ls.tru[1].chi]] + ') – trạng thái <b>' + vs.trangThaiLenh + '</b> → ' + (vs.dacLenh ? 'được mùa sinh trợ.' : 'không được mùa sinh trợ, cần sinh trợ từ Ấn/Tỷ Kiếp.'),
      '<b>Đắc địa</b> (gốc rễ trong địa chi): ' + (vs.goc.length ? vs.goc.map(function (g) { return g.chi + ' trụ ' + g.tru + ' (' + g.loai + ')'; }).join(', ') : 'không có gốc – Nhật chủ “lơ lửng”.'),
      '<b>Đắc thế</b> (thiên can trợ giúp): ' + vs.dacThe + ' can là Tỷ Kiếp/Ấn.',
      'Kết luận: <b>' + vs.muc + '</b> (chỉ số ' + vs.score.toFixed(0) + '). ' + (vs.score >= 56 ? 'Kết cấu tâm lý vững sẵn; Nhật chủ mạnh cần được khai thác, quản chế và phát huy – nếu thêm quá nhiều Ấn dễ trì trệ, thêm quá nhiều Tỷ Kiếp thì cái tôi quá cao.' : (vs.score < 46 ? 'Sức chịu đựng nội tại cần được bồi đắp qua học hỏi (Ấn) và bạn đồng hành (Tỷ Kiếp); tránh ôm quá nhiều việc cùng lúc.' : 'Khá cân bằng – linh hoạt theo vận.'))
    ]);
    if (dt.cachDac) out += p('<b>Cách đặc biệt: ' + dt.cachDac + '</b> – ' + T.cachCuc[dt.cachDac]);
    out += p(dt.lyDo);
    var bang = '<div class="dt-grid">';
    var muc = [['Dụng thần', dt.dung, 'Hành quan trọng nhất giúp lá số cân bằng.'], ['Hỷ thần', dt.hy, 'Hành hỗ trợ dụng thần – thường là những thứ bản năng bạn tự tìm đến (màu sắc, hoạt động khiến bạn dễ chịu).']];
    if (dt.dieuHau && dt.dieuHau.hanh !== dt.dung && dt.dieuHau.hanh !== dt.hy) muc.push(['Điều hậu', dt.dieuHau.hanh, dt.dieuHau.ghiChu]);
    muc.forEach(function (m) {
      var hh = T.hanh[m[1]];
      bang += '<div class="dt-card b-' + hk(m[1]) + '"><b>' + m[0] + ': ' + cs.HANH[m[1]] + '</b><small>' + m[2] + '</small><ul><li>Màu: ' + hh.mau + '</li><li>Hướng: ' + hh.huong + '</li><li>Hoạt động bổ sung: ' + hh.hoatDong + '</li><li>Ngành nghề: ' + hh.nghe + '</li></ul></div>';
    });
    bang += '</div>';
    out += bang;
    out += p('<b>Kỵ thần</b>: ' + dt.ky.map(function (x) { return tagHanh(x); }).join(', ') + ' – những năm/vận mang hành này nhiều thì dễ mất cân bằng; không cần né tránh tuyệt đối mà nên chủ động điều hòa bằng dụng – hỷ thần.');
    if (dt.nhan.length) out += p('<b>Nhàn thần</b>: ' + dt.nhan.map(function (x) { return tagHanh(x); }).join(', ') + ' – ảnh hưởng trung tính.');
    return sec('dung-than', 'Vượng suy & Dụng thần', out, 'Vượng suy Nhật chủ xét theo 3 tiêu chuẩn: đắc lệnh (mùa sinh), đắc địa (gốc ở địa chi), đắc thế (thiên can trợ giúp).');
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
    for (var n = 0; n < 5; n++) if (ls.nhom[n] < 4) thieu.push('<b>Thiếu ' + cs.NHOM[n] + '</b>: ' + [T.thapThan[0].thieu, T.thapThan[2].thieu, T.thapThan[5].thieu, T.thapThan[7].thieu, T.thapThan[9].thieu][n]);
    if (thieu.length) out += '<h4>Thập thần khuyết</h4>' + li(thieu);
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

  // ===== 6. Cách cục =====
  function xacDinhCachCuc(ls) {
    var dt = ls.dungThan;
    if (dt.cachDac) return { ten: dt.cachDac + ' cách', moTa: T.cachCuc[dt.cachDac] };
    var M = ls.tru[1], d = ls.nhatChu;
    var main = M.tangCan[0];
    if (cs.truongSinh(d, M.chi) === 3) return { ten: 'Kiến Lộc cách', moTa: T.cachCuc['Kiến Lộc cách'] };
    if (cs.truongSinh(d, M.chi) === 4 && d % 2 === 0) return { ten: 'Dương Nhận cách', moTa: T.cachCuc['Dương Nhận cách'] };
    // ưu tiên tàng can tháng lộ ra thiên can
    var lo = M.tangCan.filter(function (tc) { return ls.tru.some(function (t, i) { return t && i !== 2 && t.can === tc.can; }); });
    var chon = lo.length ? lo[0] : main;
    var tt = chon.thapThan;
    if (tt === 0 || tt === 1) { // Tỷ kiếp: dùng tàng can khác
      var khac = M.tangCan.filter(function (tc) { return tc.thapThan > 1; });
      if (khac.length) tt = khac[0].thapThan; else return { ten: 'Kiến Lộc cách', moTa: T.cachCuc['Kiến Lộc cách'] };
    }
    var ten = ttName(tt) + ' cách';
    return { ten: ten, moTa: T.cachCuc[ten] || '' };
  }
  function toHop(ls) {
    var pct = ls.thapThan.pct, lo = ls.canLo, vs = ls.vuongSuy, r = [];
    var co = function (k, n) { return pct[k] >= (n || 6); };
    var coLo = function (k) { return lo.indexOf(k) >= 0; };
    if (co(6) && (co(8) || co(9)) && vs.score < 60) r.push(T.toHop.satAn);
    if (co(2) && co(6)) r.push(T.toHop.thucCheSat);
    if (co(3) && (co(9) || co(8))) r.push(T.toHop.thuongBoiAn);
    if (coLo(3) && coLo(7)) r.push(T.toHop.thuongKienQuan);
    if ((co(4) || co(5)) && (co(7) || co(6))) r.push(T.toHop.taiSinhQuan);
    if ((co(2) || co(3)) && (co(4) || co(5))) r.push(T.toHop.thucSinhTai);
    var kieu = coLo(8) && (coLo(2) || ls.tru.some(function (t) { return t && t.thapThanCan === 8 && t.tangCan[0].thapThan === 2; }));
    if (kieu) r.push(T.toHop.kieuDoatThuc);
    if (coLo(1) && (co(4) || co(5))) r.push(T.toHop.kiepDoatTai);
    if ((pct[4] + pct[5]) > 25 && (pct[8] + pct[9]) > 4 && (pct[8] + pct[9]) < 15) r.push(T.toHop.taiPhaAn);
    if (coLo(6) && coLo(7)) r.push(T.toHop.quanSatHonTap);
    if (ls.nhom[2] > 30 && vs.score < 46) r.push(T.toHop.taiDaThanNhuoc);
    if (vs.score >= 56 && ls.nhom[4] > 25) r.push(T.toHop.thanVuongThemAn);
    if (vs.score >= 56 && ls.nhom[0] > 30) r.push(T.toHop.thanVuongThemKiep);
    return r;
  }
  function cachCuc(ls) {
    var cc = xacDinhCachCuc(ls), out = p('<b>' + cc.ten + '</b>: ' + cc.moTa);
    var th = toHop(ls);
    if (th.length) out += '<h4>Các tổ hợp thập thần trong lá số</h4>' + li(th);
    return sec('cach-cuc', 'Cách cục & Tổ hợp', out, 'Cách cục chính lấy theo khí chủ đạo của lệnh tháng (ưu tiên tàng can lộ ra thiên can).');
  }

  // ===== 7. Tứ trụ & tương tác =====
  function tuTru(ls) {
    var out = '';
    ls.tru.forEach(function (t, i) {
      if (!t) return;
      var ti = T.tru[VI_TRI[i]];
      var hc = cs.CAN_HANH[t.can], hb = cs.CHI_HANH[t.chi], r = mod(hc - hb, 5);
      var rel = ['Can chi tương đồng', 'Chi sinh Can', 'Chi khắc Can', 'Can khắc Chi', 'Can sinh Chi'][r];
      out += '<div class="tru-luan"><h4>Trụ ' + VI_TRI[i] + ': ' + gz(t.can, t.chi) + ' <small>' + t.napAm + ' · ' + rel + '</small></h4>' + p(ti.yNghia) +
        p('Thiên can ' + cs.CAN[t.can] + (i === 2 ? ' (Nhật chủ)' : ' là <b>' + ttName(t.thapThanCan) + '</b>') + '; địa chi ' + cs.CHI[t.chi] + ' tàng ' + t.tangCan.map(function (tc) { return cs.CAN[tc.can] + ' (' + cs.THAP_THAN_TAT[tc.thapThan] + ')'; }).join(', ') + '. Nhật chủ tại đây: ' + cs.TRUONG_SINH[t.truongSinh] + '.') + '</div>';
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
      out += p('<i>Xung, phá, hại, hình mang đến rắc rối nhưng cũng tạo ra sự phát triển nội lực và cơ hội; kết quả tồi tệ hay chuyển hóa thành cơ hội tùy vào thái độ nhìn nhận và cách đón nhận của mình.</i>');
    } else out += p('Các trụ không có xung – hợp – hình – hại đáng kể: cuộc sống nội tại tương đối êm, biến động chủ yếu đến từ đại vận và lưu niên.');
    return sec('tu-tru', 'Tứ trụ & Tương tác can chi', out);
  }

  // ===== 8. Thần sát =====
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
    if (tot.length) out += '<h4>Cát tinh – quý nhân</h4>' + li(tot);
    if (xau.length) out += '<h4>Sao cần lưu ý</h4>' + li(xau);
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
    out.push('Cung phối ngẫu (chi ngày) ' + T.chiNgay[D.chi]);
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
    var dh = cs.CAN_HANH[ls.nhatChu], taiH = mod(dh + 2, 5);
    var kho = { 4: 4, 10: 1, 1: 3, 7: 0 }; // Thìn kho Thủy, Tuất kho Hỏa, Sửu kho Kim, Mùi kho Mộc
    var coKho = ls.tru.filter(function (t) { return t && kho[t.chi] === taiH; });
    if (coKho.length) out.push('Có <b>Tài khố</b> (' + coKho.map(function (t) { return cs.CHI[t.chi] + ' trụ ' + t.viTri; }).join(', ') + '): dễ giữ được tiền mình kiếm ra, và có thể giữ tiền cho người khác.');
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
        if (q.loai === 'phucngam') out.push('<b>Phục ngâm trụ ' + vt + '</b>: ' + T.tru[vt].van + ' Đây cũng là thời điểm tự phản tỉnh mạnh mẽ.');
        else out.push('<b>Thiên khắc địa xung trụ ' + vt + '</b>: biến động mạnh liên quan ' + LV_TRU[x.b] + '.');
        return;
      }
      if (x.tang === 'chi' && ['xung', 'pha', 'hai', 'hinh', 'tuhinh'].indexOf(q.loai) >= 0) {
        out.push('<b>' + nhanQuanHe(q) + ' trụ ' + vt + '</b> (' + cs.CHI[x.x] + '–' + cs.CHI[x.y] + '): ảnh hưởng ' + LV_TRU[x.b] + '. ' + moTaQuanHe(x) + (q.loai !== 'tuhinh' ? ' ' + T.tru[vt].van : ''));
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
    if (cs.CHI_HANH[t.chi] !== cs.CAN_HANH[t.can]) {
      var rel = mod(cs.CAN_HANH[t.can] - cs.CHI_HANH[t.chi], 5);
      if (rel === 1) h += p('Vận <b>chi sinh can</b>: giai đoạn có xu hướng mang nguồn lực của mình ra ngoài chia sẻ, cung cấp để tìm cơ hội – dễ gặp may bất ngờ.');
      if (rel === 2 || rel === 3) h += p('Vận can chi tương khắc: trong – ngoài giằng co, kết quả phụ thuộc nhiều vào thái độ ứng xử.');
    }
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
