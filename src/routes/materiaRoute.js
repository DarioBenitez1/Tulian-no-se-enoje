const { Router } = require('express');

const materiasCrtl = require('../controllers/materia.controller');
const materiasMiddle = require('../middleware/materia.middleware');

const materiaSchema = require('../schemas/materia.schemas')
const schemaValidator = require('../middleware/schemaValidator')

const router = Router()

router.get('/materias', materiasMiddle.validaMateriasExisten,materiasCrtl.getMaterias );
router.get('/carreras/:id/materias', materiasMiddle.validaExisteMateria, materiasCrtl.getMateriaByCarreraId);
router.post('/carreras/:id/materia',schemaValidator(materiaSchema), materiasCrtl.createMateria);
router.get('/materias/:id', materiasMiddle.validaExisteMateria, materiasCrtl.getMateriaById); 
router.delete('/materias/:id', materiasMiddle.validaExisteMateria, materiasCrtl.deleteMateriaById);

module.exports = router