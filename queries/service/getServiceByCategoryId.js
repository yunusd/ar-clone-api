module.exports = async (...args) => {
  const [, params, context, ] = args;
  const questions = await context.models.Question.findAll({
    where: {
      CategoryId: params.categoryId
    },
    include: {
      model: context.models.Adress,
      as: "adress"
    },
    include: {
      model: context.models.Offer,
      as: "offers"
    }
  });
  return questions;
};