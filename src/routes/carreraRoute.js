const { Router } = require('express');
const carrerasCtrl = require('../controllers/carrera.controller')
const carrerasMiddle = require('../middleware/carrera.middleware')

const carreraSchema = require('../schemas/carrera.schemas')
const schemaValidator = require('../middleware/schemaValidator')

const router = Router()

//rutas
router.get('/carreras/:id',carrerasMiddle.validaExisteCarrera,carrerasCtrl.getCarreraById); 
router.get('/carreras',carrerasMiddle.validaCarrerasExisten,carrerasCtrl.getCarreras);
router.post('/carreras',schemaValidator(carreraSchema),carrerasMiddle.validarSolicitud, carrerasCtrl.createCarrera);
router.delete('/carreras/:id',carrerasMiddle.validaExisteCarrera ,carrerasCtrl.deleteCarreraById);


module.exports = router