---
layout: doc
title: OSMTracker
permalink: /ko/mobile-mapping/osmtracker/
lang: ko
category: mobile-mapping
---

OSMTracker
==============

  
**이 글은 안드로이드 버전 OSMTracker를 다루고 있습니다. 윈도우 모바일에도 비슷한 기능을 하는 앱이 있습니다.**  
OSMTracker를 사용하면 경로를 따라 '경유점', 웨이포인트를 찍어 가면서 GPX 궤적을 그릴 수 있습니다. 음성 녹음, 사진 및 기타 메모도 기록할 수 있으며, 메모를 기록했을 당시의 위치 또한 저장됩니다.

시작하기
-----------

![OSMTracker_1][]  

1. 새로운 궤적을 기록하기 위해 십자 버튼을 클릭합니다.  
2.  버튼을 클릭하면 화면이 바뀝니다. GPS로 위치를 잡는 중이니 화면이 선명해질 때까지 잠시 기다리세요.  
3. 매핑할 지물의 위치에 정확히 도달하면 해당 지물을 나타내는 버튼을 누릅니다. 음성을 녹음하거나, 사진을 찍거나, 메모를 할 수도 있습니다.  
4.  기록을 중단하려면 플로피 디스크 아이콘을 눌러 지금까지의 기록을 저장합니다.  
5.  목록에서 궤적을 길게 터치한 다음 적절한 옵션을 선택해 궤적을 GPX 파일로 변환합니다.  
6.  오픈스트리트맵 업데이트에 활용하기 위해 궤적이나 사진, 기타 기록 등을 컴퓨터로 전송합니다.  


OSMTracker 설치하기
-------------------------

OSMTracker는 [F-Droid](https://f-droid.org/en/packages/net.osmtracker/)에서 설치할 수 있습니다.  
![OSMTracker Logo][]  


OSMTracker 설정
------------------------

OSMTracker를 실행하고, 메뉴 아이콘을 선택한 후 **설정**으로 들어갑니다.  

-  **음성 녹음 시간** - 원하는 시간으로 설정할 수 있습니다. 기본값은 30초입니다.  
-  **소리 켜기** - 활성화하는 것이 좋습니다. 음성 녹음이 시작 및 종료될 때 소리로 알려 줍니다.  
-  **인증 초기화** - .gpx 파일을 업로드하기 전에는 '비활성화' 상태입니다. OSMTracker에서 GPX 궤적으로 오픈스트리트맵 홈페이지로 업로드하려면 오픈스트리트맵 계정이 필요합니다.  
-  **GPS 설정** - 안드로이드 기기에서 위치를 확인하는 데 사용할 방법을 선택합니다. 이 값을 **높은 정확도**로 설정하는 것이 좋습니다. 그러면 GPS, Wi-Fi 및 모바일 네트워크를 사용하여 위치를 추정하게 됩니다.  
-  **시작 시 GPS 확인** - OSMTracker를 시작할 때 GPX가 꺼져 있으면 알림 창을 띄웁니다.
-  **GPS 시계 무시** 활성화하면 GPS 위성에서 받아 온 시각이 아닌 기기의 내부 시각을 사용합니다.  
-  **GPS 기록 간격** - 얼마나 짧은 간격으로 위치를 기록할 것인지를 지정합니다. 정확한 궤적을 기록하려면 0이나 1로 지정하세요.  

> 기록 간격은 배터리 사용량에 영향을 미치지만, OSMTracker를 사용하지 않을 때는 영향을 미치지 않습니다. 어차피 OSMTracker를 사용하면서 화면을 계속 켜 놓고, GPS를 사용하며, 사진을 찍고 영상을 녹화하는 모든 작업이 배터리 방전을 초래하므로 OSMTracker를 장시간 사용할 때는 보조 배터리를 연결하는 것이 좋습니다.  

-  **외부 저장소(SD) 디렉토리** - 기본값은 /osmtracker 입니다.  

> 최신 안드로이드 스마트폰 대부분은 외부 마이크로 SD 또는 SD 카드에 데이터를 저장할 수 없습니다. 여기서 말하는 '외부 저장소'는 실제로는 **/storage/emulated/0/osmtracker**입니다.  

-  **One directory per track** Recommended as this will result in all of the related voice recordings, photographs, text notes and the gpx trace all being stored in the same folder, named with the date and time of the gpx file creation.  
-  **Filename for named tracks** Options for you to choose from if you have a preference for the naming of the files.  
-  **Accuracy in GPX file** Recommended - will result in the waypoint name including a figure approximating the possible error range in metres. For instance *Footpath (4.0m)*. This information can be extremely useful later when updating OSM, and deciding whether to move an existing feature to align with the new trace & waypoints.  
-  **Use HDOP approximation** Relates to additional calculations to improve the position accuracy (Horizontal Dilution of Precision).  
-  **Export Compass Heading** Defines if and how the compass data should be exported to the GPX file.  
-  **Default photo source** Generally you will take photo's with the camera through this app., but you can chose to use photo's already on the phone.  
-  **Screen always on** Select this if you are constantly clicking on buttons, taking photo's, or making voice recordings - if you're not, then leave it blank so you have to switch the screen on each time, which uses less battery.  
-  **Main screen graphic theme** Options to change the contrast & screen brightness if you are having problems viewing the buttons.  
-  **Button Presets** You can design & install your own set of buttons & choose to have them displayed using this option. For a full description of this function, [see below](/en/mobile-mapping/osmtracker/#button-presets).   
-  **Background map** By pressing and holding on a recorded track, if this feature is selected, you may display the track, and the app will download OpenStreetMap data as a background.  

> This does require a data connection to download the map. You do not need to use this function unless you wish to.  

-  **Map Tile Provider** If you've elected to download map data as a background when you display the map, you can choose which version of the map to use as a background.  
-  **Orientation**  Do you want the screen to rotate, or use it in landscape or portrait?  

The Track List
--------------

![OSMTracker_2][]  
Having carried out your initial survey, clicking buttons, creating voice recordings and taking photographs, when you have finished, click on the floppy disk icon to end your track. Now press and hold the track in the list & options become available:  

-  **Resume Tracking** useful when you realise you've missed a bit!  
-  **Display** will show the track, possibly with a background map depending on your data connection and the option you selected in **Background Map**.  
-  **Export as GPX** - necessary for the track and waypoints to be used in an editing programme.  
-  **Upload to OpenStreetMap** Use this option to upload your trace to OpenStreetMap - you will need to have an OpenStreetMap account ([How to obtain explained here](/en/beginner/start-osm/)), and will need to authorise this app to upload traces to your account. See [GPS Traces - gpx files below](/en/mobile-mapping/osmtracker/#gps-traces--gpx-files) for more information on why these traces are so important to OpenStreetMap.  

> **Caution, do not delete your track yet.** You have only uploaded the basic trace and not the waypoints, photographs etc. Retain everything until it is transferred to a computer for editing purposes.  

-  **Delete**. Self explanatory.  


Button Presets
--------------

If you will be surveying for a particular reason, and the waypoint label you require is not available, you can create your own set of button presets prior to your surveying trip, load them into the phone and select them whilst surveying as & when you need them - several can be loaded in the phone & you may switch between them without stopping your recording. As the label you create is in the form of a personal note, it does not need to conform to the tags used within OpenStreetMap, and will not be uploaded to it. For instance, you may choose to have buttons labelled;  

- 1 family,  
- 2 families,  
- 3 families,  
- 4 families,  
- chiefs house,  
- 20% damaged,  
- 40% damaged,  
- 60% damaged,  
- 80% damaged,  
- destroyed,  
- unsuitable for lorry,  
- 4wd needed,  
- etc..  

For a full description on creating a button preset, see the [OSMTracker wiki section](https://github.com/nguillaumin/osmtracker-android/wiki/Custom-buttons-layouts). This is a [sample download file.](/files/R_of_Way.xml)  

![OSMTracker button presets][]  


Voice recordings, photograph & text image sizes  
-----------------------------------------------  

![OSMTracker recorded file sizes][]  

If file transfer at a later stage is an issue, be aware of the file sizes involved - as the screenshot shows photographs are very memory intensive compared to the gpx file or a 10 second voice recording.  


GPS Traces - gpx files
----------------------  

![OSMTracker JOSM][]  

GPS traces in the form of gpx files are made up of a number of elements, principally a 'trace' and 'waypoints'. The screenshot above shows a folder contents created in OSMTracker which has been loaded into JOSM ready for editing, with satellite imagery loaded to assist. The square icon in the centre of the trace indicates there is a photograph, taken at this location, available - simply click on the square icon to display the photograph.  

If you are navigating and using a GPS to give you directions, you will notice at some point that it will 'recalculate'. This is normally because its internal GPS location does not correspond to where it expects the road or path to be - there is a margin of error, but it is easy for roads and paths to be created in slightly the wrong place, or for the road to be moved after the map data has been created.  
Volunteers updating OpenStreetMap can download all of the traces that have been uploaded in an area, and use them to:  

1. Trace roads & paths through areas that could not be seen with satellite imagery because of clouds, trees, shadows, buildings etc..  
2. Adjust the satellite imagery so that it aligns correctly - there can be a surprising variation with some imagery.  

Although a single gpx trace is very useful, it may not be particularly accurate and can be as much as 30 metres out of place. When there are several traces, the correct route of the path or road is now easy to see - for example see the screenshot below showing a download of gpx traces in a town, in which the main roads can be seen by the volume of traces.  

![OSMTracker_gpx][] 




[OSMTracker Logo]: /images/mobile-mapping/osmtracker_logo.png
[OSMTracker_1]: /images/mobile-mapping/OSMTracker_1.png
[OSMTracker_2]: /images/mobile-mapping/OSMTracker_2.png
[OSMTracker button presets]: /images/mobile-mapping/OSMTracker_presets.png
[OSMTracker recorded file sizes]: /images/mobile-mapping/OSMTracker_files.png
[OSMTracker_gpx]: /images/mobile-mapping/OSMTracker_gpx.png
[OSMTracker JOSM]: /images/mobile-mapping/OSMTracker_JOSM.png