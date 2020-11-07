const Joi = require('joi');

module.exports.addCityValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(50).required(),
  countryId: Joi.number().integer().min(1).required(),
  stateId: Joi.number().integer(),
});

module.exports.editCityValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().alphanum().min(3).max(50).required(),
  countryId: Joi.number().integer().min(1).required(),
  stateId: Joi.number().integer(),
});

