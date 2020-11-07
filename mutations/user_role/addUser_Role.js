const {
  addUser_RoleValidation
} = require('../../validation/user_role')

module.exports = async (_, args, context) => {
  await addUser_RoleValidation.validateAsync(args, {
    abortEarly: false
  });
  const user_role = await context.models.User_Role.create({
    ...args
  });
  return user_role;
};