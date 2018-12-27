---
layout: doc
title: Tasking Manager 3 プロジェクト作成
permalink: /ja/coordination/tasking-manager3-project-admin/
lang: ja
category: coordination
---

# OSM Tasking Manager プロジェクト作成と管理

> このガイドは別途、次の形式でもダウンロードできます: [tasking-manager3-admin_ja.odt](/files/tasking-manager3-admin_ja.odt) or [tasking-manager3-admin_ja.pdf](/files/tasking-manager3-admin_ja.pdf) 

**このガイドは現行バージョンのTasking Managerについて解説を行っています。もしあなたが利用している画面がこのガイドと異なっている場合は、[以前のバージョンのマニュアル](/ja/coordination/tasking-manager-project-admin)を参照するようにしてください。**

Section Index
-------------
-  [ログイン](/ja/coordination/tasking-manager3-project-admin/#logging-in-&amp;amp;-access-levels)  
-  [新規プロジェクト作成 - 対象エリアの特定](/ja/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)  
-  [タスク作成 - 対象エリアの細分化](/ja/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)
-  [プロジェクト作成 - 明確にしておくべきこと](/ja/coordination/tasking-manager3-project-admin/#create-the-project)
    -  [解説 - プロジェクトについて最初に知っておくべきこと](/ja/coordination/tasking-manager3-project-admin/#description)
    -  [インストラクション - ユーザが行うべきこと](/ja/coordination/tasking-manager3-project-admin/#instructions)
    -  [メタデータ - プロジェクトと所属先](/ja/coordination/tasking-manager3-project-admin/#metadata)
    -  [優先エリア - ユーザが作業を優先して開始すべき区域](/ja/coordination/tasking-manager3-project-admin/#priority-areas)
    -  [衛星写真 - マッピング用画像選択の基礎](/ja/coordination/tasking-manager3-project-admin/#imagery)
    -  [アクセス権 - マッピングと検証作業の限定公開](/ja/coordination/tasking-manager3-project-admin/#permissions)
    -  [ヒント - 入力項目をすべて入力するために](/ja/coordination/tasking-manager3-project-admin/#instruction-notes)
    -  [公開 - 最後の作業を忘れずに](/ja/coordination/tasking-manager3-project-admin/#proofread-and-publish)

OpenStreetMap Tasking Managerは、マッパソンの運営やHOT活動の管理、学生マッパーへのタスク作成に必要不可欠なツールです。Tasking Managerを使うことで、マッピング対象の地域を小さな区画に分割し、特に多人数のマッパーが様々な地域から参加する場合に起こりがちな、作業対象の競合を防ぐ役割を持ちます。また、Tasking Managerには参加するマッパーに対してインストラクションを表示させる機能 (例: '道路と建物をすべて描いてください') もあり、データの品質と正確性を高める役割ももってます。いうなれば、Tasking Managerのタスクを正しくセットアップすることで、オープンに開かれたマッピング活動のワークフローを指揮することが可能です。このページでは、OSM Tasking Managerを使ったマッピングイベントを成功に導くにあたって必要となる管理の基礎について解説します。 

 このガイドは、いわゆる 'マッパソン' と呼ばれる、オープンに開かれたマッピングプロジェクトを行う際にOSM Tasking Managerでプロジェクトの作成や管理を行う必要がある人向けの文章です。このガイドは、[HOT Tasking Manager](http://tasks.hotosm.org)や[TeachOSM Tasking Manager](http://tasks.teachosm.org)などで動作しているOSM Tasking Manager 3インスタンスを対象としています。

HOTあるいはOSM Tasking Manager 3版はしばしばその短縮形である**TM3**という略称で呼ばれます。

## ロギングとアクセスレベル

最初に、アクセスレベルの概念について理解しましょう。TM3への全てのアクセス権は[OpenStreetMap website](https://www.openstreetmap.org)への認証によって制御されています。TM3にアクセスする場合、OpenStreetMap (OSM) のアカウントが必要です。OSMのアカウントを取得した後、[Tasking Manager](http://tasks.hotosm.org) を表示し、 **OpenStreetMapへログイン**をクリックすると、OSMのページが再度表示され、Tasking Managerへの認証のためOSMアカウントへ限定的なアクセスを許可させる必要がある旨が表示されます。 

### OSM Tasking Manager内のアクセスレベル

OSM Tasking Managerには3つのユーザアクセスレベルが存在します:
- **ユーザ** - 最も基礎的なレベル。ユーザはTM3へのログインを行い、マッピングプロジェクトの表示、プロジェクトへの参加と作業を行うことができます。この利用方法については、[LearnOSMのOSM Tasking Managerガイド](/ja/coordination/tasking-manager-3/)に網羅されています。下書き状態 (つまり未公開状態) のプロジェクトなど、一部のプロジェクトは非常時となります。  
- **プロジェクト管理者** - プロジェクト管理者は、TM3でのプロジェクト作成や更新が可能です。  
- **管理者** - 管理者は、TM3のユーザのアクセスレベル管理の権限を持ちます。

TM3でプロジェクトを新規に作成するには、プロジェクト管理者のアクセスレベルが必要です。

## TM3での新規プロジェクト作成 

![TM New][]

画面右上に表示されているあなたのユーザ名をクリックし、**プロジェクト新規作成**をクリックします。ポリゴンを手書きするか、あるいは既存のgeojsonファイルをインポートしてマッピング対象となる区域 (area of interest, AoI) を指定します。  

> Tasking Managerでプロジェクトを作成する場合、対象エリアを手書きするよりも、既に区域が規定されたファイルをインポートするほうが推奨されます。インポート用のファイルを作成するには、JOSMやQGISなどのツールが利用できます。お薦めの方法としては、JOSMを使って.osmファイルを作成し、http://geojson.io/ を使ってGeoJSONを生成する方法があります。

### 手書きによるマッピング対象区域指定

1. 右上に表示されている'描く'ボタンをクリック
2. 右クリックを押しながら地図を移動させることで作業対象領域 (AoI) を表示させます。左クリックしてしまうとノードが追加されるので注意してください。ポリゴンを描き、対象地域を指定します。これにより対象ではないエリア (海や森林など) を取り除き、時間を省略することができます。  
3. 最初に描いたポイントをクリックするとポリゴンが閉じます  
4. ポリゴンを描いた後も、ノードを移動させたり追加したりすることができます。

あるいは

### GeoJSONやKMLファイルのアップロードによるマッピング対象区域指定  

1. 'インポート'ボタンをクリックします。  
2. ファイルアップロードウィンドウから、対象のファイルを探します  
3. ファイルを選択してハイライトさせ、'開く'をクリックします  
4. インポートした場合、作業対象区域はそれ以上編集できません


## タスク生成

プロジェクトの作業対象エリア (AoI) は、作業の全体領域を意味します。この領域は、タスクと呼ばれる小さなエリアに分割されます。 

AoIをインポートした場合も手書きした場合も、地図フレームのなかに領域が表示され、次に個別のタスクにどのように分割するかの質問が表示されます。2つの選択肢があります:  

1. 四角形のグリッド - Tasking Managerが自動で、プロジェクト領域全体を同じ大きさのグリッドに分割します。通常のクラウドマッピングプロジェクトではこの方法がよいでしょう。
2. 任意形状 - ファイルをアップロードしてプロジェクト対象地域の指定を行う場合、そのファイルのなかに個々のタスクの形を含めておくことができます。タスクの形状をカスタマイズする必要がある場合に、この機能を使ってください。例えば、道路データのインポートや作業対象地域のアウトプットを処理する工程などがあげられます。

### タスクの分割に四角形のグリッドを利用

同じ大きさの四角形タイルを作成するには、"四角形のグリッド"オプションを選んでください。  

![TM Tile Sizes][]

作業対象地域が四角形のグリッドに分割され、それぞれの四角形が1つのタスクとなります。"拡大"と"縮小"のボタンを使って、タスクの大きさを適切に修正してください。実質的に、タイルのサイズを小さくするとより多くのタスクが生成されることになります。タスクのサイズの適切な大きさがどのくらいかは、対象区域の大きさ (大きなプロジェクトで小さめのタイルを生成) や、それぞれのタイルのなかでマッピング対象になる地物の数によって変わってきます。一般的に、作業対象地域が大きくなったり、マッピングするべき地物の数が多くなったりするにつれて、プロジェクトで使われるタイルは小さめに作っておくことが望ましいです。 

**タスクの大きさを決める際に参照できる地図レイヤは1つだけではない**という点に注意してください。地図の右下にあるボタンを押すことで、地図レイヤの切り替えを行うことができます。衛星写真のレイヤを表示させておくことで、マッピング対象の実際の画像を確認しながら設定を行うことができます。

プロジェクトで特別に利用できる航空写真がある場合、地図の右上のボタンを使うことでTMSやWMSのURLを追加することができます。

この工程とは別に、"分割"ツールを使うことでタスクのサイズを異なる大きさに変更することができます。タスクの分割に回数制限はありません。繰り返しになりますが、衛星写真レイヤを表示させることで、どの地域を分割するかの判断材料に役立ちます。"リセット"ボタンを押すと、分割したすべてのタスクの大きさをリセットすることができます。分割オプション（ポリゴン）はエリア内にポリゴンを描いてその部分を小さなタスクに分割する機能で、 分割オプション（ポイント）はそれぞれのタスクを選択し、そのタスクを分割する機能です。リセットボタンで、分割したすべてのタスクがデフォルト状態に戻ります。

> 一般的に、居住用の建物が密集している地域は小さなタイルにします。プロジェクトのタスクを作成するにあたっては、作業時間として10-15分で完了できる分量にするようにすべきです。

***タイルサイズ策定にあたっての検討事項***

- マッパソンに参加する新規マッパーが1つのエリアをマップするために必要な時間は、経験を積んだマッパー (最初はみな遅いとはいえ、すぐに素早くなりますが) の約4倍程度を見込んでください。 
-  A new mapper finds it as hard to search for features in the satellite imagery as they do to actually map them. Finding round huts thatched with natural materials in an area of round bushes is a steep learning curve for a 'newbie'.
-  A new mapper also finds it difficult to trace lots of features such as buildings.
-  Later in the process you have the opportunity for a mapper to 'split' a square - splitting a square into quarters helps new mappers get a square size they can cope with.  
-  The most likely part of a square for problems to occur is at the edges and corners. Therefore smaller squares means more corners and edges and will result in duplication of mapping as well as objects being missed. There is a tradeoff in how small you make the square, which may make it easier for the new mapper and an increase in errors because there are more corners and edges.
-  A square may be split, but there is no option to join squares together to make them bigger again. So be careful when splitting
-  **Conclusion** Try mapping an area of the project yourself to see how easy it is and what difficulties will be faced. This should help you to decide on an optimum square size. Allow splitting, but not to infinity - some new mappers continually split squares until they are so small that it becomes extremely difficult to map.  

After finalizing Task sizes, click “Next”.

### Arbitrary Geometries

It is possible if you uploaded a file to define your project area, it could also contain information about the exact shapes you want your project's individual tasks to be.  If the AoI consists of one polygon, the project will have just one task. This is generally not needed and should only be needed for specific needs.

Arbitrary geometries can not be split.

### Project Area Trim

After determining the task sizes you will have the option to "Trim" your AoI. You can either trim the AoI to the exact polygon shape you drew or imported (suggested) or you can trim to the nearest task square that includes your AoI.

After finalizing a the AoI trim, click “Next”.

## Create the project

Give the project a title (can be edited on the next screen) and click "Create"

This establishes the project in the Tasking Manager and opens a screen where you can provide the descriptions, instructions and other information about the project. Keep in mind that this must not be underestimated. A fair share of mappers (in many cases the majority) will have no previous experience with OpenStreetMap and/or HOT and will thus not be familiar with tagging guidelines. It is very important that the objectives of the project are clear and that all resources which the mappers should take into account are laid out here. It is often advisable to confine one project to one class of objects to be mapped. If you need a basemap of an area better split it in several projects, one for the roads, one for the buildings etc. Now beginners can focus on a small class of objects while learning how to map them correctly. Otherwise you might end up with lots of tiles which contain a bit of everything but nothing really complete.

Once the Project is created, you will need to edit all its associated settings:

- Description - Used for display in lists and motivational information for mappers
- Instructions - Detailed instructions for what and how to map the needed objects/entities/features
- Metadata - Additional information used for categorizing the Project. Often used in filtering the full list of projects.
- Imagery - Place to provide a TMS URL and License required.
- Priority Areas - Allows you to specify parts of the Project that should be mapped first.
- Permissions - Allows you restrict access to the project for mapping and validation.
- Settings - Project due date and JOSM Presets.
- Actions - Send messages to contributors, validate and invalidate the entire project with one click.

### Description

![TM Description][]

This screen allows you set the project priority, its status as Draft, Published, or Archived, a short description used in Project listings and the long description available once a mapper has selected the Project.

Both the short and long description should provide information about why the project exists, who will use the data and the expected the impact the mapping will have. These fields support Markdown text and can include images and videos.

### Instructions

![TM Instructions][]

**Entities to Map** - A list of the features you want users to map. Generally the fewer features the better as they are more likely to get completed.

> Projects that ask for lots of entities to be mapped are difficult for mappers and difficult to get validated. They take much longer to get a good usable dataset. Task sizes are also difficult to make efficient for different types of mapping, e.g., buildings need small task squares, roads and waterways need larger task squares. Making multiple projects over the same area to get buildings and linear features mapped is a best practice.

**Changeset Comment** - This is the default changeset comment that will be attached to every data upload to OSM. It usually includes something that identifies the Tasking Manager the project resides on and the features that were mapped. It is often used for "hash tags" to help identify the organization requesting and/or doing the mapping. It can also describe the mapping being done, e.g., "Mapping buildings."

> Users should be instructed to fill in meaningful comments about what they mapped, but helping them out with good default comments is always a good idea.

**Detailed Instructions** - This is where the majority of your detailed instructions will be placed and what we expect every mapper and validator to read carefully and follow.

See the below notes on creating good instructions.

**Per Task Instructions** - These will be displayed when a mapper selects a task and also has a special feature that allows Task specific URLs to be crafted based on the typical "slippy map" x, y, z coordinates.

### Metadata

![TM Metadata][]

> All of these fields should be filled out and will become non-optional in future versions of TM3.

**Mapper Level** - This is an indication of the difficulty of the mapping project. There are 3 options Beginner, Intermediate and Advanced. This setting is an indication to the mapper what experience level they should have to be most successful in mapping the project. It can be used in project list filtering and the suggested level can be required in the Permissions screen.

**Type of Mapping** - Used in project list filtering and helps mappers find projects they like to map.

**Organization **- Allows you to specify the organization the mapping will be used by. Used in project filtering.

**Campaign **- This allows you to group the project with other projects that are part of larger overall mapping effort. Used in project list filtering.

### Priority Areas

![TM Priority Area][]

Use the provided tools to draw areas that should be mapped first. You can have multiple priority areas for a Project. You can also change priority areas at any time.

> During disaster mapping, early in the event, having a large project AoI and using priority areas to focus mapping as new information comes in is a best practice.

### Imagery

URL Field - A field that takes a TMS URL that will passed automatically to the OSM Editor the mapper or validator uses. Please follow the example, it is very important it is formatted correctly to work in all editors.

License - Optionally, if there is a specific license required for the mapper to accept in using the imagery, you can select it here. If you need a licese that is not available, you can contact an administrator for the Tasking Manager installation and ask them to add it.

### Permissions

![TM Permissions][]

Mapper Level - Allows you to require that a mapper is at the proper level to map on the project (Metadata screen above). Mapper levels can be set manually, but are automatically applied based on total changesets.

Require Validator Role - This allows you to require that people doing validation have been evaluated to be qualified validators. It is a peer review process to designate someone a Validator, Project Managers and existing Validators can mark any user as a qualified Validator.

Private Project - This restricts access to the Project to a list of Users. Users must have logged into the Tasking Manager at least once before they can be added to a project.

### Settings

Default Locale - Allows the setting of default instructions language for a project.

### Actions

![TM Actions][]

Message All Contributors - Sends a Tasking Manager message to everyone who has marked a task complete or valid. It can be used to thank contributors and/or guide them to other projects in a portfolio/campaign. It should also be used before using either of the two Validate/Invalidate all Tasks options described below.

Validate all Tasks - This will mark all tasks to "Green" validated status, with the exception of tasks that have been marked as "Bad Imagery"

Invalidate all Tasks - This will mark all tasks to "Red" invalidated status, with the exception of tasks that have been marked as "Bad Imagery"

Delete Project - This will permanently delete the project from the Tasking Manager.

Clone Project - This will create a duplicate of the project except for the AoI which you will need to re-import or re-draw.

### Instruction Notes

Please use plain language as your target audience may not consist of native English speakers.

1. The title of the project should already reveal what entities should be mapped. Prefer a title such as
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. The most important messages should appear on the instruction tab first to ensure they are read. This would include any special imagery to use instead of Bing. The first sentences could mention that it is not required to map every single house if the project is about roads and residential areas, for example. Or that it is required to map every house if the project is to be used for population density estimates. These are the messages that should also appear on the description tab.
3. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery (cf. the previous section). Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
4. There are guidelines that cover common errors we see while validating. One example is Blake Girardot's compilation on [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Use the link in the instructions and explain that adhering to these guidelines is required.
5. The definitive resource on tagging is the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). For many HOT-related tasks the page on [tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) is the proper specialization and highly recommended reading for every mapper. If your project must adhere to different tagging standards then write a similar page in the wiki and link it in your instructions.


### Considerations concerning Imagery

In most cases we use the "standard" Bing imagery. But there are situations where you might want to choose an alternative source:

1. Bing does not provide high-resolution coverage for your AoI.
2. Bing has considerable cloud cover in this area.
3. You need newer imagery for post-disaster evaluation.

If Bing does not prove adequate then Mapbox is the next choice. You should only look for other sources if neither of these two meet your requirements.

In such cases it is not sufficient to choose a license-compatible source and make it available through a WMS or TMS service. Your AoI has probably already been partially mapped using Bing or Mapbox imagery and there might be a noticeable offset between images. You must have a close look at various locations of your AoI and determine the offset between your imagery and previously mapped data. If the existing OSM data are offset with respect to your imagery but fit Bing imagery then we usually assume that Bing is the "gold standard" unless we have GPS traces which prove that this assumption is wrong.

If there is a constant offset between your imagery and Bing across the AoI then this might be corrected on the server so that images from various sources loaded in the editor match. If this is not possible, if the offset varies across the AoI or if existing data are aligned with various sources then it is time for plan B:

The important point is that you must develop a strategy for how to cope with these issues and provide detailed instructions to mappers and validators. We strongly suggest that you declare such a project "for experienced mappers only" and explain that experience in this case does not mean having mapped 200+ buildings but having already dealt with alignment issues and different imagery sources.

One possible strategy could include these steps:

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Bing.
2. Make sure that all existing features which are also visible on Bing are aligned with Bing imagery, i.e. realign if necessary.
3. Align the alternative imagery to existing features (and thus to Bing) using the imagery offset function of the editor.
4. Add new features from the now correctly aligned alternative imagery.

It is important that step 3 is repeated for every task of the project and the individual task squares should not be too large because imagery offsets can vary considerably across an AoI, particularly if the terrain is not flat. Even imagery discontinuities may occur across a project - look out for them and advise the contributors of such a problem.

Here are some suggested bits of information which you might include in the project instructions:

- [general guidelines for various editors](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [an animated gif on imagery alignment in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [the josm imagery alignment chapter in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


### Proofread and Publish
Proofread the various tabs to ensure wording and formatting are correct, and instructions are clear. If you need to make changes or refinements to your project, click the ‘Edit’ link in the upper right hand corner of the page. 
If the project is ready for mapping, click the ‘Publish’ link. Once the project is published, it is available for mapping to anyone with an OSM account, unless a group of users was specified in the ‘Allowed Users’ tab, in which case only the allowed users would be able to work on it.  If necessary, edits can still be made to the project after publication by clicking on the ‘Edit’ link.

[TM Tile Sizes]: /images/coordination/tm3_tile_sizes.png
[TM New]: /images/coordination/tm3_create_new.png
[TM Description]: /images/coordination/tm3_description.png
[TM Instructions]: /images/coordination/tm3_instructions.png
[TM Metadata]: /images/coordination/tm3_metadata.png
[TM Priority Area]: /images/coordination/tm3_priority_area.png
[TM Permissions]: /images/coordination/tm3_permissions.png
[TM Actions]: /images/coordination/tm3_actions.png