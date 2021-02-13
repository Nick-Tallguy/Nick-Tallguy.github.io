---
layout: doc
title: Tasking Manager 2
permalink: /zh_CN/coordination/tasking-manager/
lang: zh_CN
category: coordination
navigation: skip
---

# Tasking Manager 2

> Reviewed 2015-08-26  

** 如果您使用的版本的用户界面与此处描述的用户界面不同，那么您应该查阅 [版本概述](/en/coordination/tm-disambiguation)**

章节索引
-------------
-[如何在HOT(Humanitarian OpenStreetMap Team)中使用Tasking Manager的概述](/en/coordination/tasking-manager/#overview-of-the-process)  
-[语言、选项、帮助链接和其他链接。您的用户页面 - 您协助的项目列表和消息](/en/coordination/tasking-manager/#options-amp-links)  
-  [用户登录](/en/coordination/tasking-manager/#getting-started-with-the-tasking-manager)  
-  [查找项目(/en/coordination/tasking-manager/#locating-a-project)  
-[描述、地图网格、说明、贡献、活动、项目的统计数据](/en/coordination/tasking-manager/#description)  
-[在地图中选择一个方形、设置计时器、释放](/en/coordination/tasking-manager/#selecting-a-square-to-map)  
-  [JOSM, iD, Potlatch 2, Field Papers, Walking Papers](/en/coordination/tasking-manager/#editing-choices)  
-  [分裂一个方形](/en/coordination/tasking-manager/#splitting-a-square)  
-  [在完成全部绘制前解锁方形](/en/coordination/tasking-manager/#unlocking-a-square-before-it-is-complete)  
-  [标记你的方形为完成状态](/en/coordination/tasking-manager/#finishing-a-square)  
-  [发送信息](/en/coordination/tasking-manager/#sending-a-message-from-the-comment-box)  
-  [在邮件或者消息中鉴别方形](/en/coordination/tasking-manager/#referring-to-a-particular-square-when-sending-an-email)  
-  [在线帮助 - IRC, Internet Relay Chat](/en/coordination/tasking-manager/#getting-live-help)  
-  [常见问题提示](/en/coordination/tasking-manager/#editing-hints-and-tips)


The HOT Tasking Manager, <http://tasks.hotosm.org/> 是一个直观的工具，测绘人员可以使用它将区域分类为网格，并协同工作以有组织的路径绘制地图。这使得世界各地的制图者能够协助绘制工作区域重叠风险最小的已定义区域的绘图，还允许在地面和远程工作的人员（有时也称为 “armchair mappers”）有效、快速地协作，避免意外返工由于冲突而需要。  


## 流程概述

1.管理员在 OpenStreetMap 中选择需要更新的区域。管理员确保有合适的卫星影像可供测绘人员追踪，并创建覆盖该区域的项目。项目中指定了所需的详细程度和紧急程度，以及测绘人员需要的任何其他信息。如果满意，管理员会在任务管理器中发布项目，但如果需要，他们也可以稍后进行更改。  
2.远程测绘人员选择任务方形，完成测绘，然后将正方形标记为完成。  
3.第二个远程测绘人员是否已完成到令人满意的水平，并将该方块标记为 “已验证”  
4.可以从项目的 “统计” 选项栏中监控测绘的进度，并且可以根据管理员的要求降级或归档项目。  


## 选项和链接

The Task Manager最初以英语显示-要更改为另一种语言，请单击红色标题横幅中的 ** 英语 **。  

有关 Tasking Manager、HOT 赞助商、合作伙伴和帮助的信息，请单击页面顶部的 ** 关于 **。

登录后，您可以点击顶部的用户名。在这里你可以：  

-访问已完成方形的项目列表，  
-转到Tasking Manager中的 ** 消息 ** 屏幕（这与 OpenStreetMap 消息系统不同）  
-注销  
-查看在Tasking Manager中贡献完成方块的所有用户的列表。您可以访问链接以查看有关所选用户的更多信息，例如他们完成了哪些任务以及 OSM 编辑历史记录。  

![Tasking Manager Username_list][]  


## Tasking Manager入门

您可以作为访客查看项目，但要积极参与，您必须登录Tasking Manager-使用您的 OpenStreetMap 帐户用户名和密码。打开互联网浏览器并转到 <http://tasks.hotosm.org>。你会看到这样的页面：  

![Tasking Manager Login][]

-点击 “登录 OpenStreetMap”  
-您同意允许此应用程序访问您的 OpenStreetMap 帐户。点击 “保存更改”。  

![Authorizing access to OSM account by the Tasking Manager][]


## 定位一个项目

当前的项目列表可能会根据以下内容进行排序：  

-高度优先  
-创建日期，或  
-上次更新  

您可以通过单击 ** 您的项目 ** 框进一步细化列表，以仅查看您参与的项目，无论您是否已完成方形。审核人们还可以通过使用此复选框找到他们在其中贡献了经过验证的方块的项目。您可以使用自由文本搜索来查找包含特定文本字符串的项目，例如 **Ebola**（搜索不区分大小写）。  

项目经常被项目编号引用，例如 [**#711 - Ebola Outbreak, Kayes, Mali - Pre-emptive building mapping**](http://tasks.hotosm.org/project/711)，在这种情况下，您可以在 #711 上搜索找到此项目。  

点击蓝色项目标题可查看有关该项目的更多信息。  

![Job description][]


## 描述

你需要了解的关于该项目的一切都在这里！左侧是测绘项目的描述以及所需内容。右侧是一个显示要绘制的区域的网格;  

-通常在项目周边方块中可见的 Mauve 线表示项目的边界。此边框通常遵循可用影像，因此可能会出现不寻常的形状。尽管测绘可能在此边界以外完成，但这不是必需的，也不会被审阅人员考虑。  
-地图上的粉红色区域表示优先级较高的区域，  
-黄色网格方形已经完成，  
-黄色边框表示目前正在进行绘制方形工作，  
-绿色方块已经完成并被 “审核”，以及  
-剩下的方形仍然需要完成，或者之前已经失效（无效的方形是较暗的颜色）。  


### 使用说明栏
这显示了测绘任务中所需的内容。Tasks难度范围很广，适合初学者、中级和高级测绘人员-这些说明将解释这一点。确保你阅读并理解本节。测绘项目有许多风格，用于许多不同的目的。一些常见的项目活动包括：  

-道路网络：由地面人们用来将数据加载到手持导航工具中，并确定如何访问偏远地区  
-测绘村庄：通常用于确定人们居住的地方和可能受到影响的地方  
-建筑物测绘：用于损害评估或追踪疾病的接触者。也用于人口估计。  
-绘制河流、墙壁和其他特征  

并非世界上所有地区都与您自己的地区相似，因此可能会提供具体的标记建议。例如，非洲的道路网络与典型的美国或欧洲高速公路系统截然不同。  

在上传/保存更改时，您应确保在编辑程序中显示 ** Changeset 注释 **，以及在进行更改时可能需要复制和粘贴到源字段的 ** 来源 ** 信息（取决于您的编辑软件）。  

有时，可能会提供特定于任务的图像-您可能需要同意授权协议才能访问它。说明通常会指示最简单的路径来将其加载到编辑器（如 JOSM 或 ID）。  

检查标记为完成的方形时，审核人员会期望instructions选项栏中的要求都已完成。您可能会发现完成整个tile相当困难-下面提供了有关解tiles的指导；以及为下一个测绘人员提供有用的反馈。  


### “活动” 选项栏  

这将按时间顺序显示任务内发生的活动。  


### “统计” 选项栏  

这包含进度图表和其他信息。  

“统计” 选项栏还包含在项目中至少完成一个方形的测绘人员列表-要查看他们已经完成了哪些方格，你可以 * 将鼠标光标 * 悬停在用户名上，他们完成的方格将成为唯一可见的方格（** 使用它来定位你拥有的方块之前已完成 **)。  

通过将鼠标悬停在用户名上方来定位方形后，您可以点击方块以查看测绘人员和审核人员为方形留下的评论，这是获取审核人员反馈的有用方法。  


### 贡献栏  

开始点击当你已准备好测绘。您可以通过从地图中选择方形后点击 “随机执行任务” 选项来选择要处理的方形。  

![Picking a task][]  


## 选择要测绘的方形  

![Assigned task square][]  

选择正方形后，您将能够看到这个方形是否有任何历史记录，例如测绘人员开始绘制，但意识到他们没有时间完成方形。  

如果你不小心选择了一个正方形，你可以通过点击上面屏幕截图所示的蓝色关闭控件-**x** 来释放它。  

点击 ** 开始测绘 ** 按钮会锁定方形，这样其他映射器在再次释放之前不能选择它，并启动 2 小时（120 分钟）倒计时器，在此时间结束时方形将自动释放。定期检查倒计时器是很好的做法-很容易被投入到你的地图中，而不是意识到你的方形已经被释放，现在已经被另一个测绘人员开始测绘了。这可能导致冲突和问题。  


### 编辑选择

锁定方形后，会立即向您显示不同的编辑选项。

![Editing options][]  


#### 使用 JOSM 编辑  

在使用此链接之前启动 JOSM，它会自动将现有的 OSM 数据加载到 JOSM 中。  

>  1. 'Enable remote control' needs to be ticked - found under **Edit / Preferences / Remote Control**
>  2. If you have previously installed the plug-in 'continuosDownload' it is best to disable it (untick 'Download OSM Data continuously' under the **File** menu in JOSM).  
>  3. If JOSM does not load the imagary automatically as well, it can normally be found under the **Imagery** menu. [More info on imagery here ](/en/josm/more-about-josm/#add-imagery)  


#### iD editor  

Select this to automatically start a new tab or window of your web browser, with existing OSM data loaded. The Internet Explorer web browser does not currently support iD and it will load Potlatch 2 instead. Your original tab or window with the Task Manager will still be present.  


#### Potlatch 2  

Editor will load in a new window or tab. Potlatch will not automatically display the task bounding box, but you can do so by following this procedure:  

1. In the Tasking Manager, select a square and click Start Mapping to lock it  
2. In the Tasking Manager, select Edit with JOSM (if a window appears saying "JOSM remote control did not respond..." just click OK).  
3. Below the Edit with JOSM button, text will say "Tip: Download the following .gpx file...". Download the .gpx file, and note where it is saved.  
4. In the Tasking Manager, change from Edit with JOSM to Edit with Potlatch 2. Potlatch should open in a new tab.  
5. In Potlatch, select Background, then Vector File...  
6. In the Load Vector File window, at the bottom next to File, click Open, and navigate to the .gpx file you just downloaded  
7. In the Load Vector File window, make sure the box is checked in the Show column for the .gpx file, then close the window  
8. Potlatch should now display the boundary as a square (probably cyan). Note that Potlatch will still load data outside the boundary.  


#### Walking Papers / Field Papers  

For use only when you are involved in a project where a local mapper has carried out a ground survey and marked a printed map with information such as road names. This map can be rescanned & used as a background image for a remote or local mapper to read the information & update the OpenStreeetMap data [Field papers section of LearnOSM](/en/mobile-mapping/field-papers/).  


### Splitting a square  

Having selected your square and inspected it with the imagery in place, you may realise that there is far too much detail required for mapping. An example of this may be tracing buildings in dense urban areas, or locating small villages in large areas. As guidance, where it isn't possible for one person to complete within the 2 hour time limit you can often split the task into 4 smaller areas. *Use with caution* - if/when squares are split too small it is difficult to judge what type of highway is involved, and to identify other features.  

> Be aware that other useful comments about the work previously completed will no longer be available.


### Unlocking a square before it is complete

If you start working on a square, but cannot complete it for some reason, it is best practice to leave a comment against the square. Simply detail what remains and choose **unlock**. Make sure your comments are relevant and aimed to help out the next mapper.  

For example:  

    Almost complete, small village top left 
    in the square to be traced though


### Finishing a square

It is very difficult to be completely certain that you have completed a square - however it is acceptable to mark the square as complete if you are fairly sure - the contents will be checked by another mapper when validating, and any small additions can be made then.  

For the process to work most effectively, mappers need to mark squares as complete rather than leaving them for several other 'not sure' mappers to spend time also checking them.  

When you have finished editing and think that the square is complete, save any remaining edits with your editing programme, then return to the Tasking Manager.  

+ Add comments to the box detailing what you achieved and more importantly, what you are not certain of. For example; "Complete as far as I can see, but there is cloud covering the top right corner of the square & I cannot see to trace this area".  
+ Click on the "Mark Task as Done" button, and your work is ready for review.  


### Sending a message from the comment box

When leaving a comment against a square, you can have the comment sent as a message to a named mapper. Much like Twitter, simply use an @ followed by the username. This will send a message to the user containing the comments from this box, plus a link to the square that the comments box relates to.  

For example:  

    @Tallguy nice work tracing the building  
    details here. You missed a small group  
    of houses on the upper left of the tile,  
    I added a few in, but some still remain.  

This is particularly useful when validating or adding on another's previous work - you can provide feedback, thanks or more.  

+ You may wish to provide a link to a site which may help the mapper, such as <http://learnosm.org/en/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ Be aware that many people from around the world will be participating, so prefer simple, clear language. If you come across comments in other languages, tools such as google translate are reasonable effective.


### Referring to a particular square when sending an email  

If you need to send a message, such as an email or an IRC message, and you are querying something concerning a particular square within a project (perhaps you need help identifying something from the satellite imagery):  

1. Click on the square concerned  
2. Click on the address bar in your web browser, which should show something similar to 'http://tasks.hotosm.org/project/713#task/259'  
3. Highlight with the mouse all of the text in the address bar, or use the shortcut keys **Ctrl+A** to select all the text, then use shortcut keys **Ctrl+C** to copy the text  
4. In your email, IRC message, or other message,  
    - either, mouse right click & paste,  
    - or shortcut keys **Ctrl+V**, to paste the link into the message. 


### Getting live help 

![IRC_help][] 

From the tasking manager;  
1. Click on **OSM HOT IRC Channel #hot**  
2. Enter a username (your OSM username?), or use the preset characters  
3. At the bottom of the dropdown list select **hot**  

![IRC using][]  

- To the right of the screen is a list of users that are online now.  
- Type your message in the box at the bottom left of the screen (this is sometimes temporarily obscured by other text, but this will disappear as you select the box.  
- To direct a message to a particular individual, include their username from the list on the right within your message. Type, then use the return key to submit your comment. The system is 'live' so wait for an answer - your username will often be used in the reply to show you the comment is directed to you. You will normally receive a reply within a few seconds, so please wait.  
- An alternative simple system can be found at [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Further info on using IRC with OpenStreetMap may be found at [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Alternatively use an IRC client of your choice (Server=irc.oftc.net, and channel=#hot)  


### Editing hints and tips  

By now you have a good understanding of what the Tasking Manager is, and some of the various functions it supports. Unlike normal editing, this tool is often used for time critical projects with many participants - this may be a little bit different to what you are used to.  

**Some general advice to heed when working in this tool:**  

* Avoid mapping far outside of your square - other mappers may be working in that area, resulting in duplicated efforts. It's OK to map objects such as buildings overlapping a boundary, but avoid going much further - upload immediatly after mapping something at the border.  
* Extend roads, streams, or other features slightly over the boundaries - this lets the next mapper pick up where you left off, but upload as soon as you finish editing it.  
* If you are in doubt about what a particular feature is, use the comment section to ask questions or check the wiki.  
* If you make a serious mistake - for example, deleting a major feature or relation - use IRC or the comment box to ask other mappers to help in reverting this for you. Try to include the changeset, or a description of what happened. Being a collaborative task, many other mappers are here to help - it's important to remember everyone makes mistakes sometimes.  
* Don't hesitate to ask for feedback - mappers validating your work can be terse or to the point, but if they know it's OK to engage in a dialog with you, the outcome is often a lot better for all involved. It can be difficult to communicate in another language, and it's easy to appear abrupt when you have to translate as well as pass a message in a language you are not fluent in.  
* You must not validate your own work - a second pair of eyes will always lead to better quality mapping.  
* Don't worry if other mappers are terse when validating your work - like you, they just want to ensure all of the data is mapped accurately. Feedback is invariably about the remaining work, not criticism of your efforts to date.  


[Tasking Manager Login]: /images/coordination/tasking_manager_image01.png
[Tasking Manager Username_list]: /images/coordination/tasking_manager_image02.png
[Authorizing access to OSM account by the Tasking Manager]: /images/coordination/tasking_manager_image03.png
[Job description]: /images/coordination/tasking_manager_image04.png
[Picking a task]: /images/coordination/tasking_manager_image05.png
[Assigned task square]: /images/coordination/tasking_manager_image06.png
[Editing options]: /images/coordination/tasking_manager_image07.png
[IRC_help]: /images/coordination/tasking_manager_image08.png
[IRC using]: /images/coordination/tasking_manager_image09.png
[Tasking Manager About]: /images/coordination/tasking_manager_image011.png
[Tasking Manager Languages]: /images/coordination/tasking_manager_image012.png