module.exports = async (...args) => {
    const [, params, context, ] = args;
    const role = await context.models.Role.findByPk(params.id);
    return role;
  };