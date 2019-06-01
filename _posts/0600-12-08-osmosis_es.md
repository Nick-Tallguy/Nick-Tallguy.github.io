---
layout: doc
title: Manipulando Datos con Osmosis
permalink: /es/osm-data/osmosis/
lang: es
category: osm-data
---

Manipulando datos con Osmosis
===============================


**Osmosis** is a powerful command-line tool for manipulating and processing raw **.osm** data. It is often used for processing large data files, for splitting OSM files into smaller pieces, and for applying a changeset to update an existing file.  

There are a great many functions available with Osmosis, and you can read about each in detail on the [Wiki](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.41). However many of the functions are quite complex and difficult to understand, particularly if you are just getting started with command-line programs and OpenStreetMap. This chapter will serve to introduce Osmosis, install it on Windows, and get started with a basic Osmosis command.  

Instalar Osmosis
----------------

Like osm2pgsql in the previous chapter, we will need to download and set up **osmosis** so that we can run it from the command line. The process for this will be very similar to osm2pgsql.  

You will also need some raw OSM data to work with. If you want to follow the examples in this chapter, download our sample file [here](/files/sample_osmosis.osm.pbf). You may also use a raw data file of your choosing.  

Siga estos pasos para descargar y preparar Osmosis:  

- Primero, descargue Osmosis [aquí](http://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.zip).  
- Unzip the folder and place it somewhere on your system where it will not be moved. We will need to add its location to the system path so that it can be run from the command line.  

![unzip it][]

- Clic en el menú de inicio y tipee "system path."  

![ruta del sistema][]

- You should see an option named “Edit the system environment variables.”  Click on it.  

![modificar variables][]

- Haga clic en el botón llamado "Variables de entorno".  

![variables env][]

- En la parte inferior encuentre la variable llamada "Ruta" y haga click en "Modificar..."  

![encontrar ruta][]

- You must add the directory where osmosis.bat is located to the Path variable.  

![modificar ruta][]

- Add a semicolon to the end of the previous directory and then type in the full directory path of osmosis.  For example, if you put the **osmosis-latest** folder 	directly in the **C:\\** directory the path would be:  
	
      C:\osmosis-latest\bin

- Clic OK varias veces para guardar sus nuevos ajustes.  
- **osmosis** debería estar funcionando ahora. Comprobémoslo.  
- Open the Windows Command Prompt. You can do this by clicking on the Start Menu and typing "**cmd**". The Command Prompt application will come up and you can press Enter or click on it.  

![cmd][]

- En la ventana negra de comando que se abre, tipee:  

      osmosis

- If everything is working right, you should get a message like this:  

![prueba osmosis][]

- If you don't see output like this, and it says that it cannot find the application **osmosis**, then you may have entered the Path variable incorrectly.  

Filtrando Datos
---------------

Osmosis should be working correctly from the command line now. In order to work run operations on our data file, we need to change the working directory to the place that we've put the **sample_osmosis.osm.pbf** file. To make things simple, we have placed this file in the **C:\ directory**.  

- To change the working directory in the command prompt to the C:\ directory, type the following command and press Enter:  

      cd C:\
    
- The prompt should change, indicating that you are now in the C:\ directory.  

![cd command][]

Now let's learn our first Osmosis command. We will run a command that filters all of the schools from our large file.  

In order to do this, we need to tell Osmosis a few things. We need to specify:  

- un archivo de entrada (sample_osmosis.osm.pbf)  
- algunas reglas que definen que deseamos filtrar  
- an output file (we will output an uncompressed .osm file so we can open it in JOSM)  

El comando que vamos a ejecutar es:  

      osmosis --rbf sample_osmosis.osm.pbf --nkv keyValueList="amenity.school" --wx schools.osm

Try running this command in the command prompt. When it finishes, you should see a new file in your directory, called **schools.osm**. If we open the new file in JOSM, we can see that only the schools have been filtered out from the sample file.  

![escuelas osm][]

Let's take a look at the command we ran piece by piece to understand how it all works. First, we call the name of the program.

      osmosis

Next, we supply the input file. Remember that this file is a compressed format.  **--rbf** is actually shorthand for **--read-pbf-fast**. Osmosis understands that the file we supply after this flag is the file we want to read from.  

      --rbf sample_osmosis.osm.pbf

The next bit of our command says *--nkv keyValueList="amenity.school"*. You might guess that this indicates that osmosis should filter out everything with the tag **amenity=school**. **--nkv** is shorthand for **--node-key-value**. This command indicates that Osmosis should filter out only nodes with the keys and values supplied in the following list. Additionaly key.value sets can be added by placing commas in between them.  

      --nkv keyValueList="amenity.school"

Lastly, we supply the name and format of the output file. We use the flag **-wx**, which is shorthand for **--write-xml**. Note that we could also use **--wb**, which is the counterpart to **--rbf**, if we wanted to output the data again in PBF format.  

      --wx schools.osm

Moviendo Hacia Adelante
---------------

The number of processing tasks that can be done with Osmosis is enormous, and to learn more it is best to refer to the [Osmosis Detailed Usage](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.43) page on the Wiki.  

One useful task is being able to divide a big raw OSM file into separate parts, either by supplying rectangles or by creating bounding polygon files. You can get a basic grounding in this process at the [Osmosis Examples page](http://wiki.openstreetmap.org/wiki/Osmosis/Examples).  

[unzip it]: /images/osm-data/unzip-it.png
[ruta sistema]: /images/osm-data/system-path.png
[modificar variables]: /images/osm-data/edit-environment-variables.png
[variables env]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[modificar ruta]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[prueba osmosis]: /images/osm-data/osmosis-test.png
[cd command]: /images/osm-data/cd-command.png
[escuelas osm]: /images/osm-data/schools-osm.png


