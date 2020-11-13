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
  const question = await context.models.Question.create({
    name:args.name,
    description:args.description,
    categoryId:args.categoryId,
    type: args.type
  });
  question.options = [];
  for (let index = 0; index < args.options.length; index++) {
    const option = args.options[index];
    await addQuestionOptionValidation.validateAsync(option, {
      abortEarly: false
    });
    const newOption = await context.models.QuestionOption.create({
      text: option.text,
      price: option.price,
      questionId: question.id,
    });
    question.options.push(newOption);
  }
  
  console.log(question);
  return question
};
