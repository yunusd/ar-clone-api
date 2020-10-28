module.exports = async (...args) => {
  const [, , context, ] = args;
  const questions = await context.models.Question.findAll();
  return questions;
};