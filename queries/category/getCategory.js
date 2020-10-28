

module.exports = async (...args) => {
  const [, params, context, ] = args;
  const category = await context.models.Category.findByPk(params.id, {
    include: { model: context.models.Service, as: "services" },
  });
  return category;
};