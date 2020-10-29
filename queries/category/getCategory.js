

module.exports = async (...args) => {
  const [, params, context, ] = args;
  const category = await context.models.Category.findByPk(params.id, {
    include: { model: context.models.Service, as: "services" },
    include: { model: context.models.Faq, as: "faqs" },
    include: { model: context.models.Question, as: "questions" },
  });
  return category;
};