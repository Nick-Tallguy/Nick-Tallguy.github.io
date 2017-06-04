---
layout: doc
title: Ferramentas JOSM
permalink: /pt/josm/josm-tools/
lang: pt
category: josm
---

Ferramentas de Edição do JOSM
==================

> Este guia pode ser descarregado como [josm_josm-tools_pt.odt](/files/josm_josm-tools_pt.odt) ou [josm_josm-tools_pt.pdf](/files/josm_josm-tools_pt.pdf)  
> Revisto em 2015-07-14  

O [guia de começar a usar o JOSM](/pt/josm/start-josm/) abarca o básico de desenhar no
JOSM, mas existem muitas ferramentas e técnicas que não estão demonstradas.

Aqui iremos ver algumas ferramentas básicas e técnicas disponíveis
para desenhar características do mapa no JOSM, e nos capítulos seguintes iremos
ver em maior detalhe ferramentas avançadas de desenho.

Obter o Ficheiro de Exemplo
-------------------

-   Se quiser acompanhar e praticar a utilização das ferramentas do JOSM, descarregue
    [tools_menu_sample.osm](/files/tools_menu_sample.osm).
-   Inicie o JOSM e abra o ficheiro. Deve ser parecido com algo como isto:

![tools_menu_sample.osm][]

Ferramentas de desenho
-------------

Se clicar no menu "Ferramentas" na parte de cima do JOSM, verá que existem
no menu numerosas funções que podem ajudar a desenhar linhas e formas geométricas
e a editar os objetos no mapa.

O JOSM tem algumas ferramentas adiconais para tornar mais fácil
desenhar linhas e formas geométricas. Estas ferramentas encontram-se no menu "Ferramentas" na
parte de cima do JOSM.

![Tools menu][]

Para aplicar as ferramentas neste menu, é necessário primeiro selecionar
um nó, linha ou forma geométrica na janela do mapa. Um ficheiro de exemplo
contém vários elementos com nomes de diferentes ferramentas no menu.

-   Tente selecionar um dos elementos no ficheiro. Então aceda ao menu Ferramentas
    e clique na função que é identificada ao lado do elemento que
     selecionou.
-   Por exemplo, clique no círculo para o selecionar.

![Align nodes in circle][]

-   Next, go to Tools->Align Nodes in Circle.
-   The badly drawn circle will become more circular.

Experiment with each of the tools using this sample file. A description of
some of the tools is provided below.

1.  **Split Way:** This allows you to divide a line into two separate lines.
    This is useful if you want to add different attributes to different
    parts of a road, such as a bridge. To use this function, select a
    point in the middle of the line that you want to split, select Split
    Way from the Tools menu, and your line should be split in two.

2.  **Combine Way:** This does the opposite of Split Way. To combine two
    lines into a single line, they must share a single point. To use
    this function, select both lines that you want to combine. You can
    select more than one object by holding the SHIFT key on your
    keyboard and clicking on each line. When you have selected both
    lines, select Combine Way from the Tools menu.

    ![Combine way][]

    If you are combining roads that have different directions, you
    might get this warning:

    ![Reverse and combine][]

    If the roads are connected and go in the same direction, then choose
    "Reverse and Continue."

3.  **Reverse Way:** This will change the direction of the line. All lines in
    OSM have a direction, which is shown in JOSM by the arrows on the line.
    Direction doesn't usually matter, except in the case of one way roads and
    rivers that flow in a certain direction. In these cases you may need to
    reverse the way so that it goes in the correct direction.

    ![Way direction][]

4.  **Simplify Way:** If your line has too many points in it and you’d like
    to make it simpler, this will remove some of the points from a line.

    ![Simplify way][]

5.  **Align Nodes in Circle:** If you are trying to make a
    circular shape, draw the circle as best you can and then select it.
    This function will help arrange your points in a circle.

6.  **Create Circle:** Alternatively, use can use this tool, which
    will create a more perfect circle. Draw a line which represents the
    diameter of your circle, and then apply this tool.

    ![Create circle][]

7.  **Align Nodes in Line:** This function will align a series of points
    into a straight line.  With long lines it is best to select sections
    of the line to straighten.  Be careful as this does have the
    tendency to shift the line a little bit.

    ![Align nodes in line][]

8.  Orthogonalize Shape: This function is very useful for drawing
    regular shapes such as buildings. After you draw an area, this
    function will reshape it to have square corners.

    ![Orthagonalize][]

9.  Unglue way: This tool allows you to detach nodes that are
    connected. It is useful when two object share a node when they should
    not. For example, a common mistake is for a road to share a node
    with the corner of a building. Of course roads don't run into buildings
    usually, so this is a mistake, and you can unglue the objects from one
    another.

    ![Unglue way][]

    > The line and node will not actually appear separate until you move them.

Atalhos de Teclado
------------------

Once you start editing a lot you will realize that you waste a lot of time
clicking on menus and submenus. To overcome this, JOSM has keyboard shortcuts
for just about everything.

This means that instead of clicking an object and then going through a lengthy
menu process, you can simply select the object and press a key on your keyboard.

All of the tools mentioned in the previous section have shortcut keys, which are
listed on the Tools menu to the right of each tool name. For example, "O" is the
shortcut key to align nodes in a circle. "L" is the shortcut to align them in a line.
It can take some time to learn the shortcut keys, but you will find that it saves
a lot of time in the long run.

Here are other shortcut keys (in **bold**) which are some of the most important.

1.  Activate the Select Tool - **S**
2.  Activate the Draw Tool - **A**
3.  Activate the Zoom Tool - **Z**
4.  Delete the selected object(s) - **Delete**
5.  Zoom In - **+**
6.  Zoom Out - **-**


Scale and Rotate
----------------

A common question is how to rotate a line or shape after it has
been drawn.

-   To rotate an object, first select it.
-   Hold **SHIFT+CTRL** on your keyboard.
-   Click and drag the mouse to rotate.

![Rotate demo][]

To scale an object (make it bigger or smaller), follow the same
process, but hold ALT+CTRL instead.

These instructions are displayed on the information bar at the bottom of JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png