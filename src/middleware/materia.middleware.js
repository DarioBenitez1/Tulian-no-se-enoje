const materias = require('../../data/materias.json');
//const materiaCtrl = require('../controllers/materia.controller');
const materiasMiddle = {};

materiasMiddle.validaExisteMateria = (req, res, next) => {
    const id = req.params.id;
    const idx = materias.findIndex(s => s.id == id);
    if (idx < 0) {
      res.status(404).json({ mensaje: `No se encontró la materia con el id ${id}` });
    }
    next();
  };

//valida que existan materias creadas
materiasMiddle.validaMateriasExisten = (req, res, next) => {
    if (materias.length === 0) {
      return res.status(404).json({ mensaje: 'No existen materias creadas' });
    }
    next();
};

module.exports = materiasMiddle;