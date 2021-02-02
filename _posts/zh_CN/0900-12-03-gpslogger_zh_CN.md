---
layout: doc
title: 适用于安卓的 GpsLogger
permalink: /zh_CN/mobile-mapping/gpslogger/
lang: zh_CN
category: mobile-mapping
---

适用于安卓的 GpsLogger
=====================


![GPSLogger][]

A simple, light-weight, and minimalistic app for recording GPS traces on the Android platform. The easy-to-use interface with the sole purpose of GPS logging and staying quite makes for a very battery-efficient application that can save gps tracks in GPX, KML, NEMA or text file formats. Log files can automatically be uploaded to OpenStreetMap, an OpenGTS server, DropBox, FTP server, HTTP server or sent to an email address.  

<https://f-droid.org/en/packages/com.mendhak.gpslogger/>  

适用于 Android 的 GpsLogger 是一款免费使用的应用程序，也是一个积极维护的开源项目。欢迎捐款以进一步增强应用程序。如果您希望参与（例如提供其他语言的翻译、错误报告或提交功能请求），请访问 [repository](https://github.com/mendhak/gpslogger)。  

> OpenGTS refers to the [Open GPS Tracking System](http://opengts.sourceforge.net/) project  


功能
--------  

* Specify logging based on time or distance intervals  
* Specific battery saving configurations  
* GPS accuracy filter to not log unreliable points  
* Select wifi, Cellphone tower and/or GPS satellites as location information source  
* Log to GPX, KML, CSV, TXT or NMEA files with ZIP support  
* Imperial or metric display units  
* 启动时自动启动  
* Can run in background  
* Works well with other GPS applications running  
* Automatic sending to email/FTP/DropBox/Google Docs/OpenStreetMap/OpenGTS at user defined intervals  
* Easy to preconfigure text configuration files for distribution to many users  


用户界面
--------------------------

![Canvass1][]

** 菜单 ** 按钮提供了更多配置应用程序的选项。  
The **Views drop-down** lets you to choose how information is display on the screen.  
**Help** 按钮提供了有关如何使用该应用程序的其他信息。  
The **Annotate** button lets you to add a description to a point.  
** 记录一点 ** 按钮可以让你手动记录航点。  
**Upload** lets you choose from a variety of options for uploading your log file. This includes an option to auto send to any of the following:  

- OpenStreetMap,  
- Google Drive,  
- DropBox,  
- an FTP server,  
- an OpenGTS server or  
- send the log to an email address.  

通过 ** 共享 ** 按钮，您可以选择一个或多个日志文件，通过蓝牙或短信与其他人共享。根据设备上安装的应用程序，您可能有不同的选项供您使用。  


![Canvass2][]

** 开始登录 ** 按钮为蓝色。当你按下此按钮开始录制时，它会变成绿色按钮。  
** 坐标 ** 显示上次记录的 GPS 点，并在新坐标可用时刷新。  
The **Satellites** icon will show you how many satellites you are fixed on.  
** 升降 ** 显示高程数据。  
** 持续时间 ** 显示自按下开始按钮以来经过的总时间。  
** 距离 ** 将显示记录的总距离。  
** 文件类型 ** 表示生成的日志类型，而 ** 文件路径 ** 告诉您文件在设备或存储卡中的位置。  
The **Status** indicator will display in green when it is recording, while a spinner is displayed when the device is trying to get a fix.  
** Accuracy** 将显示记录数据的准确性，这些准确性因接收器、可用卫星的位置或数量、天气状况或地平线障碍物而异。  
The **Bearing** tells you the direction you are moving.  
The **Speed** will give you approximate information of how fast you are going.  
** 已记录的点 ** 将显示从按下开始按钮起记录的点总数。  


菜单
--------------------------

![Menus][]

The **General options** is where to find settings for *Start on bootup*, *unit of measurement* (Metric or Imperial), *debug file* and *version information*.  

![Menus1][]

The **Logging details** is where to find settings  *File formats* (multiple formats simultaneously supported), *folder* path to store logs, rules on *new file creation* and *custom file name*.  

![Menus2][]

![Menus3][]

Under **Performance** is where the settings for *location providers*, *timings*, *filters* and *listeners* are found. The location provider option lets you set the sources for the location data: **GPS** - navigation satellites; **Network** - cellular tower; **Passive** - lets GPSLogger "borrow" the location coordinates that another app has requested, to save battery by not making the request itself.  

![Menus4][]

![Menus5][]

**Auto send, email and upload**  is where the settings for various upload options such as OpenStreetMap, Google Drive, FTP, Dropbox are found.  

![Menus6][]

Uploading GPS traces is another way of contributing data to the OpenStreetMap project. A trace is a record of your location at various time or distance intervals, and recorded as geographic coordinates (longitude, latitude, altitude). They can be used as a background layer when editing maps, and is useful for adding features to the map, similar to aerial imagery.  

#### OpenStreetMap options

![osm0][]

** 允许自动发送 ** 设置决定是否自动上传日志文件。  
** 授权此应用程序 ** 用于授予应用程序使用 OSM 帐户将 GPS 跟踪上传到 OSM 的权限。  
在您授权应用程序上传 GPS 跟踪之前，** 可见性 **、** 描述 **、** 标签 ** 选项将被禁用。这些设置用于将上传到 OpenStreetMap 数据库的 GPS 跟踪。  
When you click the *Authorize this app*, you will be directed to your Internet browser and to the OpenStreetMap website. If you are not logged in, you will be asked for your credentials.  

![osm2][]

登录后，您将看到如下所示的页面，用于验证应用请求以及 * 上传 GPS 跟踪的特定权限 *。点击 * 保存更改 * 按钮以授权应用程序。  

![osm3][]

返回 GpsLogger 应用程序，屏幕将略有不同有更多选项可用。

![osm1][]

单击 ** 清除授权 ** 选项将删除将 GPS 跟踪上传到 OSM 服务器的权限。  

GPS 跟踪有几个 * 可见性 * 选项。* Private* 记录路径以匿名形式共享包含未排序的点。* 公共 * 记录路径显示在跟踪列表中，以匿名、未排序的点形式显示。* 可追踪 * 记录路径以匿名形式共享，并附有已排序点的时间戳。* 可识别 * 记录路径显示在路径列表中，可以与您的用户名关联，并附上已排序点的时间戳。  

It is recommended that you set the visibility of the GPS traces you upload to *identifiable*. The data and metadata makes it more useful for other mappers. If you have concerns about privacy and personal security, choose a more appropriate settings, or don't upload the traces at all.  

文本 * 描述 * 可帮助其他人了解如何一个路径被记录。徒步记录路径方式和无人机记录的方式不一样。  

* tag* 是短关键字，可用于将追踪与项目、地点或事件关联起来。  


数据收集
---------------

### Automated collection and uploading of gps tracks

Once properly configured, the application can run in the background and automatically record tracks and upload them once a day to any of its configured services. This would allow for the automated collection of tracks of daily driving to help build a collection of road and travel time data for later mapping or analysis. Once configured the person who has the phone or other android device should notice a little impact on battery usage and not have to do anything manually. Some experimentation will be needed to find the right balance of battery usage and clarity of the GPS tracks.  

An example config to automatically collect and upload to OpenStreetMap daily you would need to adjust these settings:  

#### General Options  

* **Start on bootup** - On  

#### Logging Details  

* **Log to GPX** - On  
* **New file creation** - Once a day  

#### Performance  

* **Time before logging** - 5  
* **Keep GPS on between fixes** - On (Turing this off can cause "jumps" in the GPS tracks while the device requires the GPS satellites each time.)  
* **Don't log if I'm not moving** - On  

#### Auto send, email and upload  

* **Allow auto sending** - On  
* **How often** - For once a day enter 1440 minutes. This setting can be a little tricky if you do not have access to data or wifi when it executes. It should start counting from when you either boot the device or hit the "Start logging" button, so if you start it in the morning, it will upload the same time the next morning for example.  
* **OpenStreetMap** - Allow auto sending on and any other settings you want to configure, pay close attention to the visibility setting if you have privacy concerns about the GPS tracks.  


### Manually Recording Traces

To start collecting logs (in Simple view), simply click on the blue button. A spinner will appear near the upper right corner of the screen to indicate the attempt to get a fix on satellites. A green circle will show in the upper right hand area to indicate logging is on going.  

要随时停止记录数据，只需按绿色的 * 停止登录 * 按钮即可。  

#### 注释  

要向日志添加注释或说明，请单击 *Annotate* (Pencil) 图标。此选项将允许您留下文本来描述或记下与当前点相关的详细信息。  

##### Calling annotation from the Notification Bar  

It's also possible to directly call the *Annotate* button from Android's Notification bar. Select the app from the Notification List and click on the *Annotate* button.  

![annotate0][]

这将显示一个输入对话框，您可以在其中输入备注的文本详细信息。

![annotate1][]

#### 日志间隔

日志间隔由 ** 性能 ** 菜单下的时间或距离设置决定。  

##### By time

**Time before logging** is set to 60 seconds by default. You can change this to five or ten seconds, when you are walking instead of riding in a vehicle. When you are in a car, you can set this to 1 second to generate very accurate logs.  

##### By distance

默认情况下，** 距离过滤器 ** 设置为零。如果要记录从最后一个点开始的每 X 个单位的坐标，则可以将其设置为其他内容。  


上传路径
------------------

#### to OpenStreetMap

Press the *Upload* button and select the *OpenStreetMap* option. A dialog window will appear where files are available for selection. Choose any you want to upload and hit the *Ok* button.  

![upload0][]

#### to other options

There are other upload options you can explore, but are outside the scope of this guide. Refer to the GPSLogger for Android Project website for details.  


​Sharing traces 
---------------

You may also share the recorded traces, or your current location with other people. Sharing options may vary from one device to another, or the apps installed on a device. Below is an example of how the sharing option screen may look:  

![share0][]


Exporting traces to an OpenStreetMap editor
--------------------------------------------

When you are done recording traces, the tracks may be imported to JOSM (or another OpenStreetMap editor, like iD).  

Connect your Android device to a computer (also possible using a data cable, Bluetooth, or an Internet connection) and copy the GPX tracks and (and perhaps, multimedia files) you’ve captured.  In your device storage, look for the GPX tracks under the folder /Android/data/com.mendhak.gpslogger/files  

Using the GPX tracks with the JOSM and iD editors are easy as dragging the files and dropping them into the application (or the browser tab, for iD).  

For additional details for  iD users, see the section [Configuring the Background Layer](http://learnosm.org/en/beginner/id-editor/#configuring-the-background-layer).  

If the JOSM editor is used, you can find instructions on how to use the GPX track, along with the multimedia files in JOSM see the section [Open in JOSM](http://learnosm.org/en/mobile-mapping/using-gps/#open-in-josm).  

For other OpenStreetMap editors, please refer to your software’s documentation.  


Display Options
-----------------

The application can be displayed 3 different ways, whichever you find most appropriate for your use:

#### Simple View

![view0][]

#### Detailed View

![view1][]

#### Big View

![view2][]


小结
-------

Excellent! You've been introduced to a light-weight, battery-efficient app you can keep in your Android device to record tracks, which you can upload to OSM, or use with your favorite OpenStreetMap editor.  

GPSLogger for Android is another tool for collecting field data without a dedicated GPS receiver. Casual field data collection is possible without an active Internet connection.  

Take some time to practice and familiarize yourself with the app before working with live data.  

This section introduced the concept of using GPSLogger for Android for collecting GPS traces, uploading traces to OpenStreetMap, and transferring these logs to a PC.  


Official GPSLogger for Android Documentation
--------------------------------------------

The project maintains an [FAQ](http://code.mendhak.com/gpslogger/#faq) for commonly asked questions.

[GPSLogger]: /images/mobile-mapping/gpslogger_000.en.png
[Canvass1]: /images/mobile-mapping/gpslogger_001.en.png
[Canvass2]: /images/mobile-mapping/gpslogger_002.en.png
[Menus]: /images/mobile-mapping/gpslogger_003.en.png
[Menus1]: /images/mobile-mapping/gpslogger_003a.en.png
[Menus2]: /images/mobile-mapping/gpslogger_003b.en.png
[Menus3]: /images/mobile-mapping/gpslogger_003c.en.png
[Menus4]: /images/mobile-mapping/gpslogger_003d.en.png
[Menus5]: /images/mobile-mapping/gpslogger_003e.en.png
[Menus6]: /images/mobile-mapping/gpslogger_003f.en.png
[osm0]: /images/mobile-mapping/gpslogger_004.en.png
[osm1]: /images/mobile-mapping/gpslogger_004a.en.png
[osm2]: /images/mobile-mapping/gpslogger_004b.en.png
[osm3]: /images/mobile-mapping/gpslogger_004c.en.png
[upload0]: /images/mobile-mapping/gpslogger_005.en.png
[share0]: /images/mobile-mapping/gpslogger_006.en.png
[view0]: /images/mobile-mapping/gpslogger_007.en.png
[view1]: /images/mobile-mapping/gpslogger_007a.en.png
[view2]: /images/mobile-mapping/gpslogger_007b.en.png
[annotate0]: /images/mobile-mapping/gpslogger_008.en.png
[annotate1]: /images/mobile-mapping/gpslogger_008a.en.png