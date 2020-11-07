const {
  addOfferValidation
} = require('../../validation/offer')

module.exports = async (_, args, context) => {
  await addOfferValidation.validateAsync(args, {
    abortEarly: false
  });
  const offer = await context.models.Offer.create({
    ...args
  });
  return offer;
};