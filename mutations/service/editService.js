
module.exports = async (_, args, context) => {
  // add joi validation
  try {
    const service = await context.models.Service.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return service[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Service not found!");
  }
};