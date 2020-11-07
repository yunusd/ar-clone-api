const Joi = require('joi');

module.exports.addStateValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(50).required(),
  countryId: Joi.number().integer().min(1).required(),
});

module.exports.editStateValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().alphanum().min(3).max(50).required(),
  countryId: Joi.number().integer().min(1).required(),
});

