const Joi = require('joi');

module.exports.addCountryValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(50).required(),
});

module.exports.editCountryValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().alphanum().min(3).max(50).required(),
});

