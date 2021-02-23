const { EmptyResultError } = require('sequelize');
const deleteLang = require('../../helpers/deleteLanguageObject');

module.exports = async (_, args, context) => {
  try {
    let state = await context.models.State.findByPk(args.id);

    const deletedState = await context.models.State.destroy({
      where: {
        id: args.id,
      }
    });

    state = JSON.parse(JSON.stringify(state, null, 4));

    await deleteLang({
      model: state,
      stateId: state.id
    })
    return deletedState ? state : new EmptyResultError("State not found!");;
  } catch (error) {
    throw new Error(error);
  }
};