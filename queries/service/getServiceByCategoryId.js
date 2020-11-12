module.exports = async (...args) => {
  const [, params, context, ] = args;
  const questions = await context.models.Service.findAll({
    where: {
      CategoryId: params.categoryId
    },
    include: {
      model: context.models.Address,
      as: "address"
    },
    include: {
      model: context.models.Offer,
      as: "offers"
    },
    order: [
      ['id', 'DESC'],
  ],
  });
  return questions;
};