const Joi = require('joi');

module.exports.addQuestionValidation = Joi.object().keys({
    categoryId: Joi.number().integer().min(1).required(),
    name: Joi.string().alphanum().min(3).max(250).required(),
    description: Joi.string().alphanum().min(3).max(250).required(),
    type: Joi.string().alphanum().min(3).max(50).required(),
});

module.exports.editQuestionValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  categoryId: Joi.number().integer().min(1).required(),
  name: Joi.string().alphanum().min(3).max(250).required(),
  description: Joi.string().alphanum().min(3).max(250).required(),
  type: Joi.string().alphanum().min(3).max(50).required(),
});
