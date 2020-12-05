
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const offer_content = await context.models.Offer_Content.findByPk(args.id);

    const deletedOffer_content = await context.models.Offer_Content.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedOffer_content ? offer_content : new EmptyResultError("Offer Content not found!");
  } catch (error) {
    throw new Error(error);
  }
};