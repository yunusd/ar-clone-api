const {
  includes
} = require('lodash');
const {
  addQuestionValidation
} = require('../../validation/question')
const {
  addQuestionOptionValidation
} = require('../../validation/questionOption')
const createLanguage = require('../../helpers/generateLanguageObject');

module.exports = async (_, args, context) => {

  args.type = args.options.length == 2 ? "trueFalse" : args.options.length > 2 && args.options.length < 5 ? "singleChoice" : "dropDown";
  console.log(args.options)
  let question = await context.models.Question.create({
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

  question = JSON.parse(JSON.stringify(question, null, 4));

  await createLanguage({
    model: question,
    questionId: question.id
  });

  if (question.options) {
    for (let index = 0; index < question.options.length; index++) {
      const questionOption = question.options[index];
      await createLanguage({
        model: questionOption,
        questionOptionId: questionOption.id
      });
    }
  }

  return question
};