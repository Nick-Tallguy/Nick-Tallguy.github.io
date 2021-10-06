---
layout: doc
título: JOSM añadiendo imágenes tms, wms o wmts
permalink: /es/josm/josm-adding-imagery/
lang: es
category: josm
---

JOSM - Agregando Imágenes Aéreas
================

> Revisado 2016-09-09  

No todas las imágenes aéreas están dentro del menú de imágenes JOSM, pero es fácil añadirlas si se le ha dado la información del enlace.  

En este ejemplo estamos trabajando desde el [HOT Tasking Manager](http://tasks.hotosm.org/) y las imágenes necesarias para completar uno de los proyectos deben ser añadidas manualmente a JOSM. El principio de añadir el enlace de la imagen es el mismo sea cual sea la edición en la que se esté trabajando, siempre que se le proporcione el enlace. También hay ocasiones en las que los enlaces previstos no funcionan como se espera y puede ser necesario añadir las imágenes manualmente, si se puede obtener la información del enlace.  

Desde la pestaña de información del Administrador de Tareas, o su otra fuente de información, copie toda la sección de Imágenes.  

![Imagen TM][]

Vaya al menú de Preferencias de JOSM (**Edición / Preferencias**, o en una máquina Apple **JOSM / Preferencias**)  

![Preferencias WMS TMS 1][]

Haga clic en el icono ![WMS_TMS_button][]{: height="24px"}, y en este caso en el icono ![+TMS_button][]{: height="24px"}.  

> Las URL de TMS suelen tener {x}{y} y {z} en ellas, las URL de WMS suelen ser muy largas y tienen {width} y {height}, las URL de WMTS suelen tener WMTSCapabilities.xml en ellas. Si no está seguro de qué tipo de URL de imágenes tiene, puede intentar añadirlas como tipos diferentes para ver cuál funciona.  

![Preferencias WMS TMS 3][]

**Casilla 1.** Pega la información que has copiado de la pestaña de información del Administrador de Tareas en el primer cuadro de la ventana. JOSM la verificará, y si es correcta el proceso de verificación repetirá la información en la casilla 3 (ver más abajo). Si no aparece en el recuadro 3 en unos segundos, compruebe que no ha omitido accidentalmente letras, o que no ha añadido accidentalmente "espacios en blanco" al principio o al final - sólo hay que copiar y pegar el enlace real.  
**Casilla 2. Normalmente se deja en blanco, a menos que haya recibido otras instrucciones.  
**Casilla 3.** contiene ahora una copia duplicada de la casilla 1, generada por el proceso de verificación dentro de JOSM.  
**Casilla 4.** Introduzca un nombre para la capa - como mis imágenes fueron identificadas en el Administrador de Tareas como "Las imágenes de satélite para este proyecto son amablemente proporcionadas por Digital Globe a través de su servicio +Vivid". He llamado a mi capa "Digital Globe + Vivid".  

![Preferencias WMS TMS 4][]

Haga clic en el botón ![OK_button][]{: height="24px"}, y la imagen que ha añadido aparecerá al final de la lista - puede que tenga que desplazarse hacia abajo para localizarla.  

![Preferencias WMS TMS 5][]

Haga clic en el botón ![OK_button][]{: height="24px"} para cerrar la ventana de preferencias y volver a JOSM. Cuando necesite utilizar las imágenes, haga clic en la palabra **Imágenes** en el menú de la parte superior de la pantalla y selecciónelas de la lista alfabética. O bien, **Alt + I** debería mostrar el menú de imágenes (estos atajos pueden variar según la configuración del idioma).  

![Preferencias WMS TMS 6][]

**Consejo** Si las imágenes no se cargan, compruebe cómo aparecen en la lista. En este ejemplo, **tms** aparece dos veces. Puede editar el enlace dentro de josm para que sólo aparezca una vez, lo que probablemente corregirá el problema.

![TMS TMS][]

Añadir un Servidor WMS
===========

Añadir un servidor WMS es muy similar a añadir un servidor TMS, con una diferencia importante. Los servidores WMS suelen ofrecer más de una capa de imágenes entre las que elegir y debe seleccionar una capa al añadir el servidor WMS en las preferencias, o especificar que seleccionará una capa para utilizarla siempre que seleccione el servidor desde el menú de imágenes en la interfaz principal de JOSM.

Para añadir un servidor WMS abra el diálogo de preferencias de imágenes JOSM como se muestra arriba, pero esta vez haga clic en el botón "Añadir WMS" ![wms_add_button][]

El cuadro de diálogo resultante será como el siguiente:
![wms_entry_dialog_numbered][]

**Casilla 1.** Introduzca la URL del servidor WMS en este campo. Debe ser una URL típica que empiece por http o https  
**Botón 2.** Después de introducir la URL haga clic en el botón "Obtener Capas". JOSM se pondrá en contacto con el servidor WMS y obtendrá una lista de capas disponibles en ese servidor  
**Casilla 3.** Aquí es donde se mostrará la lista de capas disponibles. Puede haber carpetas que deban expandirse para ver las capas disponibles  
**Menú desplegable 4.** Formato de la imagen - normalmente se seleccionará automáticamente después de hacer clic en una de las capas de la casilla 3**, puede ofrecer más de un tipo de formato de imagen, pero generalmente el formato es jpeg o png.  
**Casilla 5.** Se genera automáticamente después de seleccionar una capa en la casilla 3. Será largo y complicado, por lo general está bien y es más informativo y normalmente no debe ser editado.  
**Casilla 6.** Introduzca un nombre para el servidor o la capa. Se rellenará un nombre por defecto basado en la URL, pero puede introducir un nombre más significativo. Este es el nombre que aparecerá en el menú de JOSM Imágenes cuando quiera añadir la capa a su panel de capas en la interfaz normal de JOSM.  

> Ejemplo de servidor WMS con un montón de capas interesantes: http://sedac.ciesin.columbia.edu/geoserver/wms  

![wms_select_layer_highlighted][]  
Asegúrese de hacer clic en una capa si desea que el menú de imágenes cargue siempre la misma capa. En el ejemplo anterior, cuando se selecciona la capa en el menú Imágenes, siempre se cargará la capa "Base de datos mundial de áreas protegidas".

Si desea elegir qué capa cargar cada vez que selecciona el servidor del menú de imágenes y poder cargar múltiples capas desde el servidor de guardado fácilmente, simplemente marque la casilla que dice "Almacenar solo el punto final de WMS". Eso también deshabilitará la selección de una capa y el campo de verificación de URL. 

![wms_end_point_only_highlighted][]  

Haga clic en el botón ![OK_button][]{: height="24px"}, y la imagen que ha añadido aparecerá al final de la lista - puede que tenga que desplazarse hacia abajo para localizarla.  

![Preferencias WMS TMS 5][]

Haga clic en el botón ![OK_button][]{: height="24px"} para cerrar la ventana de preferencias y volver a JOSM. Cuando necesite utilizar las imágenes, haga clic en la palabra **Imágenes** en el menú de la parte superior de la pantalla y selecciónelas de la lista alfabética. O bien, **Alt + I** debería mostrar el menú de imágenes (estos atajos pueden variar según la configuración del idioma).  

![Preferencias WMS TMS 6][]

[Preferencias WMS TMS 1]: /images/josm/JOSM_TMS_1.png
[TM Imagery]: /images/josm/JOSM_TMS_2.png
[WMS_TMS_button]: /images/josm/josm_preferences-wms-tms.png
[+TMS_button]: /images/josm/+TMS.png
[OK_button]: /images/josm/josm_OK_button.png
[Preferences WMS TMS 3]: /images/josm/JOSM_TMS_3.png
[Preferencias WMS TMS 4]: /images/josm/JOSM_TMS_4.png
[Preferencias WMS TMS 5]: /images/josm/JOSM_TMS_5.png
[Preferencias WMS TMS 6]: /images/josm/JOSM_TMS_6.png
[TMS TMS]: /images/josm/JOSM_TMS_TMS.png
[wms_add_button]: /images/josm/wms_add_button.jpg
[wms_select_layer_highlight]: /images/josm/wms_select_layer_highlight.jpg
[wms_entry_dialog_numbered]: /images/josm/wms_entry_dialog_numbered.jpg
[wms_end_point_only_highlighted]: /images/josm/wms_end_point_only_highlighted.jpg
[wms_select_layer_highlighted]: /images/josm/wms_select_layer_highlighted.jpg