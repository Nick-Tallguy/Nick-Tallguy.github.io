---
layout: doc
title: Waterpoint - Updating OSM from data held in a spreadsheet
permalink: /en/case-studies/waterpoint/
lang: en
category: case-studies
---

Waterpoint - Updating OSM from data held in a spreadsheet
============

<!-- > This guide may be downloaded as [Waterpoint_en.odt](/files/Waterpoint_en.odt) or [Waterpoint_en.pdf](/files/Waterpoint_en.pdf)  

There are occassions when a large number of surveys are carried out, the data collected electronically, and this data consolidated into a spreadsheet. This guide illustrates how data, in this case data from a waterpoint survey, may be added to OpenStreetMap.

See also the new draft module [Opendata plugin](/en/josm/opendata-plugin/)

Requirements
------------

1.  User will need to have a basic understanding of JOSM, and have JOSM installed on their computer,  
2.  JOSM - Opendata plugin <!-- ![opendata plugin][] -->,  
3.  JOSM - todo plugin <!-- ![todo plugin][] -->,  
4.  JOSM - tagging preset HDM <!-- ![tagging preset hdm][] --> (*If the JOSM tagging preset HDM is not available within the list in JOSM, [it can be temporarily downloaded here](https://nick-tallguy.co.uk/nextcloud/index.php/s/HPZCqOSpdmB5juE) and manually installed within JOSM by clicking on the + icon next to the list of tagging presets.*)
5.  Spreadsheet of data suitably formatted.  

Spreadsheet - setting up for use  
--------------------------------

Spreadsheets created from surveys conducted with ODK Collect, Kobo Collect, or a similar data collection tool for use on a smartphone, will have fields which are not needed when inputting to OSM, and which will make it difficult for you to see which information you do need.  
When the survey was created the priority was to create questions that would allow a survey to take place, perhaps in difficult circumstances - the order of questions was logical for the person creating the survey.  
Inputting the information into OSM will probably require a different order for the columns of information.

Your aim is to change a spreadsheet which looks a little like this;  
![spreadsheet-1][]{: width="700px"}  

to one that looks like this;  
![spreadsheet-2][]  

### Suggested Method of adapting your spreadsheet

1.  **Make a copy of the original spreadsheet** & work on the copy.  
2.  Establish which tags you are intending to use - from the HDM tagging preset for water this would be ![hdm-water][]{: height="440px"}  


[opendata plugin]: /images/case-studies/opendata-plugin.png
[todo plugin]: /images/case-studies/todo-plugin.png
[tagging preset hdm]: /images/case-studies/tagging-preset-hdm.png
[hdm-water]: /images/case-studies/hdm-water.png
[spreadsheet-1]: /images/case-studies/spreadsheet-1.png
[spreadsheet-2]: /images/case-studies/spreadsheet-2.png
