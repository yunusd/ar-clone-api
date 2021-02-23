
module.exports = async (_, args, context) => {

  const adress = await context.models.Address.create({
    ...args,
  });
  return address;
};