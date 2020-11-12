const Joi = require('joi');

module.exports.addStatusValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(50).required(),
});

module.exports.editStatusValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().alphanum().min(3).max(50).required(),
});

