const carreras = require('../../data/carreras.json');

const carrerasMiddle = {};

//valida que existan siries con el ID ingresado
carrerasMiddle.validaExisteSerie = (req, res, next) => {
  const id = req.params.id;
  const idx = carreras.findIndex(s => s.id == id);
  if (idx < 0) {
    res.status(404).json({ mensaje: `No se encontró el id ${id}` });
  }
  next();
};

//valida que existan carreras creadas
carrerasMiddle.validaCarrerasExisten = (req, res, next) => {
    if (carreras.length === 0) {
      return res.status(404).json({ mensaje: 'No existen carreras creadas' });
    }
    next();
};

module.exports = carrerasMiddle;