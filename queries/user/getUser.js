module.exports = async (...args) => {
  const [, params, context, ] = args;
  const users = await context.models.User.findByPk(params.id, {
    include: {
      model: context.models.Address,
      as: "address"
    },
    include: {
      model: context.models.Catalog,
      as: "userServiceCatalog"
    },
    include: {
      model: context.models.User_Category,
      as: "userServiceCategories"
    },
  });
  return users;
};