---
layout: doc
title: Tasking Manager 3 创建项目
permalink: /zh_CN/coordination/tasking-manager3-project-admin/
lang: zh_CN
category: coordination
导航：跳过
---

# OSM Tasking Manager 3 项目创建和管理


**如果您使用的版本的用户界面与此处描述的用户界面不同，那么您应该查阅 [我们的版本概述](/zh_CN/coordination/tm-disambiguation)**

章节索引
-------------
-  [登录 ](/zh_CN/coordination/tasking-manager3-project-admin/#logging-in-&amp;amp;-access-levels)  
-  [启动一个新项目 - 确定感兴趣的领域](/zh_CN/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)  
-  [任务创建 - 细分感兴趣的领域](/zh_CN/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)
-  [创建项目 - 告诉你的用户需要了解什么](/zh_CN/coordination/tasking-manager3-project-admin/#create-the-project)
    -  [描述 - 用户了解你的项目的第一件事](/zh_CN/coordination/tasking-manager3-project-admin/#description)
    -  [说明 - 用户应该做什么](/zh_CN/coordination/tasking-manager3-project-admin/#instructions)
    -  [元数据 - 项目所属的地方](/zh_CN/coordination/tasking-manager3-project-admin/#metadata)
    -  [优先区域 - 用户应从哪里开始绘制地图](/zh_CN/coordination/tasking-manager3-project-admin/#priority-areas)
    -  [影像 - 绘制地图的基础](/zh_CN/coordination/tasking-manager3-project-admin/#imagery)
    -  [权限 - 允许谁h绘制和审核](/zh_CN/coordination/tasking-manager3-project-admin/#permissions)
    -  [帮助的提示 - 如何填写这些字段](/zh_CN/coordination/tasking-manager3-project-admin/#instruction-notes)
    -  [发布 - 不要忘记，否则你永远无法完成工作](/en/coordination/tasking-manager3-project-admin/#proofread-and-publish)

OpenStreetMap Tasking Manager对于执行地图马拉松、管理HOT动员或为新手测绘人员创建Tasking Manager至关重要。Tasking Manager将工作划分为可管理的地理区块，从而减少了编辑冲突，尤其是对于大量不同地区的测绘人员而言。Tasking Manager 还通过为测绘人员提供一套一致的指令（例如 '绘制所有道路和建筑物'），从而帮助测绘准确性和数据质量。简而言之，Tasking Manager是您设置和指导开放式绘图活动的工作流程的方式。本模块介绍了OSM  Tasking Manager的基本管理，以便成功开展测绘活动。 

 本指南是专门为那些需要OSM Tasking Manager管理说明的人而写的，包括为开放的地图活动，即 'mapathons'，创建和修改地图项目。本指南特别适用于OSM Tasking Manager version 3的实例，包括 [HOT Tasking Manager](http://tasks.hotosm.org)和 [TeachOSM Tasking Manager](http://tasks.teachosm.org)。

HOT或OSM Tasking Manager version 3经常被称为 **TM3,**是Tasking Manager, version 3的简称。

## 登录和访问级别

首先要了解的是访问级别。所有对TMd的访问都是通过 [OpenStreetMap website](https://www.openstreetmap.org)授权的。要访问TM3，你需要一个OpenStreetMap(OSM)账户。一旦你拥有这个账户，请访问 [Tasking Manager](http://tasks.hotosm.org) 并点击 **登录OpenStreetMap**，这将使你回到OSM页面，在这里你可以授权Tasking Manager对你的OSM账户进行有限访问。 

### OSM Tasking Manager 3中的访问级别

OSM Tasking Manager 3有三个用户访问级别：
-  **用户** - 最基本的级别。用户可以登录TM3并使用其功能查找和选择测绘项目并进行处理。这种使用级别在 [LearnOSM 中的OSM Tasking Manager指南](/zh_CN/coordination/tasking-manager-3/)中详细描述。请注意，某些项目，例如处于草稿（即未发布）状态的项目对用户不可见。  
-  **项目经理** - 项目经理有权在TM3中创建和更新项目。  
-  **管理员** - 管理员拥有允许他们管理TM3中用户的访问级别的访问权限。

你需要项目经理访问级别才能使用TM3创建新项目。

## 在TM3中启动一个新项目 

![TM New][]

点击右上角的用户名，然后点击**创建新项目。** 然后，你可以选择在地图上绘制兴趣区域(Area of interest,AoI)，或从geojson文件导入；  

> 导入具有定义区域的文件始终比手绘Tasking Manager项目更可取。JOSM、QGIS 等工具可用于创建要导入到Tasking Manager的文件。建议的工作流程是使用JOSM创建一个AoI的.osm文件，然后使用 http://geojson.io/ 生成一个GeoJSON。

### 画出要绘制的兴趣区域

1.点击右上角的 “绘制” 按钮。
2. 要在地图框架中画一个代表AoI的多边形，按住鼠标右键移动地图，不要点击，这样会增加一个节点。多边形要严格限制在兴趣区域。这样可以节省完成不感兴趣的瓦片（如 海洋、森林）的时间来。  
3.点击你的起点以完成多边形  
4. 完成一个多边形后，你可以移动节点或添加新的节点，以获得你想要的区域。

或者

### 上传兴趣区域的GeoJSON或KML文件，以便绘制地图。  

1.点击 “导入” 按钮，  
2.在 “文件上传” 窗口中浏览至您的文件，  
3.单击文件名以高亮显示该文件，然后单击 “打开”。  
4. 导入的兴趣区域无法编辑。


## 任务创建

一个项目的AoI是要绘制的大的整体区域。这个区域再被划分为更小的区域，称为任务。 

由文件上传或手绘定义的AoI会出现在地图框架中，然后你会被要求选择如何将AoI分割成单个任务。有两个选项：  

1.方形网格-Tasking Manager将在完全相同大小的任务方块中统一划分整个项目区域。对于一般众图项目来说，这通常是一个非常好的主意。
2. 任意几何图形 - 如果你上传了一个文件来定义你的项目区域，这个文件也可以包含各个任务的形状。在制图中必须有特殊需求才能创建自定义任务形状。例如，一个道路项目的导入可能需要自定义的任务形状或AoI减少过程的输出。

### 使用方形网格作为任务方块

要创建统一的方形瓦片，请选择“方形网格”选项。  

![TM Tile Sizes][]

AoI会自动分割成网格单元，每个单元成为一个任务。使用"较大"和"较小"按钮确定最佳瓦片大小，以调整任务方块的大小。因此，较小的瓦片尺寸将导致更多的任务。因此，最佳的瓦片大小将取决于区域的大小（为大型项目创建较小的瓦片）和可能需要在每个瓦片中绘制的特征数量。一般来说，随着AoI的大小和/或可能的特征数量的增加，为项目选择的瓦片大小应该减少。 

请注意，**在确定任务方块大小时，有多个地图图层可供使用**。地图右下角的按钮将为你提供地图图层的选项列表。选择其中一个影像图层可能是最好的选择，因为它可以让你看到要绘制的实际影像。

如果你有项目的自定义影像，你也可以通过使用地图右上角的按钮加载，并输入TMS或WMS网址。

你还可以通过使用"拆分"工具创建多个不同大小的任务。任务方块可以被多次分割。同样，使用图像层将帮助你决定在哪里需要拆分任务。"重置"按钮将重置你所有的拆分任务。“拆分（多边形）”选项将让你在区域上绘制多边形以创建更小的任务，而“拆分（点）”将让你点击单个任务方块进行拆分。重置"按钮将删除您所有的自定义拆分。

> 通常，你会希望在建筑密集的居住区上划分小瓦片。目标应该是创建可以在10-15分钟内完成的项目任务。

***决定瓦片大小之前的注意事项***

-地图马拉松的新手测绘人员将以大约相当于经验丰富测绘人员的四分之一的速度绘制区域（许多地方的开始速度要慢得多，但很快就会变得更快）。 
-一个新手测绘人员发现在卫星影像中搜索要素与实际绘制它们一样困难。在圆形灌木区域寻找天然材料茅草的圆形小屋对于 “新比” 来说是一条陡峭的学习曲线。
-新的测绘人员还发现很难追踪诸如建筑物等许多要素。
-在此过程的后期，您有机会让测绘人员 “拆分” 一个方形-将方形拆分为几个可以帮助新的测绘人员获得他们能够应对的大小。  
-方形中最有可能出现问题的部分是边缘和角落。因此，较小的方格意味着越多的角和边缘，并将导致测绘的重复以及遗漏对象。权衡你制作方形的大小程度，这可能会使新手测绘人员工作变得更容易，并且由于边角和边缘更多，错误也会增加。
-一个方形可能会被拆分，但之后没有选项可以将方形连接在一起以使它们再次变大。所以拆分时要小心
- **结论** 尝试自己绘制项目的某个区域，看看它有多容易以及将面临什么困难。这应该有助于你决定最佳的方形尺寸。允许拆分，但不是无限大-一些新手测绘人员会持续分割方格，直到它们太小以至于变得非常难以进行测绘。  

确定任务大小后，点击"下一步"。

### 任意几何形状

如果您上传了文件来定义项目区域，则该文件还可能包含有关您希望项目各个任务的确切形状的信息。如果AoI由一个多边形组成，则该项目将只有一个任务，通常不需要这样做，只是为了特定场景。

任意几何形状不能分割。

### 项目区域裁剪

确定任务尺寸后，你可以选择"裁剪"你的AoI。您可以将AoI修剪成你绘制或导入的准确多边形形状（建议），也可以修剪成包括 AoI 的最近的任务方块。

确定AoI裁剪后，点击"下一步"。

## 创建项目

给项目起一个标题（可以在下一个界面上编辑），然后点击“创建”

这样就在Tasking Manager中建立了项目，并打开一个屏幕，在这个屏幕上可以提供项目的描述、说明和其他信息。请记住，这一点一定不能低估。相当一部分绘图者（在许多情况下是大多数）之前没有使用OpenStreetMap和/或HOT的经验，因此不熟悉标记指南。因此，明确项目的目标，并在此列出所有测绘人员应考虑的资源是非常重要的。通常建议将一个项目限制在一类要绘制的对象上。如果你需要一个区域的底图，最好把它分成几个项目，一个项目用于道路，一个项目用于建筑物等。现在，初学者可以专注于一小类对象，同时学习如何正确地绘制它们。否则，你可能最终会得到很多瓦片，这些瓦片包含了所有的东西，但没有真正完整的东西。

创建项目之后，你需要编辑所有相关的设置：

- 描述 - 用于在列表中显示和激励绘图者的信息。
- 说明 - 详细说明所要绘制的对象/实体/特征的内容和方法的。
- 元数据 - 用于项目分类的附加信息。通常用于筛选整个项目清单。
- 影像 - 提供TMS网址和许可证的地方。
- 优先区域 - 允许你指定项目中应首先绘制的部分。
- 权限 - 允许你限制对项目的绘制和审核的访问。
- 设置 - 项目截止日期和JOSM预设。
- 操作 - 向贡献者发送消息，一键审核和废止整个项目。

### 描述

![TM Description][]

在此界面上，你可以设置项目的优先级、其状态为草案、已发布或已归档、在项目列表中使用的简短描述以及测绘人员选择项目后可用的长篇描述。

简短和长篇描述都应该提供项目存在的原因、谁将使用数据以及测绘将产生的预期影响等信息。这些字段支持Markdown文本，可以包括图像和视频。

### 说明

![TM Instructions][]

**Entities to Map** - A list of the features you want users to map. Generally the fewer features the better as they are more likely to get completed.

> Projects that ask for lots of entities to be mapped are difficult for mappers and difficult to get validated. They take much longer to get a good usable dataset. Task sizes are also difficult to make efficient for different types of mapping, e.g., buildings need small task squares, roads and waterways need larger task squares. Making multiple projects over the same area to get buildings and linear features mapped is a best practice.

**Changeset Comment** - This is the default changeset comment that will be attached to every data upload to OSM. It usually includes something that identifies the Tasking Manager the project resides on and the features that were mapped. It is often used for "hash tags" to help identify the organization requesting and/or doing the mapping. It can also describe the mapping being done, e.g., "Mapping buildings."

> Users should be instructed to fill in meaningful comments about what they mapped, but helping them out with good default comments is always a good idea.

**Detailed Instructions** - This is where the majority of your detailed instructions will be placed and what we expect every mapper and validator to read carefully and follow.

See the below notes on creating good instructions.

**Per Task Instructions** - These will be displayed when a mapper selects a task and also has a special feature that allows Task specific URLs to be crafted based on the typical "slippy map" x, y, z coordinates.

### Metadata

![TM Metadata][]

> All of these fields should be filled out and will become non-optional in future versions of TM3.

**Mapper Level** - This is an indication of the difficulty of the mapping project. There are 3 options Beginner, Intermediate and Advanced. This setting is an indication to the mapper what experience level they should have to be most successful in mapping the project. It can be used in project list filtering and the suggested level can be required in the Permissions screen.

**Type of Mapping** - Used in project list filtering and helps mappers find projects they like to map.

**Organization **- Allows you to specify the organization the mapping will be used by. Used in project filtering.

**Campaign **- This allows you to group the project with other projects that are part of larger overall mapping effort. Used in project list filtering.

### Priority Areas

![TM Priority Area][]

Use the provided tools to draw areas that should be mapped first. You can have multiple priority areas for a Project. You can also change priority areas at any time.

> During disaster mapping, early in the event, having a large project AoI and using priority areas to focus mapping as new information comes in is a best practice.

### Imagery

URL Field - A field that takes a TMS URL that will passed automatically to the OSM Editor the mapper or validator uses. Please follow the example, it is very important it is formatted correctly to work in all editors.

License - Optionally, if there is a specific license required for the mapper to accept in using the imagery, you can select it here. If you need a licese that is not available, you can contact an administrator for the Tasking Manager installation and ask them to add it.

### Permissions

![TM Permissions][]

Mapper Level - Allows you to require that a mapper is at the proper level to map on the project (Metadata screen above). Mapper levels can be set manually, but are automatically applied based on total changesets.

Require Validator Role - This allows you to require that people doing validation have been evaluated to be qualified validators. It is a peer review process to designate someone a Validator, Project Managers and existing Validators can mark any user as a qualified Validator.

Private Project - This restricts access to the Project to a list of Users. Users must have logged into the Tasking Manager at least once before they can be added to a project.

### Settings

Default Locale - Allows the setting of default instructions language for a project.

### Actions

![TM Actions][]

Message All Contributors - Sends a Tasking Manager message to everyone who has marked a task complete or valid. It can be used to thank contributors and/or guide them to other projects in a portfolio/campaign. It should also be used before using either of the two Validate/Invalidate all Tasks options described below.

Validate all Tasks - This will mark all tasks to "Green" validated status, with the exception of tasks that have been marked as "Bad Imagery"

Invalidate all Tasks - This will mark all tasks to "Red" invalidated status, with the exception of tasks that have been marked as "Bad Imagery"

Delete Project - This will permanently delete the project from the Tasking Manager.

Clone Project - This will create a duplicate of the project except for the AoI which you will need to re-import or re-draw.

### Instruction Notes

Please use plain language as your target audience may not consist of native English speakers.

1. The title of the project should already reveal what entities should be mapped. Prefer a title such as
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. The most important messages should appear on the instruction tab first to ensure they are read. This would include any special imagery to use instead of Bing. The first sentences could mention that it is not required to map every single house if the project is about roads and residential areas, for example. Or that it is required to map every house if the project is to be used for population density estimates. These are the messages that should also appear on the description tab.
3. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery (cf. the previous section). Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
4. There are guidelines that cover common errors we see while validating. One example is Blake Girardot's compilation on [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Use the link in the instructions and explain that adhering to these guidelines is required.
5. The definitive resource on tagging is the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). For many HOT-related tasks the page on [tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) is the proper specialization and highly recommended reading for every mapper. If your project must adhere to different tagging standards then write a similar page in the wiki and link it in your instructions.


### 关于影像的注意事项

在大多数情况下，我们使用 “标准” Bing图像。但是有些情况下你可能想要选择替代来源：

1. Bing does not provide high-resolution coverage for your AoI.
2.Bing在这个领域有相当大的云覆盖面。
3.灾后评估需要更新的图像。

如果Bing不足，那么 Mapbox 是下一个选择。只有当这两个来源都不符合您的要求时，您才应该寻找其他来源。

In such cases it is not sufficient to choose a license-compatible source and make it available through a WMS or TMS service. Your AoI has probably already been partially mapped using Bing or Mapbox imagery and there might be a noticeable offset between images. You must have a close look at various locations of your AoI and determine the offset between your imagery and previously mapped data. If the existing OSM data are offset with respect to your imagery but fit Bing imagery then we usually assume that Bing is the "gold standard" unless we have GPS traces which prove that this assumption is wrong.

If there is a constant offset between your imagery and Bing across the AoI then this might be corrected on the server so that images from various sources loaded in the editor match. If this is not possible, if the offset varies across the AoI or if existing data are aligned with various sources then it is time for plan B:

The important point is that you must develop a strategy for how to cope with these issues and provide detailed instructions to mappers and validators. We strongly suggest that you declare such a project "for experienced mappers only" and explain that experience in this case does not mean having mapped 200+ buildings but having already dealt with alignment issues and different imagery sources.

One possible strategy could include these steps:

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Bing.
2. Make sure that all existing features which are also visible on Bing are aligned with Bing imagery, i.e. realign if necessary.
3. Align the alternative imagery to existing features (and thus to Bing) using the imagery offset function of the editor.
4. Add new features from the now correctly aligned alternative imagery.

It is important that step 3 is repeated for every task of the project and the individual task squares should not be too large because imagery offsets can vary considerably across an AoI, particularly if the terrain is not flat. Even imagery discontinuities may occur across a project - look out for them and advise the contributors of such a problem.

Here are some suggested bits of information which you might include in the project instructions:

- [general guidelines for various editors](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [an animated gif on imagery alignment in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [the josm imagery alignment chapter in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


### Proofread and Publish
Proofread the various tabs to ensure wording and formatting are correct, and instructions are clear. If you need to make changes or refinements to your project, click the ‘Edit’ link in the upper right hand corner of the page. 
If the project is ready for mapping, click the ‘Publish’ link. Once the project is published, it is available for mapping to anyone with an OSM account, unless a group of users was specified in the ‘Allowed Users’ tab, in which case only the allowed users would be able to work on it.  If necessary, edits can still be made to the project after publication by clicking on the ‘Edit’ link.

[TM Tile Sizes]: /images/coordination/tm3_tile_sizes.png
[TM New]: /images/coordination/tm3_create_new.png
[TM Description]: /images/coordination/tm3_description.png
[TM Instructions]: /images/coordination/tm3_instructions.png
[TM Metadata]: /images/coordination/tm3_metadata.png
[TM Priority Area]: /images/coordination/tm3_priority_area.png
[TM Permissions]: /images/coordination/tm3_permissions.png
[TM Actions]: /images/coordination/tm3_actions.png