const {
  addRoleValidation
} = require('../../validation/role')

module.exports = async (_, args, context) => {
  await addRoleValidation.validateAsync(args, {
    abortEarly: false
  });
  const role = await context.models.Role.create({
    ...args
  });
  return role;
};