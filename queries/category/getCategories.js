
const db = require("db/models");

module.exports = async (...args) => {
  const [, , context, ] = args;
  const category = await context.models.Category.findAll({
    include: { model: db.Service, as: "services" },
  });
  return category;
};