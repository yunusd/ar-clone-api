const Joi = require('joi');


module.exports.addCatalogValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(20).required()
})

module.exports.editCatalogValidation = Joi.object().keys({
  id: Joi.number().required(),
  name: Joi.string().alphanum().min(3).max(20).required()
})