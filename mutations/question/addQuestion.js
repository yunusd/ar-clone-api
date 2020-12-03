const {
  includes
} = require('lodash');
const {
  addQuestionValidation
} = require('../../validation/question')
const {
  addQuestionOptionValidation
} = require('../../validation/questionOption')

module.exports = async (_, args, context) => {
  await addQuestionValidation.validateAsync(args, {
    abortEarly: false
  });
  args.type = args.options.length == 2 ? "trueFalse" : args.options.length > 2 && args.options.length < 5 ? "singleChoice" : "dropDown";
  console.log(args.options)
  const question = await context.models.Question.create({
    name: args.name,
    description: args.description,
    categoryId: args.categoryId,
    type: args.type,
    options: args.options
  }, {
    include: {
      model: context.models.QuestionOption,
      as: "options"
    }

  });
  await question.save();
  
  return question
};