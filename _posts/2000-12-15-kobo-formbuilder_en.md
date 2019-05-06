---
layout: doc
title: Kobo Form Builder - KoBoToolbox - surveys with a mobile phone
permalink: /en/case-studies/kobo-formbuilder-1/
lang: en
category: case-studies
---

Kobo Form Builder - KoBoToolbox - surveys with a mobile phone
============

<!-- > This guide may be downloaded as [kobo-form_en.odt](/files/kobo-form_en.odt) or [kobo-form_en.pdf](/files/kobo-form_en.pdf)  

This guide is based upon information obtained from <http://www.kobotoolbox.org/> - the site at this location contains easy to use guides on creating forms, and includes a free to use database of forms that have been created by other users. 


You will need to obtain your own login to a Kobo server for the purpose of obtaining survey data. This guide is based upon use of the server at <http://www.kobotoolbox.org/> are free to use this training server in order to learn & practice their skills, but do please ensure that any surveys you create for 'real use' are saved elsewhere as this database is used for training and the data it contains is frequently altered by users.

![kobo-login][]{: width="700px"}  

Getting started - creating a survey based on a simple drinking water survey
----------

Visit <https://kobo.msf.org/> and login as \********* <!--**missingmaps**--> with the password \******** <!--**m0ndayk**-->.  
![kobo-1][]{: width="700px"}  

Create a new project by clicking on ![kobo-new][]{: height="20px"}, and  ![kobo-new-1][]{: height="20px"}  
![kobo-new-2][]{: width="700px"}  

Give your form a name and click ![kobo-create][]{: height="20px"}  

Saving your survey
------------------
At regular intervals whilst creating your form, click on the ![kobo-save][]{: height="20px"} icon - you will briefly see a "succesfully updated" message. As long as your form has not been 'deployed' you can continue to make changes until you are satisfied with the result. When making changes to an existing form which may have been 'deployed' the preferred option is to clone the existing form in the list and use a save as function i.e. **Nick-Tallguy-demo** should be saved as **Nick-Tallguy-demo-v1** & then edited. 

Statement to prompt the surveyor (enumerator)
--------------------------------------------

Click on ![kobo-plus][]{: height="20px"} and insert your first question or statement. I've chosen to have displayed a message which may help the person carrying out the survey to explain their presence. 
![kobo-q1][]{: width="700px"}  

Type your text then click ![kobo-add-question][]{: height="20px"} and select ![abc-text][]{: height="20px"} from the top of the third column.  
![kobo-q1-2][]{: width="700px"}  

GPS location in the survey
---------------------------

![kobo-plus][]{: height="20px"}, ![kobo-add-question][]{: height="20px"} and ![kobo-gps][]{: height="20px"}.  
When the survey is taking place, the surveyor (enumerator) needs to be standing as close as possible to the feature being surveyed. The internal gps of the phone will obtain the location and will display on the screen the accuracy. The enumerator should be instructed to wait until the phone finishes this.
![kobo-gps-scrn-1][]{: width="700px"}  

### GPS - The enumerator will see

The enumerator will see the following screens;  
   **A** = Press the **Record Location** button and the internal gps will start working,  
   **B** = Internal gps is working, but has not finished. Stand still and wait!  
   **C** = Internal gps has a 'fix' on location. Enumerator may now swipe the screen to reach the next question.  

![kobo-gps-scrn][]{: width="700px"}  

> If the pump or well is within a building the enumerator may need to stand outside the building so that the gps is able to work. 

How many?
---------

![kobo-plus][]{: height="20px"},add the text "How many other pumps or wells are here?". ![kobo-add-question][]{: height="20px"}, click on ![kobo-123][]{: height="20px"}


Simple questions with only one answer from a selection
------------------------------------------------------

![kobo-plus][]{: height="20px"},add the text, "Is the water held in a storage tank somewhere?". ![kobo-add-question][]{: height="20px"}, click on ![kobo-select-one][]{: height="20px"}  
![kobo-option-1-2][]{: width="700px"}  
Change the text **Option 1** to **Yes** and change **Option 2** to **No**.  

Skip logic explained
--------------------

*The next question depends on the answer to the previous one*

> This question about chlorination of the water in the tank will only be displayed to the enumerator if the previous answer was **Yes** (If there is no water tank you don't need to ask this question and it is therefore not displayed).  

![kobo-plus][]{: height="20px"}, add text, "Is the water in the tank chlorinated?". ![kobo-add-question][]{: height="20px"}, click ![kobo-select-one][]{: height="20px"} and change the text **Option 1** to **Yes** and change **Option 2** to **No**. Click on the ![kobo-gearwheel][]{: height="20px"} and then **Skip Logic** to the left of the screen.  
![kobo-skip][]{: width="700px"}  

Click **+ Add a condition** and use the drop down menu **Select question from list** to select **Is the water held in a storage tank somewhere?**, leave the **=** symbol and leave the last field as **Yes**.  
![kobo-skip-1][]{: width="700px"}  

Previewing your form
--------------------
At any time in the process you can preview how the form will appear for your enumerator by clicking on the ![kobo-preview][]{: height="20px"} icon displayed in the header bar.

Changing the order of the questions
-----------------------------------
The Kobo form builder screen allows you to use drag and drop to move questions up or down the list. 

Kobo library
------------
Frequently asked questions can be stored in a library for easy selection when creating new forms. Click ![kobo-search-library][]{: height="20px"} to see the list of previously saved questions and blocks of questions.  
![kobo-library][]{: width="400px"}  

Deploying your survey
---------------------
If you have followed this guide you will now have a very simple survey with the majority of types of survey questions included. In order to 'deploy' this survey so that it can be downloaded onto your enumerators mobile phones;

Click on the X top right on your screen,  
![X-save-search][]{: width="100px"}  
![kobo-deploy][]{: width="400px"}  
click **Deploy**  
![kobo-deployed][]{: width="400px"}  

Using the survey on an Android mobile phone
-------------------------------------------

From the google play store install **KoBoCollect** or **ODK collect** - they are interchangeable. 

![KoBoCollect-setup][]{: width="700px"}  

2.  The settings menu on Android devices varies - it may be the 3 dots shown top right on screenshot **A**, or it may be a 'soft key' at the bottom of the screen. Go to **General settings** and click **SERVER SETTINGS** and **URL**. Enter the server settings as shown in screenshot **B**. No password or other settings are required.  

3.  Back at Main Menu **A**, select **Get Blank Form**, and after a few seconds a list of 'deployed' forms available will be displayed - screenshot **C**.  

4.  It is probable that all or most of the available forms will be ticked on your screen. Use **Toggle All** once or twice to remove all of the ticks, then select just your form for download and click **Get selected**.  

5.  **D** Success! Click **OK** and investigate your form. You can safely test the survey, save it and then upload it, viewing the results on the website you used to build the form. 

There are many more settings and features of the KoBoToolbox form builder, and of the app used on the phone for carrying out your survey. This guide has given you enough information to create and carry out a survey - as you have probably realised it is better to have several different surveys available for your enumerators. If you are taking the trouble to train them and send them to an area, it is probably in your interest to obtain other data at the same time - are there other health facilities in the area, are there toilets affecting the water source. You are an expert in your field and will create surveys upon your needs and circumstances. This guide should have provided enough information to start and have carried out succesful surveys. 

Although you can continue to use the MSF training server, it is strongly recommended that you now work on your 'active' server. If you do not have details, please contact the Manson Unit, who will also be able to help with more information if it is needed. 
<!--![kobo-down-arrow][]{: height="20px"} then on -->


[kobo-login]: /images/case-studies/kobo-login.png
[kobo-new]: /images/case-studies/kobo-new.png
[kobo-new-1]: /images/case-studies/kobo-new-1.png
[kobo-new-2]: /images/case-studies/kobo-new-2.png
[kobo-create]: /images/case-studies/kobo-create.png
[kobo-plus]: /images/case-studies/kobo-plus.png
[kobo-q1]: /images/case-studies/kobo-q1.png
[kobo-add-question]: /images/case-studies/kobo-add-question.png
[abc-text]: /images/case-studies/abc-text.png
[kobo-gps]: /images/case-studies/kobo-gps.png
[kobo-gps-scrn]: /images/case-studies/kobo-gps-scrn.png
[kobo-123]: /images/case-studies/kobo-123.png
[kobo-select-one]: /images/case-studies/kobo-select-one.png
[kobo-option-1-2]: /images/case-studies/kobo-option-1-2.png
[kobo-down-arrow]: /images/case-studies/kobo-down-arrow.png
[kobo-gearwheel]: /images/case-studies/kobo-gearwheel.png
[kobo-skip]: /images/case-studies/kobo-skip.png
[kobo-skip-1]: /images/case-studies/kobo-skip-1.png
[kobo-q1-2]: /images/case-studies/kobo-q1-2.png
[kobo-gps-scrn-1]: /images/case-studies/kobo-gps-scrn-1.png
[kobo-save]: /images/case-studies/kobo-save.png
[kobo-preview]: /images/case-studies/kobo-preview.png
[kobo-search-library]: /images/case-studies/kobo-search-library.png
[kobo-library]: /images/case-studies/kobo-library.png
[X-save-search]: /images/case-studies/X-save-search.png
[kobo-deploy]: /images/case-studies/kobo-deploy.png
[kobo-deployed]: /images/case-studies/kobo-deployed.png
[koBoCollect-setup]: /images/case-studies/KoBoCollect-setup.png
[kobo-1]: /images/case-studies/kobo-1.png
