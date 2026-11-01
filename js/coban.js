// Bản Cơ bản: mỗi ý gồm kết quả – vì sao – nên làm, dùng chung kết quả tính của lá số với bản Nâng cao
(function () {
  var cs = BT.cs, T = BT.tt, mod = cs.mod;

  var CAN = [
    { anh: 'cây đại thụ', kq: 'Bạn thẳng thắn, có lý tưởng, nhìn đường dài và không giữ thù lâu.', manh: 'Hay được người khác giới thiệu cơ hội, sẵn lòng giúp người.', luuY: 'Lời nói thẳng đôi khi vô tình làm người khác buồn; khi theo đuổi mục tiêu lớn dễ không nghe góp ý.', lam: 'Trước khi nói thẳng, tự hỏi điều đó có giúp được người kia không.' },
    { anh: 'cỏ cây, dây leo', kq: 'Bạn khéo léo, dễ kết nối và thích nghi rất nhanh.', manh: 'Phục hồi nhanh sau biến động; chăm chỉ mài giũa tay nghề.', luuY: 'Công việc, tiền bạc có lúc biến động đột ngột; sự tự tin dễ phụ thuộc vào ánh nhìn của người khác.', lam: 'Đầu tư vào tay nghề, vì đó là tài sản không ai lấy được.' },
    { anh: 'mặt trời', kq: 'Bạn nhiệt tình, cởi mở, hào phóng và thích làm người khác vui.', manh: 'Truyền cảm hứng tốt; biết dàn xếp để mọi việc đạt mục tiêu.', luuY: 'Dễ khắt khe với sai lầm của chính mình; bên ngoài cười nhưng bên trong có thể không vui.', lam: 'Cho phép mình sai và học từ cái sai.' },
    { anh: 'ngọn đèn, ngọn nến', kq: 'Bạn tập trung, tinh tế và có tiêu chuẩn rất cao.', manh: 'Làm ra thứ gì cũng có chất lượng; giỏi đặt mục tiêu và đi tới cùng.', luuY: 'Dễ khắt khe với mình và người khác, nóng vội, giữ cảm xúc trong lòng quá lâu.', lam: 'Giữ tiêu chuẩn cao nhưng chừa chỗ cho sự bao dung; tập trung vào từng việc một.' },
    { anh: 'núi lớn, đê đập', kq: 'Bạn vững vàng, biết xây nền tảng và muốn làm điều giúp ích cho người khác.', manh: 'Có lòng từ bi; đủ năng lực để chuyển hướng khi thấy không hợp.', luuY: 'Thời trẻ dễ “đứng núi này trông núi nọ”; đã kết luận thì khó nghĩ lại, hay so sánh.', lam: 'Trước khi đổi hướng, hỏi mình đang chạy trốn hay đang tiến tới.' },
    { anh: 'đất ruộng vườn', kq: 'Bạn biết nuôi dưỡng, tích lũy và thích chăm chút đời sống tinh thần.', manh: 'Suy nghĩ sâu, biết giữ, biết tích, là chỗ dựa về kiến thức cho người khác.', luuY: 'Dễ cần danh phận, giấy tờ để thấy mình được công nhận; lúc nóng dễ hiểu lầm người khác.', lam: 'Khi đang nóng, hoãn kết luận về người khác đến lúc đã dịu lại.' },
    { anh: 'kim loại thô, đao kiếm', kq: 'Bạn quyết đoán, coi trọng tự do và tự mình ra quyết định.', manh: 'Tiếp thu kỹ thuật nhanh, phân tích giỏi, biến ý tưởng thành việc cụ thể.', luuY: 'Người khác khó bước vào thế giới của bạn, nên có lúc thấy cô đơn dù đang ở cạnh người thân.', lam: 'Chủ động chia sẻ với người thân; tự do không có nghĩa là cô lập.' },
    { anh: 'trang sức, kim loại quý', kq: 'Bạn có chiều sâu tình cảm hơn vẻ ngoài và luôn cần một lý do rõ ràng để làm việc gì đó.', manh: 'Tạo được điểm nhấn, biết làm nổi bật giá trị; tiếp thu và phân tích nhanh.', luuY: 'Để tâm nhiều tới đánh giá của người khác, tự gò mình trong chuyện đúng sai.', lam: 'Đừng chờ đúng tuyệt đối mới làm; giá trị của bạn hiện ra khi bắt tay làm.' },
    { anh: 'sông lớn, biển cả', kq: 'Bạn thích tự do, linh hoạt và nhìn vấn đề từ nhiều góc.', manh: 'Giỏi tham mưu, điều phối, huy động nguồn lực của người xung quanh.', luuY: 'Nhịn để giữ hòa khí rồi bộc phát khi quá giới hạn; kỳ vọng cao nên người khác khó theo kịp.', lam: 'Nói chậm lại, chia nhỏ ý khi hướng dẫn người khác; xả áp lực đều đặn.' },
    { anh: 'mưa, sương, mạch nước ngầm', kq: 'Bạn giàu cảm xúc, trực giác mạnh và thích tìm hiểu câu chuyện phía sau sự việc.', manh: 'Thấu hiểu người khác, ra ngoài hay được thương và giúp đỡ; có khiếu viết, sáng tác.', luuY: 'Khi bất ổn cảm xúc dễ suy diễn, tưởng tượng người khác không thích mình.', lam: 'Viết nhật ký, gọi tên cảm xúc của mình trước khi kết luận về người khác.' }
  ];
  // Khi một hành quá nhiều và không có lợi: theo thứ tự Mộc, Hỏa, Thổ, Kim, Thủy
  var THUA = [
    'dễ cố chấp với quan điểm của mình, có lúc bốc đồng theo lý tưởng',
    'dễ nóng vội, khắt khe với bản thân và kiệt sức',
    'dễ nặng gánh trách nhiệm, bảo thủ, chọn an toàn quá mức',
    'dễ cứng nhắc, quá lý sự, khó để người khác bước vào thế giới của mình',
    'cảm xúc dễ dồn dập, có lúc muốn chống lại khuôn phép'
  ];
  // Theo thứ tự nhóm: tự chủ, sáng tạo, tiền bạc, trách nhiệm, học hỏi
  var NHOM = [
    { ten: 'tự chủ – bản sắc cá nhân', kq: 'Bạn làm tốt nhất khi được tự chủ và tự hào về việc mình làm.', lam: 'Hợp nghề tự do, đồng sáng lập, huấn luyện, bán hàng. Khi góp vốn với bạn bè, nên thỏa thuận tiền bạc thật rõ.' },
    { ten: 'sáng tạo – tài năng', kq: 'Bạn kiếm sống tốt bằng tài năng, ý tưởng và sản phẩm của chính mình.', lam: 'Hợp nghệ thuật, nội dung, ẩm thực, giảng dạy, công nghệ. Nên tự đặt hạn hoàn thành vì dễ cầu toàn, trì hoãn.' },
    { ten: 'cơ hội – tiền bạc', kq: 'Bạn nhạy với cơ hội, biết điều gì bán được và ai sẵn sàng trả tiền.', lam: 'Hợp kinh doanh, tài chính, bán hàng, quản lý. Nên đặt giới hạn rủi ro và tránh ôm nhiều việc cùng lúc.' },
    { ten: 'kỷ luật – trách nhiệm', kq: 'Bạn có kỷ luật, dám nhận trách nhiệm và có động lực thăng tiến.', lam: 'Hợp quản lý, hành chính nhân sự, luật, quân đội, y tế cấp cứu. Nên có thời gian xả áp lực vì dễ ôm việc.' },
    { ten: 'học hỏi – chuyên môn', kq: 'Bạn mạnh về học hỏi, tích lũy kiến thức và được tin tưởng nhờ chuyên môn.', lam: 'Hợp nghiên cứu, giáo dục, chuyên gia, tâm lý, y học. Nên biến kiến thức thành sản phẩm cụ thể, tránh học nhiều mà ít làm.' }
  ];
  var GIAI_DOAN = [
    { kq: 'có nhiều bạn bè, đối tác và cả cạnh tranh; tiền dễ ra nhanh.', lam: 'Thỏa thuận rõ ràng khi hợp tác, giữ một khoản dự phòng.' },
    { kq: 'hợp học kỹ năng, làm sản phẩm và thể hiện tài năng.', lam: 'Bắt tay làm một sản phẩm cụ thể; nếu thi cử thì nên chuẩn bị kỹ hơn.' },
    { kq: 'có nhiều cơ hội về việc làm và tiền bạc.', lam: 'Chuẩn bị sẵn hồ sơ, sản phẩm để đón cơ hội; cân nhắc kỹ trước khi xuống tiền.' },
    { kq: 'nhiều trách nhiệm, áp lực, đồng thời có cơ hội thăng tiến.', lam: 'Giữ sức khỏe, nắm rõ quy định và giấy tờ; đừng ôm quá sức.' },
    { kq: 'hợp học tập, tìm người thầy và nhìn lại bản thân.', lam: 'Đăng ký một khóa học hoặc tìm người cố vấn.' }
  ];

  function tag(h) { return '<span class="hanh h-' + ['moc', 'hoa', 'tho', 'kim', 'thuy'][h] + '">' + cs.HANH[h] + '</span>'; }
  function gz(c, b) { return tag(cs.CAN_HANH[c]).replace(cs.HANH[cs.CAN_HANH[c]], cs.CAN[c]) + ' ' + tag(cs.CHI_HANH[b]).replace(cs.HANH[cs.CHI_HANH[b]], cs.CHI[b]); }
  function nhomCua(k) { return Math.floor(k / 2); }
  var BAN_CHAT = ['lập trường rõ ràng, thích khởi xướng', 'ý chí, mục tiêu, khả năng biến ý tưởng thành việc cụ thể', 'kiên định, trách nhiệm, thích an toàn', 'nguyên tắc, dứt khoát, thích đưa việc đến kết quả', 'linh hoạt, thấu hiểu, trực giác'];
  var THIEU = ['ít thể hiện lập trường riêng, dễ dao động theo hoàn cảnh', 'cần nhiều thời gian hơn để biến ý tưởng thành việc cụ thể', 'hay vội, thiếu từ tốn, đổi lại khá linh hoạt', 'khó dứt khoát, chưa có nguyên tắc rõ ràng', 'ít linh hoạt, khó thấu hiểu góc nhìn khác'];
  var NHOM_NGAN = ['bản thân, bạn bè', 'sáng tạo, biểu đạt', 'tiền bạc, cơ hội', 'kỷ luật, trách nhiệm', 'học hỏi, che chở'];
  var THIEU_NHOM = ['khó nhận ra hình ảnh của mình trong mắt người khác, khó gắn kết sâu với bạn bè', 'khó diễn đạt suy nghĩ, ít nuôi dưỡng tài năng', 'ít để ý quản lý tiền, khó định giá việc mình làm', 'khó kiềm chế bản thân để theo kỷ luật', 'ít hứng thú học lý thuyết, khó tìm người thầy phù hợp'];
  var BU_NHOM = ['tìm cộng đồng hợp với mình', 'tập trình bày, nuôi một sở thích sáng tạo', 'học cách quản lý tiền và định giá', 'đặt nguyên tắc sống và giữ cam kết', 'học qua thực hành và dự án nhỏ'];
  var SAO_TOT = [
    ['Thiên Ất Quý Nhân', 'lúc khó khăn hay có người giúp; sao hóa giải mạnh nhất.'], ['Thiên Đức Quý Nhân', 'tính hiền đi, dễ được giúp đỡ, giảm nhẹ tai họa.'], ['Nguyệt Đức Quý Nhân', 'có phúc khí, sự cố thường giảm nhẹ.'], ['Tam Kỳ Quý Nhân', 'năng lực nổi bật, có tầm ảnh hưởng.'], ['Tam Đài Quý Nhân', 'thành tích cao, may mắn trong thi cử.'],
    ['Phúc Đức', 'dễ thấy đủ đầy, biến trở ngại thành nhân duyên.'], ['Phúc Tinh (ngày sinh)', 'trung niên có vận may về tiền, giỏi tạo quan hệ.'], ['Phúc Tinh Quý Nhân', 'khéo cư xử, có nhiều quan hệ tốt.'], ['Lộc Thần', 'có nhân duyên tốt, làm tốt thì được thưởng.'], ['Ngũ Phú', 'kiếm được tiền nhờ quan hệ với người có tài, có địa vị.'],
    ['Văn Xương', 'thông minh, thuận lợi học hành.'], ['Từ Quán', 'học một môn tới thông thạo.'], ['Học Đường', 'ham học, có khiếu viết và sáng tác.'], ['Quốc Ấn Quý Nhân', 'may mắn thăng tiến, nhưng dễ tự ái về công việc.'], ['Thái Cực Quý Nhân', 'ham học, được tôn trọng, có duyên huyền học.'],
    ['Tướng Tinh', 'có uy, khiến người khác nể.'], ['Lục Tú', 'có một tài năng ưu tú trong công việc.'], ['Nhật Quý', 'có đạo đức, được quý mến lâu dài.'], ['Đa Mưu', 'giỏi tư duy và chiến lược.'], ['Thiên Xá', 'gặp chuyện phạt, kiện thường được bỏ qua.'], ['Thiên Y', 'có bệnh hay tìm được thuốc hay, giỏi tìm giải pháp cho người khác.'],
    ['Hồng Loan', 'nói chuyện có duyên, người khác thích tâm sự với bạn.'], ['Thiên Hỷ', 'lạc quan, làm người khác an tâm.'], ['Kim Dư', 'hay được đưa đón, có duyên môi giới.']
  ];
  var SAO_XAU = [
    ['Thập Ác Đại Bại', 'có tài nhưng dễ bùng nổ khi nhịn quá lâu; không có nghĩa là người ác.'], ['Kình Dương', 'xông xáo, tiên phong; cẩn thận va chạm, thương tích.'], ['Kiếp Sát', 'thông minh, thiếu kiên nhẫn; cẩn thận sự cố nhanh như trộm, lừa.'], ['Thiên Ách – Thiên Sát', 'dễ bị đổ việc lên đầu, nhận quá nhiều trách nhiệm.'], ['Tai Sát', 'cẩn trọng khi di chuyển.'], ['Tức Thần', 'để ý đường hô hấp.'],
    ['Nguyên Thần', 'có giai đoạn lên xuống thất thường, dễ vướng thị phi hoặc hao tổn.'], ['Thiên La', 'dễ vướng việc dây dưa, tranh cãi.'], ['Địa Võng', 'dễ sa vào tình thế khó thoát ra.'], ['Thiên La Địa Võng (Thìn–Tuất)', 'hay thấy bị ràng buộc, nhưng kiên trì.'], ['Nhật Phá', 'dễ bất ổn trong gia đạo, nội bộ, hay cảnh giác.'], ['Thoái Thần', 'thăng tiến cực hơn người khác.'],
    ['Không Vong', 'khó kiểm soát việc của trụ đó; không phải là mất trụ.'], ['Thiên Không', 'dễ vỡ mộng nếu kỳ vọng quá cao; nên sống thực tế.'], ['Vong Thần', 'rất lý trí, có chiến lược; có lúc thấy hụt hẫng.'], ['Cô Thần', 'hay thấy chưa được thấu hiểu, cần không gian riêng.'], ['Quả Tú', 'hay thấy mình bị bỏ rơi.'], ['Cô Loan Sát', 'tình cảm dễ cô quạnh, nên chủ động vun đắp.'], ['Âm Dương Sai Thác', 'chuyện tình cảm thường khó như ý hoàn toàn.'],
    ['Đào Hoa', 'cuốn hút tự nhiên, nhưng dễ phức tạp chuyện tình cảm.'], ['Hồng Diễm', 'dễ thương, cởi mở, dễ rung động.'], ['Dịch Mã', 'hay di chuyển, thay đổi.'], ['Hoa Cái', 'thích nghiên cứu trừu tượng, tâm linh, hay ở một mình.'], ['Khôi Cang', 'thông minh, có uy, tính cương.'], ['Kim Thần', 'cương nghị, quyết đoán.']
  ];
  // Mỗi mục trùng tên và thứ tự với bản Nâng cao: là gì – kết quả – vì sao – nên làm
  function the(id, tieuDe, laGi, kq, viSao, lam, phu) {
    return '<article class="cb-the" id="cb-' + id + '"><h3>' + tieuDe + '</h3>' + (laGi ? '<p class="cb-lagi">' + laGi + '</p>' : '') + (phu || '') +
      '<p class="cb-kq">' + kq + '</p>' +
      (viSao ? '<div class="cb-dong"><b>Vì sao</b><p>' + viSao + '</p></div>' : '') +
      (lam ? '<div class="cb-dong"><b>Nên làm</b><p>' + lam + '</p></div>' : '') +
      '<button class="cb-link" data-toi="' + id + '">Xem giải thích chi tiết →</button></article>';
  }
  function coSao(ls, ten) { return ls.tru.some(function (t) { return t && t.thanSat.some(function (z) { return z.ten === ten; }); }); }
  function thanh(ten, v, lop) {
    return '<div class="cb-thanh"><span>' + ten + '</span><div class="cb-ray"><i class="' + lop + '" style="width:' + Math.max(v, 1).toFixed(1) + '%"></i></div><small>' + v.toFixed(0) + '%</small></div>';
  }
  function xepGiam(a) { return a.map(function (v, i) { return [v, i]; }).sort(function (x, y) { return y[0] - x[0]; }); }

  // ===== Tổng quan =====
  function tongQuan(ls) {
    var c = CAN[ls.nhatChu], dt = ls.dungThan, muc = [['tong-quan', 'Tổng quan'], ['nhat-chu', 'Nhật chủ'], ['ngu-hanh', 'Ngũ hành'], ['dung-than', 'Dụng thần'], ['thap-than', 'Thập thần'], ['tu-tru', 'Tứ trụ'], ['than-sat', 'Thần sát'], ['hon-nhan', 'Tình cảm'], ['su-nghiep', 'Sự nghiệp'], ['suc-khoe', 'Sức khỏe'], ['dai-van', 'Đại vận'], ['luu-nien', 'Lưu niên']];
    var nh = xepGiam(ls.nhom)[0][1];
    var ten = (ls.input.ten || '').replace(/[<>&"]/g, '');
    return '<section class="card cb-dau" id="cb-tong-quan"><h2>Tổng quan ' + (ten ? (/^lá số/i.test(ten) ? ten : 'lá số của ' + ten) : 'lá số') + '</h2>' + ngaySinh(ls) + bangTru(ls) +
      '<ul class="cb-tom"><li><b>Bạn là:</b> ' + cs.CAN[ls.nhatChu] + ' ' + cs.HANH[cs.CAN_HANH[ls.nhatChu]] + ' – ' + c.anh + '.</li>' +
      '<li><b>Sức của lá số:</b> ' + ls.vuongSuy.muc + '.</li>' +
      '<li><b>Hành nên tăng:</b> ' + tag(dt.dung) + ' (dụng thần). <b>Nên hạn chế:</b> ' + dt.ky.map(tag).join(', ') + '.</li>' +
      '<li><b>Thế mạnh nổi bật:</b> ' + NHOM[nh].ten + '.</li></ul>' +
      '<nav class="cb-muc">' + muc.map(function (m) { return '<a href="#cb-' + m[0] + '">' + m[1] + '</a>'; }).join('') + '</nav>' +
      '<div class="cb-hd"><button type="button" class="btn ghost" id="cb-luu">Lưu lá số</button><button type="button" class="btn ghost" id="cb-in">In / PDF</button></div>' +
      '<p class="cb-chu">Đây là xu hướng để tham khảo; lựa chọn của bạn mới là điều quyết định.</p></section>';
  }
  function ngaySinh(ls) {
    var i = ls.input, so = function (n) { return (n < 10 ? '0' : '') + n; };
    return '<p class="cb-ngay">Sinh ' + so(i.d) + '/' + so(i.m) + '/' + i.y + (i.khongGio ? ', không rõ giờ' : ', ' + so(i.h) + ':' + so(i.mi)) + ' · ' + (ls.gioiTinh === 'nam' ? 'Nam' : 'Nữ') + '</p>';
  }
  function bangTru(ls) {
    var ten = ['Năm', 'Tháng', 'Ngày', 'Giờ'], o = '';
    ls.tru.forEach(function (t, i) {
      o += '<div class="cb-tru' + (i === 2 ? ' la-ban' : '') + '"><small>' + ten[i] + (i === 2 ? ' (bạn)' : '') + '</small>' + (t ? '<b>' + gz(t.can, t.chi) + '</b>' : '<b>?</b>') + '</div>';
    });
    return '<div class="cb-tru-hang">' + o + '</div>';
  }

  // ===== Nhật chủ & Tính cách =====
  function banThan(ls) {
    var c = CAN[ls.nhatChu], ten = cs.CAN[ls.nhatChu];
    return the('nhat-chu', 'Nhật chủ & Tính cách', 'Nhật chủ là can của ngày sinh, đại diện cho chính bạn.',
      c.kq + '<span class="cb-y"><b>Điểm mạnh:</b> ' + c.manh + '</span><span class="cb-y"><b>Cần để ý:</b> ' + c.luuY + '</span>',
      'Bạn sinh vào ngày can ' + ten + ', mang hình ảnh ' + c.anh + '.', c.lam);
  }

  // ===== Ngũ hành =====
  function nguHanh(ls) {
    var pct = ls.nguHanh.pct, dt = ls.dungThan, xep = xepGiam(pct), nhieu = xep[0][1], it = xep[4][1], tot = [dt.dung].concat(dt.hy === undefined || dt.hy === null ? [] : dt.hy);
    var bars = '<div class="cb-thanh-nhom">' + pct.map(function (v, i) { return thanh(cs.HANH[i], v, 'f-' + ['moc', 'hoa', 'tho', 'kim', 'thuy'][i]); }).join('') + '</div>';
    var lam = tot.indexOf(it) >= 0 ? 'Hành ' + tag(it) + ' vừa ít vừa có lợi cho bạn, nên bổ sung: ' + T.hanh[it].hoatDong.toLowerCase() + '.'
      : (dt.ky.indexOf(it) >= 0 ? 'Hành ' + tag(it) + ' tuy ít nhưng chưa phải hành cần thêm, vì nó không có lợi cho lá số này. Hãy xem hành nên tăng ở mục Dụng thần ngay bên dưới.'
        : 'Có thể bổ sung nhẹ hành ' + tag(it) + ': ' + T.hanh[it].hoatDong.toLowerCase() + '. Hành ưu tiên nằm ở mục Dụng thần ngay bên dưới.');
    return the('ngu-hanh', 'Ngũ hành', 'Năm hành Mộc, Hỏa, Thổ, Kim, Thủy cho biết năng lượng nào trong bạn nhiều, năng lượng nào ít.',
      'Nổi bật nhất là hành ' + tag(nhieu) + ': ' + BAN_CHAT[nhieu] + '. Ít nhất là hành ' + tag(it) + ': ' + THIEU[it] + '.',
      'Mỗi can chi trong lá số mang một hành, cộng lại thành tỷ lệ trên. Điều đáng xem là độ chênh giữa các hành, không phải từng con số.', lam, bars);
  }

  // ===== Vượng suy & Dụng thần =====
  function viecTheoSuc(muc) {
    if (muc === 'Cực vượng') return 'Năng lượng của bạn dư nhiều: hãy nhận việc đủ lớn và thử thách đủ khó, vì nhàn quá dễ thành cố chấp, trì trệ.';
    if (muc === 'Thân vượng') return 'Bạn gánh được nhiều: hãy nhận thử thách và trách nhiệm để dùng hết sức.';
    if (muc.indexOf('nhược') >= 0) return 'Khi có thêm tiền bạc hay trách nhiệm lớn, nên có người đồng hành và chia bớt việc, tránh ôm đồm. Việc học và người thầy giúp bạn vững dần.';
    return 'Giai đoạn nhiều việc, nhiều áp lực thì giảm bớt; giai đoạn nhẹ hơn thì nhận thêm thử thách.';
  }
  function dungThan(ls) {
    var dt = ls.dungThan, pct = ls.nguHanh.pct, xep = xepGiam(pct), nhieu = xep[0][1], h = T.hanh[dt.dung], hy = [].concat(dt.hy === undefined || dt.hy === null ? [] : dt.hy);
    var yeu = ls.vuongSuy.muc.indexOf('nhược') >= 0, vuong = ls.vuongSuy.muc.indexOf('vượng') >= 0, dl = ls.vuongSuy.dacLenh;
    var sucLuc = yeu ? 'Bạn sinh vào mùa ' + (dl ? 'có hỗ trợ cho mình, nhưng các yếu tố khác đang rút sức' : 'không hỗ trợ cho mình') + ', nên cần được nâng đỡ.'
      : (vuong ? 'Bạn sinh vào mùa ' + (dl ? 'có hỗ trợ cho mình' : 'không hỗ trợ cho mình, nhưng các yếu tố khác bù lại') + ', nên dồi dào năng lượng.'
        : 'Bạn sinh vào mùa ' + (dl ? 'có hỗ trợ cho mình, nhưng cũng có yếu tố rút sức' : 'không hỗ trợ cho mình, nhưng các yếu tố khác bù lại') + ', nên sức khá cân bằng.');
    var chip = '<div class="cb-chip-hang"><span class="cb-chip tot"><small>Dụng thần</small>' + tag(dt.dung) + '</span>' +
      (hy.length ? '<span class="cb-chip tot"><small>Hỷ thần</small>' + hy.map(tag).join(' ') + '</span>' : '') +
      '<span class="cb-chip xau"><small>Kỵ thần</small>' + dt.ky.map(tag).join(' ') + '</span></div>';
    var kq = 'Hành giúp bạn cân bằng nhất là ' + tag(dt.dung) + (hy.length ? ', tiếp đến là ' + hy.map(tag).join(', ') : '') + '.';
    if (dt.ky.indexOf(nhieu) >= 0) kq += ' Khi hành ' + tag(nhieu) + ' lấn át, ' + THUA[nhieu] + '.';
    return the('dung-than', 'Vượng suy & Dụng thần', 'Vượng suy là sức gánh của bạn, không phải điểm tốt xấu của lá số. Dụng thần là hành giúp bạn cân bằng nhất, hỷ thần là hành hỗ trợ, kỵ thần là hành nên hạn chế.',
      kq, 'Mức sức của bạn là ' + ls.vuongSuy.muc + '. ' + sucLuc + ' Lá số nhiều hành ' + tag(nhieu) + ' nhất (' + pct[nhieu].toFixed(0) + '%).',
      viecTheoSuc(ls.vuongSuy.muc) + ' Thêm hành ' + tag(dt.dung) + ' vào đời sống một cách vừa phải: ' + h.hoatDong.toLowerCase() + '. Màu hợp: ' + h.mau.toLowerCase() + '. Hướng hợp: ' + h.huong + '. Nghề gần với hành này: ' + h.nghe.toLowerCase() + '.', chip);
  }

  // ===== Thập thần =====
  function thapThan(ls) {
    var ds = xepGiam(ls.nhom), n = NHOM[ds[0][1]], thieu = [], lam;
    ls.nhom.forEach(function (v, i) { if (v < 4) thieu.push(i); });
    var bars = '<div class="cb-thanh-nhom">' + ls.nhom.map(function (v, i) { return thanh(cs.NHOM[i], v, 'cb-f'); }).join('') + '</div>';
    var kq = 'Nhóm nổi bật của bạn là <b>' + cs.NHOM[ds[0][1]] + '</b> (' + n.ten + '). ' + n.kq;
    var vs = 'Mỗi can trong lá số tạo một quan hệ với Nhật chủ. Nhóm ' + cs.NHOM[ds[0][1]] + ' chiếm khoảng ' + ds[0][0].toFixed(0) + '%.';
    if (thieu.length) { kq += ' Lá số ít nhóm ' + thieu.map(function (i) { return '<b>' + cs.NHOM[i] + '</b>'; }).join(', ') + ': ' + thieu.map(function (i) { return THIEU_NHOM[i]; }).join('; ') + '.'; lam = 'Chủ động rèn thêm phần còn ít: ' + thieu.map(function (i) { return BU_NHOM[i]; }).join('; ') + '.'; }
    else lam = 'Các nhóm khá đủ; hãy phát huy nhóm nổi bật và để ý đừng để nó lấn át các nhóm còn lại.';
    return the('thap-than', 'Thập Thần', 'Thập thần là 10 vai trò, gom thành 5 nhóm: Tỷ Kiếp (bản thân, bạn bè), Thực Thương (sáng tạo, biểu đạt), Tài (tiền, cơ hội), Quan Sát (kỷ luật, áp lực), Ấn (học hỏi, che chở).', kq, vs, lam, bars);
  }

  // ===== Tứ trụ =====
  function tuTru(ls) {
    var yNghia = ['gốc gác, gia đình, tuổi nhỏ', 'công việc, cha mẹ, anh em, tuổi thanh niên', 'chính bạn, người bạn đời, tuổi trung niên', 'con cái, thành quả, nội tâm, tuổi già'], ten = ['Năm', 'Tháng', 'Ngày', 'Giờ'];
    var hang = ls.tru.map(function (t, i) {
      if (!t) return '<li><b>Trụ Giờ</b> chưa có vì không rõ giờ sinh.</li>';
      var mau = i === 2 ? 'đây là trụ của chính bạn' : 'mang màu ' + NHOM_NGAN[nhomCua(t.thapThanCan)];
      return '<li><b>Trụ ' + ten[i] + ' ' + gz(t.can, t.chi) + '</b>: nói về ' + yNghia[i] + '; ' + mau + '.</li>';
    }).join('');
    var nghia = { xung: 'đối nghịch, dễ va chạm', hai: 'căng thẳng ngầm, áp lực tinh thần', pha: 'dễ trục trặc, không liền mạch', hinh: 'dễ tạo áp lực cho nhau', tuhinh: 'dễ tự tạo áp lực cho mình', luchop: 'gắn kết, hỗ trợ nhau' };
    var qh = ls.tuongTac.filter(function (x) { return x.tang === 'chi' && nghia[x.q.loai]; });
    var ban = qh.filter(function (x) { return x.q.loai !== 'luchop'; }), tot = qh.filter(function (x) { return x.q.loai === 'luchop'; });
    var ve = function (x) { return (x.a === x.b ? ten[x.a] : ten[x.a] + '–' + ten[x.b]) + ' (' + cs.CHI[x.x] + '–' + cs.CHI[x.y] + '): ' + nghia[x.q.loai]; };
    var kq = ban.length ? 'Điểm cần chú ý: ' + ban.slice(0, 3).map(ve).join('; ') + '.' : 'Các trụ không có xung khắc lớn với nhau.';
    if (tot.length) kq += ' Điểm thuận: ' + tot.slice(0, 2).map(ve).join('; ') + '.';
    return the('tu-tru', 'Tứ trụ & Tương tác can chi', 'Lá số gồm 4 trụ Năm, Tháng, Ngày, Giờ. Mỗi trụ ứng với một mảng đời sống và một giai đoạn.',
      kq, ban.length || tot.length ? 'Các địa chi trong lá số tương tác với nhau, và mảng đời sống của hai trụ đó chịu ảnh hưởng.' : '',
      ban.length ? 'Xung khắc không hẳn là xấu, mà là chỗ bạn hay gặp bài học. Hãy kiên nhẫn hơn ở các mảng đời sống trên.' : 'Giữ sự hài hòa này bằng cách chăm sóc đều các mảng đời sống.', '<ul class="cb-tom">' + hang + '</ul>');
  }

  // ===== Thần sát =====
  function thanSat(ls) {
    var gom = {}, ten = ['Năm', 'Tháng', 'Ngày', 'Giờ'];
    ls.tru.forEach(function (t, i) { if (t) t.thanSat.forEach(function (z) { (gom[z.ten] = gom[z.ten] || []).push(ten[i]); }); });
    ls.thanSatDacBiet.forEach(function (z) { (gom[z.ten] = gom[z.ten] || []).push(z.viTri); });
    var dong = function (k) { return '<li><b>' + k + '</b> <small>(' + gom[k].join(', ') + ')</small>: ' + SAO_TOT.concat(SAO_XAU).filter(function (s) { return s[0] === k; })[0][1] + '</li>'; };
    var tot = SAO_TOT.filter(function (s) { return gom[s[0]]; }).map(function (s) { return s[0]; });
    var xau = SAO_XAU.filter(function (s) { return gom[s[0]]; }).map(function (s) { return s[0]; });
    var noi = (tot.length ? '<h4>Sao thuận lợi</h4><ul class="cb-tom">' + tot.slice(0, 5).map(dong).join('') + '</ul>' : '') + (xau.length ? '<h4>Sao cần để ý</h4><ul class="cb-tom">' + xau.slice(0, 5).map(dong).join('') + '</ul>' : '');
    var con = Math.max(0, tot.length - 5) + Math.max(0, xau.length - 5);
    var kq = tot.length ? 'Lá số có ' + tot.length + ' sao thuận lợi' + (xau.length ? ' và ' + xau.length + ' sao cần để ý' : '') + '.' : (xau.length ? 'Lá số có ' + xau.length + ' sao cần để ý.' : 'Lá số không có sao nổi bật.');
    if (con) kq += ' Dưới đây là các sao chính, ' + con + ' sao còn lại nằm ở bản Nâng cao.';
    return the('than-sat', 'Thần sát', 'Thần sát là các “sao” được tính từ can chi, mô tả một nét tính cách hoặc loại tình huống hay gặp. Sao nằm ở trụ nào thì ứng vào mảng đời sống của trụ đó.',
      kq, '', 'Xem sao như lời gợi ý để chuẩn bị, đừng sợ tên gọi. Sao có tên đáng sợ vẫn có mặt tích cực.', noi);
  }

  // ===== Tình cảm =====
  function tinhCam(ls) {
    var nam = ls.gioiTinh === 'nam', tl = ls.nhom[nam ? 2 : 3], kq, lam = 'Khi căng thẳng, nói rõ điều mình cần thay vì để người kia tự đoán.';
    if (tl < 5) { kq = 'Chuyện tình cảm có thể đến chậm hoặc không phải ưu tiên hàng đầu của bạn; mối quan hệ cần được chủ động vun đắp.'; lam = 'Dành thời gian cố định cho người thương, chủ động mở lòng hơn.'; }
    else if (tl > 30) { kq = 'Bạn nhiều duyên, nhưng dễ phân tán hoặc chịu ảnh hưởng lớn từ người bạn đời.'; lam = 'Giữ khoảng riêng cho mình và rõ ràng trong các mối quan hệ.'; }
    else kq = 'Tình cảm là một phần cân bằng trong đời sống của bạn.';
    var vs = 'Với ' + (nam ? 'nam, nhóm Tài' : 'nữ, nhóm Quan Sát') + ' đại diện cho người bạn đời, chiếm khoảng ' + tl.toFixed(0) + '%.';
    var xau = ls.tuongTac.filter(function (x) { return x.tang === 'chi' && (x.a === 2 || x.b === 2) && ['xung', 'pha', 'hai', 'hinh', 'tuhinh'].indexOf(x.q.loai) >= 0; });
    var hop = ls.tuongTac.some(function (x) { return x.tang === 'chi' && (x.a === 2 || x.b === 2) && x.q.loai === 'luchop'; });
    if (xau.length) { kq += ' Hai người có thể va chạm ngầm khi căng thẳng.'; vs += ' Chi của ngày sinh (cung bạn đời) đang xung khắc với chữ khác trong lá số.'; }
    else if (hop) { kq += ' Quan hệ thân thiết của bạn được hỗ trợ tốt.'; vs += ' Chi của ngày sinh hòa hợp với chữ khác trong lá số.'; }
    if (coSao(ls, 'Đào Hoa')) { kq += ' Bạn có sức cuốn hút tự nhiên.'; vs += ' Lá số có sao Đào Hoa.'; }
    if (coSao(ls, 'Cô Thần') || coSao(ls, 'Quả Tú')) { kq += ' Đôi lúc bạn thấy chưa được thấu hiểu.'; vs += ' Lá số có sao Cô Thần hoặc Quả Tú; đây là cảm giác, không phải là bạn sẽ cô đơn.'; }
    return the('hon-nhan', 'Tình cảm – Hôn nhân', '', kq, vs, lam);
  }

  // ===== Sự nghiệp – Tài chính =====
  function congViec(ls) {
    var ds = xepGiam(ls.nhom), n = NHOM[ds[0][1]], kq = n.kq, vs = 'Nhóm ' + cs.NHOM[ds[0][1]] + ' (' + n.ten + ') chiếm nhiều nhất trong lá số.';
    var lam = n.lam, yeu = ls.vuongSuy.muc.indexOf('nhược') >= 0;
    if (ls.nhom[2] < 3) { kq += ' Bạn có thể ít để tâm việc quản lý tiền.'; vs += ' Nhóm Tài rất ít.'; lam += ' Nên lập ngân sách đơn giản và tìm người giỏi định giá để hợp tác.'; }
    else if (ls.nhom[2] > 30 && yeu) { kq += ' Cơ hội tiền bạc nhiều nhưng dễ vượt sức.'; vs += ' Nhóm Tài lớn trong khi sức của lá số thiên về cần nâng đỡ.'; lam += ' Nên chọn ít việc mà làm tới nơi.'; }
    var kho = [10, 1, 4, 7, 10][cs.CAN_HANH[ls.nhatChu]];
    if (ls.tru.some(function (t) { return t && t.chi === kho; })) { kq += ' Bạn cũng có khả năng giữ được tiền mình kiếm ra.'; vs += ' Lá số có chữ ' + cs.CHI[kho] + ', là “tài khố” (kho tiền) của bạn.'; }
    return the('su-nghiep', 'Sự nghiệp – Tài chính', '', kq, vs, lam);
  }

  // ===== Sức khỏe =====
  function sucKhoe(ls) {
    var pct = ls.nguHanh.pct, it = [], lyDo = [];
    pct.forEach(function (v, i) {
      if (v >= 32) { it.push(T.hanh[i].coQuan.toLowerCase()); lyDo.push('hành ' + tag(i) + ' nhiều (' + v.toFixed(0) + '%)'); }
      else if (v < 7) { it.push(T.hanh[i].coQuan.toLowerCase()); lyDo.push('hành ' + tag(i) + ' ít (' + v.toFixed(0) + '%)'); }
    });
    var kq = it.length ? 'Nên để ý thêm: ' + it.join('; ') + '.' : 'Lá số không có điểm yếu sức khỏe nổi bật.';
    var vs = it.length ? 'Lá số có ' + lyDo.join(', ') + '; mỗi hành gắn với một số cơ quan trong cơ thể.' : 'Các hành trong lá số không chênh lệch quá nhiều.';
    return the('suc-khoe', 'Sức khỏe', '', kq, vs, 'Duy trì lối sống điều độ và khám sức khỏe định kỳ. <i>Đây chỉ là gợi ý để tham khảo, không thay cho tư vấn của bác sĩ.</i>');
  }

  // Can tác động bề mặt, chi tác động sâu và lâu hơn, nên phải nói cả hai
  function lyDoHanh(ls, c, b) {
    var ve = function (h) { var d = BT.ls.diemHanh(ls, h); return 'hành ' + tag(h) + (d > 0 ? ' (có lợi cho bạn)' : (d < 0 ? ' (chưa thuận cho bạn)' : ' (trung tính)')); };
    return 'Can mang ' + ve(cs.CAN_HANH[c]) + ', chi mang ' + ve(cs.CHI_HANH[b]) + '; chi tác động sâu và lâu hơn can.';
  }

  // ===== Đại vận =====
  function daiVan(ls) {
    var y = new Date().getFullYear(), ds = ls.daiVan.ds, idx = 0;
    ds.forEach(function (t, i) { if (y >= t.namBatDau) idx = i; });
    var hang = ds.map(function (t, i) {
      var r = BT.lg.danhGiaTru(ls, t.can, t.chi);
      return '<div class="cb-nam ' + r.lop + (i === idx ? ' dang' : '') + '"><b>' + t.namBatDau + '–' + (t.namBatDau + 9) + '</b><small>' + cs.CAN[t.can] + ' ' + cs.CHI[t.chi] + (i === idx ? ' · hiện tại' : '') + '</small><span>' + r.muc + '</span></div>';
    }).join('');
    var t = ds[idx], gd = GIAI_DOAN[nhomCua(cs.thapThan(ls.nhatChu, t.can))];
    var chua = y < t.namBatDau;
    var kq = (chua ? 'Đại vận đầu tiên từ năm ' + t.namBatDau + ' ' : 'Giai đoạn ' + t.namBatDau + '–' + (t.namBatDau + 9) + ' ') + gd.kq;
    if (t.can === 9) kq += ' Đây còn là giai đoạn dễ thay đổi rất nhiều, có người như đổi tính hẳn.';
    return the('dai-van', 'Đại vận', 'Đại vận là các giai đoạn 10 năm, mỗi giai đoạn mang một màu sắc riêng và có thể làm bạn thay đổi tính cách, năng lực.',
      kq, 'Đại vận này là ' + gz(t.can, t.chi) + '. ' + lyDoHanh(ls, t.can, t.chi),
      gd.lam, '<div class="cb-nam-hang dv">' + hang + '</div>');
  }

  // ===== Lưu niên =====
  function luuNien(ls) {
    var y = new Date().getFullYear(), tn = BT.ls.truNam(y), dg = BT.lg.danhGiaTru(ls, tn.can, tn.chi);
    var gd = GIAI_DOAN[nhomCua(cs.thapThan(ls.nhatChu, tn.can))];
    var kq = 'Năm ' + y + ' ' + gd.kq, lam = gd.lam;
    var vs = 'Năm ' + y + ' là năm ' + gz(tn.can, tn.chi) + '. ' + lyDoHanh(ls, tn.can, tn.chi);
    var ngay = dg.qh.filter(function (x) { return x.tang === 'chi' && x.b === 2; });
    if (dg.qh.some(function (x) { return x.tang === 'tru' && x.q.loai === 'thienkhacdiaxung'; })) { kq += ' Cảm xúc có thể xáo trộn, có lúc thấy nhiều điều trái với suy nghĩ của mình.'; lam += ' Nên có người tin cậy để trò chuyện.'; vs += ' Năm này đối nghịch mạnh với một trụ trong lá số.'; }
    if (ngay.some(function (x) { return ['xung', 'hai', 'pha', 'hinh', 'tuhinh'].indexOf(x.q.loai) >= 0; })) { kq += ' Quan hệ với người thân thiết dễ căng thẳng.'; lam += ' Hãy kiên nhẫn hơn với người bạn đời.'; vs += ' Chữ của năm xung khắc với chi ngày sinh.'; }
    else if (ngay.some(function (x) { return x.q.loai === 'luchop'; })) { kq += ' Chuyện tình cảm có nhiều thuận lợi.'; vs += ' Chữ của năm hòa hợp với chi ngày sinh.'; }
    var hang = '';
    for (var i = 0; i < 5; i++) {
      var tt = BT.ls.truNam(y + i), r = BT.lg.danhGiaTru(ls, tt.can, tt.chi);
      hang += '<div class="cb-nam ' + r.lop + '"><b>' + (y + i) + '</b><small>' + cs.CAN[tt.can] + ' ' + cs.CHI[tt.chi] + '</small><span>' + r.muc + '</span></div>';
    }
    return the('luu-nien', 'Lưu niên', 'Lưu niên là từng năm. Năm tác động ngắn hơn đại vận, nhưng rõ khi nó xung hoặc hợp với lá số. Mức đánh giá chỉ là xu hướng để chuẩn bị.', kq, vs, lam, '<div class="cb-nam-hang">' + hang + '</div>');
  }

  function html(ls) {
    return tongQuan(ls) + banThan(ls) + nguHanh(ls) + dungThan(ls) + thapThan(ls) + tuTru(ls) + thanSat(ls) + tinhCam(ls) + congViec(ls) + sucKhoe(ls) + daiVan(ls) + luuNien(ls);
  }
  BT.cb = { html: html };
})();
