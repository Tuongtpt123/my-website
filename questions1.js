const questions = [
  {
    "id": 1,
    "text": "Câu 1: Mục tiêu chính của kiểm thử phần mềm là gì??",
    "choices": {
      "A": "Thay thế hoàn toàn quy trình đảm bảo chất lượng",
      "B": "Tìm ra lỗi để sửa chữa và nâng cao chất lượng phần mềm",
      "C": "Chứng minh phần mềm không còn lỗi",
      "D": "Đảm bảo phần mềm chạy đúng trên mọi thiết bị"
    },
    "answer": "B"
  },
  {
    "id": 2,
    "text": "Câu 2: Nguyên lý “Kiểm thử cho thấy sự hiện diện của lỗi” có nghĩa là gì? A. Kiểm thử có thể chứng minh phần mềm hoàn hảo.",
    "choices": {
      "A": "Kiểm thử có thể chứng minh phần mềm hoàn hảo",
      "B": "Kiểm thử làm giảm xác suất lỗi còn sót lại nhưng không chứng minh là không có lỗi",
      "C": "Lỗi luôn tồn tại ở mọi dòng code",
      "D": "Nếu không tìm thấy lỗi, tức là phần mềm đó đã an toàn tuyệt đối"
    },
    "answer": "B"
  },
  {
    "id": 3,
    "text": "Câu 3: Khi nào thì nên bắt đầu các hoạt động kiểm thử trong vòng đời phát triển phần mềm?",
    "choices": {
      "A": "Ngay khi có yêu cầu",
      "B": "Sau khi mã nguồn đã được viết xong hoàn toàn",
      "C": "Sau khi bàn giao cho khách hàng",
      "D": "Chỉ khi hệ thống đã tích hợp xong"
    },
    "answer": "A"
  },
  {
    "id": 4,
    "text": "Câu 4: Sự khác biệt chính giữa Kiểm tra (Verification) và Thẩm định (Validation) là gì?",
    "choices": {
      "A": "Verification là xây dựng hệ thống đúng; Validation là xây dựng đúng hệ thống",
      "B": "Verification do khách hàng làm, Validation do tester làm",
      "C": "Validation thực hiện trước Verification",
      "D": "Cả hai đều giống nhau hoàn toàn"
    },
    "answer": "A"
  },
  {
    "id": 5,
    "text": "Câu 5: Phát biểu nào sau đây đúng về “Nghịch lý thuốc trừ sâu” (Pesticide Paradox) trong kiểm thử?",
    "choices": {
      "A": "Tester cần phải thay đổi phần mềm để tìm thêm lỗi.",
      "B": "Nếu lặp lại cùng một bộ kiểm thử nhiều lần, chúng sẽ không tìm thấy lỗi mới. ",
      "C": "Dùng càng nhiều công cụ tự động thì càng ít lỗi",
      "D": "Kiểm thử quá nhiều sẽ làm phần mềm chạy chậm."
    },
    "answer": "B"
  },
  {
    "id": 6,
    "text": "Câu 6: Mức độ kiểm thử nào tập trung vào việc tìm lỗi trong các đơn vị phần mềm riêng lẻ?",
    "choices": {
      "A": "Kiểm thử chấp nhận",
      "B": "Kiểm thử tích hợp",
      "C": "Kiểm thử hệ thống",
      "D": "Kiểm thử đơn vị"
    },
    "answer": "D"
  },
  {
    "id": 7,
    "text": "Câu 7: Loại kiểm thử nào được thực hiện để đảm bảo rằng các thay đổi mới không làm hỏng các tính năng cũ đang hoạt động?",
    "choices": {
      "A": "Regression Testing",
      "B": "Stress Testing",
      "C": "Smoke Testing",
      "D": "Usability Testing"
    },
    "answer": "A"
  },
  {
    "id": 8,
    "text": "Câu 8: Kỹ thuật 'Phân vùng tương đương' thuộc nhóm kỹ thuật nào?",
    "choices": {
      "A": "Experience-based testing",
      "B": "Static testing",
      "C": "Black-box testing",
      "D": "White-box testing"
    },
    "answer": "C"
  },
  {
    "id": 9,
    "text": "Câu 9: Nếu một trường nhập liệu chấp nhận giá trị từ 18 đến 60, các giá trị nào được chọn để kiểm thử theo kỹ thuật 'Phân tích giá trị biên' (Boundary Value Analysis)?",
    "choices": {
      "A": "18, 60",
      "B": "20, 30, 40, 50",
      "C": "0, 18, 60, 100",
      "D": "17, 18, 19, 59, 60, 61"
    },
    "answer": "D"
  },
  {
    "id": 10,
    "text": "Câu 10: Ai là người thường thực hiện Kiểm thử chấp nhận người dùng (UAT)?",
    "choices": {
      "A": "Khách hàng hoặc người dùng cuối",
      "B": "Đội ngũ Tester nội bộ",
      "C": "Quản lý dự án",
      "D": "Lập trình viên"
    },
    "answer": "A"
  },
  {
    "id": 11,
    "text": "Câu 11: Kiểm thử tĩnh (Static Testing) bao gồm các hoạt động nào?",
    "choices": {
      "A": "Xem xét tài liệu và phân tích tĩnh mã nguồn",
      "B": "Chạy chương trình và nhập dữ liệu thử",
      "C": "Viết báo cáo lỗi sau khi test xong",
      "D": "Kiểm thử hiệu năng hệ thống"
    },
    "answer": "A"
  },
  {
    "id": 12,
    "text": "Câu 12: Trong vòng đời của một lỗi (Bug Life Cycle), trạng thái nào có nghĩa là lỗi đã được sửa và đang đợi kiểm tra lại?",
    "choices": {
      "A": "Rejected",
      "B": "Closed",
      "C": "New",
      "D": "Fixed / Resolved"
    },
    "answer": "D"
  },
  {
    "id": 13,
    "text": "Câu 13: Kiểm thử dựa trên cấu trúc (Structure-based testing) còn được gọi là gì?",
    "choices": {
      "A": "Gray-box testing",
      "B": "White-box testing",
      "C": "Ad-hoc testing",
      "D": "Black-box testing"
    },
    "answer": "B"
  },
  {
    "id": 14,
    "text": "Câu 14: Độ bao phủ câu lệnh 100% có đảm bảo tìm ra hết lỗi logic không?",
    "choices": {
      "A": "Không, vì nó chỉ dùng cho kiểm thử tĩnh",
      "B": "Không, vì nó không kiểm tra được các nhánh rẽ không được thực hiện",
      "C": "Có, vì mọi dòng code đã được chạy qua",
      "D": "Có, nếu kết hợp với kiểm thử đen"
    },
    "answer": "B"
  },
  {
    "id": 15,
    "text": "Câu 15: Lỗi “Chèn mã độc” (SQL Injection) thường được phát hiện trong loại kiểm thử nào?",
    "choices": {
      "A": "Functional Testing",
      "B": "Reliability Testing",
      "C": "Performance Testing",
      "D": "Security Testing"
    },
    "answer": "D"
  },
  {
    "id": 16,
    "text": "Câu 16: Bảng quyết định (Decision Table) thường được sử dụng khi nào?",
    "choices": {
      "A": "Khi thực hiện kiểm thử đơn vị",
      "B": "Khi chỉ cần kiểm tra các giá trị số",
      "C": "Khi các quy tắc nghiệp vụ phụ thuộc vào sự kết hợp của nhiều điều kiện đầu vào",
      "D": "Khi hệ thống có nhiều luồng quy trình phức tạp"
    },
    "answer": "C"
  },
  {
    "id": 17,
    "text": "Câu 17: Thứ tự đúng của các mức kiểm thử phần mềm là gì?",
    "choices": {
      "A": "Unit -> Integration -> System -> Acceptance",
      "B": "Acceptance -> System -> Integration -> Unit",
      "C": "Integration -> Unit -> System -> Acceptance",
      "D": "Unit -> System -> Integration -> Acceptance"
    },
    "answer": "A"
  },
  {
    "id": 18,
    "text": "Câu 18: Kiểm thử Alpha và Beta thuộc mức kiểm thử nào?",
    "choices": {
      "A": "Integration Testing",
      "B": "Performance Testing",
      "C": "System Testing",
      "D": "Acceptance Testing"
    },
    "answer": "D"
  },
  {
    "id": 19,
    "text": "Câu 19: Stub và Driver là những thành phần được sử dụng trong loại kiểm thử nào?",
    "choices": {
      "A": "Security testing",
      "B": "Unit testing và Integration testing",
      "C": "Acceptance testing",
      "D": "Stress testing"
    },
    "answer": "B"
  },
  {
    "id": 20,
    "text": "Câu 20: Mục đích của “Smoke Testing” là gì?",
    "choices": {
      "A": "Kiểm tra xem hệ thống có chịu được nhiệt độ cao không",
      "B": "Sử dụng các công cụ tạo lỗi tự động",
      "C": "Kiểm tra kỹ lưỡng mọi ngóc ngách của phần mềm",
      "D": "Xác minh các chức năng quan trọng nhất có hoạt động không để quyết định tiếp tục kiểm thử"
    },
    "answer": "D"
  },
  {
    "id": 21,
    "text": "Câu 21: Kiểm thử thăm dò là gì?",
    "choices": {
      "A": "Vừa thiết kế test case, vừa thực hiện kiểm thử và học hỏi về hệ thống cùng lúc",
      "B": "Sử dụng robot để đi tìm lỗi ngẫu nhiên",
      "C": "Kiểm thử dựa trên các tài liệu đặc tả chi tiết có sẵn",
      "D": "Kiểm thử lại các lỗi đã được sửa"
    },
    "answer": "A"
  },
  {
    "id": 22,
    "text": "Câu 22: Một lỗi (Bug) phát sinh do đâu?",
    "choices": {
      "A": "Do máy tính chạy quá lâu",
      "B": "Do khách hàng yêu cầu quá nhiều tính năng",
      "C": "Do tester tìm thấy",
      "D": "Do con người phạm sai lầm trong quá trình phát triển"
    },
    "answer": "D"
  },
  {
    "id": 23,
    "text": "Câu 23: Trong kiểm thử hộp trắng, “Độ bao phủ nhánh” 100% thì có đạt được 100% “Độ bao phủ câu lệnh” không?",
    "choices": {
      "A": "Tùy thuộc vào ngôn ngữ lập trình",
      "B": "Chỉ đúng nếu không có lệnh nhảy",
      "C": "Không",
      "D": "Có"
    },
    "answer": "D"
  },
  {
    "id": 24,
    "text": "Câu 24: Kiểm thử phi chức năng (Non-functional Testing) tập trung vào điều gì?",
    "choices": {
      "A": "Hệ thống hoạt động như thế nào (hiệu năng, bảo mật, độ tin cậy)",
      "B": "Giao diện người dùng có đẹp không",
      "C": "Hệ thống làm được những việc gì",
      "D": "Kiểm tra mã nguồn bên trong"
    },
    "answer": "A"
  },
  {
    "id": 25,
    "text": "Câu 25: Sự khác biệt giữa Error, Bug (Defect) và Failure là gì?",
    "choices": {
      "A": "Cả hai là một (không có sự khác biệt)",
      "B": "Bug là lỗi do khách hàng tìm thấy, Failure là lỗi do tester tìm thấy",
      "C": "Error là sai lầm của con người, Bug là lỗi trong code, Failure là sự cố xảy ra khi chạy phần mềm",
      "D": "Failure là nguyên nhân gây ra Bug"
    },
    "answer": "C"
  },
  {
    "id": 26,
    "text": "Câu 26: Mô hình V (V-model) nhấn mạnh điều gì trong kiểm thử?",
    "choices": {
      "A": "Mỗi giai đoạn phát triển đều có một giai đoạn kiểm thử tương ứng",
      "B": "Kiểm thử không quan trọng bằng lập trình",
      "C": "Kiểm thử chỉ nên thực hiện sau khi code xong",
      "D": "Chỉ tập trung vào kiểm thử hệ thống"
    },
    "answer": "A"
  },
  {
    "id": 27,
    "text": "Câu 27: Công cụ kiểm thử tự động (Automation Tools) tốt nhất nên dùng cho loại kiểm thử nào?",
    "choices": {
      "A": "Kiểm thử lần đầu cho một tính năng mới",
      "B": "Kiểm thử hồi quy",
      "C": "Kiểm thử thăm dò",
      "D": "Kiểm thử UX/UI nâng cao"
    },
    "answer": "B"
  },
  {
    "id": 28,
    "text": "Câu 28: Ma trận truy vết yêu cầu (Requirement Traceability Matrix - RTM) dùng để làm gì?",
    "choices": {
      "A": "Để thay thế cho bản kế hoạch kiểm thử",
      "B": "Đảm bảo mọi yêu cầu của khách hàng đều được bao phủ bởi ít nhất một test case",
      "C": "Để lưu trữ danh sách các lỗi đã tìm thấy",
      "D": "Để tính lương cho tester"
    },
    "answer": "B"
  },
  {
    "id": 29,
    "text": "Câu 29: Kỹ thuật “Đoán lỗi” dựa vào điều gì?",
    "choices": {
      "A": "Kinh nghiệm và trực giác của tester về những nơi lỗi thường xảy ra",
      "B": "Đặc tả yêu cầu chi tiết của hệ thống",
      "C": "Việc tung đồng xu ngẫu nhiên",
      "D": "Các thuật toán toán học phức tạp"
    },
    "answer": "A"
  },
  {
    "id": 30,
    "text": "Câu 30: Kiểm thử tải là gì?",
    "choices": {
      "A": "Kiểm tra hệ thống hoạt động thế nào với lượng người dùng dự kiến",
      "B": "Kiểm tra xem dữ liệu có bị mất khi mất điện không",
      "C": "Kiểm tra tốc độ gõ phím của người dùng",
      "D": "iểm tra hệ thống khi bị quá tải để xem nó hỏng như thế nào"
    },
    "answer": "A"
  },
  {
    "id": 31,
    "text": "Câu 31: Test Case tối thiểu nên bao gồm các thành phần nào?",
    "choices": {
      "A": "Chỉ cần mã nguồn của tính năng đó",
      "B": "Dữ liệu đầu vào, các bước thực hiện và kết quả mong đợi",
      "C": "Tên test case và mô tả",
      "D": "Danh sách các lỗi liên quan"
    },
    "answer": "B"
  },
  {
    "id": 32,
    "text": "Câu 32: Phát biểu nào sau đây là ĐÚNG về Kiểm thử hồi quy?",
    "choices": {
      "A": "Nó có thể bao gồm việc chạy lại các test case cũ đã từng Pass",
      "B": "Kiểm thử hồi quy không bao giờ được tự động hóa",
      "C": "Nó chỉ dùng để tìm các lỗi mới trong tính năng mới",
      "D": "Chỉ cần thực hiện một lần duy nhất vào cuối dự án"
    },
    "answer": "A"
  },
  {
    "id": 33,
    "text": "Câu 33: Kỹ thuật “Kiểm thử chuyển đổi trạng thái” hữu ích nhất cho?",
    "choices": {
      "A": "Kiểm thử hiệu năng trang web",
      "B": "Các hệ thống xử lý tính toán số học lớn",
      "C": "Các hệ thống có các quy trình nghiệp vụ thay đổi trạng thái theo điều kiện (vd: ATM, đặt vé)",
      "D": "Kiểm thử tính bảo mật của cơ sở dữ liệu"
    },
    "answer": "C"
  },
  {
    "id": 34,
    "text": "Câu 34: Bao phủ điều kiện (Condition Coverage) khác gì so với Bao phủ nhánh (Branch Coverage)?",
    "choices": {
      "A": "Bao phủ điều kiện kiểm tra từng biểu thức logic con (True/False) trong một câu lệnh phức hợp",
      "B": "Bao phủ điều kiện chỉ dùng cho kiểm thử đen",
      "C": "Bao phủ nhánh khó đạt được hơn bao phủ điều kiện",
      "D": "Cả hai là một"
    },
    "answer": "A"
  },
  {
    "id": 35,
    "text": "Câu 35: Trong kiểm thử Agile, kiểm thử thường diễn ra khi nào?",
    "choices": {
      "A": "Liên tục và song song với quá trình phát triển trong từng Sprint",
      "B": "Chỉ khi khách hàng yêu cầu",
      "C": "Sau khi tất cả các Sprint đã hoàn thành",
      "D": "Chỉ ở cuối mỗi đợt Release lớn (6 tháng)"
    },
    "answer": "A"
  },
  {
    "id": 36,
    "text": "Câu 36: Sự khác biệt giữa ‘Mức độ nghiêm trọng’ và ‘Mức độ ưu tiên’ của một lỗi là gì?",
    "choices": {
      "A": "Severity là tác động kỹ thuật lên hệ thống, Priority là mức độ khẩn cấp cần sửa lỗi theo góc nhìn kinh doanh",
      "B": "Giống nhau, đều chỉ mức độ quan trọng của lỗi",
      "C": "Priority luôn luôn cao hơn Severity",
      "D": "Severity do khách hàng đánh giá, Priority do tester đánh giá"
    },
    "answer": "A"
  },
  {
    "id": 37,
    "text": "Câu 37: Kiểm thử tích hợp từ dưới lên đòi hỏi điều gì?",
    "choices": {
      "A": "Hệ thống phải hoàn thiện 100%",
      "B": "Kiểm thử thủ công hoàn toàn",
      "C": "Driver",
      "D": "Stub"
    },
    "answer": "C"
  },
  {
    "id": 38,
    "text": "Câu 38: Khi thực hiện kiểm thử hệ thống (System Testing), tester nên dựa vào tài liệu nào nhất?",
    "choices": {
      "A": "Tài liệu đặc tả yêu cầu phần mềm",
      "B": "Hướng dẫn sử dụng của đối thủ",
      "C": "Tài liệu thiết kế chi tiết",
      "D": "Mã nguồn"
    },
    "answer": "A"
  },
  {
    "id": 39,
    "text": "Câu 39: Phát biểu “Kiểm thử hết mọi trường hợp” là khả thi?",
    "choices": {
      "A": "Đúng, nếu có đủ thời gian và tiền bạc",
      "B": "Sai, vì số lượng kịch bản có thể là vô hạn, nên ta phải kiểm thử dựa trên rủi ro và độ ưu tiên",
      "C": "Đúng, các công cụ AI hiện nay có thể làm được",
      "D": "Sai, vì lập trình viên không cho phép"
    },
    "answer": "B"
  },
  {
    "id": 40,
    "text": "Câu 40: Ai là người chịu trách nhiệm cuối cùng về chất lượng sản phẩm phần mềm?",
    "choices": {
      "A": "Toàn bộ đội ngũ dự án (bao gồm cả QA, Dev, BA, PM)",
      "B": "Chỉ mình Developer",
      "C": "Chỉ mình Tester",
      "D": "Khách hàng"
    },
    "answer": "A"
  }
];