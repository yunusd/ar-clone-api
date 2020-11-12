module.exports = async (...args) => {
    const [, , context, ] = args;
    const statuses = await context.models.Status.findAll();
    return statuses;
};