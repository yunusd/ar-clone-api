const Joi = require('joi');


module.exports.addAddressValidation = Joi.object().keys({
  street: Joi.string().alphanum().min(3).max(50).required(),
  zipCode: Joi.string().alphanum().min(2).max(20).required(),
  deliveryPhoneNumber: Joi.number().min(7).max(12).required(),
  addressDirections: Joi.string().alphanum(2).max(100),
  cityId: Joi.number().integer().min(1).required(),
  stateId: Joi.number().integer().min(1),
  countryId: Joi.number().integer().min(1).required()  
})

module.exports.editAdressValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  street: Joi.string().alphanum().min(3).max(50).required(),
  zipCode: Joi.string().alphanum().min(2).max(15).required(),
  deliveryPhoneNumber: Joi.number().min(7).max(13).required(),
  addressDirections: Joi.string().alphanum(2).max(100),
  cityId: Joi.number().integer().min(1).required(),
  stateId: Joi.number().integer().min(1),
  countryId: Joi.number().integer().min(1).required()  
})