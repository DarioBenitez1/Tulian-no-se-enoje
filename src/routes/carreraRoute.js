const { Router } = require('express');
const carrerasCtrl = require('../controllers/carrera.controller')
const carrerasMiddle = require('../middleware/carrera.middleware')

//const carreraschema = require('../schemas/carreras.schemas')
//const schemaValidator = require('../middleware/schemaValidator')

const router = Router()

//rutas
router.get('/carrera/:id',carrerasMiddle.validaExisteCarrera,carrerasCtrl.getCarreraById); 
router.get('/carreras',carrerasMiddle.validaCarrerasExisten,carrerasCtrl.getCarreras);
router.post('/carreras',carrerasMiddle.validarSolicitud, carrerasCtrl.createCarrera);
//router.post(`/carreras`,schemaValidator(carrerasSchema),carrerasCtrl.createSerie)


module.exports = router