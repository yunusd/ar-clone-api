const lodash = require('lodash');

module.exports = async (...args) => {
  const [, params, context, ] = args;
  let category = await context.models.Category.findByPk(params.id, {
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
  category = JSON.parse(JSON.stringify(category, null, 4));


  let providerUsers = await context.models.User_Category.findAll({
    where: {
      categoryId: category.id,
      status : "approved"
    }
  });

  let comments = await context.models.Comment.findAll({
    include: {
      model: context.models.Service,
      as: "service"
    },
  })
 
  comments = JSON.parse(JSON.stringify(comments, null, 4));

    if (comments != null) {      
      comments = lodash.filter(comments,function (comment) {
        return comment.service.categoryId == category.id 
      })
    }
    category.providerUsers = providerUsers.dataValues.length != 0 ? providerUsers.dataValues.length : 0;
    category.commentCount = comments.length != null ? comments.length : 0;
    category.avaregeRating = 0;

  if (comments != null) {    
    for (let index = 0; index < comments.length; index++) {
      const element = comments[index];
      category.avaregeRating += element.point;
    }
    if (comments.length > 0) {
      category.avaregeRating = category.avaregeRating / comments.length
    }
  }

  return category;
};