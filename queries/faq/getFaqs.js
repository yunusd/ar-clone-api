const lodash = require('lodash')
module.exports = async (...args) => {
  const [, params, context, ] = args;
  let faqs = await context.models.Faq.findAll();

  if (params.categoryId != null && faqs != null) {
    faqs = lodash.filter(faqs, function (x) {
      if (x.dataValues.categoryId != null) {
        return x.dataValues.categoryId == params.categoryId
      }
    });
  }

  return faqs;
};