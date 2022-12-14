---
layout: doc
title: BasicAirData GPS 로거
permalink: /ko/mobile-mapping/basicairdata-gpslogger/
lang: ko
category: mobile-mapping
---

BasicAirData GPS 로거
=======================

> Reviewed 2021-06-12

![BasicAirData-GPSLogger-002][]

BasicAirData GPS 로거는 휴대폰의 위치와 이동 경로를 기록하는 앱입니다. BasicAirData는 단순하고 가벼우며, 전력 절약 기능까지 갖추고 있습니다. 특히, 설정에서 'EGM96 자동 고도 보정' 기능을 켠다면 고도 측정 기능이 매우 정밀해집니다. 이 앱을 이용하면 이동 경로를 저장할 수도 있고, 경로 목록에서 바로 원하는 외부 뷰어를 켜서 이동 경로를 열람할 수도 있습니다. 경로는 KML, GPX, TXT 포맷으로 공유할 수 있습니다.

이 앱은 안드로이드에서 이용할 수 있으며, 자유·오픈 소스입니다.

다운로드는 [구글 플레이](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger) 스토어에서 할 수 있습니다.<br>
아니면 GPSLogger의 [깃허브 리포지토리](https://github.com/BasicAirData/GPSLogger/tree/master/apk)에서 APK 파일을 받아도 됩니다.

기능
--------

![BasicAirData-GPSLogger-000][]

* 궤적 기록하기 - 해당 앱에는 지도가 내장되어 있지 않습니다
* 현대적인 UI와 배터리를 적게 먹는 다크 테마, 손쉽게 이용할 수 있는 인터페이스
* 앱을 켠 채로 혹은 다른 앱을 사용하는 중(백그라운드)에도 기록 가능(안드로이드 6 이상에서는 모든 배터리 감시 기능과 해당 앱의 배터리 소모량을 최적화하는 기능을 꺼야 합니다)
* 기록 중에 관심 지점 추가하기
* GPS 정보 시각화
* 수동 고도 조정 기능(전반적인 오프셋 추가 가능)
* NGA EGM96 지구 지오이드 모형에 기반한 자동 고도 조정 기능(설정에서 별도로 활성화해야 합니다)
* 실시간 궤적 통계
* 기록한 모든 궤적을 앱 내부에서 볼 수 있음
* 아무 KML/GPX 뷰어나 설치해 궤적 목록에서 바로 궤적을 시각화할 수 있음
* 기기의 /GPSLogger 폴더로 궤적 내보내기(KML, GPX, TXT 지원)
* 이메일, 드롭박스, 구글 드라이브, FTP 등으로 궤적 공유하기(KML, GPX, TXT 형식)
* 미터법, 미국 단위계, 해양 단위계 중 원하는 것을 골라 쓸 수 있음

기초적인 사용법
-----------

![BasicAirData-GPSLogger-001][]

If the GPS location is not active on your phone, activate it. Then go in an open area and start GPS Logger.

1. Wait until the app finds the fix. When available, the __GPS FIX__ tab will start to show the coordinates of the Fix. At this point (when possible) you should wait at least another minute before proceeding with the next phase in order to allow the signal to stabilize
2. Click the __Record__ button of the bottom panel to start recording track points. The button will become red. switch recording process on and off at any time by clicking on that button. At the top of the button the app shows the number of the trackpoints recorded.
You can go to the __TRACK__ tab to view in real time the statistics of your trip.
3. When your trip is finished, click the __Stop__ button to finalize (finish) the active track. A dialog will appear, click __OK__ to confirm.
4. Go to the __TRACKLIST__ tab, where you will find the track you have just recorded. Tap on the track. A menu will appear. You can choose to share the track in many ways, view it using an installed external viewer, edit the track details, export it into /GPSLogger folder of your smartphone, or delete it from the tracklist. The formats used for export can be configured on the settings screen.

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