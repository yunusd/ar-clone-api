
const db = require("db/models");

module.exports = async (...args) => {
  const [, params, context, ] = args;
  const offers = await context.models.Offer.findAll({
    where: { serviceId: params.serviceId },
    include: [
      { model: db.Service, as: "service" },
      ,
      { model: db.User, as: "user" },
    ],
  });
  return offers;
};