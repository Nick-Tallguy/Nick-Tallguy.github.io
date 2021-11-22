---
layout: doc
title: Resolución de Conflicto JOSM
permalink: /es/josm/josm-conflict-resolution/
lang: es
category: josm
---

Resolución de Conflicto JOSM
====================

> Revisado 2016-09-27  

Algunas veces está trabajando en JOSM y cuando sube todas sus hermosas ediciones, obtiene un desagradable mensaje que se queja de algún conflicto.  
![conflicto detectado][]  
Lo que ocurrió es que descargaste un montón de datos, que incluían un punto que llamaremos Nodo A. Luego, mientras editabas, otra persona también descargó el Nodo A, lo cambió, y guardó los cambios de nuevo en OpenStreetMap. Ahora, cuando intentas subir tu versión del Nodo A, es diferente de la que se guardó en OSM. Por lo tanto, JOSM no sabe qué versión del Nodo A debe ser guardada.  

Conflictos
----------

Algunas veces, JOSM es capaz de arreglárselas por su cuenta con conflictos, y le dará un mensaje como este:  
![resuelto automáticamente][]  
Esto significa que JOSM ha decidido automáticamente que los elementos de su conjunto de datos local no se subirán al servidor principal porque ya han sido borrados por otro usuario. En algunos conflictos, sin embargo, no hay una acción fácil para JOSM, por lo que deja la decisión en manos del usuario para determinar cuál es el mejor curso de acción. Esto significa que es usted quien debe resolver los conflictos.  

Esto le dice que mire todos sus conflictos en la Capa 1 en la caja **Lista de Diálogo**:  
![warning unresolved][]  

Esta ventana le avisa de si es probable que se produzca un conflicto con sus ediciones. Si lo comprueba en el servidor, podrá solucionar los problemas de edición que pudieran surgir:  
![check on server][]  

Esta advertencia le indica que JOSM no ha podido eliminar un nodo debido a que todavía está referenciado de alguna manera. Para remediarlo, el usuario tiene que volver a entrar en JOSM y resolver el conflicto antes de cargar los datos:  
![aún en uso][]  

Resolución de conflicto
--------------------

El proceso de resolver un conflicto es bastante simple, aunque puede parecer confuso al principio en JOSM. Básicamente, para cada conflicto JOSM le presentará dos opciones - su versión de un objeto y la que está en el servidor. Tienes que elegir si quieres mantener tu versión, o si la nueva versión en el servidor debe permanecer.  
Puede que pienses: "¡claro que mi versión va a ser mejor!". Y puede que tengas razón. Pero piense en nuestro ejemplo del principio de este capítulo. Quizás mientras estabas ocupado editando, otro mapeador añadió mucha información a uno de los nodos de tu conjunto de datos. Si eliges tu versión en lugar de la suya, perderás toda esa valiosa información que ellos añadieron. Por lo tanto, deberías considerar mantener su versión, o fusionarla con la tuya.  
Cuando aparezca una ventana de conflicto, lo mejor es elegir el botón "Sincronizar... sólo". Es posible que tenga que hacer esto para más de un objeto, pero es mejor resolver los conflictos de uno en uno.  
![sincronizar nodo][]  
Una vez que haga clic en este botón, obtendrá una ventana emergente que detalla su conflicto. El mensaje de error puede parecer complicado, pero es bastante sencillo. Sabrá qué tipo de conflicto tiene por el símbolo del cuadrado rojo en la pestaña superior. El conflicto en el siguiente ejemplo se refiere a las propiedades, como la ubicación y la existencia del objeto. Por eso aparecen las coordenadas y el estado de borrado.  

**Tipos de conflicto:**

- **Propiedades:**  El objeto ha sido movido (coordenadas) o eliminado  
- **Etiquetas:**  Etiquetas no coinciden  
- **Nodos:**  Hay una diferencia en la lista de nodos de dos maneras  
- **Miembros:**  Hay una diferencia en la lista de miembros en una relación  
![propiedades con conflictos][]  

Los conflictos sólo aparecen con dos ediciones diferentes a la vez. Si hay tres o más conflictos, entonces aparecerá una cadena de conflictos. Por lo tanto, tiene que elegir o fusionar sólo dos conflictos a la vez. Puede elegir su versión, la otra versión o, a veces, fusionar las dos.  

En el siguiente ejemplo no tiene la opción de fusionar. Haga clic en la primera columna, o en Mi versión si cree que sus ediciones son correctas. Haga clic en Su versión si cree que las otras ediciones son mejores.  
![conflictos resueltos][]  

Una vez que hayas seleccionado la versión que consideres mejor, haz clic en "Aplicar resolución". Aparecerán algunas ventanas más y estarás en camino de poder subir tus ediciones. Realiza algunas ediciones más. A continuación, haz clic en "Cargar". Aparecerá una ventana emergente que dice  
![pila de comando][]  

En el menú de Windows tiene una ventana de diálogo de la lista de conflictos. Esta ventana muestra una lista de conflictos. El número total de conflictos no resueltos se muestra en la cabecera. Puede seleccionar o resolver un conflicto haciendo clic sobre él. Esto es útil cuando tiene muchos conflictos que resolver.  
![uno sin resolver][]  
No puede subir sus cambios hasta que la lista esté vacía.  

Maneras de Evitar Conflictos
------------------------

### Subir Frecuentemente

Para minimizar la posibilidad y el número de conflictos es importante subir tus ediciones con regularidad. Los conflictos aparecen con más frecuencia para aquellos que tienden a guardar el área en la que están trabajando en su servidor local y esperar un tiempo para subirla. Lo mejor es descargar el área en la que estás trabajando, editarla y subirla inmediatamente. Cuanto más tiempo pase entre la descarga de datos y la subida de los mismos, más probable es que alguien haya editado algo mientras tanto. Si estás en un Mapathon y editando un elemento como una carretera en la que pueden trabajar otros, sube los datos con mucha frecuencia, quizás cada 6 ediciones.  

### Modificar en el área que descargó

Editar en el área específica que ha descargado minimiza el riesgo de conflicto. Asegúrese de no editar fuera del área que ha descargado. Puedes ver fácilmente qué áreas están fuera de tu área de descarga en JOSM, porque el fondo está formado por líneas diagonales en lugar de ser negro sólido.  

![Modificar en el área exterior][]  

Resumen
--------
Cuando edita en JOSM, corre el riesgo de encontrarse con conflictos. Los conflictos se producen cuando un objeto ha sido editado por dos personas en un momento similar. Si entiende lo que es un conflicto y cómo solucionarlo, podrá asegurarse de que se guardan las mejores ediciones posibles en OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
## Apéndice. Más conflictos específicos

### Conflictos de Etiqueta

Si las etiquetas de una versión de los objetos son diferentes de las etiquetas de
otra versión, el cuadro de diálogo de Conflicto muestra una ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)en
la pestaña Etiquetas. Clic en la pestaña muestra el cuadro de diálogo para resolver las mismas
conflictos.

Hay tres tablas mostradas en este cuadro de diálogo, de izquierda a derecha:

1.  Mi versión: muestra las etiquetas de la versión del primer objeto participando
    en este conflicto. Estas son usualmente las etiquetas del objeto 
    en su conjunto de datos local.
2. Versión fusionada: muestra las etiquetas fusionadas. Esta tabla está inicialmente
    vacío. Cuantos más conflictos de etiquetas resuelva, los valores de las etiquetas 
    será mostrado en esta tabla.
3. La versión de ellos: muestra las etiquetas de la segunda versión del objeto
    participando en este conflicto. Estas son usualmente las etiquetas de 
    versión del objeto actualmente guardado en el servidor.

En el ejemplo siguiente, ambas versiones tienen una etiqueta "nombre". Los valores de la etiqueta
dos versiones del objeto son diferentes, sin embargo, y JOSM por lo tanto muestra
la fila con fondo rojo. El valor de la primera versión es
"Escuela Secundaria", la versión opuesta tiene un valor "Escuela
Primaria". Ahora tiene que decidir cuál de estos valores quiere mantener
y cual desea descartar.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Haga clic en el valor que desea conservar, en el ejemplo por ejemplo en el
a la izquierda. Si hace doble clic en el valor o hace clic en
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), decides si mantener el valor y descartar el
valor opuesto. La tabla del centro muestra ahora el valor a mantener
y el color de fondo se vuelve verde.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

Cuando el botón Aplicar Solución está activado, puede aplicar su decisión.
Se aplicarán los valores elegidos y se cerrará el diálogo.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Resolver las diferencias en la lista de nodos de dos versiones de un camino

Si ve el símbolo ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png) en la pestaña Nodos entonces
tiene que resolver diferencias en la lista de
[nodos](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)de dos
[vías](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). Allí
son tres columnas en el panel respectivo (véase la captura de pantalla siguiente):

1. la tabla de la izquierda muestra la lista de nodos del local
    versión de objeto
2. la tabla de la derecha muestra la lista de nodos del servidor
    versión de objeto
3. la tabla del centro muestra la lista de nodos de las vías fusionadas

Inicialmente, la tabla central está vacía. Ahora debe decidir qué nodos
para mantener del conjunto de datos local (la tabla más a la izquierda) y cuál del
conjunto de datos del servidor (la tabla más a la derecha).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### El flujo de trabajo estándar

El flujo de trabajo estándar para resolver conflictos en las listas de nodos de dos
[objeto
versiones](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)consiste
de tres pasos:

1. Elige los nodos de cualquiera de las dos versiones del objeto y reordena el nodo resultante
    listar si es necesario
2. Congele la lista de nodos fusionados resultante haciendo clic en el botón
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). Cuando se congela la lista de nodos fusionados se
    indica a JOSM que todos los conflictos de la lista de nodos están resueltos.
3. Aplicar la resolución

### Un flujo de trabajo simple: Mantenga la lista de nodos de su versión local del objeto

El siguiente ejemplo muestra el flujo de trabajo cuando se decide mantener todos los nodos en el mismo orden de la versión local del objeto.

- En primer lugar, seleccione todos los elementos de la tabla de la izquierda (con el ratón o 
    pulsando Ctrl-A en la tabla) (véase la siguiente captura de pantalla):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

- Luego, clic 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    para copiar los nodos seleccionados en la tabla central con los nodos fusionados:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

- Finalmente, clic
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    para congelar la lista de nodos fusionados resultante:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    El símbolo en la pestaña de nodos ahora cambió a 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    y puede aplicar las decisiones de fusión.

### Soporte para comparar listas de nodos

Puede ser difícil encontrar las diferencias entre la lista de nodos de dos versiones de objetos, en particular para las vías con muchos nodos.

El Diálogo de Conflicto le ayuda a encontrar las diferencias. Puede comparar dos de las listas de nodos mostradas ("mi" lista de nodos, la lista de nodos fusionados y "su" lista de nodos) y puede representar las diferencias entre ellas con colores de fondo específicos.

En el siguiente cuadro combinado puede seleccionar qué par de listas de nodos desea comparar:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1. Mi con Su de ellos: compara la tabla más a la izquierda con la tabla más a la derecha
    en el Diálogo de Conflicto
2. Mi con Fusionado: compara la tabla más a la izquierda con la tabla del medio en
    el Diálogo de Conflicto
3. Su de ellos con Fusionar: compara la tabla del medio con la tabla de la derecha
    en el Diálogo de Conflicto

Dependiendo de la posición de un nodo en la lista, diferentes fondos
colores son usados:

1. El nodo sólo está en esta lista. No está presente en la lista opuesta:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2. El nodo está en ambas listas, pero en posiciones diferentes:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3. El fondo blanco significa que un nodo está en ambas listas al mismo tiempo
    posición.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->

[conflicto detectado]: /images/josm/conflict-detected.png
[resuelto automáticamente]: /images/josm/resolved-automatically.png
[aviso de no resuelto]: /images/josm/warning-unresolved.png
[revisar en el servidor]: /images/josm/check-on-server.png
[aún en uso]: /images/josm/still-in-use.png
[sincronizar nodo]: /images/josm/synchronize-node.png
[propiedades con conflictos]: /images/josm/properties-with-conflicts.png
[conflictos resueltos]: /images/josm/conflicts-resolved.png
[sincronizar nodo]: /images/josm/synchronize-node.png
[pila de comando]: /images/josm/command-stack.png
[uno sin resolver]: /images/josm/one-unresolved.png
[edición fuera del área]: /images/josm/edit-outside-area.png