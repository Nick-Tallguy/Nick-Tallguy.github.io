---
layout: doc
title: JOSM ဆော့လ်ဖ်ဝဲလ်မှ Building Tools နှင့် Utilsplugin2 plugins တို့ကိုလေ့လာခြင်း
permalink: /my/josm/josm-more-plugins/
lang: my
category: josm
---

JOSM ဆော့လ်ဖ်ဝဲလ်မှ Building Tools နှင့် Utilsplugin2 plugins တို့ကိုလေ့လာခြင်း
============


ယခုသင်ခန်းစာတွင် JOSM ဆော့လ်ဖ်ဝဲလ်၏လုပ်ဆောင်မှုစွမ်းရည်ကိုဖြည့်စွက်တိုးမြှင့်ပေးသော plugins နှစ်မျိုး၏လုပ်ဆောင်မှုများကို အသေးစိတ်လေ့လာကြမည်ဖြစ်သည်။ ယင်းတို့မှာ**buildings_tools** နှင့် **utilsplugin2** တို့ဖြစ်ကြသည်။  

Buildings Tools plugin အကြောင်း
--------------------------

Buildings Tools plugin ကို JOSM ဆော့လ်ဖ်ဝဲလ်အတွင်း မထည့်သွင်းရသေးပါက လုပ်ဆောင်ရမည့်ညွှန်ကြားချက်များကို [JOSM ဆော့လ်ဖ်ဝဲလ်သို့ ထပ်ပေါင်းဖြည့်စွက်နိုင်သည်များ (JOSM Plugins)](/my/josm/josm-plugins) ဆိုသည့်သင်ခန်းစာတွင် လေ့လာကြည့်နိုင်သည်။  

![Buildings tools plugin][]

Buildings Tools plugin သည် ဒီဂျစ်တယ်နည်းပညာဖြင့် အဆောက်အဦများရေးဆွဲရာတွင် များစွာအသုံးဝင်သည်။ ထောင့်မှန်စတုဂံပုံရှိသောအဆောက်အဦတစ်ခု၏အနားတစ်ဖက်ကို ပုံဖော်ရေးဆွဲရုံမျှဖြင့် ပုံသဏ္ဍာန်ကိုအလွယ်တကူချဲ့ကားယူနိုင်စေရန် ဖန်တီးပေးထားသည်။ အဆောက်အဦများစွာကိုရေးဆွဲရမည်ဆိုပါက ယင်း plugin ကိုအသုံးပြုခြင်းသည် အချိန်ကုန်သက်သာစေသော နည်းလမ်းတစ်ခုဖြစ်၏။  

ယင်း plugin ကို JOSM ဆော့လ်ဖ်ဝဲလ်အတွင်းထည့်သွင်းပြီးပါက ဆော့လ်ဖ်ဝဲလ်မျက်နှာပြင်၏ ဘယ်ဘက်နားတွင်ဖော်ပြပါပုံအတိုင်းမြင်တွေ့ရမည်ဖြစ်သည်။ ![Buildings tools button][]{: height="29px"}

JOSM ဆော့လ်ဖ်ဝဲလ်ကိုဖွင့်ပြီး သင်ပုံဖော်ရေးဆွဲလိုသော အဆောက်အဦရှိရာနေရာကိုရယူပါ။  

### Rectangular Buildings

* building tool plugin ကိုရွေးချယ်ပြီး မြေပုံပေါ်တွင်မျဉ်းတစ်ကြောင်းရေးဆွဲရန်အတွက် ကလစ်နှစ်ကြိမ်နှိပ်ပါ။  

![Draw edge][]

* ထို့နောက်ထောင့်မှန်စတုဂံပုံပေါ်လာသည်အထိ mouse ကိုဆွဲပြီးကလစ်တစ်ကြိမ်ထပ်နှိပ်ပါ။  

![Extend building][]

* ထိုနည်းအတိုင်းရေးဆွဲခြင်းသည် ထောင့်မှန် စတုဂံပုံတစ်ခုအလွယ်တကူပေါ်ထွက်လာရုံမျှမကဘဲ ပုံသဏ္ဍာန်အညွှန်းတွင်ပါ **အဆောက်အဦဖြစ်ကြောင်း (building=yes)** ကို အလိုအလျောက်ဖော်ပြပေးမည်ဖြစ်သည်။  

### Circular Buildings

* In "More tools"->"Draw building modes" select "Set building shape to circle" or use the shortcut ALT+Z (when switchitng back to drawing rectangular buildings use ALT+R). Then draw the diameter of the building.

![Round building][]

### ဖွဲ့စည်းပုံရှုပ်ထွေးသော အဆောက်အဦများ

တစ်ခုပေါ်တစ်ခုထပ်နေသော အဆောက်အဦများကိုလည်း တစ်ကြိမ်တည်းရေးဆွဲကာ အချင်းချင်းပေါင်းစပ်ပေးခြင်းဖြင့် ဖွဲ့စည်းပုံရှုပ်ထွေးသောအဆောက်အဦများကို ဖန်တီးရေးဆွဲနိုင်သည်။  

* ထပ်နေသောအဆောက်အဦနှစ်ခုကိုရေးဆွဲပါ။ ပုံတွင်ပြထားသည့်အတိုင်း အင်္ဂလိပ်အက္ခရာ “L” ပုံသဏ္ဍာန်ဖြစ်ပေါ်လာမည်။  
* အဆောက်အဦနှစ်ခုလုံးကို ရွေးချယ်လိုက်ပါ။ (ကွန်ပျူတာကီးဘုတ်မှ SHIFT ခလုတ်ကိုဖိလျက်)  
* Tools menu ရှိ Join overlapping Areas ကိုရွေးချယ်၍သော်လည်းကောင်း သို့မဟုတ် ကွန်ပျူတာကီးဘုတ်မှ SHIFT နှင့် J ခလုတ်တို့ကိုတွဲနှိပ်၍သော်လည်းကောင်း အဆောက်အဦများကိုပေါင်းစပ်ပေးနိုင်သည်။  

![Merge buildings][]

### အပြင်အဆင်များကိုချိန်ညှိခြင်း (Edit Settings)

Plugin တွင် မူရင်းပါအပြင်အဆင်များကိုလည်း မိမိနှစ်သက်သလိုပြောင်းလဲသတ်မှတ်နိုင်သည်။  

* Go to "More tools"->"Draw buildings modes"->Set buildings size.

* အရွယ်အစားတူသောအဆောက်အဦများကို ဖန်တီးရေးဆွဲလိုပါက အဆောက်အဦတို့၏ အလျား၊ အနံ တို့ကိုသီးသန့်ပိုင်းခြားသတ်မှတ်ပေးထားနိုင်သည်။ ဥပမာ။ ၆ x ၁၀ မီတာ (အကွာအဝေးအတိုင်းအတာကို မီတာဖြင့်သာဖော်ပြပါမည်။)  

![Set buildings size dialog][]

* အတိုင်းအတာသတ်မှတ်ပေးထားခြင်းဖြင့် အဆောက်အဦရေးဆွဲရာတွင်ကလစ်နှစ်ကြိမ်နှိပ်ရုံမျှသာ လိုအပ်မည်ဖြစ်သည်။  

အဆောက်အဦအားလုံးပေါ်သို့ အလိုအလျောက်သက်ရောက်စေလိုသောထပ်ဆောင်းအညွှန်းများ ထည့်သွင်းလိုပါက Advanced ခလုတ်ကိုနှိပ်ပါ။ ဥပမာ ... သင်ရေးဆွဲသောအဆောက်အဦများသည် လမ်းတစ်လမ်းအတွင်း၌သာ တည်ရှိပါက လမ်းတည်နေရာအညွှန်းကိုအလိုအလျောက်သက်ရောက်စေရန် အသုံးပြုနိုင်သည်။  

![Buildings advanced][]


Utilsplugin2 အကြောင်း
-------------

* Utilsplugin2 ကို JOSM ဆော့လ်ဖ်ဝဲလ်အတွင်း မထည့်သွင်းရသေးပါက လုပ်ဆောင်ရမည့် ညွှန်ကြားချက်များကို [JOSM ဆော့လ်ဖ်ဝဲလ်သို့ ထပ်ပေါင်းဖြည့်စွက်နိုင်သည်များ[JOSM Plugins](/en/josm/josm-plugins) သင်ခန်းစာတွင် လေ့လာကြည့်နိုင်သည်။  

![Utilsplugin2 plugin][]

Utilsplugin2 ကိုထည့်သွင်းပြီးနောက် JOSM ဆော့လ်ဖ်ဝဲလ်ကိုပိတ်၍ပြန်လည်ဖွင့်လိုက်ပါ။ menu ဘားတန်းတွင် "More Tools" အမည်ဖြင့် menu အသစ်တစ်ခုတွေ့မြင်ရပါမည်။  

![More tools menu][]

အလွှာသစ်တစ်ခုကိုဖန်တီးပြီး ပုံဆွဲကိရိယာအသစ်များကို စမ်းသုံးကြည့်ပါ။ အသုံးဝင်သောကိရိယာအသစ်များကိုအောက်ပါအတိုင်း ဖော်ပြပေးထားပါသည်။  

၁။ **ဖြတ်မှတ်များတွင် node ထည့်သွင်းခြင်း** ။ ။ လမ်းကြောင်းများပေါ်ရှိဖြတ်မှတ်များတွင် nodes ဖြည့်သွင်းရာ၌ အထောက်အပံ့ပေးသည်။ လမ်းဆုံများတွင် ဖြတ်မှတ် အမှတ်အသားထည့်သွင်းပေးခြင်းက အလေ့အကျင့်ကောင်းတစ်ခုပင်ဖြစ်သည်။  

    ![Nodes interesection][]

2. **Paste Tags from Previous Selection:**  This function makes copying tags easier.  If you want to create many objects with the same tags, first draw the objects.  Then add the tags to one object.  Click on another object and press Shift + R to copy the tags from the previously selected object.  You can do this for all objects that you want to tag.  Remember that the tags will be copied from the previously selected object, so if you click on an untagged object and then another untagged object, you will not be able to copy any tags.  

    ![Copy tags][]

၃။ **အညွှန်းရင်းမြစ်ထည့်သွင်းခြင်း** ။ ။ အညွှန်းရင်းမြစ်ထည့်သွင်းရာတွင် အသုံးပြုသည်။ နောက်ဆုံးအကြိမ်သတ်မှတ်ဖော်ပြချက်ရင်းမြစ်ကိုမှတ်သားထားပြီး အရာဝတ္ထု၏အညွှန်းရင်းမြစ်အဖြစ်ထည့်သွင်းပေး၏။ ဖော်ပြချက်ရင်းမြစ်ကို ကလစ်တစ်ချက်နှိပ်ယုံဖြင့်ထည့်သွင်းပေးနိုင်စေသည်။  

၄။ **အကျယ်အဝန်းပြန်လည်သတ်မှတ်ခြင်း** ။ ။ ဖွဲ့စည်းပုံအားနည်းသောအရာဝတ္ထုကို ပြန်လည်ရေးဆွဲရာတွင် ၎င်းနှင့်သက်ဆိုင်သော သမိုင်းအချက်အလက်၊ ရုပ်လက္ခဏာနှင့် ID နံပါတ်များကို သိမ်းဆည်းပေးလိုပါကအသုံးဝင်သောလုပ်ဆောင်ချက်ဖြစ်၏။ ဥပမာ ... အရာဝတ္ထုတစ်ခုကို ပုံပန်းသဏ္ဍာန်ပြောင်းလဲရေးဆွဲအစားထိုးရာ၌ အခြားသောအချက်အလက်များကိုမထိခိုက်စေဘဲ ပြောင်းလဲရန်ဖြစ်သည်။ အသစ်ရေးဆွဲထားသောအရာနှင့်မူလရှိပြီးသောအရာတို့ကို ရွေးချယ်ထားပြီး “Replace Geometry” ကိုရွေးပေးပါ။  

    ![Replace geometry][]


### ပိုမိုများပြားလှသောရွေးချယ်မှုဆိုင်ရာကိရိယာများ (More Selection Tools)

**Utilsplugin2** သည်ရွေးချယ်မှုနှင့်သက်ဆိုင်သော "Selection" menu တွင်ပိုမိုများပြားလှသောကိရိယာများကိုထည့်သွင်းပေးထားသည်။ အမျိုးမျိုးသောရွေးချယ်ကိရိယာများကို စမ်းသပ်ကြည့်နိုင်သည်။  

![Selection menu][]

ကျွန်ုပ်တို့၏ကြိုက်နှစ်သက်ခြင်းခံရသော ရွေးချယ်မှုကိရိယာများထဲမှတစ်ခုဖြစ်သည့် **Unselect Nodes** ။ ။ ၎င်းသည်အမှတ်များ nodes များအားလုံးကို ရွေးချယ်မိခြင်းမှရှောင်ရှားရန်အတွက် အသုံးပြုသည်။ မျဉ်းကြောင်းများနှင့်ပုံသဏ္ဍာန်များအတွင်း၌ ပါဝင်သောအမှတ်များမပါဝင်စေဘဲ အခြားအရာများကိုရွေးချယ်ရန် အကွက်တစ်ခုရေးဆွဲရာတွင် အသုံးဝင်သော လုပ်ဆောင်ချက်တစ်ခုဖြစ်သည်။  

![Unselect nodes][]

သင်ကံကောင်းပါစေ။  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png
[Round building]: /images/josm/buildings_tools-round.png

