const {registerUserValidation} = require('validation/user')

module.exports = async (_, args, context) => {
  await registerUserValidation.validateAsync(args, {abortEarly: false});
  const user = await context.models.User.create({
    ...args
  });
  return user;
};