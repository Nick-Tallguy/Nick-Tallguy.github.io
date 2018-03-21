---
layout: doc
title: Editor iD
permalink: /pt/beginner/id-editor/
lang: pt
category: beginner
---

O Editor iD
=============

> Este guia pode ser descarregado como [beginner_id-editor_pt.odt](/files/beginner_id-editor_pt.odt) ou [beginner_id-editor_pt.pdf](/files/beginner_id-editor_pt.pdf)  
> Revisto em 2016-03-30  

- TOC
{:toc}

O editor iD é o editor padrão do OpenStreetMap integrado no navegador de internet. O iD é rápido e fácil de utilizar, e permite mapear a partir de várias fontes, tais como imagens de satélite e aéreas, GPS,  Field Papers ou Mapillary.  

O editor iD é uma boa ferramenta para fazer pequenas edições de forma fácil que não necessitem das funcionalidades avançadas do JOSM (um editor mais avançado e complexo). Este capítulo demonstra o básico da edição com o iD.  

Começar com o Editor iD
----------------------

-	O editor iD necessita de uma ligação permanente à Internet.  
-	Abra o seu navegador de internet e aceda ao site do OpenStreetMap website em [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Entre na conta** utilizando os dados de acesso da sua conta no OpenStreetMap  
-	Desloque e aproxime o mapa na área que deseja editar. Pode deslocar o mapa clicando e mantendo premido o botão esquerdo do rato e deslocando o mapa para a área que quer editar.  
-	Clique na pequena seta logo a seguir a **Editar** e clique na opção do menu que aparece **Editar com iD (editor no navegador)**.  

![image1][]


Interface do Editor iD
-------------------------
![image2][]

1. **Editar Painel de Características:** Este painel mostra etiquetas (tags) do objecto seleccionado no mapa.  
	Pode adicionar ou editar etiquetas neste painel.  
2. **Ferramentas:** Este painel mostra ferramentas básicas de edição:  
    Desenhar ponto (nó), *tecla de atalho* **1** ![image3][]{: height="24px"}  
    Desenhar linha (via), *tecla de atalho* **2** ![image4][]{: height="24px"}  
    Desenhar forma (polígono), *tecla de atalho* **3** ![image5][]{: height="24px"}  
    Desfazer, *teclas de atalho* **Ctrl+z** ![image6][]{: height="24px"}  
    Refazer, *teclas de atalho* **Ctrl+y** ![image7][]{: height="24px"}  
    Guardar alterações, *teclas de atalho* **Ctrl+s** ![image8][]{: height="24px"}  
3. **Painel do mapa:** Este painel mostra várias funções de configuração:  
    Aproximar, *tecla de atalho* **+** ![image9][]{: height="24px"}  
    Afastar, *tecla de atalho* **-** ![image10][]{: height="24px"}  
    Ir para a sua localização ![image11][]{: height="24px"}  
    Configurar camada de fundo, *tecla de atalho* **b** ![image12][]{: height="24px"}  
    Dados de Mapa, *tecla de atalho* **f** ![Map Data][]{: height="24px"}  
    Abrir o Menu de Ajuda, *tecla de atalho* **h** ![image13][]{: height="24px"}  
4. **Painel de informação:** Este painel mostra informação variada, tal como a barra de escala e quais os utilizadores que contribuiram para a área.  

Configurar a Camada de Fundo
--------------------------------

Clique o botão **Configuração de fundo** ou utilize a *tecla de atalho* **b**.![image14][]{: height="24px"}  
![image15][]  
Para alterar o **nível de brilho** clique em uma destas caixas, os níveis são 100%, 75%, 50%, e 25% ![image16][]{: height="24px"}  
Também pode **alterar a camada de fundo** baseado no seu fornecedor de imagens preferido (o padrão é o Bing Aerial Imagery).  

Pode adicionar as suas próprias telas de mapas clicando em  **Personalizado**. Por exemplo, se quiser **adicionar um Field Paper** [^fieldpaper], clique em **Personalizado** e então clique no ícone da lupa que está à direita para abrir a seguinte janela:-  
![image17][]   
e adicione o **URL de digitalização do FieldPaper**, que será algo como: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Para **mostrar trilhos GPS armazenados no seu computador** (formato GPX), arraste e largue o ficheiro do trilho na janela do editor iD.  
Para ativar **trilhos GPS do OpenStreetMap** clique na caixa. Na imagem abaixo, os trilhos GPS públicos são mostrados em várias cores, indicando a direção ao criar o trilho.  
![osm gps traces][]  
Se existir um [desalinhamento da imagem de fundo](/pt/josm/aerial-imagery), pode **corrigi-la** clicando em **corrigir o alinhamento da imagem**. ![image18][]  

- Clique nas setas de navegação para mover a imagem de fundo. Clique no botão de reiniciar para retornar à posição inicial. ![image20][]  

Edição Básica com o editor iD  
----------------------  

### Adicionar Pontos  

Para adicionar um novo ponto, clique no botão **Ponto**. ![image3][]{: height="24px"}  

- O cursor do rato mudará para o símbolo mais (+). Agora clique na posição desejada para o ponto. Por exemplo, se conhecer um hospital na sua área, clique na posição do edifício central do hospital.  
![image21][]  
- Note que é adicionado um novo ponto. Ao mesmo tempo, o painel lateral direito mostrará botões e campos onde pode selecionar e configurar atributos do objeto. Clique em **Hospital** para marcar o ponto como hospital.  
![image22][]  
- Pode usar os campos para preencher informações sobre o ponto. Pode introduzir o nome de um hospital, morada e outras informações adicionais. Note que cada um dos elementos terão opções diferentes dependendo da etiqueta que escolher no painel lateral.  
- Se cometer um erro, como uma localização errada, pode mover o ponto para uma nova localização mantendo premido o botão esquerdo do rato no ponto e arrastando-o. Se quiser eliminar o ponto, clique com o botão esquerdo do rato e depois clique no botão do caixote do lixo. ![image23][]{: height="24px"}  
Um "ponto" criado no editor iD é na verdade um "nó" isolado com uma série de "etiquetas" nele.  

### Desenhar Linhas  

Para adicionar uma nova linha, clique no botão **Linha**. ![image4][]{: height="24px"}  

- O cursor do seu mouse irá mudar para o botão de mais (+). Encontre uma via que não esteja desenhada no mapa e trace-a. Clique no ponto onde a via se inicia, mova o mouse e clique para adicionar pontos. Dê um duplo clique para finalizar o desenho da via. Observe o painel no lado esquerdo.  
![image24][]  
- Tal como num ponto, selecione as etiquetas apropriadas para a linha.  
- Pode arrastar pontos da linha clicando com o botão esquerdo do rato num ponto e arrastando-o de seguida.  
- Também pode mover toda a linha selecionando-a e escolhendo a **ferramenta Mover**. Então arraste a linha para uma nova localização. ![image30][]{: height="24px"}  
- Quando clica com o botão esquerdo do rato num ponto individual (nó) na linha, irá ver estas ferramentas:  
- Eliminar ponto da linha. ![image23][]{: height="24px"}  
- Desligar ponto da linha. ![image26][]{: height="24px"}  
- Dividir a linha em 2 linhas no ponto que selecionou. ![image27][]{: height="24px"}  
- Quando clica com o botão esquerdo do rato numa linha (mas não num ponto), irá ver estas ferramentas:  
-   Eliminar linha. ![image23][]{: height="24px"}  
-   Criar círculo a partir da linha (apenas ativo se a linha estiver fechada) ![image29][]{: height="24px"}  
-   Mover linha ![image30][]{: height="24px"}  
-   Form a square shape from a line (only active if the line is closed) ![image31][]{: height="24px"}  
-   Reverse line direction (good for rivers & one-way streets) ![image32][]{: height="24px"}  

A "line" created in the iD editor is actually a "way" with "tags" on it.

>A special note about **Deleting**: In general you should avoid deleting other people's mapping if it just needs improvement. You can delete your own mistakes, but you should try to *adjust* other people's mapped objects if they need changes. This preserves the history of the items in the OSM database and is respectful of fellow mappers. If you really feel something should be deleted, consider asking the original mapper or one of the OSM email lists about it first.

### Desenhar Formas (Polígonos)

To add a new multi-sided shape, click on the **Area** button. ![image34][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Try to trace a building using the imagery as a guide.  
- You will notice that the color of your shape will change depending on the attributes that you assign to it.  
![image35][]  
- The tools that are available when you select a shape are similar to those when you click on a line.  

A "polygon" in the iD editor is actually a "closed way" with tags on it.

Gravar as Suas Alterações
--------------------

When (and if) you want to save your edits to OpenStreetMap, click the **Save** button. The panel on the left will show the upload panel.  
![image36][]  

- Enter a comment about your edits and click **Save**.  

> If you have edited the same feature (point, way or area) at the same time as another person was editing it, you will receive a warning that your edits cannot be uploaded until you have resolved the **conflicts** - choose whose edits to accept & upload your changes. *Resolving conflicts often involves accepting the other persons edits, in which case you will probably wish to return to the feature in question and edit again (**this time save soon after the edit to try to avoid a conflict again!**).*

Additional Information and Custom Tags
---------------------------------------

When you are editing an object, you will see a strip of icons at the bottom of the attribute panel. You can add additional information by clicking these icons:

- Adicionar elevação ![image37][]{: height="24px"}  
- Adicionar notas ![image38][]{: height="24px"}  
- Adicionar contactos / número de telefone ![image39][]{: height="24px"}  
- Adicionar etiqueta de fonte ![image40][]{: height="24px"}  
- Adicionar website ![image41][]{: height="24px"}  
- Adicionar informação de acessibilidade ![image42][]{: height="24px"}  
- Adicionar link Wikipédia ![image43][]{: height="24px"}  

Or, you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- This will show all the tags attached to the feature.  
![image45][]  
- Click the plus sign (+) to add keys and values or click the trash icon to delete tags.

iD versus JOSM
---------------  

**o iD é bom para...**

- When you are doing simple edits  
- When you have fast Internet to load the imagery and save the edits  
- When you want to be sure to follow a consistent and simple tagging scheme  
- When you are restricted from installing a program on the computer you are using

**o JOSM é melhor...**

- When you are adding many buildings (See buildings_tool plugin)
- When you are editing many polygons or lines that already exist
- When you are on an unreliable Internet connection or offline
- When you are using a specific tagging scheme (or custom presets)

[^fieldpaper]: There is a [section of LearnOSM](/en/mobile-mapping/field-papers/) giving more information about Field Papers.




[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png