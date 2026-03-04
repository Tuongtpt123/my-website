const questions = [
  {
    "id": 1,
    "text": "Câu 1: Điều nào sau đây không phải là ưu điểm của việc sử dụng quản lý dự án tốt?",
    "choices": {
      "A": "Rút ngắn thời gian phát triển",
      "B": "Tinh thần làm việc tốt hơn",
      "C": "Chi phí vốn thấp hơn",
      "D": "Lợi nhuận cao hơn"
    },
    "answer": "C"
  },
  {
    "id": 2,
    "text": "Câu 2: ________ là một nỗ lực tạm thời được tiến hành để tạo ra một sản phẩm hoặc dịch vụ",
    "choices": {
      "A": "Quản lý dự án",
      "B": "Quá trình",
      "C": "Dự án",
      "D": "Danh mục đầu tư"
    },
    "answer": "C"
  },
  {
    "id": 3,
    "text": "Câu 3: Thuộc tính nào sau đây không phải là thuộc tính của dự án?",
    "choices": {
      "A": "Có mục đích rõ ràng, duy nhất",
      "B": "Cần nhiều tài nguyên của nhiều lĩnh vực khác nhau",
      "C": "Nhiều người và  tổ chức  khác  nhau cùng  tham  gia:  có  khách hàng  và/hoặc người tổ chức",
      "D": "Có ràng buộc về phạm vi, chi phí, thời gian"
    },
    "answer": "B"
  },
  {
    "id": 4,
    "text": "Câu 4: ______ là việc áp dụng kiến thức, kỹ năng, công cụ và kỹ thuật vào các hoạt động của",
    "choices": {
      "A": "Quản lý dự án",
      "B": "Quản lý chương trình",
      "C": "Quản lý danh mục dự án",
      "D": "Quản lý yêu cầu"
    },
    "answer": "A"
  },
  {
    "id": 5,
    "text": "Câu 5: Dự án công nghệ thông tin là gì?",
    "choices": {
      "A": "Đánh giá bước đầu về các \"tham số\" của dự án: quy mô, độ phức tạp, nguồn lực",
      "B": "Một kế hoạch dài hạn, tổng hợp, được thực hiện trên một phạm vi không gian rộng lớn, thời gian dài không xác định",
      "C": "Tập hợp các công việc được thực hiện bởi một tập thể nhằm đạt được trong thời gian, kinh phí và một kết quả như dự kiến theo lĩnh vực công nghệ thông tin",
      "D": "Thực hiện lặp đi lặp lại các công việc trong một thời gian dài không xác định"
    },
    "answer": "C"
  },
  {
    "id": 6,
    "text": "Câu 6: Trường hợp nào dưới đây không phải là ví dụ về dự án?",
    "choices": {
      "A": "Lau dọn văn phòng hàng ngày",
      "B": "Xây dựng bãi giữ xe thông minh chọn tại Công ty ABC trong 2 năm",
      "C": "Xây dựng một chiếc cầu qua sông Sài Gòn giai đoạn 2025-2035",
      "D": "Lập kế hoạch cho đám cưới người bạn vào năm 2025"
    },
    "answer": "A"
  },
  {
    "id": 7,
    "text": "Câu 7: Phân chia dự án có thể chia thành bao nhiêu loại chính?",
    "choices": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "A"
  },
  {
    "id": 8,
    "text": "Câu 8: Tổ chức dự án được chia thành bao nhiêu loại?",
    "choices": {
      "A": "2",
      "B": "3    ( Tổ chức theo chức năng, Tổ chức theo dự án, Tổ chức ma trận",
      "C": "4",
      "D": "5"
    },
    "answer": "B"
  },
  {
    "id": 9,
    "text": "Câu 9: Điều gì dưới đây cần được các nhà Quản lý dự án thực hiện để đảm bảo tất cả các công việc dự án đã được bao quát hết?",
    "choices": {
      "A": "Xây dựng kế hoạch quản lý rủi ro",
      "B": "Dự tính ngân sách, nguồn lực dự án",
      "C": "Xây dựng WBS",
      "D": "Tuyên bố phạm vi"
    },
    "answer": "C"
  },
  {
    "id": 10,
    "text": "Câu 10: Loại dự án nào thuộc về “Xây dựng cơ sở hạ tầng công nghệ thông tin” (CNTT)?",
    "choices": {
      "A": "Xây dựng Khu Công nghệ Phần mềm tại Thành phố ABC",
      "B": "Đào tạo cán bộ từ cấp huyện trở lên đạt chuẩn kỹ năng sử dụng CNTT nâng cao",
      "C": "Xây dựng cơ sở dữ liệu về căn cước công dân",
      "D": "Phát triển hệ thống mạng từ 4G lên 5G"
    },
    "answer": "D"
  },
  {
    "id": 11,
    "text": "Câu 11: Chọn phát biểu đúng về công việc điều hành trong quản lý dự án?",
    "choices": {
      "A": "Thường xuyên, liên tục, lặp lại",
      "B": "Tạm thời, liên tục, lặp lại",
      "C": "Thường xuyên, liên tục, không lặp lại",
      "D": "Duy nhất, liên tục, lặp lại"
    },
    "answer": "A"
  },
  {
    "id": 12,
    "text": "Câu 12: Chọn phát biểu đúng về công việc dự án trong quản lý dự án?",
    "choices": {
      "A": "Thường xuyên, liên tục",
      "B": "Tạm thời, duy nhất",
      "C": "Duy nhất, không liên tục",
      "D": "Duy nhất, liên tục"
    },
    "answer": "B"
  },
  {
    "id": 13,
    "text": "Câu 13: Chọn phát biểu đúng về tính tạm thời trong dự án?",
    "choices": {
      "A": "Có điểm khởi đầu và điểm kết thúc",
      "B": "Có điểm khởi đầu và không có điểm kết thúc",
      "C": "Không có điểm khởi đầu và có điểm kết thúc",
      "D": "Không có điểm khởi đầu và có điểm kết thúc"
    },
    "answer": "A"
  },
  {
    "id": 14,
    "text": "Câu 14: Chọn phát biểu đúng về duy nhất trong dự án?",
    "choices": {
      "A": "Sản phẩm hay dịch vụ khác với sản phẩm hay dịch vụ đã làm trước đó",
      "B": "Sản phẩm hay dịch vụ giống với sản phẩm hay dịch vụ đã làm trước đó",
      "C": "Sản phẩm hay dịch vụ khác một phần so với sản phẩm hay dịch vụ đã làm trước đó",
      "D": "Sản phẩm hay dịch vụ giống một phần so với sản phẩm hay dịch vụ đã làm trước đó"
    },
    "answer": "A"
  },
  {
    "id": 15,
    "text": "Câu 15: Dự án CNTT có mấy đặc điểm chính?",
    "choices": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "D"
  },
  {
    "id": 16,
    "text": "Câu 16: Bộ ba ràng buộc trong quản lý dự án là gì?",
    "choices": {
      "A": "Theo thống kê, nguyên nhân, kết quả",
      "B": "Tổ chức, phân tích, lập lịch",
      "C": "Phạm vi, thời gian, chi phí",
      "D": "Khởi tạo, lập kế hoạch, chi phí"
    },
    "answer": "C"
  },
  {
    "id": 17,
    "text": "Câu 17: Tài nguyên Phi con người là?",
    "choices": {
      "A": "Máy tính, phần mềm, hệ điều hành",
      "B": "Tài liệu, huấn luyện",
      "C": "Các dịch vụ",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 18,
    "text": "Câu 18: Loại dự án nào thuộc loại dự án đào tạo nguồn nhân lực?",
    "choices": {
      "A": "Xây dựng cơ sở dữ liệu về căn cước công dân",
      "B": "Phát triển hệ thống mạng từ 4G lên 5G",
      "C": "Đào tạo cán bộ từ cấp huyện đạt chuẩn kỹ năng công nghệ thông tin",
      "D": "Xây dựng Khu Công nghệ Phần mềm tại Thành phố ABC"
    },
    "answer": "C"
  },
  {
    "id": 19,
    "text": "Câu 19: Khái niệm về “phạm vi dự án” là?",
    "choices": {
      "A": "Cho biết tiến trình chứa đựng nhiều rủi ro nhất trong dự án",
      "B": "Trình bày kế hoạch tiến độ, mô tả dưới dạng sơ đồ mối quan hệ liên tục giữa các công việc",
      "C": "Danh sách tất cả những gì dự án phải làm",
      "D": "Nhân tố tri thức về công việc đang xét"
    },
    "answer": "C"
  },
  {
    "id": 20,
    "text": "Câu 20: Quản lý dự án là gì?",
    "choices": {
      "A": "Một quá trình gồm nhiều công việc, nhiệm vụ có liên quan với nhau, được thực hiện nhằm đạt mục tiêu đã đề ra, trong điều kiện ràng buột về thời gian, phạm vi và chi phí",
      "B": "Một quá trình gồm nhiều công việc được thực hiện mà có nh lặp đi lặp lại, liên tụC",
      "C": "Một kế hoạch dài hạn, tổng hợp, được thực hiện trên một phạm vi không gian rộng lớn, thời gian dài không xác định",
      "D": "Nổ lực ngắn hạn trong vài tuần, hoặc vài tháng được thực hiện bởi một tổ chức nào đó"
    },
    "answer": "A"
  },
  {
    "id": 21,
    "text": "Câu 21: Dự án là  ____________ tạm thời được tiến hành để tạo ra một sản phẩm hoặc dịch vụ duy nhất.",
    "choices": {
      "A": "hoạt động",
      "B": "nỗ lực",
      "C": "công việc",
      "D": "qui trình"
    },
    "answer": "B"
  },
  {
    "id": 22,
    "text": "Câu 22: Qui trình quản lý dự án CNTT gồm mấy nhóm?",
    "choices": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "D"
  },
  {
    "id": 23,
    "text": "Câu 23: Các qui trình quản lý CNTT gồm?",
    "choices": {
      "A": "Khởi động; Lập kế hoạch; Thực thi; Theo dõi và kiểm soát; Kết thúc",
      "B": "Khởi động; Lập kế hoạch; Theo dõi và kiểm soát; Kết thúc",
      "C": "Khởi động; Thực thi; Theo dõi và kiểm soát; Kết thúc",
      "D": "Khởi động; Lập kế hoạch; Thực thi; Kết thúc"
    },
    "answer": "A"
  },
  {
    "id": 24,
    "text": "Câu 24: Đề quản lý dự án có hiệu quả đòi hỏi người quản lý dự án có các năng lực sau?",
    "choices": {
      "A": "Kiến thức",
      "B": "Hiệu suất",
      "C": "Cá nhân",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 25,
    "text": "Câu 25: Kỹ năng lựa chọn phương án và cách thức thực hiện các công việc là kỹ năng nào của người quản lý dự án?",
    "choices": {
      "A": "Kỹ năng lãnh đạo",
      "B": "Kỹ năng tiếp thị và quan hệ khách hàng",
      "C": "Kỹ năng lập kế hoạch và kiểm soát dự án",
      "D": "Kỹ năng ra quyết định"
    },
    "answer": "D"
  },
  {
    "id": 26,
    "text": "Câu 26: Câu nào sau đây SAI khi nói về mục đích của quản lý dự án?",
    "choices": {
      "A": "Khách hàng hài lòng",
      "B": "Hoàn thành dự án trong thời gian quy định",
      "C": "Giảm chi phí phát triển dự án",
      "D": "Đáp ứng đầy đủ mục tiêu đề ra"
    },
    "answer": "C"
  },
  {
    "id": 27,
    "text": "Câu 27: Phát biểu nào sau đây SAI?",
    "choices": {
      "A": "Dự án có tính duy nhất",
      "B": "Dự án có một khách hàng và chủ đầu tư chính",
      "C": "Dự án liên quan tới sự không chắc chắn",
      "D": "Dự án bị ràng buộc bởi thời gian, chi phí, nhân sự"
    },
    "answer": "B"
  },
  {
    "id": 28,
    "text": "Câu 28: Tài liệu nào KHÔNG phải là kết quả của giai đoạn xác định yêu cầu?",
    "choices": {
      "A": "Đề cương dự án",
      "B": "Kế hoạch quản lý dự án ban đầu",
      "C": "Danh sách rủi ro",
      "D": "Kế hoạch triển khai"
    },
    "answer": "D"
  },
  {
    "id": 29,
    "text": "Câu 29: Tài liệu đặc tả chức năng được viết trong giai đoạn nào?",
    "choices": {
      "A": "Xác định yêu cầu",
      "B": "Phân tích",
      "C": "Thiết kế",
      "D": "Thực hiện"
    },
    "answer": "B"
  },
  {
    "id": 30,
    "text": "Câu 30: Kỹ năng chịu trách nhiệm về kế hoạch tổng thể trước nhà tài trợ và khách hàng là kỹ năng nào của người quản lý dự án?",
    "choices": {
      "A": "Kỹ năng lãnh đạo",
      "B": "Kỹ năng tiếp thị và quan hệ khách hang",
      "C": "Kỹ năng lập kế hoạch và kiểm soát dự án",
      "D": "Kỹ năng ra quyết định"
    },
    "answer": "C"
  },
  {
    "id": 31,
    "text": "Câu 1: Phạm vi cơ cấu tổ chức bao gồm?",
    "choices": {
      "A": "Tổ chức theo chức năng",
      "B": "Tổ chức theo dự án",
      "C": "Tổ chức theo ma trận",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 32,
    "text": "Câu 2: Tổ chức nào là phổ biến nhất trong phạm vi cơ cấu tổ chức?",
    "choices": {
      "A": "Tổ chức theo chức năng",
      "B": "Tổ chức theo dự án",
      "C": "Tổ chức theo ma trận",
      "D": "Tổ chức theo văn hóa"
    },
    "answer": "A"
  },
  {
    "id": 33,
    "text": "Câu 3: Chọn phát biểu đúng về tổ chức theo ma trận trong phạm vi tổ chức?",
    "choices": {
      "A": "Là pha trộn giữa tổ chức theo chức năng và tổ chức theo dự án",
      "B": "Là pha trộn giữa tổ chức theo dự án và tổ chức theo ma trận",
      "C": "Là pha trộn giữa tổ chức theo chức năng và tổ chức theo ma trận",
      "D": "Là pha trộn giữa tổ chức theo chức năng  và tổ chức theo văn hóa"
    },
    "answer": "A"
  },
  {
    "id": 34,
    "text": "Câu 4: Tổ chức theo ma trận được phân thành bao nhiêu loại?",
    "choices": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "C"
  },
  {
    "id": 35,
    "text": "Câu 5: Tổ chức theo ma trận được phân thành những loại?",
    "choices": {
      "A": "Yếu, cân bằng và mạnh",
      "B": "Yếu, trung bình và mạnh",
      "C": "Trung bình, cân bằng và mạnh",
      "D": "Cân bằng và mạnh"
    },
    "answer": "A"
  },
  {
    "id": 36,
    "text": "Câu 6: Điều nào sau đây không phải là một phần của trong ba ràng buộc của quản lý dự án?",
    "choices": {
      "A": "Đáp ứng các mục tiêu phạm vi",
      "B": "Đáp ứng các mục tiêu thời gian",
      "C": "Đáp ứng các mục tiêu truyền thông",
      "D": "Đáp ứng các mục tiêu chi phí"
    },
    "answer": "C"
  },
  {
    "id": 37,
    "text": "Câu 7: Các lĩnh vực kiến thức cơ bản trong quản lý dự án là",
    "choices": {
      "A": "nguồn nhân lực, truyền thông, rủi ro, mua sắm",
      "B": "phạm vi, thời gian, chi phí, chất lượng",
      "C": "chi phí, thời gian, chất lượng, tích hợp",
      "D": "tích hợp, nguồn nhân lực, truyền thông, rủi ro"
    },
    "answer": "B"
  },
  {
    "id": 38,
    "text": "Câu 8: Điều nào sau đây thuộc lĩnh vực kiến thức quản lý thời gian?",
    "choices": {
      "A": "Xác định sản phẩm giao nộp",
      "B": "Triển khai lịch trình thực hiện theo tiến độ",
      "C": "Xây dựng kế hoạch huy động tài nguyên thực hiện dự án",
      "D": "Xác định cách tổ chức thực hiện một giai đoạn nào đó của dự án"
    },
    "answer": "B"
  },
  {
    "id": 39,
    "text": "Câu 9: Điều nào sau đây không thuộc lĩnh vực kiến thức quản lý chất lượng?",
    "choices": {
      "A": "Xác định các chuẩn mực về chất lượng của mỗi sản phẩm giao nộp",
      "B": "Bảo đảm chất lượng của mỗi sản phẩm giao nộp",
      "C": "Quản lý về sự thay đổi chất lượng",
      "D": "Xác định cách tổ chức thực hiện một giai đoạn nào đó của dự án"
    },
    "answer": "D"
  },
  {
    "id": 40,
    "text": "Câu 10: Điều nào sau đây không phải là một phần của quản lý tích hợp?",
    "choices": {
      "A": "Đảm bảo các thành phần khác nhau trong dự án được phối hợp hài hòa, nhất quán",
      "B": "Xây dựng và hoàn thiện kế hoạch dự án",
      "C": "Triển khai kế hoạch dự án",
      "D": "Phát triển nghiệp vụ dự án"
    },
    "answer": "D"
  },
  {
    "id": 41,
    "text": "Câu 11: Người  tổ chức hoặc phê duyệt  và quản lý sản phẩm, dịch vụ hay kết quả của dự án là ai?",
    "choices": {
      "A": "Nhà tài trợ",
      "B": "Khách hàng",
      "C": "Người bán hàng",
      "D": "Các đối tác kinh doanh"
    },
    "answer": "B"
  },
  {
    "id": 42,
    "text": "Câu 12: Người hoặc nhóm người cung cấp các nguồn tài nguyên, hỗ trợ cho dự án và chịu trách nhiệm tạo điều kiện thành công của dự án là ai?",
    "choices": {
      "A": "Nhà tài trợ",
      "B": "Khách hàng",
      "C": "Người bán hàng",
      "D": "Các đối tác kinh doanh"
    },
    "answer": "A"
  },
  {
    "id": 43,
    "text": "Câu 13: Người hoặc tổ chức phê duyệt sản phẩm dự án, phân công làm đại diện là ai?",
    "choices": {
      "A": "Nhân viên quản lý dự án",
      "B": "Đại diện khách hàng hoặc người sử dụng",
      "C": "Chuyên gia hỗ trợ",
      "D": "Người bán hàng"
    },
    "answer": "B"
  },
  {
    "id": 44,
    "text": "Câu 14: Nhà cung cấp tiếp tế, các công ty thương thảo hợp đồng cung cấp các dịch vụ cho dự án là?",
    "choices": {
      "A": "Nhân viên quản lý dự án",
      "B": "Người bán hàng",
      "C": "Thực hiện công việc và kết thúc dự án",
      "D": "Chuyên gia hỗ trợ"
    },
    "answer": "B"
  },
  {
    "id": 45,
    "text": "Câu 15: Người thực hiện công việc để làm ra kết quả dự án là ai?",
    "choices": {
      "A": "Nhân viên quản lý dự án",
      "B": "Nhân viên dự án",
      "C": "Chuyên gia hỗ trợ",
      "D": "Người bán hàng"
    },
    "answer": "B"
  },
  {
    "id": 46,
    "text": "Câu 16: Người  lập kế hoạch, dự toán ngân sách, truyền thong và hỗ trợ công việc hành chính của dự án là ai?",
    "choices": {
      "A": "Nhân viên quản lý dự án",
      "B": "Nhân viên dự án",
      "C": "Chuyên gia hỗ trợ",
      "D": "Người bán hàng"
    },
    "answer": "A"
  },
  {
    "id": 47,
    "text": "Câu 17: Chọn phát biểu đúng về vòng đời dự án?",
    "choices": {
      "A": "Là chuỗi các giai đoạn từ khởi động cho đến kết thúc",
      "B": "Là quá trình các giai đoạn từ khởi động cho đến kết thúc",
      "C": "Là qui trình các giai đoạn từ khởi động cho đến kết thúc",
      "D": "Là chuỗi các giai đoạn từ khởi động, trung gian cho đến kết thúc"
    },
    "answer": "A"
  },
  {
    "id": 48,
    "text": "Câu 18: Các đặc tính của vòng đời dự án bao gồm?",
    "choices": {
      "A": "Bắt đầu dự án",
      "B": "Tổ chức và chuẩn bị",
      "C": "Thực hiện công việc và kết thúc dự án",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 49,
    "text": "Câu 19: Các chuyên gia hỗ trợ thực hiện các hoạt động cần thiết để phát triển hoặc thực hiện các kế hoạch quản lý dự án là ai?",
    "choices": {
      "A": "Nhân viên quản lý dự án",
      "B": "Nhân viên dự án",
      "C": "Chuyên gia hỗ trợ",
      "D": "Người bán hàng"
    },
    "answer": "C"
  },
  {
    "id": 50,
    "text": "Câu 20: Các công ty bên ngoài nhưng có mối quan hệ đặc biệt với doanh nghiệp, cung cấp những chuyên môn đặc biệt như cài đặt, huấn luyện là ai?",
    "choices": {
      "A": "Nhà tài trợ",
      "B": "Khách hàng",
      "C": "Người bán hàng",
      "D": "Các đối tác kinh doanh"
    },
    "answer": "D"
  },
  {
    "id": 51,
    "text": "Câu 1: Giai đoạn nào sau đây không phải là một trong các giai đoạn của dự án CNTT?",
    "choices": {
      "A": "Phân tích",
      "B": "Xác định",
      "C": "Phát triển",
      "D": "Thực hiện"
    },
    "answer": "B"
  },
  {
    "id": 52,
    "text": "Câu 2: Quy trình ______ thường chiếm nhiều thời gian và tài nguyên nhất để thực thi dự án vì",
    "choices": {
      "A": "Khởi động dự án (Initiating",
      "B": "Lập kế hoạch dự án (Planning",
      "C": "Thực thi dự án (Executing",
      "D": "Kiểm soát và điều khiển (Monitoring and controlling"
    },
    "answer": "C"
  },
  {
    "id": 53,
    "text": "Câu 3: Kết quả nào sau đây thường được hoàn thành trong quy trình khởi động dự án?",
    "choices": {
      "A": "Đăng ký các bên liên quan",
      "B": "Hoàn tất các nghiệp vụ",
      "C": "Điều lệ dự án",
      "D": "Cuộc họp khởi đơ]ộng"
    },
    "answer": "C"
  },
  {
    "id": 54,
    "text": "Câu 4: Biểu đồ phân rã công việc (WBS), phát biểu về phạm vi dự án và danh sách các rủi ro",
    "choices": {
      "A": "Khởi động dự án (Initiating",
      "B": "Lập kế hoạch dự án (Planning",
      "C": "Thực thi dự án (Executing",
      "D": "Kiểm soát và điều khiển (Monitoring and controlling"
    },
    "answer": "B"
  },
  {
    "id": 55,
    "text": "Câu 5: ______ bao gồm việc đo tiến độ đạt được các mục tiêu của dự án, theo dõi độ lệch so",
    "choices": {
      "A": "Khởi động dự án (Initiating",
      "B": "Lập kế hoạch dự án (Planning",
      "C": "Thực thi dự án (Executing",
      "D": "Kiểm soát và điều khiển (Monitoring and controlling"
    },
    "answer": "D"
  },
  {
    "id": 56,
    "text": "Câu 6: Cái nào được chi tiết hoá trong tài liệu lập kế hoạch dự án đối với giám đốc dự án?",
    "choices": {
      "A": "Hiệu suất sẽ được đánh giá như thế nào",
      "B": "Các chứng nhận kỹ thuật được tổ chức",
      "C": "Lịch trình nghỉ",
      "D": "Tên của đội ngũ thành viên dự án"
    },
    "answer": "A"
  },
  {
    "id": 57,
    "text": "Câu 7: Giám đốc dự án đã khám phá vấn đề với môđun thống kê của dự án. Các số đo đã được ghi rõ cho các đơn vị của của Mỹ nhưng các nhà lập trình nước ngoài sử dụng các đơn vị quốc tế. Vấn đề này có thể tránh được ở chỗ nào trong dự án?",
    "choices": {
      "A": "Lập kế hoạch dự án",
      "B": "Kiểm thử dự án",
      "C": "Kiểm soát dự án",
      "D": "Quay vòng dự án"
    },
    "answer": "A"
  },
  {
    "id": 58,
    "text": "Câu 8: Chọn mệnh đề sai?",
    "choices": {
      "A": "Qui trình kiểm soát và điều khiển xảy ra trong tất cả các giai đoạn của chu trình dự án",
      "B": "Qui trình thực thi tác động đến tất cả các nhóm quy trình khác",
      "C": "Một trong các kết quả của quá trình khởi động là hoàn tất các nghiệp vụ",
      "D": "Quy trình lập kế hoạch không bao gồm việc hoàn tất tuyên bố dự án"
    },
    "answer": "C"
  },
  {
    "id": 59,
    "text": "Câu 9: Tiến trình quản lý dự án được nhóm thành bao nhiêu loại?",
    "choices": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "D"
  },
  {
    "id": 60,
    "text": "Câu 10: Để xác định một dự án mới hoặc một giai đoạn mới của dự án, thuộc nhóm tiến trình quản lý dự án nào sau đây?",
    "choices": {
      "A": "Khởi động",
      "B": "Hoạch định",
      "C": "Thực thi",
      "D": "Theo dõi và giám sát"
    },
    "answer": "A"
  },
  {
    "id": 61,
    "text": "Câu 11: Như một bộ phận của định nghĩa phạm vi tổng thể và lập kế hoạch dự án trong giai đoạn khởi tạo của dự án, quy định dự án và bảng kê công việc yêu cầu giám đốc dự án phải:",
    "choices": {
      "A": "Nghiên cứu các quy định cụ thể của ngành về ảnh hưởng trong dự án",
      "B": "Đạt được sự nhất trí của đội ngũ thành viên về nhiệm vụ và thời đoạn",
      "C": "Xây dựng cấu trúc chi tiết công việc một cách chi tiết",
      "D": "Tính đến các dự phòng cho những điều chưa biết"
    },
    "answer": "D"
  },
  {
    "id": 62,
    "text": "Câu 12: Phần nào của tài liệu lập kế hoạch dự án được dùng để kiểm soát bùng phát phạm vi?",
    "choices": {
      "A": "Chất lượng của các phần có thể chuyển giao",
      "B": "Số lượng đội ngũ thành viên",
      "C": "Những hạn chế về kinh phí",
      "D": "Quy trình quản lý chưa được giải quyết"
    },
    "answer": "D"
  },
  {
    "id": 63,
    "text": "Câu 13: Để kết thúc dự án hoặc giai đoạn một cách chính thức của dự án, thuộc nhóm tiến trình quản lý dự án nào sau đây?",
    "choices": {
      "A": "Khởi động",
      "B": "Hoạch định",
      "C": "Thực thi",
      "D": "Kết thúc"
    },
    "answer": "D"
  },
  {
    "id": 64,
    "text": "Câu 14: Để hoàn thành công việc đã được xác định trong kế hoạch dự án nhằm đáp ứng theo mô tả dự án, thuộc nhóm tiến trình quản lý dự án nào sau đây?",
    "choices": {
      "A": "Khởi động",
      "B": "Hoạch định",
      "C": "Thực thi",
      "D": "Kết thúc"
    },
    "answer": "C"
  },
  {
    "id": 65,
    "text": "Câu 15: Ai là người lập kế hoạch dự án?",
    "choices": {
      "A": "Trưởng nhóm",
      "B": "Nhân viên",
      "C": "Trưởng ban quản lý dự án",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 66,
    "text": "Câu 1: Quy trình nào sau đây không phải là một phần của quản lý tích hợp dự án? (Chương 4 mục 4.1)",
    "choices": {
      "A": "Phát triển quy trình nghiệp vụ",
      "B": "Xây dựng điều lệ dự án",
      "C": "Xây dựng kế hoạch quản lý dự án",
      "D": "Đóng dự án hoặc giai đoạn"
    },
    "answer": "A"
  },
  {
    "id": 67,
    "text": "Câu 2: Qui trình tích hợp dự án gồm mấy bước? (Chương 4 mục 4.1)",
    "choices": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6"
    },
    "answer": "D"
  },
  {
    "id": 68,
    "text": "Câu 3: Quá trình theo dõi, rà soát và báo cáo tiến độ để đáp ứng các mục tiêu hiệu suất được xác định trong kế hoạch quản lý dự án là bước nào trong quản lý tích hợp? (Chương 4 mục 4.1.4)",
    "choices": {
      "A": "Theo dõi và kiểm soát công việc dự án",
      "B": "Thực hiện kiểm soát thay đổi tích hợp",
      "C": "Xây dựng kế hoạch quản lý dự án",
      "D": "Xây dựng điều lệ dự án"
    },
    "answer": "A"
  },
  {
    "id": 69,
    "text": "Câu 4: Tiến trình xem xét tất cả yêu cầu thay đổi, phê duyệt thay đổi và quản lý thay đổi, tài liệu dự án, kế hoạch quản lý dự án,… là bước nào trong quản lý tích hợp? (Chương 4 mục 4.1.5)",
    "choices": {
      "A": "Theo dõi và kiểm soát công việc dự án",
      "B": "Thực hiện kiểm soát thay đổi tích hợp",
      "C": "Xây dựng kế hoạch quản lý dự án",
      "D": "Xây dựng điều lệ dự án"
    },
    "answer": "B"
  },
  {
    "id": 70,
    "text": "Câu 5: Chọn phát biểu đúng về quản lý tích hợp dự án? (trong tài liệu DHCT)",
    "choices": {
      "A": "Người quản lý dự án không cần phải điều phối tất cả các lĩnh vực kiến thức trong suốt chu trình sống của dự án",
      "B": "Quản lý tích hợp dự án giống như tích hợp phần mềm",
      "C": "Quản lý tích hợp dự án không giống như tích hợp phần mềm",
      "D": "Tất cả đều đúng"
    },
    "answer": "C"
  },
  {
    "id": 71,
    "text": "Câu 6: Chọn phát biểu sai về quản lý tích hợp dự án?  (trong tài liệu DHCT)",
    "choices": {
      "A": "Người quản lý dự án cần phải điều phối tất cả các lĩnh vực kiến thức trong suốt chu trình sống của dự án",
      "B": "Quản lý tích hợp dự án không giống như tích hợp phần mềm",
      "C": "Quản lý tích hợp dự án giống như tích hợp phần mềm",
      "D": "Tất cả đều đúng"
    },
    "answer": "C"
  },
  {
    "id": 72,
    "text": "Câu 7: Những tiến trình chính trong qui trình quản lý tích hợp bao gồm?",
    "choices": {
      "A": "Phát triển kế hoạch dự án",
      "B": "Thực thi kế hoạch dự án",
      "C": "Điều khiển hay thay đổi tích hợp",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 73,
    "text": "Câu 8: Dữ liệu đầu vào của quản lý tích hợp dự án bao gồm? (Chương 4 mục 4.2)",
    "choices": {
      "A": "Các yếu tố môi trường doanh nghiệp",
      "B": "Bảng mô tả công việc dự án",
      "C": "Dự báo về chi phí",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 74,
    "text": "Câu 9: Chọn phát biếu đúng về bước xây dựng điều lệ dự án trong quản lý tích hợp dự án? (trong tài liệu DHCT)",
    "choices": {
      "A": "Các yếu tố môi trường doanh nghiệp có thể ảnh hưởng đến xây dựng điều lệ",
      "B": "Các yếu tố môi trường doanh nghiệp không  ảnh hưởng đến xây dựng điều lệ",
      "C": "Các yếu tố môi trường doanh nghiệp có thể ảnh hưởng đến tiến độ xây dựng kế hoạch điều lệ dự án",
      "D": "Các yếu tố môi trường doanh nghiệp không thể ảnh hưởng đến tiến độ độ xây dựng kế hoạch điều lệ dự án"
    },
    "answer": "A"
  },
  {
    "id": 75,
    "text": "Câu 10: Chọn phát biếu đúng về bước xây dựng kế hoạch quản lý dự án trong quản lý tích hợp dự án? (trong tài liệu DHCT)",
    "choices": {
      "A": "Các yếu tố môi trường doanh nghiệp có thể ảnh hưởng đến xây dựng điều lệ kế hoạch quản lý dự án",
      "B": "Các yếu tố môi trường doanh nghiệp không  ảnh hưởng đến xây dựng điều lệ kế hoạch quản lý dự án",
      "C": "Các yếu tố môi trường doanh nghiệp có thể ảnh hưởng đến tiến trình xây dựng kế hoạch quản lý dự án",
      "D": "Các yếu tố môi trường doanh nghiệp có thể ảnh hưởng đến tiến trình xây dựng kế hoạch quản lý dự án"
    },
    "answer": "C"
  },
  {
    "id": 76,
    "text": "Câu 11: Chọn phát biểu đúng của qui trình điều khiển thay đổi tích hợp trong quản lý tích hợp dự án?",
    "choices": {
      "A": "Điều khiển thay đổi tích hợp là điều phối những thay đổi trong toàn bộ dự án",
      "B": "Điều khiển thay đổi tích hợp là điều phối thay đổi một phần của dự án",
      "C": "Điều khiển thay đổi tích hợp là điều phối những thay đổi trong một bộ phận của dự án",
      "D": "Tất cả đều đúng"
    },
    "answer": "A"
  },
  {
    "id": 77,
    "text": "Câu 12: Các kỹ năng quan trọng để thực thi kế hoạch dự án là?",
    "choices": {
      "A": "Kỹ năng quản lý tổng quát",
      "B": "Kỹ năng về sản phẩm",
      "C": "Kỹ năng về kiến thức",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 78,
    "text": "Câu 13: Kết xuất trung gian của quản lý dự án tích hợp gồm? (Chương 4 mục 4.3)",
    "choices": {
      "A": "Điều lệ dự án",
      "B": "Kế hoạch quản lý dự án",
      "C": "Báo cáo hiệu suất công việc",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 79,
    "text": "Câu 14: Kết quả đầu ra của tích hợp quản lý dự án gồm? (Chương 4 mục 4.4)",
    "choices": {
      "A": "Cập nhật tài liệu dự án, Thành phẩm, Dữ liệu hiệu suất công việc",
      "B": "Điều lệ dự án, Kế hoạch quản lý dự án, Báo cáo hiệu suất công việc",
      "C": "Cập nhật tài liệu dự án, Thành phẩm, Báo cáo hiệu suất công việc",
      "D": "Báo cáo hiệu suất công việc, Cập nhật tài liệu dự án, Kế hoạch quản lý dự án"
    },
    "answer": "A"
  },
  {
    "id": 80,
    "text": "Câu 15: Chọn phát biểu đúng của phát triển kế hoạch dự án trong quản lý tích hợp dự án?",
    "choices": {
      "A": "Phát triển kế hoạch dự án là lấy kết quả của các qui trình lập kế hoạch khác và đưa vào thành một tài liệu nhất quán và kết dính – kế hoạch dự án",
      "B": "Phát triển kế hoạch dự án là lấy kết quả của các qui trình lập kế hoạch khác và tách ra thành một tài liệu nhất quán và kết dính – kế hoạch dự án",
      "C": "Phát triển kế hoạch dự án là lấy kết quả của các qui trình lập kế hoạch con và tách thành một tài liệu nhất quán và kết dính – kế hoạch dự án",
      "D": "Tất cả đều đúng"
    },
    "answer": "A"
  },
  {
    "id": 81,
    "text": "Câu 1: .____________  là  tài  liệu  chính  thức  xác  nhận  sự  tồn  tại  của  dự án  và  đưa  ra  định lượng để thực hiện về các mục tiêu của dự án và quản lý dự án. (chương 5.3.5 và đọc thêm trong tài liệu DHCT)",
    "choices": {
      "A": "Tuyên bố dự án",
      "B": "Hợp đồng",
      "C": "Nghiệp vụ",
      "D": "Kế hoạch quản lý dự án"
    },
    "answer": "A"
  },
  {
    "id": 82,
    "text": "Câu 2: Nội dung nào sau đây thường không có trong tuyên bố dự án?",
    "choices": {
      "A": "Tên của người quản lý dự án",
      "B": "Thông tin ngân sách",
      "C": "Chữ ký của các bên liên quan",
      "D": "Biểu đồ Gantt"
    },
    "answer": "D"
  },
  {
    "id": 83,
    "text": "Câu 3: Tài liệu nền tảng trong quản lý phạm vi dự án là gì? (chương 5.1  Lập kế hoạch quản lý phạm vi)",
    "choices": {
      "A": "Lập kế hoạch quản lý phạm vi",
      "B": "Thu thập yêu cầu",
      "C": "Xác định phạm vi",
      "D": "Tạo WBS"
    },
    "answer": "A"
  },
  {
    "id": 84,
    "text": "Câu 4: _________ là những sản phẩm được tạo ra như là một phần của dự án, như phần cứng, phần mềm, tài liệu đào tạo, chuyển giao, bảo hành,…",
    "choices": {
      "A": "Các sản phẩm trung gian",
      "B": "Các mốc quan trọng",
      "C": "Phạm vi",
      "D": "Phát triển sản phẩm"
    },
    "answer": "A"
  },
  {
    "id": 85,
    "text": "Câu 5: ___________ là cây phân cấp các nhóm công việc cần thực hiện trong dự án, nó xác định phạm vi tổng thể của dự án.(chương 5.1 tạo WBS)",
    "choices": {
      "A": "Tuyên bố phạm vi",
      "B": "Cấu trúc phân rã công việc (WBS",
      "C": "Từ điển WBS",
      "D": "Gói công việc"
    },
    "answer": "B"
  },
  {
    "id": 86,
    "text": "Câu 6: Cách tiếp cận nào để phát triển một WBS liên quan đến việc viết ra hoặc vẽ ra các ý tưởng ở định dạng phi tuyến tính? (trong tài liệu DHCT thì có cả a b c, hỏi chat thì ra d)",
    "choices": {
      "A": "Từ trên xuống (top-down",
      "B": "Từ dưới lên (bottom-up",
      "C": "Tiếp cận tương tự (analogy",
      "D": "Mind – Mapping"
    },
    "answer": "D"
  },
  {
    "id": 87,
    "text": "Câu 7: Giả sử bạn có một dự án với các hạng mục chính được gọi là lập kế hoạch, phân tích, thiết kế và thử nghiệm. Các mục này sẽ nằm ở cấp độ nào của WBS? (tìm không ra, trên chat với deep ra B.1)",
    "choices": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3"
    },
    "answer": "B"
  },
  {
    "id": 88,
    "text": "Câu 8: Kế hoạch quản lý phạm vi được bao gồm trong tài liệu nào sau đây? (tài liệu DHCT mục 5.3.1)",
    "choices": {
      "A": "Kế hoạch dự án",
      "B": "Cơ cấu phân chia công việc (WBS",
      "C": "Phát biểu phạm vi (Scope Statement",
      "D": "Tuyên bố dự án (Project Charter"
    },
    "answer": "A"
  },
  {
    "id": 89,
    "text": "Câu 9: Điều sau đây không đúng về tuyên bố phạm vi dự án (Scope Statement)?(tài liệu DHCT mục 5.3.5)",
    "choices": {
      "A": "Nó là một đầu ra của xác định phạm vi",
      "B": "Nó mô tả chi tiết các sản phẩm của dự án và công việc cần thiết để tạo ra các sản phẩm đó",
      "C": "Nó cung cấp sự hiểu biết chung về phạm vi dự án giữa tất cả các bên liên quan",
      "D": "Nó mô tả các mục tiêu chính của dự án"
    },
    "answer": "D"
  },
  {
    "id": 90,
    "text": "Câu 10: Phát biểu nào sau đây là đúng về WBS?",
    "choices": {
      "A": "WBS là cơ sở để ước lượng chi phí",
      "B": "WBS là một danh sách các hoạt động không có cấu trúc",
      "C": "WBS cũng giống như cấu trúc phân tích tổ chức",
      "D": "WBS đề cập đến hóa đơn nguyên vật liệu"
    },
    "answer": "A"
  },
  {
    "id": 91,
    "text": "Câu 11: Các kết quả chuyển giao (Deliverables) trong quản lý phạm vi dự án là?",
    "choices": {
      "A": "Phần cứng, phần mềm",
      "B": "Tài liệu, bảo hành",
      "C": "Đào tạo và phương thức chuyển giao",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 92,
    "text": "Câu 12: Điều kiện hợp lý để bắt đầu yêu cầu thay đổi phạm vi dự án là gì? (tài liệu DHCT mục 5.1.6)",
    "choices": {
      "A": "Vấn đề chuyển giao nhà cung cấp",
      "B": "Không giữ đúng thời hạn lịch trình dự án",
      "C": "Vấn đề dự án chưa được giải quyết",
      "D": "Yêu cầu mới do các đối tượng liên quan dự án đưa ra"
    },
    "answer": "D"
  },
  {
    "id": 93,
    "text": "Câu 13: Ràng buộc nào nên được tính đến trong định nghĩa phạm vi dự án?",
    "choices": {
      "A": "Ngày kết thúc dự án được xác định rõ",
      "B": "Chủ dự án được xác định rõ",
      "C": "Các tiêu chí hoàn tất được xác định rõ và Thủ tục quản lý thay đổi nghiêm ngặt",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 94,
    "text": "Câu 14: Chọn phát biểu đúng trong nguyên lí cơ bản tạo WBS?",
    "choices": {
      "A": "Một đơn vị công việc chỉ xuất hiện một nơi trong WBS",
      "B": "Một đơn vị công việc có thể xuất hiện nhiều nơi trong WBS",
      "C": "Nhiều đơn vị công việc chỉ xuất hiện một nơi trong WBS",
      "D": "Nhiều đơn vị công việc chỉ xuất hiện nhiều nơi trong WBS"
    },
    "answer": "A"
  },
  {
    "id": 95,
    "text": "Câu 15: Các nguyên lí cơ bản tạo WBS nào sau đây là đúng?",
    "choices": {
      "A": "Nội dung công việc trong một mục WBS bằng tổng các công việc dưới nó",
      "B": "Một đơn vị công việc có thể xuất hiện nhiều nơi trong WBS",
      "C": "Một mục WBS là nhiệm vụ của nhiều người",
      "D": "WBS không phải nhất quán với cách thực hiện công việc"
    },
    "answer": "A"
  },
  {
    "id": 96,
    "text": "Câu 16: Dữ liệu đầu vào của quản lý phạm vi dự án bao gồm? Chương 5 mục 5.2",
    "choices": {
      "A": "Kế hoạch quản lý dự án",
      "B": "Tài sản tiến trình tổ chức",
      "C": "Bản đăng ký các bên liên quan",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 97,
    "text": "Câu 17: Thực hiện quản lý phạm vi dự án gồm bao nhiêu bước? Chương 5 mục 5.1",
    "choices": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6"
    },
    "answer": "D"
  },
  {
    "id": 98,
    "text": "Câu 18: Bước nào sau đây không thuộc trong các bước quản lý phạm vi dự án? Chương 5 mục 5.1",
    "choices": {
      "A": "Quản lý phạm vi",
      "B": "Thu thập yêu cầu",
      "C": "Xác định phạm vi",
      "D": "Kiểm soát phạm vi"
    },
    "answer": "A"
  },
  {
    "id": 99,
    "text": "Câu 19: Bước nào sau đây thuộc trong các bước quản lý phạm vi dự án? Chương 5 mục 5.1",
    "choices": {
      "A": "Quản lý phạm vi",
      "B": "Thu thập yêu cầu",
      "C": "Thực hiện bản đăng ký các bên liên quan",
      "D": "Tất cả đều đúng"
    },
    "answer": "B"
  },
  {
    "id": 100,
    "text": "Câu 20: Kết xuất trung gian của quản lý phạm vi dự án gồm bao nhiêu bước? Chương 5 mục 5.3",
    "choices": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6"
    },
    "answer": "D"
  },
  {
    "id": 101,
    "text": "Câu 21: Bước nào sau đây không thuộc các bước kết xuất trung gian của quản lý phạm vi dự án? Chương 5 mục 5.3",
    "choices": {
      "A": "Kế hoạch quản lý yêu cầu",
      "B": "Thu thập yêu cầu",
      "C": "Tài liệu yêu cầu",
      "D": "Tuyên bố phạm vi dự án"
    },
    "answer": "B"
  },
  {
    "id": 102,
    "text": "Câu 22: Xác định phạm vi là?",
    "choices": {
      "A": "Xác định chi tiết công việc bằng cách chia thành các công việc nhỏ hơn có thể quản lý được",
      "B": "Một danh sách tất cả những gì dự án phải làm",
      "C": "Kế hoạch chiến lược của công ty",
      "D": "Tất cả đều đúng"
    },
    "answer": "A"
  },
  {
    "id": 103,
    "text": "Câu 23: Lập kế hoạch phạm vi là?",
    "choices": {
      "A": "Phát triển các tài liệu nhằm cung cấp nền tảng cho các quyết định về dự án trong tương lai",
      "B": "Một danh sách tất cả những gì dự án phải làm",
      "C": "Kế hoạch chiến lược của công ty",
      "D": "Xác định chi tiết công việc bằng cách chia thành các công việc nhỏ hơn có thể quản lý được"
    },
    "answer": "A"
  },
  {
    "id": 104,
    "text": "Câu 24: Xác định đúng phạm vi dự án sẽ đem lại lợi ích nào sau đây?",
    "choices": {
      "A": "Cải tiến sự chính xác về thời gian",
      "B": "Tiết kiệm chi phí",
      "C": "Quản lý tài nguyên",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 105,
    "text": "Câu 25: Phạm vi (Scope) là?",
    "choices": {
      "A": "Một danh sách tất cả những gì dự án phải làm",
      "B": "Kế hoạch chiến lược của công ty",
      "C": "Xác định chi tiết công việc bằng cách chia thành các công việc nhỏ hơn có thể quản lý được",
      "D": "Phát triển các tài liệu nhằm cung cấp nền tảng cho các quyết định về dự án trong tương lai"
    },
    "answer": "A"
  },
  {
    "id": 106,
    "text": "Câu 26: Bước nào sau đây thuộc các bước kết xuất trung gian của quản lý phạm vi dự án? Chương 5 mục 5.3",
    "choices": {
      "A": "Tuyên bố phạm vi dự án",
      "B": "Thu thập yêu cầu",
      "C": "Thực hiện bản đăng ký các bên liên quan",
      "D": "Xác định phạm vi"
    },
    "answer": "A"
  },
  {
    "id": 107,
    "text": "Câu 27: Dữ liệu đầu vào nào sau đây không thuộc dữ liệu đầu vào của quản lý phạm vi dự án? Chương 5 mục 5.2",
    "choices": {
      "A": "Tuyên bố phạm vi dự án",
      "B": "Điều lệ dự án",
      "C": "Bản đăng ký các bên liên quan",
      "D": "Kế hoạch quản lý các bên liên quan"
    },
    "answer": "A"
  },
  {
    "id": 108,
    "text": "Câu 28: Dữ liệu đầu vào nào sau đây thuộc dữ liệu đầu vào của quản lý phạm vi dự án? Chương 5 mục 5.2",
    "choices": {
      "A": "Kế hoạch quản lý yêu cầu ( kết xuất trung gian",
      "B": "Thu thập yêu cầu ( các bước",
      "C": "Tài liệu yêu cầu ( đầu ra",
      "D": "Kế hoạch quản lý các bên liên quan"
    },
    "answer": "D"
  },
  {
    "id": 109,
    "text": "Câu 29: Công cụ và kỹ thuật trong quản lý phạm vi dự án bao gồm? Chương 5 mục 5.5",
    "choices": {
      "A": "Công cụ và kỹ thuật lập kế hoạch quản lý phạm  vi",
      "B": "Công cụ và kỹ thuật thu thập yêu cầu",
      "C": "Công cụ và kỹ thuật xác định phạm  vi, công cụ WBS",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 110,
    "text": "Câu 30: Trong lập kế hoạch phạm vi giai đoạn tuyên bố về phạm vi (scope statement) gồm?",
    "choices": {
      "A": "Kiểm chứng về dự án; Mô tả ngắn về sản phẩm; Tổng kết về tất cả các sản phẩm trung gian của dự án; Tuyên bố về những yếu tố xác định thành công của dự án",
      "B": "Thu thập yêu cầu; Mô tả ngắn về sản phẩm; Tổng kết về tất cả các sản phẩm trung gian của dự án; Tuyên bố về những yếu tố xác định thành công của dự án",
      "C": "Thu thập yêu cầu; Kiểm chứng về dự án; Mô tả ngắn về sản phẩm; Tổng kết về tất cả các sản phẩm trung gian của dự án",
      "D": "Thu thập yêu cầu; Kiểm chứng về dự án; Mô tả ngắn về sản phẩm; Tuyên bố về những yếu tố xác định thành công của dự án"
    },
    "answer": "A"
  },
  {
    "id": 111,
    "text": "Câu 1: Quy trình đầu tiên trong việc quản lý thời gian dự án là gì?",
    "choices": {
      "A": "Xác định các mốc quan trọng",
      "B": "Xác định các hoạt động",
      "C": "Ước lượng thời gian cho mỗi hoạt động",
      "D": "Sắp xếp thứ tự các hoạt động"
    },
    "answer": "B"
  },
  {
    "id": 112,
    "text": "Câu 2: Là người quản lý dự án của một dự án phát triển phần mềm, bạn đang giúp phát triển lịch trình của dự án. Bạn quyết định rằng việc viết mã cho hệ thống không nên bắt đầu cho đến khi người dùng đăng nhập vào công việc phân tích. Loại phụ thuộc này là gì?",
    "choices": {
      "A": "Kỹ thuật",
      "B": "Bắt buộc",
      "C": "Tùy chọn",
      "D": "Bên ngoài"
    },
    "answer": "B"
  },
  {
    "id": 113,
    "text": "Câu 3: Qui trình quản lý thời gian gồm?",
    "choices": {
      "A": "Lập kế hoạch, Kiểm soát giám sát, Thực hiện",
      "B": "Lập kế  hoạch cho nguồn tài nguyên, Ước lượng, Dự tóan, Kiểm soát, Điều chỉnh",
      "C": "Lập kế hoạch, Kiểm soát giám sát, Thực hiện",
      "D": "Xác định các hoạt động, Sắp thứ tự, Ước lượng, Phát triển lịch biểu, Điều khiển lịch biểu"
    },
    "answer": "D"
  },
  {
    "id": 114,
    "text": "Câu 4: Bạn không thể bắt đầu chỉnh sửa báo cáo kỹ thuật cho đến khi người khác hoàn thành bản thảo đầu tiên. Điều này đại diện cho loại phụ thuộc tác vụ nào?",
    "choices": {
      "A": "finish-to-start",
      "B": "start-to-start",
      "C": "finish-to-finish",
      "D": "start-to-finish"
    },
    "answer": "A"
  },
  {
    "id": 115,
    "text": "Câu 5: Mệnh đề nào sau đây là sai?",
    "choices": {
      "A": "Cấu trúc phân tích tài nguyên là cấu trúc phân cấp xác định các tài nguyên của dự án theo danh mục và loại",
      "B": "Thời gian tiêu tốn (duration) và nỗ lực (effort) là những thuật ngữ đồng nghĩa",
      "C": "Ước tính ba trường hợp (kỹ thuật PERT) là ước lượng bao gồm ước lượng lạc quan nhất, ước lượng trung bình và ước lượng bi quan nhất",
      "D": "Sơ đồ Gantt là một công cụ phổ biến để hiển thị thông tin về lịch biểu của dự án"
    },
    "answer": "B"
  },
  {
    "id": 116,
    "text": "Câu 6: Biểu tượng nào trên biểu đồ Gantt đại diện cho một cột mốc bị trượt?",
    "choices": {
      "A": "Một mũi tên đen",
      "B": "Một mũi tên trắng",
      "C": "Một viên kim cương đen",
      "D": "Một viên kim cương trắng"
    },
    "answer": "C"
  },
  {
    "id": 117,
    "text": "Câu 7: Loại biểu đồ nào thể hiện thông tin về lịch trình dự án đã lên kế hoạch và thực tế?",
    "choices": {
      "A": "Network diagram",
      "B": "Gantt chart",
      "C": "Tracking Gantt chart",
      "D": "Milestone chart"
    },
    "answer": "C"
  },
  {
    "id": 118,
    "text": "Câu 8: ___________ là một kỹ thuật phân tích dùng để ước lượng thời gian tổng thể lượng của dự án.",
    "choices": {
      "A": "PERT",
      "B": "Biểu đồ Gantt",
      "C": "Phương pháp đường găng (Critical path method",
      "D": "Va chạm (Crashing"
    },
    "answer": "A"
  },
  {
    "id": 119,
    "text": "Câu 9: Phương pháp sơ đồ ưu tiên (PDM) cung cấp cho các nhà quản lý dự án kiến thức về?",
    "choices": {
      "A": "Tất cả các cấp độ của cấu trúc phân chia công việc",
      "B": "Các hoạt động có thể liên quan đến chức năng tích hợp và phân bổ nguồn lực của dự án",
      "C": "Mối quan hệ giữa các công việc",
      "D": "Ngày hoàn thành dự án"
    },
    "answer": "C"
  },
  {
    "id": 120,
    "text": "Câu 10: Một phụ thuộc yêu cầu thiết kế phải được hoàn thành trước khi có thể bắt đầu sản xuất là một ví dụ về ?",
    "choices": {
      "A": "Phụ thuộc tùy chọn",
      "B": "Phụ thuộc bên ngoài",
      "C": "Phụ thuộc bắt buộc",
      "D": "Phụ thuộc bên trong"
    },
    "answer": "C"
  },
  {
    "id": 121,
    "text": "Câu 11: GANTT là:",
    "choices": {
      "A": "Tên của một nhà bác học",
      "B": "Một phương pháp sơ đồ",
      "C": "Một công cụ quản lý thời gian",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 122,
    "text": "Câu 12: Phương pháp sơ đồ GANTT được tiến hành qua:",
    "choices": {
      "A": "4 bước",
      "B": "5 bước",
      "C": "6 bước",
      "D": "7 bước"
    },
    "answer": "C"
  },
  {
    "id": 123,
    "text": "Câu 13: Phương pháp sơ đồ GANTT được tiến hành qua một số bước, trong đó bước: “Sắp xếp trình tự thực hiện các công việc một cách hợp lý”, là: (mấy bước các bạn coi lại)",
    "choices": {
      "A": "Bước 1",
      "B": "Bước 2",
      "C": "Bước 3",
      "D": "Bước 4"
    },
    "answer": "B"
  },
  {
    "id": 124,
    "text": "Câu 14: Phương pháp sơ đồ GANTT được tiến hành qua một số bước, trong đó bước: “Xác định thời gian thực hiện dự tính của từng công việc một cách thích hợp”, là:(mấy bước các bạn coi lại)",
    "choices": {
      "A": "Bước 1",
      "B": "Bước 2",
      "C": "Bước 3",
      "D": "Bước 4"
    },
    "answer": "C"
  },
  {
    "id": 125,
    "text": "Câu 15: Phương pháp sơ đồ GANTT được tiến hành qua một số bước, trong đó bước: “Liệt kê các công việc của dự án”, là:(mấy bước các bạn coi lại)",
    "choices": {
      "A": "Bước 1",
      "B": "Bước 2",
      "C": "Bước 3",
      "D": "Bước 4"
    },
    "answer": "A"
  },
  {
    "id": 126,
    "text": "Câu 16: Dữ liệu đầu vào của quản lý thời gian dự án bao gồm?",
    "choices": {
      "A": "Ước tính chi phí hoạt động",
      "B": "Lịch tài nguyên",
      "C": "Nhật ký rủi ro",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 127,
    "text": "Câu 17: Thực hiện quản lý thời gian dự án gồm bao nhiêu bước?",
    "choices": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7"
    },
    "answer": "D"
  },
  {
    "id": 128,
    "text": "Câu 18: Bước nào sau đây không thuộc trong các bước quản lý thời gian dự án?",
    "choices": {
      "A": "Quản lý phạm vi",
      "B": "Phát triển lịch biểu",
      "C": "Lập trình tự cho các hoạt động",
      "D": "Kiểm soát lịch biểu"
    },
    "answer": "A"
  },
  {
    "id": 129,
    "text": "Câu 19: Bước nào sau đây thuộc trong các bước quản lý phạm vi dự án?",
    "choices": {
      "A": "Quản lý phạm vi",
      "B": "Kiểm soát lịch biểu",
      "C": "Thực hiện bản đăng ký các bên liên quan",
      "D": "Tất cả đều đúng"
    },
    "answer": "A"
  },
  {
    "id": 130,
    "text": "Câu 20: Kết xuất trung gian của quản lý thời gian dự án gồm bao nhiêu bước? (trong file QUANLYTHOIGIAN slide 20,21 để 4)",
    "choices": {
      "A": "6",
      "B": "7",
      "C": "8",
      "D": "9"
    },
    "answer": "D"
  },
  {
    "id": 131,
    "text": "Câu 21: Bước nào sau đây không thuộc các bước kết xuất trung gian của quản lý thời gian dự án?",
    "choices": {
      "A": "Kế hoạch quản lý lịch biểu",
      "B": "Thu thập yêu cầu",
      "C": "Danh sách mốc sự kiện quan trọng",
      "D": "Sơ đồ mạng lịch biểu dự án"
    },
    "answer": "B"
  },
  {
    "id": 132,
    "text": "Câu 22: Các quy trình quản lý thời gian dự án bao gồm?",
    "choices": {
      "A": "Xác định hoạt động → Kiểm soát lịch biểu → Sắp xếp thứ tự hoạt động → Phát triển",
      "B": "Xác định hoạt động → Sắp xếp thứ tự hoạt động → Phát triển lịch biểu → Ước tính",
      "C": "Xác định hoạt động → Sắp xếp thứ tự hoạt động → Ước tính thời gian hoạt động  →",
      "D": "Xác định hoạt động → Sắp xếp thứ tự hoạt động → Phát triển lịch biểu → Kiểm soát"
    },
    "answer": "C"
  },
  {
    "id": 133,
    "text": "Câu 23: Điều nào sau đây được minh họa tốt hơn bằng biểu đồ Gantt so với biểu đồ Mạng?",
    "choices": {
      "A": "Mối quan hệ logic giữa các công việc",
      "B": "Đường găng",
      "C": "Trình tự các hoạt động",
      "D": "Tiến độ hoặc trạng thái công việc"
    },
    "answer": "D"
  },
  {
    "id": 134,
    "text": "Câu 24: Critical Path, là?",
    "choices": {
      "A": "Tiến trình tới hạn",
      "B": "Đường găng",
      "C": "Tiến trình có tổng thời gian dài nhất",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 135,
    "text": "Câu 25: Sự kiện trong sơ đồ PERT mà không có công việc đầu vào được gọi là?",
    "choices": {
      "A": "Sự kiện xuất phát",
      "B": "Sự kiến cuối của công việc",
      "C": "Sự kiện đầu của công việc",
      "D": "Sự kiện hoàn thành của công việc"
    },
    "answer": "A"
  },
  {
    "id": 136,
    "text": "Câu 26: Kết quả đầu ra nào sau đây thuộc kết quả đầu ra của quản lý thời gian dự án?",
    "choices": {
      "A": "Dự báo lịch biểu",
      "B": "Thu thập yêu cầu",
      "C": "Thực hiện bản đăng ký các bên liên quan",
      "D": "Xác định phạm vi"
    },
    "answer": "A"
  },
  {
    "id": 137,
    "text": "Câu 27: Kết quả đầu ra nào sau đây không thuộc kết quả đầu ra của quản lý thời gian dự án?",
    "choices": {
      "A": "Dự báo lịch biểu",
      "B": "Bản đăng ký các bên liên quan",
      "C": "Đường lịch biểu cơ sở",
      "D": "Cập nhật tài sản tiến trình tổ chức"
    },
    "answer": "B"
  },
  {
    "id": 138,
    "text": "Câu 28: Dữ liệu đầu vào nào sau đây không thuộc dữ liệu đầu vào của quản lý phạm vi dự án?",
    "choices": {
      "A": "Ước tính chi phí hoạt động",
      "B": "Lịch tài nguyên",
      "C": "Nhật ký rủi ro",
      "D": "Kế hoạch quản lý các bên liên quan"
    },
    "answer": "A"
  },
  {
    "id": 139,
    "text": "Câu 29: Công cụ và kỹ thuật trong quản lý thời gian dự án bao gồm?",
    "choices": {
      "A": "Đánh giá của chuyên gia",
      "B": "Kỹ thuật ra quyết định nhóm",
      "C": "Kỹ thuật xây dựng mô hình lịch biểu và các kỹ thuật phân tích",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 140,
    "text": "Câu 30: Số lượng các bước vẽ một sơ đồ PERT so với sơ đồ GANTT, thì:",
    "choices": {
      "A": "Giống nhau",
      "B": "Khác nhau",
      "C": "Tùy từng dự án",
      "D": "Không có câu nào đúng"
    },
    "answer": "A"
  },
  {
    "id": 141,
    "text": "Câu 1: ___________ là tài nguyên được hy sinh hay được tính trước để đạt được một mục tiêu rõ ràng hay để trao đổi cái gì đó.",
    "choices": {
      "A": "Tiền bạc",
      "B": "Trách nhiệm pháp lý",
      "C": "Buôn bán",
      "D": "Chi phí"
    },
    "answer": "D"
  },
  {
    "id": 142,
    "text": "Câu 2: Mục tiêu chính của quản lý chi phí dự án là gì?",
    "choices": {
      "A": "Đảm bảo cho dự án hoàn tất với chi phí ít nhất có thể",
      "B": "Đảm bảo cho dự án hoàn tất trong ngân sách cho phép",
      "C": "Cung cấp thông tin chi phí trung thực và chính xác về các dự án",
      "D": "Để đảm bảo rằng tiền của một tổ chức được sử dụng một cách khôn ngoan"
    },
    "answer": "B"
  },
  {
    "id": 143,
    "text": "Câu 3: Bạn đang chuẩn bị ước tính chi phí cho một tòa nhà dựa trên vị trí, mục đích, số bộ vuông và các đặc điểm khác của nó. Bạn đang sử dụng kỹ thuật ước tính chi phí nào?",
    "choices": {
      "A": "Mô hình tham số",
      "B": "Ước lượng tương tự (Ước lượng từ trên xuống",
      "C": "Ước lượng từ dưới lên",
      "D": "Ước lượng ba trường hợp"
    },
    "answer": "A"
  },
  {
    "id": 144,
    "text": "Câu 4: _________________ là phân bổ chi phí ước tính vào từng hạng mục công việc để thiết lập một baseline cho việc kiểm soát",
    "choices": {
      "A": "Ước lượng chi phí",
      "B": "Lập kế hoạch quản lý chi phí",
      "C": "Dự toán chi phí",
      "D": "Kiểm soát - điều chỉnh ngân sách"
    },
    "answer": "C"
  },
  {
    "id": 145,
    "text": "Câu 5: __________________ là một kỹ thuật đo lường sự thực hiện dự án thông qua việc tích hợp dữ liệu phạm vi, thời gian và chi phí dự án.",
    "choices": {
      "A": "Kiểm soát - điều chỉnh ngân sách",
      "B": "Ước lượng chi phí",
      "C": "Lập ngân sách chi phí dự án",
      "D": "Quản lý chi phí thu được (EVM"
    },
    "answer": "D"
  },
  {
    "id": 146,
    "text": "Câu 6: Nếu chi phí thực tế (AC) cho một mặt hàng WBS là $1500 và giá trị kiếm được của nó (EV) là $2000, thì CV là bao nhiêu và nó thấp hơn hay vượt quá ngân sách?",
    "choices": {
      "A": "CV =  $500, vượt quá ngân sách",
      "B": "CV =  $500, dưới ngân sách CV = EV – AC = 2000 – 1500 = +500 → dưới ngân sách",
      "C": "CV =  - $500, vượt quá ngân sách",
      "D": "CV =  - $500, dưới ngân sách"
    },
    "answer": "B"
  },
  {
    "id": 147,
    "text": "Câu 7: Nếu một dự án hoàn thành một nửa và chỉ số hiệu suất theo lịch trình (SPI) là 110% và chỉ số hiệu suất chi phí (CPI) là 95%, thì nó tiến triển như thế nào? SPI > 1 (vượt tiến độ), CPI < 1 (vượt ngân sách)",
    "choices": {
      "A": "Vượt trước kế hoạch và dưới ngân sách",
      "B": "Vượt trước kế hoạch và vượt quá ngân sách",
      "C": "Chậm tiến độ và dưới ngân sách",
      "D": "Chậm tiến độ và vượt quá ngân sách"
    },
    "answer": "B"
  },
  {
    "id": 148,
    "text": "Câu 8: Sự khác  biệt  giữa chi  phí kế hoạch  và  thực  tế  của  các công việc đã hoàn thành (Cost Variance) được tính bằng biểu thức nào sau đây?",
    "choices": {
      "A": "CV = BCWP – BCWS",
      "B": "CV = BCWP – ACWP",
      "C": "CV = SV / BCWS",
      "D": "A và C"
    },
    "answer": "B"
  },
  {
    "id": 149,
    "text": "Câu 9: Lập kế hoạch quản lý chi phí có thể được mô tả tốt nhất bằng điều nào sau đây?",
    "choices": {
      "A": "Quá trình ước lượng gần đúng cho những tài nguyên cần thiết để hoàn thành dự án",
      "B": "Quá trình tập hợp và dự đoán chi phí của một dự án trong vòng đời của nó",
      "C": "Quá trình quyết định chính sách, quy trình, tài liệu được sử dụng cho việc thực thi và điều khiển chi phí",
      "D": "Quá  trình phân  bổ  chi  phí  ước  tính  vào  từng hạng  mục  công  việc  để thiết  lập một baseline cho việc kiểm soát"
    },
    "answer": "C"
  },
  {
    "id": 150,
    "text": "Câu 10: Chi phí nào sau đây là chi phí dự án trực tiếp?",
    "choices": {
      "A": "Chiếu sáng và sưởi ấm cho văn phòng công ty",
      "B": "Bảo hiểm bồi thường cho người lao động",
      "C": "Đặt đường ống cho một dự án thủy lợi",
      "D": "A và B"
    },
    "answer": "C"
  },
  {
    "id": 151,
    "text": "Câu 11: Trong kiểm soát chi phí, giả sử giá trị EV=10000, PV=12500, AC=20000, thì chỉ số thực hiện lịch bằng bao nhiêu? SPI = EV / PV = 10000 / 12500 = 0.8 = 80%",
    "choices": {
      "A": "20%",
      "B": "40%",
      "C": "60%",
      "D": "80%"
    },
    "answer": "D"
  },
  {
    "id": 152,
    "text": "Câu 12: CPI là tỷ số giữa giá trị thu được và chi phí thật sự. Giả sử CPI nhỏ hơn 1 thì? CPI < 1 → vượt ngân sách",
    "choices": {
      "A": "Phù hợp",
      "B": "Dư ngân sách",
      "C": "Vượt ngân sách",
      "D": "Tất cả đều sai"
    },
    "answer": "C"
  },
  {
    "id": 153,
    "text": "Câu 13: Trong kiểm soát chi phí, giả sử giá trị EV=10000, PV=12500, AC=20000, thì biến động lịch SV bằng bao nhiêu? SV = EV – PV = 10000 – 12500 = -2500",
    "choices": {
      "A": "2500",
      "B": "-2500",
      "C": "10000",
      "D": "-10000"
    },
    "answer": "B"
  },
  {
    "id": 154,
    "text": "Câu 14: Quản lý chi phí dự án gồm bao nhiêu bước?",
    "choices": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4 ( lập kế hoạch, ước tính chi phí, dự toán ngân sách, kiểm soát chi phí"
    },
    "answer": "D"
  },
  {
    "id": 155,
    "text": "Câu 15: Các bước thực hiện trong quản lý dự án bao gồm?",
    "choices": {
      "A": "Lập kế hoạch quản lý chi phí",
      "B": "Ước tính chi phí",
      "C": "Dự toán ngân sách và kiểm soát chi phí",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 156,
    "text": "Câu 16: \"Chi phí chất lượng\" là một khái niệm quản lý dự án bao gồm chi phí?",
    "choices": {
      "A": "Vượt quá yêu cầu",
      "B": "Thay đổi đối với yêu cầu",
      "C": "Đảm bảo tính phù hợp cho các yêu cầu",
      "D": "Các yêu cầu quản lý chất lượng"
    },
    "answer": "C"
  },
  {
    "id": 157,
    "text": "Câu 17: Chi phí thuê phòng sẽ được dùng cho cuộc họp dự án là ví dụ minh hoạ cho loại chi phí nào?",
    "choices": {
      "A": "Chi phí tất yếu",
      "B": "Chi phí cố định",
      "C": "Chi phí biến động",
      "D": "Chi phí không được dự kiến"
    },
    "answer": "B"
  },
  {
    "id": 158,
    "text": "Câu 18: Giám đốc dự án công nghệ thông tin thông báo biến động lịch trình vào một trong số các kết quả chuyển giao của dự án. BCWP (Chi phí dự toán của việc đã thực hiện) là 7.000$, ACWP (Chi phí thực của việc đã thực hiện) là 9.000$ và BCWS (Chi phí dự toán của việc đã xếp lịch) là 11.000$ cho một tuần. Dựa vào toàn bộ số lượng này thì dự án: SV = BCWP – BCWS = 7000 – 11000 = -4000",
    "choices": {
      "A": "Trước lịch trình khoảng 4.000$ cho một tuần",
      "B": "Trước lịch trình khoảng 2.000$ cho một tuần",
      "C": "Sau lịch trình khoảng 4.000$ cho một tuần",
      "D": "Sau lịch trình khoảng 2.000$ cho một tuần"
    },
    "answer": "C"
  },
  {
    "id": 159,
    "text": "Câu 19: Nhân tố nào có ảnh hưởng lớn nhất tới chi phí lao động theo ước tính trên đơn vị cho dự",
    "choices": {
      "A": "Thông tin lịch sử",
      "B": "Sử dụng các nhà cung cấp bên ngoài",
      "C": "Các quy trình kiểm soát thay đổi",
      "D": "Các yêu cầu mức độ kỹ năng nguồn nhân lực"
    },
    "answer": "D"
  },
  {
    "id": 160,
    "text": "Câu 20: Phạm vi của dự án vượt quá kinh phí bởi vì các mục được mua đắt hơn so với dự liệu ban đầu. Lượng dư thừa này sẽ vượt quá tổng kinh phí cho dự án. Giám đốc dự án nên làm gì?",
    "choices": {
      "A": "Không thay đổi kinh phí",
      "B": "Tiếp cận các đối tượng liên quan dự án để tăng kinh phí",
      "C": "Giảm các chi phí phạm vi để không vượt quá kinh phí",
      "D": "Điều chỉnh các mục kinh phí để thu hút các chi phí vượt quá"
    },
    "answer": "B"
  },
  {
    "id": 161,
    "text": "Câu 21: Công cụ nào sau đây là công cụ để xác định thời gian dài nhất mà dự án sẽ mất?",
    "choices": {
      "A": "WBS",
      "B": "Sơ đồ mạng",
      "C": "Biểu đồ Gantt",
      "D": "Tuyên bố dự án"
    },
    "answer": "B"
  },
  {
    "id": 162,
    "text": "Câu 22: Điều nào sau đây là đúng?",
    "choices": {
      "A": "Đường găng có thể thay đổi trong quá trình thực hiện dự án",
      "B": "Chỉ có thể có một đường găng",
      "C": "Sơ đồ mạng sẽ thay đổi mỗi khi ngày kết thúc thay đổi"
    },
    "answer": "A"
  }
];