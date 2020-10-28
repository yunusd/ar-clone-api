
module.exports = async (...args) => {
  const [, , context, ] = args;
  const category = await context.models.Category.findAll({
    include: { model: context.models.Service, as: "services" },
  });
  return category;
};