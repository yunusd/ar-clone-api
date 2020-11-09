const Joi = require('joi');

module.exports.addOfferValidation = Joi.object().keys({
   userId: Joi.number().integer().min(1).required(),
   serviceId: Joi.number().integer().min(1).required(),
   price: Joi.integer().require()
});

module.exports.editOfferValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  userId: Joi.number().integer().min(1).required(),
  serviceId: Joi.number().integer().min(1).required(),
  price: Joi.integer().require()
});
