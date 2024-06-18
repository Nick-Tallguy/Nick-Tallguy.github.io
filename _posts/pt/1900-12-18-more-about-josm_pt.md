---
layout: doc
title: O processo de edição do JOSM
permalink: /pt/josm/more-about-josm/
lang: pt
category: josm
---

O processo de edição do JOSM
========================


Na secção anterior instalou o JOSM e começou a desenhar os seus primeiros pontos, linhas e formas. Adicionou modelos de etiquetas a estes objetos para anexar informações sobre eles. No final, foi capaz de desenhar o seu próprio mapa no JOSM.

Isto foi uma boa prática e agora estamos prontos para editar o OpenStreetMap.

Nesta secção, vamos olhar mais de perto para a interface do JOSM e ver como podemos utilizá-lo para editar o mapa no OpenStreetMap.

O ciclo de edição
---------------------
Editar o OpenStreetMap com o JOSM é semelhante à edição com o editor iD que vimos anteriormente. Mas como o JOSM é uma aplicação de ambiente de trabalho, funciona de forma um pouco diferente. O processo de edição e adição ao OpenStreetMap com o JOSM será sempre o seguinte:

1.  **Descarregar** os dados do mapa atual do OSM
2.  **Editar** utilizando imagens de satélite, GPS, documentos de campo e notas como guia
3.  **Guardar** alterações no OpenStreetMap

Descarregar dados OSM
--------------------
O primeiro passo de edição é descarregar os dados para a área do mundo que queremos melhorar. Lembre-se que tem de fazer isto sempre que quiser fazer alterações ao mapa, porque o mapa é frequentemente atualizado por outros utilizadores.

-   Clique em "Ficheiro" no canto superior esquerdo do JOSM e clique em "Descarregar dados…". Isto abrirá a janela de descarregar. Pode aceder a esta janela de forma mais simples clicando no botão de descarregar, mostrado aqui:

![JOSM Download Button][]

-   Quando a janela de transferência se abrir, deverá ver um mapa. Se não vir o mapa, clique no separador "Mapa visual".

![JOSM Download Dialog][]

-   Utilize o rato para deslocar e ampliar o mapa para uma área que conhece muito bem, como a sua cidade natal ou bairro. Os controlos são os mesmos que na janela do mapa JOSM. O botão direito do rato permite-lhe arrastar o mapa e a roda de deslocamento permite-lhe aumentar e diminuir o zoom.

> Por vezes, se estiver a trabalhar num computador portátil, pode ser difícil aumentar e diminuir o zoom ou deslocar a área de visualização. Trabalhar no JOSM é muito mais fácil se tiver um rato, mas a maioria dos computadores portáteis modernos permite-lhe deslocar-se utilizando o painel tátil (touchpad).

-   Desenhe uma caixa à volta da área que pretende descarregar. Para desenhar uma nova caixa, clique no mapa, mantenha o botão esquerdo do rato premido e arraste o rato para criar uma caixa. Solte o botão do rato para terminar de desenhar a caixa.
-   Quando estiver satisfeito com o tamanho e a localização da caixa, clique em "Descarregar" na parte inferior da janela. O JOSM obterá os dados para esta área a partir do OpenStreetMap e abri-los-á na sua janela do mapa para edição.

### Adicionar imagens aéreas
Se acompanhou o processo quando adicionámos os nossos primeiros pontos com o editor iD, lembra-se que por baixo dos dados do mapa havia uma imagem de satélite que nos ajudou a identificar os objetos no solo. Esta imagem era do Microsoft Bing, que generosamente fornece as suas imagens para os utilizadores do OpenStreetMap referenciarem enquanto contribuem para o mapa.

-   Para adicionar as imagens de satélite do Bing no JOSM, clique em "Imagens de fundo" no menu superior do JOSM e selecione "Bing - imagens aéreas".

> Se não vir o "Bing - imagens aéreas" no menu "Imagens de fundo", poderá ter de o ativar nas preferências do JOSM. Vá a Editar -> Preferências, clique no separador "Imagens aéreas".
>
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
>
> Selecione "Bing - imagens aéreas", clique no botão "Ativar" e por fim no botão "OK".


### Passeio pelo JOSM
Agora que descarregámos os dados do OpenStreetMap e adicionámos as imagens de satélite do Bing, vamos dar outra vista de olhos à interface do JOSM.

![JOSM layout][]

A janela principal, com a qual já está familiarizado, é a janela do mapa e é onde a maior parte da ação tem lugar. Aqui pode ver, editar e adicionar dados ao OpenStreetMap.

À direita da janela do mapa existe uma série de painéis, cada um com a sua própria função. Normalmente, quando instala o JOSM pela primeira vez, vários painéis são mostrados por defeito, tais como Camadas, Etiquetas / membros e Seleção. Quando seleciona um ponto, linha ou forma na janela do mapa, este é apresentado no painel Seleção. As informações sobre o objeto serão mostradas no painel Etiquetas / membros e o nome de utilizador do autor desse objeto será mostrado no painel Autores.

Estes painéis podem ser abertos ou fechados clicando nos vários botões no canto inferior esquerdo do JOSM. Por cima destes botões, no canto superior direito, existem ferramentas que alteram o que pode fazer com o rato. Já está familiarizado com algumas delas, a ferramenta Selecionar e a ferramenta Desenhar. Abaixo destas estão as ferramentas que facilitam a ampliação, a eliminação de um objeto, o desenho de uma forma ou a criação de uma linha paralela a outra linha.


Editar
----
So we have completed step one of the editing process - Downloading. We have prepared JOSM with satellite imagery as a reference. The next step is to edit the map and add new items.

Depending on the area that you chose to download, there may be a lot or very little existing map data. But notice that it is the same sort of data that we have seen previously - points, lines, and shapes that represent real-life locations.

-   Use the techniques you have already learned to add a couple points to the map of places that you know. If you see any mistakes, try to fix them.
-   You don't need to be too aggressive while you are learning. If you are unsure about something it's better to leave it as it is.
-   If you want to move a point, line, or shape, use the **select tool**. Click on an object and drag it where it should be. This can be used to correct the location of items that have been put in the wrong place.

![JOSM select tool][]

-   Use the **draw tool** to draw new points, lines, and shapes. Describe these objects by selecting from the Presets menu, as you did in the previous section.

> Never edit the map outside of the area you have downloaded. You can see the rectangular area you have downloaded has a solid background, while the area you have not downloaded has diagonal pinstriped lines.
>
> ![JOSM area downloaded][]

Save Changes
--------------
The third and final step to complete our edits is to upload the changes we have made to the OpenStreetMap database. To save the changes, we must be connected to the internet.

-   Click “File” on the top menu, and then click “Upload Data”. This will open up the upload window. You can access this window more simply by clicking on the upload button, shown here:

    ![JOSM Upload Button][]

-   The window that appears shows a list of the objects that you are adding and the objects you are modifying or deleting. In the box at the bottom you are asked to provide a comment about the changes that you are making. Type in here a description of your edits.

    ![JOSM Upload Dialog][]

-   Click “Upload Changes”.

-   If this is your first time saving changes to OpenStreetMap, you will be asked for your OpenStreetMap username and password.
-   Enter them in the window that appears. If you check the box in this window, your username and password will be saved and you won’t need to enter them again in the future. Click “Authenticate”.

    ![JOSM Authenticate][]

-   You will need to wait a few seconds for your changes to be uploaded, and then you are done! You have edited the map on OpenStreetMap.

> When you are editing, always be sure to upload your changes before you close JOSM. Even if you still have more editing to do, upload your changes, and then go through the process again later when you have time to edit. You don't want to lose your work!

See your changes on the map
---------------------------
-   Open your internet browser and go to [http://openstreetmap.org/](http://openstreetmap.org/)
-   Move the map to the area that you edited.
-   You should see your changes now appearing on the map! If you don’t, try pressing CTRL+R to refresh the web page. Sometimes the map doesn’t update properly and needs to be reloaded.
-   What if you don’t see your changes? Don’t worry - it may take a few minutes for the changes to be shown on the map. Also, check your additions in JOSM to make sure that you added them correctly. A good general rule is, if your point has an icon in JOSM, then it should be seen on the main map at the OpenStreetMap website.

Sumário
-------
Now that you’ve seen how to add to OpenStreetMap, what’s next? Well, editing is great, but it's not the only aspect of making maps. Of course you also need to learn how to go outside and collect information about places on the ground.


[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png