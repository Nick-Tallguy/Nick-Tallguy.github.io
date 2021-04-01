---
layout: doc
title: Tasking Manager 2 新建项目
permalink: /zh_CN/coordination/tasking-manager-project-admin/
lang: zh_CN
category: coordination
导航：跳过
---

**如果您使用的版本的用户界面与此处描述的用户界面不同，那么您应该查阅 [版本概述](/zh_CN/coordination/tm-disambiguation)**

# OSM Tasking Manager 2 项目管理

OpenStreetMap Tasking Manager 2对于执行地图马拉松、管理HOT动员或为新手测绘人员创建Tasking Manager至关重要。Tasking Manager将工作划分为可管理的地理区块，从而减少了编辑冲突，尤其是对于大量不同地区的测绘人员而言。Tasking Manager 还通过为测绘人员提供一套一致的指令（例如 '绘制所有道路和建筑物'），从而帮助测绘准确性和数据质量。简而言之，Tasking Manager是您设置和指导开放式绘图活动的工作流程的方式。本模块介绍了OSM  Tasking Manager的基本管理，以便成功开展测绘活动。 

 本指南专为需要 OSM Tasking Manager 的管理说明的人编写，包括为开放测绘事件（即 “地图马松”）创建和修改测绘项目的人员。本指南适用于 OSM Tasking Manager的所有实例，包括 HOT Tasking Manager <http://tasks.hotosm.org/> 和 TeachoSM Tasking Manager<http://tasks.teachosm.org/>。OSM Tasking Manager的其他实例的列表可以在 [OpenStreetMap wiki] 找到 (http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager#Operational_installations_of_the_Tasking_Manager)

HOT 或 OSM Tasking Manager通常被称为 **TM2，** 作为Tasking Manager版本2的缩写。 

## 登录和访问级别
首先要了解的是访问级别。对 TM2 的所有访问权限均通过 <https://www.openstreetmap.org> 进行授权。要访问 TM2，你需要一个 OpenStreetMap (OSM) 帐户。拥有此帐户后，请访问 <http://tasks.hotosm.org/>，然后单击 **登录到 OpenStreetMap**，这将引导您返回到 OSM 页面，您可以在该页面授权Tasking Manager对您的 OSM 帐户进行有限访问。 

### OSM Tasking Manager 2中的访问级别
OSM Tasking Manager 2 有三个用户访问级别：
-  **用户** - 最基本的级别。用户可以登录TM2并使用其功能查找和选择测绘项目并进行处理。这种使用级别在 [LearnOSM 中的OSM Tasking Manager指南](/zh_CN/coordination/tasking-manager/)中详细描述。请注意，某些项目，例如处于草稿（即未发布）状态的项目对用户不可见。  
-  **项目经理** - 项目经理有权在TM2中创建和更新项目。  
-  **管理员** - 管理员拥有允许他们管理TM2中用户的访问级别的访问权限。
您需要项目经理访问级别才能使用 TM2 创建新项目。

## 在 TM2 中启动一个新项目 

![TM New][]

单击右上角的用户名，然后单击 **创建新项目。** 然后，您可以选择在地图上绘制感兴趣区域，或从文件导入边界框；  

![TM Draw or Import][]

> 导入具有定义区域的文件始终比手绘Tasking Manager项目更可取。JOSM、QGIS 等工具可用于创建要导入到Tasking Manager的文件。

#### 画一个感兴趣的区域进行测绘

![TM Draw][]

1.点击右上角的 “绘制” 按钮。
2.要绘制表示地图框中感兴趣多边形区域，请按住鼠标右键以移动地图而不单击，这将添加一个节点。多边形应严格限制在感兴趣的区域。这可以节省完成不感兴趣瓦片（例如海洋、森林）的时间  
3.点击你的起点以完成多边形  

或者

#### 上传要测绘的感兴趣区域的 GeoJSON 或 KML 文件  

1.点击 “导入” 按钮，  
2.在 “文件上传” 窗口中浏览至您的文件，  
3.单击文件名以高亮显示该文件，然后单击 “打开”。  


### 任务方形

文件上传或手绘定义的感兴趣区域将显示在地图框中，然后将要求您选择如何将感兴趣区域划分为单个任务。有两种选择：  

1.方形网格-Tasking Manager将在完全相同大小的任务方块中统一划分整个项目区域。对于一般群体绘图项目来说，这通常是一个非常好的主意。
2.任意几何-如果您上传了文件来定义项目区域，则该文件还可以包含单个任务的形状。在测绘中必须特别需要创建自定义任务形状。例如，导入道路项目可能需要自定义任务形状。

### 使用方形网格作为任务方块
要创建统一的方形瓦片，请选择方形网格选项，然后单击下一步。  
感兴趣区域会自动拆分为网格单元格，每个单元格都成为一项任务。项目面积越大，由此产生的方块就越大。根据五个相对瓦片大小选项确定最佳瓦片大小。因此，较小的瓦片大小将导致更多任务，如屏幕截图所示。因此，最佳瓦片大小将取决于区域的大小（为大型项目创建更小的瓦片）和可能需要在每个瓦片中测绘的要素数量。一般来说，随着感兴趣区域的大小和/或可能的要素数量的增加，为项目选择的瓦片大小应该减小。 

![TM Tile Sizes][]{: width="1500"}

***决定瓦片大小之前的注意事项***

-地图马拉松(mapathon)的新手测绘人员将以大约相当于经验丰富测绘人员的四分之一的速度绘制区域（许多地方的开始速度要慢得多，但很快就会变得更快）。 
-一个新手测绘人员发现在卫星影像中搜索要素与实际绘制它们一样困难。在圆形灌木区域寻找天然材料茅草的圆形小屋对于 “新比” 来说是一条陡峭的学习曲线。
-新的测绘人员还发现很难追踪诸如建筑物等许多要素。
-在此过程的后期，您有机会让测绘人员 “拆分” 一个方形-将方形拆分为几个可以帮助新的测绘人员获得他们能够应对的方形面积。  
-方形中最有可能出现问题的部分是边缘和角落。因此，较小的方格意味着越多的角和边缘，并将导致测绘的重复以及遗漏对象。权衡你制作方形的大小程度，这可能会使新手测绘人员工作变得更容易，并且由于边角和边缘更多，错误也会增加。
-一个方形可能会被拆分，但之后没有选项可以将方形连接在一起以使它们再次变大。所以拆分时要小心
-  ** 结论** 尝试自己绘制项目的某个区域，看看它有多容易以及将面临什么困难。这应该有助于你决定最佳的方形尺寸。允许拆分，但不是无限大 - 一些新手测绘人员会持续分割方格，直到它们太小以至于变得非常难以进行测绘。  

### 任意几何形状
如果您上传了文件来定义项目区域，则该文件还可能包含有关您希望项目各个任务的确切形状的信息。如果 AOI 由一个多边形组成，则该项目将只有一个任务。一般是为特定场景而通常不需要这样做。

### 关于影像的注意事项

在大多数情况下，我们使用 “标准” Bing图像。但是有些情况下你可能想要选择替代来源：

1.Bing不为您感兴趣的区域 (AOI) 提供高分辨率覆盖。
2.Bing在这个地区有相当大的云覆盖面。
3.灾后评估需要更新的图像。

如果Bing证明不够用，那么 Mapbox 是下一个选择。只有当这两个来源都不符合您的要求时，您才应该寻找其他来源。

In such cases it is not sufficient to choose a license-compatible source and make it available through a WMS or TMS service. Your AOI has probably already been partially mapped using Bing or Mapbox imagery and there might be a noticeable offset between images. You must have a close look at various locations of your AOI and determine the offset between your imagery and previously mapped data. If the existing OSM data are offset with respect to your imagery but fit Bing imagery then we usually assume that Bing is the "gold standard" unless we have GPS traces which prove that this assumption is wrong.

If there is a constant offset between your imagery and Bing across the AOI then this might be corrected on the server so that images from various sources loaded in the editor match. If this is not possible, if the offset varies across the AOI or if existing data are aligned with various sources then it is time for plan B:

The important point is that you must develop a strategy for how to cope with these issues and provide detailed instructions to mappers and validators. We strongly suggest that you declare such a project "for experienced mappers only" and explain that experience in this case does not mean having mapped 200+ buildings but having already dealt with alignment issues and different imagery sources.

One possible strategy could include these steps:

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Bing.
2. Make sure that all existing features which are also visible on Bing are aligned with Bing imagery, i.e. realign if necessary.
3. Align the alternative imagery to existing features (and thus to Bing) using the imagery offset function of the editor.
4. Add new features from the now correctly aligned alternative imagery.

It is important that step 3 is repeated for every task of the project and the individual task squares should not be too large because imagery offsets can vary considerably across an AOI, particularly if the terrain is not flat. Even imagery discontinuities may occur across a project - look out for them and advise the contributors of such a problem.

Here are some suggested bits of information which you might include in the project instructions:

- [general guidelines for various editors](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [an animated gif on imagery alignment in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [the josm imagery alignment chapter in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)

## Create the project & add description
After choosing a tile size, click “Create Project”. 

![TM Create Project][]

This establishes the project in the task manager and opens a screen where you can provide the descriptions, instructions and other information about the project. Keep in mind that this must not be underestimated. A fair share of mappers (in many cases the majority) will have no previous experience with OpenStreetMap and/or HOT and will thus not be familiar with tagging guidelines. It is very important that the objectives of the project are clear and that all resources which the mappers should take into account are laid out here. It is often advisable to confine one project to one class of objects to be mapped. If you need a basemap of an area better split it in several projects, one for the roads, one for the buildings etc. Now beginners can focus on a small class of objects while learning how to map them correctly. Otherwise you might end up with lots of tiles which contain a bit of everything but nothing really complete.

Please use plain language as your target audience may not consist of native English speakers.

1. 项目的标题应该已经揭示了应该绘制哪些实体。最好采用如下标题 
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. The most important messages should appear on the instruction tab first to ensure they are read. This would include any special imagery to use instead of Bing. The first sentences could mention that it is not required to map every single house if the project is about roads and residential areas, for example. Or that it is required to map every house if the project is to be used for population density estimates. These are the messages that should also appear on the description tab.
3. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery (cf. the previous section). Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
4. There are guidelines that cover common errors we see while validating. One example is Blake Girardot's compilation on [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Use the link in the instructions and explain that adhering to these guidelines is required.
5. The definitive resource on tagging is the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). For many HOT-related tasks the page on [tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) is the proper specialization and highly recommended reading for every mapper. If your project must adhere to different tagging standards then write a similar page in the wiki and link it in your instructions.

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
  
### 校对和发布
Proofread the various tabs to ensure wording and formatting are correct, and instructions are clear. If you need to make changes or refinements to your project, click the ‘Edit’ link in the upper right hand corner of the page. 

![TM Edit Project][]

If the project is ready for mapping, click the ‘Publish’ link. Once the project is published, it is available for mapping to anyone with an OSM account, unless a group of users was specified in the ‘Allowed Users’ tab, in which case only the allowed users would be able to work on it.  If necessary, edits can still be made to the project after publication by clicking on the ‘Edit’ link.

[TM Tile Sizes]: /images/coordination/TM_tile_sizes.png
[TM New]: /images/coordination/TM_create_new.png
[TM Draw or Import]: /images/coordination/TM_draw_or_import.png
[TM Draw]: /images/coordination/TM_draw.png
[TM Create Project]: /images/coordination/TM_create_project.png
[TM Edit Project]: /images/coordination/TM_edit_link.png