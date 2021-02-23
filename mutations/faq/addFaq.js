
const createLanguage = require('../../helpers/generateLanguageObject');

module.exports = async (_, args, context) => {

  let faq = await context.models.Faq.create({
    ...args,
  });
  faq = JSON.parse(JSON.stringify(faq, null, 4));

  await createLanguage({
    model: faq,
    faqId: faq.id
  });

  return faq;
};