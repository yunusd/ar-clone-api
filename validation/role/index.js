const Joi = require('joi');


module.exports.addRoleValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(20).required()
})

module.exports.editRoleValidation = Joi.object().keys({
  id: Joi.number().required(),
  name: Joi.string().alphanum().min(3).max(20).required()
})