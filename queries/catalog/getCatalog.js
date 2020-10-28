

module.exports = async (...args) => {
  const [, params, context, ] = args;
  const catalog = await context.models.Catalog.findByPk(params.id, {
    include: { model: context.models.Category, as: "categories" },
  });
  return catalog;
};