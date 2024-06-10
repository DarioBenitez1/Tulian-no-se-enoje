const { Router } = require('express');
const carrerasCtrl = require('../controllers/carrera.controller')
//const seriesMiddle = require('../middleware/series.middleware')

//const serieSchema = require('../schemas/series.schemas')
//const schemaValidator = require('../middleware/schemaValidator')

const router = Router()


router.get('/carrera/:id',carrerasCtrl.getCarreraById);
//router.post(`/series`,schemaValidator(serieSchema),seriesCtrl.createSerie)


module.exports = router