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
    contents: args.contents
  }, {
    include: {
      model: context.models.ServiceContent,
      as: "contents"
    }
  });
  // service.contents = [];

  // for (let index = 0; index < args.contents.length; index++) {
  //   const inputContent = args.contents[index];
  //   const insertContent = await context.ServiceContent.create({
  //     questionId: inputContent.questionId,
  //     questionOptionId: inputContent.questionOptionId
  //   });
  //   service.contents.push(insertContent);
  // }

  return service;
};