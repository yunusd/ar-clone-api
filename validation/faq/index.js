const Joi = require('joi');

module.exports.addFaqValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(50).required(),
  question: Joi.string().alphanum().min(3).max(150).required(),
  answer: Joi.string().alphanum().min(3).max(250).required(),
  categoryId: Joi.number().integer().min(1).required()
});

module.exports.editFaqValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().alphanum().min(3).max(50).required(),
  question: Joi.string().alphanum().min(3).max(150).required(),
  answer: Joi.string().alphanum().min(3).max(250).required(),
  categoryId: Joi.number().integer().min(1).required()
});
