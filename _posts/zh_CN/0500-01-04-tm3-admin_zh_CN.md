---
layout: doc
title: Tasking Manager 3 Project Creation
permalink: /en/coordination/tasking-manager3-project-admin/
lang: en
category: coordination
navigation: skip
---

# OSM Tasking Manager 3 Project Creation and Administration


** 如果您使用的版本的用户界面与此处描述的用户界面不同，那么您应该查阅 [我们的版本概述](/en/coordination/tm-disambiguation)**

Section Index
-------------
-  [Logging in ](/en/coordination/tasking-manager3-project-admin/#logging-in-&amp;amp;-access-levels)  
-  [Initiate a new Project - define the area of interest](/en/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)  
-  [Task Creation - subdivide the area of interest](/en/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)
-  [Create the Project - specify what your users need to know](/en/coordination/tasking-manager3-project-admin/#create-the-project)
    -  [Description - the first thing users learn about your project](/en/coordination/tasking-manager3-project-admin/#description)
    -  [Instructions - what the users should do](/en/coordination/tasking-manager3-project-admin/#instructions)
    -  [Metadata - where the project belongs to](/en/coordination/tasking-manager3-project-admin/#metadata)
    -  [Priority Areas - where users should start mapping](/en/coordination/tasking-manager3-project-admin/#priority-areas)
    -  [Imagery - the basis for mapping](/en/coordination/tasking-manager3-project-admin/#imagery)
    -  [Permissions - who is allowed to map and validate](/en/coordination/tasking-manager3-project-admin/#permissions)
    -  [Helpful hints - how you should fill in all these fields](/en/coordination/tasking-manager3-project-admin/#instruction-notes)
    -  [Publish - do not forget or you never get work done](/en/coordination/tasking-manager3-project-admin/#proofread-and-publish)

The OpenStreetMap Tasking Manager is essential to conducting a mapathon, managing a HOT activation, or creating mapping tasks for student mappers. The Tasking Manager divides the work into manageable geographic chunks, which reduces editing conflicts, especially with large numbers of distributed mappers. The Tasking Manager also helps mapping accuracy and data quality by providing a consistent set of instructions for your mappers (e.g. 'map all roads and buildings'). In short, the Tasking Manager is how you set up and direct the workflow for open mapping activities. This module describes the basic administration of the OSM Tasking Manager for successful mapping events. 

 This guide is specifically written for those persons who need instructions on administration of the OSM Tasking Manager, including the creation and modification of mapping projects for open mapping events, i.e. 'mapathons'. This guide is specifically applicable to instances of the OSM Tasking Manager version 3 including the [HOT Tasking Manager](http://tasks.hotosm.org) and the [TeachOSM Tasking Manager](http://tasks.teachosm.org).

The HOT or OSM Tasking Manager version 3 is frequently referred to as **TM3,** as a shorthand for Tasking Manager, version 3.

## 登录和访问级别

The first thing to understand is access level. All access to TMd is authorized through the [OpenStreetMap website](https://www.openstreetmap.org). To access TM3 you will need an OpenStreetMap (OSM) account. Once you have this account visit [the Tasking Manager](http://tasks.hotosm.org) and click **Login to OpenStreetMap**, which will refer you back to the OSM page where you can authorize the Tasking Manager to have limited access to your OSM account. 

### Access Levels within the OSM Tasking Manager 3

The OSM Tasking Manager 3 has three user access levels:
-  **User** - The most basic level. The user is able to login to TM3 and use its functionality to find and select a mapping project and work on it. This level of usage is fully described in [The OSM Tasking Manager guide within LearnOSM](/en/coordination/tasking-manager-3/). Note that some projects, such as those in draft (i.e. unpublished) state are not visible to users.  
-  **Project Manager** - Project managers have access to create and update projects within TM3.  
-  **Administrator** - Administrators have access that allows them to manage access levels of users within TM3.

You will need Project Manager Access level to create new projects using TM3.

## Initiate a new Project within TM3 

![TM New][]

Click your username in the upper right corner, then **Create a New Project.** You then may choose between drawing your area of interest (AoI) on the map, or importing an area of interest from a geojson file;  

> Importing a file with a defined area is always preferable to hand drawing a Tasking Manager project. Tools like JOSM, QGIS, etc can be used to create files for importing into the Tasking Manager. The suggested workflow is to create a .osm file of the AoI using JOSM and then use http://geojson.io/ to generate a GeoJSON.

### Draw an area of interest to be mapped

1.点击右上角的 “绘制” 按钮。
2. To draw a polygon representing the AoI in the map frame hold the right mouse button down to move the map without clicking, which will add a node. The polygon should tightly frame the area of interest. This saves time for completing tiles that are not of interest (i.e. ocean, forest)  
3.点击你的起点以完成多边形  
4. After completing a polygon you can move the nodes or add new ones to get the area just as you want it.

要么

### Upload a GeoJSON or KML file of the area of interest to be mapped  

1.点击 “导入” 按钮，  
2.在 “文件上传” 窗口中浏览至您的文件，  
3.单击文件名以高亮显示该文件，然后单击 “打开”。  
4. Imported areas of interest can not be edited.


## Task Creation

An AoI for a project is the large overall area to map. That area is then divided up into smaller areas called Tasks. 

The AoI defined by the file upload or hand drawn will appear in the map frame, and you will then be asked to choose how the AoI is split into individual tasks. There are two options:  

1.方形网格-Tasking Manager将在完全相同大小的任务方块中统一划分整个项目区域。对于一般众图项目来说，这通常是一个非常好的主意。
2. Arbitrary Geometries - If you uploaded a file to define your project area, that file can also contain the shapes for the individual task. There has to be a special need in the mapping to create custom task shapes. An import of roads project might need custom task shapes or the output from an AoI reduction process for example.

### 使用方形网格作为任务方块

To create uniform square tiles, select the Square Grid option.  

![TM Tile Sizes][]

The AoI is automatically split into grid cells and each cell becomes a task. Determine the optimal tile size using the "Larger" and "Smaller" buttons to adjust the size of the Task squares. As such, a smaller tile size will result in more tasks. The optimal tile size will therefore depend both on the size of the area (create smaller tiles for a large project) and the number of features that will likely need to be mapped within each tile. Generally speaking, as the size of the AoI and/or the number of likely features increases, the tile size chosen for the project should decrease. 

Please note that **there are multiple map layers available to use while determining Task square size**. The button in the lower right corner of the map will provide your list of options for map layer. Choosing one of the imagery layers is probably the best option as it lets you see the actual imagery to be mapped.

If you have custom imagery for the project, you can also load that in by using the button in the upper right of the map and putting in a TMS or WMS url.

You can also create several different task sizes by using the "Split" tools. Task squares can be split multiple times. Again, using an imagery layer will help you decide where tasks need to be split. The "Reset" button will reset all of your split tasks. The Split (Polygon) option will let you draw a polygon over an area to create smaller tasks and the Split (Point) will let you click individual task squares to split. The Reset button will remove all of your custom splitting.

> Generally you will want small tiles over dense settlement areas for buildings. The goal should be to create project tasks that can be completed in 10-15 minutes.

*** 决定切片大小之前的注意事项 ***

-地图马拉松的新手测绘人员将以大约相当于经验丰富测绘人员的四分之一的速度绘制区域（许多地方的开始速度要慢得多，但很快就会变得更快）。 
-一个新手测绘人员发现在卫星影像中搜索要素与实际绘制它们一样困难。在圆形灌木区域寻找天然材料茅草的圆形小屋对于 “新比” 来说是一条陡峭的学习曲线。
-新的测绘人员还发现很难追踪诸如建筑物等许多要素。
-在此过程的后期，您有机会让测绘人员 “拆分” 一个方形-将方形拆分为几个可以帮助新的测绘人员获得他们能够应对的大小。  
-方形中最有可能出现问题的部分是边缘和角落。因此，较小的方格意味着越多的角和边缘，并将导致测绘的重复以及遗漏对象。权衡你制作方形的大小程度，这可能会使新手测绘人员工作变得更容易，并且由于边角和边缘更多，错误也会增加。
-一个方形可能会被拆分，但之后没有选项可以将方形连接在一起以使它们再次变大。所以拆分时要小心
-** 结论 ** 尝试自己绘制项目的某个区域，看看它有多容易以及将面临什么困难。这应该有助于你决定最佳的方形尺寸。允许拆分，但不是无限大-一些新手测绘人员会持续分割方格，直到它们太小以至于变得非常难以进行测绘。  

After finalizing Task sizes, click “Next”.

### Arbitrary Geometries

It is possible if you uploaded a file to define your project area, it could also contain information about the exact shapes you want your project's individual tasks to be.  If the AoI consists of one polygon, the project will have just one task. This is generally not needed and should only be needed for specific needs.

Arbitrary geometries can not be split.

### Project Area Trim

After determining the task sizes you will have the option to "Trim" your AoI. You can either trim the AoI to the exact polygon shape you drew or imported (suggested) or you can trim to the nearest task square that includes your AoI.

After finalizing a the AoI trim, click “Next”.

## Create the project

Give the project a title (can be edited on the next screen) and click "Create"

This establishes the project in the Tasking Manager and opens a screen where you can provide the descriptions, instructions and other information about the project. Keep in mind that this must not be underestimated. A fair share of mappers (in many cases the majority) will have no previous experience with OpenStreetMap and/or HOT and will thus not be familiar with tagging guidelines. It is very important that the objectives of the project are clear and that all resources which the mappers should take into account are laid out here. It is often advisable to confine one project to one class of objects to be mapped. If you need a basemap of an area better split it in several projects, one for the roads, one for the buildings etc. Now beginners can focus on a small class of objects while learning how to map them correctly. Otherwise you might end up with lots of tiles which contain a bit of everything but nothing really complete.

Once the Project is created, you will need to edit all its associated settings:

- Description - Used for display in lists and motivational information for mappers
- Instructions - Detailed instructions for what and how to map the needed objects/entities/features
- Metadata - Additional information used for categorizing the Project. Often used in filtering the full list of projects.
- Imagery - Place to provide a TMS URL and License required.
- Priority Areas - Allows you to specify parts of the Project that should be mapped first.
- Permissions - Allows you restrict access to the project for mapping and validation.
- Settings - Project due date and JOSM Presets.
- Actions - Send messages to contributors, validate and invalidate the entire project with one click.

### Description

![TM Description][]

This screen allows you set the project priority, its status as Draft, Published, or Archived, a short description used in Project listings and the long description available once a mapper has selected the Project.

Both the short and long description should provide information about why the project exists, who will use the data and the expected the impact the mapping will have. These fields support Markdown text and can include images and videos.

### Instructions

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