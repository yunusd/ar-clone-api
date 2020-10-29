module.exports = async (...args) => {
  const [, , context, ] = args;
  const users = await context.models.User.findAll({
    include: {
      model: context.models.Adress,
      as: "adress"
    },
  });
  return users;
};