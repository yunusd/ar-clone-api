const Joi = require('joi');

module.exports.addUser_RoleValidation = Joi.object().keys({
  roleId: Joi.number().integer().min(1).required(),
  userId: Joi.number().integer().min(1).required(),
});

module.exports.editUser_RoleValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  roleId: Joi.number().integer().min(1).required(),
  userId: Joi.number().integer().min(1).required(),
});

