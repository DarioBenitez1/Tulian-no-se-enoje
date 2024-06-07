const Joi = require('joi')

// const serieSchema = Joi.object().keys(
//     {
//          nombre: Joi.string().max(50).required().messages({
//              "string.max": "nombre debe tener como maximo {#limit}",
//              "any.required": "nombre es requerido",
//              "string.empty": "nombre no puede ser vacio"
//          }),
//          disponible: Joi.boolean().required().messages({
//              "any.required": "nombre es requerido"
//          }),
//          plataforma: Joi.string().max(50).required().valid("netflix","start plus","flow").messages({
//              "any.required": "nombre debe tener como maximo {#limit}",
//              "any.only": "las plataforma solo pueden ser netflix, start o plusflow"
           
//          })
//     }
// )


module.exports = serieSchema