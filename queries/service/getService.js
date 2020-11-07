module.exports = async (...args) => {
  const [, params, context, ] = args;
  const service = await context.models.Service.findByPk(params.id ,{
    include: {
      model: context.models.Address,
      as: "address"
    }, 
    include: {
      model: context.models.Offer,
      as: "offers"
    }
  });
  return service;
};