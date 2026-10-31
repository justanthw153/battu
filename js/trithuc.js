// Kho tri thức luận giải – tổng hợp từ 23 buổi bài giảng BTK1 và lý thuyết Bát Tự nền tảng
(function () {
  var T = {};

  // ===== 10 Thiên Can (Nhật chủ) =====
  T.can = [
    { ten: 'Giáp', hinhTuong: 'Cây đại thụ – vươn thẳng, sống theo cách của mình', tinhCach: 'Thẳng thắn, có lý tưởng, nhìn đường dài, không giữ thù lâu. Tạo cho người khác cảm giác rất “con người”, dễ nói chuyện, dễ chơi. Câu cửa miệng ngầm của người Giáp: “mình là cây, việc của mình là sống” – họ thể hiện cá tính và lập trường độc đáo một cách tự nhiên.', diemManh: 'Hay được người khác giới thiệu cơ hội, công việc; khó từ chối khi người khác cần giúp – cho đi nhiều, thậm chí hơn mức cần thiết (có thể vừa càm ràm vừa giúp). Dễ được lộc về nơi ở, nhà đất vì gánh vác nhiều.', thuThach: 'Cái tôi cao, lời thẳng vô tình xúc phạm người khác vì không để ý cảm xúc người nghe. Khi có lý tưởng/tham vọng lớn có thể bất chấp, không nghe góp ý, thậm chí đụng vào quyền lợi người khác.', congViec: 'Giáo dục, đào tạo, phát triển con người, khởi xướng dự án dài hạn, tư vấn, xuất bản, môi trường – nông lâm, y dược thảo, các vị trí cần tầm nhìn và sự kiên định.', loiKhuyen: 'Trước khi nói thẳng, tự hỏi: sự thẳng này có đáng và có giúp được người kia không? Học cách nhận góp ý khi theo đuổi tham vọng.' },
    { ten: 'Ất', hinhTuong: 'Cỏ cây, dây leo – mềm dẻo, bám rễ và hồi sinh', tinhCach: 'Khéo léo trong giao tiếp hơn Giáp nhưng vẫn thẳng (thẳng là bản chất của Mộc). Dễ kết nối, tạo cảm giác bạn bè. Linh hoạt nhất trong 10 can – linh hoạt bằng sự thích nghi (khác Thủy linh hoạt bằng thấu hiểu).', diemManh: 'Khả năng phục hồi sau biến động nhanh nhất trong 10 can. Chăm chỉ học, chăm chỉ làm, mài giũa tay nghề tới mức sắc bén – chính họ là một “xưởng sản xuất”: mất hết vẫn tự làm lại được từ con số không.', thuThach: 'Tài sản, mối quan hệ hay công việc có thể mất đi đột ngột (1 tháng trước có tiền, 1 tháng sau về số 0). Thử thách lớn nhất: chạy theo sự chú ý của người khác, để sự tự tin phụ thuộc vào ánh nhìn bên ngoài thay vì giá trị bên trong.', congViec: 'Nghề thủ công, kỹ năng chuyên môn, thiết kế, nghệ thuật biểu diễn, ngoại giao, tư vấn, thương mại linh hoạt, làm đẹp, chăm sóc.', loiKhuyen: 'Đầu tư vào tay nghề – đó là tài sản không ai lấy được. Khi thấy mình bắt đầu làm mọi thứ để được chú ý, quay về với điều mình thật sự giỏi.' },
    { ten: 'Bính', ghiChu: 'Buổi giảng riêng về Bính – Đinh không có trong bộ tài liệu; nội dung tổng hợp từ các buổi khác (ngũ hành Hỏa, thập thần, ví dụ) và lý thuyết chung.', hinhTuong: 'Mặt trời – rực rỡ, chiếu sáng cho tất cả', tinhCach: 'Nhiệt tình, cởi mở, hào phóng, thích được thấy và thích làm người khác vui. Hướng về tương lai, đổi mới, cải tiến. Bên trong có khả năng kiểm soát và dàn xếp khéo léo.', diemManh: 'Biết sắp đặt, dàn xếp, nói chuyện để mọi thứ cuối cùng đạt mục tiêu (kiểu “đòi nợ” khéo nhất lại là người Hỏa). Truyền năng lượng, truyền cảm hứng.', thuThach: 'Hỏa nhiều thì rất khắt khe với sai lầm của chính mình, khó tự thông cảm, ép bản thân quên mất mình cũng là con người. Bên ngoài cười chuyên nghiệp nhưng bên trong có thể không vui.', congViec: 'Truyền thông, giải trí, sân khấu, marketing, giảng dạy, chính trị – lãnh đạo, năng lượng, công nghệ hiển thị, các vai trò dẫn dắt.', loiKhuyen: 'Cho phép mình sai và học từ sai. Ánh sáng bền nhất là ánh sáng không đốt cháy chính mình.' },
    { ten: 'Đinh', ghiChu: 'Buổi giảng riêng về Bính – Đinh không có trong bộ tài liệu; nội dung tổng hợp từ các buổi khác (ngũ hành Hỏa, buổi 25 về khả năng kiếm tiền của Đinh) và lý thuyết chung.', hinhTuong: 'Ngọn đèn, ngọn nến – lửa luyện, tinh chỉnh, chiếu sâu', tinhCach: 'Tập trung, tinh tế, có tiêu chuẩn rất cao. Đinh Hỏa là lửa luyện kim: giúp tư duy và quan điểm được tinh luyện thành năng lực cụ thể qua cam kết với tiêu chuẩn.', diemManh: 'Khả năng kiếm tiền tốt nhờ chuẩn mực cao – làm ra thứ gì cũng đạt chất lượng. Khéo kiểm soát, sắp đặt, dàn xếp. Giỏi đặt mục tiêu và đi tới cùng.', thuThach: 'Khắt khe với bản thân và người khác; khi lửa quá vượng thì nóng vội, dễ kiệt sức. Đôi khi giữ cảm xúc bên trong quá lâu.', congViec: 'Tinh chỉnh – kiểm định chất lượng, nghiên cứu, kỹ thuật chính xác, tâm linh – tín ngưỡng, tư vấn chuyên sâu, ẩm thực, sáng tạo nội dung chất lượng cao.', loiKhuyen: 'Thiền, chép kinh sách, tập trung vào một việc là cách “luyện Hỏa” tốt nhất. Đặt tiêu chuẩn cao nhưng vẫn có chỗ cho sự bao dung.' },
    { ten: 'Mậu', hinhTuong: 'Núi lớn, đê đập – nền tảng, trụ cột', tinhCach: 'Xác định trọng tâm, xây nền tảng và trụ cột. Có cái nhìn quan sát hoàn cảnh xung quanh và lòng từ bi: nếu điều mình làm ra giảm được đau khổ cho người khác thì sẽ làm.', diemManh: 'Từ bi, giúp nhiều người nên về mặt tâm linh hay được “độ”, được che chở. Đủ năng lực để chuyển hướng khi thấy không hợp.', thuThach: 'Tâm lý “đứng núi này trông núi nọ” thời trẻ – dễ tốn tiền học hết ngành này sang ngành khác. Đã kết luận thì khó nghĩ lại. Hay so sánh, có xu hướng độc tôn, lập dị, tạo cảm giác “trên cơ” người khác nên không phải lúc nào cũng được thiện cảm; đôi khi vướng tranh chấp vì hiểu lầm hay chuyện bí mật.', congViec: 'Quản trị, xây dựng, bất động sản, bảo hiểm, ngân hàng tích lũy, tổ chức – hành chính, các vai trò làm “trụ cột” cho tập thể, công tác xã hội – từ thiện.', loiKhuyen: 'Trước khi đổi hướng, hỏi: mình đang chạy trốn hay đang tiến tới? Tập xem lại kết luận cũ khi có dữ kiện mới.' },
    { ten: 'Kỷ', hinhTuong: 'Đất ruộng vườn – nuôi dưỡng, tồn chứa, tích lũy', tinhCach: 'Quan tâm và chăm sóc thế giới tinh thần, thích phát triển đời sống nội tâm. Đặc trưng là tồn chứa, tích lũy, cung cấp tài nguyên cho người khác (như một thư viện).', diemManh: 'Nuôi dưỡng, chăm sóc, chiêm nghiệm – suy nghiệm sâu (Jung và Freud – hai người đặt nền móng phân tâm học – đều sinh ngày Kỷ Sửu). Biết giữ, biết tích.', thuThach: 'Dễ sa đà vào phù phiếm: cần giấy tờ, danh phận, chức tước để cảm thấy được thừa nhận; sưu tầm quá nhiều một thứ để trấn an tinh thần. Lúc nóng dễ hiểu lầm người khác, khi mọi chuyện dịu xuống mới nhận ra.', congViec: 'Giáo dục, tâm lý – phân tâm, chăm sóc sức khỏe, nhân sự, lưu trữ – thư viện, quản lý tài nguyên, nông nghiệp, ẩm thực, dịch vụ khách hàng.', loiKhuyen: 'Giá trị của bạn không nằm trong giấy chứng nhận. Khi đang nóng, hoãn kết luận về người khác.' },
    { ten: 'Canh', hinhTuong: 'Kim loại thô, đao kiếm – quyết đoán, thi hành', tinhCach: 'Coi trọng tự do và độc lập nhất trong 10 can: cần thời gian biến kiến thức thành của mình rồi tự quyết. Thích thì làm, không bận tâm ánh nhìn người khác. Quyết đoán (người năm Canh hết tiền vẫn chọn mua thuốc lá để bình tĩnh nghĩ giải pháp).', diemManh: 'Tiếp thu kỹ thuật nhanh, giỏi phân tích (dữ liệu, số liệu, thiết kế, máy móc). “Tài làm kinh tế” thực chất là năng lực thi hành – biến cái vô hình thành hữu hình, vạch lập luận và lý lẽ. Có Quý Thủy thì hùng biện; có Nhâm Thủy thì giỏi thương thuyết, trình diễn.', thuThach: '“Canh biến vi cô”: người khác khó bước vào thế giới tinh thần của họ nên dù sống chung vẫn có cảm giác cô đơn tinh thần. Không có Thủy thì nói thẳng chứ chưa khéo.', congViec: 'Kỹ thuật, cơ khí, phân tích dữ liệu, tài chính – kinh tế, luật, quân đội – công an, quản lý vận hành, phẫu thuật.', loiKhuyen: 'Chủ động mở một cánh cửa cho người thân bước vào thế giới của bạn – tự do không có nghĩa là cô lập.' },
    { ten: 'Tân', hinhTuong: 'Trang sức, kim loại quý – tinh xảo, điểm nhấn, giá trị', tinhCach: 'Tình cảm nhiều hơn vẻ ngoài. Sáng suốt nằm ở cách xác định LÝ DO để làm việc gì – từ ngoài nhìn vào có vẻ lập dị, liều, bất cần (Tân là can hay tạo cảm giác bất cần nhất).', diemManh: 'Tạo điểm nhấn, sự sang trọng, mang tính biểu tượng và đảm bảo; truyền thông điệp tốt. Tiếp thu kỹ thuật nhanh, phân tích giỏi. Khẳng định giá trị khi được làm, được sáng tạo, tạo tác.', thuThach: 'Để tâm quá nhiều tới ánh nhìn, đánh giá, phán xét; sợ việc mình làm gây thiệt hại cho người khác → tự gò bó trong đúng–sai, phải–trái, tự trói chân mình.', congViec: 'Thiết kế, trang sức – thời trang, nghiên cứu lý thuyết, tài chính, ngôn ngữ, nghệ thuật, kiểm định, luật, truyền thông thương hiệu.', loiKhuyen: 'Đừng chờ đúng tuyệt đối mới làm. Giá trị của bạn hiện ra trong lúc tạo tác, không phải trong lúc lo lắng.' },
    { ten: 'Nhâm', hinhTuong: 'Sông lớn, biển cả – lưu chuyển, bao trùm', tinhCach: 'Thích tự do, ghét bị gò bó. Trong tập thể luân phiên giữa hòa hợp và chuyên quyền (khi mọi thứ hỗn loạn thì tự quyết, tự sắp xếp hết). Nhẫn nhịn để giữ hòa khí, nhưng khi bị dồn ép quá giới hạn thì cảm xúc bộc phát dồn dập; có thể đổi thái độ rất nhanh khiến người khác không kịp phản ứng.', diemManh: 'Tư duy linh hoạt, tiếp cận vấn đề bằng nhiều góc. Giỏi tham mưu: đưa sản phẩm cho Nhâm, họ chỉ ra bán cho ai, truyền đạt thế nào. Điều phối, phân phối, chuỗi cung ứng, buôn bán. Huy động được nguồn lực của người xung quanh. Nhiều người Nhâm khởi nghiệp, làm tâm lý học.', thuThach: 'Kỳ vọng cao với người khác, kiến thức rộng và nhảy ý nhanh nên người nghe khó theo kịp – cần kiên nhẫn khi truyền đạt cho nhân sự. Sách xưa nói Nhâm hay gặp vấn đề về con cái (thực tế thường là kỳ vọng quá cao).', congViec: 'Kinh doanh, phân phối, logistics, xuất nhập khẩu, khởi nghiệp, tham mưu chiến lược, tâm lý học, truyền thông, du lịch.', loiKhuyen: 'Nói chậm lại, chia nhỏ ý khi hướng dẫn người khác. Xả áp lực đều đặn thay vì chờ đến lúc vỡ đê.' },
    { ten: 'Quý', hinhTuong: 'Mưa, sương, mạch nước ngầm – thấm sâu, nuôi dưỡng âm thầm', tinhCach: 'Cảm xúc sâu, trực giác mạnh, thích tìm hiểu ẩn dụ, biểu tượng, câu chuyện phía sau sự việc. Linh hoạt bằng sự thấu hiểu.', diemManh: 'Dù buồn chuyện gia đình, tình cảm nhưng ra ngoài rất hay được người ngoài thương và sẵn sàng giúp. Có khả năng sáng tác theo bản năng, viết lách giúp tự khám phá bản thân. Nhiều người Quý làm tâm lý học.', thuThach: 'Tính “si”: khi bất ổn cảm xúc dễ suy diễn, tưởng tượng người khác ghét mình, hại mình, phản bội mình (“7749 âm mưu trong công ty”).', congViec: 'Tâm lý, tư vấn, nghiên cứu, viết lách – sáng tác, nghệ thuật, tâm linh, y học, dịch vụ chăm sóc, phân tích thông tin.', loiKhuyen: 'Chìa khóa giảm “si” là đối diện bản thân: không thể chắc người khác nghĩ gì, nhưng có thể gọi tên cảm xúc của chính mình và cảm xúc nằm sau nó. Viết nhật ký.' }
  ];

  // ===== Ngũ hành =====
  T.hanh = [
    { ten: 'Mộc', banChat: 'Ngũ hành của chữ NHÂN (buổi 2): con người – mỗi người một câu chuyện, không ai giống ai; lập trường thích hay không thích; “nhân” trong nhân quả – người giỏi khởi xướng, thích tiên phong. Quyết định dựa trên điều mình thích, mình tin. (Tướng: chân mày đậm, tóc mượt.)', thua: 'Cố chấp với quan điểm, cái tôi lớn, mâu thuẫn với khuôn khổ (Thổ), dễ bốc đồng theo lý tưởng.', thieu: 'Không có nghĩa là vô nhân tính. Thường ít thể hiện lập trường riêng, dễ dao động theo hoàn cảnh; nên bổ sung bằng hoạt động Mộc (đọc sách phát triển bản thân, trồng cây, đi giữa thiên nhiên, học kỹ năng mới).', mau: 'Xanh lá', huong: 'Đông', hoatDong: 'Trồng cây, đi bộ trong thiên nhiên, đọc sách, học kỹ năng mới, giúp đỡ người khác, yoga – giãn cơ', nghe: 'Giáo dục, xuất bản, thời trang, nông lâm, dược thảo, nhân sự, phát triển con người', coQuan: 'Gan, mật, gân cơ, mắt, hệ thần kinh ngoại biên' },
    { ten: 'Hỏa', banChat: 'Mục đích, chủ đích và sự kiểm soát (buổi 2); lễ nghi; quyền lực, ngự trị, chinh phục; làm “bùng lên” – lan tỏa, kiến tạo hoặc hủy diệt; kiểm duyệt, thẩm định; khả năng biến ý tưởng thành hình ảnh, sản phẩm rõ ràng; ý chí, nghị lực. Ở mức vừa đủ tạo ra sự quyến rũ, cuốn hút.', thua: 'Nóng vội, khắt khe với bản thân, khó tự thông cảm, dễ kiệt sức; nội tâm có thể rất chi tiết tốn năng lượng.', thieu: 'Không phải “không thực tế” – mà là tốn nhiều thời gian hơn để biến ý tưởng thành hình mẫu, sản phẩm rõ ràng (khuyết một hành không mất khả năng đó, chỉ là khó làm hơn). Thiền, chép kinh, chép tài liệu, theo đuổi mục tiêu cụ thể là cách “luyện Hỏa”; một niềm tin – đức tin cũng là Hỏa.', mau: 'Đỏ, hồng, tím, cam', huong: 'Nam', hoatDong: 'Thiền định, chép kinh sách, đặt mục tiêu, thể thao cường độ, tắm nắng, sinh hoạt tín ngưỡng, thuyết trình', nghe: 'Truyền thông, giải trí, marketing, năng lượng, ẩm thực, công nghệ, tâm linh, giảng dạy', coQuan: 'Tim, mạch máu, ruột non, huyết áp, mắt (thị lực)' },
    { ten: 'Thổ', banChat: 'Kiên định – “lì đường dài” nhất trong ngũ hành (buổi 2); nâng đỡ, che chở, an ủi; trách nhiệm, từ tốn, an toàn, tích lũy; quan tâm địa vị – danh phận. Hơi khô khan.', thua: 'Nặng nề trách nhiệm, bảo thủ, chọn an toàn quá mức; Thổ + Kim nhiều dễ quá lý sự, giải quyết mọi thứ bằng lý lẽ.', thieu: 'Hay vội, thiếu từ tốn, khó xác định khi nào làm gì – nhưng đổi lại linh hoạt, ít bị ràng buộc bởi khuôn khổ.', mau: 'Vàng, nâu, be', huong: 'Trung tâm, Đông Bắc, Tây Nam', hoatDong: 'Lập kế hoạch, giữ lịch sinh hoạt đều, nấu ăn, làm vườn, tiết kiệm – tích lũy, chăm sóc nhà cửa', nghe: 'Bất động sản, xây dựng, bảo hiểm, quản trị, kho vận, nông sản, hành chính', coQuan: 'Dạ dày, tỳ vị, hệ tiêu hóa, cơ bắp' },
    { ten: 'Kim', banChat: 'Tính “vang” (buổi 2): đụng vào là phản ứng lại ngay; làm cho tiếng tăm, lý lẽ của mình vang xa; công lý, nghĩa khí; thu hoạch, hoàn thành – đưa mọi thứ đến hồi kết; lập luận, nguyên tắc, khả năng thi hành; tính biểu tượng và đảm bảo.', thua: 'Cứng nhắc, quá lý sự, sát phạt; dễ cô đơn tinh thần vì khó cho người khác bước vào.', thieu: 'Thiếu nguyên tắc, khó dứt khoát, khó biến ý tưởng thành sản phẩm cụ thể.', mau: 'Trắng, bạc, ánh kim', huong: 'Tây', hoatDong: 'Tập gym – võ, sắp xếp dọn dẹp, viết quy tắc cá nhân, phân tích số liệu, đeo trang sức kim loại', nghe: 'Tài chính – ngân hàng, cơ khí, kỹ thuật, luật, phân tích dữ liệu, trang sức, quân đội', coQuan: 'Phổi, đại tràng, da, hệ hô hấp, xương răng' },
    { ten: 'Thủy', banChat: 'Chữ TRÍ (buổi 2): tính liên kết, kết dính giúp xâu chuỗi thông tin mà hiểu; cảm xúc, trực giác – không có hình dạng cố định, luôn luân chuyển; dòng chảy (logistics); đoàn kết; vượt ngoài khuôn phép; thống trị và điều phối.', thua: 'Nghĩ ngược trật tự, có lúc chống đối khuôn phép; cảm xúc dồn dập; sức khỏe dễ có vấn đề tai, ứ nước, thận (Beethoven Thủy vượng mất dần thính giác).', thieu: 'Ít linh hoạt, khó thấu hiểu góc nhìn khác; nhưng nếu Nhật chủ là Nhâm/Quý thì bản thân vẫn có Thủy trong tư tưởng và cách đối xử.', mau: 'Đen, xanh dương, xanh navy', huong: 'Bắc', hoatDong: 'Bơi lội, du lịch, viết lách, nghe nhạc, trò chuyện sâu, tự phản tỉnh, uống đủ nước', nghe: 'Thương mại, phân phối – logistics, tâm lý học, truyền thông, du lịch, nghiên cứu, thủy sản', coQuan: 'Thận, bàng quang, tai, hệ tiết niệu – sinh dục, xương tủy' }
  ];

  // ===== Thập thần =====
  T.thapThan = [
    { ten: 'Tỷ Kiên', tuKhoa: 'Bản sắc cá nhân, tự chủ, tư duy song hành', tichCuc: 'Bản sắc riêng rõ ràng; tư duy song hành – cho phép nhiều lối nghĩ cùng tồn tại nên lại phối hợp tốt với người khác, tìm giải pháp toàn diện. Động lực làm việc từ niềm kiêu hãnh và tự hào.', tieuCuc: 'Cạnh tranh với người giống mình, cố chấp, xài tiền thoáng.', nhieu: 'Cái tôi rất cao, khó hợp tác, dễ hao tài vì anh em bạn bè; cần Thực Thương (tự làm, sáng tạo, chăm sóc người khác, thuyết trình) hoặc Quan Sát để cân bằng.', thieu: 'Ít bạn đồng hành, dễ thiếu tự tin; cần hoạt động định vị bản thân. (Có chữ Quý thì vẫn hay được người ngoài giúp.)', nghe: 'Stylist, phát triển phong cách cá nhân, nghề tự do, huấn luyện thể chất, đồng sáng lập', lucThan: { nam: 'Anh em, bạn bè cùng giới', nu: 'Chị em, bạn bè cùng giới' } },
    { ten: 'Kiếp Tài', tuKhoa: 'Ganh đua, xã giao, chiếm lĩnh', tichCuc: 'Thích ganh đua, cạnh tranh trong tập thể kể cả với người khác mình; năng động, dám làm, mạng lưới rộng.', tieuCuc: 'Liều lĩnh, tranh đoạt, hao tài vì bạn bè – hợp tác; “Kiếp tài đoạt tài”.', nhieu: 'Tiền đến rồi đi, dễ bị chia phần, cãi vã vì lợi ích; cẩn trọng hùn hạp.', thieu: 'Ít tinh thần cạnh tranh, ngại xã giao.', nghe: 'Quảng cáo, tuyển dụng, phát triển thương hiệu, bán hàng, thể thao, môi giới', lucThan: { nam: 'Anh chị em khác giới tính âm dương, đối thủ', nu: 'Anh chị em, đối thủ' } },
    { ten: 'Thực Thần', tuKhoa: 'Tạo tác, cảm thụ, đánh giá, hưởng thụ', tichCuc: 'Khả năng đánh giá, nhận xét; sáng tạo ôn hòa; cảm thụ ăn uống – hưởng thụ tinh tế. Thực thần chế Sát: trị được cả người nóng nảy, quyền uy.', tieuCuc: 'Cầu toàn, trì hoãn (phải thích thứ mình làm, phải diễn đạt trọn ý tưởng); năm gặp Thực thần dễ tăng cân.', nhieu: 'Trì hoãn, khó cam kết, tiền vận nhiều dự án thất bại để học – hậu vận thuận nhờ kinh nghiệm. Làm việc với họ nên đặt deadline xa và kiểm tra thường xuyên.', thieu: 'Khó biến kiến thức thành thực hành; ít thú vui, khó thư giãn.', nghe: 'Ẩm thực – sáng tạo công thức, bình luận, nghệ thuật, giáo dục, viết lách, dịch vụ trải nghiệm', lucThan: { nam: 'Con cháu (theo một số phái là cháu), học trò', nu: 'Con cái (đặc biệt con gái)' } },
    { ten: 'Thương Quan', tuKhoa: 'Phá cách, thách thức, tạo xu thế mới', tichCuc: 'Tạo tác để phá vỡ quy chuẩn thông thường, tạo xu hướng mới; tài năng biểu đạt, hùng biện, sáng tạo đột phá.', tieuCuc: 'Sách xưa không ưa – hay xem là “xấu tính”: thách thức, ngạo mạn, chống đối cấp trên (Thương quan kiến quan).', nhieu: 'Nặng tâm lý chống đối xã hội: hay đưa quan điểm ngược ngạo nghe có vẻ phá cách nhưng thực chất là chống đối; bất lợi trong việc được lòng người.', thieu: 'Ít dám phá khuôn, thiếu biểu đạt cá tính.', nghe: 'Nghệ thuật, sáng tạo nội dung, luật sư, phê bình, khởi nghiệp đổi mới, công nghệ đột phá, biểu diễn', lucThan: { nam: 'Con cái (theo một số phái), cấp dưới', nu: 'Con cái (đặc biệt con trai)' } },
    { ten: 'Thiên Tài', tuKhoa: 'Cơ hội, đầu tư, buôn bán, hào phóng', tichCuc: 'Nhìn ra vì sao người ta trả tiền và ai sẽ trả; nhạy cơ hội, dám đầu tư – đầu cơ – kinh doanh mạo hiểm; hào phóng, giao tiếp rộng.', tieuCuc: 'Tiền vào nhanh ra nhanh, ham vui, phiêu lưu tài chính.', nhieu: 'Thiên Tài thành kỵ (buổi 20): cảm quan về giá trị lệch, sẵn sàng vay tiền để có thứ mình muốn, tin rằng việc gì cũng giải quyết được bằng tiền; đầu tư liều, dễ sa vào cờ bạc, dễ bị lừa, có nguy cơ phá sản. Số lượng Thiên Tài còn phản ánh mức ham muốn vật chất.', thieu: 'Ít nhạy bén kinh doanh, ngại rủi ro.', nghe: 'Kinh doanh, buôn bán (từ 2 Thiên Tài trở lên là đã nghĩ chuyện buôn bán – nên bắt đầu từ vốn nhỏ), đầu tư, sales, môi giới', lucThan: { nam: 'Cha; người tình', nu: 'Cha' } },
    { ten: 'Chính Tài', tuKhoa: 'Thù lao xứng đáng, chăm chỉ, quản lý', tichCuc: 'Chăm chỉ, làm xong việc – miễn là rõ ràng tiền lương và thấy công sức bỏ ra xứng với thù lao; chủ động đề xuất cách làm hiệu quả; quản lý tốt cuộc sống cá nhân và tập thể.', tieuCuc: 'Tính toán, bảo thủ về tiền, quá thực dụng.', nhieu: 'Chính Tài thành kỵ (buổi 20): rắc rối từ lòng tham. Muốn kiểm soát mọi thứ, “không ra tiền thì không làm”; ôm nhiều việc cùng lúc nên kiệt sức; liên tục bỏ tiền học các khóa “kiếm tiền”; dễ tin biểu đồ, số liệu mà xuống tiền; quá nhiều thì keo kiệt. Cách cân bằng: Tỷ Kiếp (bạn bè, người tâm sự) hoặc Quan Sát (kỷ luật, làm công việc hỗ trợ).', thieu: 'Khó quản lý tài chính đều đặn; với nam có thể chậm duyên vợ.', nghe: 'Kế toán, tài chính, quản lý, hành chính, ngân hàng, kinh doanh ổn định', lucThan: { nam: 'Vợ', nu: 'Cha (buổi 20)' } },
    { ten: 'Thất Sát', tuKhoa: 'Quyền uy, áp lực, dũng cảm, kỷ luật thép', tichCuc: 'Cam kết đến cùng, kể cả phải làm một mình; trực diện, thẳng thắn, dứt khoát, giải quyết vấn đề nhanh gọn; kiên cường, sẵn sàng đối đầu khó khăn (như tướng thời chiến); thích thử thách, cạnh tranh; dám nhận việc khó không ai dám làm. Thất Sát không phải dũng cảm từ đầu: người này thường từng trải qua cảm giác bị đe dọa an nguy (trụ chứa Thất Sát cho biết giai đoạn), và từ nỗi sợ mới sinh ra dũng cảm, nếu Nhật chủ vượng hoặc có Ấn sinh.', tieuCuc: 'Nóng nảy, áp đặt, chịu nhiều áp lực – bị chèn ép; sức khỏe “bình thường không bệnh, đùng phát phải cấp cứu”.', nhieu: 'Thất Sát quá nhiều (buổi 21): sống trong stress cao nên cực đoan, nghĩ chỉ có một cách, liều lĩnh, khó nghe phương án khác; cảnh giác quá mức, phản ứng gay gắt; mọi thứ đều khẩn cấp, ra lệnh dồn ép; có thể hiếu chiến, dùng mưu kế. Nhật chủ suy, không có Ấn và Tỷ Kiếp thì dễ đánh mất bản thân vì sợ hãi hoặc giận dữ. Cách cân bằng: Ấn hóa Sát (Chính Ấn tốt hơn Thiên Ấn), tức là một người mentor phân tích thực tế, có bằng chứng; hoặc Thực Thần chế Sát. Tập các môn tăng kiểm soát cơ thể như chạy bền, kiếm đạo. Muốn góp ý cho người Thất Sát thì trấn an họ trước. Những năm Ấn bị khắc thì dễ gây gổ, sự cố nặng hơn.', thieu: 'Ít áp lực nhưng có thể thiếu quyết liệt, thiếu kỷ luật.', nghe: 'Võ nghiệp, quân đội, thợ điện, lính cứu hỏa, bác sĩ phẫu thuật – cấp cứu, các việc phải thi hành, cam kết và chịu áp lực cao', lucThan: { nam: 'Con trai, cấp trên khắt khe', nu: 'Bạn trai, người tình; người quyền uy' } },
    { ten: 'Chính Quan', tuKhoa: 'Trách nhiệm, liêm chính, danh dự, trật tự', tichCuc: 'Cam kết, kỷ luật, tuân thủ nội quy; liêm chính, công tâm, tiêu chuẩn đạo đức rõ ràng; khả năng kiềm chế bản thân; dùng quyền một cách ôn hòa, dựa trên cảm nhận của tập thể, yêu hòa bình, né xung đột không cần thiết (như Bao Công). Có động lực phấn đấu, thăng tiến, thi cử; có sức cuốn hút tự nhiên (charisma) khiến người khác nể và muốn đi theo.', tieuCuc: 'Câu nệ, sợ sai; lúc khó khăn có thể chọn cam chịu hoặc né tránh vì sợ thất bại, sợ làm hại người xung quanh. Ghét nói dối và hành vi trục lợi.', nhieu: 'Chính Quan quá nhiều hoặc áp đảo Nhật chủ (buổi 21): cứng nhắc với nguyên tắc, đè nén quan điểm và mong muốn cá nhân, chủ kiến giảm, dễ bị lợi dụng mà vẫn im lặng chịu đựng. Đến lúc thấy nguyên tắc vô nghĩa hay bất công thì sự liêm chính có thể sụp đổ, chuyển sang vô trách nhiệm, quan liêu. Cách cân bằng: có Ấn (người thầy, sự học), tức là hiểu vì sao có nguyên tắc để biết lúc nào nên tuân theo, lúc nào có thể phá khung.', thieu: 'Thiếu Quan Sát (xét cả đại vận): thiếu khả năng kiểm soát bản thân, khó kiềm chế sự ích kỷ, ý nghĩ chống đối hay ham muốn để theo kỷ luật. Với nữ: vẫn có thể có chồng, nhưng quan hệ ít chặt chẽ. Có can Ất thì bù được phần tính cách giống Chính Quan, nhưng không bù được sự việc, cơ hội.', nghe: 'Giám thị, hành chính nhân sự, công tố viên, chính trị gia, trainer, bảo an, công chức, quản lý', lucThan: { nam: 'Con gái, cấp trên', nu: 'Chồng' } },
    { ten: 'Thiên Ấn', tuKhoa: 'Trực giác, kiến thức độc lạ, dự đoán', tichCuc: 'Nhận biết thông tin hữu ích bằng trực giác; phân tích biểu tượng; dự đoán xu hướng thị trường; hợp huyền học, tâm linh, nghiên cứu.', tieuCuc: 'Khi là kỵ thần dễ hoang tưởng; tha thứ kiểu “cho qua, làm ngơ” – lâu dần sinh tác dụng phụ. Kiêu thần đoạt thực: thấy vấn đề người khác lờ đi và nói ra, bất lợi được lòng người.', nhieu: 'Cô độc, đa nghi, lý thuyết nhiều hành động ít; Nhật chủ vượng mà thêm Ấn thì trì trệ, overthinking.', thieu: 'Ít trực giác, khó học những thứ trừu tượng.', nghe: 'Huyền học, tâm lý, nghiên cứu, y học cổ truyền, phân tích thị trường, IT, nghệ thuật độc lập', lucThan: { nam: 'Mẹ (buổi 17: cả Chính Ấn và Thiên Ấn đều đại diện cho mẹ); thầy cô, trợ lý', nu: 'Mẹ (cả Chính Ấn và Thiên Ấn); thầy cô, trợ lý' } },
    { ten: 'Chính Ấn', tuKhoa: 'Học hỏi, bao dung, an toàn, che chở', tichCuc: 'Muốn học và học vào; coi trọng ổn định an toàn; đòi hỏi mọi thứ cụ thể rõ ràng; bao dung tha thứ nhờ phân tích và hiểu. Có Ấn thì gặp bệnh nhẹ hơn, dễ gặp người chỉ cách chữa, khi bị chèn ép có người bênh vực.', tieuCuc: 'Không thoải mái với mơ hồ; dựa dẫm, chậm hành động.', nhieu: 'Khi stress/tổn thương dễ rơi vào thế giới riêng, coi người thân như người lạ; Ấn ở trụ tháng: tiêu chuẩn cao, kiểm tra kỹ (làm cùng hơi mệt).', thieu: 'Không muốn học hoặc học khó vào; thiếu điểm tựa tinh thần.', nghe: 'Giáo dục, nghiên cứu, y tế, văn hóa, xuất bản, tư vấn, bất động sản (Ấn liên quan nhà cửa)', lucThan: { nam: 'Mẹ; thầy cô, người che chở', nu: 'Mẹ; thầy cô, người che chở' } }
  ];

  // Thập thần theo vị trí trụ
  T.thapThanTru = {
    0: { Năm: 'Gia đình gốc có nền tảng độc lập; tuổi nhỏ sớm có ý thức cá nhân.', Tháng: 'Anh em bạn bè đông, môi trường làm việc nhiều cạnh tranh ngang hàng.', Giờ: 'Về già vẫn tự lập; con cái có cá tính mạnh.' },
    1: { Năm: 'Tuổi thơ có cạnh tranh trong gia đình, tài sản gốc bị chia.', Tháng: 'Đồng nghiệp – đối tác hay tranh phần, cẩn trọng hùn hạp.', Ngày: 'Người phối ngẫu cá tính mạnh, dễ tranh quyền trong nhà.', Giờ: 'Về già chi tiêu nhiều vì con cái, hậu bối.' },
    2: { Năm: 'Xuất thân có điều kiện hưởng thụ, gia đình ăn uống đầy đủ.', Tháng: 'Sự nghiệp dựa trên tài năng sáng tạo, chuyên môn.', Ngày: 'Phối ngẫu hiền, đời sống gia đình có hưởng thụ.', Giờ: 'Hậu vận an nhàn, con cái có tài; sản phẩm làm ra được yêu thích.' },
    3: { Năm: 'Tuổi nhỏ bướng bỉnh, có thể bất đồng với ông bà, cha mẹ.', Tháng: 'Dễ va chạm cấp trên, hợp nghề sáng tạo/tự do hơn làm công chức.', Ngày: 'Tình cảm vợ chồng dễ có tranh luận gay gắt.', Giờ: 'Con cái thông minh nhưng cá tính; sản phẩm mang tính phá cách.' },
    4: { Năm: 'Tổ nghiệp có tiền, được hưởng tài lộc gia đình.', Tháng: 'Nhạy cơ hội kinh doanh, kiếm tiền qua nhiều nguồn.', Ngày: 'Nhạy cơ hội tiền bạc, gia đình có nhiều nguồn thu (với nam: duyên tình phong phú).', Giờ: 'Về già có nguồn thu từ đầu tư, con cái làm kinh doanh.' },
    5: { Năm: 'Gia đình nề nếp, tài chính ổn định từ nhỏ.', Tháng: 'Sự nghiệp ổn định, thu nhập đều, giỏi quản lý.', Ngày: 'Coi trọng sự thực tế, rõ ràng và ổn định trong hôn nhân; giỏi giữ tiền cho gia đình (với nam: vợ đảm đang, giữ tiền).', Giờ: 'Tích lũy tốt về già, tài sản tiết kiệm bền vững.' },
    6: { Năm: 'Tuổi nhỏ chịu áp lực/kỷ luật nghiêm từ gia đình.', Tháng: 'Môi trường làm việc khắc nghiệt, cấp trên nghiêm; hợp ngành đòi hỏi bản lĩnh.', Ngày: 'Nữ: chồng cá tính mạnh, quyết liệt; bản thân chịu nhiều áp lực.', Giờ: 'Con cái có chí lớn nhưng khó bảo; về già vẫn nhiều trách nhiệm.' },
    7: { Năm: 'Xuất thân gia đình có nề nếp, danh dự.', Tháng: 'Sự nghiệp trong tổ chức thuận, được trưởng bối nâng đỡ, dễ thăng tiến.', Ngày: 'Nữ: chồng đứng đắn, có trách nhiệm; bản thân sống nguyên tắc.', Giờ: 'Con cái ngoan, có địa vị; hậu vận được kính trọng.' },
    8: { Năm: 'Tuổi thơ có thể xa mẹ hoặc được người khác nuôi dưỡng; sớm có suy nghĩ riêng.', Tháng: 'Làm nghề chuyên môn đặc thù, tiêu chuẩn cao, kiểm tra kỹ.', Ngày: 'Nội tâm sâu, đôi khi cô độc ngay trong hôn nhân.', Giờ: 'Về già thiên về tu tập, nghiên cứu, tâm linh.' },
    9: { Năm: 'Được ông bà, cha mẹ che chở, học hành có nền tảng.', Tháng: 'Có quý nhân nâng đỡ trong công việc; tiêu chuẩn cao, kỹ lưỡng.', Ngày: 'Phối ngẫu chăm sóc, bao dung.', Giờ: 'Đầu tư thận trọng, kiểm tra rất kỹ, chọn sản phẩm bền vững an toàn; con cái hiếu thuận.' }
  };

  // ===== Ý nghĩa tứ trụ =====
  T.tru = {
    Năm: { yNghia: 'Gốc gác, ông bà – tổ tiên, cha mẹ, môi trường xã hội lớn; giai đoạn ~1–16 tuổi.', van: 'Năm/vận xung–phá–phục ngâm trụ năm: “bị đi” – phải đi xa, chuyển chỗ dù không muốn và gặp áp lực; dễ có chuyện liên quan cha mẹ, sức khỏe giảm.' },
    Tháng: { yNghia: 'Cha mẹ, anh chị em, cấp trên – trưởng bối, đồng nghiệp – đối tác; phong cách và cách quản lý công việc; lệnh tháng quyết định khí hậu cả lá số; giai đoạn ~17–32 tuổi. (Ở trụ năm và trụ tháng: thiên can ứng với cha, địa chi ứng với mẹ.)', van: 'Năm/vận xung–phá–hại trụ tháng: nên để ý <b>sức khỏe của mẹ</b>; dễ <b>căng thẳng ngầm</b> với cấp trên, đối tác (va chạm ở địa chi là ngầm, ở thiên can là lộ ra ngoài); vấn đề xuất phát từ công việc; sức khỏe vùng lưng – thắt lưng; có thể đổi chỗ ở/chỗ làm.' },
    Ngày: { yNghia: 'Bản thân (thiên can – Nhật chủ: tư tưởng, quan điểm, cách đối xử với người thân thiết) và cung phối ngẫu (địa chi ngày); cách điều hành công việc và cuộc sống; giai đoạn ~33–48 tuổi.', van: 'Năm/vận xung–phá–hại–hình trụ ngày: dễ căng thẳng với người hôn phối (tính chất theo từng cặp), cần xem lại cách điều hành; phục ngâm trụ ngày: tiền có thể “bốc hơi” đột ngột, vấn đề với con hoặc hôn phối.' },
    Giờ: { yNghia: 'Con cái, học trò, cấp dưới, hậu bối; sản phẩm – thành quả; tài sản đầu tư – tiết kiệm; thế giới nội tâm, ước mơ, lý tưởng sống; tuổi già (~49 tuổi trở đi).', van: 'Năm/vận xung–phá–phục ngâm trụ giờ: chuyện con cái, nhân sự làm buồn lòng (học tập, sức khỏe), sản phẩm/đầu tư biến động; là năm nên dành thời gian chăm sóc thế giới tinh thần của mình.' }
  };

  // ===== Quan hệ can–chi trong cùng một trụ =====
  // Buổi 25: 5 cách can – chi trong một trụ (thiên can = hoàn cảnh bên ngoài, địa chi = nội tình bên trong)
  T.canChi = {
    canSinhChi: '<b>Phúc</b> (Can sinh Chi): trường hợp được đánh giá tốt nhất – vừa có thực lực vừa gặp may, dễ thành công; dễ được đánh giá cao và được môi trường bên ngoài giúp đỡ.',
    chiSinhCan: '<b>Tải</b> (Chi sinh Can): hay gặp may mắn bất ngờ, gặp người chỉ dạy đúng lúc. Thực chất là người đem nguồn lực của mình rải ra bên ngoài để tìm cơ hội, nên cơ hội tìm đến.',
    dongHanh: '<b>Đồng thể</b> (Can Chi cùng hành): người có thực lực, đạt thành tựu dựa vào thực lực bản thân; may mắn ít hơn cách Phúc.',
    canKhacChi: '<b>Cái đầu</b> (Can khắc Chi – bị che phía trên): hoàn cảnh bên ngoài cản trở sự phát huy, nhất là <b>lúc mới khởi đầu</b> (không được ủng hộ, bị giới hạn, thiếu nguồn hàng…). Nếu kiên nhẫn và có nghị lực vượt qua thì vẫn phát triển tốt.',
    chiKhacCan: '<b>Tiệt cước</b> (Chi khắc Can – bị gạt chân): mọi việc đang thông thuận thì <b>đột ngột bị chặn ngang giữa đường</b>, có khi phải làm lại từ đầu. Người có cách này hay bất an, nhưng làm gì cũng cẩn trọng từng bước, khả năng thích nghi rất cao và tích lũy nhiều kinh nghiệm; cố chấp, ngang ngược khi gặp cảnh éo le thì dễ thất bại.'
  };
  T.canChiVan = {
    canSinhChi: 'Vận <b>Phúc</b>: giai đoạn thuận, có thực lực lại gặp may, được bên ngoài nâng đỡ.',
    chiSinhCan: 'Vận <b>Tải</b>: giai đoạn đi ra ngoài tìm cơ hội, đem nguồn lực chia sẻ – dễ gặp may bất ngờ.',
    dongHanh: 'Vận <b>Đồng thể</b>: thành quả đến từ thực lực, ít trông vào may mắn.',
    canKhacChi: 'Vận <b>Cái đầu</b>: lúc mới bắt đầu làm gì cũng hay bị cản trở, không được ủng hộ – kiên nhẫn vượt qua thì về sau vẫn phát triển tốt.',
    chiKhacCan: 'Vận <b>Tiệt cước</b>: mọi việc tưởng thuận nhưng dễ bị chặn ngang giữa chừng – nên làm từng bước, chuẩn bị phương án dự phòng.'
  };
  // Ví dụ riêng thầy nêu trong buổi 25
  T.canChiRieng = {
    '5-3': 'Kỷ Mão (Tiệt cước): luôn có ít nhất một lần phải làm lại từ đầu.',
    '9-1': 'Quý Sửu (Tiệt cước): dễ bị cản trở vì giúp người mà bị hiểu lầm, hoặc vì chuyện từ người thân.',
    '5-1': 'Kỷ Sửu (buổi 13): vừa bao dung vừa hay mang kiến thức, nguồn lực đi hỗ trợ người khác – nên ít nhất một lần rơi vào thế thấy tài nguyên của mình không đủ để lo cho mình và người xung quanh.',
    '3-1': 'Đinh Sửu (buổi 7): một trong những ngày sinh rất nhiệt tình giúp đỡ người khác, nhất là khi thấy bạn bè, người thân gặp chuyện đáng báo động.'
  };
  // Buổi 7: tính cách của 12 địa chi (xét ở năm sinh, ngày sinh; ở trụ nào thì thể hiện trong lĩnh vực của trụ đó)
  T.chi = [
    'Tý: giàu tình thương, chiều chuộng người mình thương (ở trụ ngày thể hiện với người yêu; ở năm/tháng là với gia đình, họ hàng); khi bị dồn vào đường cùng thì rất liều để thoát ra; có khả năng tạo đoàn kết, tính thống lĩnh – nhưng cũng thích thống trị.',
    'Sửu: chăm chỉ, cần cù; không chủ động nhờ giúp, có khi không thích nhận giúp đỡ – nên dễ có vẻ lạnh lùng; không hung hãn nhưng phản ứng rất mạnh với điều họ cho là nguy hiểm; thấy người thân gặp chuyện đáng báo động thì lao vào giúp hết mình (nhiệt tình mà thiếu hiểu biết dễ gặp rắc rối).',
    'Dần: có tính thị uy; bảo vệ “lãnh thổ”, người phe mình rất mạnh; can đảm, gan dạ – hợp sales, tìm đối tác, tuyển dụng; máu liều cao, thích làm to làm lớn.',
    'Mão: rất nhạy cảm với môi trường, để ý tiểu tiết (dễ overthinking, suy diễn); tò mò, học nhanh và biến điều học được thành ý tưởng sáng tạo, cuốn hút.',
    'Thìn: “bất trị” – giữ rất chặt những gì cố hữu của mình, hơi độc tôn, khó bị người khác thay đổi; muốn khẳng định bản thân, tìm quyền lực, địa vị; nhưng bao dung cao, sẵn sàng nhận cả trách nhiệm không phải của mình.',
    'Tỵ: thông minh trong việc tìm ra cách đạt mục tiêu (như biểu tượng con rắn của ngành y); linh hoạt trong cách làm nhưng thiếu linh hoạt về mục đích – ít hỏi mục đích đó có cần đạt không; hào phóng; đề phòng cao, thấy ác ý thì trở nên hiếu chiến.',
    'Ngọ: “chướng” – làm theo điều mình cho là đúng, khó nhận ra mình sai; nhiệt tình, hồn nhiên, hết mình giúp đỡ; hay “cậy” vào một chỗ dựa (gia thế, người thầy, hay chính tay nghề, uy thế của mình).',
    'Mùi: thích giúp đỡ xung quanh nhưng thẳng thắn, nhất là với điều mình dị ứng; thực tế – giúp đỡ luôn kèm trao đổi qua lại; hợp lĩnh vực trao đổi, buôn bán, trading.',
    'Thân: thông minh trong việc dùng công cụ, hệ thống kiến thức – “đập vỡ” tổng thể ra để hiểu chức năng từng phần; thể hiện uy thế bằng trí thông minh, khả năng chi phối; nếu không tự tiết chế dễ thành thao túng – mà sau thao túng thường là nỗi sợ.',
    'Dậu: tự tìm ra bí quyết riêng, luôn tò mò, ham học, tự học được; trông đạo mạo nhưng bên trong rất trẻ con; mẫn cảm với chỉ trích, chính mình cũng hay đánh giá, phán xét mình và người khác; bị đụng chạm thì dễ công kích để tự vệ.',
    'Tuất: thiên về chủ nghĩa tập thể (đối lập với Thìn cá nhân) – nhiệt tình làm điều tốt cho tập thể, có khi nhân danh tập thể; tính thủ lĩnh, muốn dẫn dắt nhóm chưa có hướng đi; đã bị tổn thương thì rất lạnh lùng, không muốn nhìn mặt.',
    'Hợi: phóng khoáng, “easy going”, không xét nét, dễ bỏ qua; thông minh nhưng hay lười (vì dễ bỏ qua, hoặc thấy “làm để làm gì”); không vui thì nói ngay rồi quên.'
  ];
  // Buổi 7: ba nhóm địa chi
  T.nhomChi = {
    sinh: { ten: 'Tứ sinh (Dần, Thân, Tỵ, Hợi)', tc: 'tính cách và suy nghĩ hay biến động – rất dễ thay đổi cả công việc lẫn chỗ ở' },
    chinh: { ten: 'Tứ chính (Tý, Ngọ, Mão, Dậu)', tc: 'khó khuất phục – ép bằng áp đặt thì không chịu, nhưng chịu ngồi nói chuyện thì được; ngoại hình thường có nét' },
    mo: { ten: 'Tứ mộ (Thìn, Tuất, Sửu, Mùi)', tc: 'bao dung, ôn hòa, có phần thụ động; thích tích lũy, khó thay đổi; thích làm việc có kế hoạch, chuẩn bị trước; kiên định, gánh được trách nhiệm dài hạn' }
  };
  T.nhomChiVan = {
    cungNhom: { sinh: 'cùng nhóm Tứ sinh với chi ngày → dễ thay đổi cả công việc lẫn chỗ ở', chinh: 'cùng nhóm Tứ chính với chi ngày → thiên về thay đổi chỗ ở, nơi sinh sống', mo: 'cùng nhóm Tứ mộ với chi ngày → thiên về thay đổi công việc, vai trò, vị trí (có thể là thăng tiến)' },
    sinhGapMo: 'Người sinh ngày Tứ sinh gặp chữ Tứ mộ → tính cách dịu lại, dễ đồng ý, dễ thuận theo quan điểm xung quanh – lúc thuận lợi để thương lượng với họ.',
    sinhGapChinh: 'Người sinh ngày Tứ sinh gặp chữ Tứ chính → dễ xung động, manh động hơn bình thường.'
  };
  // Buổi 25: nạp âm của trụ/vận cho biết tính cách, phong cách trong giai đoạn đó (các ví dụ thầy nêu)
  T.napAmTinhCach = {
    'Kiếm Phong Kim': 'nghị lực rất lớn, mạnh mẽ nhưng cách giải quyết vấn đề hơi ngạo mạn, quyết liệt',
    'Lộ Bàng Thổ': 'có xu hướng nâng đỡ, làm những việc mang tính “lót đường” cho người khác',
    'Dương Liễu Mộc': 'bên ngoài tỏ ra “sao cũng được” nhưng bên trong chính kiến rất cứng, có phần bảo thủ'
  };

  // ===== Cung phối ngẫu theo chi ngày =====
  T.chiNgay = [
    'Tý (Quý Thủy): phối ngẫu thông minh, nhạy cảm, linh hoạt; tình cảm sâu nhưng hay thay đổi cảm xúc. Tý thuộc nhóm Tứ chính – dễ có sức hút ngoại hình.',
    'Sửu (Kỷ–Quý–Tân): phối ngẫu chăm chỉ, thực tế, kín đáo, biết tích lũy; tình cảm chậm mà chắc. Sửu là kho Kim.',
    'Dần (Giáp–Bính–Mậu): phối ngẫu năng động, có chí hướng, thẳng; hôn nhân nhiều dịch chuyển, phát triển.',
    'Mão (Ất): phối ngẫu dịu dàng, khéo léo, có duyên; Mão là Đào hoa của nhóm Dần Ngọ Tuất – nhiều sức hút.',
    'Thìn (Mậu–Ất–Quý): phối ngẫu có năng lực, tham vọng, nhiều mặt; Thìn là kho Thủy – cảm xúc giấu kín.',
    'Tỵ (Bính–Mậu–Canh): phối ngẫu thông minh, nhiệt tình, nhạy bén; dễ có lời ra tiếng vào xung quanh chuyện tình cảm.',
    'Ngọ (Đinh–Kỷ): phối ngẫu nhiệt huyết, thẳng, nóng; tình cảm nồng nhiệt nhưng dễ cãi vã. Ngọ thuộc Tứ chính.',
    'Mùi (Kỷ–Đinh–Ất): phối ngẫu hiền, chu đáo, giàu cảm xúc; Mùi là kho Mộc – có thể giữ nỗi buồn trong lòng.',
    'Thân (Canh–Nhâm–Mậu): phối ngẫu giỏi xoay xở, thực tế, năng động; hôn nhân hay có chuyến đi, thay đổi.',
    'Dậu (Tân): phối ngẫu chỉn chu, ưa hình thức, có gu; Dậu thuộc Tứ chính – thường có nét đẹp.',
    'Tuất (Mậu–Tân–Đinh): phối ngẫu trung thành, trách nhiệm, có nguyên tắc; Tuất là kho Hỏa.',
    'Hợi (Nhâm–Giáp): phối ngẫu bao dung, hào phóng, lãng mạn; dễ cảm thông nhưng cũng dễ bị cuốn theo cảm xúc.'
  ];

  // ===== Vòng trường sinh =====
  T.truongSinh = [
    'Trường sinh: mới ra đời – nhiều tiềm năng, khỏe nhưng còn mới; được nâng đỡ.',
    'Mộc dục: tập tễnh lớn lên – khỏe hơn nhưng non nớt, dễ bị cuốn theo cảm xúc, đào hoa.',
    'Quan đới: bắt đầu “mặc áo mũ” – chuẩn bị bước vào xã hội, chú trọng hình ảnh.',
    'Lâm quan: thanh niên khẳng định bản thân – tự lập, có lộc, sức mạnh rõ rệt.',
    'Đế vượng: thịnh nhất – đạt nhiều thành tựu nhất, nhưng cực thịnh thì dễ cứng.',
    'Suy: bắt đầu đi xuống – điềm tĩnh, từng trải, nên giữ hơn là mở rộng.',
    'Bệnh: bắt đầu lệch lạc – nhạy cảm, cần chăm sóc sức khỏe – tinh thần.',
    'Tử: khí đã tắt – trầm lặng, hướng nội, cần trợ lực từ bên ngoài.',
    'Mộ: chỉ còn khí dư cất giữ – thích tích trữ, nghiên cứu, giữ bí mật.',
    'Tuyệt: khí như bốc hơi – dễ đứt gãy rồi bắt đầu lại, cần làm mới mình.',
    'Thai: như thai nhi – ý tưởng mới manh nha, chưa định hình.',
    'Dưỡng: đang được dung dưỡng – tự hấp thu nhưng cần sự bổ trợ từ bên ngoài.'
  ];

  // ===== Tương tác thiên can =====
  T.canHop = {
    '0-5': 'Giáp–Kỷ hợp hóa Thổ (Trung chính chi hợp): hay đi qua những tình huống bị chê trách, “làm ơn mắc oán”; chính từ đó rèn nên sự chính trực, coi trọng chữ tín và danh dự.',
    '1-6': 'Ất–Canh hợp hóa Kim (Nhân nghĩa chi hợp): Ất trở nên chủ động đối diện, cương trực hơn; Canh biết nghĩ về con người, biết tha thứ. Chuyện riêng, bí mật có xu hướng bị lộ ra, hoặc chính mình giãi bày chuyện riêng cho người khác.',
    '2-7': 'Bính–Tân hợp hóa Thủy (Uy chế chi hợp): có khả năng thu phục lòng người, phát triển trí tuệ rất nhiều, nhưng hay đi qua những tình huống bị quay lưng, bị rời bỏ trong quan hệ – cảm giác bị “đâm sau lưng” (sách Tây gọi là tổ hợp phản bội, thực chất thường chỉ là sự trở mặt, rời đi) – mỗi lần như vậy là một bài học đắt giá về con người.',
    '3-8': 'Đinh–Nhâm hợp hóa Mộc (Dâm nặc chi hợp): thích giúp đỡ, giỏi kiếm tiền – biết huy động nguồn lực và biến đam mê thành tiền; nhưng dễ thỏa hiệp cả điều mình không muốn, có lúc “lương tháng hơn lương tâm” (bị vật chất kéo đi).',
    '4-9': 'Mậu–Quý hợp hóa Hỏa (Vô tình chi hợp): mang tính Hỏa – xác định một mục tiêu chính xác và chăm chăm đạt tới. Khi yêu thì nhiệt tình, hết lòng cho người trước mặt; xong chuyện lại quay về việc mình đang chú tâm, không mặn mà níu giữ. Trải qua những mối quan hệ nhạt dần nhưng có được sự thống nhất giữa trong và ngoài. Hay gặp chia ly bất ngờ, giữ bí mật trong lòng, khó diễn đạt cảm xúc; có giai đoạn “thân bất do kỷ”.'
  };
  // Hợp can giữa hai trụ không có Nhật can: không thành tính cách, chỉ nói quan hệ giữa người của hai trụ (buổi 7)
  T.canHopNgoai = 'Cặp hợp này không có Nhật can nên <b>không thành tính cách của bạn</b>; nó chỉ nói về quan hệ giữa những người thuộc hai trụ (ví dụ năm – giờ: con cái với ông bà, họ hàng; tháng – giờ: nhân sự với cấp trên): thân thiết, có sức hút nhưng thường không lâu dài.';
  T.canHopNgoaiVan = 'Can của vận/năm hợp với một trụ không phải trụ ngày: không đổi tính cách của bạn, mà là giai đoạn có thêm gắn kết (hoặc vướng bận) với những người, việc thuộc trụ đó.';
  T.canXung = 'Thiên can xung (Giáp–Canh, Ất–Tân, Bính–Nhâm, Đinh–Quý): xung đột ở bề mặt, trong quan điểm và hành động; lý trí và mong muốn giằng co.';

  // ===== Địa chi: lục hợp =====
  T.lucHop = {
    '0-1': 'Tý–Sửu hợp Thổ: bản năng tự cân bằng tính cách rất nhanh – lúc quá khích, cực đoan thì tự nhận ra và đưa mình về điềm đạm; hợp làm quản lý, gánh trọng trách đường dài.',
    '2-11': 'Dần–Hợi hợp Mộc (đồng thời lục phá): cơ hội đến kèm đòi hỏi đánh đổi, cam kết; đi đúng thì phát triển lâu dài, đi sai dễ mất đường dài hoặc vướng đạo đức, pháp lý.',
    '3-10': 'Mão–Tuất hợp Hỏa: khả năng chống chịu nghịch cảnh rất cao; ý chí, nghị lực, cống hiến, đam mê công việc; vẻ ngoài có thể căng, khó gần nhưng cư xử lịch sự. Được nể trọng vì hy sinh nhiều; quan tâm ngoại hình (gặp Kiếp sát/Huyết nhận trong vận: dao kéo, phẫu thuật).',
    '4-9': 'Thìn–Dậu hợp Kim: biết vạch nguyên tắc riêng, tự xác định giới hạn và chủ quyền của mình.',
    '5-8': 'Tỵ–Thân hợp Thủy (đồng thời lục phá): cơ hội và rủi ro song hành; chuỗi khởi đầu – kết thúc liên tục, nhất là hợp tác làm ăn: dễ có mối hợp tác và lợi ích, nhưng cũng dễ kết thúc bất ngờ.',
    '6-7': 'Ngọ–Mùi hợp: nóng tính, dễ dựa dẫm cảm xúc vào một mối quan hệ; rất tự do – không ép được, chỉ làm theo điều mình thích và đam mê; sản phẩm tạo ra truyền cảm hứng mạnh.'
  };
  // ===== Lục xung =====
  T.xung = {
    '0-6': 'Tý–Ngọ xung (Thủy–Hỏa): mâu thuẫn giữa lý trí và cảm xúc, giữa an toàn và đam mê; dễ dịch chuyển, thay đổi chỗ ở/công việc; cảm xúc lên xuống.',
    '1-7': 'Sửu–Mùi xung (Thổ): mâu thuẫn trong thái độ đón nhận vấn đề giữa người với người (như cô giáo trả Edison về vì “không học được gì” còn mẹ lại thấy ông là thiên tài); chuyện nơi ở, gia đạo, môi trường làm việc.',
    '2-8': 'Dần–Thân xung (Mộc–Kim): hai bên làm mất mặt nhau, hay gặp chuyện mất thể diện; nhưng mở ra tiềm năng “unlearn” – học lại, cân nhắc lại điều tưởng đã biết. Nhiều di chuyển, xe cộ – cẩn thận va chạm.',
    '3-9': 'Mão–Dậu xung (Mộc–Kim): mâu thuẫn giữa cá nhân và nguyên tắc, dễ thị phi tình cảm; thay đổi trong quan hệ thân mật, nhà cửa.',
    '4-10': 'Thìn–Tuất xung (Thổ, kho Thủy – kho Hỏa): mở kho – biến động lớn về nơi sống, môi trường làm việc, gia đạo; xung đột âm thầm bùng ra.',
    '5-11': 'Tỵ–Hợi xung (Hỏa–Thủy): muốn giúp người nhưng cách giúp lại gây thị phi hoặc khiến người kia thấy bị xúc phạm; rất nhiệt tình hồ hởi giúp đỡ rồi bị mang tiếng; hiểu lầm, lời đồn đoán xoay quanh chuyện tình cảm.'
  };
  // ===== Lục hại =====
  T.hai = {
    '0-7': 'Tý–Mùi hại (buổi 13): cảm giác “thở thôi cũng phải thở đúng ý người khác” – hay bị chỉ trích, phán xét; có những sự cố đến từ cha mẹ, người thân làm ảnh hưởng tâm trạng – dù không nằm ở trụ ngày cũng báo hiệu trong quá khứ đã có chuyện xảy ra với cha mẹ, người thân.',
    '1-6': 'Sửu–Ngọ hại: cảm giác không được thừa nhận, nảy sinh câu hỏi về giá trị bản thân; ở trụ ngày–giờ: người mình chọn hoặc con cái/sản phẩm mình làm ra không được xung quanh dễ dàng đón nhận.',
    '2-5': 'Dần–Tỵ hại: tự tin vào bản thân nhưng hoài nghi người khác, hoài nghi nhân sinh; rất trực tính – giúp thì giúp nhưng thấy cần nói là nói luôn. Trong quan hệ: cả hai cùng stress mà lại muốn bên kia an ủi; dễ nghĩ quá xa (một lần cãi nhau thành lạnh nhạt lâu dài).',
    '3-4': 'Mão–Thìn hại: khi nổi nóng thì rất khó kiểm soát bản thân; nên theo các môn thể chất để rèn khả năng cảm nhận và kiểm soát cơ thể.',
    '8-11': 'Thân–Hợi hại: những thất vọng, chuyện buồn khó quên, cứ loay hoay mãi, thường xoay quanh chuyện tình cảm.',
    '9-10': 'Dậu–Tuất hại: da mặt mỏng bẩm sinh nhưng hay gặp trải nghiệm tổn thương lòng tự trọng (bị phạt công khai, bị chơi xấu, bị oán trách) – về sau “mặt dày” hẳn lên; một khi đã chống đối thì chống rất mạnh.'
  };
  // ===== Lục phá =====
  T.pha = {
    '0-9': 'Tý–Dậu phá (Tứ chính): tình trạng THỪA MỨA do tương sinh quá mức (Kim sinh Thủy) – sinh chưa chắc là tốt; cảm xúc, suy nghĩ tràn ngập vượt sức kiểm soát.',
    '3-6': 'Mão–Ngọ phá (Tứ chính, Mộc sinh Hỏa thừa mứa): tự gây áp lực cho bản thân một cách hà khắc; hối hận về lỗi quá khứ mà chưa thật sự đối diện (như Tony Stark). Trên trụ năm–tháng: đường học tập, thi cử, thăng tiến không thuận.',
    '1-4': 'Thìn–Sửu phá (Thổ): cảm giác môi trường sống – làm việc không đón nhận mình, “ghét mình”, nhân sự quay lưng với nguyên tắc của mình.',
    '7-10': 'Tuất–Mùi phá (Thổ): vấn đề nơi ở, gia đạo, môi trường làm việc; trên năm–tháng: đường thăng tiến và học tập không thuận (như Bill Gates gặp rắc rối cả khi đi học lẫn mới đi làm).',
    '2-11': 'Dần–Hợi phá (đồng thời hợp): cơ hội kèm đánh đổi; trên năm–tháng: đường thăng tiến, học tập không hoàn toàn thuận.',
    '5-8': 'Tỵ–Thân phá (đồng thời hợp): chuỗi khởi đầu – kết thúc, hợp tác làm ăn đến nhanh đi nhanh.'
  };
  // Buổi 15: ngũ hành của tương hình chỉ mô tả tính chất của sự bất ổn (không cộng vào tỷ trọng ngũ hành)
  T.hinh = {
    'Vô ân chi hình': 'Dần–Tỵ–Thân (tương hình của Hỏa – Hỏa thừa mứa, Bính Hỏa xung Canh Kim): người <b>rất năng suất, nhiệt tình</b>, hiệu suất làm việc cao; nhưng sự nhiệt tình dễ thành <b>dồn ép người khác</b>, có khi tự ý chỉnh sửa kết quả chung của nhóm hoặc nhận luôn phần việc của người khác; lúc stress thì nóng, khó kiểm soát cảm xúc; nhìn thoáng, không để ý tâm địa người khác nên hay giúp người xong bị “phủi tay” (vô ân).',
    'Trì thế chi hình': 'Sửu–Tuất–Mùi (tương hình của Thổ – “hình bắt nạt”): <b>tự đặt rất nhiều áp lực lên bản thân</b> (trách nhiệm, danh phận, thi cử…) và còn phải nhận thêm áp lực từ bên ngoài – bị đùn đẩy việc, kỳ vọng; chênh lệch địa vị khiến phải im lặng, <b>cảm giác bất lực</b>; có thể bất ổn gia đạo; lâu dài dạ dày không tốt. Lời khuyên: học cách buông bớt những gì đang ôm.',
    'Vô lễ chi hình': 'Tý–Mão (tương hình của Mộc): <b>bị buộc làm điều không tự nguyện</b> – ở trụ tháng có thể bị buộc chuyển công tác; hay tự huyễn hoặc mình, không nhìn thẳng thái độ, tâm địa người khác (Quý Thủy, Ất Mộc đều quá chiều người). Với nữ, năm tạo thành Tý–Mão nên hạn chế đi đêm, nơi phức tạp vì dễ gặp quấy rối.'
  };
  T.hinhGiam = 'Có Thiên Đức, Nguyệt Đức, Thiên Ất quý nhân… thì các sự cố, rắc rối của tương hình được giảm nhẹ rất nhiều.';
  T.tuHinh = 'Tự hình (Thìn–Thìn, Ngọ–Ngọ, Dậu–Dậu, Hợi–Hợi) – “tự bắn vào chân mình” (buổi 15): <b>phạm đi phạm lại một vấn đề</b> dù chính mình biết hoặc được nhắc; có khi chủ động chọn lối sống, tình thế khó cho mình. Khổ nhưng chưa chắc xấu: tự hình là địa chi lặp đôi nên năng khiếu của địa chi đó cũng nhân đôi. Năm gặp chi xung với chữ tự hình (Thìn gặp Tuất, Ngọ gặp Tý, Dậu gặp Mão, Hợi gặp Tỵ) là năm học được bài học thấm thía, thay đổi nhiều. Trong lưu niên (ví dụ sinh ngày Ngọ gặp năm Ngọ) dễ căng thẳng với người hôn phối.';
  T.tuHinhXung = { 4: 10, 6: 0, 9: 3, 11: 5 };
  T.tamHop = [
    'Thủy cục (Thân–Tý–Thìn): thông minh kiểu Thủy – trí tuệ cảm xúc, trực giác, khả năng trắc ẩn, nhìn ra phần bị giấu đi của sự việc; thích thống trị; bên ngoài hơi lạnh, tách biệt nhưng bên trong rất quan tâm người khác.',
    'Mộc cục (Hợi–Mão–Mùi): thích giúp đỡ, cư xử tử tế, phóng khoáng; không thích kiểu nhanh gọn dứt khoát mà thích tương tác, kể chuyện, có “drama”; hợp networking, tổ chức sự kiện.',
    'Hỏa cục (Dần–Ngọ–Tuất): hiệu suất làm việc rất cao, nhiệt huyết, đam mê; làm gì cũng có mục đích rõ (thiết kế, lời nói, cách trình bày đều nhằm đạt đúng điều mình muốn); thích chinh phục.',
    'Kim cục (Tỵ–Dậu–Sửu): quyết đoán, dứt khoát khi ra quyết định – hợp vị trí chiến lược, điều hành, tài chính, quản lý rủi ro (“cắt lỗ”); ít bận tâm người ngoài nhưng rất lo cho người thân; tình cảm hôn nhân ít nhiều trắc trở, có người thích lối sống hơi cô độc.'
  ];
  T.phucNgam = 'Phục ngâm (hai trụ giống hệt nhau): tình huống khó chịu lặp lại, “hai trụ giống nhau lắm nên luôn xảy ra vấn đề với nhau”; nhưng mở ra rất nhiều cơ hội tự phản tỉnh – người có phục ngâm thường trải qua nhiều chuyện và phát triển năng lực tự soi chiếu bản thân.';
  T.phucNgamThem = 'Năm hay vận có phục ngâm thường mang tin không vui, cảm giác thất vọng, áp lực; nếu đang định khởi sự kinh doanh thì nên <b>chững lại</b> và dành thời gian tự phản tỉnh – nhiều khi chỉ cần đổi thái độ là tìm ra cách giải quyết.';
  T.thienKhac = '<b>Phản ngâm</b> (thiên khắc địa xung – can khắc nhau, chi xung nhau): ngụ ý <b>rối loạn cảm xúc</b>; thế giới quan, nhân sinh quan bắt đầu mâu thuẫn, dễ “hoài nghi nhân sinh” vì gặp chuyện trái với tư tưởng và cảm nhận tự nhiên của mình. Cách điều hòa: có người hỗ trợ cân bằng cảm xúc (mentor), và học cách linh hoạt trong suy nghĩ – không đổi thì dễ tự cô lập.';
  // Phản ngâm theo cặp trụ (buổi 25)
  T.phanNgamTru = {
    '0-1': 'Phản ngâm trụ Năm – Tháng: phong cách làm việc xung khắc với môi trường gốc – thường được khuyên <b>rời quê lập nghiệp</b> sẽ tốt hơn; hay gặp vấn đề ở trường học.',
    '0-2': 'Phản ngâm trụ Năm – Ngày: hay có cảm giác <b>không cùng tư tưởng với cha mẹ, họ hàng</b>.',
    '0-3': 'Phản ngâm trụ Năm – Giờ: con cái không gần gũi họ hàng; ước mơ, lý tưởng sống của mình khó được cha mẹ, họ hàng ủng hộ – một dạng <b>cô đơn về tinh thần</b>.',
    '1-2': 'Phản ngâm trụ Tháng – Ngày: hay có vấn đề với cha mẹ, anh em, đồng nghiệp vì <b>trái tính nhau</b>.',
    '1-3': 'Phản ngâm trụ Tháng – Giờ: cách làm việc và thế giới nội tâm, con cái dễ trái chiều nhau.',
    '2-3': 'Phản ngâm trụ Ngày – Giờ: <b>con cái và người hôn phối khó hòa hợp</b>; với nữ, khi sinh nở có thể gặp khó khăn.'
  };
  T.phucNgamTru = {
    '1-2': 'Phục ngâm trụ Tháng – Ngày: mình với đồng nghiệp, cấp trên cứ hay gặp rắc rối; chuyện công việc, bạn bè, đồng nghiệp không như ý.',
    '2-3': 'Phục ngâm trụ Ngày – Giờ: nuôi con vất vả; về già có xu hướng thích ở một mình.'
  };
  // Tình cảm theo sao phối ngẫu (buổi 25) – nam xét Tài, nữ xét Quan Sát (theo giới tính sinh học)
  T.saoPhoiNgau = {
    khac: 'Hành của {van} <b>khắc</b> hành {sao} (sao phối ngẫu của bạn) → giai đoạn dễ căng thẳng trong tình cảm, nặng thì có thể chia tay. Mức độ tùy chất lượng sao gốc: sao vốn quá ít hoặc quá nhiều thì dễ có chuyện hơn; hành khắc nằm ở thiên can thì lộ và nặng hơn, tàng trong địa chi thì ngầm và nhẹ hơn.',
    sinh: 'Hành của {van} <b>sinh</b> cho {sao} (sao phối ngẫu của bạn) → giai đoạn dễ phát triển mối quan hệ tình cảm.',
    nhiHop: '{van} <b>nhị hợp với chi ngày</b> → may mắn trong tình cảm (cả với người yêu lẫn người thân thiết): người độc thân dễ được giới thiệu; người đã có đôi thì quan hệ đang rạn có cơ duyên cải thiện.',
    nhiHopDaoHoa: ' Có thêm <b>Đào Hoa</b> nên khả năng cao là có người yêu trong giai đoạn này (nếu đang độc thân).'
  };
  // Thay đổi công việc (buổi 25)
  T.congViec = {
    hop: '{van} <b>hợp</b> với trụ chứa Quan Sát ({tru}) → có thay đổi trong công việc, thường mang tính may mắn (thăng chức, đổi vai trò thuận lợi).',
    xung: '{van} <b>{loai}</b> trụ chứa Quan Sát ({tru}) → công việc có biến động.',
    vuong: ' Nhật chủ đủ vượng để gánh Quan Sát: biến động là cơ hội thử thách và chứng minh năng lực với cấp trên.',
    nhuoc: ' Nhật chủ yếu: dù thay đổi có mang tính thăng tiến cũng dễ rất stress vì công việc – nên lượng sức.'
  };
  // Học tập (buổi 25)
  T.hocTap = {
    9: 'Vận/năm Chính Ấn <b>rất hợp để học</b>, nhất là học thuật, bằng cấp.',
    8: 'Vận/năm Thiên Ấn hợp để học nhưng cách học thiên trực giác – có thể gặp chút rắc rối khi thi cử, trình bày cách làm bài.',
    2: 'Vận/năm Thực Thần: hợp học kỹ năng, năng khiếu, học để làm ra sản phẩm; học thuật cao, bằng cấp thì vất vả, điểm số dễ bị ảnh hưởng.',
    3: 'Vận/năm Thương Quan: hợp học kỹ năng, năng khiếu; thi cử bằng cấp dễ gặp trở ngại, điểm không cao.',
    mau: 'Vận Mậu Thổ hợp để học – thiên về học chuyên sâu đúng một thứ.',
    ky: 'Vận Kỷ Thổ hợp để học – hay học thêm nhiều thứ bên ngoài, học chính quy thấy chưa đủ.',
    sao: 'Có {sao} → dễ học, đi thi lấy bằng cấp có xác suất đỗ cao.',
    duHoc: ' Sao học tập gặp thêm <b>Dịch Mã</b> → có thể đi du học, ra nước ngoài phát triển kiến thức.',
    anBiPha: 'Năm Ấn bị khắc phá → kết quả học tập dễ không tốt, dù không phải do mình lười.'
  };
  T.quyGiap = 'Đại vận <b>Quý</b> (kế tiếp là vận Giáp): 10 năm vận Quý thường là giai đoạn <b>thay đổi rất nhiều</b>, có người như “đổi tính” hẳn; biên độ thay đổi lớn hơn mọi vận khác trong lá số. Thập thần của vận này cho biết bạn thay đổi ở khía cạnh nào.';
  T.thapAcPhanNgam = 'Trụ này là trụ Thập Ác: vận/năm xung hoặc phản ngâm là lúc <b>tật đi kèm tài năng dễ bùng ra</b> (cảm xúc tiêu cực bị đẩy lên). Nên chủ động nghỉ ngơi, giữ giới hạn chịu đựng và báo trước cho người xung quanh.';
  // Thập ác đại bại (buổi 5, 6, 8–13): tài năng đi kèm tật – sự bùng nổ đến từ việc tiết chế quá mức một phẩm chất
  T.thapAcNgay = {
    '0-4': 'Giáp Thìn: cầu tiến rất cao, bao dung, vui khi cùng phát triển, không thù lâu. Tật: kiêu ngạo, bất chấp vì tham vọng.',
    '1-5': 'Ất Tỵ: nhiệt tình, hào sảng, cống hiến mà vẫn đạt mục đích riêng. Tật: tập trung quá mức nên mất minh mẫn, dục vọng chi phối mà không tự nhận ra; cho đi có tính toán, muốn đổi lại sự kiểm soát, không được như ý thì nóng, tự ái. Giải: tự quan sát lời nói và hành vi có tốt như mình nghĩ không.',
    '2-8': 'Bính Thân: bài giảng chưa phân tích riêng ngày này – đọc theo ý nghĩa chung của Thập ác: tài năng đi kèm một tật, dễ bùng ra khi gặp vận/năm xung (Dần).',
    '3-11': 'Đinh Hợi: bài giảng chưa phân tích riêng ngày này – đọc theo ý nghĩa chung của Thập ác: tài năng đi kèm một tật, dễ bùng ra khi gặp vận/năm xung (Tỵ).',
    '4-10': 'Mậu Tuất: nền tảng vững, chuyên môn sâu, giữ ổn định cho dự án, được tin tưởng. Tật: ôm nhiều bất an, càng thâm trầm tham vọng càng lớn (“never enough”), gây áp lực cho mình và người; hoặc “không làm lớn thì không làm”.',
    '5-1': 'Kỷ Sửu: uyên bác, tích lũy hiểu biết để giải quyết cho người khác (Carl Jung, Freud). Tật: giúp không biết giới hạn, chuẩn bị nền tảng quá nhiều đến kiệt quệ rồi chuyển sang vơ vét cho mình; bỏ trách nhiệm của mình để ôm chuyện người rồi bùng nổ; đa nghi nên dễ hiểu lầm, trở mặt. Chú ý bảo mật thông tin cá nhân. Giải: sắp xếp ưu tiên, rõ ranh giới, giúp có chừng mực.',
    '6-4': 'Canh Thìn: bảo vệ và bao dung rất cao (kể cả khi bị chèn ép), sức làm việc lớn mà vẫn điềm tĩnh, biết mưu tính rồi biến thành hành động. Tật: nhịn gần như vô hạn rồi bùng lên hung dữ, không ai cản nổi; chuyên quyền, càng ép càng chống. Giải: ý thức giới hạn chịu đựng (“vảy ngược”) và báo trước cho người khác.',
    '7-5': 'Tân Tỵ: biến mọi thứ thành điều đáng chú ý, hào sảng, muốn cứu giúp, cải tiến cho tập thể. Tật: tự tin, muốn tỏa sáng quá mức nên có thể vượt chuẩn mực đạo đức (không tách bạch giúp người với đúng sai); tự áp lực vì so sánh, khi stress thì xấu tính, chi tiêu mất cân đối.',
    '8-8': 'Nhâm Thân: thông minh thâm trầm, thao lược, kế hoạch nhiều tầng, tìm lời giải ở nơi không ai nghĩ tới. Tật: cảm xúc dữ dội cộng tính hiếu chiến dễ thành thao túng tâm lý, khó đoán; dễ vướng tranh quyền đoạt vị (ở nhà là tranh vai vế, nghĩa vụ). Giải: học hiểu tâm lý của chính mình để điều tiết cảm xúc.',
    '9-11': 'Quý Hợi: tư duy phi hình tướng, thấy điều người khác không thấy, giỏi huyền học hoặc kiếm tiền theo cách không ai ngờ; rất chiều, quan tâm người khác. Tật: kỳ vọng thành thất vọng, lòng tham đột ngột và nỗi sợ chi phối, thông minh hóa mưu mô; khó được hiểu. Chú ý sức khỏe, thị phi, kiện tụng. Giải: dùng công cụ trung gian để diễn đạt (tarot, hình ảnh, sketchnote, nghệ thuật).'
  };

  // ===== Thần sát =====
  T.thanSat = {
    'Thiên Ất Quý Nhân': 'Quý nhân bậc nhất: gặp nạn có người cứu, thoát hiểm thần kỳ (Stephen King bị xe tông vẫn sống sót). Dễ được giúp đỡ đúng lúc; hóa giải hung sát.',
    'Thái Cực Quý Nhân': 'Thiên về sự công bằng, nhân văn; dễ được tôn trọng, gia tăng địa vị; nửa là quyền tinh (công danh) nửa là sao hóa giải. Có duyên với triết học, tâm linh.',
    'Văn Xương': 'Thông minh, học giỏi, văn chương; thi cử thuận; hóa giải hung bằng trí tuệ.',
    'Quốc Ấn Quý Nhân': 'Chủ quyền hành, chức vụ, con dấu; may mắn trong thăng tiến – không hẳn lương cao mà là được trao vị trí, được công nhận; tính công bằng, nhân văn.',
    'Phúc Tinh Quý Nhân': 'Phúc khí, hóa giải tai họa – biến tình cảnh nguy hiểm thành ít nguy hiểm, thậm chí thành lợi thế; giúp hóa giải sự cố kiểu Kiếp sát. Người có sao này điềm đạm, xử lý vấn đề bình tĩnh, tuy có thể hơi khó gần, thích tự do đến – đi.',
    'Lộc Thần': 'Sao về tiền (buổi 22): đạt thành tựu, được thưởng, làm tốt nên được thêm tiền; cũng chủ về nhân duyên tốt, dễ được quý nhân ủng hộ. Ở trụ nào thì lộc đến từ phương diện đó.',
    'Ngũ Phú': 'Ngũ Phú (buổi 22): nhờ mối quan hệ với người có tài, có địa vị mà kiếm được tài lộc (ví dụ gặp người môi giới giỏi, có tâm chỉ đúng hướng đầu tư).',
    'Thiên Ách – Thiên Sát': 'Thiên Ách – Thiên Sát (buổi 22, cùng một cách tính): Thiên Ách là bị cấp trên chèn ép, nhận quá nhiều việc và trách nhiệm đến mức sinh bệnh; Thiên Sát là “tai họa từ trên trời rơi xuống” – nghĩa bóng là việc bị đổ lên đầu, bị vu khống; nghĩa đen là cẩn thận đồ vật rơi trúng đầu (đội mũ bảo hiểm cẩn thận). Có Thiên Ất, Thiên giải, Địa giải đi cùng thì nhẹ đi.',
    'Tức Thần': 'Tức Thần (buổi 22): liên quan sức khỏe đường hô hấp – về lâu dài dễ ho, viêm mũi dị ứng, nặng thì hen suyễn.',
    'Thiên Không': 'Thiên Không (buổi 23): sự vỡ mộng, trống rỗng ở trụ nó đóng – trụ tháng: việc/hợp tác hứa hẹn nhưng thực tế không như vậy, cần kiểm tra mục tiêu có thực tế không; trụ ngày: dễ vỡ mộng sau kết hôn, có lúc vô định; trụ giờ: kỳ vọng cao vào con cái/sản phẩm dễ vỡ mộng, tài sản – tiết kiệm có thể mất giá trị nên chia nhỏ. Không phải là xấu hoàn toàn: là lời nhắc sống ở hiện tại và tỉnh táo.',
    'Kình Dương': 'Quyết liệt, mạnh mẽ, dám làm; nhưng gắn với “cướp” – cẩn thận mất mát, va chạm, phẫu thuật, cướp giật trộm cắp. Quan nằm trên đầu Kình dương ở trụ năm: họ hàng có người thương tích.',
    'Kim Dư': 'Số hay được người đưa đón, chở đi (ở trụ ngày: hay được bạn bè chở); có duyên với môi giới, giới thiệu sản phẩm – người khác giới thiệu không được nhưng mình đi thì được.',
    'Học Đường': 'Năng lực học tập (buổi 23 – tính theo ngũ hành nạp âm năm sinh: mệnh Kim gặp Tân Tỵ, Mộc gặp Kỷ Hợi, Thủy gặp Giáp Thân, Thổ gặp Mậu Thân, Hỏa gặp Bính Dần ở trụ tháng/ngày/giờ); cùng Từ Quán là dấu hiệu nhà nghiên cứu, thành tích học thuật cao; đi với Thiên Y hợp học ngành y. Cũng dùng để chọn thầy, gia sư hợp tuổi.',
    'Hồng Diễm': 'Cởi mở với nhiều quan điểm, ý kiến nên dễ được thiện cảm; quyến rũ, đa tình.',
    'Từ Quán': 'Thông minh học thuật – giải được bài khó, học một môn tới thông thạo; hợp giáo dục. Lưu niên xung/hại trụ có Từ Quán thì năng lực này bị ảnh hưởng.',
    'Đào Hoa': 'Sức hút, duyên dáng, quyến rũ (Mộc của sự thu hút); có từ 2 chữ Tý/Ngọ/Mão/Dậu trở lên thường ngoại hình có nét. Gặp hung sát thì cẩn thận chuyện tình cảm rắc rối.',
    'Dịch Mã': 'Thay đổi, dịch chuyển cả nghĩa đen lẫn nghĩa bóng: ở trụ nào thì vì phương diện đó mà di chuyển nhiều (trụ giờ: đi lại nhiều vì con cái). Hợp công việc đi lại, xuất ngoại.',
    'Hoa Cái': 'Thích nghiên cứu lĩnh vực trừu tượng, siêu hình: tín ngưỡng, tôn giáo, nghệ thuật, hội họa; cô độc thanh cao. Cùng trụ với Thiên/Chính Ấn: kiến thức sâu rộng trong một lĩnh vực.',
    'Tướng Tinh': 'Nghiêm, có thần thái khiến người khác kính nể hoặc nể sợ; liên quan công danh, khả năng lãnh đạo. Ở trụ năm: ra ngoài xã hội có uy.',
    'Kiếp Sát': 'Sự cố diễn ra nhanh, cướp bóc, tai nạn bất ngờ; tính cách quyết liệt, nhanh nhạy. Đi với Kình dương: cẩn thận cướp giật. Đi với Mão–Tuất hợp trong vận: phẫu thuật, dao kéo.',
    'Vong Thần': 'Vong Thần (buổi 23) nghe đáng sợ nhưng thiên về đầu óc: óc chiến lược, tư duy tốt, lý trí rất cao, khó bị cám dỗ bởi dục vọng – ở trụ ngày thường là người chung thủy; ở trụ tháng là người nghiện việc. Vong Thần nằm ở trụ nào thì người này hết mình cho lĩnh vực của trụ đó (trụ giờ: hết mình vì con, vì sản phẩm). Đi cùng Tử/Tuyệt hoặc thân nhược thì dễ lạnh lùng, mưu tính nhiều – “lý trí sử dụng họ”. Cùng Không Vong ở trụ tháng: dễ đột ngột mất việc.',
    'Tai Sát': 'Tai họa bất ngờ, kiện tụng, thương tích; cần cẩn trọng khi di chuyển.',
    'Cô Thần': 'Cảm giác cô đơn; ít nhiều trải qua chuyện buồn trong tình cảm hôn nhân (không nhất thiết ly hôn).',
    'Quả Tú': 'Cảm giác lẻ loi trong hôn nhân, tình cảm; tự lập, độc lập về cảm xúc.',
    'Hồng Loan': 'Vui vẻ, lạc quan, muốn tâm sự – chia sẻ; duyên tình cảm, cưới hỏi.',
    'Thiên Hỷ': 'Mang lại cảm giác an tâm, hài lòng cho người khác; không chấp hơn thua lâu – có nghĩ đến nhưng rồi bỏ qua; tin vui, hỷ sự.',
    'Thiên Đức Quý Nhân': 'Nhân từ, hiền hậu; hóa hung thành cát, giảm nhẹ tai họa. Năm gặp Thiên Đức: người phối ngẫu hiền hơn.',
    'Nguyệt Đức Quý Nhân': 'Nhân từ, hiền hậu, phúc đức; giảm nhẹ sự cố (kể cả cách “Quan đè Kình dương”).',
    'Thiên Y': 'Năng lực chữa lành, tìm ra “phương thuốc” cho người khác; đi với Học Đường/Từ Quán hợp học y.',
    'Không Vong': 'Trống rỗng – điều thuộc trụ đó dễ hư hao hoặc vốn vô hình; tài sản đầu tư vào thứ không hữu hình có thể biến mất. Ngày vào Không Vong + Vong Thần + Kiếp Sát: cẩn thận tai nạn bất ngờ. Mặt tích cực: hợp tâm linh, triết học, buông bỏ.',
    'Nguyên Thần': 'Nguyên Thần (buổi 23) – tác động khác nhau: với dương nam / âm nữ là lên xuống thất thường, dễ vướng thị phi, bị phạt, rắc rối pháp lý; với âm nam / dương nữ là vấn đề sức khỏe, sự cố tai nạn làm tổn hao tài lộc. Nếu Nguyên Thần gặp bán tam hợp trên lá số hoặc trong vận thì chuyển thành lành.',
    'Thiên La': 'Thiên La (nam ngày Tuất gặp Hợi): dễ bị vướng víu, trói buộc, khó thoát; cần kiên nhẫn.',
    'Địa Võng': 'Địa Võng (nữ ngày Thìn gặp Tỵ): dễ vướng lưới rắc rối, kiện tụng; cần cẩn trọng giấy tờ.',
    'Thiên La Địa Võng (Thìn–Tuất)': 'Có đủ Thìn và Tuất: cảm giác bị trói buộc giữa trời và đất, nhiều trở ngại; nhưng cũng là người kiên trì, hợp ngành luật, y, tâm linh.',
    'Thập Ác Đại Bại': 'Thập ác (xét ở trụ tháng, ngày, giờ; không xét trụ năm) <b>không có nghĩa là người ác</b>: đây là can chi tạo ra tài năng đi kèm một “tật”, thường là sự bùng nổ đến từ việc tiết chế quá mức một phẩm chất (quá nhịn, quá chiều, quá lo, quá nhận trách nhiệm) ở khía cạnh của trụ chứa nó (tháng: công việc; ngày: bản thân, hôn phối; giờ: con cái, nội tâm). “Đại bại” là phạm sai lầm nghiêm trọng dẫn đến thất bại. Tật dễ bùng lên khi gặp vận hoặc năm <b>xung</b> trụ đó. Có Thiên Ất, Thiên Đức, Nguyệt Đức quý nhân thì được hóa giải, thiên về mặt tài năng. Nhiều trụ Thập ác thì rất giỏi, nghĩ được điều người khác không nghĩ tới nhưng cũng nhiều rắc rối tâm lý hơn.',
    'Âm Dương Sai Thác': 'Ngày Âm dương sai thác: chuyện hôn nhân – họ hàng nhà phối ngẫu dễ trắc trở, lệch pha.',
    'Khôi Cang': 'Ngày Khôi cang: thông minh, quyết đoán, có uy, tính cương; hợp lãnh đạo nhưng hôn nhân cần mềm mỏng.',
    'Cô Loan Sát': 'Ngày Cô loan: tình cảm dễ cô quạnh, khó hòa hợp; nên chủ động vun đắp quan hệ.',
    'Kim Thần': 'Giờ Kim thần: tính cương nghị, quyết đoán; cần Hỏa chế mới phát huy.',
    'Phúc Đức': 'Phúc Đức (buổi 20, tính theo tháng sinh và chi ngày): cảm giác đủ đầy, khả năng chuyển trở ngại thành nhân duyên tốt; tiền tài thường tự tìm đến khi làm điều mình thích. Năm/tháng xung, hại, phá chi ngày thì cảm giác này giảm.',
    'Phúc Tinh (ngày sinh)': 'Phúc Tinh theo ngày sinh (buổi 20): giai đoạn trung niên có vận may tiền bạc; chí cầu tiến cao, giỏi tạo mạng lưới quan hệ nên dễ có việc tốt, lương cao. Năm xung trụ ngày thì may mắn giảm.',
    'Thiên Xá': 'Ngày Thiên xá: được “ân xá” – gặp lỗi lầm dễ được tha thứ, hóa giải; tai qua nạn khỏi.',
    'Tam Kỳ Quý Nhân': 'Tam kỳ quý nhân: tài năng xuất chúng, tư duy độc đáo, dễ thành danh; nếu kèm Từ quán, Học đường là tổ hợp học thuật rất mạnh.'
  };
  T.saoTot = ['Ngũ Phú', 'Thiên Ất Quý Nhân', 'Thái Cực Quý Nhân', 'Văn Xương', 'Quốc Ấn Quý Nhân', 'Phúc Tinh Quý Nhân', 'Phúc Đức', 'Phúc Tinh (ngày sinh)', 'Lộc Thần', 'Kim Dư', 'Học Đường', 'Từ Quán', 'Tướng Tinh', 'Hồng Loan', 'Thiên Hỷ', 'Thiên Đức Quý Nhân', 'Nguyệt Đức Quý Nhân', 'Thiên Y', 'Thiên Xá', 'Tam Kỳ Quý Nhân'];

  // ===== Cách cục =====
  T.cachCuc = {
    'Chính Quan cách': 'Người trọng danh dự, nề nếp, có trách nhiệm; hợp đi đường tổ chức – công quyền. Hỷ Tài sinh Quan, Ấn hộ Quan; kỵ Thương Quan phá Quan, kỵ Quan Sát hỗn tạp.',
    'Thất Sát cách': 'Người bản lĩnh, chịu áp lực, dám nghĩ dám làm; thành công qua thử thách. Cần Thực thần chế Sát hoặc Ấn hóa Sát; thân nhược mà Sát vượng thì áp lực đè nặng.',
    'Chính Tài cách': 'Thực tế, chăm chỉ, giỏi quản lý tài chính, tiền đến từ công sức đều đặn. Cần thân đủ mạnh để gánh Tài; kỵ Tỷ Kiếp đoạt Tài.',
    'Thiên Tài cách': 'Nhạy cơ hội, hào phóng, giỏi kinh doanh, đầu tư; tiền đến từ nhiều nguồn. Thân vượng thì phát; thân nhược thì “thấy tiền khó giữ”.',
    'Chính Ấn cách': 'Học thức, nhân hậu, được che chở; hợp giáo dục, nghiên cứu, văn hóa. Kỵ Tài phá Ấn.',
    'Thiên Ấn cách': 'Trực giác, tài năng đặc thù, độc lập tư tưởng; hợp huyền học, kỹ thuật, nghệ thuật. Kỵ Kiêu thần đoạt thực.',
    'Thực Thần cách': 'Hiền hòa, có tài, biết hưởng thụ; tiền đến từ tài năng (Thực thần sinh Tài). Kỵ Kiêu đoạt Thực.',
    'Thương Quan cách': 'Tài hoa, phá cách, biểu đạt mạnh; hợp sáng tạo – tự do. Hỷ Thương quan sinh Tài hoặc Thương quan bội Ấn; kỵ Thương quan kiến Quan.',
    'Kiến Lộc cách': 'Lệnh tháng là Lộc của Nhật chủ: tự lập thân, tự gây dựng; cần Tài – Quan – Thực Thương để phát huy.',
    'Dương Nhận cách': 'Lệnh tháng là Dương nhận: cương mãnh, quyết liệt; cần Quan Sát chế ngự mới thành uy quyền, nếu không dễ liều lĩnh, hao tổn.',
    'Tòng Nhi': 'Tòng Nhi cách: Nhật chủ thuận theo Thực Thương – tài hoa, sống bằng sáng tạo, nghệ thuật.',
    'Tòng Tài': 'Tòng Tài cách: Nhật chủ thuận theo Tài – giỏi kiếm tiền khi đi theo dòng tiền, hợp kinh doanh; kỵ vận Tỷ Kiếp, Ấn.',
    'Tòng Sát': 'Tòng Sát cách: Nhật chủ thuận theo Quan Sát – thành công trong tổ chức quyền lực, biết phục tùng để được trọng dụng.',
    'Chuyên Vượng': 'Chuyên Vượng cách: một khí độc vượng – cá tính cực mạnh, chuyên sâu; thuận thế thì thành tựu lớn, nghịch thế thì gãy.'
  };
  // Thiếu nhóm thập thần (buổi 21): theo thứ tự Tỷ Kiếp, Thực Thương, Tài, Quan Sát, Ấn
  T.thieuNhom = [
    'Thiếu chính kiến, tầm nhìn cá nhân; khó nhận ra hình ảnh của mình trong mắt người khác; khó gắn kết sâu với bạn bè.',
    'Không phải không có tài, mà ít nuôi dưỡng tài năng; khó diễn đạt suy nghĩ, khó trình bày; trẻ nhỏ có thể chậm nói. Với nữ: ít con hoặc khó có con, nuôi con vất vả.',
    'Ít kỹ năng và ý thức quản lý tiền, ít nhìn thấy cơ hội; khó định giá và thương mại hóa sản phẩm của mình (nên hợp tác, tự học kiến thức định giá, thương mại); hay phát sinh vấn đề với người cha.',
    'Thiếu khả năng kiểm soát bản thân: khó kiềm chế ích kỷ, ý nghĩ chống đối, ham muốn để hoàn thành việc và theo kỷ luật. Với nữ: vẫn có thể có chồng, nhưng quan hệ ít chặt chẽ.',
    'Đường học không thật thuận, ít hứng thú học lý thuyết, khó tìm được người thầy, mentor phù hợp. Nên học qua thực hành, trải nghiệm, dự án nhỏ từ sớm.'
  ];
  // Thiên can mang tính cách gần với nhóm thập thần (buổi 21): bù được TÍNH CÁCH, không bù được sự việc, cơ hội, lục thân
  T.canBuNhom = [[5, 0], [2, 7], [8, 3], [1, 6], [4, 9]]; // Kỷ, Giáp | Bính, Tân | Nhâm, Đinh | Ất, Canh | Mậu, Quý
  // Tổ hợp thập thần. tk: true = lý thuyết phổ biến, không có trong bài giảng BTK1 (chỉ để tham khảo)
  T.toHop = {
    satHoaThienQuan: '<b>Thất Sát hóa Thiên Quan</b> (buổi 21): Thất Sát đã được chế ngự, đạt một trong ba điều kiện: (1) Nhật chủ cường vượng và có Thực Thần chế Sát; (2) Nhật chủ suy nhưng có Chính Ấn (tạm dùng Thiên Ấn); (3) có cả Tài lẫn Ấn, Thất Sát làm trung gian hòa giải Tài khắc Ấn, nên có tiền mà vẫn giữ phẩm giá. Lúc này Thất Sát không còn hung hãn, tai ách xảy ra nhẹ như một bài học. Người này có khả năng huấn luyện, rèn luyện người khác bằng sự nghiêm khắc và kinh nghiệm của mình; sức khỏe cũng được giữ, ít gặp sự cố nặng.',
    thucCheSat: '<b>Thực Thương chế Quan Sát</b> (buổi 16, 19): Thực Thần có khả năng đánh giá, nhận xét – nên “trị” được cả người nóng nảy, quyền uy như cấp trên Thất Sát.',
    thuongKienQuan: '<b>Thương Quan khắc Chính Quan</b> (buổi 21): bất lợi trong chuyện thăng tiến và thi cử; dễ va chạm cấp trên, quy định.',
    kieuDoatThuc: '<b>Kiêu thần đoạt Thực</b> (buổi 19 – Thiên Ấn khắc Thực Thần): thầy nhấn mạnh cách này <i>khó ăn khó ở chứ không phải xấu</i>. Người này tiếp thu rất nhiều thông tin xung quanh, thấy những vấn đề người khác lờ đi và nói ra – nên dễ bất lợi trong việc được lòng người.',
    taiPhaAn: '<b>Tài vượng khắc Ấn</b> (buổi 17): Tài quá nhiều khắc mất Ấn – thường không đủ kiên nhẫn học cho tới khi kiến thức vững để kiếm tiền, hay hứng thú với cách kiếm tiền nhanh; Tài quá nhiều còn kéo theo nợ nần, có khi dẫn tới phá sản.',
    quanSatHonTap: '<b>Quan Sát hỗn tạp</b> (buổi 21): cùng lúc có Chính Quan và Thất Sát lộ – áp lực từ nhiều phía, hướng đi dễ phân tán; với nữ có thể phức tạp chuyện tình cảm.',
    satLoQuanTang: '<b>Sát lộ, Quan tàng</b> (buổi 21): Thất Sát lộ ở thiên can còn Chính Quan ẩn trong địa chi – trong mắt người khác mình có vẻ ngang ngược, hung hăng, nhưng bên trong là người có lý lẽ, nguyên tắc.',
    quanSatKhongVong: '<b>Quan Sát rơi vào Không vong</b> (buổi 21): có chức vụ nhưng không có thực quyền, hoặc nhận danh nghĩa mà không có công việc thực.',
    quanTrenKiep: '<b>Quan nằm trên đầu Kiếp / Dương nhận</b> (buổi 21, 24): một trụ có Chính Quan/Thất Sát ở thiên can và Kiếp Tài ở địa chi. Ở trụ năm thường báo hiệu trong họ hàng có người gặp thương tích; có Nguyệt Đức, Thiên Đức, Thiên Ất thì giảm nhẹ sự cố.',
    coDonNhieuKiep: '<b>Cô đơn vì Tỷ Kiếp quá nhiều</b> (buổi 18): đông bạn bè, anh em nhưng ai cũng giữ cái tôi riêng – vẫn thấy cô đơn.',
    coDonKhongKiep: '<b>Cô đơn vì không có Tỷ Kiếp</b> (buổi 18): ít người đồng hành ngang hàng; cần các hoạt động định vị bản thân, tìm cộng đồng hợp với mình.',
    coDonQuanKhac: '<b>Cô đơn vì Quan Sát khắc Tỷ Kiếp</b> (buổi 18): có bạn bè nhưng vị trí, trách nhiệm (như “lớp phó kỷ luật”, người giữ bí mật) khiến khó chia sẻ thật lòng.',
    tranhDoatVoIch: '<b>Tranh đoạt vô ích</b> (buổi 18): Tỷ Kiếp tàng trong địa chi mà Tài và Quan Sát đều ít – hay vướng vào những cuộc tranh giành (chức vụ, quyền lợi) mà giành được cũng chẳng được lợi gì. Lời khuyên: đừng nghĩ nhiều đến chuyện tranh đoạt.',
    tyKiepLo: 'Tỷ Kiếp <b>lộ</b> ở thiên can (buổi 18): bạn bè, đồng đội công khai – người ngoài nhìn vào biết ngay mình có nhiều bạn. Tỷ Kiếp ở trụ nào thì có cạnh tranh ở lĩnh vực của trụ đó (Tỷ Kiên: cạnh tranh cùng ngành; Kiếp Tài: khác ngành).',
    tyKiepTang: 'Tỷ Kiếp chỉ <b>tàng</b> trong địa chi (buổi 18): thường thân ngầm, “chơi ngầm” với người khác – quan hệ bạn bè kín đáo.',
    thienTaiNhieu: '<b>Thiên Tài nhiều</b> (buổi 20): tin rằng nhiều chuyện giải quyết được bằng tiền, dễ đầu tư vào thứ rủi ro thất bại cao; cẩn thận sa đà cờ bạc, số đề, bị lừa.',
    thanVuongThemAn: '<b>Nhật chủ vượng mà thêm nhiều Ấn</b> (buổi 21): dễ trì trệ, “bị over thinking”; cần hành động, tạo tác qua Thực Thương.',
    thanVuongThemKiep: '<b>Nhật chủ vượng mà thêm nhiều Tỷ Kiếp</b> (buổi 21): cái tôi rất cao, dễ phản tác dụng; Nhật chủ mạnh cần được khai thác và quản chế.',
    // Ngoài giáo trình – tham khảo
    thuongBoiAn: 'Thương quan bội Ấn <i>(tham khảo – ngoài bài giảng)</i>: tài hoa có kiểm soát, sáng tạo được nuôi bằng kiến thức.',
    taiSinhQuan: 'Tài sinh Quan <i>(tham khảo – ngoài bài giảng)</i>: tiền bạc hỗ trợ danh vị, làm ăn đi đôi với uy tín.',
    thucSinhTai: 'Thực Thương sinh Tài <i>(tham khảo – ngoài bài giảng)</i>: tài năng biến thành tiền. Bài giảng có ý tương tự: Thực Thương là “thực tài” của Tài tinh – Tài là cơ hội kiếm tiền, Thực Thương là khả năng tự làm ra sản phẩm để nắm cơ hội đó.',
    kiepDoatTai: 'Kiếp tài đoạt Tài <i>(tham khảo – ngoài bài giảng)</i>: tiền dễ bị chia, hao vì bạn bè – hùn hạp; nên tách bạch tài chính.',
    taiDaThanNhuoc: 'Tài đa thân nhược <i>(tham khảo – ngoài bài giảng)</i>: cơ hội tiền bạc nhiều nhưng sức không gánh nổi – nên hợp tác, xây năng lực trước.'
  };
  // Cấu trúc lá số theo thập thần nổi trội (cách thầy gọi “cách cục” của một lá số)
  T.cauTruc = {
    0: 'thiên về Tỷ Kiên – sống theo bản sắc cá nhân, tự chủ, tư duy song hành',
    1: 'thiên về Kiếp Tài – thích ganh đua, mạng lưới rộng, năng động',
    2: 'thiên về Thực Thần – sáng tạo nhẹ nhàng, biết tận hưởng, có khả năng đánh giá',
    3: 'thiên về Thương Quan – phá cách, tạo xu thế mới, thích thách thức',
    4: 'thiên về Thiên Tài – nhạy cơ hội, buôn bán, đầu tư',
    5: 'thiên về Chính Tài – chăm chỉ, rõ ràng thù lao, giỏi quản lý',
    6: 'thiên về Thất Sát – bản lĩnh, chịu áp lực, quyết liệt',
    7: 'thiên về Chính Quan – trách nhiệm, liêm chính, theo khuôn khổ',
    8: 'thiên về Thiên Ấn – trực giác, kiến thức độc lạ, dự đoán',
    9: 'thiên về Chính Ấn – ham học, bao dung, cần sự rõ ràng an toàn'
  };

  BT.tt = T;
})();
