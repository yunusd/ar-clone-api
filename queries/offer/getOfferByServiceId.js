module.exports = async (...args) => {
  const [, params, context, ] = args;
  const offers = await context.models.Offer.findAll({
    where: {
      serviceId: params.serviceId
    },
    include: [{
        model: context.models.Service,
        as: "service"
      },
      {
        model: context.models.User,
        as: "user"
      },
      {
        model: context.models.Offer_Content,
        as: "contents"
      },
    ],
    order: [
      ['id', 'DESC'],
    ],
  });
  return offers;
};