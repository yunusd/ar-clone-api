const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const adress = await context.models.Adress.findByPk(args.id);

    const deletedAdress = await context.models.Adress.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedAdress ? adress : new EmptyResultError("Adress not found!");;
  } catch (error) {
    throw new Error(error);
  }
};