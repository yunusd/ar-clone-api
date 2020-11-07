const {addFaqValidation} = require('../../validation/faq')

module.exports = async (_, args, context) => {
  await addFaqValidation.validateAsync(args, {
    abortEarly: false
  });
  const faq = await context.models.Faq.create({
    ...args,
  });
  return faq;
};