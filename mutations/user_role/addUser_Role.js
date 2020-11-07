
module.exports = async (_, args, context) => {
    // add joi validation
    const user_role = await context.models.User_Role.create({
      ...args
    });
    return user_role;
  };