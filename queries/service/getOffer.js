
const db = require("db/models");

module.exports = async (...args) => {
  const [, params, context, ] = args;
  const offer = await context.models.Offer.findByPk(params.id, {
    include: [
      { model: db.Service, as: "services" },
      { model: db.User, as: "user" },
    ],
  });
  return offer;
};