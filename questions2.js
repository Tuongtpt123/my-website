const questions = [
  {
    "id": 1,
    "text": "1. Kiến trúc Thick-Client Wireless Client-Server là:",
    "choices": {
      "A": "Kiến trúc truyền thông theo giao thức UDP",
      "B": "Kiến trúc truyền thông theo giao thức TCP/IP",
      "C": "Kiến trúc này ứng dụng được thực hiện bởi server. Vì vậy đòi hỏi client phải kết nối mạng liên tục và ổn định, tương ứng với tập các đặc tính kỹ thuật chung nhỏ nhất của các thiết bị và platform",
      "D": "Kiến trúc mà khi client truyền thông với server, nó có thể thực thi vài việc và server thực hiện các việc khác. Vì vậy không cần kết nối mạng liên tục và ổn định"
    },
    "answer": "D"
  },
  {
    "id": 2,
    "text": "2. Giả sử một cơ sở dữ liệu SQLite tên là db có bảng dữ liệu tên là Lop_CK20, bao gồm các thuộc tính như: ID, MSSV, Ho_Ten, KT, THI, TH. Hãy viết lệnh truy vấn các sinh viên có điểm tổng hợp (TH) trên 7 điểm và xếp theo thứ tự giảm dần.",
    "choices": {
      "A": "Cursor ds7 = db.query (Lop_CK20, String [] {ID, MSSV, KT, THI, TH}, TH”>7”, null, null, null, TH+”DESC”",
      "B": "Cursor ds7 = db.query (Lop_CK20, String [] {MSSV, Ho_Ten, KT, THI, TH}, TH,”>7”, null, null, TH+”DESC”);",
      "C": "Cursor ds7 = db.query (Lop_CK20, String [] {ID, MSSV, Ho_Ten, KT, THI, TH}, TH”>?”,”7”, null, null, TH+”DESC”);",
      "D": "String[] ds7 = db.query (Lop_CK20, String [] {ID, MSSV, Ho_Ten, TH}, TH,”>7”, null, null, TH+”DESC”);"
    },
    "answer": "C"
  },
  {
    "id": 3,
    "text": "3. Visible process là tiến trình của ứng dụng mà:",
    "choices": {
      "A": "Activity đang hiển thị đối với người dùng trong thời gian phương thức onPause() được gọi mà sau đó chưa gọi phương thức nào khác",
      "B": "Activity đang hiển thị đối với người dùng từ lúc phương thức onCreate() được gọi đến phương thức onStop() hoặc onDestroy(",
      "C": "Activity đang hiển thị đối với người dùng từ lúc phương thức onStar() của Activity được gọi đến phương thức onPause() hoặc onStop(",
      "D": "Activity đang hiển thị đối với người dùng từ lúc phương thức onCreate() hoặc onResume()  được gọi đến phương thức onStop() hoặc onDestroy("
    },
    "answer": "A"
  },
  {
    "id": 4,
    "text": "4. Nền tảng Android ra mắt vào năm nào?",
    "choices": {
      "A": "2005",
      "B": "2006",
      "C": "2007",
      "D": "2008"
    },
    "answer": "C"
  },
  {
    "id": 5,
    "text": "5. Máy ảo Java,  JVM (Java Virtual Machine), là:",
    "choices": {
      "A": "Một phần mềm mô phỏng giúp thử nghiệm các ứng dụng trước khi cho chạy trên thiết bị thật",
      "B": "Bộ biên dịch mã bytecode, nó có nhiệm vụ chuyển mã bytecode của chương trình Java thành ngôn ngữ máy để chạy trên thiết bị di động",
      "C": "Bộ chuẩn hóa các chương trình Java cho các thiết bị di động khác nhau có thể có bộ vi xử lý và tập lệnh khác nhau",
      "D": "Tất cả các câu trả lời khác đều chưa đầy đủ hoặc không đúng"
    },
    "answer": "B"
  },
  {
    "id": 6,
    "text": "6. Trong dữ liệu SQLite, để thêm dữ liệu vào bảng ta thực hiện thủ tục gì?",
    "choices": {
      "A": "Khai báo 1 đối tượng InitialValues sau đó kết hợp với phương thức put để thêm dữ liệu vào các dòng cho từng cột",
      "B": "Khai báo 1 đối tượng ContentValues sau đó kết hợp với phương thức add để thêm dữ liệu vào các dòng cho từng cột",
      "C": "Khai báo 1 đối tượng ContentValues, kết hợp với phương thức put để thêm dữ liệu vào các dòng cho từng cột và sau đó dùng phương thức insert để cập nhật",
      "D": "Khai báo 1 đối tượng InitialValues, kết hợp với phương thức put để thêm dữ liệu vào các dòng cho từng cột và sau đó dùng phương thức update để cập nhật"
    },
    "answer": "C"
  },
  {
    "id": 7,
    "text": "7. Nền tảng (platform) là:",
    "choices": {
      "A": "Sự liên kết giữa hệ điều hành và các trừu tượng",
      "B": "Sự liên kết giữa cấu hình phần cứng, hệ điều hành, ngôn ngữ lập trình và các trừu tượng",
      "C": "Sự liên kết giữa cấu hình phần cứng và hệ điều hành",
      "D": "Sự liên kết giữa hệ điều hành, ngôn ngữ lập trình và các trừu tượng"
    },
    "answer": "B"
  },
  {
    "id": 8,
    "text": "8. Khung (Frameworks) là:",
    "choices": {
      "A": "Một bộ gồm platform, công cụ quản lý cần thiết, ngôn ngữ lập trình, các trừu tượng",
      "B": "Một môi trường tích hợp (IDE) trên một platform với các công cụ tương ứng",
      "C": "Một bộ gồm môi trường phát triển phần mềm (SDE) và công cụ quản lý cần thiết",
      "D": "Một bộ gồm môi trường phát triển tích hợp (IDE) và công cụ quản lý cần thiết"
    },
    "answer": "B"
  },
  {
    "id": 9,
    "text": "9. Để khắc phục khó khăn do đa nền tảng (nhà phát triển ứng dụng phải mất nhiều thời gian và công sức lập trình ứng dụng trên các môi trường và ngôn ngữ khác nhau cho các nền tảng khác nhau) người ta đã thực hiện giải pháp sau:",
    "choices": {
      "A": "Mã nguồn của ứng dụng được viết bằng một ngôn ngữ nhất định, sau đó được biên dịch sang mã ByteCode và chạy trên máy ảo trong thời gian thực",
      "B": " Phát triển các môi trường tích hợp chéo (Cross platform hoặc Cross framework",
      "C": "Phát triển các ứng dụng lai (Hydrid Apps) hoặc sử dụng các môi trường phát triển ứng dụng không cần code",
      "D": "Tất cả các câu trả lời đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 10,
    "text": "10. Khi mở project mới ta cần khai báo chọn bao nhiên phiên bản, những phiên bản nào ? Tại sao ?",
    "choices": {
      "A": "Cần khai báo 3 phiên bản: 1 để biên dịch (mới nhất, mặc định), 1 phiên bản cũ nhất có thể chạy được ứng dụng và 1 phiên bản trung gian để chạy thử ứng dụng",
      "B": "Cần khai báo từ 3 phiên bản trở lên: 1 để biên dịch (mới nhất), 1 phiên bản cũ nhất có thể chạy được ứng dụng và các phiên bản trung gian để chạy thử ứng dụng bằng máy ảo",
      "C": "Cần khai báo 2 phiên bản: 1 để biên dịch (mới nhất, mặc định), 1 phiên bản cũ nhất có thể chạy được ứng dụng",
      "D": "Cần khai báo 1 phiên bản mới nhất (mặc định"
    },
    "answer": "C"
  },
  {
    "id": 11,
    "text": "11. Kiến trúc Android gồm các tâng nào?",
    "choices": {
      "A": "Gồm 5 tầng: Tầng Linux Kernel; Tầng Library; Tầng Android runtime; Tầng Application Framework; Tầng Applications",
      "B": "Gồm 4 tầng: Tầng Linux Kernel; Tầng Library và Android runtime; Tầng Application Framework; Tầng Applications",
      "C": "Gồm 3 tầng: Tầng Linux Kernel - Android runtime; Tầng Application Framework; Tầng Applications",
      "D": "Gồm 4 tầng: Tầng Linux Kernel - Android runtime; Tầng Library; Tầng Application Framework; Tầng Applications"
    },
    "answer": "B"
  },
  {
    "id": 12,
    "text": "12. Vai trò và cách tạo một Thread:",
    "choices": {
      "A": "Vai trò: sinh ra các tiến trình (luồng) cho một ứng dụng; Cách tạo: Khai báo một lớp kế thừa của lớp Thread và dùng phương thức start() để khởi động tiến trình",
      "B": "Vai trò: chỉ được dùng để sinh ra các tiến trình (luồng) khi có nhiều tiến trình chạy đồng thời trong một ứng dụng; Cách tạo: Khai báo một lớp kế thừa của lớp Thread và dùng phương thức setcurrent() để khởi động tiến trình",
      "C": "Vai trò: sinh ra các tiến trình (luồng) có thể chạy đồng thời trong một ứng dụng; Cách tạo: Khai báo một lớp kế thừa của lớp Thread và dùng phương thức run() để khởi động tiến trình",
      "D": "Tất cả các câu trả lời khác với câu này đều sai"
    },
    "answer": "C"
  },
  {
    "id": 13,
    "text": "13. Android cung cấp thêm khả năng lập trình giao diện mức thấp để người lập trình có thể tự do vẽ bất cứ thứ gì mình muốn, để vẽ ta cần phải gọi bốn thành phần cơ bản:",
    "choices": {
      "A": "Đối tượng kiểu Image; đối tượng Canvas; đối tượng kiểu Bitmap và đối tượng Graphic",
      "B": "Đối tượng kiểu Paint; đối tượng Canvas; đối tượng kiểu Bitmap và đối tượng chứa nét vẽ cần vẽ ra (có thể là Rect, Path, Bitmap…",
      "C": "Đối tượng kiểu Paint; đối tượng SurfaceView; đối tượng kiểu Bitmap và đối tượng chứa nét vẽ cần vẽ ra (có thể là Rect, Path, Bitmap…",
      "D": "Đối tượng View; đối tượng Canvas; đối tượng kiểu Bitmap và đối tượng chứa nét vẽ cần vẽ ra (có thể là Rect, Path, Bitmap…"
    },
    "answer": "B"
  },
  {
    "id": 14,
    "text": "14. Ngoài vẽ những hình ảnh đơn giản còn có thể vẽ những hình ảnh có sẵn. Android hỗ trợ hình ảnh định dạng PNG, để sử dụng chỉ cần chép vào thư mục drawable là chương trình có thể gọi. Ta có thể dùng câu lệnh như thế nào? Trong các câu trả lời, \"tên\" là tên ảnh png đã lưu trong thư mục drawable và được gọi.",
    "choices": {
      "A": "Bitmap bitmap = BitmapFactory(getResources(),R.drawable.tên);",
      "B": "Bitmap bitmap = decodeResource(getResources(),R.drawable.tên);",
      "C": "Bitmap bitmap = Bitmap.decodeResource(getResources(),R.drawable.tên);",
      "D": "Bitmap bitmap = BitmapFactory.decodeResource(getResources(),R.drawable.tên);"
    },
    "answer": "D"
  },
  {
    "id": 15,
    "text": "15. Trong Android có các cách lưu dữ liệu nào?",
    "choices": {
      "A": "Trong bộ nhớ trong, thẻ nhớ, trong tài khoản dịch vụ đám mây,  dùng cơ sở dữ liệu SQLite, Content Provider",
      "B": "Bằng đối tượng Sharedpreferences , hoặc Hệ thống tập tin truyền thống, hoặc CSDL SQLite, hoặc Content Provider, hoặc định dạng XML hoặc JSON",
      "C": "Bằng tập tin XML, tập tin truyền thống, lập trình Java với SQLite, tài nguyên tĩnh, các thiết lập (setting), tập tin JSON",
      "D": "Trong bộ nhớ trong, thẻ nhớ, trong tài khoản dịch vụ đám mây,  dùng cơ sở dữ liệu SQLite, Content Provider, các thiết lập tuỳ chỉnh, tài khoản trên server"
    },
    "answer": "B"
  },
  {
    "id": 16,
    "text": "16. Mỗi đối tượng Preference mà người lập trình thêm vào được lưu trữ dưới dạng nào?",
    "choices": {
      "A": "Một cặp key-value mà hệ thống dùng để lưu một thiết lập trong một tập tin SharePreferences mặc định",
      "B": "Một cặp key-data mà hệ thống dùng để lưu một thiết lập trong một tập tin XML mặc định",
      "C": "Một tập tin XML tương ứng với lớp SharePreferences",
      "D": "Một cặp name-value mà hệ thống dùng để lưu một thiết lập trong một tập tin SharePreferences mặc định"
    },
    "answer": "A"
  },
  {
    "id": 17,
    "text": "17. Trong chu kỳ sống (vòng đời) của ứng dụng: Ứng dụng chỉ được gọi là kết thúc khi nào?",
    "choices": {
      "A": "Khi tất cả các Activity trong ứng dụng kết thúc",
      "B": "Khi gọi phương thức onDetroy(",
      "C": "Khi tất cả các Activity và các thành phần chạy ngầm khác trong ứng dụng kết thúc",
      "D": "Khi gọi phương thức onDetroy() và sau đó là phương thức finish("
    },
    "answer": "C"
  },
  {
    "id": 18,
    "text": "18. Android có nhiều Content Provider hữu dụng được dựng sẵn như  Browser, CallLog, Contacts, MediaStore, Settings. Để truy vấn một Content Provider, chẳng hạn như lấy tất cả các contacts từ một Contacts content provider, chúng ta khai báo như sau:",
    "choices": {
      "A": "contentprovider://contacts/people",
      "B": "provider://contacts/people",
      "C": "content://contacts/people",
      "D": "provider://conent/contacts/people"
    },
    "answer": "C"
  },
  {
    "id": 19,
    "text": "19. Dữ liệu SQLite được xây dựng trên một ứng dụng Android có đặc điểm như sau:",
    "choices": {
      "A": " Là dữ liệu dùng riêng cho ứng dụng, chỉ có thể truy vấn bởi ứng dụng đó",
      "B": "Có thể truy vấn bởi các ứng dụng khác",
      "C": "Một phiên bản CSDL có thể dùng cho nhiều phiên bản ứng dụng",
      "D": "Khi nâng cấp ứng dụng lên phiên bản mới ta không cần thiết phải khai báo phiên bản CSDL mới"
    },
    "answer": "A"
  },
  {
    "id": 20,
    "text": "20. Content Provider lưu dữ liệu bằng hình thức nào?",
    "choices": {
      "A": "Chỉ lưu bằng tập tin XML hoặc JSON với các cặp khoá-giá trị",
      "B": "Có thể sử dụng nhiều cách khác nhau để lưu dữ, dữ liệu có thể được lưu giữ trong một cơ sở dữ liệu, một file,…",
      "C": "Chỉ lưu dưới dạng tập tin",
      "D": "Chỉ lưu dưới dạng cơ sở dữ liệu SQLite"
    },
    "answer": "B"
  },
  {
    "id": 21,
    "text": "21. Phương thức sendDataMessage được dùng khi nào? Các đối số không null.",
    "choices": {
      "A": "Gởi dữ liệu bằng tin nhắn SMS, public void sendDataMessage (String destinationAddress, null, short destinationPort, byte[] data, null, null",
      "B": "Gởi dữ liệu bằng tin nhắn MMS, public void sendDataMessage (String destinationAddress, String scAddress, null, byte[] data, null, null",
      "C": "Gởi dữ liệu bằng tin nhắn SMS, public void sendDataMessage (String destinationAddress, String scAddress, short destinationPort, byte[] data, null, null",
      "D": "Tất cả các câu trả lời khác đều sai"
    },
    "answer": "A"
  },
  {
    "id": 22,
    "text": "22. Để xây dựng chương trình nhận tin nhắn, chương trình bao gồm một danh sách hiển thị tất cả tin nhắn trong Inbox, ta sử dụng lớp nào?",
    "choices": {
      "A": " ListActivity",
      "B": "ListArray",
      "C": "ArrayAdaptor",
      "D": "ListView"
    },
    "answer": "A"
  },
  {
    "id": 23,
    "text": "23. Trong URL sau: http://localhost:8080/myApp?first=joe&last=cool, hãy chọn câu giải thích đúng.",
    "choices": {
      "A": "http là giao thức; localhost là host; 8080 là port ; /myApp?first=joe&last=cool là tập tin",
      "B": "http là giao thức; localhost là host; 8080 là port ; /myApp là tập tin ; first=joe&last=cool là các cặp « khóa-giá trị » của yêu cầu",
      "C": "http là giao thức; localhost là host; 8080 là port ; /myApp là tập tin ; first=joe&last=cool là các thành phần tham khảo",
      "D": "http là giao thức; localhost là host ; 8080 là địa chỉ ; /myApp là thư mục ; first=joe&last=cool các tập tin"
    },
    "answer": "B"
  },
  {
    "id": 24,
    "text": "24. Trong giao thức HTTP, đáp ứng máy chủ gồm các thành phần nào và giải thích?",
    "choices": {
      "A": "Gồm 3 thành phần là : dòng trạng thái chỉ ra kết quả của yêu cầu; header chỉ ra thuộc tính của đáp ứng dùng để thông dịch nội dung và body chứa nội dung của đáp ứng",
      "B": "Gồm 2 thành phần là : dòng trạng thái chỉ ra kết quả của yêu cầu, thuộc tính của đáp ứng dùng để thông dịch nội dung và body chứa nội dung của đáp ứng",
      "C": "Gồm 4 thành phần là : dòng trạng thái chỉ ra kết quả của yêu cầu; header chỉ ra thuộc tính của đáp ứng dùng để thông dịch nội dung; body chứa nội dung của đáp ứng; footer báo kết thúc đáp ứng",
      "D": "Gồm 3 thành phần là : header  chỉ ra kết quả của yêu cầu và thuộc tính của đáp ứng dùng để thông dịch nội dung , title trình bày tựa đề của đáp ứng và body chứa nội dung của đáp ứng"
    },
    "answer": "A"
  },
  {
    "id": 25,
    "text": "25. Lớp JSONObject có chức năng gì?",
    "choices": {
      "A": "Tạo ra đối tượng quản lý JSON ở dạng một Object",
      "B": "Lấy một đối tượng JSON ở dạng Object",
      "C": "Tạo ra một đối tượng JSON tổng quát",
      "D": "Lấy một đối tượng JSON như một biến"
    },
    "answer": "A"
  },
  {
    "id": 26,
    "text": "26. Để có thể thực hiện các cuộc giao tiếp, một trong hai quá trình phải công bố số hiệu cổng của socket mà mình sử dụng. Ngoài số hiệu cổng, hai bên giao tiếp còn phải biết địa chỉ IP của nhau. Cho biết vai trò của số hiệu cổng và địa chỉ IP.",
    "choices": {
      "A": "Số hiệu cổng và IP là một cặp để xác định server hoặc client",
      "B": "Địa chỉ IP giúp phân biệt các thiết bị trên mạng TCP/IP. Trong khi số hiệu cổng dùng để phân biệt các quá trình khác nhau trên cùng một máy tính",
      "C": "Cổng đề xác định đường truyền, địa chỉ IP để xác định thiết bị trên mạng TCP/IP",
      "D": "Số hiệu cổng và địa chỉ IP đều bắt buộc khai báo trong mọi trường hợp cho cả client và server"
    },
    "answer": "B"
  },
  {
    "id": 27,
    "text": "27.  Dùng Intent tường minh (Explicit Intent) để gọi 1 Activity khác từ 1 Activity trong cùng ứng dụng, ta dùng phương thức nào để gởi kèm theo dữ liệu:",
    "choices": {
      "A": "putExtra (",
      "B": "putDataIIntent(",
      "C": "pushExtra(",
      "D": "putIntent("
    },
    "answer": "A"
  },
  {
    "id": 28,
    "text": "28.  Để thao tác với cơ sở dữ liệu lưu trữ trên SQLite trên Android ta sử dụng các đối tượng nào?",
    "choices": {
      "A": "SQLiteOpenController và SQLiteDatabase",
      "B": "SQLiteOpenHelper và SQLiteDatabase",
      "C": "SQLiteData và SQLiteOpenManager",
      "D": "SQLiteOpenHelper và SQLiteDataContent"
    },
    "answer": "B"
  },
  {
    "id": 29,
    "text": "29. Các phương thức sau đây sẽ giúp lấy chiều rộng và chiều cao của canvas:",
    "choices": {
      "A": "getWidth() và getHeight (",
      "B": "setWidth() và setHeight (",
      "C": "getCanvasWidth() và getCanvasHeight(",
      "D": "getWidthCanvas() và getHeightCanvas("
    },
    "answer": "A"
  },
  {
    "id": 30,
    "text": "30. Khi sử dụng ListView kết hợp với lớp ListActivity, trong tập tin Layout, phần tử Lisview phải khai báo id như sau:",
    "choices": {
      "A": "android:id=\"@+id/list\"",
      "B": "android:id=\"@android:id/list\"",
      "C": "android:id=\"@listactivity:id/list\"",
      "D": "Các câu khác với câu này đều sai"
    },
    "answer": "B"
  },
  {
    "id": 31,
    "text": "31. Tạo sao khi khai báo thuộc tính text cho một View, người ta khuyên nên khai báo định danh của text sau đó khai báo String của text trong tập tin strings.xml?",
    "choices": {
      "A": "Vì khai báo text trong tập tin string.xml hỗ trợ cho việc chuẩn bị sẵn nhiều text để dễ dàng thay đổi text khi cần thiết",
      "B": "Vì khai báo text trong tập tin string.xml sẽ ít bị lỗi trùng text khi có nhiều View cần khai báo thuộc tính text",
      "C": "Vì khai báo text trong tập tin string.xml hỗ trợ cho việc thiết kế giao diện đa ngôn ngữ và dễ dàng thay đổi text khi cần thiết",
      "D": "Tất cả các câu trả lời điều đúng"
    },
    "answer": "C"
  },
  {
    "id": 32,
    "text": "32. Khi dùng explicit intent để từ Activity_1 này gọi Activity_2  có gởi kèm theo dữ liệu ta có thể viết các lệnh như sau (Giả sử dữ liệu là kiểu String và được đặt tên là  “key” ):",
    "choices": {
      "A": "Package send = new Package(); send.addString(\"key\", value); Intent i=new Intent(Activity_1.this, Activity_2.class); i.putExtras(send); startActivity(i);",
      "B": "Bundle send = new Bundle(); send.putString(\"key\", value); Intent i = new Intent(Activity_1.this, Activity_2.class); i.putExtras(send); startActivity(i);",
      "C": "Intent i = new Intent(Activity_1.this, Activity_2.class); Bundle send = new Bundle(); send.addString(\"key\", value);  i.putExtras(send); runActivity(i);",
      "D": "Các câu khác với câu này đều sai"
    },
    "answer": "B"
  },
  {
    "id": 33,
    "text": "33. Khi sử dụng Intent ngầm ( Implicit Intent) để mở một trình duyệt web theo một URL ta khai báo ACTION gì?",
    "choices": {
      "A": "ACTION_WEB_SEARCH",
      "B": "ACTION_WEB",
      "C": "ACTION_VIEW",
      "D": "ACTION_BROWSER"
    },
    "answer": "C"
  },
  {
    "id": 34,
    "text": "34. Để định vị một vị trí với GPS ta có thể viết các lệnh Java như sau, với ps là một String khai báo kinh độ và vĩ độ (Ví dụ String ps = “10.20, 106.30”;):",
    "choices": {
      "A": "Intent i = new Intent(android.content.Intent.ACTION_VIEW, Uri.parse(\"geo:\"+ps));",
      "B": "Intent i = new Intent(android.Intent.ACTION_GPS, ps);",
      "C": "Intent i = new Intent(android.content.Intent.ACTION_GPS, Uri.parse(\"geo:\"+ps));",
      "D": "Intent i = new Intent(android.content.ACTION_VIEW, ps);"
    },
    "answer": "A"
  },
  {
    "id": 35,
    "text": "35. Trình bày các bước lập trình để kiểm tra xem điện thoại đang sử dụng loại kết nối nào?",
    "choices": {
      "A": "Bước 1: Tạo ra đối tượng quản lý kết nối với lớp ConnectivityHolder. Bước 2: Lấy biến thông tin về mạng với hàm getNetworkInfo(). Bước 3: Lấy thông tin về loại mạng đang kết nối với hàm getType(). Bước 4: Viết các lệnh hiển thị thông tin kết nối mạng",
      "B": " Bước 1: Tạo ra đối tượng kết nối với phương thức getconnectivityManager(). Bước 2: Lấy biến thông tin về mạng với hàm getAtiveNetwork(), Bước 3: Lấy thông tin về loại mạng đang kết nối với hàm getTypeInfo(). Bước 4: Viết các lệnh hiển thị thông tin kết nối mạng",
      "C": " Bước 1: Tạo ra đối tượng kết nối với phương thức getconnectivityManager(). Bước 2: Lấy biến thông tin về mạng với hàm getAtiveNetworkInfo(). Bước 3: Viết các lệnh hiển thị thông tin kết nối mạng",
      "D": "Bước 1: Tạo ra đối tượng ConnectivityManager với hàm getSystemService. Bước 2:  Lấy biến thông tin về mạng với hàm getAtiveNetworkInfo(). Bước 3: Lấy thông tin về loại mạng đang kết nối với hàm getType(). Bước 4: Viết các lệnh hiển thị thông tin kết nối mạng"
    },
    "answer": "D"
  },
  {
    "id": 36,
    "text": "36. Để xây dựng chương trình để nhận tin nhắn, chương trình chỉ bao gồm một danh sách hiển thị tất cả tin nhắn trong Inbox, ta sử dụng lớp nào?",
    "choices": {
      "A": "Inbox",
      "B": "InboxActivity",
      "C": "ListActivity",
      "D": "ListView"
    },
    "answer": "C"
  },
  {
    "id": 37,
    "text": "37. Các bước thực hiện giao thức HTTP với phương thức GET như sau:",
    "choices": {
      "A": "Khởi tạo một đối tượng InputSteam. Mở một kết nối HTTP với một URL từ xa.  Thiết lập các thuộc tính của kết nối. Lấy đáp ứng HTTP_OK để biết kết nối đã được thiết lập hay chưa. Nếu kết nối được thiết lập thì tiến hành lấy đối tượng InputStream từ kết nối để bắt đầu tải dữ liệu từ server",
      "B": "Tạo ra một đối tượng HttpClient. Tạo ra một đối tượng HttpGet. Thêm vào các yêu yều vào URL. Thiết lập kết nối và lấy đáp ứng từ server",
      "C": "Tạo ra một đối tượng HttpGet. Lấy đáp ứng HTTP_OK để biết kết nối đã được thiết lập hay chưa.  Nếu kết nối được thiết lập thì tiến hành lấy đối tượng InputStream từ kết nối để bắt đầu tải dữ liệu từ server",
      "D": "Khởi tạo một đối tượng InputSteam. Mở một kết nối HTTP với một URL từ xa. Lấy đáp ứng HTTP_OK để biết kết nối đã được thiết lập hay chưa. Nếu kết nối được thiết lập thì tiến hành lấy đối tượng InputStream từ kết nối để bắt đầu tải dữ liệu từ server"
    },
    "answer": "A"
  },
  {
    "id": 38,
    "text": "38. Phân biệt các kiểu kết nối mạng HTTP và Socket?",
    "choices": {
      "A": " Socket là giao thức nằm ở tầng vận chuyển (Transport layer).   HTTP là giao thức nằm trong tầng mạng (Network Layer",
      "B": "Socket là giao thức nằm ở tầng mạng (Network layer).  HTTP là giao thức nằm trong tầng ứng dụng (Application Layer",
      "C": "Socket là giao thức nằm ở tầng ứng dụng (Application layer. HTTP là giao thức nằm trong tầng mạng (Network Layer",
      "D": "Socket là giao thức nằm ở tầng vận chuyển (Transport layer).  HTTP là giao thức nằm trong tầng ứng dụng (Application Layer"
    },
    "answer": "D"
  },
  {
    "id": 39,
    "text": "39. Để lập trình phát triển ứng dụng trên nền tảng gốc iOS, người lập trình gặp khó khăn gì?",
    "choices": {
      "A": "Ngôn ngữ lập trình được đánh giá là phức tạp",
      "B": "Tốn chi phí để đăng tuyển vào chương trình người phát triển iOS (tải SDK, cài đặt môi trường phát triển, kiểm thử trên thiết bị thật, đưa lên App Store",
      "C": "Môi trường phát triển ứng dụng iOS chỉ có thể cài đặt trên máy tính chạy hệ điều hành Mac OS, (Macintosh, Hackintosh), version 10.6.8 trở lên",
      "D": "Tất cả A, B và C đều đúng"
    },
    "answer": "D"
  },
  {
    "id": 40,
    "text": "40. Để vẽ một đối tượng chuyển động ta có thể áp dụng nguyên tắc là làm thay đổi toạ độ của nó và vẽ lại đối tượng một cách liên tục với các toạ độ mới. Android cung cấp 1 phương thức để vẽ lại 1 đối tượng là:",
    "choices": {
      "A": "invalidate();",
      "B": "redraw(",
      "C": "validate(",
      "D": "Các câu khác với câu này đều sai"
    },
    "answer": "A"
  }
];