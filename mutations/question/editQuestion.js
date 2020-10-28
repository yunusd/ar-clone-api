
module.exports = async (_, args, context) => {
  // add joi validation
  try {
    const question = await context.models.Question.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return question[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Question not found!");
  }
};