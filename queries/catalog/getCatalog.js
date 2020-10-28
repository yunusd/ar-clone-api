
const db = require("db/models");

module.exports = async (...args) => {
  const [, params, context, ] = args;
  const catalog = await context.models.Catalog.findByPk(params.id, {
    include: { model: db.Category, as: "categories" },
  });
  return catalog;
};