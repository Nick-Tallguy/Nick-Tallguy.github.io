---
layout: doc
title: Guía del Administrador de Tasking Manager
permalink: /es/coordination/tm-admin/
lang: es
category: coordination
---

# Guía del Administrador de Tasking Manager


**Si la interfaz de usuario de la versión que utiliza se ve diferente a la descrita aquí, entonces debe consultar [nuestra descripción de la versión](/es/coordination/tm-disambiguation)**

Índice por secciones
-------------
-  [Inicio de sesión y acceso](/en/coordination/tm-admin/#login-and-access)
-  [Permisos](/en/coordination/tm-admin/#permissions)
-  [Crear un proyecto](/en/coordination/tm-admin/#create-a-project)
    -  [Definir área de mapeo](/en/coordination/tm-admin/#define-mapping-area)
    -  [Definir tareas](/en/coordination/tm-admin/#define-tasks)
    -  [Avanzado: Definir tareas con datos importados](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-data)
    -  [Recorte del área del proyecto](/en/coordination/tm-admin/#project-area-trim)
    -  [Dele nombre al proyecto](/en/coordination/tm-admin/#name-the-project)
-  [Editar un proyecto](/en/coordination/tm-admin/#edit-a-project)
    -  [Descripción: lo primero que los usuarios conocen de su proyecto](/en/coordination/tm-admin/#description)
    -  [Instrucciones - qué deben hacer los usuarios](/en/coordination/tm-admin/#instructions)
    -  [Metadatos - al que pertenece el proyecto](/en/coordination/tm-admin/#metadata)
    -  [Áreas prioritarias - donde los usuarios deben empezar a mapear](/en/coordination/tm-admin/#priority-areas)
    -  [Imágenes: la base de la cartografía](/en/coordination/tm-admin/#imagery)
    -  [Permisos - quién puede asignar y validar](/es/coordinación/tm-admin/#permisos)
    -  [Ajustes](/en/coordination/tm-admin/#settings)
    -  [Acciones](/en/coordination/tm-admin/#actions)
    -  [Editor personalizado](/en/coordination/tm-admin/#custom-editor)
    -  [Guardar y probar](/en/coordination/tm-admin/#save-and-test)
    -  [Publicar](/en/coordination/tm-admin/#publish)
-  [Gestión de proyectos](/en/coordination/tm-admin/#project-management) 
    -  [Sea receptivo](/en/coordination/tm-admin/#be-responsive)
    -  [Proyectos de secuenciación](/en/coordination/tm-admin/#sequencing-projects)
    -  [Ciclo de vida del proyecto](/en/coordination/tm-admin/#project-lifecycle)
-  [Información adicional](/en/coordination/tm-admin/#additional-information)
    -  [Consideraciones sobre las imágenes](/en/coordination/tm-admin/#considerations-concerning-imagery)

El Administrador de Tareas es la herramienta esencial para coordinar la cartografía en OpenStreetMap. Apoya las iniciativas de cartografía humanitaria, la realización de mapatones o la creación de tareas de cartografía para estudiantes. La aplicación divide un área de interés en trozos geográficos manejables que pueden completarse rápidamente y en colaboración. Este enfoque permite distribuir las tareas entre muchos cartógrafos individuales, reduciendo al mismo tiempo los posibles conflictos de edición. 

El software fomenta la obtención de datos cartográficos precisos y de calidad proporcionando un conjunto coherente de instrucciones para sus cartógrafos (por ejemplo, "cartografiar todas las carreteras y edificios"). En resumen, el Administrador de Tareas es la forma de configurar y dirigir el flujo de trabajo de las actividades cartográficas abiertas. 

Esta guía describe la administración básica del Administrador de Tareas. Cubre las instrucciones para crear y modificar proyectos de mapeo y manejar los permisos para el mapeo y la revisión de los datos de crowdsourcing.

## Inicio de sesión y acceso

Para acceder al Administrador de Tareas se necesita una cuenta de OpenStreetMap (OSM). Puedes visitar el [HOT Administrador de Tareas](http://tasks.hotosm.org), o cualquier otra instancia comunitaria de tu preferencia. Allí haga clic en `Sign up` y le redirigirá al [sitio web de OpenStreetMap](https://www.openstreetmap.org) para crear su cuenta. O haz clic en `Log in` si ya tienes una, y en la ventana emergente puedes dar al Administrador de Tareas acceso limitado a tu cuenta de OSM.

## Permisos

El nivel de usuario más básico es el de **mapeador**. Los mapeadores son capaces de entrar en el Administrador de Tareas para encontrar y seleccionar un proyecto de mapeo en el que trabajar. Toda la funcionalidad del mapeador se describe en la [Guía del mapeador del Administrador de Tareas de LearnOSM](/es/coordinación/tm-user/). Tenga en cuenta que algunos proyectos, como los que están en estado de borrador (es decir, sin publicar), o restringidos a ciertos equipos, no son visibles para los mapeadores habituales. 

Todos los permisos especiales son manejados por *organizaciones* y *equipos*. Una **organización** es el paraguas principal, y bajo cada organización se pueden crear proyectos y equipos de mapeo. Una organización puede representar a un usuario de datos como una organización humanitaria, o cualquier comunidad de OpenStreetMap. Si necesita configurar su organización en el Administrador de Tareas, póngase en contacto con los responsables técnicos de la instancia del Administrador de Tareas. Consulte [HOT Organizaciones de Administrador de Tareas](https://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team/HOT_Tasking_Manager_Organizations) para ver una lista de las organizaciones que están presentes en el Administrador de Tareas de HOT. Si su comunidad u organización no está en la lista y le gustaría crear proyectos en el Administrador de Tareas de HOT, por favor, rellene [este formulario](http://bit.ly/HOTTasking) para registrar su interés. 

Cada organización tiene uno o más **gestores**. Tienen permiso para crear y modificar los proyectos asociados. Se puede acceder a todas las opciones de los gestores a través de la sección `Gestión` en la navegación principal.

Los responsables de una organización pueden crear **equipos**. Los equipos son grupos de usuarios de OpenStreetMap y pueden ser públicos o privados. También tienen uno o más gestores de equipo. Los equipos pueden configurarse de manera que los usuarios puedan unirse a un equipo por sí mismos o 'sólo por invitación', lo que significa que los gestores del equipo son notificados sobre las solicitudes de adhesión y deben decidir sobre ellas.

Para cada proyecto, los administradores pueden asignar equipos específicos para conceder o restringir el acceso a la cartografía, definir quién puede validar los datos o quién más puede editar los metadatos del proyecto.

## Crear un proyecto

Haga clic en `Administrar` en la navegación de la parte superior. En la primera fila verá un espacio para 'Proyectos'. Al lado, haga clic en el botón `Añadir` para crear uno.

![TM Add Project][]

Puede elegir entre definir el área de interés (área cartográfica) de su proyecto cartográfico

* Opción 1: `Dibujar` el área de interés manualmente
* Opción 2: `Cargar archivo` para importar el área de interés como GeoJSON, KML o archivo shape comprimido

![TM Nuevo][]

### Definir el área de mapeo

* Opción 1: `Dibujar` el área de interés manualmente

1. Puede pasar de una capa de fondo a otra utilizando los botones en la parte superior.
1. Haga clic en el botón `Dibujar` de la izquierda.
2. Para dibujar un polígono que represente el área de mapeo en el marco del mapa, mantenga pulsado el botón derecho del ratón para mover el mapa sin hacer clic, lo que añadirá un nodo. El polígono debe enmarcar estrechamente el área de interés. Esto ahorra tiempo a la hora de completar los mosaicos que no son de interés (por ejemplo, el océano o el bosque).
3. Haga clic en su punto de partida para completar el polígono. <!--Después de completar un polígono puede mover los nodos o añadir otros nuevos para conseguir el área tal y como la quiere.-->

<br>

* Opción 2: `Cargar archivo` para importar el área de interés como GeoJSON, KML o shapefile comprimido

1. En el primer paso de la creación de un proyecto, haga clic en `Cargar archivo`.
2. Busque su archivo en la ventana de carga de archivos.
3. Haga clic en el nombre del archivo para resaltarlo y luego haga clic en "Abrir".
4. Las áreas de interés importadas no pueden ajustarse en el Administrador de Tareas.

Es posible que esté cargando un archivo que ya tiene las tareas (pequeños cuadros de asignación) predefinidas. Encontrará más información al respecto en la sección [Definir tareas con datos importados](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-data) más abajo.

> NOTA: ¡El Administrador de Tareas tiene límites! El límite técnico máximo para un proyecto es de 5.000 km2, aunque para garantizar que su proyecto no tarde demasiado en completarse, intente mantenerlo por debajo de los 1.000 km2. Si necesitas cartografiar un área mayor que ésta, tendrás que crear varios proyectos. Podrás ver el tamaño del proyecto en la esquina inferior izquierda de la vista previa del mapa. 

### Definir tareas

Una vez definida el área de mapeo global, se va a dividir en áreas más pequeñas llamadas *Tareas*. Debe considerar el tamaño de las tareas de su proyecto con mucho cuidado. Los proyectos bien diseñados tienen tamaños de tarea apropiados, lo que permite completarlos con la mayor eficiencia posible. 

![TM Tamaños de Teselas][]

El área del proyecto se divide automáticamente en casillas de la cuadrícula y cada casilla se convierte en una tarea. Utilice los botones `Mayor` y `Menor` para ajustar el tamaño total de las casillas de la tarea. El tamaño de la tarea por defecto es probablemente demasiado grande. Cuando modifique el tamaño de la tarea, tenga en cuenta el tamaño de la tarea que aparece a la izquierda junto a 'El tamaño de cada tarea es de aproximadamente ... km2'.

Tómese su tiempo y establezca el tamaño de las tareas con mucho cuidado. Intente reducir el tamaño de la tarea hasta el punto en que crea que un cartógrafo seguro tardaría **15 minutos en completarla**. El tamaño óptimo de la tarea depende totalmente de las características que se les pida a los cartógrafos que identifiquen y de la densidad de dichas características. Por ejemplo, un proyecto de cartografía de carreteras en una zona rural tendría tareas mucho mayores que un proyecto que implique la digitalización de edificios en un asentamiento denso.

> Acérquese y active las imágenes de Bing para determinar un buen tamaño de la tarea. Puedes cambiar entre varias capas de mapa de fondo con los botones de la parte superior del mapa.

Después de haber ajustado el tamaño total de la tarea, puede dividir selectivamente ciertas tareas en cuatro más pequeñas con el botón `Clic para dividir`. O puede `Dibujar un área para dividir`, y le permitirá dibujar un polígono sobre un área para dividir todas las tareas dentro de ella. Estas funciones son especialmente útiles si la densidad de la característica que desea mapear varía en el área de su proyecto. Por ejemplo, puede haber una zona costera densamente construida que necesite tareas pequeñas y una zona rural interior que necesite tareas mucho más grandes. El botón `Reset` eliminará todas las divisiones personalizadas.

Consideraciones para decidir el tamaño de las tareas:
-  Las tareas pueden dividirse, pero no hay opción de volver a fusionarlas una vez creado el proyecto.
-  Una vez que se ha creado un proyecto, la división de tareas requiere mucho tiempo y tiene que hacerse tarea por tarea.
-  En los bordes y esquinas de las tareas, hay un mayor potencial de conflictos entre mapeadores vecinos. Las tareas más pequeñas implican más esquinas y bordes. El tamaño de las tareas tiene que facilitar el trabajo de los cartógrafos, pero sin que se produzcan conflictos entre ellos.
-  Las tareas pequeñas son más fáciles de mapear, pero un mayor número de tareas significa que los mapeadores deben dedicar más tiempo a actualizar el estado de cada una, por lo que los proyectos con tareas demasiado pequeñas pueden resultar ineficaces.
-  Los mapeadores principiantes necesitan aproximadamente cuatro veces más tiempo que los experimentados.
-  Los cartógrafos principiantes tienen que desarrollar un ojo para las imágenes de satélite. Puede ser difícil encontrar los objetos espaciales correctos.

Una vez que esté satisfecho con el tamaño de sus tareas, haga clic en `Siguiente`.

### Avanzado: Definir tareas con datos importados

Si ha cargado un archivo para definir el área de su proyecto, ese archivo también puede contener las formas para las tareas individuales. Por ejemplo, un proyecto completado de MapSwipe que se centra en áreas pobladas o una cuadrícula compleja que ha creado previamente en QGIS. Si este es el caso, asegúrese de activar la opción "Establecer tareas utilizando polígonos cargados". Esto saltará directamente a la etapa de nombramiento de la creación del proyecto. 

![TM Nvos Polígonos][]

### Recorte del área del proyecto

![TM Trim][]

Después de determinar el tamaño de las tareas, tendrá la opción de recortarlas a la medida de su área de mapeo. Seguramente querrá hacer esto. Haga clic en `Recortar` para eliminar todos los cuadros de tareas que no se superpongan al área de su proyecto. 

![TM Recorte grueso][]

Si activa la opción "Recortar las tareas para definir el área de interés exacta para el mapeo" antes de hacer clic en `Recortar`, las partes de la tarea que se superponen en el borde de su área de interés se recortarán de forma brusca contra su área de interés.

![TM Recorte fino][]

El recorte brusco puede dar lugar a algunas tareas extremadamente pequeñas. Estas pequeñas tareas pueden confundir a los cartógrafos. Puede optar por eliminarlas seleccionando `Descartar` cuando vea el mensaje "Hay... tareas de menos de 2.000 m2. ¿Desea descartarlas?".

> Tome nota del número de tareas que tiene su proyecto (mire en la esquina inferior izquierda de su mapa). El límite técnico máximo para el número de tareas en un proyecto de Tasking Manager es de 5.000. Sin embargo, para garantizar que su proyecto no tarde demasiado tiempo en completarse, intente mantenerlo por debajo de las 1.000 tareas; si necesita mapear un área mayor, intente dividirla en proyectos más pequeños. 

Haga clic en `Siguiente`.

### Dele nombre al proyecto

El nombre de un proyecto es uno de sus aspectos más importantes a la hora de ser descubierto por el público en general. Intente incluir el nombre del país en el que se encuentra el proyecto (por ejemplo, Sudán del Sur), el motivo del mapeo (por ejemplo, Vacunación COVID) y también la ubicación más específica, tal vez el nombre del distrito o asentamiento (por ejemplo, el condado de Yambio). Por ejemplo, un nombre de proyecto completo podría ser _Sudán del Sur, Vacunación COVID, Condado de Yambio_. 

Asegúrese de que su organización está seleccionada en el campo 'Organización'. 

> Antes de completar esta etapa, asegúrese de que está satisfecho con el área de interés del proyecto y el número total de tareas, ya que estos elementos no pueden ajustarse posteriormente.

Haga clic en `Crear`. Su proyecto se creará pero no se publicará inmediatamente - primero se le dirigirá al menú de edición del proyecto. 

## Editar un proyecto

Ahora verá el menú 'Editar' de su proyecto. Antes de que el proyecto pueda ser guardado, necesitará ir a través del menú 'Editar' cuidadosamente para completar la configuración. Aquí tiene un resumen rápido de los submenús que verá en la parte izquierda:

- Descripción - Establezca el estado, la prioridad y la descripción de texto asociados a su proyecto.
- Instrucciones - Instrucciones detalladas sobre cómo trazar los objetos espaciales necesarios y abordar el proyecto.
- Metadatos - Define los objetos espaciales que necesitan ser mapeados. También incluye información utilizada para categorizar los proyectos, utilizada en el filtrado de proyectos.
- Áreas prioritarias - Le permite especificar las partes dentro del área del proyecto que deben ser mapeadas primero.
- Imágenes - Elija las imágenes que se cargarán de forma predeterminada cuando los voluntarios mapeen su proyecto. 
- Permisos - Le permite restringir el acceso al proyecto para la asignación y la validación.
- Configuración - Activar/desactivar editores alternativos como RapiD.
- Acciones: potentes acciones masivas que puedes realizar en tu proyecto, como clonar o eliminar.
- Editor personalizado - Añade un editor personalizado utilizando una URL

> Rellenar esta información cuidadosamente es una parte esencial del éxito de un proyecto cartográfico. Es especialmente importante que la descripción del proyecto y las instrucciones se comuniquen con claridad para que los cartógrafos sean conscientes de la importancia de la calidad de los datos y de las mejores prácticas. Hay que tener en cuenta que los colaboradores pueden no tener experiencia previa con OpenStreetMap y es poco probable que estén familiarizados con las directrices de etiquetado.

### Descripción

![Descripción TM][]

#### Estado

El primero es el estado del proyecto. Se puede establecer como **Borrador**, **Publicado** o **Archivado**.

- **Borrador** - Su proyecto comenzará en modo borrador. En este modo no será descubrible y no será posible que el público contribuya a él. Esto es perfecto mientras aún estás configurando tu proyecto y probándolo antes de su lanzamiento.
- **Publicado** - Cuando haya completado la configuración de su proyecto, lo haya probado y esté contento de que se publique y esté abierto para su mapeo/validación.
- **Archivado** - Todos los proyectos deberían acabar archivados. Los proyectos archivados son públicos pero están bloqueados para las contribuciones. Debería considerar archivar su proyecto si:
  - Está 100% mapeado y validado
  - Las instrucciones o las imágenes están sustancialmente anticuadas
  - El proyecto se creó hace más de un año
  - Los datos del mapa ya no son necesarios para fines humanitarios en la zona del proyecto

#### Prioridad

A continuación está la prioridad del proyecto. Esto dicta qué tan cerca del frente del Administrador de Tareas se verá el proyecto en la página de Explorar Proyectos. Puede establecerse como **Urgente**, **Alto**, **Medio** o **Bajo**.

- **Urgente** - Sólo se establece este estado si el proyecto es **en respuesta a una catástrofe y las necesidades de datos son inmediatas**. Muy pocos proyectos tienen este nivel de prioridad. 
- **Alto** - Para proyectos que no son necesariamente en respuesta a una catástrofe pero los datos se necesitan en un **plazo corto**. 
- **Medio** - Si los datos son necesarios pero no en un plazo especialmente corto.
- **Bajo** - Si quieres publicar tu proyecto pero no quieres que sea muy destacado. Tal vez prefieras compartir tu proyecto con grupos específicos utilizando la URL del proyecto.

#### Descripción corta

Añade al menos dos frases que describan brevemente tu proyecto. Esto es importante porque los voluntarios lo leerán para decidir si quieren contribuir. Intenta explicar claramente **por qué** se recogen los datos y **cómo se utilizarán los datos del mapa**. 

> Estos campos admiten **Markdown** y pueden incluir imágenes (arrastrando y soltando) y vídeos (añadiendo una URL de YouTube para su incrustación automática).

#### Descripción 'larga'

Aquí puede entrar en más detalles sobre su proyecto. Proporcione más información sobre la razón de ser del proyecto, quién utilizará los datos y el impacto que se espera que tenga la cartografía. Si el proyecto incluye colaboraciones o socios, puede ampliar la información aquí. 

> Para cualquiera de estos campos de texto puede elegir añadir traducciones adicionales. Si desea añadir una traducción, haga clic en el código de idioma de dos letras e introduzca el texto traducido. Para los usuarios que hayan configurado el Administrador de Tareas en ese idioma, se mostrará automáticamente el proyecto en ese idioma. Por defecto, el campo inicial es el idioma inglés, esto se puede modificar en el submenú "Configuración" de su proyecto.

#### Fecha de vencimiento

Si tiene una fecha en la que desea que su proyecto esté completamente mapeado y validado, puede añadirla aquí. Esto es opcional y una vez superada la fecha no cambia nada para el proyecto y los voluntarios pueden seguir contribuyendo después. Los colaboradores verán la fecha de vencimiento junto al proyecto.

### Instrucciones

![TM Instrucciones][]

#### Comentario sobre conjunto de cambio

Aquí puede añadir etiquetas de seguimiento adicionales que se rellenarán automáticamente cada vez que alguien guarde su trabajo mientras mapea su proyecto. Por ejemplo, si quiere empezar a hacer un seguimiento de todas las contribuciones en todos los proyectos de tu organización, puede añadirles una etiqueta de seguimiento común, por ejemplo #MSF o #cartONG. Por favor, trate de **mantener estas etiquetas cortas** y no añada demasiadas, los comentarios de los conjuntos de cambios desordenados son confusos de interpretar y se debe dejar espacio para que los mapeadores dejen comentarios descriptivos de los conjuntos de cambios. 

> Por favor, tenga en cuenta que una etiqueta única de seguimiento del proyecto ya estará presente, por ejemplo #hotosm-project-11188 - **por favor, déjela como está**, es muy importante para el seguimiento del progreso del proyecto. El número al final de la etiqueta es el ID único de su proyecto.

#### Instrucciones detalladas

Añada instrucciones descriptivas para que los mapeadores y validadores las sigan mientras trabajan en su proyecto. Su proyecto será público, por lo que **escriba las instrucciones para usuarios inexpertos** sin conocimientos locales o contextuales. Por favor, utilice un lenguaje sencillo, ya que su público objetivo puede no ser hablante nativo de español.

1. Escriba la información más importante en la parte superior para asegurarse de que es prominente. Esto podría incluir una descripción de las imágenes y una advertencia de un problema de compensación de imágenes con orientación. O puede indicar a los cartógrafos que ignoren los caminos y las pistas en un proyecto de cartografía de carreteras y se centren en las carreteras más destacadas.
2. Añadir instrucciones específicas de contexto/ubicación. Éstas varían considerablemente, pero ayudarán a los cartógrafos a interpretar las imágenes de satélite. Por ejemplo, "Espere ver muchas chozas circulares de paja marrón en este proyecto de Sudán del Sur" o "Los asentamientos en Guatemala suelen estar densamente construidos, haga un zoom muy grande cuando mapee cada edificio para asegurarse de que no se conectan o se superponen". Arrastra y suelta las capturas de pantalla de las imágenes aéreas en las instrucciones para mejorar esta sección.
3. Incluya definitivamente una descripción detallada de **cómo mapear cada objeto espacial** que desea que sea mapeado. Mire los proyectos existentes (pero recientes) en el Administrador de Tareas para ver si puede tomar prestado algún texto instructivo existente (¡tenga cuidado que algunos proyectos no tendrán buenas instrucciones!).
4. El recurso definitivo sobre el etiquetado es el [wiki de OpenStreetMap](http://wiki.openstreetmap.org/wiki/Map_Features). Para muchos proyectos relacionados con HOT, la página sobre [etiquetado de carreteras en África](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) es la especialización adecuada y puede valer la pena enlazarla en las instrucciones de su proyecto. Si su proyecto debe adherirse a normas de etiquetado diferentes, escriba una página similar en la Wiki y enlácela en sus instrucciones.
5. Otros puntos de aclaración: Si el proyecto es adecuado sólo para los cartógrafos con un cierto nivel de experiencia. Por ejemplo, el proyecto utiliza importaciones o los datos existentes deben realinearse con las trazas del GPS o alguna otra imagen. Fórmulas para que los nuevos cartógrafos se sientan invitados a contribuir a otros proyectos, pero que entiendan que en este caso se requieren técnicas avanzadas.
6. Hay directrices que cubren los errores comunes que vemos al validar. Un ejemplo es la compilación de Blake Girardot sobre [mapeo en África Occidental](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Utilice el enlace en las instrucciones y explique que es necesario adherirse a estas directrices.

#### Por Instrucciones de Tarea 

Esto es opcional, pero es posible añadir un breve fragmento de instrucciones adicionales que los mapeadores verán mientras trabajan en una tarea. Esto se ve en la parte derecha de la vista del editor del Gestor de Tareas, encima de la sección "Estado de la Tarea". Esto se verá en todo momento mientras se mapea, así que si hay algo **particularmente importante** sobre lo que usted quiere **instruir a los mapeadores** puede añadirlo aquí. 

### Metadatos

![TM Metadatos][]

#### Nivel de mapeador(a)

Esto cambia el nivel de dificultad que se **muestra** para su proyecto. Considere esto con mucho cuidado, los proyectos complejos que se establecen inadecuadamente a la dificultad de principiante **pueden dar lugar a importantes problemas de calidad de datos**. 

> Tenga en cuenta que esto no cambia quién puede **realmente contribuir** a su proyecto, esas restricciones se implementan en el submenú Permisos.

La mayoría de los proyectos están configurados en dificultad **Principiante** o **Intermedio**, un puñado de proyectos están configurados en Avanzado. 

- **Principiante** - Considere esto si su proyecto es fácil de mapear y:
  - Sólo está pidiendo a los contribuyentes que mapeen una característica, en particular **sólo edificios**.
  - La densidad de objetos espaciales es baja, es decir, en una zona **rural**.
  - Hay una **baja cantidad** de datos OSM existentes en el área de su proyecto
  - No hay problemas de alineación de imágenes
- **Intermedio** - Si su proyecto es más difícil de mapear, debería considerarse si:
  - Está pidiendo a los contribuyentes que mapeen más de una característica, por ejemplo, edificios **y** carreteras
  - Hay una densidad media/alta de esas características en la zona de su proyecto, es decir, zonas **urbanas**.
  - Existen **sustanciales** datos de OSM en el área de su proyecto
  - Puede haber **problemas de alineación de las imágenes** o pedir a los colaboradores que utilicen más de una fuente de imágenes
- **Avanzado** - Si el proyecto es extremadamente difícil de mapear, considere esto si:
  - En la zona de su proyecto hay una densidad muy alta, es decir, **zonas urbanas centrales**.
  - Hay **muchos** datos OSM existentes en el área de tu proyecto
  - Hay problemas **complejos de alineación de imágenes**.

#### Tipos de mapeo

Active o desactive estas opciones en función de las características que desee asignar a su proyecto. Por lo general, **cuantas menos características mejor**, ya que los proyectos que pretenden mapear demasiadas características suelen tener dificultades para avanzar. 

> Los proyectos que piden que se mapeen muchos objetos espaciales son difíciles para los mapeadores y difíciles de validar. Tardan mucho más en obtener un buen conjunto de datos utilizables. El tamaño de las tareas también es difícil de hacer eficiente para los diferentes tipos de cartografía, por ejemplo, los edificios necesitan cuadrados de tareas pequeños, las carreteras y las vías fluviales necesitan cuadrados de tareas más grandes. La mejor práctica consiste en realizar varios proyectos en la misma zona para cartografiar por separado los edificios y las carreteras y vías fluviales. 

#### Preconfiguraciones del Editor iD

Si elige uno o más elementos de la lista desplegable, los mapeadores que utilicen iD sólo podrán asignar estas características a los objetos que mapeen. Esto se recomienda para los principiantes, **proyectos sólo de construcción**. Esto significa que los colaboradores no podrán etiquetar otras características, aunque lo intenten. Evite el uso de preajustes para proyectos más complejos, ya que puede convertirse rápidamente en una carga. Por ejemplo, un proyecto de mapeo de carreteras necesitaría docenas de preajustes para asegurar que todos los tipos de carreteras puedan ser mapeados. 

#### Organization

Your organization name should be in here already, otherwise choose it from the dropdown menu.

#### Campaña

Si ha creado varios proyectos asociados entre sí, puede optar por asignarlos a una campaña. Los usuarios pueden filtrar los proyectos por el nombre de la campaña en la página Explorar Proyectos. Por ejemplo, si su proyecto está asociado a la eliminación de la malaria, puede ponerlo en la campaña "Eliminación de la malaria". Para solicitar la creación de nombres de campaña adicionales, complete [este formulario](https://forms.gle/qafvkp4iAxnY6rjE6).

#### Categorías

Seleccione aquí los temas relacionados con su proyecto. Los colaboradores pueden especificar sus intereses en estas categorías en su página de configuración.

#### OSMCha filtro ID

[OSMCha](https://osmcha.org/) es una potente herramienta de control de calidad de datos que puede resultarle útil para supervisar las contribuciones a su proyecto. El filtro estándar confina la salida a la caja de límites del proyecto y a las contribuciones no más antiguas que la fecha de creación del proyecto y con el nombre del proyecto en el comentario del conjunto de cambios. Si crees que algo diferente sería un mejor enfoque para analizar los conjuntos de cambios de tu proyecto, entonces proporciona una URL de OSMCha o un id de filtro de OSMCha aquí. El filtro OSMCha está disponible al final de la página de resumen de su proyecto.

### Áreas prioritarias

![TM Priority Area][]

Use the tools here to draw areas that should be mapped first. You can have multiple priority areas for a project. You can also change priority areas at any time. The priority area will be highlighted for volunteers to prioritize and if they select 'Map a task' it will randomly select a task from the priority area first. 

> During disaster mapping, early in the event, having a large project mapping area and using priority areas to focus mapping as new information comes in is often best practice.

### Imagery

From the dropdown menu choose the aerial imagery source that you want to load automatically for your project. If the imagery is not listed in the dropdown you can choose 'Custom' and then add a TMS URL. 

> Note that Tasking Manager **cannot host custom imagery**, it needs to be hosted externally and linked using a TMS URL. If you are happy with your imagery being open for use please consider using [OpenAerialMap](https://openaerialmap.org/) to host your imagery.

License - Optionally, if there is a specific license required for the mappers to accept when using the imagery, you can select it here. For example, for Maxar imagery this is 'DigitalGlobe Satellite EULA'. If you need a license that is not available, you can contact an administrator for the Tasking Manager installation and ask them to add it.

### Permissions

Under the 'Metadata' menu we could change the difficulty level that was **displayed** for a project. Under the 'Permissions' menu we can change who can actually **access** a project. It's important to remind ourselves of the various user levels:

- **Beginner** User - Any user that has either just created their account or made **less than 250 changesets** (saves)
- **Intermediate** User - Any user that has made between **250 and 500 changesets**
- **Advanced** User - Any user that has made **over 500 changesets**

> As before, consider permissions very carefully, complex projects which inappropriately allow all users to contribute can result in **significant data quality issues**. 

![TM Permissions][]

#### Mapping permissions

Here you can choose who can **map** your project:

- If your project is easy to contribute towards and you consider it a beginner project you might want set this to **'Any user'**.
- If your project is more complex and requires more experience, restrict mapping to **'Only users with intermediate or advanced level'**. 
- If you want to be even more selective then you may also require a mapper to be part of a **team**. Teams must then be defined below.

#### Validation permissions

Here you can choose who can **validate** your project. Validation is where more experienced mappers check the contributions that are made within your project, therefore this should be restricted to 'Only users with intermediate or advanced level' **as a minimum**. **Ideally** you should restrict validation even further to **'Only team members'**, but when you do this you must remember to **define those teams** below. 

#### Teams

Use the filters to search for and add teams. You can add your own team(s), but please also feel free to add other teams. Once you have added a team ensure to select a role (Mapper, Validator, Project Manager). 

Team permissions will not function unless you have restricted Mapping and/or Validation permissions to 'Only team members'. If you grant a team Project Manager access this will allow its team members to edit the project.

> On HOT's Tasking Manager feel free to add two of the larger validation teams, namely 'HOT Global Validators' and HOT's 'Validator Trainees'. Please note, that although this gives those team members **permission** to validate your project, it does **not necessarily mean** that they **will validate** your project.  

#### Privacy

Toggling to make a project 'Private' will hide the project from all users except those that are part of the teams defined above. 

### Settings

![TM Settings][]

#### Default Language

Altering this will change the default language for your project's title, description and instructions.

#### Editors for mapping/validation

This restricts the available editors to those checked. You may specify different sets for mapping and for validation. Note that it is possible to enable the AI assisted RapiD editor here. 

#### Enforce random task selection

If enabled then contributors cannot select specific tasks for mapping.

### Actions

Here you can perform powerful bulk actions on your project. **Be careful** with many of these options, **they are not reversible**. 

![TM Actions][]

#### Message all contributors

Sends a Tasking Manager message to everyone who has marked a task complete or valid. It can be used to thank contributors and/or guide them to other projects in a campaign. It should also be used before using either of the two Validate/Invalidate all Tasks options described below.

#### Mapping, validation and invalidation

This will set the status of all tasks to either mapped, validated or invalidated. Handle with care as there is no undo.

#### Reset tasks

This will reset all tasks to their pristine state but previous actions can still be seen in the task history. Handle with care as there is no undo.

#### Transfer project ownership

You can specify another manager within your organization who will become listed as the creator of the project. Search for their OSM username. 

#### Clone Project

This useful option will create a duplicate of the project, keeping the entire **setup identical** except for the area of interest, task grid and priority areas which you will need to re-import or re-draw. This option will **save you a lot of time** if you are creating a series of similar projects that are covering a large area. 

#### Delete Project

This will **permanently delete** the project from the Tasking Manager. Handle with care as there is no undo. It is not possible to delete a project after any contributions have been made to it.

### Custom editor

If you would like to link to an editor which is not listed in the 'Settings' menu a URL to that editor can be added here. 

### Save and test

Once you are happy with your project setup press `Save`. View your project by selecting `Access Project` and `Project Page`. **Check your project carefully**, ensure the instructions are clear and the wording and formatting are correct. 

**Try mapping a task**, is the imagery loading correctly? Are the instructions clear enough? If you need to make changes or refinements to your project, click the `Edit` button on the project page. 

### Publish

After checking and testing your project, if you are happy with it and ready for mapping to start click the `Edit` button on the project page and from the 'Description' menu change the status to ‘Published’. Once the project is published, the wider public will be able to see your project and contribute towards it. 

> Note that you can access the 'Edit' menu of your project and alter the settings at any time, even if mapping is underway.

## Project management

Congratulations! You've created a project, now you'll need to make sure you manage it effectively. 

### Be responsive

As the project creator, you are **responsible** for **responding to questions** that arise in the **Questions and Comments** section of your project page. This section will often include useful guidance or tips from the wider community, take these seriously, respond and make edits to your projects where necessary. 

> To enable notifications when there are new posts in the Questions and Comments section, click on your OSM username in Tasking Manager and choose `Settings`. Toggle notifications on for 'Questions and comments'.

On the project page your username will also be listed next to 'created by ...'. This means that you may also receive direct OSM messages, make sure to read and respond to these. 

> If you are being overwhelmed by questions please note that you will receive less if you follow this guidance: _The first thing you can do to support the mappers, and validators, is having well designed projects with easy to understand but thorough instructions and descriptions._

### Sequencing projects

If you have created a number of projects in a series **do not publish them all at once**. You are not the only one creating projects, having a reasonable number of projects (one or two) at the appropriate priority is fine. Publishing half-a-dozen at once will crowd out the Tasking Manager. Keep the rest in draft or at lower priority while at any moment only one or two are being worked on. You may notice that contributors lose enthusiasm if they see lots of similar projects all at once that are making little progress.

### Project lifecycle

Keep track of the mapping and validation progress of your projects. Remember that **all projects must end up being archived**. You will need to do this manually, so do not lose sight of the progress, priority or relevance of your projects. If you are moving to another organization make sure to **hand over** your ongoing projects to your replacement. 

## Additional information

### Considerations concerning imagery

Before creating your project, check the imagery in several different locations across your project area to make an imagery assessment. In most cases either Maxar or Bing imagery should suit your needs. However, there are situations where you might want to choose an alternative source. You may need to consider the following when choosing your imagery: 

1. If careful, detailed mapping is needed choose the imagery that is clearest, with the highest resolution.
2. If your priority is to have the most up-to-date imagery, flick between the standard imagery sources to look for the most recent imagery. Look for indications of development such as new buildings or land clearance to get an idea of the most up-to-date imagery. Recently Maxar has been the most up-to-date but this varies by location. 
3. Check for cloud cover, although one imagery source may suit your needs if it is very cloudy or hazy your mappers will struggle to map using it.
4. Check for alignment, if there is plenty of existing OSM data that aligns to one set of satellite imagery then it may make sense to choose the same imagery. If there are alignment issues make sure to write clear instructions detailing how you expect contributors to deal with offsets/alignment issues. 

> It is often very difficult to get an exact imagery capture date from the satellite imagery providers. The main sources are 'mosaics' where a series of images (often with very different capture dates) are stitched together. Sometimes this stitching goes down to the individual pixel level. In the absence of information, using imagery comparison is therefore often the best choice for finding the most recent imagery. 

#### Imagery alignment

Your project area may have already been partially mapped using older imagery and there might be a noticeable mis-alignment between the older mapped objects and the newer available imagery. Inspect various locations across your mapping area to determine this. If there is an alignment issue, make sure to include detailed instructions outlining the best approach for mappers to take. Projects with imagery alignment issues are best restricted to more experienced mappers. 

There is not a standard set of instructions when it comes to imagery alignment issues. It is very dependent on context. Sometimes mappers are instructed to align to GPS traces, sometimes they are told to align to mapped linear features such as highways and waterways. Here is a sample approach: 

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Maxar.
2. Make sure that all existing features which are also visible on Maxar are aligned with Maxar imagery, i.e. realign if necessary.
3. Add new features from the now correctly aligned Maxar imagery.

Often mappers are instructed to look for _least effort_ when it comes to imagery alignment issues. Which means that contributors are told to vary their approach depending on the situation in their individual task: 

- If there is plenty of existing mapping in a task which is consistently misaligned it might require the least effort to change the imagery offset to fit existing mapping and then map the small number of remaining objects in the task. 
- If there is less existing mapping, or objects are misaligned inconsistently (i.e. the degree of misalignment varies across space) then it might be easier to alter the position of the mapped objects to align with the imagery and then map remaining objects in the task.

If your project has alignment issues, ensure your task squares are not too large because imagery offsets can vary considerably across a mapping area, particularly if the terrain is not flat. Even imagery discontinuities may occur across a project - look out for them and advise the contributors of such a problem.

> Although individual mappers can manually alter the imagery offset while mapping, it is not possible for you, as project creator, to change the imagery offset at the project level. However, if you are using your own aerial imagery that is being hosted elsewhere you can alter the offset at source. However, please note that alignment can vary considerably across space and simply changing the overall offset does not always correct alignment issues. 

Please feel free to check these additional resources on imagery alignment:

- [General guidelines for various editors](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [Animated gif on imagery alignment in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [JOSM imagery alignment chapter in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM New Polys]: /images/coordination/tm4_create_new_polys.png
[TM Trim]: /images/coordination/tm4_trim1.png
[TM Trim coarse]: /images/coordination/tm4_trim2.png
[TM Trim fine]: /images/coordination/tm4_trim3.png
[TM Description]: /images/coordination/tm4_description.png
[TM Instructions]: /images/coordination/tm4_instructions.png
[TM Metadata]: /images/coordination/tm4_metadata.png
[TM Priority Area]: /images/coordination/tm4_priority_area.png
[TM Permissions]: /images/coordination/tm4_permissions.png
[TM Settings]: /images/coordination/tm4_settings.png
[TM Actions]: /images/coordination/tm4_actions.png
