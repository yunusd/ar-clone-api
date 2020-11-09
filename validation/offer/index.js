const Joi = require('joi');

module.exports.addOfferValidation = Joi.object().keys({
   userId: Joi.number().integer().min(1).required(),
   serviceId: Joi.number().integer().min(1).required(),
   price: Joi.number().integer().required()
});

module.exports.editOfferValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  userId: Joi.number().integer().min(1).required(),
  serviceId: Joi.number().integer().min(1).required(),
  price: Joi.number().integer().required()
});
