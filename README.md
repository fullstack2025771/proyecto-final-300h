<h1>Dra Pet </h1>
<h2>Primera Entrega</h2>

<p> Este proyecto busca dar aconocer los diferentes servicios que ofrece esta entidad. Contando con recursos humanos y ytecnologicos los cuales ofrecen atencion medica programada, preventiva y correptiva hasta  baño y peluqueria En estos espacios los propietarios puededn estar tranquilos sabiendo que sus mascotas estan en manos de profesionales altamente capacitados y que cuentan con equipos necesariuos para brindar una atencion medica veterinaria de calidad.</p>



<p>Para la creacion de este Backend utilizamos varias tecnologias para la web. como son Node.js,express,MongoDB y demas herramientas logramos pintar este proyecto en la consola del computador.</p>



 <p>El entorno Node nos permite utilizar JS en nuestro consola y express nos permite construir la logica, gestionar peticiones, crear,actualizar,eliminar informacion.  Utilizando en general la sintaxis de JS.  MongoDB nos gestiona, completa ,creando una manipulacion efectiva de los datos y asi generamos y presentamos  un Backend moderno</p>

<p>El archivo package json me permite habilitar Node en el proyecto, creando un archivo index.js , Atravez de la herramienta NPM descargare los paquetes express generando las carpetas de Node-modules y pakage json.
Se creara conjuntamente el archivo Gitignore donde se dejara Node-modules y .env.</p>

<p>Despues se instalara Nodemon, Dotenv y Mongoose, teniendo en cuenta que unas son dependencias de desarrollo y produccion  y otra solo de desarrollo. Por ultimo instalamos Mongo me registro y con la contraseña que genero, despues de crear el nombre del proyecto la copio y esta sera la ruta de mi base de dato.</p>

<h3>Segunda Entrega</h3>

<p>Se creo los archivos productsControllerjs y userController.js como tambien sus respectivas rutas despues se procede
a implementar el Metodo CRUD basico de ahi paso a crear las rutas correspondientes a productos y a usuarios asegurandome que se conecten con los controladores para esto realizo las respectivas exportaciones. </p>
<p>Se manejan algunos codigos HTTP y estos de una manera asincronica  implementa  el trycath importamos dependencias y modulos necesarios y utilizamos las acciones que van a realizar el CRUD. creamos los id, hacemos pruebas con postman y mongodb</p>

<h4>Tercera entrega parte final del backend</h4>

<p> Se crea el jwt dentro de config  se instalan variables de entorno y modulos configuramos y verificamos el jwt.  Se creo en la carpeta src , Cervice y alli un archivo logins.js. Importamos las rutas y dependencias comenzamos ha hacer la logica de sesion se realiza la validacion de contraseña verificamos permisos atravez de  </p>

<p>A la vez en src creamos middleware deste intermediario nos permite verificar que el token sea permitido teniendo en cuenta si el roll es administrador o no,  y si es administrador tiene derecho a modificar en la base de datos , logicaante esto de los rolles es por que ya lo hemos definido en mis controladores</p>

<p>En la carpeta config  creamos multer.js alli gestioonamos archivos, hacemos autenticacion y permisos con _filename conocemos cual es el archivo en donde estoy y con _dirname se especifica la direccion de la carpeta y  nombramos uploads donde se va a subir o descargar la informacion. Atravez de varios comandos propios de node y mkdirSync se crea carpeta y con diskstorage se almacena la informacion de archivos y si todo sale bien con cb null guarde en UPLOADS_folder</p>

<p>Atravez de filefilter hacemos los filtros de que clase de archivos vamos a recibir y si es permitido entonces definimos  los limites atravez de fileSize
y siempre estamos pendientes de revisar que  en la terminal salga conexion exitosa en el puerto 3000 si no sale verificar las funciones flecha y funciones planteadas siempre teniendo en cuenta ecma6 </p>
