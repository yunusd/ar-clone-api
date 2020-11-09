const Joi = require('joi');

module.exports.addQuestionOptionValidation = Joi.object().keys({
    questionId: Joi.number().integer().min(1).required(),
    text: Joi.string().alphanum().min(3).max(250).required(),
    minPrice: Joi.number().integer().required(),
    maxPrice: Joi.number().integer().required()
});

module.exports.editQuestionOptionValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  questionId: Joi.number().integer().min(1).required(),
  text: Joi.string().alphanum().min(3).max(250).required(),
  minPrice: Joi.number().integer().required(),
  maxPrice: Joi.number().integer().required()
});
