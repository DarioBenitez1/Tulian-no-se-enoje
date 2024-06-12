const { Router } = require('express');
const carrerasCtrl = require('../controllers/carrera.controller')
const carrerasMiddle = require('../middleware/carrera.middleware')

//const carreraschema = require('../schemas/carreras.schemas')
//const schemaValidator = require('../middleware/schemaValidator')

const router = Router()

//rutas
router.get('/carreras/:id',carrerasMiddle.validaExisteCarrera,carrerasCtrl.getCarreraById); 
router.get('/carreras',carrerasMiddle.validaCarrerasExisten,carrerasCtrl.getCarreras);
router.post('/carreras',carrerasMiddle.validarSolicitud, carrerasCtrl.createCarrera);
// ESTE METODO ES IGUAL AL 2DO GET
router.get('/carreras',carrerasMiddle.validaCarrerasExisten ,carrerasCtrl.getCarreras);
router.delete('/carreras/:id',carrerasMiddle.validaExisteCarrera ,carrerasCtrl.deleteCarreraById);
//router.post(`/carreras`,schemaValidator(carrerasSchema),carrerasCtrl.createSerie)


module.exports = router