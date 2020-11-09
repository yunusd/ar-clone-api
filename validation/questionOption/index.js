const Joi = require('joi');
const { FLOAT } = require('sequelize/types');

module.exports.addQuestionOptionValidation = Joi.object().keys({
    questionId: Joi.number().integer().min(1).required(),
    text: Joi.string().alphanum().min(3).max(250).required(),
    minPrice: Joi.integer().require(),
    maxPrice: Joi.integer().require()
});

module.exports.editQuestionOptionValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  questionId: Joi.number().integer().min(1).required(),
  text: Joi.string().alphanum().min(3).max(250).required(),
  minPrice: Joi.integer().require(),
  maxPrice: Joi.integer().require()
});
