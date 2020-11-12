module.exports = async (...args) => {
    const [, params, context, ] = args;
    const status = await context.models.Status.findByPk(params.id);
    return status;
};