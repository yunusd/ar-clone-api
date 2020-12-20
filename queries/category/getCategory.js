module.exports = async (...args) => {
  const [, params, context, ] = args;
  const category = await context.models.Category.findByPk(params.id, {
    include: { model: context.models.Service, as: "services" },
    include: { model: context.models.Faq, as: "faqs" },
    include: { model: context.models.RequiredDocument, as: "requiredDocuments" },
    include: { model: context.models.Question, as: "questions",include: {model: context.models.QuestionOption, as: "options"} },
  });
  return category;
};