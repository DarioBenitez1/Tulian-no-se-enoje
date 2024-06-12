const carreras = require('../../data/carreras.json');
const materias = require('../../data/materias.json')

const carrerasMiddle = {};

//valida que existan carreras con el ID ingresado
carrerasMiddle.validaExisteCarrera = (req, res, next) => {
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

// Middleware para validar la solicitud antes de crear una carrera
carrerasMiddle.validarSolicitud = (req, res, next) => {
  // guardo los datos del body
  const { nombre, grado, universidad } = req.body;

  // valido que los campos no esten vacios o sean solo espacios
  if (!nombre || !grado || !universidad) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  // Verifica los valores específicos para el campo "grado"
  const gradosValidos = ["Licenciatura", "Grado", "Maestria", "Doctorado"];
  if (!gradosValidos.includes(grado)) {
    return res.status(400).json({ error: 'Valor inválido para el campo "grado" ingrese =>Licenciatura, Grado, Maestria o Doctorado ' });
  }

  //Si todo ok, pasa al siguiente middleware o al controlador
  next();
};

carrerasMiddle.validaCarreraSinMaterias = (req, res, next) => {
  const id = req.params.id;
  const materiasDeLaCarrera = materias.filter(m => m.carreraId == id)
  if(materiasDeLaCarrera.length > 0){
     console.log(materiasDeLaCarrera)
     return res.status(400).json({message : 'no es posible eliminar una carrera con materias asignadas'});
  }
  next()
}


module.exports = carrerasMiddle;

