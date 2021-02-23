const { EmptyResultError } = require('sequelize');
const editLanguage = require('../../helpers/editLanguageObject');

module.exports = async (_, args, context) => {

  try {
    let state = await context.models.State.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    state = JSON.parse(JSON.stringify(state[1], null, 4));

    await editLanguage({
      model: state,
      stateId : state.id,
    });

    return state;
  } catch (error) {
    throw new EmptyResultError("State not found!");
  }
};