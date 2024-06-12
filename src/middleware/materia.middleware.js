const materias = require('../../data/materias.json');
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


// Valida que existan materias creadas en una carrera especifica
materiasMiddle.validaMateriasEnCarrera = (req, res, next) => {
  const idCarrera = req.params.id; //Obtengo el id de carrera por los parametros
  //tengo una lista de materias asociadas a cada carrera llamada "materiasPorCarrera"
  const materiasDeCarrera = materias.filter(m => m.carreraId == idCarrera);

  if (materiasDeCarrera.length === 0) {
    return res.status(404).json({ mensaje: 'No existen materias creadas para esta carrera' });
  }

  //si esta todo ok continua
  next();
};

module.exports = materiasMiddle;