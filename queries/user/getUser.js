module.exports = async (...args) => {
  const [, params, context, ] = args;
  const users = await context.models.User.findByPk(params.id, {
    include: {
      model: context.models.Adress,
      as: "adress"
    },
    include: {
      model: context.models.Catalog,
      as: "userServiceCatalog"
    },
  });
  return users;
};