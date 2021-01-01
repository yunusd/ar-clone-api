const lodash = require('lodash');


module.exports = async (...args) => {
  const [,params , context, ] = args;
  let services = await context.models.Service.findAll({
    include: {
      model: context.models.Address,
      as: "address"
    }, 
    include: {
      model: context.models.Offer,
      as: "offers"
    }, 
    include: {
      model: context.models.Faq,
      as: "faqs"
    }, 
    include: {
      model: context.models.ServiceContent,
      as: "serviceContents"
    }
  });

  if (params.categoryId !=   null && services != null) {
    services = lodash.filter(services, function (x) {
      if (x.dataValues.categoryId != null) {
        return x.dataValues.categoryId == params.categoryId
      }
    });
  }



  return services;
};