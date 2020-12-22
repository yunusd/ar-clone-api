const makeOffer = require('../../autoOffer/makeOffer');
const {
  addServiceValidation
} = require('../../validation/service')

module.exports = async (_, args, context) => {
  await addServiceValidation.validateAsync(args, {
    abortEarly: false
  });

  const service = await context.models.Service.create({
    posterPath: args.posterPath,
    price: args.price,
    categoryId: args.categoryId,
    userId: args.userId,
    addressId: args.addressId,
    contents: args.contents,
    calendarId: args.calendarId,
    description: args.description
  }, {
    include: {
      model: context.models.ServiceContent,
      as: "contents"
    }
  });

    if (service != null)
      await makeOffer(service.id);  

  return service;
};