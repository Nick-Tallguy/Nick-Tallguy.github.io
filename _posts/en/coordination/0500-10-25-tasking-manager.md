---
layout: doc
title: Tasking Manager
permalink: /en/coordination/tasking-manager/
lang: en
category: coordination
---

# Tasking Manager

> This guide may be downloaded as [tasking-manager_en.odt](/files/tasking-manager_en.odt) or [tasking-manager_en.pdf](/files/tasking-manager_en.pdf)  
> Reviewed 2015-08-26  


The [HOT OSM Tasking Manager](http://tasks.hotosm.org) is a tool that coordinates many people mapping a specific geographic area in OpenStreetMap.

OpenStreetMap is a collabarative, crowd sourced, free map of the world. Anyone can contribute to OpenStreetMap to map any part of the world that interests them. The Tasking Manager is just a way to coordinate large groups of people contributing to OpenStreetMap but most contributions to OpenStreetMap are done by people not using the Tasking Manager.

The Tasking Manager is a totally seperate tool from the main OpenStreetMap project. When you are contributing to OpenStreetMap using the Tasking Manager, you are actually using multiple software tools:

* OpenStreetMap - A database of geographic information
* The Tasking Manager - Helps coordinate large numbers of people editing OpenStreetMap data in the same area
* An OpenStreetMap Editor - A software program that can read and write data into the OpenStreetMap database

![TM overview]()

The role of **the Tasking Manager** is to present a specific geographic region divided up into small, quick to map areas called "Tasks" and provide a way to "checkout" or "lock" one of those small areas while you map that area using one of the standard OpenStreetMap editors. By "checking out" or "locking" one of those small areas, you help ensure that no one else will be mapping in that same area while you are. This helps prevent "double mapping" or other errors when two people are working on exactly the same area in OpenStreetMap.

Once you are done mapping that small area, you record in the Tasking Manager that you have finished mapping that small area and hopefully you select another "Task" to map.


## Quick Start Guide

1. Create an account and login on http://openstreetmap.org/

![TM Quick Start 1][]

2. Visit http://tasks.hotosm.org/ and login via the upper right corner

![TM Quick Start 2][]

3. Click on "Contribute" and find a mapping project to work on

![TM Quick Start 3][]

4. Read the instructions for the project

![TM Quick Start 4][]

5. Click "Map"

![TM Quick Start 5][]

6. Find an open task to work on, click on it and select "Start Mapping"

![TM Quick Start 6][]

7. You will be switched to an OpenStreetMap editor, map all the features asked for in the instructions.

![TM Quick Start 7][]

8. When finished mapping, switch back to the Tasking Manager and click either "Mapped" if you completely mapped the task, or "Stop Mapping" if you just need to stop mapping for some reason.

![TM Quick Start 8][]


## Mapping Process 

1. A remote mapper creates an account in OpenStreetMap and logs into the Tasking Manager.
1. The mapper finds a project to work on, usually based on priority and skill level set by a Tasking Manager project manager. 
2. A remote mapper selects a task square, completes the mapping, and marks the task as complete.
3. A second remote mapper checks that the task is completed to a satisfactory level and marks the task as 'validated'
4. Progress of the mapping of the project can be monitored from within the "stats" tab of the project, and the project can be downgraded or archived as required by an administrator.

### Tasking Manager Login

The Tasking Manager is a seperate tool that coordinates mapping in to OpenStreetMap. However, it makes use of the OpenStreetMap login system. This means that you do not need to create a seperate user account to use the Tasking Manager, but you do need to create an OpenStreetMap account and login to OpenStreetMap before you can use the Tasking Manager for mapping.

When you first visit the Tasking Manager you will see a "Login" button in the upper right corner of the screen.

![TM login 1][]

Clicking on that button will take you to the OpenStreetMap website. There you will have to login and grant the Tasking Manager access to your OpenStreetMap preferences. Create an account on the OpenStreetMap website if you do not already have one.

![TM login 2][]

![TM login 3][]

Once you are logged into OpenStreetMap you will be returned to the Tasking Manager, clicking on Contribute or Get Started will take you to a list of projects you can contribute to.

### Options & links

The Task Manager initially displays in English - to change to another language click on **English** in upper right area of the window.

Once you have logged in, you may click on your username at the top. Here you can:

- Access a list of projects for which you have completed tasks,
- Go to your **Messages** screen within the Tasking Manager (this is not the same as the OpenStreetMap messaging system)
- Logout
- See a list of all users who have contributed completed tasks within the Tasking Manager. You may access links to see more information about the user you select, such as which projects they have completed tasks for and their OSM edit history.  

![Tasking Manager Username_list][]

### Finding a Project - Tasking Manager Contribute Screen

![TM contribute][]

The Tasking Manager Contribute screen is divided into three main areas:

- Project Filters
- Project List
- Map View of Project List

### List Filters

By default all the projects available for mapping at your experience level are displayed. You can use the Project List filters section of the screen to further narrow down the projects that you would like to work on.

- Project Number - If you know the number of the project you want to work on, you can enter it here and be taken directly to it.
- Organization - This allows you to just display projects that have been requested by individual organizations.
- Mapping Difficulty - Some projects are more difficult to map than others. This option allows you to find projects that are most appropriate for your experience level. You are encouraged to work on projects that best match your experience level, especially if you are a more experienced mapper.
- Type of Mapping - This allows you to find projects that include a certain type of feature to map. Many projects are focused on only one type of mapping, but projects may include multiple types of features to map.
- Full text search - This allows you to search for projects that may contain a certain word or phrase in the project description.
- Tags - Projects can have other tags that indicate some information not covered by any of the above, you can find projects by those tags by entering them into this field.

### Project List

The project list has two views, a grid view (shown above) that shows some detailed information about the projects and a list view that shows more projects and is sortable by column headings.

![TM project list][]

### Map View
At the bottom of the screen is a map view. The points on the map are color coded, with red being urgent, yellow being high or medium priority and grey being low priority. Hovering over any of the points on the map will show information about that project. Clicking on any of the points on the map will take you to that project.

![TM project map][]

### Mapping via the Tasking Manager

Once you have located a Project to work on, clicking on the Project title will take you to the detailed entry for that Project. This detailed view contains:

- A description of the project's importance and how the data will be used
- Detailed instructions for what to map
- Selection screens for mapping (and validating mapping)
- Detailed map of the individual mapping task areas, with information about their status.

![TM project description][]



### Description Tab

Everything you need to know about the project is here! On the left is a description of the mapping project and what is required. On the right side is a grid showing the area to be mapped;  

- The blue line normally visible in the perimeter squares of a project indicates the border of the project. This border normally follows the available imagery, an administrative boundary, etc, so may appear an unusual shape. Although mapping may be completed outside this border, it is not a requirement and will not be considered by validators.  
- Pink areas of the map indicate higher priority areas
- Yellow/Gold grid squares have had the first pass of mapping completed  
- A yellow border indicates the Task is slected by you
- Blue Tasks are currently being worked on by another mapper 
- Green Tasks have had the 2nd pass of mapping completed and the mapping has been "validated"
- Dark gray Tasks have been looked at by a mapper and marked as not having acceptable imagery for mapping 
- The remaining uncolored Task are available for mapping


### Instructions Tab
This shows what is required in the mapping task. Projects range in difficulty, suitable for beginners, intermediate and advanced mappers - and the instructions will explain this. Make sure you read and understand this section. There are many styles of mapping project, for many different purposes. Some common project activities include:  

- Road networks: Used by people on the ground to load data into hand held navigation tools, and to work out how to access remote areas  
- Mapping villages: Often used to identify places where people live and may be impacted  
- Mapping buildings: Used for damage assessments or contact tracing with diseases. Also used for population estimates.  
- Mapping rivers, walls and other features  

Not all areas of the world are similar to your own, so specific tagging advice may be provided. For example, Africa's road network is very different to typical American or European highway systems.  

There will be a section indicating the **Changeset comment** you should make sure appears in your editing programme when uploading/saving your changes, together with the **source** information you may (depending on your editing software) need to copy & paste to the source field on making changes.  

Sometimes, task specific imagery may be available - you may need to agree to a license in order to access it. Instructions usually will indicate the easiest way to load this into editors such as JOSM or iD.  

When checking a Task marked as complete, validators will expect that the requirements from the instructions tab have all been completed. You may find completing an entire task is quite difficult - guidance below is available around unlocking tasks; as well as providing useful feedback for the next mapper.  

### Stats tab  

This tab contains statistics about the project. It is divided into two sections, a detailed list of the activity (formerly its own tab in the Tasking Manager 2.0) and summary section.

The summary contains a list of mappers who have completed at least one task within the project - to see which tasks they have completed, you can *hover your mouse cursor* over a username, and the tasks they have completed will become the only ones visible (**use this to locate the tasks you have previously completed**).  

Once you have located the task by hovering your mouse over the user name, you may click on the task square to see the comments that have been left by mappers and validators for the task, which is a useful way of obtaining feedback from validators.  


### Map Tab  

Click when you are ready to start mapping. You may choose your task to work on by selecting it from the map, or by clicking on the "Take a Task at random" option.  


### Selecting a task to map  

![TM task selection][]

Having selected your task you will be able to see if there is any history for this task, such as a mapper starting to map, but realizing they do not have time to complete the task.  

Clicking on the **Start Mapping** button locks the task so that no other mapper can select it until it is released again, and starts a 2 hour (120 minute) countdown timer, at the end of which time the task is automatically released. It is good practice to check on your countdown timer on a regular basis - it is easy to become engrossed in your mapping and not realise your task has been released, and has now been selected by another mapper who has started mapping it too. This can lead to conflicts and problems.  


### Editing choices

Different options for editing are presented to you as soon as you lock a task.

#### Edit with JOSM  

Start JOSM before using this link and it will automatically load the existing OSM data into JOSM.  

>  1. 'Enable remote control' needs to be ticked - found under **Edit / Preferences / Remote Control**
>  2. If you have previously installed the plug-in 'continuosDownload' it is best to disable it (untick 'Download OSM Data continuously' under the **File** menu in JOSM).  
>  3. If JOSM does not load the imagary automatically as well, it can normally be found under the **Imagery** menu. [More info on imagery here ](/en/josm/more-about-josm/#add-imagery)  


#### iD editor  

Select this to automatically start a new tab or window of your web browser, with existing OSM data loaded. The Internet Explorer web browser does not currently support iD and it will load Potlatch 2 instead. Your original tab or window with the Task Manager will still be present.  


#### Potlatch 2  

The editor will load in a new window or tab. Potlatch will not automatically display the task bounding box, but you can do so by following this procedure:  

1. In the Tasking Manager, select a task and click Start Mapping to lock it  
2. In the Tasking Manager, select Edit with JOSM (if a window appears saying "JOSM remote control did not respond..." just click OK).  
3. Below the Edit with JOSM button, text will say "Tip: Download the following .gpx file...". Download the .gpx file, and note where it is saved.  
4. In the Tasking Manager, change from Edit with JOSM to Edit with Potlatch 2. Potlatch should open in a new tab.  
5. In Potlatch, select Background, then Vector File...  
6. In the Load Vector File window, at the bottom next to File, click Open, and navigate to the .gpx file you just downloaded  
7. In the Load Vector File window, make sure the box is checked in the Show column for the .gpx file, then close the window  
8. Potlatch should now display the boundary as a square (probably cyan). Note that Potlatch will still load data outside the boundary.  


#### Field Papers  

For use only when you are involved in a project where a local mapper has carried out a ground survey and marked a printed map with information such as road names. This map can be rescanned & used as a background image for a remote or local mapper to read the information & update the OpenStreeetMap data [Field papers section of LearnOSM](/en/mobile-mapping/field-papers/).  


### Splitting a task square

Having selected your task and inspected it with the imagery in place, you may realise that there is far too much detail required for mapping. An example of this may be tracing buildings in dense urban areas, or locating small villages in large areas. As guidance, where it isn't possible for one person to complete within the 2 hour time limit you can often split the task into 4 smaller areas. *Use with caution* - if/when task squares are split too small it is difficult to judge what type of highway is involved, and to identify other features.  

> Be aware that other useful comments about the work previously completed will no longer be available.


### Unlocking a Task before it is complete

If you start working on a task, but cannot complete it for some reason, it is best practice to leave a comment against the task. Simply detail what remains and choose **Stop Mapping**. Make sure your comments are relevant and aimed to help out the next mapper.  

For example:  

    Almost complete, small village top left 
    in the task square to be traced though


### Finishing a Task

It is very difficult to be completely certain that you have completed a task - however it is acceptable to mark the task as complete if you are fairly sure - the contents will be checked by another mapper when validating, and any small additions can be made then.  

For the process to work most effectively, mappers need to mark tasks as "Mapped" rather than leaving them for several other 'not sure' mappers to spend time also checking them.  

When you have finished editing and think that the task is complete, save any remaining edits with your editing programme, then return to the Tasking Manager.  

+ Add comments to the box detailing what you achieved and more importantly, what you are not certain of. For example; "Complete as far as I can see, but there is cloud covering the top right corner of the task square & I cannot see to trace this area".  
+ Click on the "Mark as Mapped" button, and your work is ready for review.  

### Marking a Task as Bad Imagery

You will sometimes select a task that can not be mapped because the imagery is low resolution or has cloud cover. Just close that task in your editor and use the "Mark as Bad Imagery" button to record that the task can not be mapped due to poor imagery.


### Sending a message from the comment box

When leaving a comment against a task, you can have the comment sent as a message to a named mapper. Much like Twitter, simply use an @ followed by the username. This will send a message to the user containing the comments from this box, plus a link to the task that the comments box relates to.  

For example:  

    @Tallguy nice work tracing the building  
    details here. You missed a small group  
    of houses on the upper left of the task square,  
    I added a few in, but some still remain.  

This is particularly useful when validating or adding on another's previous work - you can provide feedback, thanks or more.  

+ You may wish to provide a link to a site which may help the mapper, such as <http://learnosm.org/en/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ Be aware that many people from around the world will be participating, so prefer simple, clear language. If you come across comments in other languages, tools such as Google Translate are reasonably effective.


### Referring to a particular task when sending an email  

If you need to send a message, such as an email or an IRC message, and you are querying something concerning a particular task within a project (perhaps you need help identifying something from the satellite imagery):  

1. Click on the task square concerned  
2. Click on the address bar in your web browser, which should show something similar to 'http://tasks.hotosm.org/project/713#task/259'  
3. Highlight with the mouse all of the text in the address bar, or use the shortcut keys **Ctrl+A** to select all the text, then use shortcut keys **Ctrl+C** to copy the text  
4. In your email, IRC message, or other message,  
    - either, mouse right click & paste,  
    - or shortcut keys **Ctrl+V**, to paste the link into the message. 


### Getting live help 

From the main page of the Tasking Manager:  
1. Click on **OSM HOT IRC Channel #hot**  
2. Enter a username (your OSM username?), or use the preset characters  
3. At the bottom of the dropdown list select **hot**  

- To the right of the screen is a list of users that are online now.  
- Type your message in the box at the bottom left of the screen (this is sometimes temporarily obscured by other text, but this will disappear as you select the box.  
- To direct a message to a particular individual, include their username from the list on the right within your message. Type, then use the return key to submit your comment. The system is 'live' so wait for an answer - your username will often be used in the reply to show you the comment is directed to you. You will normally receive a reply within a few seconds, so please wait.  
- An alternative simple system can be found at [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Further info on using IRC with OpenStreetMap may be found at [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Alternatively use an IRC client of your choice (Server=irc.oftc.net, and channel=#hot)  


### Editing hints and tips  

By now you have a good understanding of what the Tasking Manager is, and some of the various functions it supports. Unlike normal editing, this tool is often used for time critical projects with many participants - this may be a little bit different to what you are used to.  

Some general advice to heed when working in this tool:  

* Avoid mapping far outside of your task square - other mappers may be working in that area, resulting in duplicated efforts. It's OK to map objects such as buildings overlapping a boundary, but avoid going much further - upload immediately after mapping something at the border.  
* Extend roads, streams, or other features slightly over the boundaries - this lets the next mapper pick up where you left off, but upload as soon as you finish editing it.  
* If you are in doubt about what a particular feature is, use the comment section to ask questions or check the wiki.  
* If you make a serious mistake - for example, deleting a major feature or relation - use IRC or the comment box to ask other mappers to help in reverting this for you. Try to include the changeset, or a description of what happened. Being a collaborative task, many other mappers are here to help - it's important to remember everyone makes mistakes sometimes.  
* Don't hesitate to ask for feedback - mappers validating your work can be terse or to the point, but if they know it's OK to engage in a dialog with you, the outcome is often a lot better for all involved. It can be difficult to communicate in another language, and it's easy to appear abrupt when you have to translate as well as pass a message in a language you are not fluent in.  
* You must not validate your own work - a second pair of eyes will always lead to better quality mapping.  
* Don't worry if other mappers are terse when validating your work - like you, they just want to ensure all of the data is mapped accurately. Feedback is invariably about the remaining work, not criticism of your efforts to date.  


## Validation

Validation is the process of a second mapper reviewing the mapping of the initial mapper of a Project Task. It is designed to ensure complete, quality data and provide thanks, feedback and encouragment to mappers.

Validation starts much the same way as mapping does, a volunteer finds a project they would like to work on, reads the instructions tab to be sure they understand what is called for and how it is expected to be mapped, but instead of selecting the mapping tab for the project, they select the "Validate" tab.

![TM select for validation][]

The validator can select a task by clicking on an individual task square, clicking "Select a random Task", select by user or draw a polygon to select multiple, connected tasks.

Unlike mappers, validators can select multiple tasks to perform validation on a larger scale than just one task.

### Select By User

A list of mappers who have marked a task as done is presented. Hovering over anyone in the list will highlight the tasks they have marked as completed. The list also prensents three important pices of information about the mapper, their experience level, the number of days since they first started mapping using the Tasking Manager and the number of days since they last received feedback via validation. This allows the validator to specifically target new mappers, experienced mappers or mappers who have not had any feedback for an extended period of time.

Clicking on the "Start Validating" button will lock all the tasks completed by that mapper and allow the validator to open them in their editor of choice.

![TM multi selection][]

Once in the editor of their choice, the validator will have to manually download the OSM data for task areas selected. This is to prevent downloading all of the OSM data between the selected tasks.

### Finalizing Validation

Once the validator has finished the validation process either for one task or multiple tasks, they should return to the Tasking Manager and select one of the three choices that reflect the mapping of the task:

- Stop Validating - If you could not complete the validation process but must stop validating.
- Mark (all) as Valid - If the mapping is complete and accurate
- Mark (all) as Invalid - If the mapping is not complete or inaccurate.

For the last two choices the validator can and should leave a friendly, encouraging comment addressed to the mapper(s) involved and provide thanks for their contributions and feedback on their mapping. Please be considerate before marking a task as invalid. If just a few bits are missing add them yourself, explain what was missing in your comment but nevertheless mark the task as valid. New mappers will consider their completed task marked as invalid as a fairly harsh comment.




[TM overview]: /images/coordination/tasking_manager_overview.png
[TM Quick Start 1]: /images/coordination/tasking_manager_qs1.png
[TM Quick Start 2]: /images/coordination/tasking_manager_qs2.png
[TM Quick Start 3]: /images/coordination/tasking_manager_qs3.png
[TM Quick Start 4]: /images/coordination/tasking_manager_qs4.png
[TM Quick Start 5]: /images/coordination/tasking_manager_qs5.png
[TM Quick Start 6]: /images/coordination/tasking_manager_qs6.png
[TM Quick Start 7]: /images/coordination/tasking_manager_qs7.png
[TM Quick Start 8]: /images/coordination/tasking_manager_qs8.png
[TM login 1]: /images/coordination/tasking_manager_login1.png
[TM login 2]: /images/coordination/tasking_manager_login2.png
[TM login 3]: /images/coordination/tasking_manager_login3.png
[Tasking Manager Username_list]: /images/coordination/tasking_manager_image02.png
[TM contribute]: /images/coordination/tasking_manager_contribute.png
[TM project list]: /images/coordination/tasking_manager_project_list.png
[TM project map]: /images/coordination/tasking_manager_project_map.png
[TM project description]: /images/coordination/tasking_manager_project_description.png
[TM task selection]: /images/coordination/tasking_manager_task_selection.png
[TM select for validation]: /images/coordination/tasking_manager_validation_selection.png
[TM multi selection]: /images/coordination/tasking_manager_multi_selection.png

