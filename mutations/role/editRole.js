
module.exports = async (_, args, context) => {
    // add joi validation
    try {
      const role = await context.models.Role.update({ ...args }, {
        where: {
          id: args.id
        },
        returning: true,
        plain: true
      });
      return role[1].dataValues;
    } catch (error) {
      throw new EmptyResultError("Role not found!");
    }
  };