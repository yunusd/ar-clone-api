const {
  addStateValidation
} = require('../../validation/state')

module.exports = async (_, args, context) => {
  await addStateValidation.validateAsync(args, {
    abortEarly: false
  });
  const state = await context.models.State.create({
    ...args,
  });
  return state;
};