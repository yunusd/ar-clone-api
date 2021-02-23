const { EmptyResultError } = require('sequelize');
const deleteLang = require('../../helpers/deleteLanguageObject');

module.exports = async (_, args, context) => {
  try {
    let faq = await context.models.Faq.findByPk(args.id);

    const deletedFaq = await context.models.Faq.destroy({
      where: {
        id: args.id,
      }
    });
    faq = JSON.parse(JSON.stringify(faq, null, 4));

    await deleteLang({
      model: faq,
      faqId: faq.id
    })
    return deletedFaq ? faq : new EmptyResultError("Faq not found!");;
  } catch (error) {
    throw new Error(error);
  }
};