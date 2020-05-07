---
layout: doc
title: BasicAirData GPS 로거
permalink: /ko/mobile-mapping/basicairdata-gpslogger/
lang: ko
category: mobile-mapping
---

BasicAirData GPS 로거
=======================

> Reviewed 2020-05-05

![BasicAirData-GPSLogger-002][]

BasicAirData GPS 로거는 휴대폰의 위치와 이동 경로를 기록하는 앱입니다. BasicAirData는 단순하고 가벼우며, 전력 절약 기능까지 갖추고 있습니다. 특히, 설정에서 'EGM96 자동 고도 보정' 기능을 켠다면 고도 측정 기능이 매우 정밀해집니다. 이 앱을 이용하면 이동 경로를 저장할 수도 있고, 경로 목록에서 바로 원하는 외부 뷰어를 켜서 이동 경로를 열람할 수도 있습니다. 경로는 KML, GPX, TXT 포맷으로 공유할 수 있습니다.

이 앱은 안드로이드에서 이용할 수 있으며, 자유·오픈 소스입니다.

다운로드는 [구글 플레이](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger) 스토어에서 할 수 있습니다.<br>
아니면 GPSLogger의 [깃허브 리포지토리](https://github.com/BasicAirData/GPSLogger/tree/master/apk)에서 APK 파일을 받아도 됩니다.

기능
--------

![BasicAirData-GPSLogger-000][]

* Track recording - the app has no integrated maps
* A modern UI with a low consumption dark theme and a tabbed interface
* Foreground & background recording (On Android 6+ please turn off all battery monitoring and optimizations for this app)
* Placemark creation also while recording
* Visualization of GPS information
* Manual altitude correction (adding an overall offset)
* Automatic altitude correction based on NGA EGM96 Earth Geoid Model (must be enabled in the settings)
* Real time track statistics
* In-app tracklist showing the list of recorded tracks
* Visualization of your tracks using any installed KML/GPX viewer, directly from the tracklist
* Track export in the /GPSLogger folder of your device, in KML, GPX, and TXT
* Track sharing, in KML, GPX, and TXT format, via E-mail, Dropbox, Google Drive, FTP, ...
* Uses metric, imperial, or nautical units

Basic Usage
-----------

![BasicAirData-GPSLogger-001][]

If the GPS location is not active on your phone, activate it. Then go in an open area and start GPS Logger.

1. Wait until the app finds the fix. When available, the __GPS FIX__ tab will start to show the coordinates of the Fix. At this point (when possible) you should wait at least another minute before proceeding with the next phase in order to allow the signal to stabilize
2. Click on the __Trackpoints__ button of the bottom panel to start recording track points. The button will become red. You can switch recording process on and off at any time by clicking on that button. The button shows the number of the trackpoints recorded.
You can go to the __TRACK__ tab to view in real time the statistics of your trip.
3. When your trip is finished, double-tap on the little __V tick__ located near the upper right corner to finalize (finish) the active track.
4. Go to the __TRACKLIST__ tab, where you will find the track you have just recorded. Tap on the track. A menu will appear. You can choose to share the track in many ways, view it using an installed external viewer, export it into /GPSLogger folder of your smartphone, or delete it from the tracklist. The formats used for export can be configured on the settings screen

Import of GPX tracks in OpenStreetMap Editor
--------------------------------------------

When you are done collecting field data, you may import the GPX tracks for use in JOSM, iD or another OpenStreetMap Editor.
You can use this simple 2-step procedure:

1. Save the GPX track on your Personal Computer in one of the following ways:
* Go on the GPS Logger tracklist, tap on the desired track and then click on __Export__; the GPX file will be created and saved on the /GPSLogger folder of your Android device (make sure that GPX format is enabled on the settings screen). Then connect the phone with your PC using a USB cable and move (or copy) your GPX tracks on your PC using the File Manager;
* As alternative, you can use the __Share__ feature to send the file to the PC (you can do it via e-mail, FTP, or using many Cloud Services). The sharing possibilities depend on the third-party apps installed on your Android Device;
2. Import the GPX track into your OpenStreetMap Editor: using the GPX tracks with the JOSM and iD editors is easy by dragging the files and dropping them into the application (or the browser tab, for iD).

Official Documentation
----------------------

- For further information about this app you can read [this article](http://www.basicairdata.eu/projects/android/android-gps-logger/).<br>
- [Here](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) you can find a Getting Started Guide and an Overview of the App Settings.<br>
- Problems during use or configuration of GPS Logger? Read the [Frequently Asked Questions](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) page!

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg