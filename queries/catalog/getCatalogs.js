
const db = require("db/models");

module.exports = async (...args) => {
  const [, , context, ] = args;
  const catalogs = await context.models.Catalog.findAll({
    include: { model: db.Category, as: "categories" },
  });
  return catalogs;
};