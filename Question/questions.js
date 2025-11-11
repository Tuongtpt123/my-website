const questions = [
  {
    "id": 1,
    "text": "Câu 1: Phát biểu nào sau đây SAI?",
    "choices": {
      "A": "Cả B và C đều sai",
      "B": "Hộp cát (sandbox) là một lớp trừu tượng nằm giữa phần mềm với hệ điều hành nhằm tạo môi trường độc lập cho việc thực thi ứng dụng",
      "C": "Hạ tầng chuyển mạch trong một hệ thống đám mây không thể cô lập được các gói tin truyền thông giữa các máy ảo nằm trên cùng một môi trường phần cứng",
      "D": "Cả B và C đều đúng"
    },
    "answer": "A"
  },
  {
    "id": 2,
    "text": "Câu 2: Phát biểu nào sau đây sai?",
    "choices": {
      "A": "Các server ảo sử dụng tài nguyên độc lập như một máy chủ vật lý",
      "B": "Ảo hóa hệ thống tức là tiến hành phân chia một máy chủ thành nhiều máy chủ ảo hoặc kết hợp nhiều máy chủ vật lý thành một máy chủ logic",
      "C": "Các server ảo không hề có tài nguyên độc lập như một máy chủ vật lý",
      "D": "Ảo hóa hệ thống tức là tiến hành phân chia một máy chủ thành nhiều máy chủ ảo"
    },
    "answer": "A"
  },
  {
    "id": 3,
    "text": "Câu 3: Khi thiết kết chương trình mô phỏng Cloud, bốn thuộc tính được xem xét đến là?",
    "choices": {
      "A": "Cả B và D đều sai",
      "B": "Chi phí mỗi bộ xử lý; Chi phí mỗi đơn vị bộ nhớ; Chi phí mỗi đơn vị lưu trữ; Chi phí mỗi đơn vị băng thông sử dụng",
      "C": "Cả B và D đều đúng",
      "D": "Chi phí mỗi bộ xử lý; Chi phí mỗi đơn vị bộ nhớ; Chi phí mỗi máy chủ; Chi phí mỗi trung tâm dữ liệu lớn"
    },
    "answer": "B"
  },
  {
    "id": 4,
    "text": "Câu 4: Phát biểu nào sau đây đúng? Ảo hóa cung cấp tính bao đóng vì:",
    "choices": {
      "A": "Mọi thao tác cài đặt cập nhật trên nguồn tài nguyên ảo hóa chỉ diễn ra trong phạm vi máy ảo mà không ảnh hưởng hay tác động tới các máy ảo khác, tài nguyên khác không được cấp phát",
      "B": "Mọi thao tác cài đặt cập nhật trên nguồn tài nguyên ảo hóa chỉ diễn ra trong phạm vi máy ảo và ảnh hưởng hay tác động tới các máy ảo khác, tài nguyên khác vẫn được cấp phát",
      "C": "Tất cả đều sai",
      "D": "Mọi thao tác cài đặt cập nhật trên nguồn tài nguyên ảo hóa chỉ diễn ra trong phạm vi máy ảo mà không ảnh hưởng hay tác động tới các máy ảo khác, tài nguyên khác vẫn được cấp phát"
    },
    "answer": "A"
  },
  {
    "id": 5,
    "text": "Câu 5: Trung tâm dữ liệu lớn có nguồn gốc?",
    "choices": {
      "A": "Từ sự ra đời của mô hình tính toán “khách – chủ”",
      "B": "A và D sai",
      "C": "A và D đúng",
      "D": "Từ các phòng máy tính lớn (main frames"
    },
    "answer": "D"
  },
  {
    "id": 6,
    "text": "Câu 6: Quản lý sự cố bao gồm các bước nào sau đây?",
    "choices": {
      "A": "Có quy trình đầy đủ cho việc phát hiện, ghi nhận và xử lý sự cố",
      "B": "Việc kiểm tra sự cố cần được thực hiện thường xuyên",
      "C": "Có các cơ chế hỗ trợ người sử dụng thông báo về sự cố",
      "D": "Tất cả đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 7,
    "text": "Câu 7: Dropbox là một ứng dụng của hãng nào sau đây?",
    "choices": {
      "A": "Oracle",
      "B": "Amazon",
      "C": "Google",
      "D": "Tất cả đều sai"
    },
    "answer": "B"
  },
  {
    "id": 8,
    "text": "Câu 8: Trên đĩa cứng, đơn vị lưu trữ dữ liệu nhỏ nhất được tính bằng",
    "choices": {
      "A": "Block",
      "B": "Cluster",
      "C": "Bit",
      "D": "Byte"
    },
    "answer": "A"
  },
  {
    "id": 9,
    "text": "Câu 9: Kiến trúc CloudSim bao gồm mấy lớp",
    "choices": {
      "A": "4",
      "B": "5",
      "C": "2",
      "D": "3"
    },
    "answer": "A"
  },
  {
    "id": 10,
    "text": "Câu 10: Amazon S3 là dịch vụ kho lưu trữ dữ liệu trên nền điện toán đám mây Amazon Web Service, được đưa ra giới thiệu vào năm 2006. Các khái niệm cơ sở trong Amazon S3 bao gồm:",
    "choices": {
      "A": "Objects; Buckets; Keys; Regions",
      "B": "Tất cả đều sai",
      "C": "Data; Node; Keys; Regions",
      "D": "Block; NameNode; Keys; Regions"
    },
    "answer": "A"
  },
  {
    "id": 11,
    "text": "Câu 11: Bộ phân phối tài nguyên SLA bao gồm bao nhiêu thành phần?",
    "choices": {
      "A": "5",
      "B": "3",
      "C": "6",
      "D": "4"
    },
    "answer": "C"
  },
  {
    "id": 12,
    "text": "Câu 12: SLA (Service Level Agreement) được dùng để xác định",
    "choices": {
      "A": "Yêu cầu về mức độ đáp ứng của dịch vụ",
      "B": "Yêu cầu về cấp độ dịch vụ",
      "C": "Yêu cầu về chất lượng dịch vụ",
      "D": "Tất cả đều sai"
    },
    "answer": "C"
  },
  {
    "id": 13,
    "text": "Câu 13: Tài liệu CSA Cloud Control Matrix phiên bản 3.0 (viết tắt là CSA CCM v3.0) đề xuất một tập hợp bao nhiêu cơ chế kiểm soát an toàn và bảo mật nhằm trợ giúp các nhà cung cấp dịch vụ đám mây dễ dàng ứng phó với các nguy cơ về an toàn bảo mật",
    "choices": {
      "A": "118",
      "B": "119",
      "C": "117",
      "D": "Tất cả đều sai"
    },
    "answer": "D"
  },
  {
    "id": 14,
    "text": "Câu 14: Định giá cố định là gì?",
    "choices": {
      "A": "Tất cả đều sai",
      "B": "Nhà cung cấp sẽ xác định rõ đặc tả về khả năng tính toán cố định (dung lượng bộ nhớ được cấp phát, loại CPU và tốc độ",
      "C": "Ứng dụng phần lớn trong mô hình dịch vụ phần mềm (SaaS) người dùng sẽ tiên đoán trước định mức sử dụng ứng dụng cloud",
      "D": "Được áp dụng phổ biến cho lượng dữ liệu truyền tải, dung lượng bộ nhớ được cấp phát và sử dụng,… cách này uyển chuyển hơn cách trên"
    },
    "answer": "B"
  },
  {
    "id": 15,
    "text": "Câu 15: Block size mặc định của HDFS là bao nhiêu?",
    "choices": {
      "A": "Tất cả đều sai",
      "B": "32 MB",
      "C": "64 MB",
      "D": "128 MB"
    },
    "answer": "C"
  },
  {
    "id": 16,
    "text": "Câu 16: Quy trình quản lý rủi ro về an toàn và bảo mật bao gồm các bước theo thứ tự sau:",
    "choices": {
      "A": "Lập kế hoạch, Triển khai, Đánh giá, Sửa chữa, Duy trì",
      "B": "Lập kế hoạch, Đánh giá, Triển khai, Duy trì",
      "C": "Lập kế hoạch, Triển khai, Đánh giá, Duy trì",
      "D": "Lập kế hoạch, Triển khai, Phát hiện, Đánh giá, Duy trì"
    },
    "answer": "C"
  },
  {
    "id": 17,
    "text": "Câu 17: Công nghệ ảo hóa là công nghệ quan trọng nhất trong điện toán đám mây. Công nghệ này cho phép?",
    "choices": {
      "A": "B và D đúng",
      "B": "Chia nhỏ tài nguyên vật lý để tối ưu hóa hiệu năng sử dụng",
      "C": "B và D sai",
      "D": "Tạo ra các thực thể ảo có tính năng tương đương như các thực thể vật lý"
    },
    "answer": "A"
  },
  {
    "id": 18,
    "text": "Câu 18: Kiến trúc Market-oriented cloud bao gồm bao nhiêu thành phần chủ yếu?",
    "choices": {
      "A": "6",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "C"
  },
  {
    "id": 19,
    "text": "Câu 19: Theo nghiên cứu khảo sát của International Data Corporation (IDC) năm 2009. Có bao nhiêu vấn đề về an toàn và bảo mật trên các tầng dịch vụ đám mây?",
    "choices": {
      "A": "13",
      "B": "Tất cả đều sai",
      "C": "11",
      "D": "12"
    },
    "answer": "D"
  },
  {
    "id": 20,
    "text": "Câu 20: Theo định nghĩa của US NIST chứa đựng kiến trúc, an ninh và chiến lược triển khai của đám mây. Số đặc tính cốt lõi của điện toán đám mây là:",
    "choices": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "4"
    },
    "answer": "A"
  },
  {
    "id": 21,
    "text": "Câu 21: Kiến trúc CloudSim được sắp xếp theo thứ tự từ thấp đến cao như sau:",
    "choices": {
      "A": "SimJava, GridSim, CloudSim, User-Interface",
      "B": "SimJava, GridSim, CloudSim, IaaS",
      "C": "SimJava, GridSim, CloudSim, User-Code",
      "D": "SimJava, GridSim, User-Code, CloudSim"
    },
    "answer": "C"
  },
  {
    "id": 22,
    "text": "Câu 22: Trên một cluster chạy HDFS, có bao nhiêu loại nút (node) ?",
    "choices": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "2"
    },
    "answer": "D"
  },
  {
    "id": 23,
    "text": "Câu 23: Quản lý truy cập là gì?",
    "choices": {
      "A": "Cả B và D đều đúng",
      "B": "Quản lý truy cập là thành phần sử dụng thông tin định danh để cho phép và đặt ràng buộc với các truy cập dịch vụ đám mây",
      "C": "Cả B và D đều sai",
      "D": "Quản lý truy cập là sự ràng buộc chặt chẽ và được công bố rõ ràng trong hợp đồng sử dụng dịch vụ (SLA"
    },
    "answer": "D"
  },
  {
    "id": 24,
    "text": "Câu 24: Các loại nút (node) có thể có trên một cluster chạy HDFS là:",
    "choices": {
      "A": "Namenode, Indexnode, Datanode",
      "B": "Tất cả đều sai",
      "C": "Namenode, Indexnode, Masternode, Datanode",
      "D": "Namenode, Datanode"
    },
    "answer": "D"
  },
  {
    "id": 25,
    "text": "Câu 25: Theo các vấn đề về an toàn và bảo mật thông tin. Các dịch vụ SaaS có thể được xây dựng theo bao nhiêu mô hình?",
    "choices": {
      "A": "6",
      "B": "Tất cả đều sai",
      "C": "5",
      "D": "4"
    },
    "answer": "B"
  },
  {
    "id": 26,
    "text": "Câu 26: Nguyên tắc hoạt động của MapReduce là gì?",
    "choices": {
      "A": "Hàm Map, lấy đầu vào là một cặp khóa/giá trị và đưa đầu ra là một tập các cặp khóa/giá trị trung gian. Các cặp khóa/giá trị trung gian này sau đó được gộp lại và các cặp khóa/giá trị trung gian có cùng khóa sẽ được chuyển cho hàm Reduce",
      "B": "Tất cả đều sai",
      "C": "Các phép toán lấy đầu vào là một tập các cặp khóa/giá trị, đưa ra nhiều tập khóa/giá trị đầu ra",
      "D": "Tất cả đều đúng"
    },
    "answer": "A"
  },
  {
    "id": 27,
    "text": "Câu 27: Phát biểu nào sau đây sai",
    "choices": {
      "A": "Hadoop framwork của Apache là một nền tảng dùng để phân tích các tập dữ liệu rất lớn",
      "B": "Hadoop MapReduce là một giải thuật dùng để xử lý lưu trữ dữ liệu",
      "C": "Mô hình thực hiện MapReduce có khả năng chịu lỗi cao",
      "D": "MapReduce bao gồm hai hàm cơ bản là Map và Reduce"
    },
    "answer": "B"
  },
  {
    "id": 28,
    "text": "Câu 28: Hadoop distributed file system ra đời trên nhu cầu lưu trữ dữ liệu của Nutch. Vậy Nutch là gì?",
    "choices": {
      "A": "Nutch là một Node trong nhu cầu lưu trữ dữ liệu",
      "B": "Nutch là tên một dự án Search Engine nguồn mở",
      "C": "Tất cả đều sai",
      "D": "Nutch là một kỹ thuật ra đời dựa trên nhu cầu lưu trữ dữ liệu"
    },
    "answer": "B"
  },
  {
    "id": 29,
    "text": "Câu 29: Trong kiến trúc ảo hóa Hosted–based phát biểu nào sau đây đúng",
    "choices": {
      "A": "C và D đúng",
      "B": "C và D sai",
      "C": "Không có lớp Hệ điều hành Host;",
      "D": "Không có lớp Hệ thống virtual machine monitor (hypervisor"
    },
    "answer": "B"
  },
  {
    "id": 30,
    "text": "Câu 30: Trong kiến trúc ảo hóa Hypervisor–based phát biểu nào sau đây đúng",
    "choices": {
      "A": "B và D đúng",
      "B": "Không có lớp Hệ thống virtual machine monitor (hypervisor",
      "C": "B và D sai",
      "D": "Không có lớp Hệ điều hành Host"
    },
    "answer": "D"
  },
  {
    "id": 31,
    "text": "Câu 31: Trọng tâm của điện toán lưới là gì?",
    "choices": {
      "A": "Chia nhỏ dữ liệu lớn để xử lý",
      "B": "Truyền tải dữ liệu lớn",
      "C": "Chia nhỏ dữ liệu lớn để xử lý không phụ thuộc vào không gian và thời gian",
      "D": "Di chuyển một tải công việc đến địa điểm của các tài nguyên điện toán cần thiết để sử dụng"
    },
    "answer": "D"
  },
  {
    "id": 32,
    "text": "Câu 32: Theo định nghĩa của US NIST chứa đựng kiến trúc, an ninh và chiến lược triển khai của đám mây. Đặc tính tự phục vụ theo yêu cầu (on-demand self-service) có nghĩa là:",
    "choices": {
      "A": "Tất cả đều đúng",
      "B": "Khách hàng với nhu cầu tức thời tại những thời điểm thời gian xác định có thể sử dụng các tài nguyên tính toán một cách tự động, không cần tương tác với con người để cấp phát",
      "C": "Những tài nguyên tính toán này được phân phối qua mạng Internet và được các ứng dụng client khác nhau sử dụng với những nền tảng không đồng nhất",
      "D": "Đối với người sử dụng, các tài nguyên tính toán được cung cấp tức thời hơn là liên tục, được cung cấp theo nhu cầu để mở  rộng hoặc tiết  giảm  không  hạn  định tại bất kỳ thời điểm nào"
    },
    "answer": "B"
  },
  {
    "id": 33,
    "text": "Câu 33: Các yêu cầu nào sau đây là các yêu cầu của hệ thống, dịch vụ giám sát ?",
    "choices": {
      "A": "Triển khai tự động và nhanh chóng, Giá rẻ, Tối ưu tự động liên tục",
      "B": "Triển khai thủ công và nhanh chóng, Co dãn tự động, Tối ưu tự động liên tục",
      "C": "Triển khai nhanh chóng, Co dãn nhanh chóng, Tối ưu nhanh chóng",
      "D": "Triển khai tự động và nhanh chóng, Co dãn tự động, Tối ưu tự động liên tục"
    },
    "answer": "D"
  },
  {
    "id": 34,
    "text": "Câu 34: Định nghĩa một lưới nào sau đây đúng?",
    "choices": {
      "A": "Một lưới là một nhóm máy chủ mà trên đó nhiệm vụ lớn được chia thành những tác vụ nhỏ để chạy song song, được xem là một máy vật lý",
      "B": "Một lưới là một nhóm máy chủ mà trên đó nhiệm vụ lớn được chia thành những tác vụ nhỏ để chạy song song, được xem là một máy chủ ảo",
      "C": "Một lưới là một nhóm máy chủ mà trên đó nhiệm vụ lớn được chia thành những tác vụ nhỏ để chạy song song, được xem là nhiều máy chủ ảo",
      "D": "Một lưới là một nhóm máy chủ mà trên đó nhiệm vụ lớn được chia thành những tác vụ nhỏ để chạy tuần tự, được xem là một máy chủ ảo"
    },
    "answer": "B"
  },
  {
    "id": 35,
    "text": "Câu 35: SaaS là viết tắt của khái niệm nào sau đây?",
    "choices": {
      "A": "Service as a Service (Dịch vụ hướng dịch vụ",
      "B": "Software as a Service (Phần mềm hướng dịch vụ",
      "C": "Structure as a Service (Cấu trúc hướng dịch vụ",
      "D": "Swap as a Service (Trao đổi hướng dịch vụ"
    },
    "answer": "B"
  },
  {
    "id": 36,
    "text": "Câu 36: Kiến trúc ảo hóa có thể chia ra làm mấy loại?",
    "choices": {
      "A": "4",
      "B": "6",
      "C": "3",
      "D": "5"
    },
    "answer": "C"
  },
  {
    "id": 37,
    "text": "Câu 37: Kiến trúc hệ thống tập tin phân tán mà một máy chủ trong hệ thống đóng vai trò là máy chủ lưu trữ, cung cấp năng lực lưu trữ của các ổ đĩa cứng cục bộ, hệ thống RAID cho các máy tính khác qua giao thức mạng được viết tắt là",
    "choices": {
      "A": "NTFS",
      "B": "NFS",
      "C": "ATFS",
      "D": "AIFS"
    },
    "answer": "B"
  },
  {
    "id": 38,
    "text": "Câu 38: Trong điện toán đám mây kích thước của một cluster sẽ được tính bằng",
    "choices": {
      "A": "Tất cả đều đúng",
      "B": "8 bit",
      "C": "Tất cả đều sai",
      "D": "8 byte"
    },
    "answer": "C"
  },
  {
    "id": 39,
    "text": "Câu 39: Phát biểu nào sau đây đúng?",
    "choices": {
      "A": "Việc giảm số lượng block của một tập tin sẽ làm tăng khối lượng metadata trên NameNode",
      "B": "Việc sử dụng block size lớn, tức sẽ giảm số lượng block của một tập tin",
      "C": "Việc giảm số lượng block cần đọc sẽ tăng số lượng kết nối cần tạo lên một block",
      "D": "Với block size lớn, client sẽ phải tương tác với DataNode nhiều hơn"
    },
    "answer": "B"
  },
  {
    "id": 40,
    "text": "Câu 40: Dữ liệu lớn được đặc tả bằng 4V nào sau đây?",
    "choices": {
      "A": "Volume, Velocity, Variety, Value",
      "B": "Tất cả đều sai",
      "C": "Volume, Volatile, Variety, Value",
      "D": "Volume, Velocity, Volatile, Value"
    },
    "answer": "A"
  },
  {
    "id": 41,
    "text": "Câu 41: Đâu là một ưu điểm của mô hình Openstack Swift",
    "choices": {
      "A": "Chi phí sinh hoạt",
      "B": "Mở mã nguồn",
      "C": "Tất cả đáp án đều đúng",
      "D": "Đội ngũ chuyên gia hỗ trợ nhiều kinh nghiệm"
    },
    "answer": "B"
  },
  {
    "id": 42,
    "text": "Câu 42: Đâu là một yếu tố của an toàn các dịch vụ Saas",
    "choices": {
      "A": "Truy cập dịch vụ",
      "B": "Ít người thuê đồng thời",
      "C": "Truy cập không đồng thời",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "A"
  },
  {
    "id": 43,
    "text": "Câu 43: Đâu là một viết tắt của nền tảng hướng dịch vụ",
    "choices": {
      "A": "IAAS",
      "B": "PAAA",
      "C": "PAAS",
      "D": "SAAS"
    },
    "answer": "C"
  },
  {
    "id": 44,
    "text": "Câu 44: Đâu là một ưu điểm của mô hình Amazon S3",
    "choices": {
      "A": "Độ tin cậy cao",
      "B": "Đội ngũ chuyên gia hỗ trợ nhiều kinh nghiệm",
      "C": "Thuật toán truy vấn cực nhanh",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "A"
  },
  {
    "id": 45,
    "text": "Câu 45: Đặc trưng chính của NOSQL",
    "choices": {
      "A": "Kết hợp nhiều bảng với nhau thành một bản",
      "B": "Không tổ chức dữ liệu dưới dạng bảng",
      "C": "Tổ chức mỗi bảng là một file dữ liệu",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "B"
  },
  {
    "id": 46,
    "text": "Câu 46: Đâu là ưu điểm của điện toán đám mây",
    "choices": {
      "A": "Độ tin cậy tương đối",
      "B": "Tiết kiệm tài nguyên, chi phí",
      "C": "Tất cả đáp án đều sai",
      "D": "Tốc độ chấp nhận được"
    },
    "answer": "B"
  },
  {
    "id": 47,
    "text": "Câu 47: Công nghệ ảo hoá là việc",
    "choices": {
      "A": "Kết hợp nhiều máy chủ vật lý thành một máy chủ logic",
      "B": "Kết hợp nhiều mạng thành mạng WAN",
      "C": "Kết hợp nhiều máy client thành một máy chung",
      "D": "Tất cả đáp án đều đúng"
    },
    "answer": "A"
  },
  {
    "id": 48,
    "text": "Câu 48: Đâu là một nhân tố phụ thuộc trong ảo hoá của điện toán đám mây",
    "choices": {
      "A": "Khả năng cấu hình thấp",
      "B": "Nhiều hệ điều hành cùng chạy trên một máy chủ vật lý",
      "C": "Tất cả đáp án đều sai",
      "D": "Khả năng cấu hình cao"
    },
    "answer": "D"
  },
  {
    "id": 49,
    "text": "Câu 49: Đây là một đặc điểm của bộ phức tạp của NOSQL",
    "choices": {
      "A": "Không đảm bảo theo ACID",
      "B": "Cần đội ngũ chuyên gia nhiều kinh nghệm",
      "C": "Thuật toán truy vấn",
      "D": "Tất cả các đáp án đều đúng"
    },
    "answer": "A"
  },
  {
    "id": 50,
    "text": "Câu 50: Điện toán đám mây chia sẻ tài nguyên thông qua",
    "choices": {
      "A": "Các sever vật lý",
      "B": "Kết nối mạng cục bộ",
      "C": "Tất cả các đáp án đều sai",
      "D": "Ảo hoá"
    },
    "answer": "D"
  },
  {
    "id": 51,
    "text": "Câu 51: Đâu là một yếu tố của an toàn các dịch vụ IaaS",
    "choices": {
      "A": "Giám sát máy ảo",
      "B": "Phần cứng không tương thích",
      "C": "Truy cập không đồng thời",
      "D": "Tất cả các đáp án đều sai"
    },
    "answer": "A"
  },
  {
    "id": 52,
    "text": "Câu 52: Thành phần không thể thiếu trong ảo hoá của điện toán đám mây?",
    "choices": {
      "A": "Tất cả đáp án đều sai",
      "B": "Bao dóng và liên tục",
      "C": "Trừu tượng và bao đóng",
      "D": "Trừu tượng và hiện thực hoá"
    },
    "answer": "C"
  },
  {
    "id": 53,
    "text": "Câu 53: Đâu là một đặc điểm của điện toán đám mây",
    "choices": {
      "A": "Tất cả đáp án đều sai",
      "B": "Thỉnh thoảng có thể mất liên lạc",
      "C": "Truy cập tức thời và liên tục",
      "D": "Truy cập hạn chế"
    },
    "answer": "C"
  },
  {
    "id": 54,
    "text": "Câu 54: Đâu là một yếu tố của an toàn các dịch vụ IaaS",
    "choices": {
      "A": "Nhiều mạng đụng độ",
      "B": "Phần cứng không tương thích",
      "C": "Phục hồi máy ảo",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "C"
  },
  {
    "id": 55,
    "text": "Câu 55: Đâu là một lỗ hỏng liên quan đến dữ liệu",
    "choices": {
      "A": "Tất cả đáp án đều sai",
      "B": "Dữ liệu xoá an toàn",
      "C": "Khả năng cấu hình yếu",
      "D": "Dữ liệu được sao lưu bởi bên thứ ba"
    },
    "answer": "D"
  },
  {
    "id": 56,
    "text": "Câu 56: Đâu là yếu tố an toàn của các dịch vụ SaaS",
    "choices": {
      "A": "Phần cứng không tương thích",
      "B": "Ít người thuê đòng thời",
      "C": "Bảo mật dữ liệu",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "C"
  },
  {
    "id": 57,
    "text": "Câu 57: Đâu là một dịch vụ đám mấy của Azure",
    "choices": {
      "A": "DynamicsERP",
      "B": "OneCRM",
      "C": "Dropbox",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "A"
  },
  {
    "id": 58,
    "text": "Câu 58: CloudBees là cung cấp dịch vụ",
    "choices": {
      "A": "Hạ tầng",
      "B": "Tất cả đáp án trên đều đúng",
      "C": "Phần mềm",
      "D": "Nền tảng"
    },
    "answer": "D"
  },
  {
    "id": 59,
    "text": "Câu 59: Đâu là một dịch vụ đám mây của Amazon App",
    "choices": {
      "A": "Cloud Drive",
      "B": "OneDrive",
      "C": "Dropbox",
      "D": "Tất cả các đáp án đều sai"
    },
    "answer": "A"
  },
  {
    "id": 60,
    "text": "Câu 60: Đâu là một ưu điểm của mô hình Amazon S3",
    "choices": {
      "A": "Chi phí linh hoạt",
      "B": "Đội ngũ chuyên gia nhiều kinh nghiệm",
      "C": "Thuật toán truy vấn cực mạnh",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "A"
  },
  {
    "id": 61,
    "text": "Câu 61: Neo4j là NOSQL dạng",
    "choices": {
      "A": "Hướng văn bản",
      "B": "Key/Vlue",
      "C": "Hệ Cột",
      "D": "Đồ Thị"
    },
    "answer": "D"
  },
  {
    "id": 62,
    "text": "Câu 62: Đâu không phải là ưu điểm của điện toán đám mây",
    "choices": {
      "A": "Tiết kiệm tài nguyên, chi phí",
      "B": "Nhu cầu lưu trữ",
      "C": "Tất cả các đáp án đều sai",
      "D": "Độ tin cậy cao"
    },
    "answer": "B"
  },
  {
    "id": 63,
    "text": "Câu 63: Amazon Dynamo là NOSQL dạng ?",
    "choices": {
      "A": "Đồ Thị",
      "B": "Key/Value",
      "C": "Hướng văn bản",
      "D": "Hệ Cột"
    },
    "answer": "B"
  },
  {
    "id": 64,
    "text": "Câu 64: Amazon Redshift là NOSQL dạng",
    "choices": {
      "A": "Key/Value",
      "B": "Đồ Thị",
      "C": "Hệ cột",
      "D": "Hướng văn bản"
    },
    "answer": "C"
  },
  {
    "id": 65,
    "text": "Câu 65: Để kiểm soát truy cập chúng ta dùng giấy phép nào sau đây",
    "choices": {
      "A": "X.600",
      "B": "X.500",
      "C": "X.509",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "C"
  },
  {
    "id": 66,
    "text": "Câu 66: Router sẽ đặt tại đâu trong trung tâm dữ liệu lớn cơ bản",
    "choices": {
      "A": "Hạ tầng hướng dịch vụ",
      "B": "Không có đáp án nào đúng",
      "C": "Nền tảng hướng dịch vụ",
      "D": "Tài nguyên phân tán"
    },
    "answer": "D"
  },
  {
    "id": 67,
    "text": "Câu 67: Ứng dụng CRM thuộc",
    "choices": {
      "A": "Hạ tầng hướng dịch vụ",
      "B": "Phân tích hướng dịch vụ",
      "C": "Nền  tảng hướng dịch vụ",
      "D": "Tài nguyên phân tán"
    },
    "answer": "D"
  },
  {
    "id": 68,
    "text": "Câu 68: Đâu không phải là một đặc điểm của điện toán đám mây",
    "choices": {
      "A": "Truy cập rộng rãi",
      "B": "Tự phục vụ theo yêu cầu",
      "C": "Tất cả đáp án đều sai",
      "D": "Tài nguyên phân tán"
    },
    "answer": "D"
  },
  {
    "id": 69,
    "text": "Câu 69: Đâu là một lỗ hổng của dữ liệu trong mạng ảo",
    "choices": {
      "A": "Phân tán dữ liệu",
      "B": "Mất dữ liệu do sao chép",
      "C": "Tất cả đáp án đều sai",
      "D": "Dữ liệu không được cập nhật"
    },
    "answer": "B"
  },
  {
    "id": 70,
    "text": "Câu 70: Vấn đề nào được quan tâm hàng đầu trong công nghệ đám mây",
    "choices": {
      "A": "Chi phí vận hành",
      "B": "Công nghệ triển khai",
      "C": "An toàn và bảo mật",
      "D": "Lập trình"
    },
    "answer": "C"
  },
  {
    "id": 71,
    "text": "Câu 71: SQL Azure có mấy chức năng chính",
    "choices": {
      "A": "2",
      "B": "3",
      "C": "5",
      "D": "4"
    },
    "answer": "D"
  },
  {
    "id": 72,
    "text": "Câu 72: Trong quá trình lưu trữ của dịch vụ hạ tầng cần chú ý mấy nhóm nhiệm vụ chính",
    "choices": {
      "A": "3",
      "B": "2",
      "C": "4",
      "D": "Không có đáp án đúng"
    },
    "answer": "A"
  },
  {
    "id": 73,
    "text": "Câu 73: Onedrive là NOSQL dạng",
    "choices": {
      "A": "Đồ thị",
      "B": "Key/Value",
      "C": "Hệ cột",
      "D": "Không phải là NOSQL"
    },
    "answer": "D"
  },
  {
    "id": 74,
    "text": "Câu 74: MISA là một dạng ?",
    "choices": {
      "A": "Phân tích hướng dịch vụ",
      "B": "Hạ tầng hướng dịch vụ",
      "C": "Phần mềm hướng dịch vụ",
      "D": "Nền tảng hướng dịch vụ"
    },
    "answer": "C"
  },
  {
    "id": 75,
    "text": "Câu 75: Điểm mạnh của Saas là",
    "choices": {
      "A": "Tính linh hoạt",
      "B": "Dễ quản lý",
      "C": "Tính qui mô",
      "D": "Tính tương thích"
    },
    "answer": "B"
  },
  {
    "id": 76,
    "text": "Câu 76: Hiện nay Cloud Control Matrix đã được đổi tên thành",
    "choices": {
      "A": "CAS",
      "B": "Không thay đổi",
      "C": "CMM",
      "D": "CMA"
    },
    "answer": "C"
  },
  {
    "id": 77,
    "text": "Câu 77: Hekoru là một dịch vụ dạng",
    "choices": {
      "A": "Hạ tầng",
      "B": "Nền tảng",
      "C": "Phần mềm",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "A"
  },
  {
    "id": 78,
    "text": "Câu 78: Viết tắt các bước trong phương pháp đảm bảo bảo mật điện toán đám mây",
    "choices": {
      "A": "PDCA",
      "B": "DPAC",
      "C": "PDAC",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "A"
  },
  {
    "id": 79,
    "text": "Câu 79: Đâu là nhước điểm lớn nhất của điện toán đám mây",
    "choices": {
      "A": "Bảo mật",
      "B": "Phụ thuộc nhà cung cấp",
      "C": "Nguyên nhân khác",
      "D": "Tắc nghẽn đường truyền"
    },
    "answer": "B"
  },
  {
    "id": 80,
    "text": "Câu 80: Trong các hệ sau đây hệ nào vừa lưu trữ theo văn bản lẫn hệ cột",
    "choices": {
      "A": "Tất cả đáp án đều đúng",
      "B": "Hbase",
      "C": "DynamoDB",
      "D": "MongoDB"
    },
    "answer": "B"
  },
  {
    "id": 81,
    "text": "Câu 81: Đâu là một nhân tố phụ thuộc trong ảo hóa của điện toán đám mây?",
    "choices": {
      "A": "Nhiều ứng dụng cùng chạy trên một sever",
      "B": "Nhiều ổ cứng khác nhau cùng chạy",
      "C": "Tất cả đáp án đều sai",
      "D": "Nhiều hệ điều hành cùng chạy trên một một máy chủ vật lý"
    },
    "answer": "A"
  },
  {
    "id": 82,
    "text": "Câu 82: Đặc trưng chính của NOSQL là",
    "choices": {
      "A": "Tất cả đáp án đều sai",
      "B": "Kết hợp nhiều bảng với nhau thành một bản",
      "C": "Tổ chức mỗi bảng là 1 file dữ liệu",
      "D": "Không tổ chức dữ liệu dưới dạng bảng"
    },
    "answer": "D"
  },
  {
    "id": 83,
    "text": "Câu 83: Đâu là ưu điểm của điện toán đám mây ?",
    "choices": {
      "A": "Tốc độ chấp nhận được",
      "B": "Tiết kiệm tài nguyên, chi phí",
      "C": "Độ tin cậy tuyệt đối",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "B"
  },
  {
    "id": 84,
    "text": "Câu 84: Đâu là một ưu điểm của mô hình Amazon S3 ?",
    "choices": {
      "A": "Thuật toán truy vấn cực nhanh",
      "B": "Tất cả đáp án đều sai",
      "C": "Độ tin cậy cao",
      "D": "Đội ngũ chuyên gia hỗ trợ nhiều kinh nghiệm"
    },
    "answer": "C"
  },
  {
    "id": 85,
    "text": "Câu 85: Đâu là một ưu điểm của mô hình OpenStack Swift ?",
    "choices": {
      "A": "Đội ngũ chuyên gia hỗ trợ nhiều kinh nghiệm",
      "B": "Tất cả đáp án đều sai",
      "C": "Phân hóa nhiều mức độ",
      "D": "Khả năng tương thích thông qua phần cứng"
    },
    "answer": "C"
  },
  {
    "id": 86,
    "text": "Câu 86: Đâu là một nhóm của cách tổ chức NOSQL ?",
    "choices": {
      "A": "Key/Value",
      "B": "Hướng giá trị số",
      "C": "Cơ sở dữ liệu đồ thị",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "C"
  },
  {
    "id": 87,
    "text": "Câu 87: Đâu là lợi ích của các dịch vụ đám mây ?",
    "choices": {
      "A": "Tất cả đáp án đều sai",
      "B": "Tự động nhập liệu",
      "C": "Cải tiến quy trình",
      "D": "Phân tán công việc"
    },
    "answer": "C"
  },
  {
    "id": 88,
    "text": "Câu 88: Đâu là một nhóm của cách tổ chức NOSQL ?",
    "choices": {
      "A": "Key/Value",
      "B": "Hướng giá trị số",
      "C": "Hệ dòng",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "A"
  },
  {
    "id": 89,
    "text": "Câu 89: RedHat là cung cấp dịch vụ",
    "choices": {
      "A": "Phần mềm",
      "B": "Hạ tầng",
      "C": "Nền tảng",
      "D": "Tất cả đáp án đều đúng"
    },
    "answer": "C"
  },
  {
    "id": 90,
    "text": "Câu 90: Đâu là một yếu tố của an toàn các dịch vụ IaaS ?",
    "choices": {
      "A": "Nhiều mạng đụng độ",
      "B": "Kho ảnh máy công cộng",
      "C": "Tất cả đáp án đều sai",
      "D": "Phần cứng không tương thích"
    },
    "answer": "B"
  },
  {
    "id": 91,
    "text": "Câu 91: Công nghệ ảo hóa là việc",
    "choices": {
      "A": "Kết hợp nhiều máy client thành một máy chung",
      "B": "Tất cả đáp án đều đúng",
      "C": "Kết hợp nhiều mạng thành mạng WAN",
      "D": "Phân chia một máy chủ thành nhiều máy chủ ảo"
    },
    "answer": "D"
  },
  {
    "id": 92,
    "text": "Câu 92: Đâu là lỗ hổng liên quan đến ảnh máy ảo ?",
    "choices": {
      "A": "Được vá lỗi",
      "B": "Tất cả đáp án đều sai",
      "C": "Vị trí lưu trữ xác định",
      "D": "Không thể được vá lỗi"
    },
    "answer": "D"
  },
  {
    "id": 93,
    "text": "Câu 93: Đâu là một lỗ hổng liên quan đến dữ liệu ?",
    "choices": {
      "A": "Dữ liệu lưu trữ không mã hóa",
      "B": "Vị trí lưu trữ xác định",
      "C": "Tất cả đáp án đều sai",
      "D": "Vị trí lưu trữ phân tán"
    },
    "answer": "A"
  },
  {
    "id": 94,
    "text": "Câu 94: Đâu là một yếu tố của an toàn các dịch vụ IaaS ?",
    "choices": {
      "A": "Nhiều người thuê đồng thời",
      "B": "Ảo hóa",
      "C": "Truy cập không đồng thời",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "B"
  },
  {
    "id": 95,
    "text": "Câu 95: Đâu là một đặc điểm của điện toán đám mây ?",
    "choices": {
      "A": "Truy cập hạn chế",
      "B": "Có khả năng đo lường",
      "C": "Tất cả đáp án đều sai",
      "D": "Thỉnh thoảng có thể mất liên lạc"
    },
    "answer": "B"
  },
  {
    "id": 96,
    "text": "Câu 96: Một trung tâm dữ liệu lớn dạng cơ bản có mấy tầng ?",
    "choices": {
      "A": "2",
      "B": "4",
      "C": "5",
      "D": "3"
    },
    "answer": "B"
  },
  {
    "id": 97,
    "text": "Câu 97: Đâu là lợi ích của SQL Azure ?",
    "choices": {
      "A": "Tích hợp NOSQL",
      "B": "Chi phí thấp",
      "C": "Tối thiểu dung lượng",
      "D": "Tối đa tính sẵn sàng"
    },
    "answer": "D"
  },
  {
    "id": 98,
    "text": "Câu 98: Đâu là một yếu tố của an toàn các dịch vụ IaaS ?",
    "choices": {
      "A": "Phần cứng không tương thích",
      "B": "Giám sát máy ảo",
      "C": "Truy cập không đồng thời",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "B"
  },
  {
    "id": 99,
    "text": "Câu 99: Đâu là một nhân tố phụ thuộc trong ảo hóa điện toán đám mây?",
    "choices": {
      "A": "Tất cả đáp án đều sai",
      "B": "Khả năng sẵn sàng ứng dụng cao",
      "C": "Khả năng cấu hình thấp",
      "D": "Nhiều hệ điều hành cùng chạy trên một máy củ vật lý"
    },
    "answer": "B"
  },
  {
    "id": 100,
    "text": "Câu 100: Amazon thương mại hóa điện toán đám mây năm",
    "choices": {
      "A": "2000",
      "B": "2006",
      "C": "2005",
      "D": "2001"
    },
    "answer": "B"
  },
  {
    "id": 101,
    "text": "Câu 101: Đâu là một thành phần của Apps Fabric ?",
    "choices": {
      "A": "Softwave config",
      "B": "Access Control",
      "C": "Không có đáp án nào đúng",
      "D": "Dòng lệnh"
    },
    "answer": "B"
  },
  {
    "id": 102,
    "text": "Câu 102: Vấn đề nào ít được quan tâm nhất trong công nghệ đám mây ?",
    "choices": {
      "A": "Công nghệ triển khai",
      "B": "Chi phí vận hành",
      "C": "An toàn bảo mật",
      "D": "Không đủ khả năng điều sai"
    },
    "answer": "D"
  },
  {
    "id": 103,
    "text": "Câu 103: Apps Fabric có mấy thành phần chính ?",
    "choices": {
      "A": "5",
      "B": "3",
      "C": "4",
      "D": "2"
    },
    "answer": "D"
  },
  {
    "id": 104,
    "text": "Câu 104: Đâu là một lỗ hổng của dữ liệu trong mạng ảo ?",
    "choices": {
      "A": "Mất dữ liệu cho sao chép",
      "B": "Phân tán dữ liệu",
      "C": "Dữ liệu không được cập nhật",
      "D": "Tất cả đáp án"
    },
    "answer": "A"
  },
  {
    "id": 105,
    "text": "Câu 105: Đâu không phải là một đặc điểm của điện toán đám mây?",
    "choices": {
      "A": "Tự phục vụ theo yêu cầu",
      "B": "Truy cập rộng rãi",
      "C": "Truy cập không liên tục",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "C"
  },
  {
    "id": 106,
    "text": "Câu 106: MongoDB là NOSQL dạng",
    "choices": {
      "A": "Hướng văn bản",
      "B": "Key/Value",
      "C": "Hệ cột",
      "D": "Đồ thị"
    },
    "answer": "B"
  },
  {
    "id": 107,
    "text": "Câu 107: M13 xuất hiện tại khu vực nào của trung tâm dữ liệu lớn ?",
    "choices": {
      "A": "Phân phối ngang",
      "B": "Tất cả đáp án đều sai",
      "C": "Phân phối thiết bị",
      "D": "Phân phối chính"
    },
    "answer": "D"
  },
  {
    "id": 108,
    "text": "Câu 108: Amazon Redshift là NOSQL dạng ?",
    "choices": {
      "A": "Hướng văn bản",
      "B": "Key/Value",
      "C": "Hệ cột",
      "D": "Đồ thị"
    },
    "answer": "C"
  },
  {
    "id": 109,
    "text": "Câu 109: Đâu không phải là nhược điểm của điện toán đám mây?",
    "choices": {
      "A": "Tất cả các đáp án đều sai",
      "B": "Độ tin cậy không cao",
      "C": "Tiết kiệm",
      "D": "Phụ thuộc nhà cung cấp"
    },
    "answer": "C"
  },
  {
    "id": 110,
    "text": "Câu 110: Neo4j là NOSQL dạng",
    "choices": {
      "A": "Đồ thị",
      "B": "Hệ cột",
      "C": "Hướng văn bản",
      "D": "Key/Value"
    },
    "answer": "A"
  },
  {
    "id": 111,
    "text": "Câu 111: Vấn đề nào được quan tâm đứng thứ hai trong công nghệ đám mây ?",
    "choices": {
      "A": "An toàn và bảo mật",
      "B": "Công nghệ triển khai",
      "C": "Chi phí vận hành",
      "D": "Độ khả dụng"
    },
    "answer": "D"
  },
  {
    "id": 112,
    "text": "Câu 112: LAN xuất hiện tại khu vực nào của trung tâm dữ liệu lớn ?",
    "choices": {
      "A": "Phân phối ngang",
      "B": "Phân phối thiết bị",
      "C": "Các phòng hỗ trợ",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "A"
  },
  {
    "id": 113,
    "text": "Câu 113: Đối với SaaS thì ai là người dùng chủ yếu ?",
    "choices": {
      "A": "Tester",
      "B": "Người sử dụng phần mềm",
      "C": "Nhà phát triển ứng dụng",
      "D": "Tất cả đáp án đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 114,
    "text": "Câu 114: HBase là NOSQL dạng",
    "choices": {
      "A": "Hệ cột",
      "B": "Key/Value",
      "C": "Tất cả đáp án đều sai",
      "D": "Đồ thị"
    },
    "answer": "A"
  },
  {
    "id": 115,
    "text": "Câu 115: Chứng nhận SOC phát hành năm",
    "choices": {
      "A": "2012",
      "B": "2010",
      "C": "2011",
      "D": "2015"
    },
    "answer": "C"
  },
  {
    "id": 116,
    "text": "Câu 116: Google Drive và OneDrive là một loại dịch vụ",
    "choices": {
      "A": "SaaS",
      "B": "Tất cả đáp án đều sai",
      "C": "PaaS",
      "D": "IaaS"
    },
    "answer": "A"
  },
  {
    "id": 117,
    "text": "Câu 117: Dịch vụ nào sau đây là dịch vụ của điện toán đám mây phổ biến ?",
    "choices": {
      "A": "Máy chủ online",
      "B": "Tất cả đáp án đều sai",
      "C": "Truyền tải file",
      "D": "Mail"
    },
    "answer": "A"
  },
  {
    "id": 118,
    "text": "Câu 118: MISA là một dạng",
    "choices": {
      "A": "Hạ tầng hướng dịch vụ",
      "B": "Nền tảng hướng dịch vụ",
      "C": "Phần mềm hướng dịch vụ",
      "D": "Phân tích hướng dịch vụ"
    },
    "answer": "C"
  },
  {
    "id": 119,
    "text": "Câu 119: Đâu không phải là yếu tố của an toàn các dịch vụ IaaS ?",
    "choices": {
      "A": "Phục hồi máy ảo",
      "B": "Giám sát máy ảo",
      "C": "Vòng đời ứng dụng",
      "D": "Tất cả đáp án đều sai"
    },
    "answer": "C"
  },
  {
    "id": 120,
    "text": "Câu 120: GoogleDrive là NOSQL dạng",
    "choices": {
      "A": "Hướng văn bản",
      "B": "Key/Value",
      "C": "Hệ cột",
      "D": "Không phải là NOSQL"
    },
    "answer": "D"
  }
];