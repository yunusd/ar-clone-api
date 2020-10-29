module.exports = async (...args) => {
  const [, params, context, ] = args;
  const questions = await context.models.Question.findAll({
    where: {
      categoryId: params.categoryId
    },
    include: [{
      model: context.models.QuestionOption,
      as: "options"
    }],
  });
  return offers;
};