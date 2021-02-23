
module.exports = async (_, args, context) => {

  const role = await context.models.Role.create({
    ...args
  });
  return role;
};