const Joi = require('joi');

module.exports.addServiceValidation = Joi.object().keys({
    categoryId: Joi.number().integer().min(1).required(),
    addressId: Joi.number().integer().min(1).required(),
    userId: Joi.number().integer().min(1).required(),
    name: Joi.string().alphanum().min(3).max(50).required(),
    posterPath: Joi.string().alphanum().min(3).required(),
    price: Joi.integer(),
});

module.exports.editServiceValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  categoryId: Joi.number().integer().min(1).required(),
  addressId: Joi.number().integer().min(1).required(),
  userId: Joi.number().integer().min(1).required(),
  name: Joi.string().alphanum().min(3).max(50).required(),
  posterPath: Joi.string().alphanum().min(3).required(),
  price: Joi.integer(),
});
