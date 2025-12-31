const questions = [
  {
    "id": 1,
    "text": "Câu 1. Nền tảng quản lý học tập (LMS) thường được sử dụng trong chuyển đổi số trong giáo dục là:",
    "choices": {
      "A": "Facebook, Zalo, TikTok",
      "B": "Moodle, Canvas, Google Classroom",
      "C": "Word, Excel, PowerPoint",
      "D": "Gmail Email, Hotmail, Yahoo Mail"
    },
    "answer": "B"
  },
  {
    "id": 2,
    "text": "Câu 2. Ứng dụng của trí tuệ nhân tạo (AI) trong giáo dục số là gì?",
    "choices": {
      "A": "Thay thế giáo viên về nhiệm vụ giảng dạy và ra đề",
      "B": "Giảm nội dung học tập của sinh viên",
      "C": "Xóa bỏ bài kiểm tra truyền thống",
      "D": "Cá nhân hóa lộ trình học tập và hỗ trợ cho từng sinh viên"
    },
    "answer": "D"
  },
  {
    "id": 3,
    "text": "Câu 3. Sinh viên cần trang bị kỹ năng gì để phù hợp với môi trường doanh nghiệp số?",
    "choices": {
      "A": "Ghi nhớ kiến thức về những tài liệu số hóa",
      "B": "Năng lực số, phân tích dữ liệu, tư duy đổi mới",
      "C": "Kỹ năng tin học văn phòng",
      "D": "Công nhân làm theo quy trình mà không cần trang bị kỹ năng mới"
    },
    "answer": "B"
  },
  {
    "id": 4,
    "text": "Câu 4. Một trong những lợi ích quan trọng của chuyển đổi số trong khởi nghiệp là:",
    "choices": {
      "A": "Loại bỏ hoàn toàn rủi ro kinh doanh",
      "B": "Không cần vốn khởi nghiệp",
      "C": "Không cần chiến lược phát triển",
      "D": "Dễ dàng tiếp cận thị trường toàn cầu"
    },
    "answer": "D"
  },
  {
    "id": 5,
    "text": "Câu 5. Văn hóa tổ chức như thế nào sẽ tác động đến chuyển đổi số trong doanh nghiệp?",
    "choices": {
      "A": "Chỉ cần công nghệ hiện đại là đủ",
      "B": "Văn hóa tôn trọng giá trị truyền thống",
      "C": "Văn hóa sáng tạo, học hỏi công nghệ và phương pháp mới",
      "D": "Văn hóa chăm lo đời sống tinh thần của nhân viên"
    },
    "answer": "C"
  },
  {
    "id": 6,
    "text": "Câu 6. Theo Nghị quyết số 03/NQ-CP, ngày 09/01/2025 của Chính phủ xác định mục tiêu của việc phát triển hạ tầng số xanh là:",
    "choices": {
      "A": "Đảm bảo phát triển công nghệ gắn liền với tiết kiệm năng lượng và bền vững",
      "B": "Tăng trưởng bằng cách gia tăng các hình thức sản xuất khác nhau",
      "C": "Đặt lợi nhuận lên hàng đầu",
      "D": "Tiết kiệm chi phí sản xuất"
    },
    "answer": "A"
  },
  {
    "id": 7,
    "text": "Câu 7. Khi xây dựng chiến lược chuyển đổi số trong giáo dục, yếu tố nào quyết định sự thành công lâu dài?",
    "choices": {
      "A": "Đầu tư thiết bị công nghệ hiện đại nhất và phần mềm tiên tiến nhất",
      "B": "Tăng học phí để bù chi phí công nghệ và đào tạo con người",
      "C": "Sự cam kết, tầm nhìn dài hạn của lãnh đạo và phát triển năng lực số cho giảng viên, sinh viên",
      "D": "Chỉ áp dụng cho một số khoa, ngành điển hình có trang bị công nghệ hiện đại"
    },
    "answer": "C"
  },
  {
    "id": 8,
    "text": "Câu 8. Một trường đại học đầu tư mạnh vào hạ tầng số, nền tảng học trực tuyến nhưng không đào tạo kỹ năng số cho giảng viên và sinh viên. Vấn đề chính yếu trong trường hợp này là:",
    "choices": {
      "A": "Chi phí quá cao trong đào tạo, bồi dưỡng nhân lực",
      "B": "Thiếu kinh phí trong triển khai kế hoạch chuyển đổi số trong giáo dục",
      "C": "Thiếu nguồn nhân lực chất lượng cao",
      "D": "Thiếu đầu tư đồng bộ giữa công nghệ và con người"
    },
    "answer": "D"
  },
  {
    "id": 9,
    "text": "Câu 9. Nếu trường đại học triển khai AI chatbot để hỗ trợ sinh viên nhưng không kiểm soát nội dung phản hồi, rủi ro lớn nhất là gì?",
    "choices": {
      "A": "Chatbot trả lời sai hoặc thiếu chính xác, ảnh hưởng đến uy tín và niềm tin của sinh viên",
      "B": "Tăng số lượng sinh viên hỏi",
      "C": "Sinh viên không biết sử dụng hệ thống như thế nào",
      "D": "Chatbot phản hồi chậm"
    },
    "answer": "A"
  },
  {
    "id": 10,
    "text": "Câu 10. Một trường đại học muốn áp dụng blockchain trong quản lý văn bằng, chứng chỉ. Lợi ích quan trọng nhất là gì?",
    "choices": {
      "A": "Đảm bảo tính minh bạch, chống làm giả, xác thực dễ dàng trên toàn cầu",
      "B": "Giảm chi phí quản lý văn bằng, chứng chỉ",
      "C": "Giảm chi phí in ấn văn bằng, chứng chỉ",
      "D": "Tăng tốc độ cấp phát bằng cấp, chứng chỉ"
    },
    "answer": "A"
  },
  {
    "id": 11,
    "text": "Câu 11. Mô hình doanh nghiệp số (Digital Business Model) được hiểu là gì?",
    "choices": {
      "A": "Cách doanh nghiệp sử dụng máy tính để lưu trữ hồ sơ khách hàng",
      "B": "Cách doanh nghiệp tạo ra giá trị và cung cấp sản phẩm/dịch vụ dựa trên công nghệ số, dữ liệu và nền tảng trực tuyến",
      "C": "Doanh nghiệp hoạt động hoàn toàn không có nhân viên mà chỉ dùng robot",
      "D": "Mô hình kinh doanh dựa trên cửa hàng vật lý và chuỗi cung ứng truyền thống"
    },
    "answer": "B"
  },
  {
    "id": 12,
    "text": "Câu 12. Trong hạ tầng công nghệ số của doanh nghiệp, công nghệ nào cho phép mở rộng năng lực lưu trữ và xử lý mà không cần đầu tư máy chủ vật lý?",
    "choices": {
      "A": "Blockchain",
      "B": "Big Data",
      "C": "Điện toán đám mây (Cloud Computing",
      "D": "Internet vạn vật (IoT"
    },
    "answer": "C"
  },
  {
    "id": 13,
    "text": "Câu 13. Trong chuyển đổi số giáo dục, việc giáo viên sử dụng LMS (Learning Management System) giúp đạt được lợi ích nào sau đây?",
    "choices": {
      "A": "Loại bỏ hoàn toàn vai trò của giáo viên",
      "B": "Chỉ thay thế PowerPoint bằng video",
      "C": "Quản lý lớp học, theo dõi tiến độ và cá nhân hóa lộ trình học tập",
      "D": "Tự động chấm điểm mà không cần dữ liệu học tập"
    },
    "answer": "C"
  },
  {
    "id": 14,
    "text": "Câu 14. Trong mô hình doanh nghiệp số, yếu tố nào giữ vai trò trung tâm quyết định khả năng cá nhân hóa sản phẩm/dịch vụ?",
    "choices": {
      "A": "Cơ sở vật chất",
      "B": "Dữ liệu và phân tích dữ liệu khách hàng",
      "C": "Bộ phận marketing truyền thống",
      "D": "Hệ thống kế toán – tài chính"
    },
    "answer": "B"
  },
  {
    "id": 15,
    "text": "Câu 15. Một sinh viên sử dụng ChatGPT để viết báo cáo về \"Tác động của AI trong giáo dục\", nhưng kết quả thiếu dẫn chứng và ví dụ cụ thể. Nguyên nhân chủ yếu nhất khiến kết quả chưa đạt yêu cầu là gì?",
    "choices": {
      "A": "ChatGPT không có dữ liệu về lĩnh vực giáo dục Việt Nam",
      "B": "Sinh viên chưa biết cách đặt câu hỏi (prompt) cụ thể và có ngữ cảnh",
      "C": "Hệ thống AI bị lỗi tạm thời",
      "D": "Nội dung báo cáo không phù hợp để ChatGPT xử lý"
    },
    "answer": "B"
  },
  {
    "id": 16,
    "text": "Câu 16. Khi lưu trữ dữ liệu nhóm nghiên cứu trên Google Drive, hành động nào tiềm ẩn rủi ro bảo mật cao nhất?",
    "choices": {
      "A": "Chia sẻ liên kết với quyền “Bất kỳ ai có đường liên kết đều xem được”",
      "B": "Giới hạn truy cập theo địa chỉ email nội bộ",
      "C": "Sử dụng mã hóa hai lớp (2FA",
      "D": "Đặt tên thư mục theo mã dự án thay vì tên đề tài"
    },
    "answer": "A"
  },
  {
    "id": 17,
    "text": "Câu 17. Khi một trường đại học dùng máy quét để chuyển toàn bộ hồ sơ sinh viên từ giấy sang file PDF lưu trên máy tính, ta đang thực hiện quá trình nào?",
    "choices": {
      "A": "Tin học hóa",
      "B": "Số hóa",
      "C": "Chuyển đổi số",
      "D": "Tổ chức thông minh"
    },
    "answer": "B"
  },
  {
    "id": 18,
    "text": "Câu 18. Khi một doanh nghiệp dùng phần mềm Excel để quản lý điểm sinh viên thay vì ghi sổ tay truyền thống, nhưng quy trình làm việc vẫn giữ nguyên cấu trúc cũ, chúng ta gọi đó là gì?",
    "choices": {
      "A": "Số hóa",
      "B": "Chuyển đổi số",
      "C": "Tin học hóa",
      "D": "Tổ chức số"
    },
    "answer": "C"
  },
  {
    "id": 19,
    "text": "Câu 19. Một trường đại học triển khai hệ thống học trực tuyến (LMS), thay đổi đồng thời cách dạy – học, kiểm tra, tương tác với sinh viên, là ví dụ cho khái niệm nào?",
    "choices": {
      "A": "Tin học hóa",
      "B": "Số hóa",
      "C": "Chuyển đổi số",
      "D": "Số hóa quy trình"
    },
    "answer": "C"
  },
  {
    "id": 20,
    "text": "Câu 20. Một lợi ích của chuyển đổi số đối với cơ quan nhà nước là:",
    "choices": {
      "A": "Tăng chi phí vận hành",
      "B": "Thủ tục hành chính phức tạp hơn",
      "C": "Hành chính minh bạch, nhanh, chính xác và hiệu quả hơn",
      "D": "Giảm khả năng tiếp cận dịch vụ công"
    },
    "answer": "C"
  },
  {
    "id": 21,
    "text": "Câu 21. Khi một doanh nghiệp sử dụng chatbot 24/7 chăm sóc khách hàng thay cho tổng đài truyền thống, điều này giúp doanh nghiệp:",
    "choices": {
      "A": "Giảm trải nghiệm khách hàng",
      "B": "Tăng chi phí nhân sự",
      "C": "Tối ưu hóa quy trình và tiết kiệm chi phí",
      "D": "Giảm độ tin cậy"
    },
    "answer": "C"
  },
  {
    "id": 22,
    "text": "Câu 22. Khi một doanh nghiệp không muốn mua máy chủ riêng mà sử dụng dịch vụ để lưu trữ và xử lý dữ liệu, đây là ứng dụng nền tảng nào trong chuyển đổi số?",
    "choices": {
      "A": "Blockchain và niềm tin số",
      "B": "Tổ chức thông minh",
      "C": "Điện toán đám mây",
      "D": "Di động hóa đa kênh"
    },
    "answer": "C"
  },
  {
    "id": 23,
    "text": "Câu 23. Nền tảng thương mại điện tử đề xuất sản phẩm phù hợp cho từng người dùng dựa trên yếu tố nào?",
    "choices": {
      "A": "Vị trí địa lý",
      "B": "Thời gian truy cập",
      "C": "Phân tích hành vi và lịch sử tìm kiếm",
      "D": "Mức độ chi tiêu trung bình"
    },
    "answer": "C"
  },
  {
    "id": 24,
    "text": "Câu 24. Tổ chức như Grab tạo ra mô hình kinh doanh mới dựa trên loại dữ liệu nào?",
    "choices": {
      "A": "Dữ liệu tài chính nội bộ",
      "B": "Dữ liệu vị trí, nhu cầu và thời gian của người dùng",
      "C": "Dữ liệu về nhà cung cấp dịch vụ",
      "D": "Dữ liệu quảng cáo"
    },
    "answer": "B"
  },
  {
    "id": 25,
    "text": "Câu 25. Tổ chức như Grab tạo ra mô hình kinh doanh mới dựa trên loại dữ liệu nào?",
    "choices": {
      "A": "Dữ liệu tài chính nội bộ",
      "B": "Dữ liệu vị trí, nhu cầu và thời gian của người dùng",
      "C": "Dữ liệu về nhà cung cấp dịch vụ",
      "D": "Dữ liệu quảng cáo"
    },
    "answer": "B"
  },
  {
    "id": 26,
    "text": "Câu 26. Công nghệ Big Data được ứng dụng trong hoạt động nào sau đây?",
    "choices": {
      "A": "Tạo mô hình 3D trong thực tế ảo",
      "B": "Phân tích hành vi khách hàng và phát hiện gian lận",
      "C": "Kết nối thiết bị thông minh",
      "D": "Bảo vệ an ninh mạng"
    },
    "answer": "B"
  },
  {
    "id": 27,
    "text": "Câu 27. Theo định hướng của Nghị quyết 03/NQ-CP, hạ tầng viễn thông được ưu tiên phát triển với mục tiêu nào?",
    "choices": {
      "A": "Phủ sóng WiFi miễn phí toàn quốc",
      "B": "Phát triển mạng 5G và băng rộng tốc độ cao đến hộ gia đình",
      "C": "Tăng số lượng nhà mạng mới",
      "D": "Giảm chi phí sử dụng điện thoại cho người dân"
    },
    "answer": "B"
  },
  {
    "id": 28,
    "text": "Câu 28. Trong ứng dụng chẩn đoán hình ảnh y khoa bằngAI, yếu tố giúp hệ thống đạt độ chính xác cao là:",
    "choices": {
      "A": "Tốc độ quét X-quang càng nhanh thì AI càng chính xác",
      "B": "AI thay thế hoàn toàn vai trò của bác sĩ trong chẩn đoán",
      "C": "Sử dụng thuật toán mã hóa để bảo vệ dữ liệu",
      "D": "Huấn luyện mô hình trên tập dữ liệu lớn gồm nhiều ảnh y tế"
    },
    "answer": "D"
  },
  {
    "id": 29,
    "text": "Câu 29. Vì sao AI có thể phát hiện gian lận tài chính theo thời gian thực trong lĩnh vực ngân hàng?",
    "choices": {
      "A": "Vì ngân hàng cung cấp hệ thống phần cứng mạnh nhất",
      "B": "Vì AI so sánh mọi giao dịch với một mẫu giao dịch cố định",
      "C": "Vì AI phân tích liên tục hành vi giao dịch và phát hiện bất thường dựa trên mô hình học máy",
      "D": "Vì tất cả giao dịch đều được lưu trữ tập trung tại ngân hàng"
    },
    "answer": "C"
  },
  {
    "id": 30,
    "text": "Câu 30. Dịch vụ IaaS và PaaS của điện toán đám mây khác nhau ở điểm nào?",
    "choices": {
      "A": "IaaS cung cấp phần mềm hoàn chỉnh, PaaS cung cấp máy chủ",
      "B": "IaaS cung cấp hạ tầng ảo hóa; PaaS cung cấp nền tảng phát triển và triển khai ứng dụng",
      "C": "PaaS luôn rẻ hơn IaaS",
      "D": "PaaS không cần quản trị"
    },
    "answer": "B"
  },
  {
    "id": 31,
    "text": "Câu 31. Trong IoT, lý do 5G được xem là công nghệ hạ tầng quan trọng nhất là:",
    "choices": {
      "A": "Băng thông lớn, cho phép điều khiển thiết bị từ xa có độ trể thấp",
      "B": "Mạng 5G cho phép truyền dữ liệu mà không cần trạm phát song cố định",
      "C": "Mạng 5G không cần bảo mật",
      "D": "Mạng 5G chỉ phục vụ cho điện thoại di động có kết nối IoT"
    },
    "answer": "B"
  },
  {
    "id": 32,
    "text": "Câu 32. Đặc tính quan trọng nhất giúp Blockchain tăng độ tin cậy trong các giao dịch số là:",
    "choices": {
      "A": "Tốc độ xử lý cao hơn mọi công nghệ khác",
      "B": "Dữ liệu được lưu trữ phi tập trung, khó bị sửa đổi hoặc giả mạo",
      "C": "Blockchain chỉ lưu trữ dữ liệu văn bản",
      "D": "Tất cả dữ liệu blockchain đều công khai 100%"
    },
    "answer": "B"
  },
  {
    "id": 33,
    "text": "Câu 33. Big Data được xem là nền tảng của AI và IoT trong chuyển đổi số vì:",
    "choices": {
      "A": "Big Data giúp xóa bỏ nhu cầu sử dụng thuật toán",
      "B": "AI và IoT đều yêu cầu lượng dữ liệu lớn để học và đưa ra quyết định",
      "C": "Big Data thay thế hoàn toàn IoT",
      "D": "Big Data chỉ dùng trong thương mại điện tử"
    },
    "answer": "B"
  },
  {
    "id": 34,
    "text": "Câu 34. Một doanh nghiệp muốn hiểu rõ hành vi khách hàng để tăng doanh số. Công nghệ nào phù hợp để áp dụng phân tích dữ liệu?",
    "choices": {
      "A": "Tổ chức khảo sát truyền thống bằng giấy",
      "B": "Tăng cường gọi điện tư vấn",
      "C": "Lập bảng Excel thủ công cho từng giao dịch",
      "D": "Sử dụng hệ thống CRM tích hợp AI phân tích hành vi mua sắm"
    },
    "answer": "D"
  },
  {
    "id": 35,
    "text": "Câu 35. Một doanh nghiệp đã đầu tư nhiều công nghệ nhưng hiệu quả thấp vì nhân viên không sử dụng hết tính năng. Doanh nghiệp cần ưu tiên giải pháp nào để tối ưu chuyển đổi số?",
    "choices": {
      "A": "Mua thêm thiết bị phần cứng và các máy tính tốc độ cao",
      "B": "Thay tất cả phần mềm sang loại đắt tiền hơn",
      "C": "Tổ chức đào tạo kỹ năng số và hướng dẫn sử dụng công nghệ",
      "D": "Giảm số lượng nhân viên"
    },
    "answer": "C"
  },
  {
    "id": 36,
    "text": "Câu 36. Sinh viên muốn chia sẻ thư mục tài liệu nhóm nhưng không muốn người khác chỉnh sửa. Cách làm đúng nhất:",
    "choices": {
      "A": "Chia sẻ Google Drive với quyền “Editor”",
      "B": "Chia sẻ Google Drive với quyền “Viewer”",
      "C": "Gửi file qua Messenger",
      "D": "Gửi file qua Zalo để hạn chế tải về"
    },
    "answer": "B"
  },
  {
    "id": 37,
    "text": "Câu 37. Một sinh viên viết luận văn cần tìm bài nghiên cứu học thuật về tác động của AI trong giáo dục. Công cụ nào cho kết quả chuyên sâu nhất?",
    "choices": {
      "A": "Facebook hoặc Messenger",
      "B": "Google thông thường",
      "C": "Google Scholar hoặc IEEE Xplore",
      "D": "ChatGPT hoặc Gemini để tạo bài hoàn chỉnh"
    },
    "answer": "C"
  },
  {
    "id": 38,
    "text": "Câu 38. Một giáo viên muốnAI tự động tạo biểu đồ từ dữ liệu điểm của 200 sinh viên. Dữ liệu đang nằm trong Excel. Giải pháp hiệu quả nhất là:",
    "choices": {
      "A": "Vẽ biểu đồ từ menu lệnh Chart của Excel",
      "B": "Sao chép dữ liệu vào Google và tìm biểu đồ mẫu",
      "C": "Nhập file Excel vào AI để tự động phân tích và tạo biểu đồ",
      "D": "Dùng PowerPoint để vẽ biểu đồ"
    },
    "answer": "C"
  },
  {
    "id": 39,
    "text": "Câu 39. Một doanh nghiệp bán lẻ muốn giảm sai sót khi kiểm kho và tăng tốc độ xử lý đơn hàng. Giải pháp chuyển đổi số phù hợp nhất ở mức cơ bản là gì?",
    "choices": {
      "A": "Xây dựng hệ thống ERP toàn diện cho toàn công ty",
      "B": "Sử dụng AI để dự báo nhu cầu trong 12 tháng tới",
      "C": "Ứng dụng công nghệ RFID/mã vạch kết hợp phần mềm quản lý kho",
      "D": "Thuê tư vấn bên ngoài đánh giá quy trình vận hành"
    },
    "answer": "C"
  },
  {
    "id": 40,
    "text": "Câu 40. Một doanh nghiệp sản xuất muốn theo dõi thời gian thực tình trạng máy móc và giảm thời gian dừng máy. Họ nên ưu tiên giải pháp nào?",
    "choices": {
      "A": "Đổi mới toàn bộ dây chuyền sản xuất",
      "B": "Sử dụng phần mềm kế toán để ghi nhận chi phí bảo trì",
      "C": "Gắn cảm biến IoT và sử dụng phần mềm giám sát thiết bị",
      "D": "Tổ chức thêm các lớp đào tạo vận hành máy"
    },
    "answer": "C"
  }
];