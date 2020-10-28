
module.exports = async (...args) => {
  const [, params, context, ] = args;
  const offer = await context.models.Offer.findByPk(params.id, {
    include: [
      { model: context.models.Service, as: "services" },
      { model: context.models.User, as: "user" },
    ],
  });
  return offer;
};