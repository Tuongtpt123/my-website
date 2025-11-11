const questions = [
  {
    "id": 1,
    "text": "1. Hiện nay có bao nhiêu cách để phát triển ứng dụng cho thiết bị di động? Cách nào là cơ bản nhất mà người phát triển ứng dụng cho thiết bị di động phải học trước tiên?",
    "choices": {
      "A": "Có 4 cách để phát triển ứng dụng cho thiết bị di động. Cách phát triển ứng dụng trên nền tảng chéo (Cross platform) là cơ bản nhất",
      "B": "Có 5 cách để phát triển ứng dụng cho thiết bị di động. Cách phát triển ứng dụng trên nền tảng gốc (Native platform) là cơ bản nhất",
      "C": "Có 5 cách để phát triển ứng dụng cho thiết bị di động. Cách phát triển ứng dụng kiểu lập trình nhúng là cơ bản nhất",
      "D": "Có 4 cách để phát triển ứng dụng cho thiết bị di động. Cách phát triển ứng dụng lai (Hydrid Apps) là cơ bản nhất"
    },
    "answer": "B"
  },
  {
    "id": 2,
    "text": "2. Khái niệm trừu tượng (abstraction) trong lập trình gồm những thành phần như:",
    "choices": {
      "A": "Những môi trường phát triển phần mềm (SDE",
      "B": "Là những phần mềm nằm giữa phần cứng và môi trường phát triển ứng dụng như: menu, database, file systems, related runtime libraries, API,…",
      "C": "Máy ảo (Emulator",
      "D": "Là lớp (class) không thể được dùng để tạo ra các đối tượng như những lớp bình thường khác"
    },
    "answer": "B"
  },
  {
    "id": 3,
    "text": "3. IDE (integrated design environment hay integrated debugging environment) là:",
    "choices": {
      "A": "Một hệ điều hành hay một máy ảo (virtual machine) trên đỉnh của phần cứng, nó cho khả năng viết code một lần để phát triển ứng dụng chạy trên nhiều nền tảng",
      "B": "Một tổng thể (gồm cả phần cứng lẫn phần mềm) mà nó cung cấp toàn bộ các phương tiện để người lập trình máy tính phát triển phần mềm ứng dụng",
      "C": "Một phần mềm ứng dụng mà nó cung cấp toàn bộ các phương tiện để người lập trình máy tính phát triển phần mềm ứng dụng trên một hoặc nhiều nền tảng",
      "D": "Một môi trường lập trình hỗ trợ nhiều ngôn ngữ lập trình khác nhau để lập trình phát triển ứng dụng, sau đó biên dịch sang một ngôn ngữ trung gian (bytecode) và ứng dụng chỉ chạy trên một hệ điều hành"
    },
    "answer": "C"
  },
  {
    "id": 4,
    "text": "4. Kiến trúc Thin-Client Wireless Client-Server là:",
    "choices": {
      "A": "Kiến trúc mà khi client truyền thông với server, nó có thể thực thi vài việc và server thực hiện các việc khác. Vì vậy không cần kết nối mạng liên tục và ổn định",
      "B": "Kiến trúc mà ứng dụng được thực hiện bởi server. Vì vậy đòi hỏi client phải kết nối mạng liên tục và ổn định với server, tương ứng với tập các đặc tính kỹ thuật chung nhỏ nhất của các thiết bị và platform",
      "C": "Kiến trúc truyền thông theo giao thức TCP/IP",
      "D": "Kiến trúc truyền thông theo giao thức UDP"
    },
    "answer": "B"
  },
  {
    "id": 5,
    "text": "5. Ứng dụng lai (Hybrid application) là ứng dụng như thế nào?",
    "choices": {
      "A": "Là ứng dụng chỉ cần lập trình một lần trên một môi trường và có thể chạy trên nhiều nền tảng khác nhau",
      "B": "Là ứng ứng có thể chạy đồng thời trên máy tính PC, trên Smart phone và Tablet",
      "C": "Là ứng dụng thể chạy đồng thời trên máy tính PC, trên Smart phone, Tablet và Mobile web",
      "D": "Là ứng dụng cho thiết bị di động chạy trên nền web, được lập trình trên một môi trường phát triển chạy trên các thiết bị di động với các nền tảng khác nhau"
    },
    "answer": "D"
  },
  {
    "id": 6,
    "text": "6. Quá trình phát triển của mạng viễn thông di động trải qua các thế hệ 1G, 2G, 3G, 4G, 5G. Sự chuyển đổi từ chuyển từ kỹ thuật tương tự (analog) sang kỹ thuật số (digital) điễn ra trong thế hệ nào?",
    "choices": {
      "A": "2G",
      "B": "3G",
      "C": "4 G",
      "D": "Áp dụng kỹ thuật số ngay từ đầu"
    },
    "answer": "A"
  },
  {
    "id": 7,
    "text": "7. Phân biệt mạng Piconet và Scatternet trong kỹ thuật Bluetooth",
    "choices": {
      "A": "Scatternet là mạng liên kết các thiết bị cùng cấp, Piconet là mạng liên kết giữa các Scatternet",
      "B": "Piconet là mạng liên kết các thiết bị cùng cấp,  Scatternet là mạng liên kết giữa các Piconet",
      "C": "Piconet là mạng liên kết các thiết bị cùng loại,  Scatternet là mạng liên kết giữa các thiết bị khác loại",
      "D": "Piconet là mạng liên kết các thiết bị khác loại,  Scatternet là mạng liên kết giữa các thiết bị cùng loại"
    },
    "answer": "B"
  },
  {
    "id": 8,
    "text": "8. Điện thoại Android đầu tiên tên gì? Ra mắt năm nào?",
    "choices": {
      "A": "T-Mobile G1 – 1, 2007",
      "B": "Nexus – one, 2008",
      "C": "T-Mobile G1 – 1, 2008",
      "D": "HTC One, 2008"
    },
    "answer": "C"
  },
  {
    "id": 9,
    "text": "9. Mỗi phiên bản của hệ điều hành Android có 3 tên đại diện là gì? Cho biết các tên này ứng với phiên bản mới nhất hiện nay (tính đến tháng 08/2023)?",
    "choices": {
      "A": "3 tên đại diện cho phiên bản là: Release number, Target  name và API level. Tương ứng với phiên bản mới nhật hiện nay là Release number = 14, Target name = S và API level = 34",
      "B": "3 tên đại diện cho phiên bản là: Version number, Target name và API. Tương ứng với phiên bản mới nhật hiện nay là Version number = 12.0, Target name = S và API = 31",
      "C": "3 tên đại diện cho phiên bản là: Target, Version name và API level. Tương ứng với phiên bản mới nhật hiện nay là Target = 12L, Release name = Sv2 và API level = 32",
      "D": "3 tên đại diện cho phiên bản là: Target, Release name và API level. Tương ứng với phiên bản mới nhật hiện nay là Target = 13, Release name = Tiramisu và API level = 33"
    },
    "answer": "D"
  },
  {
    "id": 10,
    "text": "10. Kiến trúc của hệ điều hành Android bao gồm các tầng như sau:",
    "choices": {
      "A": "Linux Kernel; Library - Android runtime; Application Framework; Applications",
      "B": "Linux Kernel; Library; Android runtime; Application Framework; Applications",
      "C": "Unix Kernel; Library; Android runtime; Applications",
      "D": "Linux Kernel; Application Framework; Virtual machine; Applications"
    },
    "answer": "A"
  },
  {
    "id": 11,
    "text": "11. Một trong các ưu điểm của nền tảng Android là tính năng mở, tính năng mở có nghĩa là:",
    "choices": {
      "A": "Mã nguồn mở",
      "B": "Không tốn phí cho môi trường phát triển ứng dụng",
      "C": "Có thể chạy thử phần mềm trực tiếp trên máy thật trong khi lập trình phát triển",
      "D": "Tất cả các câu trả lời đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 12,
    "text": "12. Trong 6 thành phần của ứng dụng Android có 4 thành phần chính cấu thành ứng dụng là:",
    "choices": {
      "A": "Activity, Service, Broadcast Receiver và Content Provider là 4 thành phần chính cấu thành nên ứng dụng Android, cần khai báo trong AndroidManifest",
      "B": "Activity, Service, Broadcast Receiver và Intent là 4 thành phần chính cấu thành nên ứng dụng Android, cần khai báo trong AndroidManifest",
      "C": "Activity, Service, Intent và Content Provider là 4 thành phần chính cấu thành nên ứng dụng Android, cần khai báo trong AndroidManifest",
      "D": "Activity, Intent, Broadcast Receiver và Content Provider là 4 thành phần chính cấu thành nên ứng dụng Android, cần khai báo trong AndroidManifest"
    },
    "answer": "A"
  },
  {
    "id": 13,
    "text": "13. Activity là  thành phần trong một ứng dụng Android:",
    "choices": {
      "A": "Trong mỗi ứng dụng đều phải có Activity",
      "B": "Mỗi Activity tương ứng với một giao diện người dùng",
      "C": "Một ứng dụng có thể có một hoặc nhiều Activity",
      "D": "Tất cả các câu trả lời đúng"
    },
    "answer": "D"
  },
  {
    "id": 14,
    "text": "14. Khi mở project mới ta cần khai báo chọn bao nhiên phiên bản, những phiên bản nào ? Tại sao ?",
    "choices": {
      "A": "Cần khai báo 3 phiên bản: 1 để biên dịch (mới nhất, mặc định), 1 phiên bản cũ nhất có thể chạy được ứng dụng và 1 phiên bản trung gian để chạy thử ứng dụng",
      "B": "Cần khai báo từ 3 phiên bản trở lên: 1 để biên dịch (mới nhất), 1 phiên bản cũ nhất có thể chạy được ứng dụng và các phiên bản trung gian để chạy thử ứng dụng bằng máy ảo",
      "C": "Cần khai báo 2 phiên bản: 1 để biên dịch (mới nhất, mặc định), 1 phiên bản cũ nhất có thể chạy được ứng dụng",
      "D": "Cần khai báo 1 phiên bản mới nhất (mặc định"
    },
    "answer": "C"
  },
  {
    "id": 15,
    "text": "15. Explicit Intents là:",
    "choices": {
      "A": "Intent được chỉ xác định hành động cần thực hiện khi không chỉ định thành phần  cần gọi để xử lý",
      "B": "Intent cần khai báo rõ các thuộc tính action, data",
      "C": "Intent thường được sử dụng để khởi chạy các ứng dụng đã được cài đặt trên thiết bị",
      "D": "Intent đã được xác định thuộc tính component, nghĩa là đã chỉ rõ thành phần sẽ nhận và xử lý. Explicit Intent thường được sử dụng để khởi chạy các activity trong cùng một ứng dụng"
    },
    "answer": "D"
  },
  {
    "id": 16,
    "text": "16. Lập trình giao diện người dùng mức cao là:",
    "choices": {
      "A": "Cách tạo giao diện người dùng tùy biến bằng các đối tượng do người lập trình tạo ra",
      "B": "Cách lập trình xây dựng giao diện người dùng sử dụng các kiểu giao diện được định nghĩa (Layout) và các đối tượng có sẵn (View) trong Android SDK",
      "C": "Cách lập trình sử dụng công cụ kéo thả trong Android Studio",
      "D": "Cách lập trình viết cách viết code mà không dùng công cụ kéo thả trong Android Studio"
    },
    "answer": "B"
  },
  {
    "id": 17,
    "text": "17. Khi sử dụng LinearLayout cần phải khai báo thêm thuộc tính gì?",
    "choices": {
      "A": "Thuộc tính android:orientation",
      "B": "Thuộc tính android:layout_gravity",
      "C": "Không bắt buột khai báo thêm",
      "D": "Thuộc tính android:layout_width và android:layout_height"
    },
    "answer": "A"
  },
  {
    "id": 18,
    "text": "18. Trong Android, để Activity (giả sử viết bằng ngôn ngữ Java) hiển thị một giao diện ta sử dụng phương thức và câu lệnh như sau (Giả sử “giaodien” là tên giao diện được chọn để hiển thị).:",
    "choices": {
      "A": "setLayoutView(R.layout.giaodien);",
      "B": "setIntentView(R.layout.giaodien);",
      "C": "setContentView(R.layout.giaodien);",
      "D": "setContentLayout(R.layout.giaodien);"
    },
    "answer": "C"
  },
  {
    "id": 19,
    "text": "19. Để sử dụng đối tượng ImageView ta phải lưu tên tập tin của ảnh muốn hiển thị vào đâu và câu lệnh bắt buộc (không mặc định) trong mã nguồn xml là gì?",
    "choices": {
      "A": "Lưu ảnh vào thư mục res/drawable và câu lệnh xml bắt buộc phải khai báo là android:src=”@drawable/”tên tập tin ảnh”",
      "B": "Lưu ảnh vào thư mục res/layout và câu lệnh xml bắt buộc phải khai báo là android:contentDescription=”@drawable/”tên tập tin ảnh”",
      "C": "Lưu ảnh vào thư mục res/mipmap và câu lệnh xml bắt buộc phải khai báo là android:src=”@drawable/”tên tập tin ảnh”",
      "D": "Tất cả A, B và C đều sai"
    },
    "answer": "A"
  },
  {
    "id": 20,
    "text": "20. Cách ánh xạ một View trong tập tin Layout.xml vào mã nguồn Java của Activity tương ứng? Cho ví dụ.",
    "choices": {
      "A": "Dùng phương thức setContentView(R.id.tên định danh của View); Ví dụ:",
      "B": "Dùng phương thức findViewById(R.id.tên định danh của View); Ví dụ:",
      "C": "Dùng phương thức getViewById(R.layout.R.layout.tên định danh của View); Ví dụ:",
      "D": "Tất cả A, B và C đều sai"
    },
    "answer": "B"
  },
  {
    "id": 21,
    "text": "21. Bằng cách gom nhóm các RadioButton vào một RadioGroup cho phép:",
    "choices": {
      "A": "Có thể check nhiều RadioButton trong cùng một nhóm",
      "B": "Chỉ được check chọn một RadioButton trong cùng một nhóm",
      "C": "Khi check một RadioButton thì tất cả các RadioButton trong cùng nhóm đều được check",
      "D": "Tuỳ thuộc vào giá trị của thuộc tính check được khai báo trong tập tin layout mà các RadioButton có thể bị hạn chế chỉ check chọn một RadioButton trong cùng một nhóm hay có thể check chọn cùng lúc nhiều RadioButton trong cùng một nhóm"
    },
    "answer": "B"
  },
  {
    "id": 22,
    "text": "22. Người lập trình phát triển ứng dụng có thể kết hợp giao diện mức cao và mức thấp bằng cách nào?",
    "choices": {
      "A": "Trong giao diện mức cao ta có thể lồng vào giao diện mức thấp",
      "B": "Trong giao diện mức thấp ta có thể lồng vào giao diện mức cao",
      "C": "Từ Activity có giao diện mức thấp gọi gọi Activity có giao diện mức cao hoặc ngược lại",
      "D": "Tất cả các câu trả lời đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 23,
    "text": "23. Các bước lập trình  xử lý tương tác của người dùng lên các View như sau:",
    "choices": {
      "A": "Khai báo View trong Layout  Ánh xạ View này vào Activity tương ứng bằng phương thức findViewById(R.id.<tên định danh của View>)  Sử dụng phương  thức setOnClickListener() kết hợp với onClick(",
      "B": "Khai báo View trong Layout  Tạo phương thức xử lý tương tác của người dùng trong Activity tương ứng, giả sử phương thức tương tác này được đặt tên là tên là “ptTuongtac(View view)”  Khai báo thuộc tính onClick cho View trong tập tin Layout như sau: android:onClick=” ptTuongtac”",
      "C": "Các câu trả lời A và B đều đúng",
      "D": "Câu trả lời A đúng và câu trả lời B sai"
    },
    "answer": "C"
  },
  {
    "id": 24,
    "text": "24. Menu rất hữu ích để hiển thị tùy chọn bổ sung mà không trực tiếp nhìn thấy trên giao diện của một Activity. Trong đó, Context Menu có chức năng và đặt điểm là:",
    "choices": {
      "A": "Hiển thị những thông tin liên quan đến Activity hiện tại. Menu này thường nằm ở góc phải phía trên của giao diện. Để kích hoạt menu này chỉ cần nhấn vào biểu tượng của nó",
      "B": "Hiển thị những thông tin liên quan đến một đối tượng View cụ thể, để kích hoạt menu này người dùng cần nhấn và giữ đối tượng View mà nó liên kết",
      "C": "Hiển thị những thông tin liên quan đến một đối tượng View cụ thể, để kích hoạt menu này người dùng chỉ cần nhấn vào đối tượng View mà nó liên kết",
      "D": "Hiển thị những thông tin liên quan đến ứng dụng. Menu này thường nằm ở góc phải phía trên của giao diện  của tất cả Activity của ứng dụng. Để kích hoạt menu này chỉ cần nhấn vào biểu tượng của nó"
    },
    "answer": "B"
  },
  {
    "id": 25,
    "text": "25. Các bước để thực hiện một Intent ngầm (Implicit Intent) gồm:",
    "choices": {
      "A": "Bước 1: Định nghĩa dữ liệu kèm theo dưới dạng Uri; Bước 2: Khai báo một Intent với 1 Action cụ thể và Uri đã định nghĩa; Bước 3: Gọi hàm startActivity() hoặc startActivityForResult () để khởi động Intent",
      "B": "Bước 1: Khai báo một Intent với 1 Action cụ thể; Bước 2: Gọi hàm startActivity() hoặc startActivityForResult () để khởi động Intent; Bước 3: Khai báo View cần thiết để thể hiện đáp ứng",
      "C": "Bước 1: Khai báo View cần thiết để thể hiện đáp ứng; Bước 2: Khai báo một Intent với 1 Action cụ thể; Bước 3: Gọi hàm startActivity() hoặc startActivityForResult () để khởi động Intent",
      "D": "Bước 1: Khai báo một Intent với 1 Action cụ thể; Bước 2: Định nghĩa dữ liệu kèm theo dưới dạng Bundle;  Bước 3: Gọi hàm startActivity() hoặc startActivityForResult () để khởi động Intent"
    },
    "answer": "A"
  },
  {
    "id": 26,
    "text": "26. Trong thiết bị di động, bộ nhớ trong và bộ nhớ ngoài được phân biệt như sau:",
    "choices": {
      "A": "Bộ nhớ trong là bộ nhớ RAM, bộ nhớ ngoài là bộ nhớ ROM",
      "B": " Bộ nhớ trong là bộ nhớ được gắn sẵn trong thiết bị, bộ nhớ ngoài là SDCard",
      "C": "Bộ nhớ trong gồm RAM và bộ nhớ được gắn sẵn trong thiết bị, bộ nhớ ngoài là SDCard",
      "D": "Bộ nhớ trong chỉ được dùng để lưu dữ liệu riêng của mỗi ứng dụng, bộ nhớ ngoài dùng để lưu dữ liệu dùng chung (thường là SDCard, nhưng cũng có thể là bộ nhớ được gắn sẵn"
    },
    "answer": "D"
  },
  {
    "id": 27,
    "text": "27. Đối tượng Freferences thường dùng để lưu trữ, điều chỉnh và phục hồi nội dung gì?",
    "choices": {
      "A": "Tập các tính năng của ứng dụng được người dùng tuỳ chọn",
      "B": "Các thiết lập của người dùng trong một ứng dụng",
      "C": "Tập các hoạt động của ứng dụng  được người dùng tuỳ chọn",
      "D": "Tất cả A, B, C đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 28,
    "text": "28. Các đối tượng được dùng để xây dựng thiết lập trong Android gồm:",
    "choices": {
      "A": "ListboxPreference; ViewPreference; FramePreference",
      "B": "CheckBoxPreference; ListPreference; EditextPreference",
      "C": "PreferenceFragment; PreferenceActivity",
      "D": "Tất cả A, B và C đều sai"
    },
    "answer": "B"
  },
  {
    "id": 29,
    "text": "29. Tạo bảng: tên là Lop_CT274, gồm 7 cột: ID, MSSV, Họ_Tên, Email, Diem_KT, Điểm_Thi, Điểm_TH . Hãy viết chuỗi tạo bảng.",
    "choices": {
      "A": "String CreatetbSchool=\"create table Lop_CT274 (+”id integer primary key autoincrement”,+”MSSV” text, +“Ho_Ten” text, +“Email” text, +“Diem_KT” float, +“Diem_Thi” float, +“Diem_TH” float)\";",
      "B": "String CreatetbSchool=\"create table Lop_CT274 (\"+\"id integer primary key autoincrement,\"+“MSSV text, \"+“Ho_Ten text, \"+“Email text, \"+“Diem_KT float, \"+“Diem_Thi float, \"+“Diem_TH float)\";",
      "C": "String CreatetbSchool=\"table Lop_CT274 (\"+\"id integer key autoincrement,\"+“MSSV text, \"+“Ho_Ten text, \"+“Email text, \"+“Diem_KT float, \"+“Diem_Thi float, \"+“Diem_TH float)\";",
      "D": "Các câu khác với câu này đều sai"
    },
    "answer": "B"
  },
  {
    "id": 30,
    "text": "30. Để thao tác với cơ sở dữ liệu SQLite trên Android ta sử dụng các đối tượng nào?",
    "choices": {
      "A": "SQLiteOpenController và SQLiteDatabase",
      "B": "SQLiteOpenHelper và SQLiteDatabase",
      "C": "SQLiteData và SQLiteOpenManager",
      "D": "SQLiteOpenHelper và SQLiteDataContent"
    },
    "answer": "B"
  },
  {
    "id": 31,
    "text": "31. Trong Android có nhiều Content Provider hữu dụng được dựng sẵn như  CallLog, Contacts, MediaStore, Settings. Để truy vấn một Content Provider, chẳng hạn như lấy tất cả các contacts từ một Contacts content provider, chúng ta khai báo URI như sau:",
    "choices": {
      "A": "contentprovider://contacts/people",
      "B": "provider://contacts/people",
      "C": "content://contacts/people",
      "D": "provider://content/contacts/people"
    },
    "answer": "C"
  },
  {
    "id": 32,
    "text": "32. Để  xóa bảng trong cơ sở dữ liệu SQLite, giả sử có tên là db, ta áp dụng phương thức:",
    "choices": {
      "A": "db.deleteDatabase(<tên Bảng>",
      "B": "db.execSQL(“Chuỗi xóa bảng”",
      "C": "db.delete(“Tên bảng”",
      "D": "db.deleteTable(<tên Bảng>"
    },
    "answer": "B"
  },
  {
    "id": 33,
    "text": "33. Để tạo ra một đối tượng con trỏ dùng để đọc tin nhắn trong  thư mục inbox ta dùng phương thức nào? Cú pháp?",
    "choices": {
      "A": "Dùng phương thức getSmsContent và phương thức query, với cú pháp như sau: Cursor c = getSmsContent().query(SMS_INBOX, null, null, null, null);",
      "B": "Dùng phương thức getContent và phương thức query, với cú pháp như sau:      Cursor c = getContent().query(SMS_INBOX, null, null, null, null);",
      "C": "Dùng phương thức getContent và phương thức getquery, với cú pháp như sau:    Cursor c = getContent().getquery(SMS_INBOX, null, null, null, null);",
      "D": "Dùng phương thức getContentResolver và phương thức query, với cú pháp như sau: Cursor c = getContentResolver().query(SMS_INBOX, null, null, null, null);"
    },
    "answer": "D"
  },
  {
    "id": 34,
    "text": "34. Yêu cầu GET trong giao thức HTTP có đặc điểm gì?",
    "choices": {
      "A": "Yêu cầu thông tin - dữ liệu được chuyển đi như là một phần của URL, được dùng để lấy dữ liệu từ server và đây là phương thức mặc định",
      "B": "Yêu cầu thông tin - dữ liệu được chuyển đi trong luồng riêng biệt, dùng để gởi dữ liệu đến server",
      "C": "Yêu cầu thông tin - dữ liệu được chuyển đi như là một phần của URL, được dùng để gởi dữ liệu đến server và đây là phương thức mặc định",
      "D": "Yêu cầu thông tin - dữ liệu được chuyển đi với 2 phần riêng biệt gồm URL và dữ liệu trong cùng một luồng, dùng để gởi yêu cầu đến server và nhận dữ liệu từ server"
    },
    "answer": "A"
  },
  {
    "id": 35,
    "text": "35. Để có thể thực hiện các cuộc giao tiếp, một trong hai quá trình phải công bố số hiệu cổng của socket mà mình sử dụng. Ngoài số hiệu cổng, hai bên giao tiếp còn phải biết địa chỉ IP của nhau. Cho biết vai trò của số hiệu cổng và địa chỉ IP.",
    "choices": {
      "A": "Số hiệu cổng và IP là một cặp để xác định server hoặc client",
      "B": "Địa chỉ IP giúp phân biệt các thiết bị trên mạng TCP/IP. Trong khi số hiệu cổng dùng để phân biệt các quá trình khác nhau trên cùng một máy tính",
      "C": "Cổng đề xác định đường truyền, địa chỉ IP để xác định thiết bị trên mạng TCP/IP",
      "D": "Số hiệu cổng và địa chỉ IP đều bắt buộc khai báo trong mọi trường hợp cho cả client và server"
    },
    "answer": "B"
  },
  {
    "id": 36,
    "text": "36. Hoạt động mạng là yêu cầu cơ bản và đã được thiết kế sẵn cho hầu hết các thiết bị di động. Như vậy, trong trường hợp nào người lập trình phát triển ứng dụng di động cần phải lập trình kết nối mạng cho thiết bị di động?",
    "choices": {
      "A": "Khi xây dựng một ứng dụng có các chức năng cần phải kết nối mạng, người phát triển phần mềm cần lập trình mạng cho ứng dụng của mình",
      "B": "Nguyên tắc chung cho các ứng dụng di động là phải có kết nối mạng, nên người lập trình phát triển ứng dụng di động luôn luôn phải thực hiện nội dung này trong các ứng dụng của mình",
      "C": "Vì các hoạt động mạng đã được thiết kế sẵn trên tất cả các thiết bị di động, nên người lập trình ứng dụng di động không cần lập trình kết nối mạng",
      "D": "Người lập trình phát triển ứng dụng di động luôn luôn phải thực hiện nội dung này trong khi lập trình, nhằm mục đích liên kết lấy tài nguyên trên mạng và chạy thử ứng dụng trong thời gian lập trình"
    },
    "answer": "A"
  },
  {
    "id": 37,
    "text": "37. Các bước lập trình để kiểm tra tình trạng kết nối mạng:",
    "choices": {
      "A": "Bước 1. Tạo ra đối tượng quản lý kết nối với lớp ConnectivityActive với câu lệnh      ConnectivitySystem qlkn = (ConnectivitySyctem)getSystem(Context.CONNECTIVITY_NETWOR;",
      "B": "Bước 1. Tạo ra đối tượng quản lý kết nối với lớp ConnectivityActive với câu lệnh      ConnectivityNetwork qlkn = (ConnectivityNetwork)getService(Context.CONNECTIVITY_NETWOR;",
      "C": "Bước 1. Tạo ra đối tượng quản lý kết nối với lớp ConnectivityActive với câu lệnh      ConnectivityActive qlkn = (ConnectivityActive)getSystemService(Context.CONNECTIVITY_NETWOR;",
      "D": "Tất cả A, B và C đều sai"
    },
    "answer": "C"
  },
  {
    "id": 38,
    "text": "38. Lớp nào được sử dụng để mở 1 kết nối http với URL từ xa? Cú pháp?",
    "choices": {
      "A": "Có thể dùng lớp HttpConnection và hàm getConnection(), cú pháp:",
      "B": "Có thể dùng lớp URLConnection và hàm openConnection(), cú pháp:",
      "C": "Có thể dùng lớp ConnectionUrl và hàm urlConnection(), cú pháp:",
      "D": "Tất cả A, B và C đều sai"
    },
    "answer": "B"
  },
  {
    "id": 39,
    "text": "39. Cấu trúc ngôn ngữ JSON?",
    "choices": {
      "A": "Thông điệp JSON được chia thành các đối tượng (JSONObject).  Mỗi đối tượng được bắt đầu và kết thúc bằng một cặp ngoặc quăn ({ }). Các thông tin trong một dãy hay đối tượng bao gồm tập hợp các cặp khóa/giá trị (Key/Value",
      "B": "Thông điệp JSON được chia thành các dãy (JSONArray).  Mỗi dãy được bắt đầu và kết thúc bởi cặp ngoặc vuông ([ ]). Các thông tin trong một dãy hay đối tượng bao gồm tập hợp các cặp khóa/giá trị (Key/Value",
      "C": "Thông điệp JSON là các đối tượng (JObject). Trong mỗi đối tượng có các dãy (JArray) và các thông tin riêng lẻ.  Mỗi đối tượng được bắt đầu và kết thúc bằng một cặp ngoặc quăn ({ }) và mỗi dãy được bắt đầu và kết thúc bởi cặp ngoặc vuông ([ ]). Các thông tin trong một dãy hay đối tượng bao gồm tập hợp các cặp tên/giá trị (Name/Value",
      "D": "Thông điệp JSON được chia thành các dãy (JSONArray) và đối tượng (JSONObject).  Mỗi dãy được bắt đầu và kết thúc bởi cặp ngoặc vuông ([ ]) và mỗi đối tượng được bắt đầu và kết thúc bằng một cặp ngoặc quăn ({ }). Các thông tin trong một dãy hay đối tượng bao gồm tập hợp các cặp khóa/giá trị (Key/Value"
    },
    "answer": "D"
  },
  {
    "id": 40,
    "text": "40. Để lập trình phát triển ứng dụng trên nền tảng gốc iOS, người lập trình gặp khó khăn gì?",
    "choices": {
      "A": "Ngôn ngữ lập trình được đánh giá là phức tạp",
      "B": "Tốn chi phí để đăng tuyển vào chương trình người phát triển iOS (tải SDK, cài đặt môi trường phát triển, kiểm thử trên thiết bị thật, đưa lên App Store",
      "C": "Môi trường phát triển ứng dụng iOS chỉ có thể cài đặt trên máy tính chạy hệ điều hành Mac OS, (Macintosh, Hackintosh), version 10.6.8 trở lên",
      "D": "Tất cả A, B và C đều đúng"
    },
    "answer": "D"
  }
];