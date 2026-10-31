// So sánh hợp – khắc giữa hai lá số (hôn phối, làm ăn, bạn bè – đồng nghiệp, cha mẹ – con)
(function () {
  var cs = BT.cs, T = BT.tt, mod = cs.mod;

  var LOAI = {
    honphoi: { ten: 'Hôn phối – tình cảm', w: { nhatCan: 1.2, chiNgay: 1.6, chiNam: 0.8, boTro: 1.3, thapThan: 1.3, thanSat: 1, napAm: 0.4 } },
    laman: { ten: 'Làm ăn – hợp tác', w: { nhatCan: 1, chiNgay: 0.7, chiNam: 0.8, boTro: 1.5, thapThan: 1.4, thanSat: 1.2, napAm: 0.3 } },
    banbe: { ten: 'Bạn bè – đồng nghiệp', w: { nhatCan: 1.2, chiNgay: 0.8, chiNam: 1, boTro: 1, thapThan: 1, thanSat: 0.8, napAm: 0.3 } },
    chacon: { ten: 'Cha mẹ – con cái', w: { nhatCan: 1, chiNgay: 0.6, chiNam: 1.2, boTro: 1.3, thapThan: 1, thanSat: 0.7, napAm: 0.4 } }
  };

  function hanhNapAm(ten) { return cs.HANH.indexOf(ten.split(' ').pop()); }
  function tenNguoi(ls, mac) { return String(ls.ten || mac).replace(/[&<>"']/g, function (c) { return '&#' + c.charCodeAt(0) + ';'; }); }
  function relHanh(a, b) { // quan hệ hành a với hành b
    var r = mod(b - a, 5);
    return ['đồng hành', 'a sinh b', 'a khắc b', 'b khắc a', 'b sinh a'][r];
  }

  // Ý nghĩa thập thần (người kia là gì đối với mình) theo loại quan hệ
  var TT_QH = {
    honphoi: {
      0: [0, 'ngang hàng như bạn bè – hiểu nhau, nhưng dễ tranh phần thắng, ai cũng muốn giữ cái tôi'],
      1: [-1, 'vừa thân vừa cạnh tranh – dễ tranh quyền, hao tài vì nhau'],
      2: [1, 'mang lại sự thoải mái, hưởng thụ, được chăm sóc và thấu hiểu cảm xúc'],
      3: [-0.5, 'kích thích sáng tạo nhưng hay tranh luận, nói thẳng làm tổn thương nhau'],
      4: [0.5, 'hấp dẫn, vui vẻ, nhiều cảm xúc nhưng kém ổn định'],
      5: [1.5, 'tượng của người vợ (với nam) – thực tế, chăm lo, giúp quản lý cuộc sống'],
      6: [-0.5, 'sức hút mạnh nhưng nhiều áp lực, người kia có xu hướng áp đặt'],
      7: [1.5, 'tượng của người chồng (với nữ) – đứng đắn, trách nhiệm, tạo khuôn khổ ổn định'],
      8: [0, 'bảo bọc theo kiểu riêng, hiểu ngầm nhưng đôi khi khó đoán'],
      9: [1, 'che chở, bao dung, nuôi dưỡng – như một điểm tựa tinh thần']
    },
    laman: {
      0: [0.5, 'đồng đội ngang hàng – cùng chí hướng, hợp tác được nếu phân quyền rõ'],
      1: [-1, 'đối tác dễ thành đối thủ – cẩn trọng chia lợi nhuận, tách bạch tài chính'],
      2: [1, 'người giúp hiện thực hóa ý tưởng, làm ra sản phẩm, đánh giá tinh tế'],
      3: [0.5, 'người phá cách, mở thị trường mới – cần khung để không vượt quy tắc'],
      4: [1.5, 'người mang lại cơ hội tiền bạc, khách hàng, nhìn ra dòng tiền'],
      5: [1.5, 'người quản lý tài chính chắc chắn, giúp giữ tiền'],
      6: [-0.5, 'người tạo áp lực, đòi hỏi cao – có thể là sếp khắt khe hoặc đối thủ mạnh'],
      7: [1, 'người mang lại uy tín, hệ thống, kỷ luật và quan hệ chính thống'],
      8: [0.5, 'cố vấn có trực giác, nhìn xu hướng – nhưng ít hành động'],
      9: [1, 'quý nhân nâng đỡ, cung cấp kiến thức, giấy phép, sự bảo trợ']
    }
  };
  TT_QH.banbe = TT_QH.laman;
  TT_QH.chacon = TT_QH.honphoi;

  function ttQH(loai, k) { return TT_QH[loai][k]; }

  function chamChi(a, b) { // điểm & mô tả quan hệ hai địa chi
    var qs = cs.quanHeChi(a, b), d = 0, txt = [];
    if (a === b) { d += TU_HINH(a) ? -0.5 : 0.5; txt.push(TU_HINH(a) ? cs.CHI[a] + ' tự hình: ' + T.tuHinh : 'Cùng chi ' + cs.CHI[a] + ': giống nhau nhiều, dễ hiểu nhau nhưng cũng dễ “soi” khuyết điểm của nhau.'); }
    qs.forEach(function (q) {
      var k = cs.key(a, b);
      if (q.loai === 'luchop') { d += 2; txt.push('Lục hợp – ' + T.lucHop[k]); }
      else if (q.loai === 'banhop') { d += q.conTrungTam ? 1.5 : 0.8; txt.push((q.conTrungTam ? 'Bán tam hợp ' : 'Củng hợp ') + cs.HANH[q.hanh] + ': cùng hướng, hỗ trợ nhau, dễ chung mục tiêu.'); }
      else if (q.loai === 'xung') { d -= 2; txt.push('Lục xung – ' + T.xung[k]); }
      else if (q.loai === 'hai') { d -= 1.5; txt.push('Lục hại – ' + T.hai[k]); }
      else if (q.loai === 'pha') { d -= 1; txt.push('Lục phá – ' + T.pha[k]); }
      else if (q.loai === 'hinh') { d -= 1.2; txt.push('Tương hình – ' + T.hinh[q.ten]); }
    });
    if (!txt.length) txt.push(cs.CHI[a] + ' – ' + cs.CHI[b] + ': không xung không hợp, quan hệ trung tính ở tầng này.');
    return { d: d, txt: txt };
  }
  function TU_HINH(b) { return [4, 6, 9, 11].indexOf(b) >= 0; }

  function soSanh(A, B, loai) {
    var W = LOAI[loai].w, nA = tenNguoi(A, 'Người A'), nB = tenNguoi(B, 'Người B');
    var muc = []; // {ten, diem(-2..2), w, chiTiet[]}

    // 1. Nhật can
    var a = A.nhatChu, b = B.nhatChu, ha = cs.CAN_HANH[a], hb = cs.CAN_HANH[b];
    var nc = { ten: 'Nhật chủ (tính cách cốt lõi)', d: 0, ct: [] };
    var rel = relHanh(ha, hb);
    nc.ct.push(nA + ' là ' + cs.CAN[a] + ' ' + cs.HANH[ha] + ', ' + nB + ' là ' + cs.CAN[b] + ' ' + cs.HANH[hb] + '.');
    if (cs.quanHeCan(a, b).some(function (q) { return q.loai === 'hop'; })) { nc.d = 2; nc.ct.push('<b>Thiên can ngũ hợp</b> – sức hút tự nhiên rất mạnh, như “nam châm”. ' + T.canHop[cs.key(a, b)]); }
    else if (cs.quanHeCan(a, b).some(function (q) { return q.loai === 'xung'; })) { nc.d = -1.5; nc.ct.push('<b>Thiên can xung</b> – quan điểm sống trái chiều, dễ va chạm trực diện; cần học cách tôn trọng khác biệt.'); }
    else if (rel === 'a sinh b') { nc.d = 1; nc.ct.push(cs.HANH[ha] + ' sinh ' + cs.HANH[hb] + ': ' + nA + ' có xu hướng cho đi, nuôi dưỡng, nâng đỡ ' + nB + '.'); }
    else if (rel === 'b sinh a') { nc.d = 1; nc.ct.push(cs.HANH[hb] + ' sinh ' + cs.HANH[ha] + ': ' + nB + ' có xu hướng cho đi, nuôi dưỡng, nâng đỡ ' + nA + '.'); }
    else if (rel === 'đồng hành') { nc.d = 0.5; nc.ct.push('Cùng hành: hiểu nhau nhanh, cùng cách nghĩ – nhưng thiếu bổ sung, dễ cạnh tranh khi cùng muốn dẫn dắt.'); }
    else if (rel === 'a khắc b') { nc.d = -0.5; nc.ct.push(cs.HANH[ha] + ' khắc ' + cs.HANH[hb] + ': ' + nA + ' dễ áp đặt, kiểm soát ' + nB + '; nếu khéo thì đây là sự định hướng, nếu không sẽ thành áp lực.'); }
    else { nc.d = -0.5; nc.ct.push(cs.HANH[hb] + ' khắc ' + cs.HANH[ha] + ': ' + nB + ' dễ áp đặt, kiểm soát ' + nA + '; nếu khéo thì đây là sự định hướng, nếu không sẽ thành áp lực.'); }
    nc.w = W.nhatCan; muc.push(nc);

    // 2. Chi ngày (cung phối ngẫu – cách sống chung)
    var cn = chamChi(A.tru[2].chi, B.tru[2].chi);
    var mcN = { ten: loai === 'honphoi' ? 'Cung phối ngẫu (chi ngày)' : 'Chi ngày (cách sống, thói quen thường ngày)', d: Math.max(-2, Math.min(2, cn.d)), w: W.chiNgay, ct: cn.txt.slice() };
    var ttDay = A.tru[2].can === B.tru[2].can && A.tru[2].chi === B.tru[2].chi;
    if (ttDay) { mcN.d -= 0.5; mcN.ct.push('Trụ ngày trùng nhau (phục ngâm): ' + T.phucNgam); }
    if (mod(A.tru[2].can - B.tru[2].can, 10) === 6 || mod(B.tru[2].can - A.tru[2].can, 10) === 6) if (mod(A.tru[2].chi - B.tru[2].chi, 12) === 6) { mcN.d = -2; mcN.ct.push('<b>Thiên khắc địa xung giữa hai trụ ngày</b>: khác biệt rất lớn từ quan điểm đến lối sống – cần nhiều nỗ lực để dung hòa.'); }
    muc.push(mcN);

    // 3. Chi năm (tuổi)
    var cy = chamChi(A.tru[0].chi, B.tru[0].chi);
    muc.push({ ten: 'Tuổi (chi năm: ' + cs.CHI[A.tru[0].chi] + ' – ' + cs.CHI[B.tru[0].chi] + ')', d: Math.max(-2, Math.min(2, cy.d)), w: W.chiNam, ct: cy.txt.concat(['Chi năm thể hiện gốc gác, gia đình hai bên và cách hòa nhập xã hội – ảnh hưởng tới quan hệ giữa hai gia đình/hai tập thể.']) });

    // 4. Bổ trợ ngũ hành (dụng thần)
    function boTro(X, Y, nX, nY) {
      var dt = X.dungThan, p = Y.nguHanh.pct, d = 0, ct = [];
      var tot = p[dt.dung] + p[dt.hy], ky = dt.ky.reduce(function (s, h) { return s + p[h]; }, 0);
      d = (tot - ky) / 25;
      ct.push(nY + ' có ' + cs.HANH[dt.dung] + ' ' + p[dt.dung].toFixed(0) + '% và ' + cs.HANH[dt.hy] + ' ' + p[dt.hy].toFixed(0) + '% (dụng/hỷ thần của ' + nX + '); kỵ thần của ' + nX + ' (' + dt.ky.map(function (h) { return cs.HANH[h]; }).join(', ') + ') chiếm ' + ky.toFixed(0) + '%.');
      if (d > 0.4) ct.push('→ ' + nY + ' bổ sung đúng thứ ' + nX + ' đang thiếu – ở cạnh nhau ' + nX + ' thấy cân bằng, dễ chịu hơn.');
      else if (d < -0.4) ct.push('→ ' + nY + ' mang nhiều năng lượng mà ' + nX + ' đã thừa – dễ thấy mệt hoặc bị cuốn theo; cần khoảng riêng.');
      else ct.push('→ Mức bổ trợ trung bình.');
      return { d: Math.max(-2, Math.min(2, d)), ct: ct };
    }
    var b1 = boTro(A, B, nA, nB), b2 = boTro(B, A, nB, nA);
    var yeuA = A.nguHanh.pct.indexOf(Math.min.apply(null, A.nguHanh.pct)), yeuB = B.nguHanh.pct.indexOf(Math.min.apply(null, B.nguHanh.pct));
    var bt = { ten: 'Bổ trợ ngũ hành (dụng thần)', d: (b1.d + b2.d) / 2, w: W.boTro, ct: b1.ct.concat(b2.ct) };
    if (B.nguHanh.pct[yeuA] > 25) bt.ct.push(nB + ' mạnh ' + cs.HANH[yeuA] + ' – đúng hành yếu nhất của ' + nA + '.');
    if (A.nguHanh.pct[yeuB] > 25) bt.ct.push(nA + ' mạnh ' + cs.HANH[yeuB] + ' – đúng hành yếu nhất của ' + nB + '.');
    muc.push(bt);

    // 5. Thập thần chéo
    var kAB = cs.thapThan(a, b), kBA = cs.thapThan(b, a);
    var x1 = ttQH(loai, kAB), x2 = ttQH(loai, kBA);
    var tt = { ten: 'Vai trò của nhau (thập thần chéo)', d: (x1[0] + x2[0]) / 2, w: W.thapThan, ct: [] };
    tt.ct.push('Với ' + nA + ', ' + nB + ' là <b>' + cs.THAP_THAN[kAB] + '</b>: ' + x1[1] + '.');
    tt.ct.push('Với ' + nB + ', ' + nA + ' là <b>' + cs.THAP_THAN[kBA] + '</b>: ' + x2[1] + '.');
    if (loai === 'honphoi') {
      [[A, B, nA, nB], [B, A, nB, nA]].forEach(function (z) {
        var X = z[0], Y = z[1], sao = X.gioiTinh === 'nam' ? [4, 5] : [6, 7];
        var k = cs.thapThan(X.nhatChu, Y.nhatChu);
        var khiChi = cs.thapThan(X.nhatChu, Y.tru[2].tangCan[0].can);
        if (sao.indexOf(k) >= 0 || sao.indexOf(khiChi) >= 0) { tt.d += 0.4; tt.ct.push(z[3] + ' mang đúng “sao phối ngẫu” của ' + z[2] + ' (' + (X.gioiTinh === 'nam' ? 'Tài tinh' : 'Quan tinh') + ') – có cảm giác “đúng người”.'); }
      });
    }
    if (loai === 'laman') {
      var giup = function (X, Y) { var k = cs.thapThan(X.nhatChu, Y.nhatChu); return [2, 3, 4, 5, 7, 9].indexOf(k) >= 0; };
      if (giup(A, B) && giup(B, A)) tt.ct.push('Hai người bổ sung vai trò cho nhau – phù hợp chia việc: một người làm sản phẩm/chuyên môn, một người lo tiền/hệ thống.');
      if (kAB <= 1) tt.ct.push('Cùng hành (Tỷ Kiếp): nên ghi rõ tỷ lệ góp vốn, quyền quyết định và cách chia lợi nhuận ngay từ đầu.');
    }
    tt.d = Math.max(-2, Math.min(2, tt.d));
    muc.push(tt);

    // 6. Thần sát chéo
    var ts = { ten: 'Thần sát chéo (quý nhân, đào hoa…)', d: 0, w: W.thanSat, ct: [] };
    function saoCheo(X, Y, nX, nY) {
      var dsY = [Y.tru[0], Y.tru[2]];
      var sao = {};
      dsY.forEach(function (t) { BT.ts.saoTrenTru(X, t.can, t.chi, 'Đối phương').forEach(function (s) { sao[s.ten] = 1; }); });
      var tot = ['Thiên Ất Quý Nhân', 'Thái Cực Quý Nhân', 'Phúc Tinh Quý Nhân', 'Thiên Đức Quý Nhân', 'Nguyệt Đức Quý Nhân', 'Văn Xương', 'Lộc Thần', 'Quốc Ấn Quý Nhân'];
      var tinh = ['Đào Hoa', 'Hồng Loan', 'Thiên Hỷ', 'Hồng Diễm'];
      var xau = ['Kiếp Sát', 'Kình Dương', 'Tai Sát', 'Vong Thần', 'Cô Thần', 'Quả Tú', 'Không Vong', 'Nguyên Thần'];
      Object.keys(sao).forEach(function (k) {
        if (tot.indexOf(k) >= 0) { ts.d += 0.7; ts.ct.push(nY + ' rơi vào <b>' + k + '</b> của ' + nX + ': ' + nY + ' là quý nhân, hay giúp ' + nX + ' đúng lúc.'); }
        else if (tinh.indexOf(k) >= 0) { ts.d += loai === 'honphoi' ? 0.6 : 0.1; ts.ct.push(nY + ' kích hoạt <b>' + k + '</b> của ' + nX + ': ' + (loai === 'honphoi' ? 'tạo rung động, cảm giác hấp dẫn.' : 'tạo thiện cảm, dễ nói chuyện.')); }
        else if (xau.indexOf(k) >= 0) { ts.d -= 0.4; ts.ct.push(nY + ' kích hoạt <b>' + k + '</b> của ' + nX + ': ' + (T.thanSat[k] || '').split(';')[0] + '.'); }
      });
    }
    saoCheo(A, B, nA, nB); saoCheo(B, A, nB, nA);
    if (!ts.ct.length) ts.ct.push('Không có thần sát chéo đáng kể.');
    ts.d = Math.max(-2, Math.min(2, ts.d));
    muc.push(ts);

    // 7. Nạp âm năm sinh (dân gian)
    var na = hanhNapAm(A.tru[0].napAm), nb = hanhNapAm(B.tru[0].napAm), r2 = relHanh(na, nb);
    var napD = { 'đồng hành': 0.5, 'a sinh b': 1, 'b sinh a': 1, 'a khắc b': -1, 'b khắc a': -1 }[r2];
    muc.push({ ten: 'Mệnh nạp âm năm sinh (tham khảo dân gian)', d: napD, w: W.napAm, ct: [nA + ': ' + A.tru[0].napAm + ' (' + cs.HANH[na] + '), ' + nB + ': ' + B.tru[0].napAm + ' (' + cs.HANH[nb] + ') → ' + (napD > 0 ? 'tương sinh/tương hòa' : 'tương khắc') + '. Đây là cách xem phổ biến nhưng sơ lược, nên chỉ xem nhẹ so với các yếu tố trên.'] });

    // Tổng điểm
    var tong = 0, tongW = 0;
    muc.forEach(function (m) { tong += m.d * m.w; tongW += 2 * m.w; });
    var pct = Math.round(50 + 50 * tong / tongW);
    pct = Math.max(5, Math.min(97, pct));
    var ket = pct >= 75 ? ['Rất hợp', 'r-rt'] : pct >= 62 ? ['Khá hợp', 'r-t'] : pct >= 48 ? ['Trung bình – cần vun đắp', 'r-b'] : pct >= 35 ? ['Nhiều khác biệt', 'r-k'] : ['Khắc nhiều – cần nỗ lực lớn', 'r-x'];
    return { muc: muc, pct: pct, ket: ket, nA: nA, nB: nB, loai: loai };
  }

  function loiKhuyen(r) {
    var xau = r.muc.filter(function (m) { return m.d < -0.3; }).map(function (m) { return m.ten; });
    var tot = r.muc.filter(function (m) { return m.d > 0.6; }).map(function (m) { return m.ten; });
    var l = [];
    if (tot.length) l.push('Điểm tựa của mối quan hệ: ' + tot.join(', ') + '. Hãy dựa vào đây khi có mâu thuẫn.');
    if (xau.length) l.push('Điểm cần chú ý: ' + xau.join(', ') + '. Xung khắc không có nghĩa là không thể đi cùng – nó cho biết chỗ dễ va chạm để chủ động điều chỉnh. Kết quả tồi tệ hay chuyển hóa thành cơ hội tùy vào thái độ nhìn nhận và cách đón nhận của hai người.');
    if (r.loai === 'honphoi') l.push('Trong hôn nhân, hãy xem thêm lưu niên của cả hai: năm xung – phá – hại với chi ngày của một trong hai người thường là năm dễ căng thẳng – nên nhường nhau hơn vào những năm đó.');
    if (r.loai === 'laman') l.push('Trong làm ăn: thỏa thuận rõ bằng văn bản, phân vai theo thế mạnh thập thần của mỗi người, và tránh khởi sự việc lớn vào năm kỵ của cả hai.');
    return l;
  }

  function html(A, B, loai) {
    var r = soSanh(A, B, loai), cg = BT.lg.gz;
    var h = '<section class="card luan" id="hop-khac"><h2>Hợp – khắc: ' + r.nA + ' & ' + r.nB + '</h2><p class="mota">Loại quan hệ: ' + LOAI[loai].ten + '. Đánh giá theo 7 tầng, trọng số thay đổi theo loại quan hệ.</p>';
    h += '<div class="hk-head"><div class="hk-p"><b>' + r.nA + '</b><span>' + [0, 1, 2, 3].map(function (i) { return A.tru[i] ? cs.CAN[A.tru[i].can] + ' ' + cs.CHI[A.tru[i].chi] : '—'; }).join(' · ') + '</span></div>' +
      '<div class="hk-score ' + r.ket[1] + '"><b>' + r.pct + '%</b><span>' + r.ket[0] + '</span></div>' +
      '<div class="hk-p"><b>' + r.nB + '</b><span>' + [0, 1, 2, 3].map(function (i) { return B.tru[i] ? cs.CAN[B.tru[i].can] + ' ' + cs.CHI[B.tru[i].chi] : '—'; }).join(' · ') + '</span></div></div>';
    var TAT = ['Nhật chủ', loai === 'honphoi' ? 'Cung phối ngẫu' : 'Chi ngày', 'Tuổi', 'Bổ trợ ngũ hành', 'Vai trò của nhau', 'Thần sát chéo', 'Nạp âm'];
    var lopOf = function (d) { return d >= 1.2 ? 'r-rt' : d >= 0.4 ? 'r-t' : d > -0.4 ? 'r-b' : d > -1.2 ? 'r-k' : 'r-x'; };
    // Mục lục trong khung kết quả
    h += '<nav class="hk-toc"><a href="#hk-ls">Lá số ' + r.nB + '</a>' + r.muc.map(function (m, i) { return '<a href="#hk-' + i + '" class="' + lopOf(m.d) + '">' + TAT[i] + '</a>'; }).join('') + '<a href="#hk-lk">Lời khuyên</a></nav>';
    r.muc.forEach(function (m, i) {
      var lop = lopOf(m.d);
      var nhan = m.d >= 1.2 ? 'Rất hợp' : m.d >= 0.4 ? 'Hợp' : m.d > -0.4 ? 'Trung tính' : m.d > -1.2 ? 'Có va chạm' : 'Khắc';
      h += '<div class="hk-item" id="hk-' + i + '"><h4>' + (i + 1) + '. ' + m.ten + ' <span class="pill ' + lop + '">' + nhan + '</span></h4><ul>' + m.ct.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>';
    });
    h += '<h4 id="hk-lk">Lời khuyên</h4><ul>' + loiKhuyen(r).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
    h += '<p class="mota">Xem hợp tuổi chỉ để hiểu nhau hơn, không nên dùng để quyết định chia tay hay từ chối ai.</p></section>';
    return h;
  }

  BT.hh = { soSanh: soSanh, html: html, LOAI: LOAI };
})();
