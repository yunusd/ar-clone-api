module.exports = async (...args) => {
  const [, params, context, ] = args;
  const service = await context.models.Service.findByPk(params.id);
  return service;
};