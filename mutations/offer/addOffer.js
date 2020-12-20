const {
  addOfferValidation
} = require('../../validation/offer')

module.exports = async (_, args, context) => {
  await addOfferValidation.validateAsync(args, {
    abortEarly: false
  });

  // TODO : permission için contexten gelen izin kontrol edilmeli.

  const getService = await context.models.Service.findByPk(args.serviceId ,{
    include: {
      model: context.models.Offer,
      as: "offers"
    }
  });

  function isAnyOffer(element,index,array) {
    return element.userId == args.userId;
  }
  function isAnyWinnerOffer(element,index,array) {
    return element.isWinnerOffer == true;
  }
  
  if (getService.offers.some(isAnyWinnerOffer)) {
    return Error;
    // TODO : servisde kazanan bir offer mevcut yeni offer create edilemez.
  }
  if (!getService.offers.some(isAnyOffer)) {
    return Error;
    // TODO : eğer gelen offer isteği sahininin başka bir offer ı var ise hata atılacak.
  }
  const offer = await context.models.Offer.create({
    ...args
  });
  return offer;
};