
module.exports = async (...args) => {
  const [, , context, ] = args;
  const users = await context.models.User.findAll();
  return users;
};