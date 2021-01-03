
module.exports = async (_, args, context) => {

  const catalog = await context.models.Catalog.create({
    ...args,
  });
  return catalog;
};