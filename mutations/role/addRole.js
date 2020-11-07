
module.exports = async (_, args, context) => {
    // add joi validation
    const role = await context.models.Role.create({
      ...args
    });
    return role;
  };