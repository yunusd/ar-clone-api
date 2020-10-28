
module.exports = async (_, args, context) => {
  // add joi validation
  const offer = await context.models.Offer.create({
    ...args
  });
  return offer;
};