module.exports = async (...args) => {
  const [, params, context, ] = args;
  const question = await context.models.Question.findByPk(params.id, {
    include: {
      model: context.models.QuestionOption,
      as: "options"
    },
  });
  return question;
};