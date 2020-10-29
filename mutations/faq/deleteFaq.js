const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const faq = await context.models.Faq.findByPk(args.id);

    const deletedFaq = await context.models.Faq.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedFaq ? catalog : new EmptyResultError("Faq not found!");;
  } catch (error) {
    throw new Error(error);
  }
};