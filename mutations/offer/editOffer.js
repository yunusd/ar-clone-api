
module.exports = async (_, args, context) => {
  // add joi validation
  try {
    const offer = await context.models.Offer.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return offer[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Offer not found!");
  }
};