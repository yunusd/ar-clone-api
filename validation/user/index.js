const Joi = require('joi');


module.exports.registerUserValidation = Joi.object().keys({
  firstName: Joi.string().alphanum().min(3).max(20).required(),
  lastName: Joi.string().alphanum().min(3).max(20).required(),
  email: Joi.string().email().required(),
  userName: Joi.string().alphanum().min(3).max(20).required(),
  phoneNumber: Joi.string().alphanum().min(12).max(20).required(),
});