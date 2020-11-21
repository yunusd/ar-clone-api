module.exports = async (...args) => {
  const [, params, context, ] = args;
  const services = await context.models.Service.findAll({
    where: {
      categoryId: params.categoryId
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
  return services;
};