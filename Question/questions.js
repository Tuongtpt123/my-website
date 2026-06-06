const questions = [
  {
    "id": 1,
    "text": "1. .NET Framework 4.0 giới thiệu một số tính năng mới cho ngôn ngữ XAML. Thế hệ thứ hai của ngôn ngữ XAML này được gọi là:",
    "choices": {
      "A": "XAML2006",
      "B": "XAML2008",
      "C": "XAML2009",
      "D": "Không có câu trả lời nào trong số này"
    },
    "answer": "A"
  },
  {
    "id": 2,
    "text": "2. WPF là viết tắt của cụm từ____________________",
    "choices": {
      "A": "Work Presentation Features",
      "B": "Windows Pre-Install Features",
      "C": "Windows Presentation Foundation",
      "D": "Không có câu trả lời nào trong số này"
    },
    "answer": "A"
  },
  {
    "id": 3,
    "text": "3. WPF là sự thay thế cho______",
    "choices": {
      "A": "DirectX",
      "B": "IndirectX",
      "C": "Cả đáp án (a) và (b) đều dúng.",
      "D": "Cả đáp án (a) và  (b) đều sai."
    },
    "answer": "A"
  },
  {
    "id": 4,
    "text": "4. ________ Layout (bố cục) không có sẵn trong WPF.",
    "choices": {
      "A": "Table",
      "B": "Canvas",
      "C": "StackPanel",
      "D": "Tất cả a,b và c"
    },
    "answer": "A"
  },
  {
    "id": 5,
    "text": "5. Điều khiển nào được sử dụng cho phép sử dụng mẫu đặt sẵn để chấp nhận hoặc từ chối đầu vào của người dùng?",
    "choices": {
      "A": "TextBox",
      "B": "PatternBox",
      "C": "PatternTextBox",
      "D": "MaskedTextBox"
    },
    "answer": "A"
  },
  {
    "id": 6,
    "text": "6. Loại thuộc tính Nội dung (Content property) trong WPF là gì?",
    "choices": {
      "A": "Text",
      "B": "Object",
      "C": "String",
      "D": "Integer"
    },
    "answer": "A"
  },
  {
    "id": 7,
    "text": "7. Công cụ nào sau đây được sử dụng để phát triển ứng dụng WPF?",
    "choices": {
      "A": "Visual Studio",
      "B": "Expression Blend",
      "C": "Cả a và b đều đúng",
      "D": "Không có điều nào ở trên đúng."
    },
    "answer": "A"
  },
  {
    "id": 8,
    "text": "8. Lớp ._________ được sử dụng để triển khai Cây trong WPF.",
    "choices": {
      "A": "VisualTreeHelper",
      "B": "LogicalTreeHelper",
      "C": "Cả (a) và (b)",
      "D": "Không có điều nào ở trên"
    },
    "answer": "A"
  },
  {
    "id": 9,
    "text": "9. Một nội dung có thể chứa bao nhiêu điều khiển con?",
    "choices": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "Không giới hạn"
    },
    "answer": "A"
  },
  {
    "id": 10,
    "text": "10. XBAP là viết tắt của cụm từ_________",
    "choices": {
      "A": "XAML Based Application",
      "B": "XAML Based Automation",
      "C": "XAML Browser Automation",
      "D": "XAML Browser Application"
    },
    "answer": "A"
  },
  {
    "id": 11,
    "text": "11. Ứng dụng WPF có thể được triển khai bằng?",
    "choices": {
      "A": "ClickOnce",
      "B": "ClickTwice",
      "C": "ClickThrice",
      "D": "Không có điều nào ở trên"
    },
    "answer": "A"
  },
  {
    "id": 12,
    "text": "12. Các sự kiện được WPF hỗ trợ là________",
    "choices": {
      "A": "Direct Event",
      "B": "Bubbling Event",
      "C": "Tunneling Event",
      "D": "Tất cả những điều trên"
    },
    "answer": "A"
  },
  {
    "id": 13,
    "text": "13. Điều nào sau đây là bắt buộc để bắt đầu quá trình chạy nền với thành phần BackgroundWorker?",
    "choices": {
      "A": "Xử lý sự kiện ProgressChanged",
      "B": "Đặt thuộc tính WorkerSupportsCancellation thành true",
      "C": "Gọi phương thức RunWorkerAsync và Xử lý sự kiện DoWork",
      "D": "Thành phần BackgroundWorker không hỗ trợ sự kiện DoWork"
    },
    "answer": "A"
  },
  {
    "id": 14,
    "text": "14. Đối với chuyển đổi 2-D, WPF hỗ trợ các lớp sau?",
    "choices": {
      "A": "SkewTransform (Biến đổi nghiêng)",
      "B": "ScaleTransform (Biến đổi tỷ lệ)",
      "C": "RotateTransform (Biến đổi Xoay)",
      "D": "Tất cả những điều trên"
    },
    "answer": "A"
  },
  {
    "id": 15,
    "text": "15. Trong WPF, ngôn ngữ ___________ được sử dụng để thể hiện giao diện người dùng.",
    "choices": {
      "A": "XML",
      "B": "XAML",
      "C": "WSDL",
      "D": "Không có điều nào ở trên"
    },
    "answer": "A"
  },
  {
    "id": 16,
    "text": "16. XAML là cụm từ viết tắt của cụm từ______________",
    "choices": {
      "A": "Extensible Application Markup Language",
      "B": "Xtra Application Markup Language",
      "C": "Extraction Application Markup Language",
      "D": "Extensible Aimed Markup Language"
    },
    "answer": "A"
  },
  {
    "id": 17,
    "text": "17. WPF được hỗ trợ bởi_________________",
    "choices": {
      "A": "NET Framework 1.0",
      "B": "NET Framework 2.0",
      "C": "NET Framework 3.0 trở lên",
      "D": "Không có điều nào ở trên."
    },
    "answer": "A"
  },
  {
    "id": 18,
    "text": "18. Trình kích hoạt (Triggers) nào có sẵn trong WPF?",
    "choices": {
      "A": "Data triggers",
      "B": "Event triggers",
      "C": "Property triggers",
      "D": "Tất cả những điều trên."
    },
    "answer": "A"
  },
  {
    "id": 19,
    "text": "19. Để hiển thị hộp thoại theo phương thức, phương pháp nào được sử dụng?",
    "choices": {
      "A": "Show",
      "B": "ShowDialog",
      "C": "OpenDialog",
      "D": "Show modally"
    },
    "answer": "A"
  },
  {
    "id": 20,
    "text": "20. WPF hỗ trợ cọ vẽ nào?",
    "choices": {
      "A": "RadialGradientBrush",
      "B": "CircuarlGradientBrush",
      "C": "NonLinearlGradientBrush",
      "D": "Tất cả những điều trên."
    },
    "answer": "A"
  },
  {
    "id": 21,
    "text": "21. WPF hỗ trợ các loại ứng dụng:________________",
    "choices": {
      "A": "XBAP",
      "B": "Windows Application",
      "C": "Navigation Application",
      "D": "Tất cả những loại ứng dụng trên."
    },
    "answer": "A"
  },
  {
    "id": 22,
    "text": "22. WPF, trước đây gọi là \"Avalon\"",
    "choices": {
      "A": "đúng",
      "B": "sai",
      "C": "Không có tên gọi trức đó"
    },
    "answer": "A"
  },
  {
    "id": 23,
    "text": "23. Điều nào sau đây có thể lưu trữ một trang?",
    "choices": {
      "A": "Frame",
      "B": "Internet Explorer",
      "C": "Navigation Window",
      "D": "Tất cả những điều trên."
    },
    "answer": "A"
  },
  {
    "id": 24,
    "text": "24. Điều nào sau đây là đúng về XAML?",
    "choices": {
      "A": "XAML độc lập với nền tảng.",
      "B": "Các công cụ như Expression Blend không hỗ trợ XAML.",
      "C": "Tách biệt mã thiết kế và logic",
      "D": "Tất cả những điều trên"
    },
    "answer": "A"
  },
  {
    "id": 25,
    "text": "25. Thuộc tính nào trong WPF tham chiếu không gian tên XAML?",
    "choices": {
      "A": "Xmlns",
      "B": "Không gian tên XML",
      "C": "WPF không hỗ trợ không gian tên XAML",
      "D": "không phải những điều trên."
    },
    "answer": "A"
  },
  {
    "id": 26,
    "text": "26. Câu nào sau đây của WPF là đúng?",
    "choices": {
      "A": "WPF chỉ hỗ trợ tài nguyên nhị phân (binary resources).",
      "B": "WPF hỗ trợ tài nguyên nhị phân (binary resources) và tài nguyên logic(logical resources).",
      "C": "WPF chỉ hỗ trợ tài nguyên logic (logical resources).",
      "D": "Không có điều nào ở trên"
    },
    "answer": "A"
  },
  {
    "id": 27,
    "text": "27. Điều khiển bố cục (layout) nào sẽ là lựa chọn tốt nhất cho giao diện người dùng yêu cầu các điều khiển được bố trí cách đều nhau?",
    "choices": {
      "A": "Grid",
      "B": "Canvas",
      "C": "EvenlyGrid",
      "D": "UniformGrid"
    },
    "answer": "A"
  },
  {
    "id": 28,
    "text": "28. Không gian tên nào cung cấp các lớp để tích hợp với WPF và Win32?",
    "choices": {
      "A": "System.Win32",
      "B": "System.Windows",
      "C": "System.Windows.Interop",
      "D": "Không có điều nào ở trên"
    },
    "answer": "A"
  },
  {
    "id": 29,
    "text": "29. Ứng dụng Điều hướng (Navigation Application) sử dụng đối tượng nào để hiểnthị Cửa sổ Điều hướng(Navigation Window)?",
    "choices": {
      "A": "Window",
      "B": "Page",
      "C": "Internet Explorer",
      "D": "Không có điều nào ở trên"
    },
    "answer": "A"
  },
  {
    "id": 30,
    "text": "30. Lệnh nào sau đây sẽ hiển thị một thể hiện mới của lớp MyWindow?",
    "choices": {
      "A": "MyWindow.Show();",
      "B": "MyWindow.Show(“Window”);",
      "C": "MyWindow.Show(new MyWindow());",
      "D": "MyWindow obj=new MyWindow(); Obj.Show();"
    },
    "answer": "A"
  },
  {
    "id": 31,
    "text": "31. Để phát tệp .wav, lớp nào được sử dụng?",
    "choices": {
      "A": "WavPlayer",
      "B": "SoundPlayer",
      "C": "All Players",
      "D": "Không có điều nào ở trên"
    },
    "answer": "A"
  },
  {
    "id": 32,
    "text": "32. ICollectionView hỗ trợ_________________",
    "choices": {
      "A": "Sorting",
      "B": "Grouping",
      "C": "Filtering",
      "D": "Tất cả những điều trên"
    },
    "answer": "A"
  },
  {
    "id": 33,
    "text": "33. Điều nào sau đây đúng đối với thuộc tính phụ thuộc (dependency property)?",
    "choices": {
      "A": "WPF không hỗ trợ thuộc tính",
      "B": "WPF chỉ hỗ trợ thuộc tính phụ thuộc.",
      "C": "Các thuộc tính phụ thuộc thuộc về một lớp nhưng có thể được sử dụng trong một lớp khác.",
      "D": "Không có điều nào ở trên"
    },
    "answer": "A"
  },
  {
    "id": 34,
    "text": "34. Lớp Brush có trong không gian tên nào?",
    "choices": {
      "A": "System.Windows.Media",
      "B": "System.Windows",
      "C": "System.Windows.Shapes",
      "D": "System.Windows.MediaControls"
    },
    "answer": "A"
  },
  {
    "id": 35,
    "text": "35. DataProvider nào sau đây sử dụng XML làm DataSource?",
    "choices": {
      "A": "XmlDataProvider",
      "B": "CustomDataProvider",
      "C": "XMLObjectDataProvider",
      "D": "Không có điều nào ở trên"
    },
    "answer": "A"
  },
  {
    "id": 36,
    "text": "36. Bạn có thể sử dụng thuộc tính nào để làm cho điều khiển trở nên trong suốt?",
    "choices": {
      "A": "Mask",
      "B": "OpacityMask",
      "C": "TranceParent",
      "D": "Semi-Tranceparent"
    },
    "answer": "A"
  },
  {
    "id": 37,
    "text": "37. Điều nào sau đây là đúng? 1.Tunneling Event được nâng lên đầu tiên bởi vùng chứa trên cùng. 2.PreviewMouseDown là Tunneling Event 3.PreviewKeyDown là Tunneling Event 4.MouseDown là Bubbling Event",
    "choices": {
      "A": "Chỉ mục 1,2 là đúng",
      "B": "Chỉ mục 2,4 là đúng",
      "C": "Chỉ mục 1,2,3 là đúng",
      "D": "Tất cả 1,2,3,4 là đúng"
    },
    "answer": "A"
  },
  {
    "id": 38,
    "text": "38. Các phép biến đổi WPF có thể được sử dụng cho____________",
    "choices": {
      "A": "Chỉ phép biển đổi xoay (rotaion)",
      "B": "Chỉ phép biến đổi nghiêng (skewing)",
      "C": "Chỉ phép biến đổi tỉ lệ (scaling)",
      "D": "Có cả 3 phép biến đổi rotation, scaling, và skewing"
    },
    "answer": "A"
  },
  {
    "id": 39,
    "text": "39. Trong WPF dành cho tính năng Kéo (Drag) và Thả (Drop), lớp nào được sử dụng?",
    "choices": {
      "A": "DoDragDrop",
      "B": "WPF Không hỗ trợ tính năng Kéo (Drag) và Thả (Drop)",
      "C": "DragDrop",
      "D": "Không có điều nào ở trên."
    },
    "answer": "A"
  },
  {
    "id": 40,
    "text": "40. Hai loại tài nguyên logic (Logical Resources) nào có sẵn trong WPF?",
    "choices": {
      "A": "StaticResource và CompileResource",
      "B": "WPF không hỗ trợ tài nguyên logic (Logical Resources)",
      "C": "StaticResource và Dynamic Resource",
      "D": "Không có điều nào ở trên."
    },
    "answer": "A"
  },
  {
    "id": 41,
    "text": "41. Bằng cách sử dụng điều khiển nào, bạn có thể đặt thuộc tính của điều khiển trong thời gian chạy?",
    "choices": {
      "A": "PropertyGrid",
      "B": "Grid",
      "C": "ChangePropertyGrid",
      "D": "DynamicPropertyGrid"
    },
    "answer": "A"
  },
  {
    "id": 42,
    "text": "42. Lớp nào được sử dụng để liên kết dữ liệu (data binding) trong WPF?",
    "choices": {
      "A": "Data",
      "B": "Binding",
      "C": "DataReader",
      "D": "System.Data"
    },
    "answer": "A"
  },
  {
    "id": 43,
    "text": "43. Đối tượng nào có thể được sử dụng để chia sẻ biến trên các trang trong WPF?",
    "choices": {
      "A": "Cookies",
      "B": "Session",
      "C": "Viewstate",
      "D": "Application"
    },
    "answer": "A"
  },
  {
    "id": 44,
    "text": "44. Đoạn mã WPF nào sau đây đúng?",
    "choices": {
      "A": "<TextBlock>This is my < HyperLink Navigate=”MyPage.xaml”>Hyperlink</Hyperlink></TextBlock>",
      "B": "<TextBlock>This is my < HyperLink Navigate=”MyPage.aspx”>Hyperlink< / Hyperlink></TextBlock>",
      "C": "<TextBlock>This is my < HyperLink NavigateUri=”MyPage.xaml”>Hyperlink< / Hyperlink>< /TextBlock>",
      "D": "<TextBlock>This is my < HyperLink NavigateUri=”MyPage.aspx”>Hyperlink< / Hyperlink>< /TextBlock>"
    },
    "answer": "A"
  },
  {
    "id": 45,
    "text": "45. Điều nào sau đây có hai trạng thái của đối tượng Freezable?",
    "choices": {
      "A": "Fix and Unfix",
      "B": "Static and Dynamic",
      "C": "Frozen and unfrozen.",
      "D": "Không có điều nào ở trên"
    },
    "answer": "A"
  },
  {
    "id": 46,
    "text": "46. Các Chế độ liên kết dữ liệu (Data Binding Modes) khác nhau có sẵn trong Windows Present Foundation là gì? 1)OneWay 2) TwoWay 3) OneWayToSource 4) OneTime",
    "choices": {
      "A": "Chỉ có 1,2",
      "B": "Chỉ có 2,3",
      "C": "Chỉ có 3,4",
      "D": "tất cả 1,2,3,4"
    },
    "answer": "A"
  },
  {
    "id": 47,
    "text": "47. Làm cách nào bạn có thể đặt khóa ghi nhớ (mnemonics key) hoạt động cho nhãn?",
    "choices": {
      "A": "Đặt thuộc tính Khóa ghi nhớ trên điều khiển Nhãn.",
      "B": "Bạn phải đặt cả điều khiển Nhãn và thuộc tính Target trong cùng một vùng chứa.",
      "C": "Đặt thuộc tính Target thành điều khiển đích. Đặt trước chữ cái của khóa ghi nhớ bằng kýhiệu gạch dưới trong thuộc tính Nội dung của điều khiển Nhãn.",
      "D": "Không có điều nào ở trên"
    },
    "answer": "A"
  },
  {
    "id": 48,
    "text": "48. Hoạt ảnh đường dẫn (Path animation) là một loại __________________ trong đó đối tượng hoạt hình đi theo một đường dẫn được thiết lập bởi hình học Đường dẫn (Path geometry).",
    "choices": {
      "A": "audio",
      "B": "animation",
      "C": "video",
      "D": "Tất cả những điều trên"
    },
    "answer": "A"
  },
  {
    "id": 49,
    "text": "49. Khung giao diện người dùng (UI framework) nào sau đây là khung giao diện người dùng để xây dựng các ứng dụng máy tính để bàn Windows?",
    "choices": {
      "A": "WPF",
      "B": "ASP.NET",
      "C": "Silverlight",
      "D": "Angular"
    },
    "answer": "A"
  },
  {
    "id": 50,
    "text": "50. Trong ứng dụng WPF, phần giao diện người dùng có thể được viết bằng:",
    "choices": {
      "A": "XAML",
      "B": "Mã trình (C# hoặc Visual Basic)",
      "C": "Cả a và b đều đúng",
      "D": "Cả a và b đều sai"
    },
    "answer": "A"
  },
  {
    "id": 51,
    "text": "51. Trong ứng dụng WPF, việc xử lý các sự kiện có thể được viết bằng:",
    "choices": {
      "A": "XAML",
      "B": "Mã trình (C# hoặc Visual Basic)",
      "C": "Cả a và b đều đúng",
      "D": "Cả a và b đều sai"
    },
    "answer": "A"
  },
  {
    "id": 52,
    "text": "52. Ứng dụng WPF sử dụng cách tiếp cận nào để bố trí các phần tử trên giao diện người dùng?",
    "choices": {
      "A": "Phương thức áp đặt (imperative)",
      "B": "Phương thức khai báo (declarative)",
      "C": "Cả hai phương thức trên đều đúng",
      "D": "Cả hai phương thức trên đều sai"
    },
    "answer": "A"
  },
  {
    "id": 53,
    "text": "53. Trừ các dạng panel, các phần tử UI trong WPF như Label, Button cho phép chứa tối đa bao nhiêu phần tử con?",
    "choices": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "Không giới hạn số lượng"
    },
    "answer": "A"
  },
  {
    "id": 54,
    "text": "54. Các control trong WPF được định bằng?",
    "choices": {
      "A": "Đặc tả XAML",
      "B": "Mã trình (C# hoặc Visual Basic)",
      "C": "Cả A và B"
    },
    "answer": "A"
  },
  {
    "id": 55,
    "text": "55. Các control cơ bản trong WPF bao gồm? (chọn nhiều)",
    "choices": {
      "A": "Label, TextBox, Button",
      "B": "Radio Button, CheckBox, ListBox và ComboBox",
      "C": "Grid, WrapPanel",
      "D": "Cả A, B và C"
    },
    "answer": "A"
  },
  {
    "id": 56,
    "text": "56. Được phép chọn đồng thời nhiều Radio Button trong cùng nhóm:",
    "choices": {
      "A": "Đúng",
      "B": "Sai"
    },
    "answer": "A"
  },
  {
    "id": 57,
    "text": "57. Được phép chọn đồng thời nhiều CheckBox:",
    "choices": {
      "A": "Đúng",
      "B": "Sai"
    },
    "answer": "A"
  },
  {
    "id": 58,
    "text": "58. Khi dùng thẻ <TextBox> để tạo hộp soạn thảo, bắt buộc phải kết thúc bằng thẻ đóng </TextBox>:",
    "choices": {
      "A": "Đúng",
      "B": "Sai"
    },
    "answer": "A"
  },
  {
    "id": 59,
    "text": "59. Trong điều khiển Expander, ta thường tạo dòng text mô tả nội dung bên trong của Expander, luôn xuất hiện trên Expander bên cạnh mũi tên chỉ trạng thái của Expander. Muốn thiết lập nội dung của dòng text này, ta dùng thuộc tính gì của điều khiển Expander?",
    "choices": {
      "A": "Content",
      "B": "Text",
      "C": "Header",
      "D": "Source"
    },
    "answer": "A"
  },
  {
    "id": 60,
    "text": "60. Trong ToolBar kết hợp với RichTextBox, thuộc tính nào của nút bấm hai trạng thái ToggleButton xác định chức năng sửa đổi văn bản cần kích hoạt?",
    "choices": {
      "A": "Command",
      "B": "CommandTarget",
      "C": "Cả hai thuộc tính trên"
    },
    "answer": "A"
  },
  {
    "id": 61,
    "text": "61. Trong ToolBar kết hợp với RichTextBox, thuộc tính nào của nút bấm hai trạng thái ToggleButton xác định đối tượng RichTextBox có chức năng sửa đổi văn bản cần kích hoạt?",
    "choices": {
      "A": "Command",
      "B": "CommandTarget",
      "C": "Cả hai thuộc tính trên"
    },
    "answer": "A"
  },
  {
    "id": 62,
    "text": "62. Trên thanh Menu, các Menu Item mức đỉnh chỉ có thể là Popup Menu ?",
    "choices": {
      "A": "Đúng",
      "B": "Sai"
    },
    "answer": "A"
  },
  {
    "id": 63,
    "text": "63. Menu Item mức dưới của một Popup Menu cũng có thể là một Popup Menu?",
    "choices": {
      "A": "Đúng",
      "B": "Sai"
    },
    "answer": "A"
  },
  {
    "id": 64,
    "text": "64. Thuộc tính nào sau đây của Menu được dùng để gán nhãn (tiêu đề) cho Menu?",
    "choices": {
      "A": "Title",
      "B": "Header",
      "C": "Text",
      "D": "Tooltip"
    },
    "answer": "A"
  },
  {
    "id": 65,
    "text": "65. Các thuộc tính được có thể được sử dụng để gán lệnh cho một Menu Item (Chọn nhiều)",
    "choices": {
      "A": "Command",
      "B": "Click",
      "C": "OnClick",
      "D": "Checked và UnChecked"
    },
    "answer": "A"
  },
  {
    "id": 66,
    "text": "66. Thanh công cụ được phép nằm ở vị trí nào trên cửa sổ",
    "choices": {
      "A": "Nằm ngang.",
      "B": "Nằm dọc",
      "C": "Được phép nằm cả theo chiều dọc và chiều ngang."
    },
    "answer": "A"
  },
  {
    "id": 67,
    "text": "67. Những thẻ nào sau đây được dùng để tạo các nút trên thực đơn (Chọn nhiều):",
    "choices": {
      "A": "<Button>",
      "B": "<Checkbox>",
      "C": "<ToolBar Item>"
    },
    "answer": "A"
  },
  {
    "id": 68,
    "text": "68. Context Menu xuất hiện khi nhấn chuột nào lên điều khiển?",
    "choices": {
      "A": "Chuột trái",
      "B": "Chuột giữa",
      "C": "Chuột phải",
      "D": "Cả ba loại chuột đều được"
    },
    "answer": "A"
  },
  {
    "id": 69,
    "text": "69. Context Menu có thể chứa cả Command Menu Item và Popup Menu Item?",
    "choices": {
      "A": "Đúng",
      "B": "Sai",
      "C": "Chỉ chứa Command Menu Item",
      "D": "Chỉ chứa Popup Menu Item"
    },
    "answer": "A"
  },
  {
    "id": 70,
    "text": "70. Câu lệnh XAML định nghĩa thực đơn ngữ cảnh phải nằm trong cặp thẻ định nghĩa điều khiển chứa thực đơn?",
    "choices": {
      "A": "Đúng",
      "B": "Sai",
      "C": "Không quan trọng vị trí",
      "D": "Phụ thuộc vào loại điều khiển"
    },
    "answer": "A"
  },
  {
    "id": 71,
    "text": "71. Thực đơn ngữ cảnh có thể chia sẻ cho nhiều điều khiển dùng chung?",
    "choices": {
      "A": "Đúng",
      "B": "Sai",
      "C": "Chỉ khi các điều khiển có cùng kiểu",
      "D": "Chỉ dùng được trong một Window"
    },
    "answer": "A"
  },
  {
    "id": 72,
    "text": "72. Thanh trạng thái (StatusBar) chỉ được phép chứa một phần tử trạng thái?",
    "choices": {
      "A": "Đúng",
      "B": "Sai",
      "C": "Chỉ chứa tối đa 2 phần tử",
      "D": "Phụ thuộc vào hệ điều hành"
    },
    "answer": "A"
  },
  {
    "id": 73,
    "text": "73. Thanh trạng thái có thể chứa những các phần tử thuộc loại nào?",
    "choices": {
      "A": "Văn bản.",
      "B": "Hình ảnh.",
      "C": "Các điều khiển khác như Button, ProgressBar,..",
      "D": "Cả ba loại trên."
    },
    "answer": "A"
  },
  {
    "id": 74,
    "text": "74. Để xử lý một sự kiện cần thực hiện những công việc gì?",
    "choices": {
      "A": "Viết mã lệnh thực hiện các hành động phản ứng với sự kiện",
      "B": "Kết nối sự kiện với hàm xử lý sự kiện",
      "C": "Cả hai công việc trên"
    },
    "answer": "A"
  },
  {
    "id": 75,
    "text": "75. Một sự kiện định tuyến có thể là:",
    "choices": {
      "A": "Sự kiện truyền xuống",
      "B": "Sự kiện truyền lên",
      "C": "Sự kiện trực tiếp",
      "D": "Một trong ba phương án a, b, c, tuỳ thuộc vào chiến lược dẫn tuyến của sự kiện đó"
    },
    "answer": "A"
  },
  {
    "id": 76,
    "text": "76. Một sự kiện định tuyến có thể lan truyền:",
    "choices": {
      "A": "Từ phần tử nguồn tới phần tử bất kỳ trên cây trực quan",
      "B": "Lan truyền theo một trong hai hướng: từ phần từ nguồn đến nút gốc hoặc từ phần tử nguồn đến các nút con của nó",
      "C": "Chỉ lan truyền (ngược hay xuôi) qua các phần từ nằm trong đoạn từ nút gốc tới phần tử nguồn mà có quan hệ họ hàng với phần tử nguồn."
    },
    "answer": "A"
  },
  {
    "id": 77,
    "text": "77. Với mô hình sự kiện có định tuyến, một sự kiện lan truyền xuống được:",
    "choices": {
      "A": "Lan truyền từ phần tử nguồn lên phần tử gốc trong cây trực quan",
      "B": "Lan truyền từ nút gốc đến phần tử nguồn trong cây trực quan",
      "C": "Lan truyền từ phần tử nguồn xuống các nút con trong cây trực quan"
    },
    "answer": "A"
  },
  {
    "id": 78,
    "text": "78. Khi gắn kết một lệnh với một đối tượng chịu tác động của lệnh, việc thực hiện lệnh sẽ do:",
    "choices": {
      "A": "Bản thân lệnh đó tự thực thi hành động tương ứng với ngữ nghĩa của nó, người lập trình không phải tác động thêm gì",
      "B": "Việc gắn kết chỉ có tác dụng thiết lập việc phát thông báo cho đối tượng chịu tác động lệnhbiết nó được ra lệnh gì mỗi khi lệnh được gọi, còn người lập trình phải viết mã lệnh thực thi lệnh đó như thế nào",
      "C": "Nguồn phát lệnh xác định việc thực thi hành động"
    },
    "answer": "A"
  },
  {
    "id": 79,
    "text": "79. Ưu điểm của việc sử dụng lệnh có định tuyến so với xử lý sự kiện có định tuyến:",
    "choices": {
      "A": "Nguồn lệnh (nơi phát động lệnh) không bó chặt với đích lệnh (nơi xử lý lệnh) – chúng không cần các tham chiếu trực tiếp lẫn nhau như trong trường hợp liên kết bằng đơn vị xử lý sự kiện",
      "B": "Lệnh có định tuyến sẽ tự động cho phép hoặc vô hiệu hoá tất cả các điều khiển UI tương ứng khi đích lệnh xác định rằng lệnh đó bị vô hiệu hoá",
      "C": "Lệnh có định tuyến cho phép ta liên kết phím nóng và các dạng nhập liệu khác như cơ chế phát động lệnh",
      "D": "Cả ba ưu điểm trên."
    },
    "answer": "A"
  },
  {
    "id": 80,
    "text": "80. Trong mô hình lệnh có định tuyến, một khi một đơn vị xử lý lệnh đã được kích hoạt thực hiện:",
    "choices": {
      "A": "Giống như sự kiện có định tuyến, lệnh lại được lan truyền tiếp, do vậy, có thể có nhiều đơn vị xử lý lệnh khác sẽ được thực hiện",
      "B": "Không đơn vị xử lý nào khác được gọi",
      "C": "Còn tuỳ lệnh đó có được đánh dấu “đã xử lý” hay chưa"
    },
    "answer": "A"
  },
  {
    "id": 81,
    "text": "81. Thành phần Style quy định các thuộc tính hiển thị định sẵn có thể được áp dụng cho:",
    "choices": {
      "A": "Chỉ một đối tượng điều khiển UI duy nhất",
      "B": "Tất cả các đối tượng thuộc một lớp UI cụ thể (ListBox, TextBox, vv) quy định bởi thuộctính TargetType trong Style đã định (trong trường hợp thành phần Style không được đặt khóa định danh x:Key)",
      "C": "Các đối tượng UI thuộc các lớp khác nhau nhưng cùng kế thừa từ một lớp UI (ví dụ, Control) quy định bởi thuộc tính TargetType trong thành phần Style đã định; và có thuộc tính Style tham chiếu đến khóa của Style đã định (trường hợp Style có đặt khóa định danhx:Key)",
      "D": "b hoặc c tương ứng với từng trường hợp Style đã định có khóa định danh x:Key hay không"
    },
    "answer": "A"
  },
  {
    "id": 82,
    "text": "82. Thuộc tính Triggers trong thành phần Style quy định:",
    "choices": {
      "A": "Hàm xử lý sự kiện tương ứng với một sự kiện xảy ra trên đối tượng UI có áp dụng Style",
      "B": "Những thay đổi về thuộc tính hiển thị khi những điều kiện nhất định trên đối tượng UI có ápdụngStyle được thoả mãn"
    },
    "answer": "A"
  },
  {
    "id": 83,
    "text": "83. Sử dụng thuộc tính BaseOn, một Style có thể kế thừa từ:",
    "choices": {
      "A": "Duy nhất một Style cơ sở",
      "B": "Nhiều Style cơ sở tùy thuộc vào giá trị thiết lập cho BaseOn"
    },
    "answer": "A"
  },
  {
    "id": 84,
    "text": "84. Loại Trigger nào sau đây cho phép thiết lập nhiều điều kiện cho một dạng thay đổi thuộc tính hiển thị:",
    "choices": {
      "A": "EventTrigger",
      "B": "MultiTrigger",
      "C": "DataTrigger"
    },
    "answer": "A"
  },
  {
    "id": 85,
    "text": "85. Sự khác biệt giữa Style và ControlTemplate áp dụng cho một lớp đối tượng UI là gì? gì?",
    "choices": {
      "A": "Style dùng để xử lý sự kiện, còn ControlTemplate dùng để liên kết dữ liệu",
      "B": "Style cho phép thay đổi các thuộc tính hiển thị của điều khiển, còn ControlTemplate cho phép thay đổi cấu trúc và giao diện hiển thị của điều khiển",
      "C": "Style và ControlTemplate có chức năng hoàn toàn giống nhau",
      "D": "ControlTemplate chỉ dùng cho TextBox, còn Style dùng cho tất cả điều khiển"
    },
    "answer": "A"
  },
  {
    "id": 86,
    "text": "86. Trong một ứng dụng WPF, khai báo Style và Template có thể được đặt ở đâu?",
    "choices": {
      "A": "Đặt trong phần Resources của bất kỳ mức phân cấp nào trong cây trực quan trong cùng file .xaml khai báo giao diện",
      "B": "Trong một file .xaml riêng và được tham chiếu trong file giao diện có sử dụng Style hoặc Template thông qua khai báo đường dẫn trong phần tử <ResourceDictionary>",
      "C": "Một trong hai phương án trên"
    },
    "answer": "A"
  },
  {
    "id": 87,
    "text": "87. Các đối tượng hình học có thể được xây dựng bởi?",
    "choices": {
      "A": "Mã lệnh XAML",
      "B": "Mã lệnh C#",
      "C": "Cả hai"
    },
    "answer": "A"
  },
  {
    "id": 88,
    "text": "88. Đối tượng Polyline gồm N cạnh được định nghĩa bởi bao nhiêu cặp tọa độ?",
    "choices": {
      "A": "N cặp tọa độ",
      "B": "N+1 cặp tọa độ",
      "C": "N-1 cặp tọa độ"
    },
    "answer": "A"
  },
  {
    "id": 89,
    "text": "89. Đối tượng Rectangle được định nghĩa bởi?",
    "choices": {
      "A": "Các thuộc tính Left, Top, Right, Bottom",
      "B": "Các thuộc tính Left, Top, Width, Height"
    },
    "answer": "A"
  },
  {
    "id": 90,
    "text": "90. Đối tượng Ellipse được định nghĩa bởi?",
    "choices": {
      "A": "Các thuộc tính Tọa độ tâm của Ellipse và các bán kính của nó",
      "B": "Hình chữ nhật ngoại tiếp của Ellipse."
    },
    "answer": "A"
  },
  {
    "id": 91,
    "text": "91. Đối tượng Polygon gồm N định được định nghĩa bởi bao nhiêu cặp tọa độ?",
    "choices": {
      "A": "N cặp tọa độ",
      "B": "N+1 cặp tọa độ",
      "C": "N-1 cặp tọa độ"
    },
    "answer": "A"
  },
  {
    "id": 92,
    "text": "92. Các đối tượng hình học có thể được tô bên trong bởi:",
    "choices": {
      "A": "Màu đồng nhất",
      "B": "Tô đổ màu theo tuyến tính hoặc theo bán kính hình tròn",
      "C": "Tô màu bởi hình ảnh có sẵn",
      "D": "Đáp án A,B,C"
    },
    "answer": "A"
  },
  {
    "id": 93,
    "text": "93. Khi sử dụng ảnh để tô màu cho đối tượng thì mặc định ảnh sẽ",
    "choices": {
      "A": "Giữ nguyên kích thước gốc.",
      "B": "Tự co dãn để phủ kín đối tượng.",
      "C": "Giữ nguyên kích thước và tự động xếp lợp phủ kín đối tượng.",
      "D": "Không đáp án nào đúng."
    },
    "answer": "A"
  },
  {
    "id": 94,
    "text": "94. Khung giao diện người dùng nào sau đây là khung giao diện người dùng để xây dựng các ứng dụng máy tính để bàn Windows?",
    "choices": {
      "A": "WPF",
      "B": "ASP.NET",
      "C": "Silverlight",
      "D": "Angular"
    },
    "answer": "A"
  },
  {
    "id": 95,
    "text": "95. Thành phần nào sau đây không phải là thành phần cốt lõi của WPF?",
    "choices": {
      "A": "XAML",
      "B": "CLR",
      "C": "HTML",
      "D": "DirectX"
    },
    "answer": "A"
  },
  {
    "id": 96,
    "text": "96. Điều nào sau đây đúng về XAML?",
    "choices": {
      "A": "Nó là viết tắt của cụm từ: eXtensible Application Markup Language.",
      "B": "Đây là ngôn ngữ lập trình.",
      "C": "Nó được dùng để định nghĩa giao diện người dùng trong WPF.",
      "D": "Tất cả những điều trên."
    },
    "answer": "A"
  },
  {
    "id": 97,
    "text": "97. Cái nào sau đây không phải là một loại bảng bố cục WPF?",
    "choices": {
      "A": "StackPanel",
      "B": "Canvas",
      "C": "FlowLayoutPanel",
      "D": "DockPanel"
    },
    "answer": "A"
  },
  {
    "id": 98,
    "text": "98. Cách nào sau đây được sử dụng để liên kết dữ liệu với các thành phần giao diện người dùng (UI) trong WPF?",
    "choices": {
      "A": "DataTemplates",
      "B": "DataGrids",
      "C": "DataContext",
      "D": "DataBinding"
    },
    "answer": "A"
  },
  {
    "id": 99,
    "text": "99. Điều nào sau đây được sử dụng để định nghĩa kiểu trực quan (visual style) trong WPF?",
    "choices": {
      "A": "ControlTemplate",
      "B": "DataTemplate",
      "C": "Style",
      "D": "ResourceDictionary"
    },
    "answer": "A"
  },
  {
    "id": 100,
    "text": "100. Điều nào sau đây được sử dụng để định nghĩa mẫu (template) hiển thị dữ liệu trong WPF?",
    "choices": {
      "A": "ControlTemplate",
      "B": "DataTemplate",
      "C": "Style",
      "D": "ResourceDictionary"
    },
    "answer": "A"
  },
  {
    "id": 101,
    "text": "101. Điều nào sau đây không phải là một loại điều khiển WPF?",
    "choices": {
      "A": "TextBox",
      "B": "ListBox",
      "C": "LabelBox",
      "D": "ComboBox"
    },
    "answer": "A"
  },
  {
    "id": 102,
    "text": "102. Điều nào sau đây được sử dụng để hiển thị danh sách các mục trong WPF?",
    "choices": {
      "A": "ListBox",
      "B": "ComboBox",
      "C": "TreeView",
      "D": "Menu"
    },
    "answer": "A"
  },
  {
    "id": 103,
    "text": "103. Điều nào sau đây được sử dụng để hiển thị dữ liệu phân cấp trong WPF?",
    "choices": {
      "A": "ListBox",
      "B": "ComboBox",
      "C": "TreeView",
      "D": "Menu"
    },
    "answer": "A"
  },
  {
    "id": 104,
    "text": "104. Cách nào sau đây được sử dụng để nhóm các thành phần UI có liên quan trong WPF?",
    "choices": {
      "A": "ControlTemplate",
      "B": "DataTemplate",
      "C": "Style",
      "D": "Panel"
    },
    "answer": "A"
  },
  {
    "id": 105,
    "text": "105. Điều nào sau đây được sử dụng để tạo điều khiển tùy chỉnh trong WPF?",
    "choices": {
      "A": "UserControl",
      "B": "CustomControl",
      "C": "UserInterface",
      "D": "CustomTemplate"
    },
    "answer": "A"
  },
  {
    "id": 106,
    "text": "106. Cách nào sau đây được sử dụng để hiển thị tập hợp các mục ở định dạng bảng trong WPF?",
    "choices": {
      "A": "ListBox",
      "B": "DataGrid",
      "C": "ComboBox",
      "D": "TreeView"
    },
    "answer": "A"
  },
  {
    "id": 107,
    "text": "107. Điều nào sau đây được sử dụng để định nghĩa tài nguyên có thể tái sử dụng trong WPF?",
    "choices": {
      "A": "ControlTemplate",
      "B": "DataTemplate",
      "C": "Style",
      "D": "ResourceDictionary"
    },
    "answer": "A"
  },
  {
    "id": 108,
    "text": "108. Điều nào sau đây được sử dụng để xác định mẫu cho điều khiển tùy chỉnh trong WPF?",
    "choices": {
      "A": "ControlTemplate",
      "B": "DataTemplate",
      "C": "Style",
      "D": "ResourceDictionary"
    },
    "answer": "A"
  },
  {
    "id": 109,
    "text": "109. Điều nào sau đây không phải là một loại chế độ liên kết WPF?",
    "choices": {
      "A": "OneTime",
      "B": "TwoWay",
      "C": "OneWay",
      "D": "ThreeWay"
    },
    "answer": "A"
  },
  {
    "id": 110,
    "text": "110. Điều nào sau đây được sử dụng để xác định hệ thống phân cấp tài nguyên trong WPF?",
    "choices": {
      "A": "ResourceDictionary",
      "B": "Style",
      "C": "DataTemplate",
      "D": "ControlTemplate"
    },
    "answer": "A"
  },
  {
    "id": 111,
    "text": "111. Điều nào sau đây được sử dụng để thiết lập giao diện trực quan của điều khiển trong WPF?",
    "choices": {
      "A": "ControlTemplate",
      "B": "DataTemplate",
      "C": "Style",
      "D": "ResourceDictionary"
    },
    "answer": "A"
  },
  {
    "id": 112,
    "text": "112. Điều nào sau đây không phải là một loại trình kích hoạt (trigger) của WPF?",
    "choices": {
      "A": "PropertyTrigger",
      "B": "DataTrigger",
      "C": "EventTrigger",
      "D": "ControlTrigger"
    },
    "answer": "A"
  },
  {
    "id": 113,
    "text": "113. Điều nào sau đây được sử dụng để xử lý dữ liệu đầu vào của người dùng trong WPF?",
    "choices": {
      "A": "EventHandlers",
      "B": "CommandBindings",
      "C": "EventTriggers",
      "D": "EventListeners"
    },
    "answer": "A"
  },
  {
    "id": 114,
    "text": "114. Loại nào sau đây không phải là loại cọ vẽ (Brush) của WPF?",
    "choices": {
      "A": "SolidColorBrush",
      "B": "GradientBrush",
      "C": "ImageBrush",
      "D": "TextureBrush"
    },
    "answer": "A"
  },
  {
    "id": 115,
    "text": "115. Điều nào sau đây được sử dụng để xác định một tập hợp các tài nguyên trực quan có liên quan trong WPF?",
    "choices": {
      "A": "ControlTemplate",
      "B": "DataTemplate",
      "C": "Style",
      "D": "ResourceDictionary"
    },
    "answer": "A"
  },
  {
    "id": 116,
    "text": "116. Điều nào sau đây được sử dụng để xác định hành vi của điều khiển nhằm phản hồi đầu vào của người dùng trong WPF?",
    "choices": {
      "A": "EventHandlers",
      "B": "CommandBindings",
      "C": "EventTriggers",
      "D": "EventListeners"
    },
    "answer": "A"
  },
  {
    "id": 117,
    "text": "117. Điều nào sau đây được sử dụng để tạo bảng bố cục tùy chỉnh trong WPF?",
    "choices": {
      "A": "UserControl",
      "B": "CustomControl",
      "C": "UserInterface",
      "D": "CustomPanel"
    },
    "answer": "A"
  },
  {
    "id": 118,
    "text": "118. Cách nào sau đây được sử dụng để nhóm dữ liệu liên quan trong WPF?",
    "choices": {
      "A": "ListView",
      "B": "TreeView",
      "C": "ComboBox",
      "D": "GroupBox"
    },
    "answer": "A"
  },
  {
    "id": 119,
    "text": "119. Điều nào sau đây được sử dụng để hiển thị danh sách các mục có thể được chọn trong WPF?",
    "choices": {
      "A": "ListBox",
      "B": "ComboBox",
      "C": "TreeView",
      "D": "ListView"
    },
    "answer": "A"
  },
  {
    "id": 120,
    "text": "120. Điều nào sau đây được sử dụng để hiển thị biểu diễn dữ liệu theo thứ bậc trong WPF?",
    "choices": {
      "A": "ListBox",
      "B": "ComboBox",
      "C": "TreeView",
      "D": "ListView"
    },
    "answer": "A"
  },
  {
    "id": 121,
    "text": "121. Điều nào sau đây được sử dụng để xác định tập hợp các mục có thể được hiển thị trong ComboBox trong WPF?",
    "choices": {
      "A": "ListBoxItem",
      "B": "ComboBoxItem",
      "C": "TreeViewItem",
      "D": "ListViewItem"
    },
    "answer": "A"
  },
  {
    "id": 122,
    "text": "122. Điều nào sau đây được sử dụng để xác định bố cục và diện mạo của điều khiển trong WPF?",
    "choices": {
      "A": "ControlTemplate",
      "B": "DataTemplate",
      "C": "Style",
      "D": "ResourceDictionary"
    },
    "answer": "A"
  },
  {
    "id": 123,
    "text": "123. Điều nào sau đây được sử dụng để thiết lập giao diện của điều khiển dựa trên một điều kiện trong WPF?",
    "choices": {
      "A": "PropertyTrigger",
      "B": "DataTrigger",
      "C": "MultiTrigger",
      "D": "MultiDataTrigger"
    },
    "answer": "A"
  },
  {
    "id": 124,
    "text": "124. Điều nào sau đây được sử dụng để xác định tập hợp các tài nguyên liên quan có thể được áp dụng cho điều khiển trong WPF?",
    "choices": {
      "A": "ControlTemplate",
      "B": "DataTemplate",
      "C": "Style",
      "D": "ResourceDictionary"
    },
    "answer": "A"
  },
  {
    "id": 125,
    "text": "125. Điều nào sau đây được sử dụng để xác định cách bố trí của một điều khiển trong WPF?",
    "choices": {
      "A": "DockPanel",
      "B": "StackPanel",
      "C": "WrapPanel",
      "D": "Canvas"
    },
    "answer": "A"
  },
  {
    "id": 126,
    "text": "126. Điều nào sau đây được sử dụng để xác định bối cảnh dữ liệu cho điều khiển trong WPF?",
    "choices": {
      "A": "DataContext",
      "B": "Binding",
      "C": "RelativeSource",
      "D": "Source"
    },
    "answer": "A"
  },
  {
    "id": 127,
    "text": "127. Điều nào sau đây được sử dụng để xác định tập hợp các tài nguyên liên quan có thể được áp dụng cho cửa sổ hoặc ứng dụng trong WPF?",
    "choices": {
      "A": "ControlTemplate",
      "B": "DataTemplate",
      "C": "Style",
      "D": "ResourceDictionary"
    },
    "answer": "A"
  },
  {
    "id": 128,
    "text": "128. Điều nào sau đây được sử dụng để hiển thị danh sách các mục theo bố cục ngang hoặc dọc trong WPF?",
    "choices": {
      "A": "ListBox",
      "B": "ComboBox",
      "C": "WrapPanel",
      "D": "ListView"
    },
    "answer": "A"
  },
  {
    "id": 129,
    "text": "129. Điều nào sau đây được sử dụng để tạo bố cục tùy chỉnh trong WPF?",
    "choices": {
      "A": "Panel",
      "B": "Layout",
      "C": "Container",
      "D": "View"
    },
    "answer": "A"
  },
  {
    "id": 130,
    "text": "130. Điều nào sau đây được sử dụng để chỉ định biểu thức liên kết trong XAML trong WPF?",
    "choices": {
      "A": "< >",
      "B": "{{ }}",
      "C": "[ ]",
      "D": "( )"
    },
    "answer": "A"
  },
  {
    "id": 131,
    "text": "131. Điều nào sau đây được sử dụng để chỉ định trình kích hoạt (trigger) trong XAML trong WPF?",
    "choices": {
      "A": "< >",
      "B": "{{ }}",
      "C": "[ ]",
      "D": "( )"
    },
    "answer": "A"
  },
  {
    "id": 132,
    "text": "132. Cách nào sau đây được sử dụng để chỉ định tài nguyên trong XAML trong WPF?",
    "choices": {
      "A": "< >",
      "B": "{{ }}",
      "C": "[ ]",
      "D": "( )"
    },
    "answer": "A"
  },
  {
    "id": 133,
    "text": "133. Điều nào sau đây được sử dụng để chỉ định kiểu trong XAML trong WPF?",
    "choices": {
      "A": "< >",
      "B": "{{ }}",
      "C": "[ ]",
      "D": "( )"
    },
    "answer": "A"
  },
  {
    "id": 134,
    "text": "134. Điều nào sau đây được sử dụng để tạo một cọ vẽ tùy chỉnh trong WPF?",
    "choices": {
      "A": "SolidColorBrush",
      "B": "GradientBrush",
      "C": "ImageBrush",
      "D": "DrawingBrush"
    },
    "answer": "A"
  },
  {
    "id": 135,
    "text": "135. Cách nào sau đây được sử dụng để tạo cọ vẽ chuyển màu tuyến tính (linear gradient brush) trong WPF?",
    "choices": {
      "A": "SolidColorBrush",
      "B": "GradientBrush",
      "C": "ImageBrush",
      "D": "DrawingBrush"
    },
    "answer": "A"
  },
  {
    "id": 136,
    "text": "136. Điều nào sau đây được sử dụng để tạo một cọ vẽ xuyên tâm (radial gradient brush) trong WPF?",
    "choices": {
      "A": "SolidColorBrush",
      "B": "GradientBrush",
      "C": "ImageBrush",
      "D": "DrawingBrush"
    },
    "answer": "A"
  },
  {
    "id": 137,
    "text": "137. Cách nào sau đây được sử dụng để tạo cọ vẽ hình ảnh trong WPF?",
    "choices": {
      "A": "SolidColorBrush",
      "B": "GradientBrush",
      "C": "ImageBrush",
      "D": "DrawingBrush"
    },
    "answer": "A"
  },
  {
    "id": 138,
    "text": "138. Điều nào sau đây được sử dụng để tạo một cọ vẽ màu đồng nhất (solid color brush) trong WPF?",
    "choices": {
      "A": "SolidColorBrush",
      "B": "GradientBrush",
      "C": "ImageBrush",
      "D": "DrawingBrush"
    },
    "answer": "A"
  },
  {
    "id": 139,
    "text": "139. Cái nào sau đây được sử dụng để tạo hoạt ảnh cho một thuộc tính trong WPF?",
    "choices": {
      "A": "Storyboard",
      "B": "Animation",
      "C": "KeyFrame",
      "D": "Timeline"
    },
    "answer": "A"
  },
  {
    "id": 140,
    "text": "140. Cái nào sau đây được sử dụng để tạo hoạt ảnh khung hình chính trong WPF?",
    "choices": {
      "A": "Storyboard",
      "B": "Animation",
      "C": "KeyFrame",
      "D": "Timeline"
    },
    "answer": "A"
  },
  {
    "id": 141,
    "text": "141. Cái nào sau đây được sử dụng để tạo hoạt ảnh dòng thời gian trong WPF?",
    "choices": {
      "A": "Storyboard",
      "B": "Animation",
      "C": "KeyFrame",
      "D": "Timeline"
    },
    "answer": "A"
  },
  {
    "id": 142,
    "text": "142. Cái nào sau đây được sử dụng để chỉ định mục tiêu của một hoạt ảnh trong WPF?",
    "choices": {
      "A": "From",
      "B": "To",
      "C": "Target",
      "D": "Storyboard"
    },
    "answer": "A"
  },
  {
    "id": 143,
    "text": "143. Cái nào sau đây được sử dụng để tạo một storyboard trong WPF?",
    "choices": {
      "A": "<Storyboard>",
      "B": "<Animate>",
      "C": "<Animation>",
      "D": "<KeyFrame>"
    },
    "answer": "A"
  },
  {
    "id": 144,
    "text": "144. Cái nào sau đây được sử dụng để chỉ định thời lượng của một hoạt ảnh trong WPF?",
    "choices": {
      "A": "Duration",
      "B": "Length",
      "C": "Time",
      "D": "Interval"
    },
    "answer": "A"
  },
  {
    "id": 145,
    "text": "145. Cái nào sau đây được sử dụng để chỉ định hàm easing của một hoạt ảnh trong WPF?",
    "choices": {
      "A": "Easing",
      "B": "Ease",
      "C": "EasingFunction",
      "D": "EaseFunction"
    },
    "answer": "A"
  },
  {
    "id": 146,
    "text": "146. Cái nào sau đây được sử dụng để chỉ định thuộc tính mục tiêu của một hoạt ảnh trong WPF?",
    "choices": {
      "A": "TargetProperty",
      "B": "Property",
      "C": "Target",
      "D": "AnimationProperty"
    },
    "answer": "A"
  },
  {
    "id": 147,
    "text": "147. Cái nào sau đây được sử dụng để tạo một data template trong WPF?",
    "choices": {
      "A": "<DataTemplate>",
      "B": "<Template>",
      "C": "<ItemTemplate>",
      "D": "<ContentTemplate>"
    },
    "answer": "A"
  },
  {
    "id": 148,
    "text": "148. Cái nào sau đây được sử dụng để tạo một control template trong WPF?",
    "choices": {
      "A": "<ControlTemplate>",
      "B": "<Template>",
      "C": "<ItemTemplate>",
      "D": "<ContentTemplate>"
    },
    "answer": "A"
  },
  {
    "id": 149,
    "text": "149. Cái nào sau đây được sử dụng để tạo một style trong WPF?",
    "choices": {
      "A": "<Style>",
      "B": "<Template>",
      "C": "<ItemStyle>",
      "D": "<ContentStyle>"
    },
    "answer": "A"
  },
  {
    "id": 150,
    "text": "150. Cái nào sau đây được sử dụng để chỉ định loại mục tiêu của một style trong WPF?",
    "choices": {
      "A": "TargetType",
      "B": "Type",
      "C": "StyleTarget",
      "D": "Target"
    },
    "answer": "A"
  },
  {
    "id": 151,
    "text": "151. Cái nào sau đây được sử dụng để chỉ định tên mục tiêu của một style trong WPF?",
    "choices": {
      "A": "TargetName",
      "B": "Name",
      "C": "StyleTarget",
      "D": "Target"
    },
    "answer": "A"
  },
  {
    "id": 152,
    "text": "152. Cái nào sau đây được sử dụng để chỉ định style cơ sở của một style trong WPF?",
    "choices": {
      "A": "BasedOn",
      "B": "BaseStyle",
      "C": "ParentStyle",
      "D": "InheritStyle"
    },
    "answer": "A"
  },
  {
    "id": 153,
    "text": "153. Cái nào sau đây được sử dụng để tạo một trigger trong WPF?",
    "choices": {
      "A": "<Trigger>",
      "B": "<Condition>",
      "C": "<Behavior>",
      "D": "<Action>"
    },
    "answer": "A"
  },
  {
    "id": 154,
    "text": "154. Cái nào sau đây được sử dụng để chỉ định thuộc tính kích hoạt trigger trong WPF?",
    "choices": {
      "A": "Property",
      "B": "TriggerProperty",
      "C": "Value",
      "D": "Binding"
    },
    "answer": "A"
  },
  {
    "id": 155,
    "text": "155. Cái nào sau đây được sử dụng để chỉ định giá trị kích hoạt trigger trong WPF?",
    "choices": {
      "A": "Value",
      "B": "TriggerValue",
      "C": "Property",
      "D": "Binding"
    },
    "answer": "A"
  },
  {
    "id": 156,
    "text": "156. Cái nào sau đây được sử dụng để tạo một multi-trigger trong WPF?",
    "choices": {
      "A": "<MultiTrigger>",
      "B": "<Trigger>",
      "C": "<Condition>",
      "D": "<Behavior>"
    },
    "answer": "A"
  },
  {
    "id": 157,
    "text": "157. Cái nào sau đây được sử dụng để tạo một data trigger trong WPF?",
    "choices": {
      "A": "<DataTrigger>",
      "B": "<Trigger>",
      "C": "<Condition>",
      "D": "<Behavior>"
    },
    "answer": "A"
  },
  {
    "id": 158,
    "text": "158. Cái nào sau đây được sử dụng để chỉ định ràng buộc cho một data trigger trong WPF?",
    "choices": {
      "A": "Binding",
      "B": "DataBinding",
      "C": "ValueBinding",
      "D": "PropertyBinding"
    },
    "answer": "A"
  },
  {
    "id": 159,
    "text": "159. Cái nào sau đây được sử dụng để tạo một command binding trong WPF?",
    "choices": {
      "A": "<CommandBinding>",
      "B": "<Binding>",
      "C": "<EventBinding>",
      "D": "<Behavior>"
    },
    "answer": "A"
  },
  {
    "id": 160,
    "text": "160. Cái nào sau đây được sử dụng để chỉ định lệnh cho một command binding trong WPF?",
    "choices": {
      "A": "Command",
      "B": "Binding",
      "C": "Event",
      "D": "Behavior"
    },
    "answer": "A"
  },
  {
    "id": 161,
    "text": "161. Cái nào sau đây được sử dụng để chỉ định phương thức xử lý lệnh trong một command binding trong WPF?",
    "choices": {
      "A": "CommandTarget",
      "B": "CommandMethod",
      "C": "CommandHandler",
      "D": "CommandAction"
    },
    "answer": "A"
  },
  {
    "id": 162,
    "text": "162. XAML viết tắt cho cụm từ_____________________?",
    "choices": {
      "A": "eXtensible Application Markup Language",
      "B": "eXtensible Markup Application Language",
      "C": "eXtensible Markup Assertion Language",
      "D": "eXpandable Markup Application Language"
    },
    "answer": "A"
  },
  {
    "id": 163,
    "text": "163. Phần tử nào sau đây không phải là phần tử XAML hợp lệ?",
    "choices": {
      "A": "<Grid>",
      "B": "<TextBlock>",
      "C": "<Rectangle>",
      "D": "<Code>"
    },
    "answer": "A"
  },
  {
    "id": 164,
    "text": "164. Mục đích của thuộc tính x:Name trong XAML là gì?",
    "choices": {
      "A": "Nó gán một mã định danh duy nhất cho một phần tử.",
      "B": "Nó chỉ định loại của một phần tử.",
      "C": "Nó xác định hình thức trực quan của một phần tử.",
      "D": "Nó đặt vị trí của một phần tử trên màn hình."
    },
    "answer": "A"
  },
  {
    "id": 165,
    "text": "165. Cú pháp nào sau đây là dùng để đặt màu nền cho phần tử Button trong XAML?",
    "choices": {
      "A": "<Button Background=”Red”>",
      "B": "<Button Style=”Background: Red;”>",
      "C": "<Button.Background>Red</Button.Background>",
      "D": "<Button Style=”{Background: Red;}”>"
    },
    "answer": "A"
  },
  {
    "id": 166,
    "text": "166. Mục đích của thuộc tính x:Class trong XAML là gì?",
    "choices": {
      "A": "Nó chỉ định tên của tệp XAML.",
      "B": "Nó đặt không gian tên mặc định cho tệp XAML.",
      "C": "Nó xác định tên lớp cho tệp mã phía sau được tạo.",
      "D": "Nó gán một mã định danh duy nhất cho một phần tử."
    },
    "answer": "A"
  },
  {
    "id": 167,
    "text": "167. Cú pháp nào sau đây là dùng để đặt kích thước Font chữ của phần tử TextBlock trong XAML?",
    "choices": {
      "A": "<TextBlock FontSize=”12″>",
      "B": "<TextBlock Style=”FontSize: 12;”>",
      "C": "<TextBlock.FontSize>12</TextBlock.FontSize>",
      "D": "<TextBlock Style=”{FontSize: 12;}”>"
    },
    "answer": "A"
  },
  {
    "id": 168,
    "text": "168. Mục đích của thuộc tính x:DataType trong XAML là gì?",
    "choices": {
      "A": "Nó chỉ định loại của một phần tử.",
      "B": "Nó gán một mã định danh duy nhất cho một phần tử.",
      "C": "Nó đặt không gian tên mặc định cho tệp XAML.",
      "D": "Nó xác định kiểu dữ liệu mà một phần tử đại diện."
    },
    "answer": "A"
  },
  {
    "id": 169,
    "text": "169. Cú pháp nào sau đây là dùng để đặt màu nền trước của phần tử TextBox trong XAML?",
    "choices": {
      "A": "<TextBox Foreground=”Blue”>",
      "B": "<TextBox Style=”Foreground: Blue;”>",
      "C": "<TextBox.Foreground>Blue</TextBox.Foreground>",
      "D": "<TextBox Style=”{Foreground: Blue;}”>"
    },
    "answer": "A"
  },
  {
    "id": 170,
    "text": "170. Tiền tố nào sau đây không phải là tiền tố không gian tên XAML hợp lệ?",
    "choices": {
      "A": "x",
      "B": "d",
      "C": "mc",
      "D": "y"
    },
    "answer": "A"
  },
  {
    "id": 171,
    "text": "171. Mục đích của thuộc tính x:Bind trong XAML là gì?",
    "choices": {
      "A": "Nó đặt chế độ liên kết cho biểu thức liên kết dữ liệu.",
      "B": "Nó chỉ định đường dẫn đến nguồn dữ liệu cho biểu thức liên kết dữ liệu.",
      "C": "Nó tạo ra liên kết hai chiều giữa thành phần UI và nguồn dữ liệu.",
      "D": "Nó tạo ra một biểu thức liên kết được biên dịch để mang lại hiệu suất tốt hơn."
    },
    "answer": "A"
  },
  {
    "id": 172,
    "text": "172. Cú pháp nào sau đây là dùng để đặt lề của phần tử StackPanel trong XAML?",
    "choices": {
      "A": "<StackPanel Margin=”10,20,30,40″>",
      "B": "<StackPanel Style=”Margin: 10 20 30 40;”>",
      "C": "<StackPanel.Margin>10,20,30,40</StackPanel.Margin>",
      "D": "<StackPanel Style=”{Margin: 10 20 30 40;}”>"
    },
    "answer": "A"
  },
  {
    "id": 173,
    "text": "173. Mục đích của thuộc tính x:Static trong XAML là gì?",
    "choices": {
      "A": "Nó chỉ định một phương thức hoặc thuộc tính tĩnh có thể được gọi từ XAML.",
      "B": "Nó tạo ra một tài nguyên tĩnh có thể được sử dụng bởi nhiều phần tử.",
      "C": "Nó xác định một kiểu tĩnh có thể được áp dụng cho nhiều phần tử.",
      "D": "Nó đặt giá trị tĩnh cho một phần tử."
    },
    "answer": "A"
  },
  {
    "id": 174,
    "text": "174. Cú pháp nào sau đây là dùng để thiết lập căn chỉnh phần tử TextBlock trong XAML?",
    "choices": {
      "A": "<TextBlock HorizontalAlignment=”Center”>",
      "B": "<TextBlock Style=”HorizontalAlignment: Center;”>",
      "C": "<TextBlock.HorizontalAlignment>Center</TextBlock.HorizontalAlignment>",
      "D": "<TextBlock Style=”{HorizontalAlignment: Center;}”>"
    },
    "answer": "A"
  },
  {
    "id": 175,
    "text": "175. Mục đích của thuộc tính x:Key trong XAML là gì?",
    "choices": {
      "A": "Nó chỉ định một mã định danh duy nhất cho một tài nguyên.",
      "B": "Nó xác định mẫu dữ liệu cho phần tử liên kết dữ liệu. 43",
      "C": "Nó đặt giá trị mặc định cho thuộc tính phụ thuộc.",
      "D": "Nó gán một mã định danh duy nhất cho một phần tử."
    },
    "answer": "A"
  },
  {
    "id": 176,
    "text": "176. Kiểu dữ liệu nào sau đây không phải là kiểu dữ liệu XAML hợp lệ?",
    "choices": {
      "A": "Boolean",
      "B": "Double",
      "C": "Object",
      "D": "Array"
    },
    "answer": "A"
  },
  {
    "id": 177,
    "text": "177. Cú pháp nào sau đây là dùng để đặt kích thước phông chữ của phần tử TextBox trong XAML?",
    "choices": {
      "A": "<TextBox FontSize=”14″>",
      "B": "<TextBox Style=”FontSize: 14;”>",
      "C": "<TextBox.FontSize>14</TextBox.FontSize>",
      "D": "<TextBox Style=”{FontSize: 14;}”>"
    },
    "answer": "A"
  },
  {
    "id": 178,
    "text": "178. Mục đích của thuộc tính x:TypeArguments trong XAML là gì?",
    "choices": {
      "A": "Nó chỉ định loại phần tử trong XAML.",
      "B": "Nó định nghĩa kiểu của một lớp hoặc phương thức chung trong XAML.",
      "C": "Nó đặt loại thuộc tính phụ thuộc trong XAML.",
      "D": "Nó chỉ định loại nguồn dữ liệu trong XAML."
    },
    "answer": "A"
  },
  {
    "id": 179,
    "text": "179. Cú pháp nào sau đây là dùng để đặt màu nền cho phần tử Grid trong XAML?",
    "choices": {
      "A": "<Grid Background=”Red”>",
      "B": "<Grid Style=”Background: Red;”>",
      "C": "<Grid)Background>Red</Grid)Background>",
      "D": "<Grid Style=”{Background: Red;}”>"
    },
    "answer": "A"
  },
  {
    "id": 180,
    "text": "180. Mục đích của thuộc tính x:Shared trong XAML là gì?",
    "choices": {
      "A": "Nó chỉ định liệu một tài nguyên có thể được chia sẻ giữa nhiều phần tử hay không.",
      "B": "Nó đặt giá trị mặc định cho thuộc tính phụ thuộc.",
      "C": "Nó tạo ra một thể hiện chung của một phần tử.",
      "D": "Nó gán một mã định danh duy nhất cho một tài nguyên được chia sẻ."
    },
    "answer": "A"
  },
  {
    "id": 181,
    "text": "181. Sự khác biệt giữa DataTemplate và ControlTemplate trong XAML là gì?",
    "choices": {
      "A": "DataTemplate được sử dụng để xác định diện mạo của các phần tử liên kết dữ liệu, trong khi ControlTemplate được sử dụng để xác định diện mạo của các điều khiển tùy chỉnh.",
      "B": "DataTemplate được sử dụng để xác định giao diện của các điều khiển tùy chỉnh, trong khi ControlTemplate được sử dụng để xác định giao diện của các phần tử liên kết dữ liệu",
      "C": "DataTemplate được sử dụng để xác định hình thức của một loại dữ liệu cụ thể, trong khi ControlTemplate được sử dụng để xác định hình thức của một loại điều khiển cụ thể.",
      "D": "DataTemplate và ControlTemplate là các thuật ngữ có thể hoán đổi cho nhau trong XAML. trong khi ControlTemplate được sử dụng để xác định diện mạo của các điều khiển tùy chỉnh."
    },
    "answer": "A"
  },
  {
    "id": 182,
    "text": "182. Cú pháp nào sau đây là dùng để thiết lập căn chỉnh theo chiều ngang của phần tử StackPanel trong XAML?",
    "choices": {
      "A": "<StackPanel HorizontalAlignment=”Left”>",
      "B": "<StackPanel Style=”HorizontalAlignment: Left;”>",
      "C": "<StackPanel.HorizontalAlignment>Left</StackPanel.HorizontalAlignment>",
      "D": "<StackPanel Style=”{HorizontalAlignment: Left;}”>"
    },
    "answer": "A"
  },
  {
    "id": 183,
    "text": "183. Mục đích của phần tử ContentPresenter trong XAML là gì?",
    "choices": {
      "A": "Nó được sử dụng để hiển thị nội dung của mẫu điều khiển.",
      "B": "Nó xác định sự xuất hiện của một điều khiển tùy chỉnh.",
      "C": "Nó được sử dụng để liên kết nội dung của một phần tử với nguồn dữ liệu.",
      "D": "Nó đặt nội dung mặc định cho thuộc tính phụ thuộc."
    },
    "answer": "A"
  },
  {
    "id": 184,
    "text": "184. Cú pháp nào sau đây là dùng để đặt màu nền trước của phần tử Button trong XAML?",
    "choices": {
      "A": "<Button Foreground=”Red”>",
      "B": "<Button Style=”Foreground: Red;”>",
      "C": "<Button.Foreground>Red</Button.Foreground>",
      "D": "<Button Style=”{Foreground: Red;}”>"
    },
    "answer": "A"
  },
  {
    "id": 185,
    "text": "185. Cú pháp nào sau đây là dùng để thiết lập độ dày đường viền của phần tử Border trong XAML?",
    "choices": {
      "A": "<Border BorderThickness=”2″>",
      "B": "<Border Style=”BorderThickness: 2;”>",
      "C": "<Border.BorderThickness>2</Border.BorderThickness>",
      "D": "<Border Style=”{BorderThickness: 2;}”>"
    },
    "answer": "A"
  },
  {
    "id": 186,
    "text": "186. Cú pháp nào sau đây là dùng để  xác định kiểu trong XAML?",
    "choices": {
      "A": "<Style TargetType=”Button”>",
      "B": "<Button.Style>",
      "C": "<Style x:Key=”ButtonStyle”>",
      "D": "<Button x:Style=”ButtonStyle”>"
    },
    "answer": "A"
  },
  {
    "id": 187,
    "text": "187. Cú pháp nào sau đây là dùng để đặt màu nền trước của phần tử TextBlock trong XAML?",
    "choices": {
      "A": "<TextBlock Foreground=”Blue”>",
      "B": "<TextBlock Style=”Foreground: Blue;”>",
      "C": "<TextBlock.Foreground>Blue</TextBlock.Foreground>",
      "D": "<TextBlock Style=”{Foreground: Blue;}”>"
    },
    "answer": "A"
  },
  {
    "id": 188,
    "text": "188. Mục đích của thuộc tính x:Uid trong XAML là gì?",
    "choices": {
      "A": "Nó được sử dụng để đặt định danh duy nhất của một phần tử.",
      "B": "Nó được sử dụng để xác định biểu thức liên kết trong XAML.",
      "C": "Nó được sử dụng để cung cấp mã định danh duy nhất cho việc bản địa hóa.",
      "D": "Nó được sử dụng để xác định tài nguyên được đặt tên trong XAML."
    },
    "answer": "A"
  },
  {
    "id": 189,
    "text": "189. Cú pháp nào sau đây là dùng để đặt chiều cao của phần tử Nút trong XAML?",
    "choices": {
      "A": "<Button Height=”30″>",
      "B": "<Button Style=”Height: 30;”>",
      "C": "<Button.Height>30</Button.Height>",
      "D": "<Button Style=”{Height: 30;}”>"
    },
    "answer": "A"
  },
  {
    "id": 190,
    "text": "190. Cú pháp nào sau đây là dùng để thiết lập độ rộng của phần tử TextBox trong XAML?",
    "choices": {
      "A": "<TextBox Width=”100″>",
      "B": "<TextBox Style=”Width: 100;”>",
      "C": "<TextBox.Width>100</TextBox.Width>",
      "D": "<TextBox Style=”{Width: 100;}”>"
    },
    "answer": "A"
  },
  {
    "id": 191,
    "text": "191. Cú pháp nào sau đây là dùng để đặt kích thước phông chữ của thành phần Nhãn trong XAML?",
    "choices": {
      "A": "<Label FontSize=”14″>",
      "B": "<Label Style=”FontSize: 14;”>",
      "C": "<Label.FontSize>14</Label.FontSize>",
      "D": "<Label Style=”{FontSize: 14;}”>"
    },
    "answer": "A"
  },
  {
    "id": 192,
    "text": "192. Cú pháp nào sau đây là dùng để đặt họ Font chữ của phần tử TextBlock trong XAML?",
    "choices": {
      "A": "<TextBlock FontFamily=”Arial”>",
      "B": "<TextBlock Style=”FontFamily: Arial;”>",
      "C": "<TextBlock.FontFamily>Arial</TextBlock.FontFamily>",
      "D": "<TextBlock Style=”{FontFamily: Arial;}”>"
    },
    "answer": "A"
  },
  {
    "id": 193,
    "text": "193. Cú pháp nào sau đây là dùng để thiết lập nội dung của phần tử Button trong XAML?",
    "choices": {
      "A": "<Button Content=”Click me”>",
      "B": "<Button Text=”Click me”>",
      "C": "<Button.Content>Click me</Button.Content>",
      "D": "<Button TextBlock=”Click me”>"
    },
    "answer": "A"
  },
  {
    "id": 194,
    "text": "194. Cú pháp nào sau đây là dùng để thiết lập căn chỉnh văn bản của phần tử TextBox trong XAML?",
    "choices": {
      "A": "<TextBox TextAlignment=”Center”>",
      "B": "<TextBox Style=”TextAlignment: Center;”>",
      "C": "<TextBox.TextAlignment>Center</TextBox.TextAlignment>",
      "D": "<TextBox Style=”{TextAlignment: Center;}”>"
    },
    "answer": "A"
  },
  {
    "id": 195,
    "text": "195. Mục đích của thuộc tính x:ClassModifier trong XAML là gì?",
    "choices": {
      "A": "Nó được sử dụng để chỉ định tên lớp của tệp XAML.",
      "B": "Nó được sử dụng để thiết lập hành động xây dựng tệp XAML.",
      "C": "Nó được sử dụng để đặt mức truy cập của lớp được tạo.",
      "D": "Nó được sử dụng để xác định loại của một phần tử."
    },
    "answer": "A"
  },
  {
    "id": 196,
    "text": "196. Cú pháp nào sau đây là dùng để  liên kết thuộc tính của điều khiển với thuộc tính của nguồn dữ liệu trong XAML?",
    "choices": {
      "A": "<TextBlock Text=”{Binding Path=FirstName}” />",
      "B": "<TextBlock Binding=”FirstName” />",
      "C": "<TextBlock Text=”{Binding FirstName}” />",
      "D": "<TextBlock Path=”FirstName” />"
    },
    "answer": "A"
  },
  {
    "id": 197,
    "text": "197. Cú pháp nào sau đây là dùng để đặt lề của điều khiển trong XAML?",
    "choices": {
      "A": "<Button Margin=”10″ />",
      "B": "<Button Style=”Margin: 10;” />",
      "C": "<Button Margin=”10, 20, 10, 20″ />",
      "D": "<Button Style=”{Margin: 10;}” />"
    },
    "answer": "A"
  },
  {
    "id": 198,
    "text": "198. Cú pháp nào sau đây là dùng để đặt kích thước Font chữ của điều khiển trong XAML?",
    "choices": {
      "A": "<TextBlock FontSize=”14″ />",
      "B": "<TextBlock Style=”FontSize: 14;” />",
      "C": "<TextBlock Font.Size=”14″ />",
      "D": "<TextBlock Style=”{FontSize: 14;}” />"
    },
    "answer": "A"
  },
  {
    "id": 199,
    "text": "199. Cú pháp nào sau đây là dùng để đặt chiều cao của điều khiển trong XAML?",
    "choices": {
      "A": "<Button Height=”50″ />",
      "B": "<Button Style=”Height: 50;” />",
      "C": "<Button Height=”Auto” />",
      "D": "<Button Style=”{Height: 50;}” />"
    },
    "answer": "A"
  },
  {
    "id": 200,
    "text": "200. Mục đích của thuộc tính x:Arguments trong XAML là gì?",
    "choices": {
      "A": "Nó được sử dụng để chỉ định các đối số hàm tạo cho một điều khiển tùy chỉnh.",
      "B": "Nó được sử dụng để thiết lập hành động xây dựng tệp XAML.",
      "C": "Nó được sử dụng để xác định các tham số đầu vào cho một lệnh liên kết.",
      "D": "Nó được sử dụng để đặt giá trị mặc định cho thuộc tính phụ thuộc."
    },
    "answer": "A"
  },
  {
    "id": 201,
    "text": "201. Mục đích của thuộc tính x:FactoryMethod trong XAML là gì?",
    "choices": {
      "A": "Nó được sử dụng để chỉ định phương thức tạo phiên bản của điều khiển tùy chỉnh.",
      "B": "Nó được sử dụng để thiết lập hành động xây dựng tệp XAML.",
      "C": "Nó được sử dụng để chỉ định giá trị mặc định cho thuộc tính phụ thuộc.",
      "D": "Nó được sử dụng để xác định các tham số đầu vào cho một lệnh liên kết. chỉnh."
    },
    "answer": "A"
  },
  {
    "id": 202,
    "text": "202. Cú pháp nào sau đây là dùng để tạo một phiên bản mới của điều khiển tùy chỉnh trong XAML?",
    "choices": {
      "A": "<local:MyControl />",
      "B": "<MyControl />",
      "C": "<Control Type=”MyControl” />",
      "D": "<New Control=”MyControl” />"
    },
    "answer": "A"
  },
  {
    "id": 203,
    "text": "203. Cú pháp nào sau đây là dùng để thiết lập nội dung của điều khiển Button trong XAML?",
    "choices": {
      "A": "<Button Text=”Click Me” />",
      "B": "<Button Content=”Click Me” />",
      "C": "<Button Value=”Click Me” />",
      "D": "<Button Style=”{Content: Click Me;}” />"
    },
    "answer": "A"
  },
  {
    "id": 204,
    "text": "204. Cú pháp nào sau đây là dùng để tạo mẫu dữ liệu (data template) cho điều khiển ListBox trong XAML?",
    "choices": {
      "A": "<ListBox> <DataTemplate> … </DataTemplate> </ListBox>",
      "B": "<DataTemplate> <ListBox> … </ListBox> </DataTemplate>",
      "C": "<ListBox.ItemTemplate> <DataTemplate> … </DataTemplate> </ListBox.ItemTemplate>",
      "D": "<DataTemplate> <ItemTemplate> … </ItemTemplate> </DataTemplate> <DataTemplate> … </DataTemplate> </ListBox.ItemTemplate>"
    },
    "answer": "A"
  },
  {
    "id": 205,
    "text": "205. Cú pháp nào sau đây là dùng để liên kết điều khiển ListBox với thuộc tính tập hợp của nguồn dữ liệu trong XAML?",
    "choices": {
      "A": "<ListBox ItemsSource=”{Binding Path=Customers}” />",
      "B": "<ListBox Items=”{Binding Path=Customers}” />",
      "C": "<ListBox Items=”{Customers}” />",
      "D": "<ListBox ItemsSource=”{Customers}” />"
    },
    "answer": "A"
  },
  {
    "id": 206,
    "text": "206. Cú pháp nào sau đây là dùng để đặt hướng của điều khiển StackPanel trong XAML?",
    "choices": {
      "A": "<StackPanel Orientation=”Horizontal” />",
      "B": "<StackPanel Style=”Orientation: Horizontal;” />",
      "C": "<StackPanel.Horizontal />",
      "D": "<StackPanel Style=”{Orientation: Horizontal;}” />"
    },
    "answer": "A"
  },
  {
    "id": 207,
    "text": "207. Sau đây là các loại Trigger, ngoại trừ: 51",
    "choices": {
      "A": "Basic Triggers",
      "B": "Property Triggers",
      "C": "Event Triggers",
      "D": "Data Triggers"
    },
    "answer": "A"
  },
  {
    "id": 208,
    "text": "208. Điều nào sau đây là điều khiển để nhập mật khẩu?",
    "choices": {
      "A": "Menus",
      "B": "Popup",
      "C": "MailBox",
      "D": "PasswordBox"
    },
    "answer": "A"
  },
  {
    "id": 209,
    "text": "209. Thẻ nào sau đây là phần tử đối tượng mở hoặc vùng chứa của thư mục gốc?",
    "choices": {
      "A": "Htm",
      "B": "Html",
      "C": "Window",
      "D": "Script"
    },
    "answer": "A"
  },
  {
    "id": 210,
    "text": "210. Một điều khiển phản hồi đầu vào của người dùng là __________",
    "choices": {
      "A": "Key",
      "B": "Button",
      "C": "ComboBox",
      "D": "CheckBox 52"
    },
    "answer": "A"
  },
  {
    "id": 211,
    "text": "211. Điều nào sau đây không phải là điều khiển XAML?",
    "choices": {
      "A": "ContextMenu",
      "B": "DataGrid",
      "C": "Keyboard",
      "D": "Button"
    },
    "answer": "A"
  },
  {
    "id": 212,
    "text": "212. Phần mở rộng của tệp XAML là gì?",
    "choices": {
      "A": "xml",
      "B": "htm",
      "C": "xaml",
      "D": "html"
    },
    "answer": "A"
  },
  {
    "id": 213,
    "text": "213. Trong bảng bố cục nào các phần tử con được định vị theo thứ tự tuần tự từ trái sang phải hoặc từ trên xuống dưới dựa trên thuộc tính định hướng?",
    "choices": {
      "A": "StackPanel",
      "B": "WrapPanel",
      "C": "DockPanel",
      "D": "CanvasPanel"
    },
    "answer": "A"
  },
  {
    "id": 214,
    "text": "214. Điều nào sau đây được sử dụng để thu hút sự chú ý của người dùng về một thay đổi?",
    "choices": {
      "A": "Animations",
      "B": "Transitions",
      "C": "Pictures",
      "D": "Diagrams"
    },
    "answer": "A"
  },
  {
    "id": 215,
    "text": "215. XAML được phát triển bởi______________________",
    "choices": {
      "A": "Microsoft",
      "B": "Amazon",
      "C": "Apple",
      "D": "W3 schools"
    },
    "answer": "A"
  },
  {
    "id": 216,
    "text": "216. Có bao nhiêu loại liên kết dữ liệu trong XAML?",
    "choices": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "A"
  },
  {
    "id": 217,
    "text": "217. XAML là viết tắt của gì?",
    "choices": {
      "A": "Extensible Application Markup Language",
      "B": "Extensible Application Management Language",
      "C": "Extensible Application Modeling Language",
      "D": "Extensible Application Meta Language"
    },
    "answer": "A"
  },
  {
    "id": 218,
    "text": "218. Trong WPF, thẻ <Button> dùng để làm gì?",
    "choices": {
      "A": "Tạo một bảng",
      "B": "Tạo một nút bấm",
      "C": "Tạo một textbox",
      "D": "Tạo một label"
    },
    "answer": "A"
  },
  {
    "id": 219,
    "text": "219. Thuộc tính nào dùng để đặt tên cho một điều khiển trong XAML?",
    "choices": {
      "A": "Name",
      "B": "ID",
      "C": "Tag",
      "D": "Key"
    },
    "answer": "A"
  },
  {
    "id": 220,
    "text": "220. Để đặt nền cho một cửa sổ trong XAML, thuộc tính nào được sử dụng?",
    "choices": {
      "A": "Background",
      "B": "Foreground",
      "C": "Color",
      "D": "Brush"
    },
    "answer": "A"
  },
  {
    "id": 221,
    "text": "221. Thẻ <TextBlock> được sử dụng để làm gì trong XAML?",
    "choices": {
      "A": "Hiển thị văn bản",
      "B": "Hiển thị hình ảnh",
      "C": "Tạo nút bấm",
      "D": "Tạo cửa sổ"
    },
    "answer": "A"
  },
  {
    "id": 222,
    "text": "222. Trong XAML, thuộc tính nào được sử dụng để đặt chiều rộng của một điều khiển? 55",
    "choices": {
      "A": "Width",
      "B": "Height",
      "C": "Length",
      "D": "Size"
    },
    "answer": "A"
  },
  {
    "id": 223,
    "text": "223. Trong XAML, thuộc tính nào được sử dụng để đặt chiều cao của một điều khiển?",
    "choices": {
      "A": "Width",
      "B": "Height",
      "C": "Length",
      "D": "Size"
    },
    "answer": "A"
  },
  {
    "id": 224,
    "text": "224. Thẻ <Grid> trong XAML dùng để làm gì?",
    "choices": {
      "A": "Tạo lưới bố trí",
      "B": "Tạo nút bấm",
      "C": "Tạo textbox",
      "D": "Tạo label"
    },
    "answer": "A"
  },
  {
    "id": 225,
    "text": "225. Thuộc tính nào trong XAML dùng để liên kết dữ liệu với một điều khiển?",
    "choices": {
      "A": "Binding",
      "B": "Source",
      "C": "Data",
      "D": "Link"
    },
    "answer": "A"
  },
  {
    "id": 226,
    "text": "226. Thuộc tính nào trong XAML dùng để điều chỉnh kích thước của nội dung trong một điều khiển?",
    "choices": {
      "A": "Margin",
      "B": "Padding",
      "C": "Border",
      "D": "Spacing"
    },
    "answer": "A"
  },
  {
    "id": 227,
    "text": "227. Thuộc tính nào trong XAML để điều chỉnh khoảng cách xung quanh một điều khiển?",
    "choices": {
      "A": "Margin",
      "B": "Padding",
      "C": "Border",
      "D": "Spacing"
    },
    "answer": "A"
  },
  {
    "id": 228,
    "text": "228. Để tạo một danh sách các mục trong XAML, thẻ nào được sử dụng?",
    "choices": {
      "A": "<ListBox>",
      "B": "<ComboBox>",
      "C": "<Menu>",
      "D": "<TabControl>"
    },
    "answer": "A"
  },
  {
    "id": 229,
    "text": "229. Thuộc tính nào dùng để ẩn hoặc hiện một điều khiển trong XAML?",
    "choices": {
      "A": "Visibility",
      "B": "Display",
      "C": "Show",
      "D": "Hidden"
    },
    "answer": "A"
  },
  {
    "id": 230,
    "text": "230. Thuộc tính nào trong XAML để điều chỉnh căn chỉnh ngang của nội dung trong một điều khiển?",
    "choices": {
      "A": "HorizontalAlignment",
      "B": "VerticalAlignment",
      "C": "TextAlignment",
      "D": "ContentAlignment"
    },
    "answer": "A"
  },
  {
    "id": 231,
    "text": "231. Thuộc tính nào trong XAML để điều chỉnh căn chỉnh dọc của nội dung trong một điều khiển?",
    "choices": {
      "A": "HorizontalAlignment",
      "B": "VerticalAlignment",
      "C": "TextAlignment",
      "D": "ContentAlignment"
    },
    "answer": "A"
  },
  {
    "id": 232,
    "text": "232. Thẻ nào trong XAML được sử dụng để tạo một tab?",
    "choices": {
      "A": "<TabItem>",
      "B": "<TabControl>",
      "C": "<TabPanel>",
      "D": "<TabStrip>"
    },
    "answer": "A"
  },
  {
    "id": 233,
    "text": "233. Thuộc tính nào trong XAML để điều chỉnh phông chữ của văn bản?",
    "choices": {
      "A": "FontFamily",
      "B": "FontStyle",
      "C": "FontSize",
      "D": "FontWeight"
    },
    "answer": "A"
  },
  {
    "id": 234,
    "text": "234. Thuộc tính nào trong XAML để điều chỉnh kích thước phông chữ của văn bản?",
    "choices": {
      "A": "FontFamily",
      "B": "FontStyle",
      "C": "FontSize",
      "D": "FontWeight"
    },
    "answer": "A"
  },
  {
    "id": 235,
    "text": "235. Thuộc tính nào trong XAML để điều chỉnh kiểu phông chữ của văn bản (in đậm, in nghiêng, v.v.)?",
    "choices": {
      "A": "FontFamily",
      "B": "FontStyle",
      "C": "FontSize",
      "D": "FontWeight"
    },
    "answer": "A"
  },
  {
    "id": 236,
    "text": "236. Thuộc tính nào trong XAML để điều chỉnh độ đậm của phông chữ của văn bản?",
    "choices": {
      "A": "FontFamily",
      "B": "FontStyle",
      "C": "FontSize",
      "D": "FontWeight"
    },
    "answer": "A"
  },
  {
    "id": 237,
    "text": "237. Thẻ nào trong XAML được sử dụng để tạo một khung chứa (container) có thể cuộn?",
    "choices": {
      "A": "<ScrollViewer>",
      "B": "<ScrollBar>",
      "C": "<ScrollableControl>",
      "D": "<ScrollContainer>"
    },
    "answer": "A"
  },
  {
    "id": 238,
    "text": "238. Thuộc tính nào trong XAML để điều chỉnh màu nền của văn bản?",
    "choices": {
      "A": "Background",
      "B": "Foreground",
      "C": "Color",
      "D": "Brush"
    },
    "answer": "A"
  },
  {
    "id": 239,
    "text": "239. Thẻ nào trong XAML được sử dụng để tạo một menu?",
    "choices": {
      "A": "<Menu>",
      "B": "<MenuItem>",
      "C": "<ContextMenu>",
      "D": "<Toolbar>"
    },
    "answer": "A"
  },
  {
    "id": 240,
    "text": "240. Thẻ nào trong XAML được sử dụng để tạo một mục trong menu?",
    "choices": {
      "A": "<MenuItem>",
      "B": "<Menu>",
      "C": "<ContextMenu>",
      "D": "<Toolbar>"
    },
    "answer": "A"
  },
  {
    "id": 241,
    "text": "241. Thẻ nào trong XAML được sử dụng để tạo một thanh công cụ?",
    "choices": {
      "A": "<Toolbar>",
      "B": "<ToolStrip>",
      "C": "<Menu>",
      "D": "<Statusbar>"
    },
    "answer": "A"
  },
  {
    "id": 242,
    "text": "242. Thẻ nào trong XAML được sử dụng để tạo một biểu tượng (icon)?",
    "choices": {
      "A": "<Image>",
      "B": "<Icon>",
      "C": "<Symbol>",
      "D": "<Picture>"
    },
    "answer": "A"
  },
  {
    "id": 243,
    "text": "243. Thẻ nào trong XAML được sử dụng để tạo một checkbox?",
    "choices": {
      "A": "<CheckBox>",
      "B": "<RadioButton>",
      "C": "<ToggleButton>",
      "D": "<Button>"
    },
    "answer": "A"
  },
  {
    "id": 244,
    "text": "244. Thẻ nào trong XAML được sử dụng để tạo một radio button?",
    "choices": {
      "A": "<RadioButton>",
      "B": "<CheckBox>",
      "C": "<ToggleButton>",
      "D": "<Button>"
    },
    "answer": "A"
  },
  {
    "id": 245,
    "text": "245. Thuộc tính nào trong XAML để liên kết giá trị của một điều khiển với một thuộc tính trong mã?",
    "choices": {
      "A": "Binding",
      "B": "Source",
      "C": "Data",
      "D": "Link"
    },
    "answer": "A"
  },
  {
    "id": 246,
    "text": "246. Thẻ nào trong XAML được sử dụng để tạo một thanh trạng thái (status bar)?",
    "choices": {
      "A": "<StatusBar>",
      "B": "<StatusStrip>",
      "C": "<Toolbar>",
      "D": "<Menu>"
    },
    "answer": "A"
  },
  {
    "id": 247,
    "text": "247. Thuộc tính nào trong XAML để điều chỉnh màu viền của một điều khiển?",
    "choices": {
      "A": "BorderBrush",
      "B": "BorderColor",
      "C": "BorderWidth",
      "D": "BorderStyle"
    },
    "answer": "A"
  },
  {
    "id": 248,
    "text": "248. Thuộc tính nào trong XAML để điều chỉnh độ rộng của viền của một điều khiển?",
    "choices": {
      "A": "BorderBrush",
      "B": "BorderColor",
      "C": "BorderWidth",
      "D": "BorderStyle"
    },
    "answer": "A"
  },
  {
    "id": 249,
    "text": "249. Thẻ nào trong XAML được sử dụng để tạo một trình điều khiển thời gian (timer)?",
    "choices": {
      "A": "<Timer>",
      "B": "<Clock>",
      "C": "<TimeSpan>",
      "D": "<TimePicker>"
    },
    "answer": "A"
  },
  {
    "id": 250,
    "text": "250. Thẻ nào trong XAML được sử dụng để tạo một thanh tiến trình (progress bar)?",
    "choices": {
      "A": "<ProgressBar>",
      "B": "<Progress>",
      "C": "<TrackBar>",
      "D": "<ScrollBar>"
    },
    "answer": "A"
  },
  {
    "id": 251,
    "text": "251. Thuộc tính nào trong XAML để điều chỉnh hướng của một điều khiển (dọc hoặc ngang)?",
    "choices": {
      "A": "Orientation",
      "B": "Direction",
      "C": "Layout",
      "D": "Align"
    },
    "answer": "A"
  },
  {
    "id": 252,
    "text": "252. Thẻ nào trong XAML được sử dụng để tạo một textbox có khả năng nhập liệu đa dòng?",
    "choices": {
      "A": "<TextBox>",
      "B": "<TextArea>",
      "C": "<RichTextBox>",
      "D": "<MultiLineTextBox>"
    },
    "answer": "A"
  },
  {
    "id": 253,
    "text": "253. Thuộc tính nào trong XAML để điều chỉnh độ trong suốt của một điều khiển?",
    "choices": {
      "A": "Opacity",
      "B": "Transparency",
      "C": "Alpha",
      "D": "Visible"
    },
    "answer": "A"
  },
  {
    "id": 254,
    "text": "254. Thuộc tính nào trong XAML để điều chỉnh chế độ hiển thị của một điều khiển (visible, hidden, collapsed)?",
    "choices": {
      "A": "Visibility",
      "B": "Display",
      "C": "Show",
      "D": "Hidden"
    },
    "answer": "A"
  },
  {
    "id": 255,
    "text": "255. Thẻ nào trong XAML được sử dụng để tạo một panel có thể thay đổi kích thước?",
    "choices": {
      "A": "<ResizePanel>",
      "B": "<DockPanel>",
      "C": "<StackPanel>",
      "D": "<Grid>"
    },
    "answer": "A"
  },
  {
    "id": 256,
    "text": "256. Thẻ nào trong XAML được sử dụng để tạo một danh sách các mục có thể chọn nhiều mục?",
    "choices": {
      "A": "<ListBox>",
      "B": "<ComboBox>",
      "C": "<Menu>",
      "D": "<TabControl>"
    },
    "answer": "A"
  },
  {
    "id": 257,
    "text": "257. Thuộc tính nào trong XAML để điều chỉnh khoảng cách giữa các mục trong một danh sách?",
    "choices": {
      "A": "ItemSpacing",
      "B": "ItemMargin",
      "C": "ItemPadding",
      "D": "ItemGap"
    },
    "answer": "A"
  },
  {
    "id": 258,
    "text": "258. Thẻ nào trong XAML được sử dụng để tạo một khung chứa (container) cho cácnútbấm?",
    "choices": {
      "A": "<ButtonPanel>",
      "B": "<Panel>",
      "C": "<StackPanel>",
      "D": "<Grid>"
    },
    "answer": "A"
  },
  {
    "id": 259,
    "text": "259. Thuộc tính nào trong XAML để điều chỉnh chiều rộng của cột trong một Grid?",
    "choices": {
      "A": "ColumnWidth",
      "B": "Width",
      "C": "ColumnSize",
      "D": "Size"
    },
    "answer": "A"
  },
  {
    "id": 260,
    "text": "260. Thuộc tính nào trong XAML để điều chỉnh chiều cao của hàng trong một Grid?",
    "choices": {
      "A": "RowHeight",
      "B": "Height",
      "C": "RowSize",
      "D": "Size"
    },
    "answer": "A"
  },
  {
    "id": 261,
    "text": "261. Thẻ nào trong XAML được sử dụng để tạo một bảng (table)?",
    "choices": {
      "A": "<Grid>",
      "B": "<Table>",
      "C": "<Panel>",
      "D": "<StackPanel>"
    },
    "answer": "A"
  },
  {
    "id": 262,
    "text": "262. Thuộc tính nào trong XAML để điều chỉnh màu nền của một hàng trong mộtGrid?",
    "choices": {
      "A": "RowBackground",
      "B": "Background",
      "C": "RowColor",
      "D": "RowBrush"
    },
    "answer": "A"
  },
  {
    "id": 263,
    "text": "263. Thuộc tính nào trong XAML để điều chỉnh màu nền của một cột trong một Grid?",
    "choices": {
      "A": "ColumnBackground",
      "B": "Background",
      "C": "ColumnColor",
      "D": "ColumnBrush"
    },
    "answer": "A"
  },
  {
    "id": 264,
    "text": "264. Thẻ nào trong XAML được sử dụng để tạo một khung chứa (container) có thể thay đổi kích thước?",
    "choices": {
      "A": "<Grid>",
      "B": "<DockPanel>",
      "C": "<StackPanel>",
      "D": "<ResizablePanel>"
    },
    "answer": "A"
  },
  {
    "id": 265,
    "text": "265. Thẻ nào trong XAML được sử dụng để tạo một vùng chứa (container) cho các mục trong một danh sách?",
    "choices": {
      "A": "<ListBox>",
      "B": "<ComboBox>",
      "C": "<ItemsControl>",
      "D": "<TabControl>"
    },
    "answer": "A"
  },
  {
    "id": 266,
    "text": "266. Sự kiện Loaded trong WPF xảy ra khi nào?",
    "choices": {
      "A": "Khi khởi tạo đối tượng điều khiển",
      "B": "Khi điều khiển được hiển thị lần đầu tiên trên UI",
      "C": "Khi người dùng click chuột",
      "D": "Khi điều khiển bị đóng"
    },
    "answer": "A"
  },
  {
    "id": 267,
    "text": "267. Trong WPF, thuộc tính IsEnabled có tác dụng gì?",
    "choices": {
      "A": "Ẩn điều khiển",
      "B": "Làm điều khiển mờ đi",
      "C": "Chỉ định điều khiển có được phép tương tác với người dùng hay không",
      "D": "Gắn phím tắt cho điều khiển"
    },
    "answer": "A"
  },
  {
    "id": 268,
    "text": "268. Dispatcher trong WPF dùng để làm gì?",
    "choices": {
      "A": "Thực thi tác vụ nền",
      "B": "Quản lý bộ nhớ",
      "C": "Thực thi mã trên luồng UI (giao diện người dùng)",
      "D": "Định dạng dữ liệu"
    },
    "answer": "A"
  },
  {
    "id": 269,
    "text": "269. Cách nào để hiển thị một hộp thoại xác nhận (Yes/No) trong WPF?",
    "choices": {
      "A": "MessageBox.Show(\"?\", \"Xác nhận\")",
      "B": "ConfirmBox.Show(\"Xác nhận\")",
      "C": "MessageBox.Show(\"Xác nhận\", \"?\", MessageBoxButton.YesNo)",
      "D": "Alert.Show(\"Xác nhận\", MessageBoxType.YesNo)"
    },
    "answer": "A"
  },
  {
    "id": 270,
    "text": "270. Trong WPF, bạn có thể liên kết Command với điều khiển nào?",
    "choices": {
      "A": "Button",
      "B": "MenuItem",
      "C": "InputGesture",
      "D": "Cả A, B và C"
    },
    "answer": "A"
  },
  {
    "id": 271,
    "text": "271. Giao diện người dùng trong WPF có thể phản hồi thay đổi dữ liệu thông qua? 68",
    "choices": {
      "A": "Static binding",
      "B": "INPC (INotifyPropertyChanged)",
      "C": "EventTrigger",
      "D": "DataTemplateSelector"
    },
    "answer": "A"
  },
  {
    "id": 272,
    "text": "272. ObservableCollection<T> khác với List<T> ở điểm nào?",
    "choices": {
      "A": "Cho phép duyệt tuần tự",
      "B": "Không thể thêm phần tử mới",
      "C": "Tự động thông báo khi thay đổi dữ liệu",
      "D": "Không được dùng trong WPF"
    },
    "answer": "A"
  },
  {
    "id": 273,
    "text": "273. Lớp nào giúp vẽ hình học vector trong WPF?",
    "choices": {
      "A": "Bitmap",
      "B": "DrawingVisual",
      "C": "GDI",
      "D": "UIElement"
    },
    "answer": "A"
  },
  {
    "id": 274,
    "text": "274. Để sử dụng DataContext kế thừa từ cha sang con, ta cần:",
    "choices": {
      "A": "Gắn riêng từng Binding",
      "B": "Thiết lập lại Source",
      "C": "Không cần làm gì, nó kế thừa tự động",
      "D": "Sử dụng StaticResource"
    },
    "answer": "A"
  },
  {
    "id": 275,
    "text": "275. Control nào dùng để nhập văn bản mật khẩu?",
    "choices": {
      "A": "TextBox",
      "B": "PasswordBox",
      "C": "RichTextBox",
      "D": "SecureTextBox"
    },
    "answer": "A"
  },
  {
    "id": 276,
    "text": "276. Sự kiện PreviewMouseDown là loại sự kiện gì?",
    "choices": {
      "A": "Bubbling",
      "B": "Direct",
      "C": "Tunneling",
      "D": "Command"
    },
    "answer": "A"
  },
  {
    "id": 277,
    "text": "277. BindingGroup trong WPF dùng để?",
    "choices": {
      "A": "Gom nhóm các điều khiển",
      "B": "Gom nhóm các thuộc tính để validate cùng lúc",
      "C": "Tạo giao diện cho nhóm người dùng",
      "D": "Không có trong WPF"
    },
    "answer": "A"
  },
  {
    "id": 278,
    "text": "278. Control nào phù hợp để nhập và hiển thị văn bản có định dạng?",
    "choices": {
      "A": "TextBox",
      "B": "RichTextBox",
      "C": "Label",
      "D": "PasswordBox"
    },
    "answer": "A"
  },
  {
    "id": 279,
    "text": "279. Đối với các biểu đồ trực quan (chart), WPF thường tích hợp thư viện nào?",
    "choices": {
      "A": "WinForms.DataViz",
      "B": "OxyPlot / LiveCharts",
      "C": "System.Charting",
      "D": "DataWindow"
    },
    "answer": "A"
  },
  {
    "id": 280,
    "text": "280. Control nào không cho phép nhập liệu từ bàn phím?",
    "choices": {
      "A": "ComboBox",
      "B": "Label",
      "C": "TextBox",
      "D": "PasswordBox"
    },
    "answer": "A"
  },
  {
    "id": 281,
    "text": "281. Thuộc tính ToolTip dùng để làm gì?",
    "choices": {
      "A": "Thiết lập phím tắt",
      "B": "Gán tên biến",
      "C": "Hiển thị chú thích khi rê chuột",
      "D": "Hiển thị thông báo lỗi 70"
    },
    "answer": "A"
  },
  {
    "id": 282,
    "text": "282. Phần tử nào là cơ sở của tất cả điều khiển giao diện trong WPF?",
    "choices": {
      "A": "FrameworkElement",
      "B": "UIElement",
      "C": "Control",
      "D": "DependencyObject"
    },
    "answer": "A"
  },
  {
    "id": 283,
    "text": "283. Control nào dùng để lựa chọn giá trị thời gian?",
    "choices": {
      "A": "DatePicker",
      "B": "TimePicker",
      "C": "Calendar",
      "D": "TimeSpanBox"
    },
    "answer": "A"
  },
  {
    "id": 284,
    "text": "284. Lớp DependencyProperty được sử dụng để:",
    "choices": {
      "A": "Tạo thuộc tính tĩnh",
      "B": "Hỗ trợ gán dữ liệu qua Binding",
      "C": "Tạo sự kiện",
      "D": "Lưu file"
    },
    "answer": "A"
  },
  {
    "id": 285,
    "text": "285. Thành phần nào xử lý layout trong WPF?",
    "choices": {
      "A": "LayoutManager",
      "B": "Panel",
      "C": "CanvasManager",
      "D": "UIFlow"
    },
    "answer": "A"
  },
  {
    "id": 286,
    "text": "286. Kiểu panel nào tự động sắp xếp các phần tử theo dòng và xuống hàng khi hết chỗ?",
    "choices": {
      "A": "StackPanel",
      "B": "Canvas",
      "C": "WrapPanel",
      "D": "DockPanel"
    },
    "answer": "A"
  },
  {
    "id": 287,
    "text": "287. Class VisualTreeHelper dùng để:",
    "choices": {
      "A": "Quản lý sự kiện",
      "B": "Tìm và duyệt cây giao diện trực quan 71",
      "C": "Xử lý dữ liệu logic",
      "D": "Hiển thị hình ảnh"
    },
    "answer": "A"
  },
  {
    "id": 288,
    "text": "288. Giá trị Visibility.Collapsed có ý nghĩa gì?",
    "choices": {
      "A": "Ẩn nhưng vẫn chiếm chỗ",
      "B": "Ẩn và không chiếm không gian",
      "C": "Hiển thị",
      "D": "Hiển thị mờ"
    },
    "answer": "A"
  },
  {
    "id": 289,
    "text": "289. WPF cung cấp mô hình xử lý đầu vào nào?",
    "choices": {
      "A": "Synchronous Input",
      "B": "Asynchronous Input",
      "C": "Routed Events",
      "D": "Keyboard Filters"
    },
    "answer": "A"
  },
  {
    "id": 290,
    "text": "290. Cơ chế xác định thay đổi thuộc tính trong WPF dựa vào?",
    "choices": {
      "A": "PropertyChangedCallback",
      "B": "Static Binding",
      "C": "DataContext",
      "D": "LayoutControl"
    },
    "answer": "A"
  },
  {
    "id": 291,
    "text": "291. BindingMode.OneTime nghĩa là gì?",
    "choices": {
      "A": "Gán giá trị một lần duy nhất từ source đến target",
      "B": "Cập nhật liên tục",
      "C": "Gán hai chiều",
      "D": "Gán từ target sang source"
    },
    "answer": "A"
  },
  {
    "id": 292,
    "text": "292. Đối với ResourceDictionary, khi bạn muốn gộp nhiều file resource, bạn dùng?",
    "choices": {
      "A": "MergedDictionaries",
      "B": "ResourceGroup",
      "C": "ResourceLinks",
      "D": "DictionaryChain 72"
    },
    "answer": "A"
  },
  {
    "id": 293,
    "text": "293. Control nào được dùng để trình bày dữ liệu dạng bảng?",
    "choices": {
      "A": "TreeView",
      "B": "DataGrid",
      "C": "ListBox",
      "D": "Menu"
    },
    "answer": "A"
  },
  {
    "id": 294,
    "text": "294. Lớp nào hỗ trợ tải hình ảnh từ file trong WPF?",
    "choices": {
      "A": "ImageReader",
      "B": "BitmapImage",
      "C": "FileStream",
      "D": "PictureBox"
    },
    "answer": "A"
  },
  {
    "id": 295,
    "text": "295. Thuộc tính HorizontalAlignment=\"Stretch\" có tác dụng gì?",
    "choices": {
      "A": "Căn giữa",
      "B": "Đẩy sang trái",
      "C": "Đầy chiều ngang theo vùng chứa",
      "D": "Không thay đổi"
    },
    "answer": "A"
  },
  {
    "id": 296,
    "text": "296. Để thêm cử chỉ bàn phím (hotkey) cho lệnh trong WPF, bạn dùng?",
    "choices": {
      "A": "InputGesture",
      "B": "KeyEvent",
      "C": "InputManager",
      "D": "ShortcutKey"
    },
    "answer": "A"
  },
  {
    "id": 297,
    "text": "297. Cách khai báo Binding ngắn gọn trong XAML là:",
    "choices": {
      "A": "{Bind}",
      "B": "{Binding}",
      "C": "Binding = \"\"",
      "D": "@Binding"
    },
    "answer": "A"
  },
  {
    "id": 298,
    "text": "298. Điều khiển nào giúp chọn giá trị từ danh sách xổ xuống?",
    "choices": {
      "A": "ListView",
      "B": "ComboBox",
      "C": "TextBox",
      "D": "Menu"
    },
    "answer": "A"
  },
  {
    "id": 299,
    "text": "299. Cách nào đúng để tạo một Window mới và hiển thị theo dạng dialog?",
    "choices": {
      "A": "new Window().Show()",
      "B": "new Window().Run()",
      "C": "new Window().ShowDialog()",
      "D": "Window.Open()"
    },
    "answer": "A"
  },
  {
    "id": 300,
    "text": "300. Thành phần Adorner trong WPF dùng để:",
    "choices": {
      "A": "Vẽ hình nền",
      "B": "Trang trí điều khiển (highlight, tooltip mở rộng)",
      "C": "Gán hình ảnh nền cho Grid",
      "D": "Không có trong WPF"
    },
    "answer": "A"
  }
];
