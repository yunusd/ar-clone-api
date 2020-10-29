
module.exports = async (_, args, context) => {
    const state = await context.models.State.create({
      ...args,
    });
    return state;
  };