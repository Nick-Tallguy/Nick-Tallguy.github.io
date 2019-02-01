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
- 初心者マッパーが、広大な航空写真のなかから特定の地物を探し出し、それらを見つける都度マッピングしてゆくのは困難を伴います。茂みの中に点在する、天然の素材で茅葺きされたヒュッテを見つけ出すのは'初心者'には極めて難易度の高い作業です。
- また、初心者マッパーにとっては、建物など多数の地物をトレースし続けることは困難な傾向があります。
- このプロセスの後半では、マッパーが対象区域を'分割'する方法を紹介します。タスクをより小さな区域に分割することで、初心者マッパーにとっても対処のしやすい広さにすることができます。  
- 作業を行うにあたって問題が発生しがちな箇所は、四角形の四隅と辺縁部分です。対象の四角形が小さくなればなるほど、編集データの重複やマッピングの不足に伴う欠落が発生する可能性が高くなります。対象エリアの大きさ指定はある意味トレードオフの関係にあり、小さければ小さいほど新しいマッパーが参加しやすくなり、それに伴ってエラーが発生しやすくなるといえます。
- 四角形は分割を行うことが可能です。ただし、一度分割した四角形を再度結合して大きな四角形にすることはできません。分割は慎重に行うようにしてください。
- **まとめ** プロジェクトの対象エリアを作成したら、自分で一度マッピングを行ってみて、その作業が簡単か難しいか、どのような課題に直面するかを試してみてください。最適なタスクのサイズを確定するにあたってこの作業は非常に役に立ちます。分割作業は許可するほうがよいですが、無限に分割を行うことは避けたほうがよいでしょう。稀に連続して分割を行ってしまい、マッピング自体が極めて困難になってしまうケースも存在します。  

タスクの大きさを確定したら、"次へ"をクリックしてください。

### 任意のジオメトリ

ファイルをアップロードすることでプロジェクト対象エリアを指定する場合、ファイルに任意の形状のポリゴンを含んでおくことで、それぞれのポリゴン形状を個別のタスクとすることが可能です。もしファイルに含まれるポリゴンの数が1つの場合、プロジェクトにはタスクが1つしか生成されません。この機能は通常利用されませんが、状況によっては必要となる場合があります。

任意のジオメトリを設定した場合、分割を行うことはできません。

### プロジェクト対象エリアのトリミング

タスクのサイズを確定した後、対象エリアを "トリミング" することもできます。トリミングは任意のポリゴン形状を描いたり、形状をインポートしたり、対象地域を含む最も近いタスクをもとに行ったりすることが可能です。

トリミングの対象エリアを確定させたら "次へ" をクリックしてください。

## プロジェクトの作成

プロジェクトに適切な名前をつけて、 "作成" を押してください（名前は次の画面でも編集可能です）。

これでTaking Managerへのプロジェクト登録は完了で、次はその概要やマッピング方法の解説を記述する必要があります。なおこの作業は、決して疎かにしないでください。マッピングに参加する一定以上の (多くの場合、ほとんどの) マッパーはこれまでOpenStreetMapあるいはHOTの活動に参加したことがなく、タグづけのガイドラインについても十分な知識を持ちません。この箇所において、プロジェクトの目標と、何をどのようにマッピングすればよいかを明確に記述してください。多くの場合、1つのプロジェクトのなかでマッピングする地物は1種類に限定することが推奨されます。もしその地域のベースマップを完成させたい場合、道路は道路、建物は建物といったように、複数のプロジェクトに作業を分割するようにしてください。新規に参加するマッパーは、小さな対象区域のなかで特定のマッピングに慣れる過程で、それらの地物をどのようにマッピングすることが望ましいか、学習してゆきます。もし複数の地物を対象としてしまうと、中途半端に様々なものがマッピングされた区域が多く発生し、実際にはマッピングが完遂できないという自体に陥る可能性が高くなります。

プロジェクトの作成が完了したら、関連する設定についても確認しておきましょう。

- 解説 - プロジェクト一覧で表示される名称と、マッパーの参加意欲をかき立てる情報
- マッピング方法解説 - 何をどのようにマッピングすることが求められているかに関する詳細な解説
- メタデータ - プロジェクトをカテゴライズするにあたっての付帯情報。プロジェクト一覧からフィルタリングを行う際などに利用されます
- 航空写真 - TMSのURLを記載したり、必要となるライセンスについて記載する場所
- Priority Areas - プロジェクトの対象地域のなかで優先してマッピングされるべき場所
- アクセス権 - マッピングや検証作業に参加できるアカウントを制限することが可能です
- 設定 - プロジェクトの期限とJOSMプリセット
- アクション - プロジェクト参加者へのメッセージや、プロジェクトの検証作業に関して許可/不許可を一括編集できます

### 解説

![TM Description][]

この画面ではプロジェクトの優先度や、下書き・公開中・アーカイブ済みといったステータス、プロジェクト一覧で表示される短い解説文や、プロジェクトを選択した後に表示される長めの解説文について設定することができます。

解説文は長短どちらにおいても、なぜこのプロジェクトを行うに至ったかや、データを誰が使うのか、マッピングがもたらす社会的なインパクトについて記述するようにしてください。文章を記載する際にはMarkdownを利用することができ、画像や動画を貼り付けることも可能です。

### マッピング方法解説

![TM Instructions][]

**マッピング対象** - ユーザにマッピングして欲しい地物の一覧です。一般的に、対象の地物が少ないほど、マッピングが完了する可能性が高くなります。

> 多くの要素をマッピングすることを要求するプロジェクトは、マッパーによる作業が困難なばかりでなく、検証作業も困難です。これにより、良質で使いやすいデータセットを作成するにも長い股間がかかるようになってしまいます。また、例えば建物のタスクには小さめのサイズのタスク、道路や河川には大きめのタスクなど、マッピング対象の地物によって適切なタスクのサイズは異なっています。ライン状の地物と建物など、同じ地域を対象としてプロジェクト自体を複数に分割することがベストプラクティスとなります。

**変更セットコメント** - この箇所で設定したコメントが、OSMにデータをアップロードする際にデフォルトで入力されるようになります。変更セットには通常、Tasking Managerのどのプロジェクトに関連する作業かを特定する内容と、マッピングを行った地物の概要が入力されます。ここには通常、"ハッシュタグ" が利用され、マッピングを要請した、あるいは実施している組織についての情報が入力されます。また、どのような内容をマッピングしたか、例えば "建物のマッピング" などのような内容も入力されます。

> 変更セットコメントを入力するにあたって、ユーザには何をマッピングしたか、有用なコメントを入力するよう教育するべきです。ただし、デフォルト値としてよいコメントが入っていることもまた、その入力を支援するために重要となります。

**マッピング方法詳解** - マッピングに関して最も詳細な方法の解説をこの場所に記載してください。また、参加するマッパーや検証作業参加者に対して、熟読して守ってほしい欲しい内容もここに記載します。

わかりやすい解説の記載方法については、後述のメモも参照してください。

**Per Task Instructions** - この箇所の記述は、マッパーがタスクを選択した際に表示されます。また、そのタスクのために作成された、x, y, z の座標指定を伴ういわゆる "スリッピーマップ" の指定もこちらで行います。

### メタデータ

![TM Metadata][]

> これらのフィールドは、将来的にTM3ではすべて必須項目となる予定です。

**マッパーレベル** - これはプロジェクトのマッピング難易度を表す指標です。選択肢には初心者、中級者、上級者の3つが存在します。このプロジェクトを成功させるために最低限必要なマッパーの経験について、この箇所で指定を行います。ここで設定した値はプロジェクト一覧のフィルタ条件で使われるとともに、アクセス権の画面で推奨レベルを設定する際にも利用されます。

**マッピング対象** - プロジェクト一覧の利用条件や、マッパーが参加したいプロジェクトを見つける手がかりになります。

**組織** - マッピングの成果が誰によって利用されるのか、を指定します。プロジェクトのフィルタ条件に利用されます。

**キャンペーンタグ** - この設定を使うことで、このプロジェクトを他のプロジェクトとグループ化し、より大きなマッピングの成果の一部にすることができます。プロジェクト一覧でのフィルタ条件に利用されます。

### 優先エリア

![TM Priority Area][]

Tasking Managerに組み込まれたツールを使って、まず最初にマッピングされるべき地域を描きます。1つのプロジェクト内に複数の有線エリアを指定することが可能です。優先エリアの指定はいつでも変更する事ができます。

> 災害対応マッピングを行う際、特に初期の段階では、プロジェクトでのエリア指定を大きくとっておき、新しい情報が入る都度、優先エリアの機能を使って集中するべき箇所を指定してゆくと効果的です。

### 航空写真

サービスURL - 作業に参加するマッパーや確認者が使うOSMエディタに対し、この箇所で指定したTMSのURLが自動的に読み込まれます。記入例に従って記入してください。すべてのエディタで問題なく動作するには、入力が正しい形式である必要があります。

ライセンス - 必須ではありませんが、もし航空写真を利用するにあたってマッパーが特定のライセンスに同意している必要がある場合、そのライセンスをここで指定することができます。指定したいライセンスがリストに存在しない場合は、Tasking Managerの管理者に連絡を取り、当該のライセンスを追加してもらうようにしてください。

### アクセス権

![TM Permissions][]

マッパーレベル - プロジェクトに対して適切な習熟度を持っているマッパーの参加だけに制限することができます (上記のメタデータ項目も参照)。マッパーレベルは手動で設定することもできますし、マッパーが行った変更セットの数に応じて自動的に適用することも可能です。

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