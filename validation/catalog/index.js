const Joi = require('joi');


module.exports.addCatalogValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(3).required(),
  description: Joi.string().alphanum().min(3).required(),
  posterPath: Joi.string()
})

module.exports.editCatalogValidation = Joi.object().keys({
  id: Joi.number().required(),
  description: Joi.string().alphanum().min(3),
  name: Joi.string().alphanum().min(3).max(20),
  posterPath: Joi.string()

})