---
layout: doc
title: Trình quản lý tác vụ phiên bản 2 - Tạo dự án mới
permalink: /vi/coordination/tasking-manager-project-admin/
lang: vi
category: coordination
---

**Hướng dẫn này mô tả một phiên bản kế thừa của Trình quản lý tác vụ. Nếu giao diện người dùng của phiên bản bạn sử dụng trông khác với mô tả ở đây thì bạn nên tham khảo [hướng dẫn sử dụng phiên bản 3](/vi/coordination/tasking-manager3-project-admin)**

# Trình quản lý tác vụ OSM - Quản trị dự án

Trình quản lý tác vụ OpenStreetMap là điều cần thiết để thực hiện một mapathon, quản lý kích hoạt HOT, hoặc tạo nhiệm vụ lập bản đồ cho người lập bản đồ sinh viên. Tasking Manager phân chia công việc thành các phần địa lý có thể quản lý, làm giảm xung đột biên tập, đặc biệt với một số lượng lớn người lập bản đồ phân phối. Trình quản lý Tác vụ cũng giúp làm chính xác bản đồ và chất lượng dữ liệu bằng cách cung cấp tập hợp các hướng dẫn cho người lập bản đồ (ví dụ: 'ánh xạ tất cả các con đường và tòa nhà'). Nói tóm lại, Trình quản lý tác vụ là cách bạn thiết lập và chỉ đạo luồng công việc cho các hoạt động lập bản đồ mở. Mô-đun này mô tả việc quản lý cơ bản của Quản lý tác vụ OSM cho các sự kiện lập bản đồ thành công. 

 Hướng dẫn này được viết cụ thể cho những người cần hướng dẫn về quản trị trình quản lý tác vụ OSM, bao gồm việc tạo và sửa đổi các dự án lập bản đồ cho các sự kiện lập bản đồ mở, ví dụ như 'mapathons'. Hướng dẫn này áp dụng cho tất cả các trường hợp của Trình quản lý tác vụ OSM bao gồm Trình quản lý tác vụ HOT <http://tasks.hotosm.org/> và Trình quản lý tác vụ TeachOSM <http://tasks.teachosm.org/>. Một danh sách các trường hợp khác của Trình quản lý tác vụ OSM có thể được tìm thấy tại [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager#Operational_installations_of_the_Tasking_Manager)

Trình quản lý Tác vụ HOT hoặc OSM thường được gọi là **TM2**, như là viết tắt của Task-ing Manager, phiên bản 2 

## Đăng nhập & Cấp độ truy cập
Điều đầu tiên cần hiểu là cấp độ truy cập. Tất cả quyền truy cập vào TM2 được ủy quyền thông qua <https://www.openstreetmap.org>. Để truy cập vào TM2, bạn sẽ cần một tài khoản OpenStreetMap (OSM). Khi bạn đã có tài khoản này, hãy truy cập vào <http://tasks.hotosm.org/> và nhấp **Đăng nhập vào OpenStreetMap**, điều này sẽ giới thiệu bạn trở lại trang OSM nơi bạn có thể cho phép Quản lý tác vụ truy cập hạn chế vào tài khoản OSM của bạn. 

### Cấp độ truy cập trong Trình quản lý tác vụ OSM
Trình quản lý tác vụ OSM có ba cấp độ truy cập của người dùng:
-  **Người dùng** - Mức cơ bản nhất. Người dùng có thể đăng nhập vào TM2 và sử dụng các chức năng của nó để tìm và chọn một dự án lập bản đồ và làm việc trên nó. Mức độ sử dụng này được mô tả đầy đủ trong [Hướng dẫn Trình quản lý tác vụ OSM trong LearnOSM](/vi/coordination/tasking-manager/). Lưu ý rằng một số dự án, chẳng hạn như các dự án trong trạng thái dự thảo (tức là chưa được công bố) không hiển thị cho người dùng.  
-  **Quản lý dự án** - Người quản lý dự án có quyền truy cập để tạo và cập nhật các dự án trong TM2.  
-  **Quản trị viên** - Quản trị viên có quyền truy cập cho phép họ quản lý cấp độ truy cập của người dùng trong TM2.
Bạn sẽ cần Trình độ Quản lý Dự án để tạo các dự án mới sử dụng TM2.

## Khởi động dự án trong TM2 

![TM New][]

Nhấp vào tên người dùng của bạn ở góc trên bên phải, sau đó nhấp vào **Tạo một Dự án Mới**. Sau đó, bạn có thể chọn giữa việc vẽ khu vực quan tâm của mình trên bản đồ, hoặc nhập khẩu một hộp bao quanh từ một tệp;  

![TM Draw or Import][]

> Nhập một tệp với một khu vực xác định luôn luôn là tốt hơn để tay vẽ một dự án quản lý tác vụ. Các công cụ như JOSM, QGIS, v.v ... có thể được dùng để tạo tệp để nhập vào Trình quản lý tác vụ.

#### Vẽ một khu vực quan tâm được cần lập bản đồ

![TM Draw][]

1. Nhấp vào nút 'Vẽ' ở góc trên bên phải.
2. Để vẽ một đa giác đại diện cho khu vực quan tâm trong khung bản đồ, giữ nút chuột phải để di chuyển bản đồ mà không nhấp vào, sẽ thêm nút. Đa giác nên chặt chẽ khu vực quan tâm. Điều này tiết kiệm thời gian để hoàn thành gạch không quan tâm (tức đại dương, rừng)  
3. Nhấp vào điểm khởi đầu của bạn để hoàn thành đa giác  

Hoặc

#### Tải lên tệp GeoJSON hoặc KML trong khu vực quan tâm được lập bản đồ  

1. Nhấp vào nút 'Nhập',  
2. Tải lên tệp của bạn trong cửa sổ Tải tệp lên,  
3. Nhấp vào tên tệp để đánh dấu tệp và sau đó nhấp vào 'Mở'  


### Các ô nhiệm vụ

Khu vực quan tâm được xác định bởi tệp tải lên hoặc vẽ bằng tay sẽ xuất hiện trong khung bản đồ, và sau đó bạn sẽ được yêu cầu chọn cách khu vực quan tâm được chia thành từng tác vụ riêng lẻ. Có hai lựa chọn:  

1. Ô nhiệm vụ - Người quản lý tác vụ sẽ thống nhất phân chia khu vực dự án tổng thể trong các ô vuông chính xác cùng kích thước. Đây thường là một ý tưởng rất tốt cho các dự án nói chung về đám đông
2. Các tuỳ chọn hình học - Nếu bạn đã tải lên một tệp để xác định khu vực dự án của bạn, tệp đó cũng có thể chứa các hình dạng cho từng tác vụ. Cần phải có một nhu cầu đặc biệt trong việc lập bản đồ để tạo các hình dạng công việc tùy chỉnh. Việc nhập khẩu các dự án đường bộ có thể cần các hình dạng nhiệm vụ tùy chỉnh chẳng hạn

### Sử dụng ô lưới cho ô nhiệm vụ
Để tạo gạch vuông đồng nhất, hãy chọn tùy chọn Square Grid và nhấp vào tiếp theo. To create uniform square tiles, select the Square Grid option and click next.  
Khu vực quan tâm được tự động chia thành các ô lưới và mỗi tế bào trở thành một nhiệm vụ. Khu vực dự án lớn hơn, càng lớn các ô vuông sẽ được. Xác định kích thước ngói tối ưu dựa trên năm lựa chọn kích thước ngói tương đối. Như vậy, một kích thước nhỏ hơn sẽ cho kết quả nhiệm vụ nhiều hơn như thể hiện trong ảnh chụp màn hình. Kích thước ngói tối ưu do đó sẽ phụ thuộc vào kích thước của khu vực (tạo ra những viên gạch nhỏ hơn cho một dự án lớn) và số lượng các tính năng có thể cần phải được ánh xạ trong mỗi tile. Nói chung, khi kích thước của khu vực quan tâm và / hoặc số lượng các tính năng có thể tăng, kích thước ngói được lựa chọn cho dự án sẽ giảm xuống. 

![TM Tile Sizes][]{: width="1500"}

***Các cân nhắc trước khi quyết định kích ô vuông***

-  Một người lập bản đồ hoàn toàn mới tại mapathon sẽ lập bản đồ một khu vực với khoảng ¼ tốc độ của một người lập bản đồ giàu kinh nghiệm (nhiều người bắt đầu chậm hơn, nhưng sớm nhận được nhanh hơn. 
-  Người lập bản đồ mới thấy khó tìm các tính năng trong hình ảnh vệ tinh khi họ vẽ bản đồ. Việc tìm kiếm các lều tròn rợp bằng vật liệu tự nhiên trong một khu vực có cây bushs tròn là một đường cong học tập dốc cho một 'newbie'.
-  Người lập bản đồ mới cũng cảm thấy rất khó để theo dõi nhiều tính năng như tòa nhà.
-  Trong quá trình này, bạn có cơ hội để một người lập bản đồ 'tách' một hình vuông - chia vuông thành các khu giúp người lập bản đồ mới có được kích thước hình vuông mà họ có thể đối phó.  
-  Phần có nhiều khả năng nhất của một hình vuông cho các vấn đề xảy ra là ở các cạnh và góc. Vì vậy ô vuông nhỏ hơn có nghĩa là nhiều góc và cạnh và sẽ dẫn đến trùng lắp bản đồ cũng như các đối tượng bị bỏ qua. Có một sự cân bằng trong việc bạn tạo ra hình vuông nhỏ như thế nào, có thể giúp người lập bản đồ mới dễ dàng hơn và tăng sai số vì có nhiều góc cạnh hơn.
-  Một hình vuông có thể được chia ra, nhưng không có lựa chọn để nối các ô vuông với nhau để làm cho chúng lớn trở lại. Nên cẩn thận khi tách
-  **Kết luận** Thử lập bản đồ một khu vực của dự án cho mình để xem nó dễ dàng như thế nào và những gì sẽ gặp khó khăn. Điều này sẽ giúp bạn quyết định kích thước hình vuông tối ưu. Cho phép phân chia, nhưng không đến vô cực - một số người lập bản đồ mới tiếp tục phân chia các ô vuông cho đến khi chúng quá nhỏ đến nỗi nó trở nên rất khó khăn để lập bản đồ.  

### Tuỳ chọn hình học
Có thể nếu bạn đã tải lên một tệp để xác định khu vực dự án của mình, nó cũng có thể chứa thông tin về các hình dạng chính xác mà bạn muốn các tác vụ cá nhân của dự án. Nếu AOI bao gồm một đa giác, dự án sẽ chỉ có một nhiệm vụ. Điều này nói chung là không cần thiết và chỉ cần được cần thiết cho các nhu cầu cụ thể.

### Những cân nhắc liên quan đến Hình ảnh

Trong hầu hết các trường hợp, chúng tôi sử dụng hình ảnh Bing "chuẩn". Nhưng có những tình huống mà bạn có thể muốn chọn một nguồn thay thế:

1. Bing không cung cấp vùng phủ sóng có độ phân giải cao cho khu vực bạn quan tâm (AOI).
2. Bing có độ phủ mây khá lớn trong khu vực này.
3. Bạn cần hình ảnh mới hơn để đánh giá hậu thảm họa.

Nếu Bing không chứng minh đầy đủ thì Mapbox là sự lựa chọn tiếp theo. Bạn chỉ nên tìm kiếm các nguồn khác nếu cả hai không đáp ứng yêu cầu của bạn.

Trong những trường hợp như vậy nó không phải là đủ để chọn một nguồn tương thích giấy phép và làm cho nó có sẵn thông qua một dịch vụ WMS hoặc TMS. AOI của bạn có thể đã được ánh xạ một phần bằng cách sử dụng hình ảnh Bing hoặc Mapbox và có thể có một sự cân bằng đáng kể giữa các hình ảnh. Bạn phải có cái nhìn sâu vào các vị trí khác nhau của AOI của bạn và xác định sự bù đắp giữa hình ảnh của bạn và dữ liệu được ánh xạ trước đó. Nếu dữ liệu OSM hiện tại được bù đắp liên quan đến hình ảnh của bạn nhưng phù hợp với hình ảnh Bing thì chúng ta thường cho rằng Bing là "tiêu chuẩn vàng" trừ khi chúng ta có dấu vết GPS chứng minh giả định này là sai.

Nếu có một sự bù đắp liên tục giữa hình ảnh của bạn và Bing qua AOI thì điều này có thể được sửa chữa trên máy chủ để các hình ảnh từ nhiều nguồn khác nhau được nạp trong trình biên tập phù hợp. Nếu không thể, nếu bù đắp khác nhau giữa AOI hoặc nếu dữ liệu hiện có được căn chỉnh với các nguồn khác nhau thì đó là thời gian cho kế hoạch B:

Điểm quan trọng là bạn phải phát triển một chiến lược để đối phó với những vấn đề này và cung cấp hướng dẫn chi tiết cho người lập bản đồ và người xác nhận. Chúng tôi đề nghị bạn tuyên bố một dự án như vậy chỉ dành cho những người lập bản đồ có kinh nghiệm và giải thích rằng kinh nghiệm trong trường hợp này không có nghĩa là đã lập bản đồ 200 tòa nhà nhưng đã xử lý các vấn đề sắp xếp và các nguồn hình ảnh khác nhau.

Một chiến lược có thể có thể bao gồm các bước sau:

1. Rõ ràng xác định hình ảnh nào sẽ được coi là tài liệu tham khảo để liên kết bất cứ thứ gì khác. Trong trường hợp này chúng ta giả sử rằng tham chiếu là Bing.
2. Đảm bảo rằng tất cả các tính năng hiện tại cũng có thể nhìn thấy trên Bing được căn chỉnh với hình ảnh Bing, tức là sửa lại nếu cần.
3. Căn chỉnh hình ảnh thay thế cho các tính năng hiện tại (và do đó với Bing) bằng cách sử dụng chức năng bù đắp hình ảnh của trình chỉnh sửa.
4. Thêm các tính năng mới từ hình ảnh thay thế phù hợp chính xác.

Điều quan trọng là bước 3 được lặp lại cho mỗi nhiệm vụ của dự án và các ô nhiệm vụ riêng lẻ không nên quá lớn vì các hiệu ứng hình ảnh có thể thay đổi đáng kể qua AOI, đặc biệt nếu không có địa hình. Ngay cả những gián đoạn về hình ảnh có thể xảy ra trong một dự án - hãy tìm ra cho họ và tư vấn cho những người đóng góp của vấn đề đó.

Một vài gợi ý về thông tin mà bạn có thể đưa vào trong hướng dẫn của dự án:

- [Hướng dẫn chung về các kiểu chỉnh sửa khác nhau](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [Hình ảnh động GIF trên iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [Liên kết hình ảnh josm trong learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)

## Tạo dự án và thêm mô tả
Sau khi lựa chọn được Tiêu đề, nhấp vào “Create Project”. 

![TM Create Project][]

Thiết lập dự án trong trình quản lý tác vụ và mở ra màn hình nơi bạn có thể cung cấp các mô tả, hướng dẫn và các thông tin khác về dự án. Hãy nhớ rằng điều này không được đánh giá thấp. Một phần công bằng của người lập bản đồ (trong nhiều trường hợp đa số) sẽ không có kinh nghiệm trước với OpenStreetMap và / hoặc HOT và do đó sẽ không quen thuộc với các nguyên tắc gắn thẻ. Điều rất quan trọng là các mục tiêu của dự án là rõ ràng và tất cả các nguồn lực mà những người lập bản đồ nên tính đến được trình bày ở đây. Nó thường được khuyến khích để hạn chế một dự án cho một lớp đối tượng được ánh xạ. Nếu bạn cần một cơ sở của một khu vực tốt hơn chia nó trong một số dự án, một cho các tuyến đường, một cho các tòa nhà vv Bây giờ người mới bắt đầu có thể tập trung vào một lớp học nhỏ của các đối tượng trong khi học cách để bản đồ chúng một cách chính xác. Nếu không, bạn có thể kết thúc với rất nhiều gạch có chứa một chút của tất cả mọi thứ nhưng không có gì thực sự hoàn thành.

Vui lòng sử dụng ngôn ngữ giản dị vì đối tượng mục tiêu của bạn bao gồm cả những người không nói tiếng Anh bản ngữ.

1. Tiêu đề của dự án nên phản ánh những gì các thực thể cần được lập bản đồ. Ví dụ như 
*#1396 - Các bản đồ bị mất: Niger State (north), Nigeria (dự án 1: Đường và khu dân cư)*
2. Các thông điệp quan trọng nhất sẽ xuất hiện trên tab hướng dẫn đầu tiên để đảm bảo chúng được đọc. Điều này sẽ bao gồm bất kỳ hình ảnh đặc biệt nào để sử dụng thay vì Bing. Những câu đầu tiên có thể đề cập đến rằng không phải lập bản đồ cho tất cả các ngôi nhà nếu dự án là về đường xá và khu dân cư. Hoặc phải lập bản đồ mỗi ngôi nhà nếu dự án được sử dụng để ước lượng mật độ dân số. Đây là những thông báo cũng nên xuất hiện trên tab mô tả.
3. Các điểm làm rõ khác: Nếu dự án phù hợp với người lập bản đồ có mức độ kinh nghiệm nhất định. Ví dụ: dự án sử dụng hàng nhập khẩu hoặc dữ liệu hiện có phải được sắp xếp lại cho dấu vết GPS hoặc một số hình ảnh khác (xem phần trước). Chi tiết nó để người lập bản đồ mới sẽ cảm thấy được mời tham gia vào các dự án khác nhưng hiểu rằng các kỹ thuật tiên tiến được yêu cầu trong trường hợp này.
4. Có các hướng dẫn chung để giải quyết các lỗi cơ bản khi xác thực. Một ví dụ mà Blake Girardot biên soạn về [lập bản đồ ](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Sử dụng liên kết trong hướng dẫn và giải thích rằng tuân thủ các nguyên tắc này là bắt buộc.
5. Các nguồn gắn thẻ trong [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). Các nhiệm vụ liên quan đến HOT trên trang [Gắn thẻ đường cao tốc ở châu Phi](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) là chuyên môn thích hợp và rất được đề nghị đọc cho mỗi mapper. Nếu dự án của bạn phải tuân theo các tiêu chuẩn gắn thẻ khác nhau thì hãy viết một trang tương tự trong wiki và liên kết nó trong hướng dẫn của bạn.

<!--Hidden Text - Google discussion group on TM - https://groups.google.com/a/hotosm.org/forum/?utm_medium=email&utm_source=footer#!msg/tm-project-managers/5OVNGMBsQv0/01Wxw95cBwAJ 

Youtube video concerning the development & code updates for TM = https://www.youtube.com/watch?v=hFFlrm9wKcA
from email by Pete Masters
Hi Polyglot, just in case it is useful, we worked with Pierre Giraud when he visited London to do a tech introduction to the tasking manager. It's here if you're interested: https://www.youtube.com/watch?v=hFFlrm9wKcA

Cheers,

Pete


Before Creating a Task
Should this task be a Missing Maps Task? 
Will the project have a direct field mapping component?
Is the project disaster related? 
If yes it should be a HOT project not Missing Maps. Contact the activation lead.
Is the project backed by one of the existing Missing Maps members?
Is the imagery high quality without clouds?
If no contact ARC to see if they can help get new imagery from US Department of State
Task Creation Process
To create a new project, you must be logged into the Tasking Manager - use your OpenStreetMap account username & password. Note that you must have certain permissions assigned to your OpenStreetMap account in order to create a new project in the Tasking Manager.  Open your Internet browser and go to tasks.hotosm.org. You will see a page like this:


Once you are logged in, click on your username in the upper right hand corner.
In the drop down menu, click “Create a New Project”.

There are two options for creating a project: 
Draw an area of interest to be mapped
Upload a GeoJSON or KML file of the area of interest to be mapped

Option 1 - Draw
Click the ‘Draw’ button
Draw a polygon representing the area of interest in the map frame (right click; keep the right click pressed to move the map without adding a node)
Note: the polygon should tightly fit the area of interest. This saves time for completing tiles that are not of interest (i.e. ocean, forest)

Double click to complete the polygon

Option 2 - Import GeoJSON or KML
Click the ‘Import’ button

Browse to your file in the File Upload window
Click the file name to highlight the file and then click ‘Open’.

The area of interest defined in the GeoJSON or KML file will appear in the map frame, and you will then be asked to choose how the area of interest is split into individual tasks.  There are two options:
Square Grid - AOI is automatically split into grid cells and each cell becomes a task.
Arbitrary Geometries - Each individual polygon in the AOI represents an individual task.  If the AOI consists of one polygon, the project will have just one task.
Note: this guide only covers the square grid option.

Select the Square Grid option and click next.
Determine the optimal tile size based on the five Tile Size options. Important: the size of tiles is relative, i.e. the same size level will be bigger on a large project than on a small one (“S” or “M” tiles are thus not always of the same size). Note that each polygon will become a single task.  As such, a smaller tile size will result in more tasks as shown in the screenshots below.  The optimal tile size will therefore depend both on the size of the area (create smaller tiles for a large project) and the number of features that will likely need to be mapped within each tile.  Generally speaking, as the size of the area of interest and/or the number of likely features increases, the tile size chosen for the project should decrease. The ideal size of a square is roughly 45 min - 1 hour of work. At larger mapathons or in denser cities smaller tasks (~20 min) are better.



After choosing a tile size, click “Create Project”.  This establishes the project in the task manager and opens a screen where you can provide the descriptions, instructions and other information about the project if needed.  
On the ‘Description’ tab:
set the Priority appropriately
name the project using the “Name of the Project” text box
If the task is specifically for the Missing Maps effort, use the following naming convention:  Missing Maps: <Location/Project Name>
provide a description in the ‘Description’ box.  Note: formatting in the Description box is based on ‘Markdown’.  Tips for using ‘Markdown’ can be found by clicking the ‘Markdown’ link below the Description box. Note: it is necessary to add a blank line between paragraphs to separate them.
If you are creating a task specifically for the Missing Maps project, include the following language as part of the description: ‘The Missing Maps project aims to map the most vulnerable places in the world (affected by humanitarian crises: disease epidemics, conflict, natural disasters, poverty, environmental crises). Building on HOT's disaster preparedness projects, the Missing Maps tasks facilitate pre-emptive mapping of priority countries to better facilitate disaster response, medical activities and resource allocation when crises occur.’



On the ‘Instructions’ tab:
list the features that need to be mapped in the “Entities to Map” box, e.g. buildings and primary roads.
in the ‘Changeset Comment’ box, enter the changeset comment that mappers should use when uploading the data they have mapped.  The comments should indicate various things about the project.  E.g., the comment ‘Bukama, #DRC #hotosm-project-1145 #MissingMaps #Bing’ indicates the location of the task, the project number, that the project is specifically for Missing Maps, and that Bing imagery is being used for the task.  Changeset comments will obviously vary by project, but should generally be used as a quick indicator/description of the project.
enter detailed instructions that the mappers need to follow in the “Detailed Instructions” box.  At a minimum, detailed instructions must indicate what features to map, how to tag the features, and the imagery source to be used in this project.  Other details should be included as appropriate.  Note: formatting in the Description box is based on ‘Markdown’.  Tips for using ‘Markdown’ can be found by clicking the ‘Markdown’ link below the “Detailed Instructions” box.
Add to the detailed instructions if there is any cloud coverage that might hamper the mapping of tiles. Request mappers to mention cloud coverage in the comment field, and mark the task as done.
If appropriate, enter additional information specific to tasks in the “Per Task Instructions (Optional)” box.  This will be used if anything needs specific needs to be done for individual tasks within the project.  


On both ‘Description’ and ‘Instructions’ tabs, you can translate the content by clicking on the language icon above the text boxes (en, fr, etc.). If no text is entered for language, the default language (English) will appear instead. You’ll notice that the different text boxes don’t switch languages at once when you select it on one, you’ll need to select the language you want to edit on each box individually.

The ‘Area’ tab is not yet functional.

The ‘Imagery’ tab can be used if an imagery source other than the standard OSM imagery sources in OSM needs to be used.  There are also various licensing options via the Required License dropdown if a special license is required for the alternate imagery source.

The “Priority Areas” tab is used to define priority areas for the task if necessary.  This is done by manually drawing the priority areas in the map frame.  Once saved these areas will be shown  as high priority on the map on the main project page.  Tools are also available on the ‘Priority Areas’ tab to edit or delete an existing high priority area.

If necessary, access to the new project can be limited to a certain group of users via the “Allowed Users” tab.  In order to limit access, first click in the check box next to “Private”.  Then enter the username of a user that should have access in the “Allowed Users” text entry box and click the “Add User” button.  Repeat for additional users that need access.  Note: In order for the user's name to be available to add to the Allowed Users - they first must visit the URL for your instance of OSMTM and Authorize access to their OpenStreetMap account. After they've done this, their username should be available for the administrator to add. 

The “Misc” tab provides options to add a due date and a JOSM preset.  The due date can be entered in the “Project due date” box and represents the date after which the project will automatically be archived.  Users can also load a JOSM preset XML file to assist with tagging if appropriate.  

After entering the description, instructions, and any necessary information on the other tabs, click on “Save the Modifications”, which will take you back to the main project page.  

Out of date wiki entry - for update when this guide complete  http://wiki.openstreetmap.org/wiki/Tasking_manager_admin
- end of hidden text-->
  
### Proofread and Publish
Proofread the various tabs to ensure wording and formatting are correct, and instructions are clear. If you need to make changes or refinements to your project, click the ‘Edit’ link in the upper right hand corner of the page. 

![TM Edit Project][]

If the project is ready for mapping, click the ‘Publish’ link. Once the project is published, it is available for mapping to anyone with an OSM account, unless a group of users was specified in the ‘Allowed Users’ tab, in which case only the allowed users would be able to work on it.  If necessary, edits can still be made to the project after publication by clicking on the ‘Edit’ link.

[TM Tile Sizes]: /images/coordination/TM_tile_sizes.png
[TM New]: /images/coordination/TM_create_new.png
[TM Draw or Import]: /images/coordination/TM_draw_or_import.png
[TM Draw]: /images/coordination/TM_draw.png
[TM Create Project]: /images/coordination/TM_create_project.png
[TM Edit Project]: /images/coordination/TM_edit_link.png