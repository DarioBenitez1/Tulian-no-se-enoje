const Joi = require('joi')

const materiaSchema = Joi.object().keys(
     {
          nombre: Joi.string().max(100).required().messages({
              "string.max": "nombre debe tener como maximo {#limit}",
              "any.required": "nombre es requerido",
              "string.empty": "nombre no puede ser vacio"
          }),
          cuatrimestral: Joi.number().integer().max(5).required().messages({
            "number.max": "cuatrimestral debe tener como maximo {#limit}",
            "any.required": "cuatrimestral es requerido",
            "any.empty": "cuatrimestral no puede estar vacio"
          }),
          anio: Joi.number().integer().max(20).required().messages({
            "number.max": "anio debe tener como maximo {#limit}",
            "any.required": "anio es requerida",
            "any.empty": "anio no puede estar vacio"          
          }),
      
})


module.exports = materiaSchema