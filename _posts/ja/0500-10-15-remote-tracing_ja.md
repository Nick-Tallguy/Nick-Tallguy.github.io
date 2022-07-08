---
layout: doc
title: 道路、建物、水域や土地利用のトレース 
permalink: /ja/coordination/remote-tracing/
lang: ja
category: coordination
---

道路、建物、水域や土地利用のトレース
===========================================

> Reviewed 2022-06-22  

この章は、[LearnOSMの遠隔・アームチェア、そしてマッパソンの章](/ja/coordination/remote/) に引き続き、HOTでのマッピング経験がない場合に必要となります。  


Section Index
=====

[道路の描き方（歩道および農道を含む）](/ja/coordination/remote-tracing/#roads)  
[道路ネットワーク](/ja/coordination/remote-tracing/#the-highway-network)  
[住居区画の土地利用の描き方](/ja/coordination/remote-tracing/#residential-boundaries)  
[建物、壁、フェンス、複合施設、障害物](/ja/coordination/remote-tracing/#buildings-walls-compounds-barriers)  


## 道路

高速道路から農道、小道まで、OpenStreetMapではあらゆる種類の道路が 'highway' とラベル付けされています。道路データは様々な用途に使われるため、データベース（OpenStreetMapデータ）に正しく追加されることが重要です。  

- GarminなどのナビゲーションソフトやOsmandなどのスマートフォンのアプリは、正しい情報が読み込まれていれば、たとえ遠距離であっても経路情報を提供することができます。これらのソフトウェアはデバイスに装備されたGPSを利用しており、読み込んだベースマップと比較して現在位置を特定します。そのため、道路データが現在位置から実際に15メートル程度以内にあることが重要であり、そうでない場合は正常に機能しません。  
- 大型の '支援物資用' ローリーのための移動経路を計画するにあたって、小さな小道から幹線道路まで、その間に存在するすべての道路の大小を区別することができれば、計画立案はとても簡単になります。  
- 移動経路計画を立てるにあたっては、道路がアスファルトで舗装されているか、それとも柔らかい泥濘であるかを知ることも重要です。
- 疫病の伝播状況をプロットしようとする場合、患者が指摘する '十字路の近く' という表現は、実際に地図上に十字路があれば、非常に重要な手がかりとなります。

### <a name="highways-howto"></a> 道路 - マッピング方法

![iD 3][]

1. 道路をトレースする場合は、十分にズームインしていることを確認してください。縮尺を20メートル程度に設定して道路をトレースするか、あるいは衛星画像で道路と視認できる線や、それに非常に近しい地点をトレースするようにします。上のスクリーンショットでは、私がトレースを担当することになった道路が、木々の間を通り抜け、別の建物まで下りて、そこで止まっているように見えるのがわかります。道路の近くに木があるため、衛星写真のカメラで撮影した画像で判別する限り、木々の間を通り抜ける際に道路が狭くなったように見えますが、これは木が視界を遮っているだけで、道路はずっと同じ幅です。  
2. また、別の道路もトレースして、お互いに道路がつながっていることを確認しました。iDでは、分岐点のドットが少し大きく、色が濃く表示されています。経路探索ソフトウェアが正しいガイダンスを提供するためには、道路が接合することで '共通のノード' が存在することが重要です。  
3. この道路は 'highway=residential' としてタグ付けされており、私はそこに 'surface=unpaved' タグを追加しました。  
4. アフリカにおける道路のタグについて、詳しい解説は [Highway Tag Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) ページに記載されています。  

> マッパーが編集している区画の外に伸びている道路データを作業している際は、編集競合が発生してデータが保存できなくなる危険性が高くなります。道路データを編集する前に一度すべての変更を保存しておき、その後も、例えば6ノード程度追加した後など、非常に頻繁な保存を行うことをお勧めします。


### 道路ネットワーク

![JOSM 4][]

このスクリーンショットは、[JOSMのスタイル](https://josm.openstreetmap.de/wiki/Styles)としてHOT-OSM-Validateスタイルが使用されている例です。このスタイルは、データ確認者（validator）を支援するために作られたものですが、最初のマッピングを行う際にも非常に役に立ちます。赤色で表示されているオブジェクトには何らかの問題があります。その他の色については、このスクリーンショットのキーで説明されています。  

1. 道路の一部が赤く表示されているのは、この部分のタグ入力に誤りがあり、大文字が使われているためです。タグはhighway=unclassifiedとすべきであり、正しく入力されていればスクリーンショットでは淡い茶色として表示されているはずです。  
2. これは、とある町からサウスウェストにつながる道路ネットワークの一部です。このネットワークは、アフリカの他の道路ネットワークに接続されています。  
3. これらの道路区間は '孤立' しています。つまり、他の道路や町に一切つながっていない、ということです。現在のままでは、これらの道路データはあまり有用といえず、他のネットワークに接続することができるか、あるいは削除してしまう必要があるか、検討が必要となります。  


**道路と小川の判別**

![iD 5][]

iDエディタで編集を支援するためのスタイル様式はまだありませんが、このスクリーンショットでは植生と地面のエリアを視認することができます。地表はシルト（沈泥）か、あるいは水のない湿地帯のように見えます。黒と白の点線はiDでは小道（path）を表しますが、地形を示すために一時的にハイライトし、そのうちの1つを削除しています。  

1. これは highway=pathでしょうか、あるいは小さな川（stream）でしょうか。答えはおそらく両方でしょう！ 道路はその大小に関わらず、川の谷間に沿っていることが多く、季節によって水が流れて川になる場所がよくあります。この例の場合、対象は氾濫原のように見えますが、衛星画像が作成された時点では乾燥しており、道として使用されていました。ここでは次のようなタグを付けるのが最適でしょう。  
highway=path  
seasonal=yes  
surface=unpaved  
2. 木々や低木地に向かって、その中を小道が抜けてゆく様子ははっきりと判別できます。ただし、木々の間からその道筋を明確に視認することはできません。このような状況では、木々によって視界が遮られているとはいえ、小道や農道、あるいはなにかしらの道路が存在することは確かです。私は、トレースしていた道路が木々の間から直線としてはっきりと見える場所から、別のはっきり視認できる端まで線をつなげることで、地図を作成しました。この使い方は注意が必要ですが、この例では道が存在することは明らかで、その道筋は私が引いた線に非常に近いと思われます。ただ、これはとても極端な使い方です。普通は、道路が1、2本程度の木に隠れて見えない場合など、数メートルぶんだけ場所を推定する程度の使い方をします。  
3. 地表が明瞭に見えるよう、小道のデータを削除しておくと、iDの '元に戻す' 機能で簡単に置き換えることができます。  

***


## 居住区画の外周境界

OpenStreetMapでは、居住区の外周境界データは様々な用途で利用されます。  

+ 最もシンプルな用途では、 高いズームレベルで [OpenStreetMap.org](http://www.openstreetmap.org) を閲覧した際に、居住区画を視認するために使われます。対象の区画は、標準表示では薄いグレーとして表示されます。  
+ 最初から詳細にマッピングするには時間が足りない場合、Tasking Managerのプロジェクトでは、居住区の外周境界に近いものが必要になることが多いようです。  

> 最低限必要な設備、例えば学校や宗教施設、市場などをマッピングしましょう。  
> 集落や墓地の外周をトレースしてください。  
> 道路データは後ほど、別のタスクとしてトレースします。   
+ landuse=residential は統計にも利用され、正確なマッピングが重要になっています。  

*  If you can establish how many people normally reside in each dwelling, and  
 how many dwellings are normally built in a given area, then  
 once you have worked out the area covered by a landuse=residential boundary,  
 you can establish a very approximate population for that area.  
 Estimating the number of aid workers & quantity of medicine now becomes more realistic.
* 地名や行政境界は、しばしば他の情報源からインポートされますが、その位置は必ずしも正確ではありません。住宅地の境界がわかれば、インポートを行う人は、地名がどこに配置されるべきかを確認することができます。


### <a name="residential-howto"></a> landuse=residential - マッピング方法


** 理想的な作業 **  

*ステージ 1* - ある地域をマッピングすることになり、マッパーが大まかな landuse=residential の境界線を素早く描画する。  
*ステージ 2* - Tasking Managerでプロジェクトが作成され、参加マッパーが境界線を建物などに近づけるように改良する。  

![JOSM residential][]

![iD residential][]
 
上のスクリーンショットは、iDとJOSMで現在マッピングされている landuse=residential 境界線の図です。  

1. 境界線は閉じている必要があります。これは、ライン（ウェイ）の描き始めのポイントが、描き終わりのポイントとつながる、ということです。  
2. 境界線を構成するノードやセグメントは、道路や河川、建物など他の地物と接続してはいけません。 *つまり* 境界線はそれだけで独立するべきで、他の地物とノードを共有してはいけません。ただし、交差はしてもかまいません。  
3. 境界線は、1つのグループを形成する建物やその庭園、敷地に相当な近さで配置される必要があります。  


以下のスクリーンショットは、私の担当する区画にlanduse=residentialの境界の一部が含まれている様子です。右隣の区画のマッピングを完成させた人は、自分の区画でlanduse=residentialの境界線を描いた上で、私の区画のどこに境界線があるべきかを正確に明示するために、わざと私の区画の中にはみ出すように境界線を置き、編集の続きを私に '手渡し' ました。  


![JOSM residential 1][]

私は境界線にノードを追加し、自分の担当区画の中で横方向に拡張することで建物を囲むようにしました。下の方は自分の担当区画外に割り込むようにして直線を描いておくことで、下の区画を担当するマッパーが区画を拡張できるようにしています。  

これは難しいオペレーションとなります。自分が視認できるのは対象の市町村の一部だけだからです。しかし、landuse=residentialに関して、できる限りのことはやったほうがよいでしょう。これはいくつかの区画について俯瞰的な視点を持つ確認者は、個々の区画がマッピングされた後、できる限り境界を整理する必要が生まれる可能性が高いからです。  

> landuse=residentialの境界を描くにあたっては、他のマッパーが編集する区画にもデータが広がるため、編集競合が発生する危険性が高くなります。境界データを編集する前にすべての変更を保存し、6ノード程度を追加した後など、頻繁に変更内容を保存することをお勧めします。

***


## 建物、壁、構内区画、障害物  

建物データをマッピングするにはいくつかの理由があります:   

* 建物の密集度は、その地域に住んでいる人の数をよく表現しています。  
* 建物のサイズや形状、場所などによって、そこが避難場所や治療場所にできる可能性があるかどうか、確認することができます。  
* 建物の大きさ、形、相対的な位置から、井戸、救護所、学校などの場所を特定することができます。  
*  There is the potential to estimate the degree of damage sustained by a building, which can be used to estimate the potential casualties & level of support that may be required - this is currently (January 2015) under discussion for future use.  


### <a name="buildings-howto"></a> Buildings - How to Map

The vast majority of buildings that require mapping by HOT are either based upon rectangular shapes with square corners, or are round. If a building appears to be a mixture of the two, it is more likely you are looking at a building who's outline is obscured by shadow, reflection, foliage or similar.  

For some tasks where only an outline of an area is required, the task may specify that buildings can be mapped as nodes, but these situations are now rare.  


#### building=yes

Unless the project instructions specify otherwise, buildings should be tagged **building=yes**  

*  There can often be a time delay between the satellite imagery being taken, and the mapping being carried out. There is the possibility that the building you are looking at that appears to have no roof, has now been completed & is now in habitation. It is also possible that you are looking at a building with several storeys, the bottom ones being lived in, and the top floor with no roof currently not being lived in.  

> **Mapping buildings using iD** - when you are using the area tool within iD to create the basic shape, you must remember to then change the tag to building=yes. The default setting will merely tag the shape as area=yes. If you're tracing is of a building with square corners, please take the time to square your traced item (highlight it and shortcut 'q').  

*  JOSM is far faster for mapping buildings - [JOSM building tools is explained here.](/en/josm/josm-more-plugins/#the-buildings-tools-plugin)  

![Buildings iD][]

This screenshot shows part of a square being edited. Note the scale at the bottom of 15 metres - about the figure you should aim at when editing features. When tracing, you are aiming to place the building where it meets the ground:  

1.  **Round buildings.** In this case they are fairly low in height and their shadow is hardly visible. If you were standing amongst them they would appear like domes. I have mapped & tagged only one of these so far **building=yes**. To quickly add the remaining round buildings in JOSM or iD I would select this one (highlight it), keyboard shortcut *Ctrl+c*, move my cursor to the centre of another round building of the same size, keyboard shortcut *Ctrl+v*. When all of the round buildings of this size have been added in my square I paste a building over a different sized round building, JOSM - use *Alt+Ctrl* & mouse to resize it to the correct size, copy it & then paste over all round buildings of the same size.  
2.  **Rectangular buildings.** These particular buildings are casting a noticeable shadow. The shadow can help to identify the shape of a building which is partially obscured by another feature. You will find that many buildings are not so simple, and have a verandah or are 'L' shaped - you must trace the actual shape of the building as this will help to identify it when names & other data is being added as part of the ground survey process.  
3.  **Barriers - walls (or hedges) of a compound.** Having examined the imagery, zooming in & out until I am satisfied that from the shape of the object (use its shadow as well to identify), I believe this to be a wall, and I have tagged it **barrier=wall**. Alternatives include barrier=fence and barrier=hedge.  
4.  I have joined the barrier=wall to the building=yes at the corner of the building.  


### Satellite imagery distorting the building shape.


![Buildings_2][]

1.  The satellite imagery above, is of a building, but the satellite was not directly overhead, so that the building appears distorted and an end wall is visible in the image. Because of this angle, the apex roof does not appear rectangular. The sun is practically directly above the building, so that the shadow of the building indicated by the arrows from figure 1 does confirm that the building is rectangular.  

2.  To map this building, create a rectangle extending from the arrows of point 2, to where you estimate the building ends, indicated by point 3 in this image.  


***


More to follow - see the below links for more guidance.


# Further Reading

-  [West African HOT Mapping Tips by user Bgirardot](http://wiki.openstreetmap.org/wiki/User:Bgirardot/Typical_Road_and_Residential_Task)  
-  [OSM wiki entry concerning validating](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)  
-  [Highway Tag Africa - the preferred reference for highway tagging in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)  
-  [Short Tutorial in French for remote mapping](http://blog.cartong.org/2014/07/24/tuto-digitaliser-sous-openstreetmap-avec-le-tasking-manager-et-josm-premiers-pas/)

[iD 3]: /images/coordination/iD_3.png
[JOSM 4]: /images/coordination/JOSM_4.png
[iD 5]: /images/coordination/iD_5.png
[iD residential]: /images/coordination/iD_residential.png
[JOSM residential]: /images/coordination/JOSM_residential.png
[JOSM residential 1]: /images/coordination/JOSM_residential_1.png
[Buildings iD]: /images/coordination/Buildings_iD.png
[Buildings_2]: /images/coordination/Buildings_2.png