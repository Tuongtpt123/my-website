const questions = [
  {
    "id": 1,
    "text": "1. Thành phần nào KHÔNG thuộc định nghĩa đầy đủ của phần mềm theo McDermid?",
    "choices": {
      "A": "Mã nguồn và mã đối tượng",
      "B": "Tài liệu (đặc tả, thiết kế, kiểm thử, hướng dẫn",
      "C": "Thủ tục vận hành",
      "D": "Máy chủ vật lý và cơ sở hạ tầng mạng"
    },
    "answer": "D"
  },
  {
    "id": 2,
    "text": "2. Theo chuẩn IEEE 1219, bảo trì phần mềm là gì?",
    "choices": {
      "A": "\tPhát triển hoàn toàn hệ thống mới từ đầu",
      "B": "\tSửa đổi sản phẩm sau khi phát hành để hiệu chỉnh lỗi, cải thiện hiệu năng hoặc thích ứng với môi trường mới",
      "C": "\tChỉ bao gồm việc sửa lỗi (bug fixing",
      "D": "\tToàn bộ hoạt động từ lúc bắt đầu dự án đến khi kết thúc"
    },
    "answer": "B"
  },
  {
    "id": 3,
    "text": "3. Yêu cầu thay đổi nào phát sinh từ nhu cầu làm cho phần mềm chạy trên hệ điều hành mới?",
    "choices": {
      "A": "Thay đổi hiệu chỉnh",
      "B": "Thay đổi thích ứng",
      "C": "Thay đổi hoàn thiện",
      "D": "Thay đổi dự phòng"
    },
    "answer": "B"
  },
  {
    "id": 4,
    "text": "4. Hoạt động nào giúp \"làm thuận tiện công việc bảo trì tương lai\"?",
    "choices": {
      "A": "\tSửa lỗi khẩn cấp",
      "B": "\tCấu trúc lại (refactor) code và cập nhật tài liệu",
      "C": "\tChỉ nâng cấp phần cứng",
      "D": "\tGiảm thiểu tương tác với người dùng"
    },
    "answer": "B"
  },
  {
    "id": 5,
    "text": "5. Loại yêu cầu thay đổi nào bắt nguồn từ việc mở rộng chức năng hiện có của hệ thống?",
    "choices": {
      "A": "Thay đổi hiệu chỉnh",
      "B": "Thay đổi thích ứng",
      "C": "Thay đổi hoàn thiện",
      "D": "Thay đổi dự phòng"
    },
    "answer": "C"
  },
  {
    "id": 6,
    "text": "6. Yếu tố nào sau đây là một trở ngại chính cho việc thay đổi phần mềm?",
    "choices": {
      "A": "\tChất lượng hệ thống hiện hành quá tốt",
      "B": "\tCó đầy đủ tài liệu cập nhật",
      "C": "\tThiếu bảo trì viên được đào tạo và có kỹ năng",
      "D": "\tNgười dùng luôn nhiệt tình đón nhận thay đổi"
    },
    "answer": "C"
  },
  {
    "id": 7,
    "text": "7. Yếu tố nhân sự nào ảnh hưởng lớn đến bảo trì do việc hầu hết hệ thống được bảo trì bởi người không phải tác giả gốc?",
    "choices": {
      "A": "Thực tiễn làm việc",
      "B": "Sự thành thạo về lĩnh vực",
      "C": "Tốc độ thay thế nhân viên",
      "D": "Mức lương"
    },
    "answer": "C"
  },
  {
    "id": 8,
    "text": "8. Việc \"hiểu chương trình\" (program comprehension) chiếm khoảng bao nhiêu phần trăm công sức bảo trì?",
    "choices": {
      "A": "10%",
      "B": "25%",
      "C": "Khoảng 40-60%",
      "D": "90%"
    },
    "answer": "C"
  },
  {
    "id": 9,
    "text": "9. Chi phí sửa lỗi (fixing bugs) cao nhất ở giai đoạn nào trong chu kỳ sống phần mềm?",
    "choices": {
      "A": "Phân tích và đặc tả yêu cầu",
      "B": "Thiết kế",
      "C": "Lập trình",
      "D": "Vận hành và bảo trì"
    },
    "answer": "D"
  },
  {
    "id": 10,
    "text": "10. Tại sao việc phân loại các yêu cầu thay đổi (hiệu chỉnh, thích ứng, hoàn thiện, dự phòng) lại quan trọng, mặc dù chúng thường đan xen trong thực tế?",
    "choices": {
      "A": "\tĐể tăng số lượng công việc cho nhóm bảo trì",
      "B": "\tĐể xác định và ưu tiên giải quyết các yêu cầu một cách hiệu quả hơn",
      "C": "\tĐể có thể bỏ qua một số loại yêu cầu",
      "D": "\tChỉ để phục vụ cho mục đích báo cáo, không ảnh hưởng đến thực thi"
    },
    "answer": "B"
  },
  {
    "id": 11,
    "text": "11. Mối quan hệ \"Sản phẩm/Môi trường\" trong khung làm việc bảo trì được hiểu là:",
    "choices": {
      "A": "\tMôi trường được tạo ra bởi sản phẩm phần mềm",
      "B": "\tSản phẩm phần mềm tồn tại độc lập, không chịu tác động từ môi trường",
      "C": "\tSản phẩm phần mềm phải \"kế thừa\" những thay đổi trong môi trường điều hành và tổ chức",
      "D": "\tMôi trường chỉ ảnh hưởng đến nhân sự, không ảnh hưởng đến sản phẩm"
    },
    "answer": "C"
  },
  {
    "id": 12,
    "text": "12. Tại sao các hệ thống \"già\" (legacy) lại là trở ngại lớn cho việc thay đổi?",
    "choices": {
      "A": "\tVì chúng quá phức tạp, việc thay đổi là không thể",
      "B": "\tVì chúng thường có chất lượng kém sau nhiều lần sửa chữa, cấu trúc phức tạp, tài liệu thiếu",
      "C": "\tVì không ai muốn sử dụng chúng nữa nên không cần thiết thay đổi",
      "D": "\tVì chúng chạy quá chậm, khó kiểm soát"
    },
    "answer": "B"
  },
  {
    "id": 13,
    "text": "13. Bảo trì dự phòng (Preventive) được coi là \"chủ động\" hay \"bị động\"?",
    "choices": {
      "A": "\tBị động, chờ lỗi xảy ra mới sửa",
      "B": "\tChủ động, tìm kiếm và sửa các vấn đề tiềm ẩn trước khi chúng gây ra lỗi",
      "C": "\tBị động, chỉ làm khi khách hàng yêu cầu",
      "D": "\tChủ động khi biết được các thay đổi của môi trường hoặc pháp luật"
    },
    "answer": "B"
  },
  {
    "id": 14,
    "text": "14. Một lập trình viên khi đọc code của module \"Xử lý đơn hàng\" thấy rằng có nhiều đoạn code trùng lặp ở 5 nơi khác nhau. Anh ta quyết định tái cấu trúc (refactor), gom chúng vào một hàm duy nhất để dễ quản lý và giảm khả năng sai sót khi cần sửa đổi sau này. Anh ta đang thực hiện loại bảo trì nào?",
    "choices": {
      "A": "Bảo trì hiệu chỉnh",
      "B": "Bảo trì hoàn thiện",
      "C": "Bảo trì dự phòng",
      "D": "Bảo trì thích ứng"
    },
    "answer": "C"
  },
  {
    "id": 15,
    "text": "15. Điểm yếu lớn nhất của mô hình Hiệu chỉnh nhanh là gì?",
    "choices": {
      "A": "Tốc độ xử lý chậm",
      "B": "Thiếu phân tích tác động và quản lý rủi ro",
      "C": "Chi phí triển khai ban đầu cao",
      "D": "Không phù hợp với hệ thống nhỏ"
    },
    "answer": "B"
  },
  {
    "id": 16,
    "text": "16. Mô hình lặp và tăng trưởng dựa trên giả định cơ bản nào?",
    "choices": {
      "A": "\tYêu cầu luôn ổn định và đầy đủ ngay từ đầu",
      "B": "\tYêu cầu chỉ được làm rõ sau nhiều lần lặp và phản hồi",
      "C": "\tTài liệu quan trọng hơn mã nguồn",
      "D": "\tNgười dùng không cần tham gia vào quá trình"
    },
    "answer": "B"
  },
  {
    "id": 17,
    "text": "17. Chuẩn IEEE 1219 (1998) tổ chức quy trình bảo trì thành mấy giai đoạn chính?",
    "choices": {
      "A": "5 giai đoạn",
      "B": "6 giai đoạn",
      "C": "7 giai đoạn",
      "D": "8 giai đoạn"
    },
    "answer": "C"
  },
  {
    "id": 18,
    "text": "18. Điều khoản nào sau đây thường KHÔNG xuất hiện trong một hợp đồng bảo trì chuẩn?",
    "choices": {
      "A": "Các định nghĩa thuật ngữ",
      "B": "Phạm vi dịch vụ bảo trì",
      "C": "Mã nguồn đầy đủ của phần mềm",
      "D": "Điều khoản về chi phí và thanh toán"
    },
    "answer": "C"
  },
  {
    "id": 19,
    "text": "19. Kiểm thử hồi quy (Regression Testing) nhằm mục đích chính nào?",
    "choices": {
      "A": "\tPhát hiện các lỗi mới trong chức năng vừa thêm",
      "B": "\tĐảm bảo thay đổi mới không làm hỏng chức năng hiện có",
      "C": "\tKiểm tra hiệu năng của hệ thống dưới tải cao",
      "D": "\tĐánh giá trải nghiệm người dùng"
    },
    "answer": "B"
  },
  {
    "id": 20,
    "text": "20. Kế hoạch bảo trì nên được lập tốt nhất vào thời điểm nào?",
    "choices": {
      "A": "Chỉ sau khi phần mềm gặp sự cố đầu tiên",
      "B": "Trong giai đoạn phát triển phần mềm",
      "C": "Sau khi hợp đồng bảo trì đã ký kết",
      "D": "Khi dự án sắp kết thúc"
    },
    "answer": "B"
  },
  {
    "id": 21,
    "text": "21. Thách thức lớn nhất trong giai đoạn \"Chuyển tiếp\" (Transition) thường là gì?",
    "choices": {
      "A": "\tChi phí mua phần cứng mới",
      "B": "\tViệc chuyển giao tri thức và kinh nghiệm phi tài liệu (tacit knowledge) về hệ thống",
      "C": "\tĐào tạo người dùng về các tính năng cơ bản",
      "D": "\tThay đổi về môi trường hoạt động"
    },
    "answer": "B"
  },
  {
    "id": 22,
    "text": "22. Việc lưu giữ dữ liệu và phần mềm cũ sau khi \"Ngưng sử dụng\" chủ yếu phục vụ mục đích gì?",
    "choices": {
      "A": "Để bán lại cho các công ty khác",
      "B": "Để khôi phục trong trường hợp khẩn cấp",
      "C": "Để giảm tải cho hệ thống lưu trữ hiện tại",
      "D": "Để sử dụng lại cho các dự án hoàn toàn mới"
    },
    "answer": "B"
  },
  {
    "id": 23,
    "text": "23. Nếu một yêu cầu thay đổi bị từ chối ở giai đoạn \"Phân tích\", lý do chính thường là gì?",
    "choices": {
      "A": "\tLập trình viên không muốn làm",
      "B": "\tKhông đủ tài nguyên, vượt quá phạm vi hợp đồng",
      "C": "\tNgười dùng không biết cách sử dụng hệ thống",
      "D": "\tHệ thống quản lý cấu hình bị lỗi"
    },
    "answer": "B"
  },
  {
    "id": 24,
    "text": "24. Một hệ thống website thương mại điện tử đang chạy trên máy chủ vật lý (on-premise). Công ty quyết định chuyển toàn bộ hệ thống lên nền tảng đám mây AWS. Hoạt động bảo trì chính nào sẽ được áp dụng và cần chú ý đặc biệt đến bước nào?",
    "choices": {
      "A": "\tBảo trì hiệu chỉnh; Chú ý sửa lỗi nhanh",
      "B": "\tBảo trì thích ứng; Chú ý lập kế hoạch di dời và vận hành song song",
      "C": "\tBảo trì hoàn thiện; Chú ý thêm tính năng mới",
      "D": "\tBảo trì dự phòng; Chú ý refactor code"
    },
    "answer": "B"
  },
  {
    "id": 25,
    "text": "25. Một hệ thống quản lý nhân sự cũ viết bằng COBOL cần phải tương tác với hệ thống mới viết bằng Java thông qua file text. Việc sửa đổi hệ thống COBOL để đọc/ghi đúng định dạng file mới thuộc loại bảo trì nào?",
    "choices": {
      "A": "\tBảo trì hiệu chỉnh (sửa lỗi giao diện",
      "B": "\tBảo trì thích ứng (thích ứng với môi trường tích hợp mới",
      "C": "\tBảo trì hoàn thiện (nâng cấp chức năng",
      "D": "\tBảo trì dự phòng (tối ưu hóa code"
    },
    "answer": "B"
  },
  {
    "id": 26,
    "text": "26. Bốn bước chính trong Mô hình Tái sử dụng (Reuse Model) bao gồm:",
    "choices": {
      "A": "\tPhân tích, Thiết kế hệ thống, Cài đặt mã nguồn, Kiểm thử",
      "B": "\tNhận dạng, Hiểu thành phần, Hiệu chỉnh, Tích hợp",
      "C": "\tLập kế hoạch, Di dời dữ liệu, Ngưng sử dụng, Lưu trữ",
      "D": "\tTiếp nhận yêu cầu, Đánh giá rủi ro, Phê chuẩn, Thực hiện"
    },
    "answer": "B"
  },
  {
    "id": 27,
    "text": "27. Trong quản lý cấu hình (SCM), thuật ngữ \"Đường cơ sở\" (Baseline) ám chỉ điều gì?",
    "choices": {
      "A": "\tMột phiên bản phần mềm đã được duyệt dùng làm mốc so sánh",
      "B": "\tDòng mã lệnh đầu tiên được viết trong chương trình",
      "C": "\tBản kế hoạch ngân sách dự kiến ban đầu của dự án",
      "D": "\tDanh sách toàn bộ nhân sự tham gia dự án từ đầu"
    },
    "answer": "A"
  },
  {
    "id": 28,
    "text": "28. Đội bảo trì gặp khó khăn do tài liệu không khớp với mã nguồn. Mô hình phù hợp nhất để tránh điều này là:",
    "choices": {
      "A": "Quick-Fix",
      "B": "Lặp và Tăng trưởng",
      "C": "Boehm",
      "D": "Tái sử dụng"
    },
    "answer": "B"
  },
  {
    "id": 29,
    "text": "29. Bốn vấn đề then chốt trong bảo trì phần mềm là gì?",
    "choices": {
      "A": "\tKỹ thuật, quản lý, phép đo, ước lượng chi phí",
      "B": "\tThiết kế, kiểm thử, phân tích, bảo trì",
      "C": "\tPhát triển, triển khai, vận hành, bảo trì",
      "D": "\tTài liệu, mã nguồn, kiểm thử, quản lý"
    },
    "answer": "A"
  },
  {
    "id": 30,
    "text": "30. Đâu là yếu tố ảnh hưởng đến sự hiểu phần mềm?",
    "choices": {
      "A": "\tKinh nghiệm bảo trì viên, chất lượng tài liệu, công cụ hỗ trợ",
      "B": "\tNgôn ngữ lập trình, hệ điều hành, phần cứng",
      "C": "\tQuy mô dự án, ngân sách, thời hạn",
      "D": "\tSố lượng người dùng, tần suất sử dụng, vị trí địa lý"
    },
    "answer": "A"
  },
  {
    "id": 31,
    "text": "31. Gia công bảo trì phần mềm thường áp dụng với loại phần mềm nào?",
    "choices": {
      "A": "Phần mềm lõi kinh doanh",
      "B": "Phần mềm ít quan trọng",
      "C": "Phần mềm mã nguồn mở",
      "D": "Phần mềm thử nghiệm"
    },
    "answer": "B"
  },
  {
    "id": 32,
    "text": "32. Ba thực thể chính trong phép đo bảo trì là gì?",
    "choices": {
      "A": "Quy trình, tài nguyên, sản phẩm",
      "B": "Mã nguồn, tài liệu, nhân sự",
      "C": "Thời gian, chi phí, chất lượng",
      "D": "Yêu cầu, thiết kế, kiểm thử"
    },
    "answer": "A"
  },
  {
    "id": 33,
    "text": "33. Công thức tính độ phức tạp McCabe là gì?",
    "choices": {
      "A": "v(G) = e – n + 2",
      "B": "v(G) = n – e + 2",
      "C": "v(G) = e + n – 2",
      "D": "v(G) = n + e × 2"
    },
    "answer": "A"
  },
  {
    "id": 34,
    "text": "34. Tính dễ hiểu của phần mềm thường tỉ lệ nghịch với yếu tố nào?",
    "choices": {
      "A": "Độ phức tạp",
      "B": "Kích thước mã nguồn",
      "C": "Tuổi phần mềm",
      "D": "Số người dùng"
    },
    "answer": "A"
  },
  {
    "id": 35,
    "text": "35. Yếu tố kỹ thuật nào làm giảm chi phí bảo trì?",
    "choices": {
      "A": "Tài liệu chất lượng cao",
      "B": "Mã nguồn phức tạp",
      "C": "Ngôn ngữ cấp thấp",
      "D": "Module phụ thuộc nhiều"
    },
    "answer": "A"
  },
  {
    "id": 36,
    "text": "36. Các loại điểm chức năng chính gồm những gì?",
    "choices": {
      "A": "EI, EO, EQ, ILF, EIF",
      "B": "LOC, FP, CPLX, QUAL",
      "C": "UI, UX, DB, API",
      "D": "Dev, Test, Ops, Maint"
    },
    "answer": "A"
  },
  {
    "id": 37,
    "text": "37. Phân tích tác động dựa vào mã lệnh có nhược điểm gì?",
    "choices": {
      "A": "\tTốn thời gian, cần chi tiết thực thi, phạm vi giới hạn",
      "B": "\tKhông chính xác, khó áp dụng, không hỗ trợ UML",
      "C": "\tChỉ dùng được cho ngôn ngữ C, không hỗ trợ OOP",
      "D": "\tYêu cầu tài liệu đầy đủ, không cần mã nguồn"
    },
    "answer": "A"
  },
  {
    "id": 38,
    "text": "38. Phép đo LOC bị hạn chế vì:",
    "choices": {
      "A": "\tKhông có chuẩn chung, phụ thuộc ngôn ngữ, không phản ánh chất lượng",
      "B": "\tKhó đếm chính xác, không áp dụng được cho mã nguồn đóng",
      "C": "\tChỉ đo được mã nguồn, không đo được tài liệu",
      "D": "\tTốn nhiều thời gian tính toán, khó tự động hóa"
    },
    "answer": "A"
  },
  {
    "id": 39,
    "text": "39. Độ phức tạp McCabe cao (>10) cho thấy điều gì?",
    "choices": {
      "A": "\tChương trình khó hiểu và khó bảo trì, cần xem xét tái cấu trúc",
      "B": "\tChương trình có nhiều chức năng, cần thêm nhân sự",
      "C": "\tChương trình chạy chậm, cần tối ưu hiệu năng",
      "D": "\tChương trình dễ kiểm thử, ít lỗi tiềm ẩn"
    },
    "answer": "A"
  },
  {
    "id": 40,
    "text": "40. Một phần mềm có 3 EI đơn giản, 2 EO trung bình, 1 ILF phức tạp. Điểm chức năng thô (UFP) là bao nhiêu? (Tra bảng trọng số: EI đơn giản=3, EO trung bình=5, ILF phức tạp=15)",
    "choices": {
      "A": "34",
      "B": "40",
      "C": "45",
      "D": "50"
    },
    "answer": "A"
  },
  {
    "id": 41,
    "text": "41. Khi ước lượng chi phí bảo trì bằng FP, nếu tổng hệ số kỹ thuật (∑Fᵢ) = 45, điểm chức năng điều chỉnh (AFP) được tính bằng công thức nào?",
    "choices": {
      "A": "AFP = UFP × (0.65 + 0.01 × 45",
      "B": "AFP = UFP × (0.65 + 45",
      "C": "AFP = UFP × 45",
      "D": "AFP = UFP / (0.65 + 0.01 × 45"
    },
    "answer": "A"
  },
  {
    "id": 42,
    "text": "42. Ý nghĩa của \"dòng mã lệnh delta\" trong đo lường kích thước bảo trì là gì?",
    "choices": {
      "A": "\tLà tổng số dòng lệnh của chương trình sau khi bảo trì xong",
      "B": "\tLà số dòng lệnh được thêm vào hoặc được hiệu chỉnh trong quá trình bảo trì",
      "C": "\tLà số dòng lệnh bị xóa bỏ khỏi chương trình gốc ban đầu",
      "D": "\tLà số dòng lệnh chú thích được viết thêm để giải thích code"
    },
    "answer": "B"
  },
  {
    "id": 43,
    "text": "43. Dự án có 100 điểm chức năng (FP). Sử dụng ngôn ngữ Java (trung bình 55 LOC/FP). Hãy ước lượng kích thước phần mềm theo dòng lệnh (LOC)?",
    "choices": {
      "A": "550 LOC",
      "B": "5500 LOC",
      "C": "55000 LOC",
      "D": "1000 LOC"
    },
    "answer": "B"
  },
  {
    "id": 44,
    "text": "44. Loại bảo trì nào tập trung vào việc sửa các lỗi (defects) trong phần mềm?",
    "choices": {
      "A": "Bảo trì thích ứng",
      "B": "Bảo trì hoàn thiện",
      "C": "Bảo trì hiệu chỉnh",
      "D": "Bảo trì dự phòng"
    },
    "answer": "C"
  },
  {
    "id": 45,
    "text": "45. Theo nghiên cứu được trích dẫn, chi phí bảo trì phần mềm chiếm khoảng bao nhiêu phần trăm tổng chi phí vòng đời?",
    "choices": {
      "A": "10-20%",
      "B": "25-35%",
      "C": "49-75%",
      "D": "80-90%"
    },
    "answer": "C"
  },
  {
    "id": 46,
    "text": "46. \"Hiệu ứng gợn sóng\" (Ripple Effect) trong bảo trì phần mềm là gì?",
    "choices": {
      "A": "\tChi phí bảo trì tăng theo cấp số nhân",
      "B": "\tẢnh hưởng của một thay đổi ở nơi này lên các phần khác của hệ thống",
      "C": "\tHiệu quả tăng dần theo thời gian khi hệ thống được tối ưu",
      "D": "\tSự lan truyền lỗi từ người dùng này sang người dùng khác"
    },
    "answer": "B"
  },
  {
    "id": 47,
    "text": "47. Trong so sánh với phát triển mới, bảo trì phần mềm đòi hỏi tư duy nào?",
    "choices": {
      "A": "Chỉ \"nhìn lại\" (look back",
      "B": "Chỉ \"nhìn tới\" (look ahead",
      "C": "Vừa \"nhìn lại\" vừa \"nhìn tới\"",
      "D": "Tập trung hoàn toàn vào công nghệ mới"
    },
    "answer": "C"
  },
  {
    "id": 48,
    "text": "48. Việc \"vá lỗi\" (patching) khẩn cấp thường dẫn đến hậu quả gì?",
    "choices": {
      "A": "\tLàm giảm vĩnh viễn độ phức tạp của chương trình",
      "B": "\tCó thể làm tăng độ phức tạp và gây ra các hiệu ứng gợn sóng không lường trước",
      "C": "\tGiúp hệ thống chạy nhanh hơn gấp đôi",
      "D": "\tLoại bỏ hoàn toàn nhu cầu bảo trì trong tương lai"
    },
    "answer": "B"
  },
  {
    "id": 49,
    "text": "49. Theo McDermid, thành phần của phần mềm bao gồm những gì?",
    "choices": {
      "A": "\tChỉ mã nguồn (source code",
      "B": "\tMã nguồn và mã đối tượng",
      "C": "\tMã nguồn, mã đối tượng, tài liệu và các thủ tục vận hành",
      "D": "\tChương trình và cơ sở dữ liệu"
    },
    "answer": "C"
  },
  {
    "id": 50,
    "text": "50. Trong khung làm việc của bảo trì phần mềm, \"Môi trường tổ chức\" bao gồm yếu tố nào?",
    "choices": {
      "A": "\tHệ điều hành và trình biên dịch",
      "B": "\tPhần cứng máy tính",
      "C": "\tCác quy tắc nghiệp vụ và chính sách của chính phủ",
      "D": "\tCác công cụ kiểm thử tự động"
    },
    "answer": "C"
  },
  {
    "id": 51,
    "text": "51. Lý do sâu xa nào khiến \"sức ì của người sử dụng\" trở thành một yếu tố cản trở thay đổi phần mềm?",
    "choices": {
      "A": "\tNgười dùng không biết sử dụng máy tính",
      "B": "\tNgười dùng sợ thay đổi vì đã quen với hệ thống cũ",
      "C": "\tNgười dùng luôn đòi hỏi thay đổi quá nhiều",
      "D": "\tNgười dùng là các lập trình viên"
    },
    "answer": "B"
  },
  {
    "id": 52,
    "text": "52. Một lập trình viên nhận thấy đoạn mã xử lý chuỗi trong hệ thống quá rối rắm và khó hiểu, mặc dù nó vẫn chạy đúng. Anh ta quyết định viết lại đoạn mã đó cho sạch sẽ và dễ đọc hơn (Refactoring). Đây là loại bảo trì gì?",
    "choices": {
      "A": "Bảo trì hiệu chỉnh",
      "B": "Bảo trì hoàn thiện",
      "C": "Bảo trì dự phòng",
      "D": "Bảo trì thích ứng"
    },
    "answer": "C"
  },
  {
    "id": 53,
    "text": "53. Trọng tâm chính của mô hình Boehm (1983) là gì?",
    "choices": {
      "A": "Tự động hóa kiểm thử",
      "B": "Phân tích kinh tế và quyết định quản lý",
      "C": "Tái sử dụng thành phần phần mềm",
      "D": "Cập nhật tài liệu liên tục"
    },
    "answer": "B"
  },
  {
    "id": 54,
    "text": "54. Yếu tố cốt lõi của Mô hình Tái sử dụng (Reuse Model) là gì?",
    "choices": {
      "A": "\tHợp đồng bảo trì chi tiết",
      "B": "\tKho chứa (repository) các thành phần và tài liệu",
      "C": "\tQuy trình kiểm thử tự động",
      "D": "\tĐội ngũ Help Desk chuyên nghiệp"
    },
    "answer": "B"
  },
  {
    "id": 55,
    "text": "55. Giai đoạn \"Phân tích\" trong mô hình IEEE 1219 KHÔNG bao gồm việc gì?",
    "choices": {
      "A": "\tNghiên cứu phạm vi và tính khả thi của thay đổi",
      "B": "\tLập kế hoạch sơ bộ cho thiết kế, cài đặt, kiểm thử",
      "C": "\tTrực tiếp lập trình sửa lỗi",
      "D": "\tPhân tích chi phí và lợi ích"
    },
    "answer": "C"
  },
  {
    "id": 56,
    "text": "56. Thành phần nào thường KHÔNG có trong Ban Kiểm soát Cấu hình (CCB)?",
    "choices": {
      "A": "Đại diện khách hàng",
      "B": "Đại diện tổ chức bảo trì",
      "C": "Lập trình viên thực thi chính",
      "D": "Đại diện người dùng cuối"
    },
    "answer": "C"
  },
  {
    "id": 57,
    "text": "57. Công việc \"Thẩm tra\" (Verification) trong hoạt động \"Phân tích vấn đề và sự thay đổi\" nhằm mục đích gì?",
    "choices": {
      "A": "\tLập kế hoạch dự án chi tiết",
      "B": "\tXác nhận rằng vấn đề được báo cáo là có thật và có thể tái hiện",
      "C": "\tPhê duyệt ngân sách cho thay đổi",
      "D": "\tViết tài liệu hướng dẫn sử dụng mới"
    },
    "answer": "B"
  },
  {
    "id": 58,
    "text": "58. Việc định nghĩa rõ ràng các thuật ngữ như \"lỗi nghiêm trọng\" hay \"thời gian phản hồi\" trong hợp đồng nhằm mục đích gì?",
    "choices": {
      "A": "\tLàm cho hợp đồng trông chuyên nghiệp hơn",
      "B": "\tTránh hiểu lầm và tranh chấp về nghĩa vụ và trách nhiệm giữa các bên",
      "C": "\tGiới hạn quyền lợi của khách hàng",
      "D": "\tKéo dài thời gian thực hiện dịch vụ"
    },
    "answer": "B"
  },
  {
    "id": 59,
    "text": "59. Theo ISO/IEC/IEEE 14764, việc \"Lập các thủ tục cho yêu cầu thay đổi\" thuộc về hoạt động nào?",
    "choices": {
      "A": "Phân tích vấn đề và sự thay đổi",
      "B": "Thực thi sự thay đổi",
      "C": "Thực thi quy trình",
      "D": "Di dời"
    },
    "answer": "C"
  },
  {
    "id": 60,
    "text": "60. Sự khác biệt cốt lõi giữa \"Thực thi sự thay đổi\" trong bảo trì và \"Phát triển mới\" là gì?",
    "choices": {
      "A": "\tBảo trì không cần phân tích hoặc thiết kế",
      "B": "\tBảo trì phải làm việc trong các ràng buộc của hệ thống hiện có",
      "C": "\tPhát triển mới không cần kiểm thử",
      "D": "\tBảo trì luôn sử dụng ngôn ngữ lập trình khác"
    },
    "answer": "B"
  },
  {
    "id": 61,
    "text": "61. Theo mô hình Osborne, nguyên nhân chính dẫn đến các vấn đề kỹ thuật trong bảo trì là gì?",
    "choices": {
      "A": "\tDo mã nguồn được viết quá phức tạp và khó hiểu",
      "B": "\tDo sự kiểm soát và giao tiếp quản lý không đầy đủ",
      "C": "\tDo công nghệ phát triển quá nhanh làm phần mềm lạc hậu",
      "D": "\tDo người dùng cuối thiếu kỹ năng sử dụng máy tính"
    },
    "answer": "B"
  },
  {
    "id": 62,
    "text": "62. Tính có thể bảo trì bị ảnh hưởng nhiều nhất ở giai đoạn nào?",
    "choices": {
      "A": "Vận hành",
      "B": "Kiểm thử",
      "C": "Phát triển",
      "D": "Triển khai"
    },
    "answer": "C"
  },
  {
    "id": 63,
    "text": "63. Halstead đo độ phức tạp dựa trên yếu tố nào?",
    "choices": {
      "A": "Số lượng toán tử và toán hạng",
      "B": "Số dòng mã và chú thích",
      "C": "Số module và hàm",
      "D": "Số biến và hằng số"
    },
    "answer": "A"
  },
  {
    "id": 64,
    "text": "64. Yếu tố phi kỹ thuật nào ảnh hưởng đến chi phí bảo trì?",
    "choices": {
      "A": "Tuổi phần mềm",
      "B": "Màu sắc giao diện",
      "C": "Tên công ty",
      "D": "Ngôn ngữ lập trình"
    },
    "answer": "A"
  },
  {
    "id": 65,
    "text": "65. Tính có thể bảo trì thường bị xem nhẹ trong phát triển vì:",
    "choices": {
      "A": "\tÁp lực thời gian, ngân sách và tập trung vào chức năng chính",
      "B": "\tNhà phát triển không biết cách viết mã dễ bảo trì",
      "C": "\tNgười dùng không yêu cầu tính bảo trì",
      "D": "\tCông cụ hỗ trợ bảo trì còn hạn chế"
    },
    "answer": "A"
  },
  {
    "id": 66,
    "text": "66. Mô hình điểm chức năng trong bảo trì chỉ tính cho những hoạt động nào?",
    "choices": {
      "A": "Thêm mới và chỉnh sửa chức năng",
      "B": "Xóa chức năng và tối ưu mã",
      "C": "Kiểm thử và triển khai",
      "D": "Đào tạo và hỗ trợ người dùng"
    },
    "answer": "A"
  },
  {
    "id": 67,
    "text": "67. Bạn là quản lý, nhân viên báo cáo rằng thời gian thực hiện thay đổi thực tế là 15 ngày, trong khi kế hoạch là 10 ngày. Hãy tính chất lượng quy trình theo tiêu chí \"Kế hoạch\"?",
    "choices": {
      "A": "+50%",
      "B": "-50%",
      "C": "+33%",
      "D": "-33%"
    },
    "answer": "B"
  },
  {
    "id": 68,
    "text": "68. Việc lựa chọn nhóm bảo trì thường dựa trên yếu tố nào?",
    "choices": {
      "A": "Sở thích cá nhân của quản lý",
      "B": "Đặc điểm cụ thể của từng trường hợp",
      "C": "Quy mô công ty",
      "D": "Ngôn ngữ lập trình sử dụng"
    },
    "answer": "B"
  },
  {
    "id": 69,
    "text": "69. Trong phân bố công sức bảo trì, loại nào chiếm tỷ lệ CAO NHẤT theo nghiên cứu của Lientz và Swanson?",
    "choices": {
      "A": "Bảo trì hiệu chỉnh",
      "B": "Bảo trì thích ứng",
      "C": "Bảo trì hoàn thiện",
      "D": "Bảo trì dự phòng"
    },
    "answer": "C"
  },
  {
    "id": 70,
    "text": "71. Trong khung làm việc, yếu tố nào trực tiếp tạo ra nhu cầu thay đổi đối với sản phẩm phần mềm?",
    "choices": {
      "A": "Nhân sự bảo trì",
      "B": "Yêu cầu của người dùng",
      "C": "Màu sắc của giao diện sản phẩm",
      "D": "Tốc độ của sản phẩm"
    },
    "answer": "B"
  },
  {
    "id": 71,
    "text": "76. Yếu tố môi trường nào dưới đây thuộc \"Môi trường điều hành\" (Operating Environment)?",
    "choices": {
      "A": "Quy định của chính phủ",
      "B": "Quy tắc nghiệp vụ",
      "C": "Áp lực cạnh tranh thị trường",
      "D": "Hệ điều hành, trình biên dịch"
    },
    "answer": "D"
  },
  {
    "id": 72,
    "text": "77. Chi phí sửa lỗi (fixing bugs) cao nhất ở giai đoạn nào trong chu kỳ sống phần mềm?",
    "choices": {
      "A": "Phân tích và đặc tả yêu cầu",
      "B": "Thiết kế",
      "C": "Lập trình",
      "D": "Vận hành và bảo trì"
    },
    "answer": "D"
  },
  {
    "id": 73,
    "text": "79. Bảo trì hoàn thiện thường bao gồm các hoạt động nào?",
    "choices": {
      "A": "\tSửa lỗi logic trong code",
      "B": "\tChuyển đổi sang hệ điều hành mới",
      "C": "\tCải tiến chức năng hiện có hoặc thêm chức năng mới",
      "D": "\tViết lại chú thích cho code dễ hiểu hơn"
    },
    "answer": "C"
  },
  {
    "id": 74,
    "text": "83. Hãy chọn phát biểu SAI về bảo trì phần mềm?",
    "choices": {
      "A": "\tBảo trì chỉ là hoạt động sửa lỗi (bug fĩing",
      "B": "\tBảo trì là quá trình quản lý sự tiến hóa của phần mềm",
      "C": "\tBảo trì bao gồm cả hoạt động trước và sau khi phát hành sản phẩm",
      "D": "\tChi phí cho việc hiểu hệ thống chiếm phần lớn công sức bảo trì"
    },
    "answer": "A"
  },
  {
    "id": 75,
    "text": "84. Việc \"vận hành song song\" (parallel operation) thường gắn liền với hoạt động nào nhất?",
    "choices": {
      "A": "Hiệu chỉnh nhanh",
      "B": "Phân tích tác động",
      "C": "Di dời hệ thống",
      "D": "Chỉnh sửa code"
    },
    "answer": "C"
  },
  {
    "id": 76,
    "text": "89. Dựa trên Luật của Lehman, khi phần mềm được sửa đổi nhiều lần, điều gì có xu hướng xảy ra?",
    "choices": {
      "A": "\tKích thước và độ phức tạp có xu hướng giảm",
      "B": "\tKích thước và độ phức tạp có xu hướng tăng lên",
      "C": "\tTốc độ xử lý tăng gấp đôi",
      "D": "\tTốc độ xử lý giảm một nửa"
    },
    "answer": "B"
  },
  {
    "id": 77,
    "text": "96. Dự án có 80 điểm chức năng (FP). Sử dụng ngôn ngữ Visual Basic (trung bình 40 LOC/FP). Hãy ước lượng kích thước phần mềm theo dòng lệnh (LOC)?",
    "choices": {
      "A": "320 LOC",
      "B": "3200 LOC",
      "C": "80 LOC",
      "D": "1000 LOC"
    },
    "answer": "B"
  },
  {
    "id": 78,
    "text": "97. Trong bảo trì phần mềm, hoạt động \"Ngưng sử dụng\" nhằm quản lý vấn đề gì?",
    "choices": {
      "A": "\tTạm dừng phần mềm trong vài giờ để bảo trì định kỳ",
      "B": "\tQuản lý việc đưa phần mềm đến cuối vòng đời",
      "C": "\tChuyển phần mềm sang một máy chủ vật lý mới",
      "D": "\tViết lại phần mềm bằng một ngôn ngữ mới"
    },
    "answer": "B"
  },
  {
    "id": 79,
    "text": "98. Help Desk phát hiện khách hàng không in được là do chưa bật nguồn máy in. Hành động giải quyết ngay tại chỗ này thể hiện vai trò gì?",
    "choices": {
      "A": "\tVai trò sửa lỗi phần mềm cơ bản",
      "B": "\tVai trò đào tạo người dùng sử dụng phần cứng",
      "C": "\tVai trò lọc vấn đề, giảm tải các lỗi không phải phần mềm",
      "D": "\tVai trò phân tích tác động lỗi"
    },
    "answer": "C"
  },
  {
    "id": 80,
    "text": "99. Hoạt động nào xảy ra khi hệ thống được chuyển từ môi trường vận hành cũ sang môi trường mới?",
    "choices": {
      "A": "Ngưng sử dụng (Retirement",
      "B": "Di dời (Migration",
      "C": "Thực thi sự thay đổi (Modification",
      "D": "Phân tích vấn đề (Problem Analysis"
    },
    "answer": "B"
  },
  {
    "id": 81,
    "text": "101. Chất lượng quy trình bảo trì có thể đo qua chỉ số nào?",
    "choices": {
      "A": "\tMức độ đúng hạn (kế hoạch) và năng suất (số dòng mã/effort",
      "B": "\tSố lượng nhân viên tham gia và thời gian làm việc",
      "C": "\tSố lỗi phát hiện trong kiểm thử và số yêu cầu thay đổi",
      "D": "\tChi phí đầu tư công cụ và đào tạo nhân sự"
    },
    "answer": "A"
  },
  {
    "id": 82,
    "text": "102. Khi sửa đổi module tính lãi suất ngân hàng, để đảm bảo không sai sót với dữ liệu cũ, bạn cần ưu tiên loại kiểm thử nào?",
    "choices": {
      "A": "Kiểm thử đơn vị cho hàm mới viết",
      "B": "Kiểm thử hồi quy trên toàn bộ hệ thống",
      "C": "Kiểm thử giao diện người dùng",
      "D": "Kiểm tra lại tài liệu thiết kế"
    },
    "answer": "B"
  },
  {
    "id": 83,
    "text": "103. Hoạt động \"quản lý cấu hình\" hỗ trợ bảo trì hiệu quả vì:",
    "choices": {
      "A": "\tGiúp đồng bộ phiên bản và giảm nhầm lẫn thay đổi",
      "B": "\tGiúp tạo giao diện quản lý phiên bản trực quan",
      "C": "\tGiúp tự động hóa việc cập nhật cấu trúc mã nguồn",
      "D": "\tGiúp quản lý tài liệu khách hàng theo phân loại"
    },
    "answer": "A"
  },
  {
    "id": 84,
    "text": "106. Tại sao kho chứa trong mô hình Tái sử dụng lại quan trọng?",
    "choices": {
      "A": "\tVì lưu trữ dữ liệu người dùng phục vụ thống kê",
      "B": "\tVì lưu trữ thành phần giúp tiết kiệm thời gian bảo trì",
      "C": "\tVì lưu trữ lịch sử kiểm thử phục vụ xác minh",
      "D": "\tVì lưu trữ mã code nhằm bảo vệ bản quyền"
    },
    "answer": "B"
  },
  {
    "id": 85,
    "text": "109. Yêu cầu \"thêm một tính năng báo cáo mới\" sẽ được phân loại là loại thay đổi gì?",
    "choices": {
      "A": "Thay đổi hiệu chỉnh",
      "B": "Thay đổi thích ứng",
      "C": "Thay đổi hoàn thiện",
      "D": "Thay đổi dự phòng"
    },
    "answer": "C"
  },
  {
    "id": 86,
    "text": "111. Phép đo nào được dùng để đánh giá \"tính dễ hiểu\" (Understandability) của phần mềm một cách gián tiếp?",
    "choices": {
      "A": "Số lượng người dùng hệ thống",
      "B": "Độ phức tạp (McCabe/Halstead",
      "C": "Thời gian phản hồi của hệ thống",
      "D": "Dung lượng bộ nhớ sử dụng"
    },
    "answer": "B"
  },
  {
    "id": 87,
    "text": "112. Trong hoạt động bảo trì phần mềm, một thay đổi nhỏ gây lỗi lan sang nhiều module. Giai đoạn nào xử lý tốt nhất vấn đề này?",
    "choices": {
      "A": "Giai đoạn Kiểm thử chấp nhận",
      "B": "Giai đoạn Phân tích tác động",
      "C": "Giai đoạn Chuyển tiếp",
      "D": "Giai đoạn Lập kế hoạch bảo trì"
    },
    "answer": "B"
  },
  {
    "id": 88,
    "text": "116. Thách thức lớn nhất trong hoạt động Chuyển tiếp giữa đội phát triển và đội bảo trì là gì?",
    "choices": {
      "A": "\tViệc bàn giao các thiết bị phần cứng đắt tiền",
      "B": "\tViệc chuyển giao toàn bộ mã nguồn của dự án",
      "C": "\tViệc chuyển giao kinh nghiệm và tri thức ngầm về hệ thống",
      "D": "\tViệc bàn giao các tài liệu in ấn bằng giấy"
    },
    "answer": "C"
  },
  {
    "id": 89,
    "text": "120. Chất lượng sản phẩm trong bảo trì thường được đánh giá qua chỉ số nào?",
    "choices": {
      "A": "Số yêu cầu thay đổi từ người dùng",
      "B": "Số dòng mã được thêm vào",
      "C": "Thời gian phản hồi",
      "D": "Số nhân viên tham gia bảo trì"
    },
    "answer": "C"
  },
  {
    "id": 90,
    "text": "123. Một phần mềm có 4 EI trung bình, 2 EQ phức tạp, 2 EIF đơn giản. Điểm chức năng thô (UFP) là bao nhiêu? (Tra bảng trọng số: EI trung bình=4, EQ phức tạp=6, EIF đơn giản=5)",
    "choices": {
      "A": "34",
      "B": "38",
      "C": "45",
      "D": "50"
    },
    "answer": "B"
  },
  {
    "id": 91,
    "text": "124. Khi ước lượng chi phí bảo trì bằng FP, nếu tổng hệ số kỹ thuật (∑Fᵢ) = 15, điểm chức năng điều chỉnh (AFP) được tính bằng công thức nào?",
    "choices": {
      "A": "AFP = UFP × (0.65 + 0.01 × 15",
      "B": "AFP = UFP × (0.65 + 15",
      "C": "AFP = UFP × 15",
      "D": "AFP = UFP / (0.65 + 0.01 × 15"
    },
    "answer": "A"
  },
  {
    "id": 92,
    "text": "126. Theo chuẩn IEEE, tính có thể bảo trì (Maintainability) là sự dễ dàng trong việc thực hiện các hoạt động nào?",
    "choices": {
      "A": "\tPhân tích, thiết kế, cài đặt và kiểm thử phần mềm",
      "B": "\tDuy trì, cải tiến, thích ứng hay hiệu chỉnh phần mềm",
      "C": "\tVận hành, quản lý, sao lưu và phục hồi dữ liệu",
      "D": "\tLập kế hoạch, ước lượng, đo lường và kiểm soát"
    },
    "answer": "B"
  },
  {
    "id": 93,
    "text": "129. Loại bảo trì nào nhằm mục đích ngăn ngừa lỗi có thể xảy ra trong tương lai hoặc cải thiện tính dễ bảo trì?",
    "choices": {
      "A": "Bảo trì hiệu chỉnh",
      "B": "Bảo trì thích ứng",
      "C": "Bảo trì hoàn thiện",
      "D": "Bảo trì dự phòng"
    },
    "answer": "D"
  },
  {
    "id": 94,
    "text": "133. \"Lỗ hổng thông tin\" (Information Gap) trong quy trình bảo trì đề cập đến điều gì?",
    "choices": {
      "A": "\tKhoảng cách giữa khả năng diễn đạt của người dùng và khả năng hiểu của phân tích viên",
      "B": "\tKhoảng trống bảo mật trong mã nguồn",
      "C": "\tSự thiếu hụt tài liệu kỹ thuật",
      "D": "\tKhoảng cách giữa các phiên bản phần mềm"
    },
    "answer": "A"
  },
  {
    "id": 95,
    "text": "141. Hợp đồng bảo trì thường trở nên bắt buộc trong trường hợp nào?",
    "choices": {
      "A": "Khi phần mềm được phát triển nội bộ",
      "B": "Khi dịch vụ bảo trì được thuê ngoài",
      "C": "Khi phần mềm có trên 100 người dùng",
      "D": "Khi phần mềm chạy trên hệ điều hành cũ"
    },
    "answer": "B"
  },
  {
    "id": 96,
    "text": "144. Khi thực hiện thay đổi thêm chức năng \"Xác thực 2 bước (2FA)\", bảo trì viên cần cập nhật mã nguồn, cơ sở dữ liệu, tài liệu thiết kế và thực hiện kiểm thử. Điều này minh họa rõ nhất cho nguyên tắc nào của Quản lý Cấu hình Phần mềm (SCM)?",
    "choices": {
      "A": "Quản lý phiên bản riêng biệt",
      "B": "Kiểm soát sự thay đổi một cách toàn diện",
      "C": "Tự động hóa qu trình kiểm thử",
      "D": "Phân quyền truy cập nghiêm ngặt"
    },
    "answer": "B"
  },
  {
    "id": 97,
    "text": "441. Kỹ thuật Đảo ngược (Reverse Engineering) là gì?",
    "choices": {
      "A": "\tLà quy trình xây dựng một hệ thống mới từ các yêu cầu đặc tả ban đầu",
      "B": "\tLà quy trình phân tích hệ thống để xác định các thành phần và mối quan hệ của nó, tạo ra biểu diễn ở dạng hoặc mức trừu tượng khác",
      "C": "\tLà quy trình kiểm thử tự động để phát hiện lỗi và sửa lỗi trong mã nguồn",
      "D": "\tLà quy trình tối ưu hóa cấu trúc mã nguồn mà không thay đổi hành vi bên ngoài"
    },
    "answer": "B"
  },
  {
    "id": 98,
    "text": "442. Kỹ thuật Tái kiến tạo (Reengineering) khác với kỹ thuật Đảo ngược ở điểm nào?",
    "choices": {
      "A": "\tTái kiến tạo chỉ thay đổi giao diện người dùng, còn Đảo ngược thay đổi kiến trúc bên trong",
      "B": "\tTái kiến tạo kiểm tra và sửa đổi hệ thống để tái thiết nó ở dạng mới, còn Đảo ngược chỉ giúp hiểu hệ thống",
      "C": "\tTái kiến tạo tập trung vào phục hồi tài liệu, còn Đảo ngược tập trung vào tái cấu trúc mã nguồn",
      "D": "\tTái kiến tạo là bước đầu tiên bắt buộc trước khi thực hiện Đảo ngược"
    },
    "answer": "B"
  },
  {
    "id": 99,
    "text": "443. Công việc nào sau đây KHÔNG thuộc ba hoạt động chính trong mô hình hiểu chương trình?",
    "choices": {
      "A": "\tĐọc tài liệu chương trình",
      "B": "\tChạy chương trình",
      "C": "\tViết tài liệu thiết kế",
      "D": "\tĐọc mã nguồn"
    },
    "answer": "C"
  },
  {
    "id": 100,
    "text": "444. Nhân sự nào cần hiểu chi tiết mức thấp (câu lệnh, hàm) để dự đoán hiệu ứng dây chuyền khi thay đổi?",
    "choices": {
      "A": "\tNgười quản lý",
      "B": "\tPhân tích viên",
      "C": "\tLập trình viên",
      "D": "\tThiết kế viên"
    },
    "answer": "C"
  },
  {
    "id": 101,
    "text": "445. Mục đích cuối cùng của việc hiểu chương trình trong bảo trì phần mềm là gì?",
    "choices": {
      "A": "\tĐể phát hiện và sửa chữa mọi lỗi tiềm ẩn trong hệ thống",
      "B": "\tĐể thực hiện thành công các yêu cầu thay đổi đối với phần mềm",
      "C": "\tĐể tạo ra tài liệu kỹ thuật mới và chính xác cho hệ thống",
      "D": "\tĐể tối ưu hóa hiệu suất và tốc độ thực thi của chương trình"
    },
    "answer": "B"
  },
  {
    "id": 102,
    "text": "446. Kỹ thuật đảo ngược ở mức \"Thực thi\" thường được gọi là gì?",
    "choices": {
      "A": "\tPhục hồi thiết kế",
      "B": "\tPhục hồi đặc tả",
      "C": "\tDẫn chứng lại tài liệu",
      "D": "\tTái cấu trúc"
    },
    "answer": "C"
  },
  {
    "id": 103,
    "text": "447. Phương pháp nào sau đây là một cách tiếp cận để chuyển đổi chương trình trong tái kiến tạo CSDL?",
    "choices": {
      "A": "\tDịch ngược",
      "B": "\tViết lại",
      "C": "\tMã hóa lại",
      "D": "\tĐóng gói"
    },
    "answer": "B"
  },
  {
    "id": 104,
    "text": "448. Lý do nào thường KHÔNG phải là điều kiện để xem xét sử dụng kỹ thuật Đảo ngược?",
    "choices": {
      "A": "\tTài liệu bị mất, không chính xác hoặc lạc hậu",
      "B": "\tĐộ phức tạp của chương trình tăng lên",
      "C": "\tCần thêm chi phí và nhân sự mới cho dự án",
      "D": "\tCần chuyển chương trình sang ngôn ngữ/nền tảng khác"
    },
    "answer": "C"
  },
  {
    "id": 105,
    "text": "449. Mục tiêu của Tái kiến tạo Giao diện người dùng là gì?",
    "choices": {
      "A": "\tThay đổi hoàn toàn logic nghiệp vụ của ứng dụng",
      "B": "\tTái tạo giao diện cũ (ví dụ dựa ký tự) sang giao diện hiện đại (ví dụ đồ họa",
      "C": "\tTăng tốc độ xử lý của các tác vụ nhập liệu",
      "D": "\tGiảm dung lượng lưu trữ của ứng dụng"
    },
    "answer": "B"
  },
  {
    "id": 106,
    "text": "4410. Nhân sự nào cần kiến thức về kích thước chương trình (KLOC, FP) để ra quyết định kinh tế?",
    "choices": {
      "A": "\tLập trình viên",
      "B": "\tPhân tích viên",
      "C": "\tNgười quản lý",
      "D": "\tThiết kế viên"
    },
    "answer": "C"
  },
  {
    "id": 107,
    "text": "4411. \"Độ phức tạp\" và \"Tính có thể bảo trì\" là các đặc trưng phần mềm hỗ trợ cho hoạt động nào?",
    "choices": {
      "A": "\tLập trình chi tiết các hàm con",
      "B": "\tRa quyết định kỹ thuật và quản lý",
      "C": "\tThiết kế giao diện người dùng trực quan",
      "D": "\tKiểm thử tự động toàn bộ hệ thống"
    },
    "answer": "B"
  },
  {
    "id": 108,
    "text": "4412. Nếu một bảo trì viên sử dụng cả tên biến, cấu trúc chương trình, và một lưu đồ tìm thấy để xây dựng giả thuyết về cách chương trình hoạt động, họ đang sử dụng chiến lược nào?",
    "choices": {
      "A": "\tChiến lược từ trên xuống thuần túy",
      "B": "\tChiến lược từ dưới lên thuần túy",
      "C": "\tChiến lược cơ hội, kết hợp các đầu mối từ nhiều nguồn",
      "D": "\tChiến lược dựa trên tài liệu duy nhất"
    },
    "answer": "C"
  },
  {
    "id": 109,
    "text": "4413. Hãy sắp xếp chu trình chính xác các giai đoạn chính trong quá trình tái kiến tạo",
    "choices": {
      "A": "\tKỹ thuật Tái cấu trúc -> Kỹ thuật Đảo ngược -> Kỹ thuật Chuyển tiếp",
      "B": "\tKỹ thuật Chuyển tiếp -> Kỹ thuật Đảo ngược -> Kỹ thuật Tái cấu trúc",
      "C": "\tKỹ thuật Đảo ngược -> Kỹ thuật Tái cấu trúc -> Kỹ thuật Chuyển tiếp",
      "D": "\tKỹ thuật Đảo ngược -> Kỹ thuật Chuyển tiếp -> Kỹ thuật Tái cấu trúc"
    },
    "answer": "C"
  },
  {
    "id": 110,
    "text": "4414. Một hệ thống có \"tài liệu lỗi thời\" và \"mã lệnh rối, dài\" đồng thời xuất hiện. Điều này chủ yếu cảnh báo điều gì và gợi ý giải pháp kỹ thuật nào?",
    "choices": {
      "A": "\tCảnh báo hệ thống hoạt động ổn định, không cần can thiệp",
      "B": "\tCảnh báo hệ thống đang trong giai đoạn phát triển ban đầu",
      "C": "\tCảnh báo hệ thống khó bảo trì và cần được xem xét để tái kiến tạo",
      "D": "\tCảnh báo cần thêm thời gian để viết tài liệu mới"
    },
    "answer": "C"
  },
  {
    "id": 111,
    "text": "4415. Việc hiểu \"Lĩnh vực vấn đề\" của hệ thống giúp ích gì cụ thể cho phân tích viên trong bảo trì?",
    "choices": {
      "A": "\tGiúp lựa chọn giải thuật, phương pháp và công cụ bảo trì phù hợp",
      "B": "\tGiúp dự đoán cách các thay đổi về quy định nghiệp vụ hay nền tảng phần cứng sẽ tác động đến hệ thống",
      "C": "\tGiúp tính toán chính xác chi phí bảo trì hàng tháng",
      "D": "\tGiúp thiết kế giao diện người dùng thân thiện hơn"
    },
    "answer": "B"
  },
  {
    "id": 112,
    "text": "4416. Trong mô hình hiểu chương trình, chiến lược \"Từ dưới lên\" (Bottom-up) bắt đầu từ đâu?",
    "choices": {
      "A": "\tBắt đầu từ việc hiểu các chi tiết mức thấp như câu lệnh và biến",
      "B": "\tBắt đầu từ việc hiểu các chi tiết mức cao như chức năng tổng thể",
      "C": "\tBắt đầu từ việc chạy thử chương trình để xem lỗi phát sinh",
      "D": "\tBắt đầu từ việc phỏng vấn người dùng cuối về trải nghiệm"
    },
    "answer": "A"
  },
  {
    "id": 113,
    "text": "4417. Kỹ thuật Đảo ngược (Reverse Engineering) được định nghĩa là quy trình nào sau đây?",
    "choices": {
      "A": "\tPhân tích hệ thống để nhận dạng thành phần và tạo biểu diễn ở mức trừu tượng cao hơn",
      "B": "\tPhân tích hệ thống để viết lại mã nguồn bằng ngôn ngữ lập trình mới hơn",
      "C": "\tPhân tích hệ thống để tìm ra các lỗi logic và sửa chúng ngay lập tức",
      "D": "\tPhân tích hệ thống để tối ưu hóa cơ sở dữ liệu và giảm dung lượng lưu trữ"
    },
    "answer": "A"
  },
  {
    "id": 114,
    "text": "4418. Trong tái kiến tạo hướng đối tượng, \"Refactoring\" (Tái cấu trúc) nhằm mục đích gì?",
    "choices": {
      "A": "\tPhân phối lại biến và phương thức để chuẩn bị cho sự mở rộng",
      "B": "\tChuyển đổi mã nguồn hướng đối tượng sang mã nguồn thủ tục",
      "C": "\tXóa bỏ hoàn toàn các lớp cũ và viết lại các lớp mới",
      "D": "\tTăng số lượng dòng lệnh để chương trình trông phức tạp hơn"
    },
    "answer": "A"
  },
  {
    "id": 115,
    "text": "4419. Một phần mềm bị rối mã (spaghetti code). Giải pháp tối ưu dài hạn là:",
    "choices": {
      "A": "\tTái cấu trúc mã theo chuẩn mới",
      "B": "\tViết lại tài liệu để dễ theo dõi",
      "C": "\tChạy thử và ghi log chi tiết",
      "D": "\tThay đổi toàn bộ thuật toán xử lý"
    },
    "answer": "A"
  },
  {
    "id": 116,
    "text": "4420. Giai đoạn nào trong quy trình Tái kiến tạo liên quan đến việc cải thiện chất lượng bên trong của các biểu diễn ở cùng một mức trừu tượng?",
    "choices": {
      "A": "\tKỹ thuật Đảo ngược (Reverse Engineering",
      "B": "\tKỹ thuật Tái cấu trúc (Restructuring",
      "C": "\tKỹ thuật Chuyển tiếp (Forward Engineering",
      "D": "\tKỹ thuật Phục hồi (Recovery"
    },
    "answer": "B"
  },
  {
    "id": 117,
    "text": "4421. Giả sử một hệ thống ngân hàng cũ cần chuyển từ giao diện ký tự sang giao diện đồ họa. Kỹ thuật nào là phù hợp nhất và tại sao?",
    "choices": {
      "A": "\tKỹ thuật Đảo ngược, vì nó giúp hiểu logic nghiệp vụ bên trong để viết lại hệ thống mới",
      "B": "\tKỹ thuật Tái kiến tạo Giao diện người dùng, vì nó kết hợp đảo ngược để trích xuất mô hình giao diện và chuyển tiếp để cài đặt mới",
      "C": "\tKỹ thuật Tái cấu trúc, vì nó cải thiện chất lượng mã nguồn hiện tại mà không thay đổi hành vi",
      "D": "\tKỹ thuật Phục hồi đặc tả, vì nó tạo ra tài liệu đặc tả mới cho toàn bộ hệ thống"
    },
    "answer": "B"
  },
  {
    "id": 118,
    "text": "4422. Điểm bắt đầu phổ biến nhất trong kỹ thuật Đảo ngược phần mềm là gì?",
    "choices": {
      "A": "\tTài liệu thiết kế kiến trúc ban đầu",
      "B": "\tMã nguồn (source code) của chương trình",
      "C": "\tYêu cầu đặc tả chức năng của người dùng",
      "D": "\tCác báo cáo lỗi (bug reports) từ hệ thống"
    },
    "answer": "B"
  },
  {
    "id": 119,
    "text": "4423. Mức trừu tượng thấp nhất của kỹ thuật đảo ngược, nơi tạo ra biểu diễn tương đương ở cùng mức trừu tượng, được gọi là gì?",
    "choices": {
      "A": "\tPhục hồi thiết kế",
      "B": "\tPhục hồi đặc tả",
      "C": "\tDẫn chứng lại tài liệu",
      "D": "\tTái cấu trúc mã lệnh"
    },
    "answer": "C"
  },
  {
    "id": 120,
    "text": "4424. Trong tái kiến tạo cơ sở dữ liệu, \"Dịch lược đồ\" (Schema Translation) là gì?",
    "choices": {
      "A": "\tChuyển đổi dữ liệu vật lý từ hệ thống cũ sang hệ thống",
      "B": "\tChuyển đổi các chương trình ứng dụng để truy xuất CSDL mới",
      "C": "\tChuyển đổi mô hình dữ liệu (ví dụ: từ mạng sang quan hệ",
      "D": "\tChuyển đổi giao diện người dùng để nhập liệu nhanh hơn"
    },
    "answer": "C"
  },
  {
    "id": 121,
    "text": "4425. Mối quan hệ giữa \"Độ phức tạp của chương trình\" và khả năng \"Hiểu chương trình\" là như thế nào?",
    "choices": {
      "A": "\tĐộ phức tạp càng cao thì chương trình càng dễ hiểu do có nhiều logic",
      "B": "\tĐộ phức tạp càng cao thì chương trình càng khó hiểu và khó bảo trì",
      "C": "\tĐộ phức tạp không ảnh hưởng gì đến khả năng hiểu chương trình",
      "D": "\tĐộ phức tạp càng thấp thì chương trình càng khó hiểu và khó bảo trì"
    },
    "answer": "B"
  },
  {
    "id": 122,
    "text": "4426. Kỹ thuật đảo ngược ở mức độ trung bình thường được gọi là gì?",
    "choices": {
      "A": "\tPhục hồi thiết kế",
      "B": "\tPhục hồi đặc tả",
      "C": "\tDẫn chứng lại tài liệu",
      "D": "\tTái cấu trúc"
    },
    "answer": "A"
  },
  {
    "id": 123,
    "text": "4427. Nhân sự nào cần trích dẫn thông tin về kiến trúc, cấu trúc dữ liệu, dòng dữ liệu để xác định cách cải tiến",
    "choices": {
      "A": "\tLập trình viên",
      "B": "\tPhân tích viên",
      "C": "\tNgười quản lý",
      "D": "\tThiết kế viên"
    },
    "answer": "B"
  },
  {
    "id": 124,
    "text": "4428. Khi một công ty muốn kéo dài thời gian sống kinh tế của một hệ thống legacy nhưng tài liệu thiết kế đã bị mất, việc sử dụng kỹ thuật Đảo ngược sẽ mang lại lợi ích gì trực tiếp nhất?",
    "choices": {
      "A": "\tTự động sửa tất cả các lỗi tồn đọng trong hệ thống",
      "B": "\tPhục hồi lại thông tin thiết kế và đặc tả bị mất từ mã nguồn",
      "C": "\tGiảm ngay lập tức độ phức tạp của mã nguồn",
      "D": "\tThay thế toàn bộ hệ thống bằng một hệ thống mới tương đương"
    },
    "answer": "B"
  },
  {
    "id": 125,
    "text": "4429. Việc hiểu \"Quan hệ Sản phẩm – Môi trường\" giúp ích gì cụ thể cho phân tích viên trong bảo trì?",
    "choices": {
      "A": "\tGiúp viết code hiệu quả hơn cho từng module",
      "B": "\tGiúp dự đoán cách các thay đổi về quy định nghiệp vụ hay nền tảng phần cứng sẽ tác động đến hệ thống",
      "C": "\tGiúp tính toán chính xác chi phí bảo trì hàng tháng",
      "D": "\tGiúp thiết kế giao diện người dùng thân thiện hơn"
    },
    "answer": "B"
  },
  {
    "id": 126,
    "text": "4430. Trong mô hình hiểu chương trình, chiến lược \"Từ trên xuống\" (Top-down) bắt đầu từ đâu?",
    "choices": {
      "A": "\tBắt đầu từ việc hiểu các chi tiết mức thấp như câu lệnh và biến",
      "B": "\tBắt đầu từ việc hiểu các chi tiết mức cao như chức năng tổng thể",
      "C": "\tBắt đầu từ việc chạy thử chương trình để xem lỗi phát sinh",
      "D": "\tBắt đầu từ việc phỏng vấn người dùng cuối về trải nghiệm"
    },
    "answer": "B"
  }
];