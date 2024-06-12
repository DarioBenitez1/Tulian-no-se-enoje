const Joi = require('joi')

const carreraSchema = Joi.object().keys(
     {
          nombre: Joi.string().max(100).required().messages({
              "string.max": "nombre debe tener como maximo {#limit}",
              "any.required": "nombre es requerido",
              "string.empty": "nombre no puede estar vacio"
          }),
          grado: Joi.string().max(15).required().valid("Licenciatura", "Grado", "Maestria", "Doctorado").messages({
            "string.max": "grado debe tener como maximo {#limit}",
            "any.required": "el grado es requerido",
            "string.empty": "el grado no puede estar vacio",
            "string.valid": "el contenido de grado deve ser uno de los siguientes: (Licenciatura, Grado, Maestria, Doctorado)" 
          }),
          universidad: Joi.string().max(50).required().messages({
            "string.max": "universidad debe tener como maximo {#limit}",
            "any.required": "la universidad es requerida",
            "string.empty": "universidad no puede estar vacia"          
          })
     }
 )


module.exports = carreraSchema