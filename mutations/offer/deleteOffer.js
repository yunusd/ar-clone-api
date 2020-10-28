
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const offer = await context.models.Offer.findByPk(args.id);

    const deletedOffer = await context.models.Offer.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedOffer ? offer : new EmptyResultError("Offer not found!");
  } catch (error) {
    throw new Error(error);
  }
};