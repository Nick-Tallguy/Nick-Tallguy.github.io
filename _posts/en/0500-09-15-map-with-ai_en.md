---
layout: doc
title: AI-assisted mapping
permalink: /en/coordination/map-with-ai/
lang: en
category: coordination
---

# Mapping using Artificial Intelligence

## Introduction

“Map With AI” facilitates mappers with Artificial Intelligence (AI)-generated features through the RapiD Editor. Thus it helps achieve faster mapping speed and higher data quality.  
However, while AI is efficient and continues to improve, human mappers are essential to review and manually input anything missed. 
Every single road from the AI output will be added only after human validation. Mappers must manually select a road to OSM from the RapiD layer so every road will receive human attention. 

## How to use Map with AI in iD Editor

RapiD Editor is an enhancement of the iD Editor. It helps mappers map more efficiently by providing roads auto-detected from satellite imagery and includes additional data integrity checks to ensure the quality of new map edits. 
To use the in-browser RapiD editor choose it from the Editor popup menu in the Tasking Manager before selecting to map a task. This will open up a new tab in your browser.  
RapiD suggests features, allowing the mapper to decide which features to add to the map. Suggested features are displayed with a magenta color to differentiate them from other map features.

![RapiD][]

1. Open a task in the Tasking Manager
1. You can recognize suggested features by a magenta color. This differentiates them from other map features
1. You can select a suggested feature, then click “Use This Feature” to add it to the map
1. Or you can select a suggested feature, then click “Ignore This Feature” to remove it from the Map With AI layer. Attention: it will be permanently lost
1. Then proceed as with any other newly-digitized feature: the geometry and tags can be modified and then uploaded to OSM.

## How to use Map with AI in JOSM

Most AI projects on the Tasking Manager will be set up to use RapiD. If you want to use them with JOSM you have to go the extra mile to access the AI data

Please note that you must have ***Expert Mode*** checked in JOSM preferences.
First you have to download the plugin "mapwithai". For instructions how to do that see Help/Preferences/Plugins – JOSM (openstreetmap.de) 

Thenext steps are:
1. Load the OpenStreetMap data in JOSM as usual, e.g. from the Tasking Manager
1. You must load the AI data separately using the menu entry Data -> MapWithAI -> MapWithAI: Download Data (keyboard shortcut CTRL-R). This will load the AI data to a new layer. You will be asked which layer serves as reference for the download area, typically you should select your current data layer. The new AI layer will automatically be selected as the current layer.
![JOSM-loadAI][]
1. Select one of the objects on this layer and **compare it with the aerial imagery to determine whether it is really that kind of object and whether it has the proper geometry**. Make any adjustments as necessary.
1. If the objects looks proper then add it using Data -> MapWithAI -> MapWithAI: Add selected data (keyboard shortcut SHIFT-A)
![JOSM-addAI][]
1.  Then proceed as with any other newly-digitized feature: the geometry and tags can be modified and then uploaded to OSM. Only features that are accepted by a mapper are uploaded to OSM 


### Further information
- [project homepage](https://www.mapwith.ai/)
- [OSM wiki on RapiD](https://wiki.openstreetmap.org/wiki/RapiD)
- [FAQ on AI mapping](https://github.com/facebookmicrosites/Open-Mapping-At-Facebook/wiki/FAQ)
- [Detailed documentation on AI mapping](https://github.com/facebookmicrosites/Open-Mapping-At-Facebook/wiki)
- HOT Training Webinar: Advanced iD Editing on [YouTube](https://www.youtube.com/watch?v=0tkco5pRyeY)


[RapiD]: /images/coordination/rapid.png
[JOSM-loadAI]: /images/coordination/josm-load-ai.png
[JOSM-addAI]: /images/coordination/josm-add-ai.png
