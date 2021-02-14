const makeOffer = require('../../autoOffer/makeOffer');

module.exports = async (_, args, context) => {
 
  const service = await context.models.Service.create({
    posterPath: args.posterPath,
    price: args.price,
    categoryId: args.categoryId,
    userId: context.user.id,
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

  // if (service != null)
  //   await makeOffer(service.id);

  return service;
};