const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const offer_content = await context.models.Offer_Content.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return offer_content[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Offer Content not found!");
  }
};