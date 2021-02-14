const Joi = require('joi');


module.exports.registerUserValidation = Joi.object().keys({
  firstName: Joi.string().min(3).max(20).required(),
  posterPath: Joi.string(),
  lastName: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  userName: Joi.string().required(),
  phoneNumber: Joi.string().alphanum().min(12).max(20).required(),
  password: Joi.string().required()
});

//TODO: password kontrolleri cognito ile uyumlu olmalı