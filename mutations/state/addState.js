const {
  addStateValidation
} = require('../../validation/state')
const createLanguage = require('../../helpers/generateLanguageObject');

module.exports = async (_, args, context) => {

  await addStateValidation.validateAsync(args, {
    abortEarly: false
  });

  let state = await context.models.State.create({
    ...args,
  });

  state = JSON.parse(JSON.stringify(state, null, 4));

  await createLanguage({
    model: state,
    stateId: state.id
  });
  
  return state;
};