const Joi = require('joi');

module.exports.addUser_StatusValidation = Joi.object().keys({
  roleId: Joi.number().integer().min(1).required(),
  statusId: Joi.number().integer().min(1).required(),
});

module.exports.editUser_StatusValidation = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  roleId: Joi.number().integer().min(1).required(),
  statusId: Joi.number().integer().min(1).required(),
});

