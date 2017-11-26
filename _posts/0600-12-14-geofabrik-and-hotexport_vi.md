---
layout: doc
title: Sử dụng Geofabrik và HOT Export
permalink: /vi/osm-data/geofabrik-and-hot-export/
lang: vi
category: osm-data
---

Sử dụng Geofabrik và HOT Export
================

> This guide may be downloaded as [Geofabrik_and_HOT_Export_vi.odt](/files/Geofabrik_and_HOT_Export_vi.odt) or [Geofabrik_and_HOT_Export_vi.pdf](/files/Geofabrik_and_HOT_Export_vi.pdf)  
> Cập nhật: 2017-10-31  

Sau khi học cách thêm và chỉnh sửa dữ liệu trong OpenStreetMap (OSM), bây giờ có thể bạn muốn lấy dữ liệu làm bản sao lưu hoặc xử lý nó bằng phần mềm Hệ thống Thông tin Địa lý mã nguồn mở, chẳng hạn như Quantum GIS ([www.qgis.org](http://www.qgis.org)).  

TẢI DỮ LIỆU OSM TỪ TRANG WEB GEOFABRIK
-------------------------------------

Dữ liệu OSM có thể thu được dễ dàng bằng cách tải xuống từ [http://download.geofabrik.de/openstreetmap/](http://http://download.geofabrik.de/openstreetmap/)

![Tải dữ liệu từ geofabrik][]

Dữ liệu được chia thành nhiều vùng. Indonesia có thể được tìm thấy như là một phần của châu Á bằng cách nhấp vào Tiểu khu vực châu Á trên bảng màu xanh và sau đó trang sẽ xuất hiện như thế này.  

![Dữ liệu trên geofabrik của châu Á][]

Sau khi xuất hiện ở đầu trang, xem tiểu vùng chia thành các quốc gia Châu Á như thế nào. Để có được dữ liệu, bạn cần phải nhấp vào nhà nước Indonesia trên bảng màu xanh, và nó sẽ xuất hiện như thế này.  

![Dữ liệu trên geofabrik của Indonesia][]

Sau đó, nếu bạn muốn lấy dữ liệu của Indonesia ở định dạng shapefile (.shp), bạn nhấp vào liên kết indonesia-latest.shp.zip và tệp sẽ được tải xuống. Có một số định dạng có thể được tải xuống. Một định dạng phổ biến là shapefile (shp) với các điểm, polyline, và lớp đa giác.  

Bạn có thể kiểm tra dữ liệu thời gian qua đã được cập nhật. Xin lưu ý, máy chủ thường cập nhật dữ liệu 24 giờ một lần, vì vậy nếu bạn chỉ cần tải dữ liệu lên OSM thì dữ liệu sẽ không xuất hiện tự động khi bạn tải xuống, nhưng bạn phải đợi các cập nhật mới nhất từ máy chủ.  

TẢI XUỐNG DỮ LIỆU OSM TỪ TRANG WEB HOT-EXPORT
--------------------------------------

Nếu bạn chỉ muốn tải xuống một khu vực cụ thể với một thuộc tính cụ thể, bạn có thể sử dụng dịch vụ tải dữ liệu Hot-Exports. Mở <http://export.hotosm.org/> sẽ xuất hiện như sau:  

![Tải dữ liệu từ HOT][]

Để có được dữ liệu từ trang web này, bạn phải có một tài khoản. Để tạo một lần nhấp vào **Tạo tài khoản** ở góc dưới bên trái, sau đó nhập email, mật khẩu và mật khẩu xác nhận của bạn, tiếp theo là **Tạo tài khoản**. Sau đó bạn sẽ thấy một thông báo tương tự như "Một tin nhắn với một liên kết xác nhận đã được gửi đến địa chỉ email của bạn. Vui lòng mở liên kết để kích hoạt tài khoản của bạn "cho biết tài khoản của bạn đã được tạo thành công và bạn đã có email kích hoạt.  

![Tài khoản để tải dữ liệu từ HOT][]

Sau đó đăng nhập bằng tài khoản bạn đã tạo.  

![Đăng nhập vào HOT][]

Khi bạn đã đăng nhập thành công, để có được dữ liệu bạn muốn nhấp vào **New Job**, sau đó điền vào tên và mô tả công việc của bạn. Bạn có thể chọn một khu vực sử dụng bản đồ, sau đó nhấp lưu.  

![Thêm tác vụ xuất dữ liệu][]

Nếu bạn muốn ou có thể chọn một tập tin định sẵn, một tập tin dịch, hoặc bỏ qua cả hai tùy chọn.  

![Cấu hình tác vụ][]

Máy chủ sẽ xử lý yêu cầu của bạn, với thời gian tùy thuộc vào khu vực bạn chọn và dung lượng máy chủ. Bạn có thể chọn định dạng tệp bạn muốn tải xuống như ESRI Shapefile. Tất cả các yêu cầu tải về mà bạn tạo sẽ xuất hiện trong tác vụ, vì vậy nếu có thời gian bạn muốn tải về cùng một khu vực, bạn có thể tìm kiếm cùng một công việc và tải nó lại mà không cần phải bấm vào New Job.  

![Tạo tác vụ][]

[Tải dữ liệu từ geofabrik]: /images/osm-data/download-geofabrik.png
[Dữ liệu trên geofabrik của châu Á]: /images/osm-data/geofabrik-asia.png
[Dữ liệu trên geofabrik của Indonesia]: /images/osm-data/geofabrik-indonesia.png
[Tải dữ liệu từ HOT]: /images/osm-data/hot-export.png
[Tài khoản để tải dữ liệu từ HOT]: /images/osm-data/hot-export-account.png
[Đăng nhập vào HOT]: /images/osm-data/hot-export-login.png
[Thêm tác vụ xuất dữ liệu]: /images/osm-data/new-export-job.png
[Cấu hình tác vụ]: /images/osm-data/job-configuration.png
[Tạo tác vụ]: /images/osm-data/job-created.png
