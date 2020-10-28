
module.exports = async (...args) => {
  const [, params, context, ] = args;
  const questions = await context.models.Question.findAll({
    where: { CategoryId: params.categoryId },
  });
  return questions;
};