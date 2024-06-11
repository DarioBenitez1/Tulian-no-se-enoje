const { Router } = require('express');

const materiasCrtl = require('../controllers/materia.controller');
const materiasMiddle = require('../middleware/materia.middleware');


const router = Router()


router.get('/materias', materiasMiddle.validaMateriasExisten,materiasCrtl.getMaterias );
router.get('/carreras/:id/materias', materiasMiddle.validaExisteMateria, materiasCrtl.getMateriaByCarreraId);
router.post('/carreras/:id/materia', materiasCrtl.createMateria);

//router.get('/series/:id',seriesMiddle.validaExisteSerie,seriesCtrl.getSeriesById)
//router.post(`/series`,schemaValidator(serieSchema),seriesCtrl.createSerie)


module.exports = router