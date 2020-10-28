
module.exports = async (_, args, context) => {
  // add joi validation
  const category = await context.models.Category.create({
    ...args,
  });
  return category;
};