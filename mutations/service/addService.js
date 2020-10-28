
module.exports = async (_, args, context) => {
  // add joi validation
  const service = await context.models.Service.create({
    ...args
  });
  return service;
};