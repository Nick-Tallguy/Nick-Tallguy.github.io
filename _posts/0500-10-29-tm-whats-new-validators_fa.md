---
layout: doc-rtl
permalink: /fa/coordination/tm-whats-new-for-validators/
lang: fa
title: What is new for Validators in the Tasking Manager 3
category: coordination
تاریخ: ۱۲:۰۰:۰۰ ۲۱-۱۰-۰۵۰۰
---

# در مدیریت وظایف ۳ چه چیز جدید برای اعتباردهنده وجود دارد


## پروفایل کاربری‌تان

مدیر وظایف ۳ دارای تعدادی ویژگی جدید است که به افرادی که اعتباردهی می‌کنند مربوط می‌شود. لطفاْ **اولین فعالیت خود در مدیر وظایف جدید را به بازدید از نمایه کاربری خود** اختصاص دهید، که می‌توانید از منوی پائین کشیدنی تحت نام کاربری OpenStreetMap (OSM) خود در گوشه سمت راست بالا انتخاب کنید.

![profile][]

1. **آدرس ایمیل** - مدیر وظایف هم اکنون می‌تواند هر زمان که کاربری یک پیام را در ویریت وظایف دریافت می‌کند، یک ایمیل بفرستد. این برای افرادی که اعتباردهی را انجام می‌دهند بسیار مهم است. توضیحاتی که در حال تأیید نقشه گذاشته می‌شود خیلی بیشتر از مواردی است که در حال نقشه‌کشی انجام می‌شود. لطفا مطمئن شوید **آدرس ایمیل‌تان** را نیز به نمایه خود اضافه کرده‌اید.

2. **نقش اعتباردهنده** - پروژه‌ها می‌توانند به صورت اختیاری نیاز به اعتباردهنده با تجربه برای اعتباربخشی به پروژه‌های نقشه‌کشی را اعلام کنند. درحالیکه "سطح تجربه نقشه‌کش" به طور خودکار بر اساس بسته‌های تغییر OSM تنظیم می‌شود، در حال حاضر نقش تأییدکننده به صورت دستی تنها توسط مدیران پروژه تنظیم می‌شود. لیست اولیه افراد دارای نقش تأییدکننده ناقص است، لطفاْ با مدیر پروژه تماس بگیرید تا در صورتی که یک اعتباردهنده با تجربه هستید اما نقش تأییدکننده در مدیر وظایف ندارید اسم شما در فهرست کسانی که دارای نقش تأییدکننده هستند اضافه شود. **لطفاْ توجه داشته باشید**: نقش اعتباردهنده در مدیر وظایف گسترده است و از اینرو ما از مدیران پروژه می‌خواهیم این نقش را فقط به اعتباردهنده‌هایی که با کار اعتباربخشی آنها به طور مستقیم آشنایی داریم و دانش دست اول اعتباردهنده مجاز به اعتباردهی هر پروژه در مدیر وظایف دارد اختصاص داده می‌شود.


## فرآیند اعتباردهی

### مرحله ۱ - انتخاب وظیفه

Validating can only be done by clicking the "Validation" tab on a Project page. Once you have selected the "Validation" tab you have three main options for how to select tasks to validate.

![selection][]

1. **Select an individual task** to validate - This is exactly the same process that exists in the current Tasking Manager, you click on a task or use the "Validate a Random Task" button and then click "Start Validating" and launch your editor.

2. **Select by area** - This allows you to draw one polygon on the task map and it will select all of the tasks that are available for validation. You can then click "Start Validating" and it will lock them all for validation.

3. **Select by user** - A list of all the users who have contributed to the project is on the left side of the page along with some information about them. You can sort by any of column headings:

- Level - Based on the number of OSM changesets
- Registered - How long they have been using the Tasking Manager.
- Last Validation - The last time they had a task validated

Using your mouse to hover over the "Start" link will highlight the tasks that user has completed. Clicking on the "Start" link will lock them all for validation.

### مرحله ۲ - اعتباربخشی وطایف متعدد

Selecting one single task and launching your editor of choice will behave the same as in the previous version of the Tasking Manager, the real difference will be when you select multiple tasks and launch your editor.

There is less of a change in the iD editor, the big difference being that instead of seeing just one task outline, you will see multiple task outlines. Because iD only downloads data for areas you zoom in close for and accepts GPX outlines there is not much difference in your workflow, just more areas locked in the Tasking Manager and more area to review mapping in. 

Using JOSM however is now slightly different. When launching JOSM two OSM data layers will be created, one will be non-uploadable and it will have the outlines of the tasks that need validation and one will be a blank, editable OSM data layer. **No data will be downloaded from OSM**.

![multiple][]

You will use the with the task outlines as a guide for downloading OSM data to the editable layer and proceed to validate as you normally would.

When you are done validating, you have the three standard options, Mark all Valid, Mark all Invalid, or Stop Validating. When multiple tasks are checked out for validation, the same option must be chosen for all the tasks checked out. You can not, in the same workflow, mark some as valid and mark others as invalid.

If you need to mark tasks with different statuses after reviewing them, please check them out individually to mark them accordingly.


## سایر موارد مرتبط به اعتباربخشی

1. **Questions and Comments tab** - This is now a tab for project level questions and comments. Validators should review the the comments in that tab and answer questions as needed. Validators can also use that tab and the "Contact the Project Manager" link to direct questions or comments to the creator of the project.

2. **Task level comments feed** - The Activity and Stats button in the upper right hand corner of the tasks map now has a feed of all the comments left on the individual tasks. Validators should review that list of comments to help identify issues and answer questions.

[profile]:   /images/coordination/tm3_wnv_profile.png
[selection]: /images/coordination/tm3_wnv_selection.png
[multiple]:  /images/coordination/tm3_wnv_multiple.png