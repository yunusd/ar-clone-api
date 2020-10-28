
module.exports = async (...args) => {
  const [, params, context, ] = args;
  const question = await context.models.Question.findByPk(params.id);
  return question;
};