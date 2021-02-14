const { QueryError } = require('sequelize');
const { AccessDeniedError } = require('sequelize');

const {
  addOfferValidation
} = require('../../validation/offer')

module.exports = async (_, args, context) => {
  await addOfferValidation.validateAsync(args, {
    abortEarly: false
  });


  const user = context.user;
  let getService = await context.models.Service.findByPk(args.serviceId, {
    include: {
      model: context.models.Offer,
      as: "offers"
    },
    include:{
      model: context.models.ServiceContent,
      as: "contents",
      include:[
        {
          model: context.models.QuestionOption,
          as: "questionOption"
        }
      ]
    }
  });
  getService = JSON.parse(JSON.stringify(getService, null, 4));

  let getCategory = await context.models.Category.findByPk(args.categoryId);
  getCategory = JSON.parse(JSON.stringify(getCategory, null, 4));

  if (getCategory.isPriceRange == true) {
    let minPrice =0;
    let maxPrice = 0;
    if (getService.contents.length > 0 ) {
      for (let index = 0; index < getService.contents.length; index++) {
        const content = getService.contents[index];
        minPrice += content.QuestionOption.minPrice;
        maxPrice += content.QuestionOption.maxPrice;
      }
    }
    if (args.price == null || args.price < minPrice || args.price > maxPrice) {
      return QueryError("Offer must be between service price range");
    }
  }

  if (user.user_categories.some(function (user_category) {
    return user_category.categoryId == getService.categoryId && user_category.status == "active"
  }) ) {
    return AccessDeniedError("Unauthorized user");
  }


  if (getService.offers.some(function (offer) {
      return offer.isWinnerOffer == true;
    })) {
    return QueryError("Service have winner offer");
  }

  if (getService.offers.some(function (offer) {
      return offer.userId == user.id;
    })) {
      return QueryError("User allready have offer");
  }
  const offer = await context.models.Offer.create({
    ...args
  });
  return offer;
};