const Joi = require('joi');
const { FLOAT, BOOLEAN } = require('sequelize/types');


module.exports.addCategoryValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(50).required(),
  minPrice: Joi.types(FLOAT),
  maxPrice: Joi.types(FLOAT),
  isPriceRange:Joi.types(BOOLEAN),
  phoneNumber: Joi.string().alphanum().min(12).max(20).required(),
  catalogId: Joi.number().integer().min(1).required()
});

module.exports.editCategoryValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().alphanum().min(3).max(50).required(),
  minPrice: Joi.types(FLOAT),
  maxPrice: Joi.types(FLOAT),
  isPriceRange:Joi.types(BOOLEAN),
  phoneNumber: Joi.string().alphanum().min(12).max(20).required(),
  catalogId: Joi.number().integer().min(1).required()
});

