
const db = require("db/models");

module.exports = async (...args) => {
  const [, params, context, ] = args;
  const category = await context.models.Category.findByPk(params.id, {
    include: { model: db.Service, as: "services" },
  });
  return category;
};