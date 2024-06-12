require('dotenv').config();
const express = require('express');
//sirve para ver logs con nodemon
const morgan = require('morgan');

//RUTAS
const rutaCarreras = require('./routes/carreraRoute')
const rutaMaterias = require('./routes/materiaRoute')



const app = express();
app.use(express.json());
app.use(morgan('dev'))

app.use(rutaCarreras)
app.use(rutaMaterias)


app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'),() => {
    console.log(`servidor corriendo en el puerto ${app.get('port')}`)
})