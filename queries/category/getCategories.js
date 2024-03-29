const lodash = require('lodash');

module.exports = async (...args) => {
  const [, params, context, ] = args;
  let categories = await context.models.Category.findAll({
    include: [{
        model: context.models.Service,
        as: "services"
      },
      {
        model: context.models.Faq,
        as: "faqs"
      },
      {
        model: context.models.RequiredDocument,
        foreingkey: "categoryId",
        as: "requiredDocuments"
      },
      {
        model: context.models.Question,
        as: "questions",
        include: {
          model: context.models.QuestionOption,
          as: "options"
        }
      },
    ]
  });

  if (params.catalogId != null && categories != null) {
    categories = lodash.filter(categories, function (x) {
      if (x.dataValues.catalogId != null) {
        return x.dataValues.catalogId == params.catalogId
      }
    });
  }
  return categories;
};