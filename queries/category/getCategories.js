
module.exports = async (...args) => {
  const [, , context, ] = args;
  const category = await context.models.Category.findAll({
    include: { model: context.models.Service, as: "services" },
    include: { model: context.models.Faq, as: "faqs" },
    include: { model: context.models.Question, as: "questions" },
  });
  return category;
};