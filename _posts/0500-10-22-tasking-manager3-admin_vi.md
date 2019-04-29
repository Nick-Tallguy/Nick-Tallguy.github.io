---
layout: doc
title: Trình quản lý tác vụ phiên bản 3 - Tạo dự án mới
permalink: /vi/coordination/tasking-manager3-project-admin/
lang: vi
category: coordination
---

# Trình quản lý tác vụ OSM - Tạo dự án và quản trị


**Hướng dẫn này mô tả phiên bản hiện tại của Trình quản lý tác vụ. Nếu phiên bản giao diện người dùng của bạn trông khác với trình mô tả ở đây thì bạn nên tham khảo [Hướng dẫn sử dụng cho phiên bản trước đó](/vi/coordination/tasking-manager-project-admin)**

Mục lục
-------------
-  [Đăng nhập ](/vi/coordination/tasking-manager3-project-admin/#logging-in-&amp;amp;-access-levels)  
-  [Khởi tạo dự án mới - xác định khu vực quan tâm](/vi/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)  
-  [Tạo tác vụ - chia nhỏ khu vực quan tâm](/vi/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)
-  [Tạo Dự án - chỉ định những gì người dùng của bạn cần biết](/vi/coordination/tasking-manager3-project-admin/#create-the-project)
    -  [Mô tả - điều đầu tiên mà người dùng tìm hiểu về dự án của bạn](/vi/coordination/tasking-manager3-project-admin/#description)
    -  [Hướng dẫn - những gì người dùng nên làm](/vi/coordination/tasking-manager3-project-admin/#instructions)
    -  [Dữ liệu - nơi dự án thuộc về](/vi/coordination/tasking-manager3-project-admin/#metadata)
    -  [Khu vực Ưu tiên - nơi người dùng bắt đầu lập bản đồ](/vi/coordination/tasking-manager3-project-admin/#priority-areas)
    -  [Hình ảnh - cơ sở để lập bản đồ](/vi/coordination/tasking-manager3-project-admin/#imagery)
    -  [Quyền - người được phép lập bản đồ và xác nhận](/vi/coordination/tasking-manager3-project-admin/#permissions)
    -  [Gợi ý hữu ích - làm thế nào bạn nên điền vào tất cả các lĩnh vực này](/vi/coordination/tasking-manager3-project-admin/#instruction-notes)
    -  [Xuất bản - đừng quên hoặc bạn không bao giờ làm việc được hoàn thành](/vi/coordination/tasking-manager3-project-admin/#proofread-and-publish)

Quản lý tác vụ OpenStreetMap là điều cần thiết để thực hiện một mapathon, quản lý kích hoạt HOT, hoặc tạo nhiệm vụ lập bản đồ cho người lập bản đồ sinh viên. Tasking Manager phân chia công việc thành các phần địa lý có thể quản lý, làm giảm xung đột biên tập, đặc biệt với một số lượng lớn người lập bản đồ phân phối. Trình quản lý Tác vụ cũng giúp làm chính xác bản đồ và chất lượng dữ liệu bằng cách cung cấp tập hợp các hướng dẫn cho người lập bản đồ (ví dụ: 'ánh xạ tất cả các con đường và tòa nhà'). Nói tóm lại, Tasking Manager là cách bạn thiết lập và chỉ đạo luồng công việc cho các hoạt động lập bản đồ mở. Mô-đun này mô tả việc quản lý cơ bản của Quản lý tác vụ OSM cho các sự kiện lập bản đồ thành công. 

 Hướng dẫn này được viết cụ thể cho những người cần hướng dẫn về quản lý OSM Task-ing Manager, bao gồm việc tạo và sửa đổi các dự án lập bản đồ cho các sự kiện lập bản đồ mở, ví dụ như 'mapathons'. Hướng dẫn này đặc biệt áp dụng cho các phiên bản của Trình quản lý tác vụ OSM phiên bản 3 bao gồm [Trình quản lý tác vụ HOT](http://tasks.hotosm.org) và [Trình quản lý tác vụ TeachOSM](http://tasks.teachosm.org).

Trình quản lý tác vụ HOT hoặc OSM phiên bản 3 thường được gọi là  **TM3,** là một phần viết tắt của Tasking Manager, phiên bản 3.

## Đăng nhập và truy cập

Điều đầu tiên cần hiểu là cấp độ truy cập. Tất cả quyền truy cập vào TMd được ủy quyền thông qua [trang web OpenStreetMap](https://www.openstreetmap.org). Để truy cập vào TM3, bạn sẽ cần một tài khoản OpenStreetMap (OSM). Khi bạn đã có tài khoản này, hãy truy cập [Tasking Manager](http://tasks.hotosm.org) và nhấp vào **Đăng nhập vào OpenStreetMap**, điều này sẽ giới thiệu bạn trở lại trang OSM nơi bạn có thể ủy quyền cho Trình quản lý tác vụ để có quyền truy cập hạn chế vào tài khoản OSM của bạn. 

### Mức Truy cập trong Quản lý Tác vụ OSM

Trình quản lý tác vụ OSM có ba cấp độ truy cập của người dùng:
-  **User - Người dùng** - Mức cơ bản nhất. Người dùng có thể đăng nhập vào TM3 và sử dụng các chức năng của nó để tìm và chọn một dự án lập bản đồ và làm việc trên nó. Mức độ sử dụng này được mô tả đầy đủ trong [Hướng dẫn Trình quản lý tác vụ OSM trong LearnOSM](/vi/coordination/tasking-manager-3/). Lưu ý rằng một số dự án, chẳng hạn như các dự án trong trạng thái dự thảo (tức là chưa được công bố) không hiển thị cho người dùng.  
-  **Project Manager - Quản lý Dự án** - Các nhà quản lý dự án có quyền truy cập để tạo và cập nhật các dự án trong TM3.  
-  **Administrator - Quản trị viên** - Quản trị viên có quyền truy cập cho phép họ quản lý cấp độ truy cập của người dùng trong TM3

Bạn sẽ cần Trình độ Quản lý Dự án để tạo các dự án mới sử dụng TM3

## Khởi tạo dự án trong TM3 

![TM New][]

Nhấp vào tên người dùng của bạn ở góc trên bên phải, sau đó nhấp vào  **Create a New Project - Tạo một Dự án Mới**. Sau đó, bạn có thể chọn giữa việc vẽ khu vực quan tâm (AoI) trên bản đồ hoặc nhập một khu vực quan tâm từ tệp geojson;  

> Nhập khẩu một tệp với một khu vực xác định luôn luôn là tốt hơn để tay vẽ một dự án quản lý tác vụ. Các công cụ như JOSM, QGIS, v.v ... có thể được dùng để tạo tệp để nhập vào Task Manager. Luồng công việc đề xuất là tạo một tệp .osm của AoI sử dụng JOSM và sau đó sử dụng http://geojson.io/ để tạo ra một GeoJSON.

### Vẽ một khu vực quan tâm được lập bản đồ

1. Nhấp vào nút 'Vẽ' ở góc trên bên phải.
2. Để vẽ một đa giác đại diện cho AoI trong khung bản đồ, giữ nút chuột phải để di chuyển bản đồ mà không cần nhấp vào, nó sẽ thêm một nút. Đa giác nên chặt chẽ khu vực quan tâm. Điều này tiết kiệm thời gian để hoàn thành gạch không quan tâm (tức đại dương, rừng)  
3. Nhấp vào điểm khởi đầu của bạn để hoàn thành đa giác  
4. Sau khi hoàn thành đa giác, bạn có thể di chuyển các nút hoặc thêm các nút mới để có được khu vực giống như bạn muốn.

hoặc là

### Tải lên tệp GeoJSON hoặc KML trong khu vực quan tâm được lập bản đồ  

1. Nhấp vào nút 'Nhập',  
2. Mở đến tệp của bạn trong cửa sổ Tải tệp lên,  
3. Nhấp vào tên tệp để đánh dấu tệp và sau đó nhấp vào 'Mở'  
4. Các khu vực được nhập khẩu quan tâm không thể chỉnh sửa.


## Tạo tác vụ

Một AoI cho một dự án là một khu vực rộng lớn để lập bản đồ. Khu vực đó sau đó được chia thành các khu vực nhỏ hơn gọi là Nhiệm vụ. 

AoI được xác định bởi việc tải lên tệp hoặc vẽ bằng tay sẽ xuất hiện trong khung bản đồ và bạn sẽ được yêu cầu chọn cách AoI được chia thành các tác vụ riêng lẻ. Có hai lựa chọn:  

1. Lưới vuông - Người quản lý tác vụ sẽ thống nhất phân chia khu vực dự án tổng thể trong các ô vuông chính xác cùng kích thước. Đây thường là một ý tưởng rất tốt cho các dự án nói chung về đám đông.
2. Geometries tùy ý - Nếu bạn đã tải lên một tệp để xác định khu vực dự án của bạn, tệp đó cũng có thể chứa các hình dạng cho từng tác vụ. Cần phải có một nhu cầu đặc biệt trong việc lập bản đồ để tạo các hình dạng công việc tùy chỉnh. Việc nhập khẩu các dự án đường bộ có thể cần các hình dạng công việc tuỳ chỉnh hoặc sản phẩm từ quy trình giảm AoI chẳng hạn.

### Sử dụng Square Grid cho các ô vuông nhiệm vụ

Để tạo gạch vuông đồng nhất, hãy chọn tùy chọn Square Grid.  

![TM Tile Sizes][]

AoI được tự động chia thành các ô lưới và mỗi tế bào trở thành một nhiệm vụ. Xác định kích thước lát tối ưu bằng cách sử dụng nút "lớn hơn" và "Nhỏ hơn" để điều chỉnh kích thước của các ô Công tác. Như vậy, một kích thước gạch nhỏ hơn sẽ dẫn đến nhiều công việc hơn. Kích thước ngói tối ưu do đó sẽ phụ thuộc vào kích thước của khu vực (tạo ra những viên gạch nhỏ hơn cho một dự án lớn) và số lượng các tính năng có thể cần phải được ánh xạ trong mỗi tile. Nói chung, khi kích thước của AoI và / hoặc số lượng các tính năng có thể tăng, kích thước ngói được lựa chọn cho dự án sẽ giảm xuống. 

Xin lưu ý rằng **có nhiều lớp bản đồ có sẵn để sử dụng trong khi xác định kích thước Kích thước tác vụ**. Nút ở góc dưới bên phải của bản đồ sẽ cung cấp danh sách tùy chọn cho lớp bản đồ. Chọn một trong các lớp hình ảnh có lẽ là lựa chọn tốt nhất vì nó cho phép bạn xem hình ảnh thực tế được ánh xạ.

Nếu bạn có hình ảnh tùy chỉnh cho dự án, bạn cũng có thể tải nó bằng cách sử dụng nút ở phía trên bên phải của bản đồ và đưa vào một TMS hoặc WMS url.

Bạn cũng có thể tạo nhiều kích thước công việc khác nhau bằng cách sử dụng công cụ "Split". Các ô vuông tác vụ có thể được chia ra nhiều lần. Một lần nữa, sử dụng một lớp hình ảnh sẽ giúp bạn quyết định nơi cần phân chia nhiệm vụ. Nút "Đặt lại" sẽ đặt lại tất cả các tác vụ phân chia của bạn. Tùy chọn Split (Polygon) sẽ cho phép bạn vẽ một đa giác trên một khu vực để tạo các tác vụ nhỏ hơn và Split (Điểm) sẽ cho phép bạn nhấp vào từng ô riêng lẻ để phân chia. Nút Đặt lại sẽ loại bỏ tất cả các tùy chỉnh tách của bạn.

> Nói chung bạn sẽ muốn gạch nhỏ trên khu vực định cư dày đặc cho các tòa nhà. Mục tiêu là tạo các nhiệm vụ dự án có thể hoàn thành trong 10 đến 15 phút.

***Các cân nhắc trước khi quyết định kích cỡ***

-  Một người lập bản đồ hoàn toàn mới tại mapathon sẽ lập bản đồ một khu vực với khoảng ¼ tốc độ của một người lập bản đồ giàu kinh nghiệm (nhiều người bắt đầu chậm hơn, nhưng sớm nhận được nhanh hơn). 
-  Người lập bản đồ mới thấy khó tìm các tính năng trong hình ảnh vệ tinh khi họ vẽ bản đồ. Việc tìm kiếm các lều tròn rợp bằng vật liệu tự nhiên trong một khu vực có cây bushs tròn là một đường cong học tập dốc cho một 'newbie'.
-  Người lập bản đồ mới cũng cảm thấy rất khó để theo dõi nhiều tính năng như tòa nhà.
-  Trong quá trình này, bạn có cơ hội để một người lập bản đồ 'tách' một hình vuông - chia vuông thành các khu giúp người lập bản đồ mới có được kích thước hình vuông mà họ có thể đối phó.  
-  Phần có nhiều khả năng nhất của một hình vuông cho các vấn đề xảy ra là ở các cạnh và góc. Vì vậy ô vuông nhỏ hơn có nghĩa là nhiều góc và cạnh và sẽ dẫn đến trùng lắp bản đồ cũng như các đối tượng bị bỏ qua. Có một sự cân bằng trong việc bạn tạo ra hình vuông nhỏ như thế nào, có thể giúp người lập bản đồ mới dễ dàng hơn và tăng sai số vì có nhiều góc cạnh hơn.
-  Một hình vuông có thể được chia ra, nhưng không có lựa chọn để nối các ô vuông với nhau để làm cho chúng lớn trở lại. Nên cẩn thận khi tách
-  **Kết luận** Thử bản đồ một khu vực của dự án cho mình để xem nó dễ dàng như thế nào và những gì sẽ gặp khó khăn. Điều này sẽ giúp bạn quyết định kích thước hình vuông tối ưu. Cho phép phân chia, nhưng không đến vô cực - một số người lập bản đồ mới tiếp tục phân chia các ô vuông cho đến khi chúng quá nhỏ đến nỗi nó trở nên rất khó khăn để lập bản đồ.  

Sau khi hoàn thành Kích thước tác vụ, nhấp vào "Tiếp theo".

### Hình học

Có thể nếu bạn đã tải lên một tệp để xác định khu vực dự án của mình, nó cũng có thể chứa thông tin về các hình dạng chính xác mà bạn muốn các tác vụ cá nhân của dự án. Nếu AoI bao gồm một đa giác, dự án sẽ chỉ có một nhiệm vụ. Điều này nói chung là không cần thiết và chỉ cần được cần thiết cho các nhu cầu cụ thể.

Hình học tùy ý không thể tách rời.

### Diện tích dự án - Trim

Sau khi xác định kích thước nhiệm vụ, bạn sẽ có tùy chọn "Trim" AoI của bạn. Bạn có thể cắt AoI với hình đa giác chính xác bạn đã vẽ hoặc nhập (đề xuất) hoặc bạn có thể tỉa đến hình vuông tác vụ gần nhất bao gồm AoI của bạn

Sau khi hoàn thiện phần cắt AoI, hãy nhấp vào "Tiếp theo".

## Tạo dự án

Cung cấp cho dự án một tiêu đề (có thể được chỉnh sửa trên màn hình tiếp theo) và nhấp vào "Tạo"

Điều này thiết lập dự án trong Tasking Manager và mở một màn hình nơi bạn có thể cung cấp các mô tả, hướng dẫn và các thông tin khác về dự án. Hãy nhớ rằng điều này không được đánh giá thấp. Một phần công bằng của người lập bản đồ (trong nhiều trường hợp đa số) sẽ không có kinh nghiệm trước với OpenStreetMap và / hoặc HOT và do đó sẽ không quen thuộc với các nguyên tắc gắn thẻ. Điều rất quan trọng là các mục tiêu của dự án là rõ ràng và tất cả các nguồn lực mà những người lập bản đồ nên tính đến được trình bày ở đây. Nó thường được khuyến khích để hạn chế một dự án cho một lớp đối tượng được ánh xạ. Nếu bạn cần một cơ sở của một khu vực tốt hơn chia nó trong một số dự án, một cho các tuyến đường, một cho các tòa nhà vv Bây giờ người mới bắt đầu có thể tập trung vào một lớp học nhỏ của các đối tượng trong khi học cách để bản đồ chúng một cách chính xác.

Sau khi dự án được tạo, bạn sẽ cần phải chỉnh sửa tất cả các cài đặt liên quan của nó:

- Mô tả - Được sử dụng để hiển thị trong danh sách và thông tin động lực cho người lập bản đồ
- Hướng dẫn - Hướng dẫn chi tiết cho việc làm thế nào và cách ánh xạ các đối tượng / thực thể / tính năng cần thiết
- Dữ liệu - thông tin bổ sung được sử dụng để phân loại dự án. Thường được sử dụng để lọc danh sách đầy đủ các dự án.
- Hình ảnh - Nơi cung cấp URL TMS và Giấy phép được yêu cầu.
- Các vùng Ưu tiên - Cho phép bạn chỉ định các phần của Dự án cần được ánh xạ đầu tiên.
- Quyền - Cho phép bạn hạn chế quyền truy cập vào dự án để lập bản đồ và xác nhận.
- Cài đặt - Ngày dự án đến hạn và JOSM Presets.
- Hành động - Gửi tin nhắn cho người đóng góp, xác nhận và làm mất hiệu lực toàn bộ dự án chỉ bằng một cú nhấp chuột.

### Sự miêu tả

![TM Description][]

Màn hình này cho phép bạn thiết lập mức độ ưu tiên của dự án, trạng thái của nó là Bản nháp, Xuất bản hoặc Lưu trữ, một mô tả ngắn được sử dụng trong danh sách Dự án và mô tả dài khi một người lập bản đồ đã chọn Dự án.

Cả mô tả ngắn và dài nên cung cấp thông tin về lý do tại sao dự án tồn tại, ai sẽ sử dụng dữ liệu và dự kiến tác động của bản đồ sẽ có. Các trường này hỗ trợ văn bản Markdown và có thể bao gồm hình ảnh và video

### Hướng dẫn

![TM Instructions][]

**Các đối tượng địa lý** - Một danh sách các tính năng mà bạn muốn người dùng lập bản đồ. Nói chung, càng ít tính năng càng tốt vì chúng có nhiều khả năng hoàn thành.

> Các dự án yêu cầu nhiều đối tượng được lập bản đồ rất khó cho người lập bản đồ và khó có thể xác nhận. Họ mất nhiều thời gian hơn để có được một bộ dữ liệu sử dụng tốt. Các kích thước nhiệm vụ cũng khó làm cho các loại bản đồ khác nhau hiệu quả, ví dụ như các tòa nhà cần các ô vuông nhỏ, đường xá và đường thủy cần các ô vuông lớn hơn. Làm nhiều dự án trên cùng một khu vực để có được tòa nhà và tính năng tuyến tính được ánh xạ là một thực tiễn tốt nhất.

**Thay đổi chú thích** - Đây là nhận xét thay đổi mặc định sẽ được đính kèm với mọi dữ liệu tải lên OSM. Nó thường bao gồm một cái gì đó mà xác định Tasking Manager dự án cư trú trên và các tính năng đã được ánh xạ. Nó thường được sử dụng cho "thẻ băm" để giúp xác định tổ chức yêu cầu và / hoặc lập bản đồ. Nó cũng có thể mô tả việc lập bản đồ đang được thực hiện, ví dụ, "Lập bản đồ các tòa nhà."

> Người dùng nên được hướng dẫn để điền vào ý kiến có ý nghĩa về những gì họ đã lập bản đồ, nhưng giúp họ với các nhận xét mặc định tốt luôn là một ý tưởng hay

**Hướng dẫn chi tiết ** - Đây là nơi mà phần lớn các hướng dẫn chi tiết của bạn sẽ được đặt và những gì chúng tôi mong đợi mỗi mapper và validator để đọc cẩn thận và theo.

Xem ghi chú dưới đây về cách tạo ra các hướng dẫn tốt.

**Hướng dẫn cho mỗi lệnh** - Các lệnh này sẽ được hiển thị khi một người lập bản đồ chọn một tác vụ và cũng có một tính năng đặc biệt cho phép các URL cụ thể của tác vụ được tạo dựa trên toạ độ x, y, z điển hình "slippy map" điển hình.

### Metadata

![TM Metadata][]

> Tất cả các trường này phải được điền đầy đủ và sẽ trở thành không tùy chọn trong các phiên bản TM3 tương lai.

**Cấp độ** - Đây là dấu hiệu cho thấy sự khó khăn của dự án lập bản đồ. Có 3 lựa chọn bắt đầu, Trung cấp và Cao cấp. Cài đặt này là một dấu hiệu cho người lập bản đồ mức độ kinh nghiệm mà họ cần phải thành công nhất trong việc lập bản đồ dự án. Nó có thể được sử dụng trong danh sách dự án lọc và mức đề xuất có thể được yêu cầu trong màn hình quyền.

**Loại Bản đồ** - Được sử dụng trong danh sách dự án lọc và giúp người lập bản đồ tìm các dự án mà họ muốn lập bản đồ.

**Tổ chức**- Cho phép bạn chỉ định tổ chức bản đồ sẽ được sử dụng bởi. Được sử dụng trong lọc dự án.

**Chiến dịch**- Điều này cho phép bạn nhóm các dự án với các dự án khác là một phần của nỗ lực lập bản đồ tổng thể lớn hơn. Được sử dụng trong danh sách dự án lọc.

### Các khu vực ưu tiên

![TM Priority Area][]

Sử dụng các công cụ được cung cấp để vẽ các khu vực cần được ánh xạ đầu tiên. Bạn có thể có nhiều khu vực ưu tiên cho một dự án. Bạn cũng có thể thay đổi các khu vực ưu tiên bất kỳ lúc nào.

> Trong quá trình lập bản đồ thiên tai, sớm trong sự kiện, có một dự án AoI lớn và sử dụng các khu vực ưu tiên để tập trung lập bản đồ như thông tin mới đi kèm là một thực tiễn tốt nhất.

### Hình ảnh

Trường URL - Trường có URL TMS sẽ tự động chuyển đến Trình biên tập OSM mà người lập bản đồ hoặc người kiểm định sử dụng sử dụng. Hãy làm theo ví dụ, nó là rất quan trọng nó được định dạng chính xác để làm việc trong tất cả các biên tập viên.

Giấy phép - Tùy chọn nếu có giấy phép cụ thể bắt buộc để người lập bản đồ chấp nhận sử dụng hình ảnh, bạn có thể chọn nó ở đây. Nếu bạn cần một licese không có sẵn, bạn có thể liên hệ với một quản trị viên để cài đặt Tasking Manager và yêu cầu họ thêm nó.

### Quyền

![TM Permissions][]

Cấp người lập bản đồ - Cho phép bạn yêu cầu người lập bản đồ ở mức hợp lý để lập bản đồ trên dự án (màn hình Siêu dữ liệu ở trên). Cấp độ Mapper có thể được đặt bằng tay, nhưng được tự động áp dụng dựa trên tổng số changesets.

Yêu cầu Người kiểm định vai trò - Điều này cho phép bạn yêu cầu mọi người làm xác nhận đã được đánh giá là trình xác nhận hợp lệ. Đây là quy trình đánh giá đồng nghiệp để chỉ một ai đó là Người xác nhận, Người quản lý dự án và Người kiểm định hiện có có thể đánh dấu bất kỳ người dùng nào là Validator có đủ tiêu chuẩn.

Dự án riêng tư - Điều này hạn chế quyền truy cập vào Dự án vào danh sách Người dùng. Người dùng phải đăng nhập vào Tasking Manager ít nhất một lần trước khi chúng có thể được thêm vào một dự án.

### Cài đặt

Ngôn ngữ mặc định - Cho phép cài đặt ngôn ngữ hướng dẫn mặc định cho một dự án.

### Hành động

![TM Actions][]

Message All Contributor - Gửi một thông báo Task Manager cho tất cả những ai đã đánh dấu một công việc hoàn thành hoặc hợp lệ. Nó có thể được sử dụng để cảm ơn các cộng tác viên và / hoặc hướng dẫn họ tới các dự án khác trong danh mục / chiến dịch. Nó cũng nên được sử dụng trước khi sử dụng một trong hai tùy chọn Validate / Invalidate all Tasks được mô tả dưới đây.

Xác nhận tất cả các nhiệm vụ - Điều này sẽ đánh dấu tất cả các nhiệm vụ thành trạng thái "Xanh" đã được kiểm tra, ngoại trừ nhiệm vụ đã được đánh dấu là "Ảnh xấu"

Hủy bỏ tất cả các nhiệm vụ - Việc này sẽ đánh dấu tất cả các nhiệm vụ thành trạng thái "Đỏ" bị vô hiệu hóa, ngoại trừ nhiệm vụ đã được đánh dấu là "Hình ảnh không hợp lệ"

Xóa dự án - Việc này sẽ xóa vĩnh viễn dự án khỏi Task Manager.

Clone Project - Điều này sẽ tạo ra một bản sao của dự án ngoại trừ AoI mà bạn sẽ cần phải nhập lại hoặc vẽ lại.

### Ghi chú

Vui lòng sử dụng ngôn ngữ giản dị vì đối tượng mục tiêu của bạn không bao gồm những người nói tiếng Anh bản ngữ.

1. Tiêu đề của dự án nên đã được tiết lộ những gì các thực thể cần được ánh xạ. Thích tiêu đề như
*# 1396 - Thiếu bản đồ: Nhà nước Niger (phía bắc), Nigeria (dự án 1: đường xá và khu dân cư)*
2. Các thông điệp quan trọng nhất sẽ xuất hiện trên tab hướng dẫn đầu tiên để đảm bảo chúng được đọc. Điều này sẽ bao gồm bất kỳ hình ảnh đặc biệt nào để sử dụng thay vì Bing. Những câu đầu tiên có thể đề cập đến rằng không phải lập bản đồ cho tất cả các ngôi nhà nếu dự án là về đường xá và khu dân cư. Hoặc phải lập bản đồ mỗi ngôi nhà nếu dự án được sử dụng để ước lượng mật độ dân số. Đây là những thông báo cũng nên xuất hiện trên tab mô tả
3. Các điểm làm rõ khác: Nếu dự án phù hợp với người lập bản đồ có mức độ kinh nghiệm nhất định. Ví dụ: dự án sử dụng hàng nhập khẩu hoặc dữ liệu hiện có phải được sắp xếp lại cho dấu vết GPS hoặc một số hình ảnh khác (xem phần trước). Cụm từ để người lập bản đồ mới cảm thấy được mời tham gia vào các dự án khác nhưng hiểu rằng các kỹ thuật tiên tiến được yêu cầu trong trường hợp này.
4. Có các nguyên tắc bao gồm các lỗi thông thường chúng tôi thấy trong khi xác nhận. Một ví dụ là việc biên soạn của Blake Girardot về  [lập bản đồ ở Tây Phi ](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). . Sử dụng liên kết trong hướng dẫn và giải thích rằng tuân thủ các nguyên tắc này là bắt buộc.
5. Nguồn dữ liệu về gắn thẻ là  [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). Đối với nhiều tác vụ liên quan đến HOT, trang về cách  [gắn thẻ đường cao tốc ở Châu Phi ](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) là một chuyên môn phù hợp và được khuyến khích đọc cho mọi người lập bản đồ. Nếu dự án của bạn phải tuân theo các tiêu chuẩn gắn thẻ khác nhau thì hãy viết một trang tương tự trong wiki và liên kết nó trong hướng dẫn của bạn.


### Những cân nhắc liên quan đến Hình ảnh

Trong hầu hết các trường hợp, chúng tôi sử dụng hình ảnh Bing "chuẩn". Nhưng có những tình huống mà bạn có thể muốn chọn một nguồn thay thế:

1. Bing không cung cấp phạm vi độ phân giải cao cho AoI của bạn
2. Bing có độ phủ mây khá lớn trong khu vực này.
3. Bạn cần hình ảnh mới hơn để đánh giá hậu thảm họa.

Nếu Bing không chứng minh đầy đủ thì Mapbox là sự lựa chọn tiếp theo. Bạn chỉ nên tìm kiếm các nguồn khác nếu cả hai không đáp ứng yêu cầu của bạn.

Trong những trường hợp như vậy nó không phải là đủ để chọn một nguồn tương thích giấy phép và làm cho nó có sẵn thông qua một dịch vụ WMS hoặc TMS. AoI của bạn có lẽ đã được lập bản đồ một phần bằng cách sử dụng hình ảnh Bing hoặc Mapbox và có thể có một sự cân bằng đáng kể giữa các hình ảnh. Bạn phải có cái nhìn cận cảnh các vị trí khác nhau của AoI của bạn và xác định sự bù đắp giữa hình ảnh của bạn và dữ liệu được ánh xạ trước đó. Nếu dữ liệu OSM hiện tại được bù đắp liên quan đến hình ảnh của bạn nhưng phù hợp với hình ảnh Bing thì chúng ta thường cho rằng Bing là "tiêu chuẩn vàng" trừ khi chúng ta có dấu vết GPS chứng minh giả định này là sai.

Nếu có một sự bù đắp liên tục giữa hình ảnh của bạn và Bing qua AoI thì điều này có thể được sửa chữa trên máy chủ để các hình ảnh từ nhiều nguồn khác nhau được tải trong trình soạn thảo phù hợp. Nếu không thể, nếu bù đắp thay đổi trên AoI hoặc nếu dữ liệu hiện có được căn chỉnh với các nguồn khác nhau thì đó là thời gian cho kế hoạch B:

Điểm quan trọng là bạn phải phát triển một chiến lược để đối phó với những vấn đề này và cung cấp hướng dẫn chi tiết cho người lập bản đồ và người xác nhận. Chúng tôi đề nghị bạn tuyên bố một dự án như vậy chỉ dành cho những người lập bản đồ có kinh nghiệm và giải thích rằng kinh nghiệm trong trường hợp này không có nghĩa là đã lập bản đồ 200 tòa nhà nhưng đã xử lý các vấn đề sắp xếp và các nguồn hình ảnh khác nhau.

Một chiến lược có thể có thể bao gồm các bước sau:

1. Rõ ràng xác định hình ảnh nào sẽ được coi là tài liệu tham khảo để liên kết bất cứ thứ gì khác. Trong trường hợp này chúng ta giả sử rằng tham chiếu là Bing.
2. Đảm bảo rằng tất cả các tính năng hiện tại cũng có thể nhìn thấy trên Bing được căn chỉnh với hình ảnh Bing, tức là sửa lại nếu cần.
3. Căn chỉnh hình ảnh thay thế cho các tính năng hiện tại (và do đó với Bing) bằng cách sử dụng chức năng bù đắp hình ảnh của trình chỉnh sửa.
4. Thêm các tính năng mới từ hình ảnh thay thế phù hợp chính xác.

Điều quan trọng là bước 3 được lặp lại cho mỗi nhiệm vụ của dự án và các ô nhiệm vụ riêng lẻ không được quá lớn bởi vì các hiệu ứng hình ảnh có thể thay đổi đáng kể trên AoI, đặc biệt nếu không có địa hình. Ngay cả những gián đoạn về hình ảnh có thể xảy ra trong một dự án - hãy tìm ra cho họ và tư vấn cho những người đóng góp của vấn đề đó.

Dưới đây là một số thông tin được đề xuất mà bạn có thể đưa vào trong hướng dẫn của dự án:

- [hướng dẫn chung cho các biên tập viên khác nhau](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [một gif động trên căn chỉnh hình ảnh trong iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [chương liên kết hình ảnh josm trong learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


### Đọc lại và xuất bản
Chắc chắn các tab khác nhau để đảm bảo cách viết và định dạng là chính xác và hướng dẫn rõ ràng. Nếu bạn cần thực hiện thay đổi hoặc sàng lọc cho dự án của mình, hãy nhấp vào liên kết 'Chỉnh sửa' ở góc trên bên phải của trang. 
Nếu dự án đã sẵn sàng để lập bản đồ, hãy nhấp vào liên kết 'Xuất bản'. Một khi dự án được xuất bản, nó có thể lập bản đồ cho bất cứ ai có tài khoản OSM, trừ khi một nhóm người dùng đã được chỉ định trong tab 'Người dùng được phép', trong trường hợp đó chỉ những người dùng được cho phép có thể làm việc trên đó. Nếu cần, sửa đổi vẫn có thể được thực hiện cho dự án sau khi xuất bản bằng cách nhấp vào liên kết 'Chỉnh sửa'

[TM Tile Sizes]: /images/coordination/tm3_tile_sizes.png
[TM New]: /images/coordination/tm3_create_new.png
[TM Description]: /images/coordination/tm3_description.png
[TM Instructions]: /images/coordination/tm3_instructions.png
[TM Metadata]: /images/coordination/tm3_metadata.png
[TM Priority Area]: /images/coordination/tm3_priority_area.png
[TM Permissions]: /images/coordination/tm3_permissions.png
[TM Actions]: /images/coordination/tm3_actions.png