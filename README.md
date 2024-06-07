

# Tulian no se enoje

### al realizar el clone del codigo ejecutar:
npm i

para instalar las dependencias 

----

## Tabla de contenidos
- [Introducción](#introducción)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Requerimientos](#requerimientos)
- [Dependencias](#dependencias-packagejson)
- [Rutas](#rutas)
- [Uso](#uso)
- [Variables](#variables)
- [Contacto](#contacto)

### Introducción
Notes App es un portal para crear y administrar notas personales

### Funcionalidades
- Registrarse
- loguearse
- crear notas
- modificar notas existentes
- borrar notas 

### Tecnologias Utilizadas
- Node.js/Express.js en el backend
- Bootstrap+handlerbars en el frontend

### Requerimientos
 - **Nodejs**  (v18) *instalado*
 - **Mongodb** (v7 o superior) *instalado*
 - **PM2** *instalado*

### Dependencias package.json

- "bcryptjs": "^2.4.3",
- "connect-flash": "^0.1.1",
- "express": "^4.19.2",
- "express-handlebars": "^7.1.2",
- "express-session": "^1.18.0",
- "hbs": "^4.2.0",
- "method-override": "^3.0.0",
- "mongoose": "^8.3.2",
- "morgan": "^1.10.0",
- "passport": "^0.7.0",
- "passport-local": "^1.0.0",
- "path": "^0.12.7"

DEV  

- "dotenv": "^16.4.5",
- "handlebars": "^4.5.0",
- "nodemon": "^3.1.0",
- "npm-check-updates": "^16.14.20"

### Uso
```javascript
module.exports = {
  apps : [{
    name   : "app1",
    script : "./index.js",
    env_dev : {
       NODE_ENV:"development",
       NOTES_APP_MONGODB_HOST : "127.0.0.1:27017",
       NOTES_APP_MONGODB_DATABASE : "notes-app"
    }
  }]
}
```
---
### Contacto
- ***dbenitez@unpaz.edu.ar***
