const {addQuestionValidation} = require('../../validation/question')
const {addQuestionOptionValidation} = require('../../validation/questionOption')

module.exports = async (_, args, context) => {
  await addQuestionValidation.validateAsync(args, {
    abortEarly: false
  });
  const question = await context.models.Question.create({
    ...args
  });
  aggregatedOptions = args.options.map((option) => ({...option, questionId: question.id}))

  //TODO:buradaki validation kontrol edilmeli.
  aggregatedOptions.forEach(option => {
    await addQuestionOptionValidation.validateAsync(option, {
      abortEarly: false
    });
  });

  await context.models.QuestionOption.bulkCreate(args.options, { returning: true})
  return question
};

// async createQuestion(
//   root,
//   { question, description, questionType, categoryId, questionOptions },
//   { models }
// ) {
//   const newQuestion = await models.Question.create({
//     question,
//     description,
//     questionType,
//     CategoryId: categoryId,
//     questionOptions,
//   });
//   newQuestion.categoryId = newQuestion.CategoryId;            
//   newQuestion.questionOptions = [];

//   for (let index = 0; index < questionOptions.length; index++) {
//     const options = questionOptions[index];

//     const testOption = {
//       optionText: options.optionText,
//       maxPrice: options.maxPrice,
//       minPrice: options.minPrice,
//       questionId: newQuestion.id,
//     };

//     const newOption = await models.QuestionOption.create({
//       optionText: options.optionText,
//       maxPrice: options.maxPrice,
//       minPrice: options.minPrice,
//       questionId: newQuestion.id,
//     });

//     newQuestion.questionOptions.push(newOption);
//   }

//   return newQuestion;
// },