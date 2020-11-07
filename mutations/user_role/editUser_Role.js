
module.exports = async (_, args, context) => {
    // add joi validation
    try {
      const user_role = await context.models.User_Role.update({ ...args }, {
        where: {
          id: args.id
        },
        returning: true,
        plain: true
      });
      return user_role[1].dataValues;
    } catch (error) {
      throw new EmptyResultError("User_Role not found!");
    }
  };