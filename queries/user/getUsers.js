module.exports = async (...args) => {
  const [, , context, ] = args;
  const users = await context.models.User.findAll({
    include: {
      model: context.models.Adress,
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