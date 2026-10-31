// Kho tri thức luận giải – tổng hợp từ 23 buổi bài giảng BTK1 và lý thuyết Bát Tự nền tảng
(function () {
  var T = {};

  // ===== 10 Thiên Can (Nhật chủ) =====
  T.can = [
    { ten: 'Giáp', hinhTuong: 'Cây đại thụ – vươn thẳng, sống theo cách của mình', tinhCach: 'Thẳng thắn, có lý tưởng, nhìn đường dài, không giữ thù lâu. Tạo cho người khác cảm giác rất “con người”, dễ nói chuyện, dễ chơi. Câu cửa miệng ngầm của người Giáp: “mình là cây, việc của mình là sống” – họ thể hiện cá tính và lập trường độc đáo một cách tự nhiên.', diemManh: 'Hay được người khác giới thiệu cơ hội, công việc; khó từ chối khi người khác cần giúp – cho đi nhiều, thậm chí hơn mức cần thiết (có thể vừa càm ràm vừa giúp). Dễ được lộc về nơi ở, nhà đất vì gánh vác nhiều.', thuThach: 'Cái tôi cao, lời thẳng vô tình xúc phạm người khác vì không để ý cảm xúc người nghe. Khi có lý tưởng/tham vọng lớn có thể bất chấp, không nghe góp ý, thậm chí đụng vào quyền lợi người khác.', congViec: 'Giáo dục, đào tạo, phát triển con người, khởi xướng dự án dài hạn, tư vấn, xuất bản, môi trường – nông lâm, y dược thảo, các vị trí cần tầm nhìn và sự kiên định.', loiKhuyen: 'Trước khi nói thẳng, tự hỏi: sự thẳng này có đáng và có giúp được người kia không? Học cách nhận góp ý khi theo đuổi tham vọng.' },
    { ten: 'Ất', hinhTuong: 'Cỏ cây, dây leo – mềm dẻo, bám rễ và hồi sinh', tinhCach: 'Khéo léo trong giao tiếp hơn Giáp nhưng vẫn thẳng (thẳng là bản chất của Mộc). Dễ kết nối, tạo cảm giác bạn bè. Linh hoạt nhất trong 10 can – linh hoạt bằng sự thích nghi (khác Thủy linh hoạt bằng thấu hiểu).', diemManh: 'Khả năng phục hồi sau biến động nhanh nhất trong 10 can. Chăm chỉ học, chăm chỉ làm, mài giũa tay nghề tới mức sắc bén – chính họ là một “xưởng sản xuất”: mất hết vẫn tự làm lại được từ con số không.', thuThach: 'Tài sản, mối quan hệ hay công việc có thể mất đi đột ngột (1 tháng trước có tiền, 1 tháng sau về số 0). Thử thách lớn nhất: chạy theo sự chú ý của người khác, để sự tự tin phụ thuộc vào ánh nhìn bên ngoài thay vì giá trị bên trong.', congViec: 'Nghề thủ công, kỹ năng chuyên môn, thiết kế, nghệ thuật biểu diễn, ngoại giao, tư vấn, thương mại linh hoạt, làm đẹp, chăm sóc.', loiKhuyen: 'Đầu tư vào tay nghề – đó là tài sản không ai lấy được. Khi thấy mình bắt đầu làm mọi thứ để được chú ý, quay về với điều mình thật sự giỏi.' },
    { ten: 'Bính', hinhTuong: 'Mặt trời – rực rỡ, chiếu sáng cho tất cả', tinhCach: 'Nhiệt tình, cởi mở, hào phóng, thích được thấy và thích làm người khác vui. Hướng về tương lai, đổi mới, cải tiến. Bên trong có khả năng kiểm soát và dàn xếp khéo léo.', diemManh: 'Biết sắp đặt, dàn xếp, nói chuyện để mọi thứ cuối cùng đạt mục tiêu (kiểu “đòi nợ” khéo nhất lại là người Hỏa). Truyền năng lượng, truyền cảm hứng.', thuThach: 'Hỏa nhiều thì rất khắt khe với sai lầm của chính mình, khó tự thông cảm, ép bản thân quên mất mình cũng là con người. Bên ngoài cười chuyên nghiệp nhưng bên trong có thể không vui.', congViec: 'Truyền thông, giải trí, sân khấu, marketing, giảng dạy, chính trị – lãnh đạo, năng lượng, công nghệ hiển thị, các vai trò dẫn dắt.', loiKhuyen: 'Cho phép mình sai và học từ sai. Ánh sáng bền nhất là ánh sáng không đốt cháy chính mình.' },
    { ten: 'Đinh', hinhTuong: 'Ngọn đèn, ngọn nến – lửa luyện, tinh chỉnh, chiếu sâu', tinhCach: 'Tập trung, tinh tế, có tiêu chuẩn rất cao. Đinh Hỏa là lửa luyện kim: giúp tư duy và quan điểm được tinh luyện thành năng lực cụ thể qua cam kết với tiêu chuẩn.', diemManh: 'Khả năng kiếm tiền tốt nhờ chuẩn mực cao – làm ra thứ gì cũng đạt chất lượng. Khéo kiểm soát, sắp đặt, dàn xếp. Giỏi đặt mục tiêu và đi tới cùng.', thuThach: 'Khắt khe với bản thân và người khác; khi lửa quá vượng thì nóng vội, dễ kiệt sức. Đôi khi giữ cảm xúc bên trong quá lâu.', congViec: 'Tinh chỉnh – kiểm định chất lượng, nghiên cứu, kỹ thuật chính xác, tâm linh – tín ngưỡng, tư vấn chuyên sâu, ẩm thực, sáng tạo nội dung chất lượng cao.', loiKhuyen: 'Thiền, chép kinh sách, tập trung vào một việc là cách “luyện Hỏa” tốt nhất. Đặt tiêu chuẩn cao nhưng vẫn có chỗ cho sự bao dung.' },
    { ten: 'Mậu', hinhTuong: 'Núi lớn, đê đập – nền tảng, trụ cột', tinhCach: 'Xác định trọng tâm, xây nền tảng và trụ cột. Có cái nhìn quan sát hoàn cảnh xung quanh và lòng từ bi: nếu điều mình làm ra giảm được đau khổ cho người khác thì sẽ làm.', diemManh: 'Từ bi, giúp nhiều người nên về mặt tâm linh hay được “độ”, được che chở. Đủ năng lực để chuyển hướng khi thấy không hợp.', thuThach: 'Tâm lý “đứng núi này trông núi nọ” thời trẻ – dễ tốn tiền học hết ngành này sang ngành khác. Đã kết luận thì khó nghĩ lại. Hay so sánh, có xu hướng độc tôn, lập dị, tạo cảm giác “trên cơ” người khác nên không phải lúc nào cũng được thiện cảm; đôi khi vướng tranh chấp vì hiểu lầm hay chuyện bí mật.', congViec: 'Quản trị, xây dựng, bất động sản, bảo hiểm, ngân hàng tích lũy, tổ chức – hành chính, các vai trò làm “trụ cột” cho tập thể, công tác xã hội – từ thiện.', loiKhuyen: 'Trước khi đổi hướng, hỏi: mình đang chạy trốn hay đang tiến tới? Tập xem lại kết luận cũ khi có dữ kiện mới.' },
    { ten: 'Kỷ', hinhTuong: 'Đất ruộng vườn – nuôi dưỡng, tồn chứa, tích lũy', tinhCach: 'Quan tâm và chăm sóc thế giới tinh thần, thích phát triển đời sống nội tâm. Đặc trưng là tồn chứa, tích lũy, cung cấp tài nguyên cho người khác (như một thư viện).', diemManh: 'Nuôi dưỡng, chăm sóc, chiêm nghiệm – suy nghiệm sâu (Jung và Freud – hai người đặt nền móng phân tâm học – đều sinh ngày Kỷ Sửu). Biết giữ, biết tích.', thuThach: 'Dễ sa đà vào phù phiếm: cần giấy tờ, danh phận, chức tước để cảm thấy được thừa nhận; sưu tầm quá nhiều một thứ để trấn an tinh thần. Lúc nóng dễ hiểu lầm người khác, khi mọi chuyện dịu xuống mới nhận ra.', congViec: 'Giáo dục, tâm lý – phân tâm, chăm sóc sức khỏe, nhân sự, lưu trữ – thư viện, quản lý tài nguyên, nông nghiệp, ẩm thực, dịch vụ khách hàng.', loiKhuyen: 'Giá trị của bạn không nằm trong giấy chứng nhận. Khi đang nóng, hoãn kết luận về người khác.' },
    { ten: 'Canh', hinhTuong: 'Kim loại thô, đao kiếm – quyết đoán, thi hành', tinhCach: 'Coi trọng tự do và độc lập nhất trong 10 can: cần thời gian biến kiến thức thành của mình rồi tự quyết. Thích thì làm, không bận tâm ánh nhìn người khác. Quyết đoán (người năm Canh hết tiền vẫn chọn mua thuốc lá để bình tĩnh nghĩ giải pháp).', diemManh: 'Tiếp thu kỹ thuật nhanh, giỏi phân tích (dữ liệu, số liệu, thiết kế, máy móc). “Tài làm kinh tế” thực chất là năng lực thi hành – biến cái vô hình thành hữu hình, vạch lập luận và lý lẽ. Có Quý Thủy thì hùng biện; có Nhâm Thủy thì giỏi thương thuyết, trình diễn.', thuThach: '“Canh biến vi cô”: người khác khó bước vào thế giới tinh thần của họ nên dù sống chung vẫn có cảm giác cô đơn tinh thần. Không có Thủy thì nói thẳng chứ chưa khéo.', congViec: 'Kỹ thuật, cơ khí, phân tích dữ liệu, tài chính – kinh tế, luật, quân đội – công an, quản lý vận hành, phẫu thuật.', loiKhuyen: 'Chủ động mở một cánh cửa cho người thân bước vào thế giới của bạn – tự do không có nghĩa là cô lập.' },
    { ten: 'Tân', hinhTuong: 'Trang sức, kim loại quý – tinh xảo, điểm nhấn, giá trị', tinhCach: 'Tình cảm nhiều hơn vẻ ngoài. Sáng suốt nằm ở cách xác định LÝ DO để làm việc gì – từ ngoài nhìn vào có vẻ lập dị, liều, bất cần (Tân là can hay tạo cảm giác bất cần nhất).', diemManh: 'Tạo điểm nhấn, sự sang trọng, mang tính biểu tượng và đảm bảo; truyền thông điệp tốt. Tiếp thu kỹ thuật nhanh, phân tích giỏi. Khẳng định giá trị khi được làm, được sáng tạo, tạo tác.', thuThach: 'Để tâm quá nhiều tới ánh nhìn, đánh giá, phán xét; sợ việc mình làm gây thiệt hại cho người khác → tự gò bó trong đúng–sai, phải–trái, tự trói chân mình.', congViec: 'Thiết kế, trang sức – thời trang, nghiên cứu lý thuyết, tài chính, ngôn ngữ, nghệ thuật, kiểm định, luật, truyền thông thương hiệu.', loiKhuyen: 'Đừng chờ đúng tuyệt đối mới làm. Giá trị của bạn hiện ra trong lúc tạo tác, không phải trong lúc lo lắng.' },
    { ten: 'Nhâm', hinhTuong: 'Sông lớn, biển cả – lưu chuyển, bao trùm', tinhCach: 'Thích tự do, ghét bị gò bó. Trong tập thể luân phiên giữa hòa hợp và chuyên quyền (khi mọi thứ hỗn loạn thì tự quyết, tự sắp xếp hết). Nhẫn nhịn để giữ hòa khí, nhưng khi bị dồn ép quá giới hạn thì cảm xúc bộc phát dồn dập; có thể đổi thái độ rất nhanh khiến người khác không kịp phản ứng.', diemManh: 'Tư duy linh hoạt, tiếp cận vấn đề bằng nhiều góc. Giỏi tham mưu: đưa sản phẩm cho Nhâm, họ chỉ ra bán cho ai, truyền đạt thế nào. Điều phối, phân phối, chuỗi cung ứng, buôn bán. Huy động được nguồn lực của người xung quanh. Nhiều người Nhâm khởi nghiệp, làm tâm lý học.', thuThach: 'Kỳ vọng cao với người khác, kiến thức rộng và nhảy ý nhanh nên người nghe khó theo kịp – cần kiên nhẫn khi truyền đạt cho nhân sự. Sách xưa nói Nhâm hay gặp vấn đề về con cái (thực tế thường là kỳ vọng quá cao).', congViec: 'Kinh doanh, phân phối, logistics, xuất nhập khẩu, khởi nghiệp, tham mưu chiến lược, tâm lý học, truyền thông, du lịch.', loiKhuyen: 'Nói chậm lại, chia nhỏ ý khi hướng dẫn người khác. Xả áp lực đều đặn thay vì chờ đến lúc vỡ đê.' },
    { ten: 'Quý', hinhTuong: 'Mưa, sương, mạch nước ngầm – thấm sâu, nuôi dưỡng âm thầm', tinhCach: 'Cảm xúc sâu, trực giác mạnh, thích tìm hiểu ẩn dụ, biểu tượng, câu chuyện phía sau sự việc. Linh hoạt bằng sự thấu hiểu.', diemManh: 'Dù buồn chuyện gia đình, tình cảm nhưng ra ngoài rất hay được người ngoài thương và sẵn sàng giúp. Có khả năng sáng tác theo bản năng, viết lách giúp tự khám phá bản thân. Nhiều người Quý làm tâm lý học.', thuThach: 'Tính “si”: khi bất ổn cảm xúc dễ suy diễn, tưởng tượng người khác ghét mình, hại mình, phản bội mình (“7749 âm mưu trong công ty”).', congViec: 'Tâm lý, tư vấn, nghiên cứu, viết lách – sáng tác, nghệ thuật, tâm linh, y học, dịch vụ chăm sóc, phân tích thông tin.', loiKhuyen: 'Chìa khóa giảm “si” là đối diện bản thân: không thể chắc người khác nghĩ gì, nhưng có thể gọi tên cảm xúc của chính mình và cảm xúc nằm sau nó. Viết nhật ký.' }
  ];

  // ===== Ngũ hành =====
  T.hanh = [
    { ten: 'Mộc', banChat: 'Ngũ hành của con người: lập trường, quan điểm, cá tính, sự phát triển, lòng nhân. Quyết định dựa trên điều mình thích, mình tin.', thua: 'Cố chấp với quan điểm, cái tôi lớn, mâu thuẫn với khuôn khổ (Thổ), dễ bốc đồng theo lý tưởng.', thieu: 'Không có nghĩa là vô nhân tính. Thường ít thể hiện lập trường riêng, dễ dao động theo hoàn cảnh; nên bổ sung bằng hoạt động Mộc (đọc sách phát triển bản thân, trồng cây, đi giữa thiên nhiên, học kỹ năng mới).', mau: 'Xanh lá', huong: 'Đông', hoatDong: 'Trồng cây, đi bộ trong thiên nhiên, đọc sách, học kỹ năng mới, giúp đỡ người khác, yoga – giãn cơ', nghe: 'Giáo dục, xuất bản, thời trang, nông lâm, dược thảo, nhân sự, phát triển con người', coQuan: 'Gan, mật, gân cơ, mắt, hệ thần kinh ngoại biên' },
    { ten: 'Hỏa', banChat: 'Ý chí, nghị lực, sự trực quan rõ ràng, hướng về tương lai, cống hiến, chuyên tâm; khả năng kiểm soát và dàn xếp.', thua: 'Nóng vội, khắt khe với bản thân, khó tự thông cảm, dễ kiệt sức; nội tâm có thể rất chi tiết tốn năng lượng.', thieu: 'Khó tập trung lâu, thiếu động lực rõ ràng. Thiền, chép kinh, chép tài liệu, theo đuổi mục tiêu cụ thể là cách “luyện Hỏa”; một niềm tin – đức tin cũng là Hỏa.', mau: 'Đỏ, hồng, tím, cam', huong: 'Nam', hoatDong: 'Thiền định, chép kinh sách, đặt mục tiêu, thể thao cường độ, tắm nắng, sinh hoạt tín ngưỡng, thuyết trình', nghe: 'Truyền thông, giải trí, marketing, năng lượng, ẩm thực, công nghệ, tâm linh, giảng dạy', coQuan: 'Tim, mạch máu, ruột non, huyết áp, mắt (thị lực)' },
    { ten: 'Thổ', banChat: 'Trách nhiệm, sự từ tốn, an toàn, ổn định, tích lũy, quan tâm địa vị – danh phận và trật tự xã hội.', thua: 'Nặng nề trách nhiệm, bảo thủ, chọn an toàn quá mức; Thổ + Kim nhiều dễ quá lý sự, giải quyết mọi thứ bằng lý lẽ.', thieu: 'Hay vội, thiếu từ tốn, khó xác định khi nào làm gì – nhưng đổi lại linh hoạt, ít bị ràng buộc bởi khuôn khổ.', mau: 'Vàng, nâu, be', huong: 'Trung tâm, Đông Bắc, Tây Nam', hoatDong: 'Lập kế hoạch, giữ lịch sinh hoạt đều, nấu ăn, làm vườn, tiết kiệm – tích lũy, chăm sóc nhà cửa', nghe: 'Bất động sản, xây dựng, bảo hiểm, quản trị, kho vận, nông sản, hành chính', coQuan: 'Dạ dày, tỳ vị, hệ tiêu hóa, cơ bắp' },
    { ten: 'Kim', banChat: 'Lập luận, lý lẽ, nguyên tắc, kỷ luật, khả năng thi hành biến vô hình thành hữu hình; tính biểu tượng và đảm bảo.', thua: 'Cứng nhắc, quá lý sự, sát phạt; dễ cô đơn tinh thần vì khó cho người khác bước vào.', thieu: 'Thiếu nguyên tắc, khó dứt khoát, khó biến ý tưởng thành sản phẩm cụ thể.', mau: 'Trắng, bạc, ánh kim', huong: 'Tây', hoatDong: 'Tập gym – võ, sắp xếp dọn dẹp, viết quy tắc cá nhân, phân tích số liệu, đeo trang sức kim loại', nghe: 'Tài chính – ngân hàng, cơ khí, kỹ thuật, luật, phân tích dữ liệu, trang sức, quân đội', coQuan: 'Phổi, đại tràng, da, hệ hô hấp, xương răng' },
    { ten: 'Thủy', banChat: 'Trí tuệ, sự thấu hiểu, linh hoạt, lưu thông, vượt ngoài khuôn phép – hình tướng thông thường; khả năng thống trị và điều phối.', thua: 'Nghĩ ngược trật tự, có lúc chống đối khuôn phép; cảm xúc dồn dập; sức khỏe dễ có vấn đề tai, ứ nước, thận (Beethoven Thủy vượng mất dần thính giác).', thieu: 'Ít linh hoạt, khó thấu hiểu góc nhìn khác; nhưng nếu Nhật chủ là Nhâm/Quý thì bản thân vẫn có Thủy trong tư tưởng và cách đối xử.', mau: 'Đen, xanh dương, xanh navy', huong: 'Bắc', hoatDong: 'Bơi lội, du lịch, viết lách, nghe nhạc, trò chuyện sâu, tự phản tỉnh, uống đủ nước', nghe: 'Thương mại, phân phối – logistics, tâm lý học, truyền thông, du lịch, nghiên cứu, thủy sản', coQuan: 'Thận, bàng quang, tai, hệ tiết niệu – sinh dục, xương tủy' }
  ];

  // ===== Thập thần =====
  T.thapThan = [
    { ten: 'Tỷ Kiên', tuKhoa: 'Bản sắc cá nhân, tự chủ, tư duy song hành', tichCuc: 'Bản sắc riêng rõ ràng; tư duy song hành – cho phép nhiều lối nghĩ cùng tồn tại nên lại phối hợp tốt với người khác, tìm giải pháp toàn diện. Động lực làm việc từ niềm kiêu hãnh và tự hào.', tieuCuc: 'Cạnh tranh với người giống mình, cố chấp, xài tiền thoáng.', nhieu: 'Cái tôi rất cao, khó hợp tác, dễ hao tài vì anh em bạn bè; cần Thực Thương (tự làm, sáng tạo, chăm sóc người khác, thuyết trình) hoặc Quan Sát để cân bằng.', thieu: 'Ít bạn đồng hành, dễ thiếu tự tin; cần hoạt động định vị bản thân. (Có chữ Quý thì vẫn hay được người ngoài giúp.)', nghe: 'Stylist, phát triển phong cách cá nhân, nghề tự do, huấn luyện thể chất, đồng sáng lập', lucThan: { nam: 'Anh em, bạn bè cùng giới', nu: 'Chị em, bạn bè cùng giới' } },
    { ten: 'Kiếp Tài', tuKhoa: 'Ganh đua, xã giao, chiếm lĩnh', tichCuc: 'Thích ganh đua, cạnh tranh trong tập thể kể cả với người khác mình; năng động, dám làm, mạng lưới rộng.', tieuCuc: 'Liều lĩnh, tranh đoạt, hao tài vì bạn bè – hợp tác; “Kiếp tài đoạt tài”.', nhieu: 'Tiền đến rồi đi, dễ bị chia phần, cãi vã vì lợi ích; cẩn trọng hùn hạp.', thieu: 'Ít tinh thần cạnh tranh, ngại xã giao.', nghe: 'Quảng cáo, tuyển dụng, phát triển thương hiệu, bán hàng, thể thao, môi giới', lucThan: { nam: 'Anh chị em khác giới tính âm dương, đối thủ', nu: 'Anh chị em, đối thủ' } },
    { ten: 'Thực Thần', tuKhoa: 'Tạo tác, cảm thụ, đánh giá, hưởng thụ', tichCuc: 'Khả năng đánh giá, nhận xét; sáng tạo ôn hòa; cảm thụ ăn uống – hưởng thụ tinh tế. Thực thần chế Sát: trị được cả người nóng nảy, quyền uy.', tieuCuc: 'Cầu toàn, trì hoãn (phải thích thứ mình làm, phải diễn đạt trọn ý tưởng); năm gặp Thực thần dễ tăng cân.', nhieu: 'Trì hoãn, khó cam kết, tiền vận nhiều dự án thất bại để học – hậu vận thuận nhờ kinh nghiệm. Làm việc với họ nên đặt deadline xa và kiểm tra thường xuyên.', thieu: 'Khó biến kiến thức thành thực hành; ít thú vui, khó thư giãn.', nghe: 'Ẩm thực – sáng tạo công thức, bình luận, nghệ thuật, giáo dục, viết lách, dịch vụ trải nghiệm', lucThan: { nam: 'Con cháu (theo một số phái là cháu), học trò', nu: 'Con cái (đặc biệt con gái)' } },
    { ten: 'Thương Quan', tuKhoa: 'Phá cách, thách thức, tạo xu thế mới', tichCuc: 'Tạo tác để phá vỡ quy chuẩn thông thường, tạo xu hướng mới; tài năng biểu đạt, hùng biện, sáng tạo đột phá.', tieuCuc: 'Sách xưa không ưa – hay xem là “xấu tính”: thách thức, ngạo mạn, chống đối cấp trên (Thương quan kiến quan).', nhieu: 'Nặng tâm lý chống đối xã hội: hay đưa quan điểm ngược ngạo nghe có vẻ phá cách nhưng thực chất là chống đối; bất lợi trong việc được lòng người.', thieu: 'Ít dám phá khuôn, thiếu biểu đạt cá tính.', nghe: 'Nghệ thuật, sáng tạo nội dung, luật sư, phê bình, khởi nghiệp đổi mới, công nghệ đột phá, biểu diễn', lucThan: { nam: 'Con cái (theo một số phái), cấp dưới', nu: 'Con cái (đặc biệt con trai)' } },
    { ten: 'Thiên Tài', tuKhoa: 'Cơ hội, đầu tư, buôn bán, hào phóng', tichCuc: 'Nhìn ra vì sao người ta trả tiền và ai sẽ trả; nhạy cơ hội, dám đầu tư – đầu cơ – kinh doanh mạo hiểm; hào phóng, giao tiếp rộng.', tieuCuc: 'Tiền vào nhanh ra nhanh, ham vui, phiêu lưu tài chính.', nhieu: 'Tham, ham vật chất quá mức; tài đa thân nhược thì “thấy tiền mà không giữ được”.', thieu: 'Ít nhạy bén kinh doanh, ngại rủi ro.', nghe: 'Kinh doanh, buôn bán (từ 2 Thiên Tài trở lên là đã nghĩ chuyện buôn bán – nên bắt đầu từ vốn nhỏ), đầu tư, sales, môi giới', lucThan: { nam: 'Cha; người tình', nu: 'Cha' } },
    { ten: 'Chính Tài', tuKhoa: 'Thù lao xứng đáng, chăm chỉ, quản lý', tichCuc: 'Chăm chỉ, làm xong việc – miễn là rõ ràng tiền lương và thấy công sức bỏ ra xứng với thù lao; chủ động đề xuất cách làm hiệu quả; quản lý tốt cuộc sống cá nhân và tập thể.', tieuCuc: 'Tính toán, bảo thủ về tiền, quá thực dụng.', nhieu: 'Tham, nặng vật chất, keo kiệt; tài nhiều mà thân nhược thì gánh không nổi.', thieu: 'Khó quản lý tài chính đều đặn; với nam có thể chậm duyên vợ.', nghe: 'Kế toán, tài chính, quản lý, hành chính, ngân hàng, kinh doanh ổn định', lucThan: { nam: 'Vợ', nu: 'Cô, dì phía cha; tài sản' } },
    { ten: 'Thất Sát', tuKhoa: 'Quyền uy, áp lực, dũng cảm, kỷ luật thép', tichCuc: 'Quyết liệt, dũng cảm, uy nghiêm, chịu áp lực tốt, dám chịu trách nhiệm lớn; động lực từ trách nhiệm.', tieuCuc: 'Nóng nảy, áp đặt, chịu nhiều áp lực – bị chèn ép; sức khỏe “bình thường không bệnh, đùng phát phải cấp cứu”.', nhieu: 'Áp lực đè nặng; cần Ấn hóa Sát (chính ấn tốt hơn thiên ấn) hoặc Thực thần chế Sát. Những năm Ấn bị khắc thì gây gổ, sự cố nặng hơn.', thieu: 'Ít áp lực nhưng có thể thiếu quyết liệt, thiếu kỷ luật.', nghe: 'Quân đội, công an, phẫu thuật, quản lý khủng hoảng, thể thao đối kháng, lãnh đạo doanh nghiệp', lucThan: { nam: 'Con trai (theo phái cổ), cấp trên khắt khe', nu: 'Chồng/người tình (tình nhân), người quyền uy' } },
    { ten: 'Chính Quan', tuKhoa: 'Trách nhiệm, liêm chính, danh dự, trật tự', tichCuc: 'Làm tròn trách nhiệm, liêm chính, thanh bạch; tuân thủ – có uy tín, được tin tưởng giao việc; hợp thăng tiến trong tổ chức.', tieuCuc: 'Câu nệ, sợ sai, ngại thay đổi.', nhieu: 'Quan nhiều thành Sát: áp lực, gò bó; “Quan sát hỗn tạp” khi có cả Quan lẫn Sát lộ.', thieu: 'Thiếu khung kỷ luật, ít muốn ràng buộc; với nữ có thể chậm duyên chồng.', nghe: 'Công chức, quản lý, luật, hành chính, giáo dục, quản trị doanh nghiệp', lucThan: { nam: 'Con gái (theo phái cổ), cấp trên', nu: 'Chồng' } },
    { ten: 'Thiên Ấn', tuKhoa: 'Trực giác, kiến thức độc lạ, dự đoán', tichCuc: 'Nhận biết thông tin hữu ích bằng trực giác; phân tích biểu tượng; dự đoán xu hướng thị trường; hợp huyền học, tâm linh, nghiên cứu.', tieuCuc: 'Khi là kỵ thần dễ hoang tưởng; tha thứ kiểu “cho qua, làm ngơ” – lâu dần sinh tác dụng phụ. Kiêu thần đoạt thực: thấy vấn đề người khác lờ đi và nói ra, bất lợi được lòng người.', nhieu: 'Cô độc, đa nghi, lý thuyết nhiều hành động ít; Nhật chủ vượng mà thêm Ấn thì trì trệ, overthinking.', thieu: 'Ít trực giác, khó học những thứ trừu tượng.', nghe: 'Huyền học, tâm lý, nghiên cứu, y học cổ truyền, phân tích thị trường, IT, nghệ thuật độc lập', lucThan: { nam: 'Mẹ kế, người nuôi dưỡng không chính thức', nu: 'Mẹ kế, dì' } },
    { ten: 'Chính Ấn', tuKhoa: 'Học hỏi, bao dung, an toàn, che chở', tichCuc: 'Muốn học và học vào; coi trọng ổn định an toàn; đòi hỏi mọi thứ cụ thể rõ ràng; bao dung tha thứ nhờ phân tích và hiểu. Có Ấn thì gặp bệnh nhẹ hơn, dễ gặp người chỉ cách chữa, khi bị chèn ép có người bênh vực.', tieuCuc: 'Không thoải mái với mơ hồ; dựa dẫm, chậm hành động.', nhieu: 'Khi stress/tổn thương dễ rơi vào thế giới riêng, coi người thân như người lạ; Ấn ở trụ tháng: tiêu chuẩn cao, kiểm tra kỹ (làm cùng hơi mệt).', thieu: 'Không muốn học hoặc học khó vào; thiếu điểm tựa tinh thần.', nghe: 'Giáo dục, nghiên cứu, y tế, văn hóa, xuất bản, tư vấn, bất động sản (Ấn liên quan nhà cửa)', lucThan: { nam: 'Mẹ', nu: 'Mẹ' } }
  ];

  // Thập thần theo vị trí trụ
  T.thapThanTru = {
    0: { Năm: 'Gia đình gốc có nền tảng độc lập; tuổi nhỏ sớm có ý thức cá nhân.', Tháng: 'Anh em bạn bè đông, môi trường làm việc nhiều cạnh tranh ngang hàng.', Giờ: 'Về già vẫn tự lập; con cái có cá tính mạnh.' },
    1: { Năm: 'Tuổi thơ có cạnh tranh trong gia đình, tài sản gốc bị chia.', Tháng: 'Đồng nghiệp – đối tác hay tranh phần, cẩn trọng hùn hạp.', Ngày: 'Người phối ngẫu cá tính mạnh, dễ tranh quyền trong nhà.', Giờ: 'Về già chi tiêu nhiều vì con cái, hậu bối.' },
    2: { Năm: 'Xuất thân có điều kiện hưởng thụ, gia đình ăn uống đầy đủ.', Tháng: 'Sự nghiệp dựa trên tài năng sáng tạo, chuyên môn.', Ngày: 'Phối ngẫu hiền, đời sống gia đình có hưởng thụ.', Giờ: 'Hậu vận an nhàn, con cái có tài; sản phẩm làm ra được yêu thích.' },
    3: { Năm: 'Tuổi nhỏ bướng bỉnh, có thể bất đồng với ông bà, cha mẹ.', Tháng: 'Dễ va chạm cấp trên, hợp nghề sáng tạo/tự do hơn làm công chức.', Ngày: 'Tình cảm vợ chồng dễ có tranh luận gay gắt.', Giờ: 'Con cái thông minh nhưng cá tính; sản phẩm mang tính phá cách.' },
    4: { Năm: 'Tổ nghiệp có tiền, được hưởng tài lộc gia đình.', Tháng: 'Nhạy cơ hội kinh doanh, kiếm tiền qua nhiều nguồn.', Ngày: 'Phối ngẫu giỏi xoay xở tiền bạc (nam: duyên tình phong phú).', Giờ: 'Về già có nguồn thu từ đầu tư, con cái làm kinh doanh.' },
    5: { Năm: 'Gia đình nề nếp, tài chính ổn định từ nhỏ.', Tháng: 'Sự nghiệp ổn định, thu nhập đều, giỏi quản lý.', Ngày: 'Nam: vợ đảm đang, giữ tiền; hôn nhân thực tế.', Giờ: 'Tích lũy tốt về già, tài sản tiết kiệm bền vững.' },
    6: { Năm: 'Tuổi nhỏ chịu áp lực/kỷ luật nghiêm từ gia đình.', Tháng: 'Môi trường làm việc khắc nghiệt, cấp trên nghiêm; hợp ngành đòi hỏi bản lĩnh.', Ngày: 'Nữ: chồng cá tính mạnh, quyết liệt; bản thân chịu nhiều áp lực.', Giờ: 'Con cái có chí lớn nhưng khó bảo; về già vẫn nhiều trách nhiệm.' },
    7: { Năm: 'Xuất thân gia đình có nề nếp, danh dự.', Tháng: 'Sự nghiệp trong tổ chức thuận, được trưởng bối nâng đỡ, dễ thăng tiến.', Ngày: 'Nữ: chồng đứng đắn, có trách nhiệm; bản thân sống nguyên tắc.', Giờ: 'Con cái ngoan, có địa vị; hậu vận được kính trọng.' },
    8: { Năm: 'Tuổi thơ có thể xa mẹ hoặc được người khác nuôi dưỡng; sớm có suy nghĩ riêng.', Tháng: 'Làm nghề chuyên môn đặc thù, tiêu chuẩn cao, kiểm tra kỹ.', Ngày: 'Nội tâm sâu, đôi khi cô độc ngay trong hôn nhân.', Giờ: 'Về già thiên về tu tập, nghiên cứu, tâm linh.' },
    9: { Năm: 'Được ông bà, cha mẹ che chở, học hành có nền tảng.', Tháng: 'Có quý nhân nâng đỡ trong công việc; tiêu chuẩn cao, kỹ lưỡng.', Ngày: 'Phối ngẫu chăm sóc, bao dung.', Giờ: 'Đầu tư thận trọng, kiểm tra rất kỹ, chọn sản phẩm bền vững an toàn; con cái hiếu thuận.' }
  };

  // ===== Ý nghĩa tứ trụ =====
  T.tru = {
    Năm: { yNghia: 'Gốc gác, ông bà – tổ tiên, cha mẹ, môi trường xã hội lớn; giai đoạn ~1–16 tuổi.', van: 'Năm/vận xung–phá–phục ngâm trụ năm: “bị đi” – phải đi xa, chuyển chỗ dù không muốn và gặp áp lực; dễ có chuyện liên quan cha mẹ, sức khỏe giảm.' },
    Tháng: { yNghia: 'Cha mẹ, anh chị em, cấp trên – trưởng bối, đồng nghiệp – đối tác; phong cách và cách quản lý công việc; lệnh tháng quyết định khí hậu cả lá số; giai đoạn ~17–32 tuổi.', van: 'Năm/vận xung–phá–hại trụ tháng: trục trặc với đồng nghiệp, cấp trên, đối tác; vấn đề xuất phát từ công việc; sức khỏe vùng lưng – thắt lưng; có thể đổi chỗ ở/chỗ làm.' },
    Ngày: { yNghia: 'Bản thân (thiên can – Nhật chủ: tư tưởng, quan điểm, cách đối xử với người thân thiết) và cung phối ngẫu (địa chi ngày); cách điều hành công việc và cuộc sống; giai đoạn ~33–48 tuổi.', van: 'Năm/vận xung–phá–hại–hình trụ ngày: dễ căng thẳng với người hôn phối (tính chất theo từng cặp), cần xem lại cách điều hành; phục ngâm trụ ngày: tiền có thể “bốc hơi” đột ngột, vấn đề với con hoặc hôn phối.' },
    Giờ: { yNghia: 'Con cái, học trò, cấp dưới, hậu bối; sản phẩm – thành quả; tài sản đầu tư – tiết kiệm; thế giới nội tâm; tuổi già (~49 tuổi trở đi).', van: 'Năm/vận xung–phá–phục ngâm trụ giờ: chuyện con cái làm buồn lòng (học tập, sức khỏe), sản phẩm/đầu tư biến động.' }
  };

  // ===== Quan hệ can–chi trong cùng một trụ =====
  T.canChi = {
    chiSinhCan: 'Chi sinh Can: dùng nguồn lực nội tại rải ra bên ngoài để tìm cơ hội – nhờ vậy hay gặp may bất ngờ.',
    canSinhChi: 'Can sinh Chi: năng lượng bên ngoài nuôi dưỡng nội tình – hay vất vả cho gia đình/người thân, cho đi nhiều hơn nhận.',
    dongHanh: 'Can Chi tương đồng (cùng hành): có thực lực, đạt thành tựu dựa vào thực lực bản thân; ít trông vào may mắn.',
    canKhacChi: 'Can khắc Chi: hoàn cảnh bên ngoài đè lên nội tình – kém may hơn, hay phải gồng mình trước áp lực bên ngoài.',
    chiKhacCan: 'Chi khắc Can: nội tình/gốc rễ chống lại điều thể hiện bên ngoài – dễ có mâu thuẫn giữa trong và ngoài, kém may hơn.'
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
    '0-5': 'Giáp–Kỷ hợp hóa Thổ (Trung chính chi hợp): coi trọng chữ tín, danh dự; dễ được tin tưởng, nhưng có thể vì giữ thể diện mà nhượng bộ.',
    '1-6': 'Ất–Canh hợp hóa Kim (Nhân nghĩa chi hợp): chuyện riêng/bí mật có xu hướng bị lộ ra, hoặc chính mình là người giãi bày chuyện riêng cho người khác.',
    '2-7': 'Bính–Tân hợp hóa Thủy (Uy chế chi hợp): phát triển trí tuệ rất nhiều, nhưng hay đi qua những tình huống bị quay lưng, bị rời bỏ trong quan hệ – cảm giác bị “đâm sau lưng” (sách Tây gọi là tổ hợp phản bội, thực chất thường chỉ là sự trở mặt, rời đi).',
    '3-8': 'Đinh–Nhâm hợp hóa Mộc (Dâm nặc chi hợp): tình cảm nồng nàn, đa cảm, giàu sức hút; cẩn trọng chuyện tình cảm phức tạp.',
    '4-9': 'Mậu–Quý hợp hóa Hỏa (Vô tình chi hợp): mang tính Hỏa – xác định một mục tiêu chính xác và chăm chăm đạt tới. Khi yêu thì nhiệt tình, hết lòng cho người trước mặt; xong chuyện lại quay về việc mình đang chú tâm, không mặn mà níu giữ. Trải qua những mối quan hệ nhạt dần nhưng có được sự thống nhất giữa trong và ngoài.'
  };
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
    '0-7': 'Tý–Mùi hại: tổn thương ngầm trong quan hệ thân thuộc; dễ hiểu lầm vì không nói ra; cẩn thận sức khỏe tiêu hóa – tiết niệu.',
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
  T.hinh = {
    'Vô ân chi hình': 'Dần–Tỵ–Thân (vô ân): giúp người mà không được đền đáp, dễ bị phụ lòng; cẩn thận tai nạn, kiện tụng, phẫu thuật.',
    'Trì thế chi hình': 'Sửu–Tuất–Mùi (trì thế): cậy thế, cố chấp, tranh chấp về đất đai – gia đạo; mâu thuẫn trong môi trường sống.',
    'Vô lễ chi hình': 'Tý–Mão (vô lễ): thiếu lễ độ trong quan hệ thân mật, va chạm vì lời nói, chuyện tình cảm rắc rối.'
  };
  T.tuHinh = 'Tự hình (Thìn–Thìn, Ngọ–Ngọ, Dậu–Dậu, Hợi–Hợi): tự làm khổ mình, tự mâu thuẫn nội tâm; trong lưu niên (ví dụ sinh ngày Ngọ gặp năm Ngọ) dễ căng thẳng với người hôn phối.';
  T.tamHop = ['Thủy cục (Thân–Tý–Thìn): trí tuệ, giao thiệp, lưu chuyển, khả năng huy động nguồn lực.', 'Mộc cục (Hợi–Mão–Mùi): nhân ái, phát triển, cộng đồng, sáng tạo.', 'Hỏa cục (Dần–Ngọ–Tuất): nhiệt huyết, ý chí, danh tiếng, hành động mạnh.', 'Kim cục (Tỵ–Dậu–Sửu): nguyên tắc, kỷ luật, thi hành, tài năng kỹ thuật.'];
  T.phucNgam = 'Phục ngâm (hai trụ giống hệt nhau): tình huống khó chịu lặp lại, “hai trụ giống nhau lắm nên luôn xảy ra vấn đề với nhau”; nhưng mở ra rất nhiều cơ hội tự phản tỉnh – người có phục ngâm thường trải qua nhiều chuyện và phát triển năng lực tự soi chiếu bản thân. Phục ngâm ngày–giờ: nuôi con vất vả, về già có xu hướng muốn ở một mình.';
  T.thienKhac = 'Thiên khắc địa xung (can khắc + chi xung): biến động mạnh cả bên ngoài lẫn bên trong, thay đổi lớn về chỗ ở, công việc hoặc quan hệ; cần giữ sức khỏe và tránh quyết định vội.';

  // ===== Thần sát =====
  T.thanSat = {
    'Thiên Ất Quý Nhân': 'Quý nhân bậc nhất: gặp nạn có người cứu, thoát hiểm thần kỳ (Stephen King bị xe tông vẫn sống sót). Dễ được giúp đỡ đúng lúc; hóa giải hung sát.',
    'Thái Cực Quý Nhân': 'Thiên về sự công bằng, nhân văn; dễ được tôn trọng, gia tăng địa vị; nửa là quyền tinh (công danh) nửa là sao hóa giải. Có duyên với triết học, tâm linh.',
    'Văn Xương': 'Thông minh, học giỏi, văn chương; thi cử thuận; hóa giải hung bằng trí tuệ.',
    'Quốc Ấn Quý Nhân': 'Chủ quyền hành, chức vụ, con dấu; may mắn trong thăng tiến – không hẳn lương cao mà là được trao vị trí, được công nhận; tính công bằng, nhân văn.',
    'Phúc Tinh Quý Nhân': 'Phúc khí, hóa giải tai họa – biến tình cảnh nguy hiểm thành ít nguy hiểm, thậm chí thành lợi thế; giúp hóa giải sự cố kiểu Kiếp sát. Người có sao này điềm đạm, xử lý vấn đề bình tĩnh, tuy có thể hơi khó gần, thích tự do đến – đi.',
    'Lộc Thần': 'Sao về tiền – lộc ăn lộc mặc, tự lập mà có của; ở trụ nào thì lộc đến từ phương diện đó.',
    'Kình Dương': 'Quyết liệt, mạnh mẽ, dám làm; nhưng gắn với “cướp” – cẩn thận mất mát, va chạm, phẫu thuật, cướp giật trộm cắp. Quan nằm trên đầu Kình dương ở trụ năm: họ hàng có người thương tích.',
    'Kim Dư': 'Số hay được người đưa đón, chở đi (ở trụ ngày: hay được bạn bè chở); có duyên với môi giới, giới thiệu sản phẩm – người khác giới thiệu không được nhưng mình đi thì được.',
    'Học Đường': 'Năng lực học tập; cùng Từ Quán là dấu hiệu nhà nghiên cứu, thành tích học thuật cao; đi với Thiên Y hợp học ngành y.',
    'Hồng Diễm': 'Cởi mở với nhiều quan điểm, ý kiến nên dễ được thiện cảm; quyến rũ, đa tình.',
    'Từ Quán': 'Thông minh học thuật – giải được bài khó, học một môn tới thông thạo; hợp giáo dục. Lưu niên xung/hại trụ có Từ Quán thì năng lực này bị ảnh hưởng.',
    'Đào Hoa': 'Sức hút, duyên dáng, quyến rũ (Mộc của sự thu hút); có từ 2 chữ Tý/Ngọ/Mão/Dậu trở lên thường ngoại hình có nét. Gặp hung sát thì cẩn thận chuyện tình cảm rắc rối.',
    'Dịch Mã': 'Thay đổi, dịch chuyển cả nghĩa đen lẫn nghĩa bóng: ở trụ nào thì vì phương diện đó mà di chuyển nhiều (trụ giờ: đi lại nhiều vì con cái). Hợp công việc đi lại, xuất ngoại.',
    'Hoa Cái': 'Thích nghiên cứu lĩnh vực trừu tượng, siêu hình: tín ngưỡng, tôn giáo, nghệ thuật, hội họa; cô độc thanh cao. Cùng trụ với Thiên/Chính Ấn: kiến thức sâu rộng trong một lĩnh vực.',
    'Tướng Tinh': 'Nghiêm, có thần thái khiến người khác kính nể hoặc nể sợ; liên quan công danh, khả năng lãnh đạo. Ở trụ năm: ra ngoài xã hội có uy.',
    'Kiếp Sát': 'Sự cố diễn ra nhanh, cướp bóc, tai nạn bất ngờ; tính cách quyết liệt, nhanh nhạy. Đi với Kình dương: cẩn thận cướp giật. Đi với Mão–Tuất hợp trong vận: phẫu thuật, dao kéo.',
    'Vong Thần': 'Mưu mô, tính toán, suy nghĩ thâm sâu; cũng chỉ sự mất mát của cải vô hình. Cùng Không Vong ở trụ tháng: dễ đột ngột mất việc.',
    'Tai Sát': 'Tai họa bất ngờ, kiện tụng, thương tích; cần cẩn trọng khi di chuyển.',
    'Cô Thần': 'Cảm giác cô đơn; ít nhiều trải qua chuyện buồn trong tình cảm hôn nhân (không nhất thiết ly hôn).',
    'Quả Tú': 'Cảm giác lẻ loi trong hôn nhân, tình cảm; tự lập, độc lập về cảm xúc.',
    'Hồng Loan': 'Vui vẻ, lạc quan, muốn tâm sự – chia sẻ; duyên tình cảm, cưới hỏi.',
    'Thiên Hỷ': 'Mang lại cảm giác an tâm, hài lòng cho người khác; không chấp hơn thua lâu – có nghĩ đến nhưng rồi bỏ qua; tin vui, hỷ sự.',
    'Thiên Đức Quý Nhân': 'Nhân từ, hiền hậu; hóa hung thành cát, giảm nhẹ tai họa. Năm gặp Thiên Đức: người phối ngẫu hiền hơn.',
    'Nguyệt Đức Quý Nhân': 'Nhân từ, hiền hậu, phúc đức; giảm nhẹ sự cố (kể cả cách “Quan đè Kình dương”).',
    'Thiên Y': 'Năng lực chữa lành, tìm ra “phương thuốc” cho người khác; đi với Học Đường/Từ Quán hợp học y.',
    'Không Vong': 'Trống rỗng – điều thuộc trụ đó dễ hư hao hoặc vốn vô hình; tài sản đầu tư vào thứ không hữu hình có thể biến mất. Ngày vào Không Vong + Vong Thần + Kiếp Sát: cẩn thận tai nạn bất ngờ. Mặt tích cực: hợp tâm linh, triết học, buông bỏ.',
    'Nguyên Thần': 'Đại hao: hao tổn, thị phi, bất an; tác động khác nhau tùy dương nam âm nữ hay âm nam dương nữ.',
    'Thiên La': 'Thiên La (nam ngày Tuất gặp Hợi): dễ bị vướng víu, trói buộc, khó thoát; cần kiên nhẫn.',
    'Địa Võng': 'Địa Võng (nữ ngày Thìn gặp Tỵ): dễ vướng lưới rắc rối, kiện tụng; cần cẩn trọng giấy tờ.',
    'Thiên La Địa Võng (Thìn–Tuất)': 'Có đủ Thìn và Tuất: cảm giác bị trói buộc giữa trời và đất, nhiều trở ngại; nhưng cũng là người kiên trì, hợp ngành luật, y, tâm linh.',
    'Thập Ác Đại Bại': 'Ngày Thập ác đại bại: dễ có suy nghĩ tiêu cực, hao tán của cải tổ nghiệp; cần tự lực gây dựng, tránh liều lĩnh tài chính.',
    'Âm Dương Sai Thác': 'Ngày Âm dương sai thác: chuyện hôn nhân – họ hàng nhà phối ngẫu dễ trắc trở, lệch pha.',
    'Khôi Cang': 'Ngày Khôi cang: thông minh, quyết đoán, có uy, tính cương; hợp lãnh đạo nhưng hôn nhân cần mềm mỏng.',
    'Cô Loan Sát': 'Ngày Cô loan: tình cảm dễ cô quạnh, khó hòa hợp; nên chủ động vun đắp quan hệ.',
    'Kim Thần': 'Giờ Kim thần: tính cương nghị, quyết đoán; cần Hỏa chế mới phát huy.',
    'Thiên Xá': 'Ngày Thiên xá: được “ân xá” – gặp lỗi lầm dễ được tha thứ, hóa giải; tai qua nạn khỏi.',
    'Tam Kỳ Quý Nhân': 'Tam kỳ quý nhân: tài năng xuất chúng, tư duy độc đáo, dễ thành danh; nếu kèm Từ quán, Học đường là tổ hợp học thuật rất mạnh.'
  };
  T.saoTot = ['Thiên Ất Quý Nhân', 'Thái Cực Quý Nhân', 'Văn Xương', 'Quốc Ấn Quý Nhân', 'Phúc Tinh Quý Nhân', 'Lộc Thần', 'Kim Dư', 'Học Đường', 'Từ Quán', 'Tướng Tinh', 'Hồng Loan', 'Thiên Hỷ', 'Thiên Đức Quý Nhân', 'Nguyệt Đức Quý Nhân', 'Thiên Y', 'Thiên Xá', 'Tam Kỳ Quý Nhân'];

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
  T.toHop = {
    satAn: 'Sát Ấn tương sinh: áp lực được chuyển hóa thành học hỏi và uy tín – người càng khó khăn càng trưởng thành, hợp vai trò lãnh đạo chuyên môn.',
    thucCheSat: 'Thực thần chế Sát: dùng tài năng, sự đánh giá tinh tế để chế ngự áp lực/quyền uy – xử lý được cả cấp trên nóng nảy.',
    thuongBoiAn: 'Thương quan bội Ấn: tài hoa có kiểm soát – sáng tạo được nuôi bằng kiến thức, hợp học thuật, nghệ thuật có chiều sâu.',
    thuongKienQuan: 'Thương quan kiến Quan: dễ va chạm cấp trên, quy định; cần học cách thể hiện cá tính mà không phá khung.',
    taiSinhQuan: 'Tài sinh Quan: tiền bạc hỗ trợ danh vị, làm ăn đi đôi với uy tín; vợ (nam) hoặc tài sản giúp sự nghiệp.',
    thucSinhTai: 'Thực Thương sinh Tài: tài năng biến thành tiền – kiếm tiền bằng sản phẩm, sáng tạo, chuyên môn của mình.',
    kieuDoatThuc: 'Kiêu thần đoạt Thực (Thiên Ấn khắc Thực thần): tiếp thu rất nhiều thông tin xung quanh, thấy vấn đề người khác lờ đi và nói ra – dễ bất lợi trong việc được lòng người; cẩn thận ăn uống, trầm cảm nhẹ.',
    kiepDoatTai: 'Kiếp tài đoạt Tài: tiền dễ bị chia, hao vì bạn bè – hùn hạp; nên tách bạch tài chính.',
    taiPhaAn: 'Tài phá Ấn: vì tiền mà bỏ học, hoặc chuyện tiền bạc gây bất hòa với mẹ/người che chở; cần cân bằng giữa kiếm tiền và học hỏi.',
    quanSatHonTap: 'Quan Sát hỗn tạp: cùng lúc có Chính Quan và Thất Sát lộ – hướng đi dễ phân tán, áp lực từ nhiều phía; với nữ có thể phức tạp chuyện tình cảm.',
    taiDaThanNhuoc: 'Tài đa thân nhược: cơ hội tiền bạc nhiều nhưng sức không gánh nổi – nên hợp tác, xây năng lực trước khi ôm việc lớn.',
    thanVuongThemAn: 'Thân vượng thêm Ấn: dễ trì trệ, suy nghĩ quá mức (overthinking); cần hành động, tiết tú qua Thực Thương.',
    thanVuongThemKiep: 'Thân vượng thêm Tỷ Kiếp: cái tôi rất cao, dễ phản tác dụng; Nhật chủ mạnh cần được khai thác và quản chế.'
  };

  BT.tt = T;
})();
