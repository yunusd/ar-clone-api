const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const faq = await context.models.Faq.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return faq[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Faq not found!");
  }
};