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



app.listen(3000,() => {
    console.log('servidor corriendo')
})