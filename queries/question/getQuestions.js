const lodash = require('lodash');


module.exports = async (...args) => {
  const [,params , context, ] = args;
  let questions = await context.models.Question.findAll({
    include: {
      model: context.models.QuestionOption,
      as: "options"
    },
  });

  if (params.categoryId != null && questions != null) {
    questions = lodash.filter(questions, function (x) {
      if (x.dataValues.categoryId != null) {
        return x.dataValues.categoryId == params.categoryId
      }
    });
  }



  return questions;
};