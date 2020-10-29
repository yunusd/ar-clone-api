module.exports = async (...args) => {
  const [, , context, ] = args;
  const questions = await context.models.Question.findAll({
    include: {
      model: context.models.QuestionOption,
      as: "options"
    },
  });
  return questions;
};