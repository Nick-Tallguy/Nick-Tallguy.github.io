---
layout: doc
title: Creación de notas de OSM
permalink: /es/beginner/notes/
lang: es
category: beginner
---

Creación de notas de OSM
=====================

Uno de los componentes principales de OpenStreetMap son las notas, que han sido parte integral del proyecto desde 2013. En esta sección vas a aprender qué son las notas, sus estados, cómo crear notas para que se produzcan en cambios del mapa, la comunicación que se genera a partir de las notas, el proceso de creación de notas desde diferentes aplicaciones, y para terminar con un poco historia de esta funcionalidad.

Ten en cuenta que en este documento solo trataremos con la creación de notas, para la resolución de las mismas puedes visitar la sección de resolución de notas.


# ¿Para qué son las notas?

El objetivo de las notas es tanto (a) describir un error o incongruencia entre mapa OSM y la realidad, como (b) ofrecer a los usuarios del mapa un mecanismo de retroalimentación. Todo ésto permitiendo que OSM se mantenga actualizado. Esto se usa mucho cuando hacemos trabajo en terreno (es decir cuando estás en la calle o en un parque), donde podemos identificar 3 tipos de incongruencias o elementos que difieren con el mapa en las siguientes maneras:
 
* Elementos que no están en el mapa, pero que sí existen en realidad.
* Elementos que están incorrectamente mapeados, ya sea por sus propiedades o por su ubicación, por ejemplo: una tienda de mascotas que ahora es una supermercado.
* Elementos que simplemente ya no existen.

El sistema de notas internamente ofrece un mecanismo de comunicación entre el usuario que reporta y el mapeador que hace el cambio. Esto permite que haya un espacio donde se puedan hacer preguntas sobre la incongruencia identificada, dar respuestas a estas preguntas, y así poder hacer una modificación en el mapa más precisa.

Hemos observado que las notas generan gran interés en los usuarios que no mapean como tal, pero que quieren hacer aportes al proyecto de una forma más sencilla. Esto ha permitido extender la comunidad de mapeadores, donde algunos se especializan en reportar cierto tipo de elementos por medio de las notas, mientras están caminando.


## Atributos de las notas

Las notas se definen con las siguientes propiedades:

* Texto: describe la incongruencia identificada que puede ser de varias líneas de longitud.
* Ubicación: se define por la longitud y latitud que puede ser determinada por el GPS (GNSS) o por el desplazamiento de una chincheta 📌 sobre el mapa.
* Nombre de usuario (Opcional): si el usuario no está registrado en OSM, la nota se creará de manera anónima.
* Número o identificador: permite identificar la nota entre todo el conjunto de notas.
* Fecha: indica cuándo se creó.

Además, una nota puede tener comentarios adicionales. Esto quiere decir que siempre estará el comentario inicial del momento de la creación de la nota y posteriormente los comentarios añadidos que hacen parte de la comunicación entre los usuarios y los mapeadores. Cabe aclarar que, para agregar un comentario, debe realizarse con un usuario registrado. También hay que indicar un comentario ya publicado, no se puede modificar; lo único que se puede hacer es solicitar al DWG que lo oculte, en caso de que algún comentario esté en contra de las políticas de tratamiento de datos de OSM. Por ejemplo, cuando una nota contiene datos personales.


# Estados y operaciones

Las notas tienen 3 estados:

* Abierta (Open).
* Cerrada (Closed).
* Escondida (Hidden) – Este tipo aplica para aquellas notas que el DWG ocultó por ir en contra de las políticas de tratamiento de datos OSM.

Como parte de las notas, existen varias operaciones sobre estas:

* Crear nota (Abierta): Corresponde al proceso inicial de creación.
* Resolver nota (Abierta -> Cerrada): Es la resolución de notas únicamente por parte de un usuario registrado, donde se puede incluir un comentario.
* Comentar nota (Abierta -> Abierta): Cuando un usuario registrado agrega texto a una nota.
Por ejemplo, cuando un usuario pregunta por más detalles del entorno; o que el usuario que la creó quiere describir mejor la nota inicial.
* Reabrir nota (Cerrada -> Abierta): Cuando un usuario no está de acuerdo con la resolución de nota, y decide reactivarla.

![States for a note][]


# Consideraciones para crear buenas notas

Recordemos que las notas describen un error o incongruencia entre el mapa (OSM) y la realidad. Normalmente las notas se crean en terreno; por ejemplo, cuando una persona está caminando, tiene un dispositivo con el mapa de OpenStreetMap y ve que hay algo que difiere con la realidad.

La clave para crear buenas notas es describir tanto como sea posible la incongruencia del mapa y tener presente que la persona que la resolverá posiblemente no conoce ni ha visitado la zona. Por eso hay que dar el mejor contexto para quien vaya a leer la nota e intente resolverla. Por ejemplo, es bueno usar puntos cardinales (norte, sur, oriente, occidente), y evitar indicaciones como: a la derecha, al frente, etc., ya que la persona que resolverá la nota no tiene el punto de referencia de donde estás ubicado al crear la nota.

Cuando estás registrado en OpenStreetMap y creas notas con tu usuario, cualquier modificación sobre la nota te será notificado por correo electrónico. Esto te permite estar al tanto del avance de la resolución de la nota, y poder responder cualquier pregunta que surja. Algunas aplicaciones permiten subir fotos asociadas a las notas, lo que permite describir gráficamente el contexto. Si estás usando una aplicación con esta funcionalidad, aprovéchala. Te recomendamos que siempre indiques hacia donde apunta la cámara (nororiente, hacia el piso, etc.). Sí tienes dudas, puedes apoyarte en una aplicación de brújula en tu celular; con esto el mapeador entenderá la orientación de tu foto para resolver la nota.

Sabemos que estás comenzando a leer esta guía y descubriendo el mundo de OSM. Cuando hayas avanzado en la lectura, aprenderás cómo mapear un elemento o característica del mapa en detalle. Esto te ayudará a describir mejor un objeto por medio de una nota, para que se mapee con más propiedades.

## Idioma

El mejor idioma para escribir una nota es la lengua que mejor domines. Ten en cuenta que la persona que resuelva la nota, si no entiende tu texto, podrá usar algún traductor en línea (como deepl.com o pons.com), ya que la mayoría de resolución de notas se hacen desde computador. También puedes escribirlo en el idioma del país en donde estés, o eventualmente en inglés, pero lo mejor es usar un idioma en que te sientas cómodo y puedas expresarte mejor.

## Precisión de la ubicación

Es muy importante que la ubicación de la nota sea lo más preciso posible con respecto a donde se encuentra el error o incongruencia en el mapa. La nota puede introducir un error en el mapa en vez de corregir algo, cuando se ubica la chincheta alejada unos pocos metros de su ubicación real. Por eso, espera un poco a que tu dispositivo se ubique, o sino mueve la chincheta encima del elemento a modificar.

Recuerda que quien resolverá la nota no conoce la zona. Por eso si el GPS (GNSS) no te ha ubicado bien, y te está indicando que estás en la acera de en frente, la modificación en el mapa será del otro lado de la calle, lo cual será incorrecto.

## Hashtags

En ocasiones, hay actividades en que muchas personas van a crear notas con un mismo propósito (por ejemplo, una mapathon para agregar detalles de un barrio). Para poder identificar esto, te recomendamos usar uno o varios Hashtags para describir la actividad. Con esto, podrás buscar las notas asociadas al hashtag y poder procesarlas más fácilmente.


# Malas notas

Recuerda que las notas no deben incluir información personales, opiniones, datos de personas, o publicidad. Tampoco son para hacer preguntas. Como ya lo hemos dicho, las personas que procesan las notas no conocen el terreno, por lo que no podrán resolver tus preguntas. Realmente es lo contrario, al tu estar en terreno, podrás identificar los errores o incongruencias del mapa y plasmarlas en una nota.

## Notas Mecánicas

Son aquellas creadas masivamente desde el computador donde se identifican elementos del mapa a corregir. Ésta no es una práctica recomendada por la comunidad, ya que es importante distinguir entre la evidencia observada directamente en terreno y las incongruencias detectadas solamente por medios remotos. Por ejemplo, cuando estás usando un editor como iD o JOSM, y decides identificar los edificios mal dibujados creando una nota por cada construcción. Para esto existen herramientas que tienen mejor gestión de áreas con prevención de conflictos en las ediciones. Estas herramientas las verás más adelante en esta guía. Algunas de ellas son Tasking Manager, MapRoulette y DAMN Project, las cuales usan formatos como GeoJSON para cargar masivamente varios puntos sobre el mapa. 


# Notificaciones

Cuando creas una nota describiendo una incongruencia en el mapa, este texto asociado a una ubicación llegará a la base de datos de OSM. Después, algún mapeador de OSM leerá tu nota para resolverla y sí tiene dudas sobre esa descripción, puede agregar un comentario donde te podrá solicitar más detalles. Sí creaste la nota con tu usuario de OpenStreetMap, te llegará un mensaje de correo electrónico con las preguntas que te hace el mapeador. Cualquier comentario que agreges, le será notificado a todos los mapeadores que hayan comentado la nota anteriormente. De esta forma es que las personas involucradas en una nota comienzan a interactuar.

![Notification by email][]


# Creación de notas

La funcionalidad de crear, comentar y cerrar notas está incluida en diferentes aplicaciones. Aquí te mostramos cómo crear notas en algunas aplicaciones que recomendamos como las más apropiadas para esta actividad. Muchas de las aplicaciones aquí presentadas tienen secciones dedicadas en esta guía, por lo que aquí te damos un adelanto mostrándote solo la funcionalidad relativa a las notas.

## StreetComplete

Cuando veas algo que merece crear una nota, puedes mantener el dedo oprimido sobre el mapa y aparecerá un menú flotante. Ahí escoges crear nota, y podrás describir la incongruencia. Además, existe la opción de incluir una foto si quieres dar un mejor contexto. Asegúrate que la aplicación suba los datos a OpenStreetMap, para publicar tu nota.

![Creating a note in StreetComplete][]


## Every-Door    

En la parte baja de la aplicación hay varios modos de edición. Escoge el último que es para notas. Desde ahí podrás ubicar el círculo para después digitar el texto de la nota. Recuerda subir los cambios, para que tu nota quede registrada en OpenStreetMap.

![Creating a note in Every-door][]


## OnOSM

Esta es una página que permite agregar detalles de establecimientos por medio de la creación de una nota. Tiene un mecanismo que pide la información necesaria y va llenando una plantilla. Al final publica los datos en OSM por medio de una nota.

Las notas creadas por esta página siempre son anónimas, ya que no requieres usar las credenciales de OSM. En consecuencia tampoco recibirás un correo electrónico cuando un mapeador procese tu nota; por lo que debes visitar constantemente la página de la nota para ver su estado.

![Creating a note in OnOSM.org][]


## OsmAnd

Selecciona un elemento en el mapa (por ejm. una construcción, una vía) y en la opción “Acciones” selecciona “Abrir una nota” en OSM. Describe en el texto la incongruencia y para finalizar les das “Subir”.

![Creating a note in OSMAND][]


## Página de OSM.org

Desde la página principal de OpenStreetMap.org, haces zoom a la zona de interes y ahí se habilita el ícono de agregar nota. Recuerda que sí haces este procedimiento sin haber iniciado sesion, crearás una nota anónima y no recibirás notificaciones de su resolución. Aparecerá un cuadro de texto donde podrás dar las indicaciones y al hacer clic en “Añadir nota” ya quedará dentro de OSM.

![Creating a note in osm.org][]


# Historia

Ya que conoces lo básico de las notas, terminemos esta sección con algo de historia. Antes de existir las notas como tal dentro de la base de datos de OpenStreetMap, había un proyecto en paralelo que ofrecía esta funcionalidad. El proyecto se llamada OpenStreetBugs y ofrecía lo básico para permitir a un usuario documentar una incongruencia en el mapa, por medio de un texto y unas coordenadas. La funcionalidad era muy buena para reportar incongruencias, por eso se decidió incorporarla a OpenStreetMap y que pudiera usarse por medio del API. Cabe anotar que cuando se definió e implementó el API 0.6, este no incluía la parte de notas. 

Realmente, las notas fueron una adición posterior a esta versión.
En 2013, el servicio de notas se ofrecía como parte del API.
Para 2014, todos los reportes de OpenStreetBugs se habían migrado a la base de datos de OSM.
En 2017 ya se habían creado 1 millón de notas ha nivel mundial.


[States for a note]: /images/beginner/note-states.png
[Notification by email]: /images/beginner/email-messages.png
[Creating a note in StreetComplete]: /images/beginner/streetcomplete.gif
[Creating a note in Every-door]: /images/beginner/every-door.gif
[Creating a note in OnOSM.org]: /images/beginner/onosm.gif
[Creating a note in OSMAND]: /images/beginner/osmand.gif
[Creating a note in osm.org]: /images/beginner/website.gif
