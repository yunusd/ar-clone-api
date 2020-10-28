
module.exports = async (...args) => {
  const [, , context, ] = args;
  const catalogs = await context.models.Catalog.findAll({
    include: { model: context.models.Category, as: "categories" },
  });
  return catalogs;
};