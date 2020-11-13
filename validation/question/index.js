const { object } = require('joi');
const Joi = require('joi');

module.exports.addQuestionValidation = Joi.object().keys({
    categoryId: Joi.number().integer().required(),
    name: Joi.string().alphanum().min(3).max(250).required(),
    description: Joi.string().alphanum().min(3).max(250).required(),
    options: Joi.required()
});

module.exports.editQuestionValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  categoryId: Joi.number().integer().min(1).required(),
  name: Joi.string().alphanum().min(3).max(250).required(),
  description: Joi.string().alphanum().min(3).max(250).required(),
  options: Joi.required()
});
