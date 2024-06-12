
# Laboratorio de Programación y Lenguajes
## 1er Cuatrimestre año 2024
## Trabajo Practico API de Carreras & Materias

### Tabla de contenidos
- [Introducción](#introducción)
- [Integrantes](#integrantes)
- [Pasos para la instalación](#pasos-para-la-instalación)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Requerimientos](#requerimientos)
- [Dependencias](#dependencias-packagejson)
- [Package json](#package-json)
- [Pasos para la creacion de API](#como-crear-una-api-rest-de-carreras--materias)

### Nombre del grupo: 
  "Tulian no se enoje"

### Integrantes: 
 - Micaela Galeano
 - Nahuel Martinez
 - Dario Benitez
 - Roberto Pinto

### Repositorio GitHub
  https://github.com/DarioBenitez1/Tulian-no-se-enoje.git

### Pasos para la instalación:

 1. abrir Terminal
 2. mkdir para crear la carpeta (nombre a eleccion)
 3. cd a la nueva carpeta
 4. realizar un comando "git clone https://github.com/DarioBenitez1/Tulian-no-se-enoje.git" para descargar el repositorio.
 5. realizar un comando "npm i" para instalar las dependencias
 6. code . (para iniciar la aplicación de Visual Studio Code)
 7. crear un archivo .ENV en el home del proyecto, a la altura del package json (archivo para definir el puerto)
 8. definir el puerto a utilizar, sino por valor default se utilizara 3000
 9. iniciar el servidor con el comando "npm run dev"
 10. descargar postman e instalar
 11. realizar un import del archivo de colecciones con los metodos a utilizar (TP.postman_collection_ver2.json)
 12. recordar que puerto utilizar en los metodos (3000 o el definido en el archivo .env)
    (recordar la siguiente estructura ejemplo: http:\\localhost:3000\carreras\5)
    (
      http es el protocolo, 
      localhost de la pc o direccion IP si se invoca desde la red,
      3000 el puerto
      carreras\5 el recurso
    )
    
### Introducción
Este Trabajo practico tiene como fin aplicar los conocimientos adquiridos en todas las clases de la materia "Laboratorio de Programacion y Lenguajes", desarrollando desde cero una API Rest con la funcionalidad completa del CRUD (Create, Read, Update and Delete).

### Funcionalidades
Esta API permite realizar todas las funcionalides CRUD para gestionar carreras y materias dentro de una universidad.

### Tecnologias Utilizadas
- Node.js/Express.js en el backend

### Requerimientos
 - **Nodejs**  (v18) *instalado*

### Dependencias package.json
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "joi": "^17.13.1",
    "morgan": "^1.10.0"
    Dev
    "nodemon": "^3.1.0"

### Package json
```javascript
{
  "name": "api2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "joi": "^17.13.1",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```
# Como crear una API Rest de carreras & materias
 1. abrir Terminal
 2. mkdir para crear la carpeta (nombre a eleccion)
 3. cd a la nueva carpeta
 4. npm init -y (crea el package.json) 	(aca creamos el objeto Scripts y las dependencias, tales como PROD(express) y DEV(nodemon) )
 5. instalas las dependencias necesarias, 
    tales como: 
     - npm i express 
     - npm i -D nodemon
     - npm i joi
     - npm i morgan
     - npm i dotenv
 6. mkdir SOURCE (SRC)
 7. mkdir DATA (archivos con los objetos, ya que no contamos con una base de datos)
 8. code . (para iniciar la aplicación de Visual Studio Code)
 9. crear un archivo .ENV en el home del proyecto, a la altura del package json (archivo para definir el puerto)
 10. crear un archivo "carreras.json" dentro de la carpeta DATA
 11. crear un archivo "materias.json" dentro de la carpeta DATA
 12. crear un archivo "app.js" dentro de la carpeta SRC
 13. crear 3 carpetas mas dentro de la carpeta SRC (routers, controllers, middlewares)
 14. agregar a los archivos "carreras.json" y "materias.json" los objetos necesarios para operar
 15. definir los controllers
 16. definir los routers
 17. definir los middlewares
 18. definir los schemas
 19. definir el puerto a utilizar en el archivo .env, sino por valor default se utilizara 3000
 20. una vez terminadas las definiciones iniciar el servidor con el comando "npm run dev"
 22. descargar postman e instalar
 23. realizar un import del archivo de colecciones con los metodos a utilizar
 24. recordar que puerto utilizar en los metodos (3000 o el definido en el archivo .env del punto 19)
	(recordar la siguiente estructura ejemplo: http:\\localhost:3000\carreras\5)
	(
		http es el protocolo, 
		localhost de la pc o direccion IP si se invoca desde la red,
		3000 el puerto
		carreras\5 el recurso
	)
