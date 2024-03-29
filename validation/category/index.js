const Joi = require('joi');


module.exports.addCategoryValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(50).required(),
  posterPath: Joi.string(),
  minPrice: Joi.number().integer(),
  maxPrice: Joi.number().integer(),
  isPriceRange:Joi.boolean(),
  catalogId: Joi.number().integer().min(1).required()
});

module.exports.editCategoryValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  posterPath: Joi.string(),
  name: Joi.string().alphanum().min(3).max(50).required(),
  minPrice: Joi.number().integer(),
  maxPrice: Joi.number().integer(),
  isPriceRange:Joi.boolean(),
  catalogId: Joi.number().integer().min(1).required()
});

