module.exports = async (...args) => {
    const [, params, context, ] = args;
    const calendar = await context.models.Calendar.findByPk(params.id);
    return calendar;
};