const { Router } = require('express');
const carrerasCtrl = require('../controllers/carrera.controller')
const carrerasMiddle = require('../middleware/carrera.middleware')

const carreraSchema = require('../schemas/carrera.schemas')
const schemaValidator = require('../middleware/schemaValidator')

const router = Router()

//rutas
router.get('/carreras/:id',carrerasMiddle.validaExisteCarrera,carrerasCtrl.getCarreraById); 
router.get('/carreras',carrerasMiddle.validaCarrerasExisten,carrerasCtrl.getCarreras);
<<<<<<< HEAD
router.post('/carreras',schemaValidator(carreraSchema),carrerasMiddle.validarSolicitud, carrerasCtrl.createCarrera);
=======
router.post('/carreras',carrerasMiddle.validarSolicitud, carrerasCtrl.createCarrera);
// ESTE METODO ES IGUAL AL 2DO GET
>>>>>>> f5b1037623363bc087baf7c7b56c7a12f20cddf4
router.get('/carreras',carrerasMiddle.validaCarrerasExisten ,carrerasCtrl.getCarreras);
router.delete('/carreras/:id',carrerasMiddle.validaExisteCarrera ,carrerasCtrl.deleteCarreraById);


module.exports = router