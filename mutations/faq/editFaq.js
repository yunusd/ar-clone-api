const { EmptyResultError } = require('sequelize');
const editLanguage = require('../../helpers/editLanguageObject');

module.exports = async (_, args, context) => {
  try {

    let faq = await context.models.Faq.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    faq = JSON.parse(JSON.stringify(faq[1], null, 4));

    await editLanguage({
      model: faq,
      faqId : faq.id,
    });

    return faq;
  } catch (error) {
    throw new EmptyResultError("Faq not found!");
  }
};