module.exports = async (...args) => {
    const [, params, context, ] = args;
    const city = await context.models.City.findByPk(params.id);
    return city;
  };