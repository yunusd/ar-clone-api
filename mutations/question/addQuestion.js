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
  const question = await context.models.Question.create({
    ...args
  });
  question.options = [];
  for (let index = 0; index < args.options.length; index++) {
    const option = args.options[index];
    await addQuestionOptionValidation.validateAsync(option, {
      abortEarly: false
    });
    const newOption = await models.QuestionOption.create({
      optionText: option.optionText,
      maxPrice: option.maxPrice,
      minPrice: option.minPrice,
      questionId: question.id,
    });
    question.options.push(newOption);
  }

  await context.models.QuestionOption.bulkCreate(args.options, {
    returning: true
  })
  return question
};
