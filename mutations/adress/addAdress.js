
module.exports = async (_, args, context) => {
  const adress = await context.models.Adress.create({
    ...args,
  });
  return adress;
};