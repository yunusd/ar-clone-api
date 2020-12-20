//TODO: joi
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const content = await context.models.ServiceContent.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return content[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("ServiceContent not found!");
  }
};