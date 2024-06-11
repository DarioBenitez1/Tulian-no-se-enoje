const Joi = require('joi')

const carreraSchema = Joi.object().keys(
     {
          nombre: Joi.string().max(50).required().messages({
              "string.max": "nombre debe tener como maximo {#limit}",
              "any.required": "nombre es requerido",
              "string.empty": "nombre no puede ser vacio"
          }),
          grado: Joi.string().max(15).required().messages({
            "string.max": "grado debe tener como maximo {#limit}",
            "any.required": "el grado es requerido",
            "string.empty": "el grado no puede ser vacio"
          }),
          universidad: Joi.string().max(50).required().messages({
            "string.max": "universidad debe tener como maximo {#limit}",
            "any.required": "la universidad es requerida",
            "string.empty": "la universidad no puede ser vacia"
           
          })
     }
 )


module.exports = carreraSchema