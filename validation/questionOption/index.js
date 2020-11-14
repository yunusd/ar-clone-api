const Joi = require('joi');

module.exports.addQuestionOptionValidation = Joi.object().keys({
    text: Joi.string().min(3).max(250).required(),
    price: Joi.number().integer().required(),

});

module.exports.editQuestionOptionValidation = Joi.object().keys({
  text: Joi.string().min(3).max(250).required(),
  price: Joi.number().integer().required(),
});
