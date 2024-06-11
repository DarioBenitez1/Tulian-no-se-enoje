const { Router } = require('express');
const carrerasCtrl = require('../controllers/carrera.controller')
const carrerasMiddle = require('../middleware/carrera.middleware')

//const carreraschema = require('../schemas/carreras.schemas')
//const schemaValidator = require('../middleware/schemaValidator')

const router = Router()

//rutas
router.get('/carrera/:id',carrerasMiddle.validaExisteCarrera,carrerasCtrl.getCarreraById); //falta las validaciones
router.get('/carrera',carrerasCtrl.getCarreras); //faltan las validaciones
router.post('/carrera', carrerasCtrl.createCarrera); //faltan las validaciones
//router.post(`/carreras`,schemaValidator(carrerasSchema),carrerasCtrl.createSerie)


module.exports = router