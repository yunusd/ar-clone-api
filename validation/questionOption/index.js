const Joi = require('joi');

module.exports.addQuestionOptionValidation = Joi.object().keys({
    text: Joi.string().min(3).max(250).required(),
    price: Joi.number().integer().required(),

});

module.exports.editQuestionOptionValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  questionId: Joi.number().integer().min(1).required(),
  text: Joi.string().min(3).max(250).required(),
  price: Joi.number().integer().required(),
});
