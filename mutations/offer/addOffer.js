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
    }
  });
  getService = JSON.parse(JSON.stringify(getService, null, 4));

  if (user.user_categories.some(function (user_category) {
    return user_category.categoryId == getService.categoryId && user_category.status.name == "active"
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