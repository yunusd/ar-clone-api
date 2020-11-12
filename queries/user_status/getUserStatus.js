module.exports = async (...args) => {
    const [, params, context, ] = args;
    const userstatuses = await context.models.User_Status.findAll({
        where: {
            userId: params.UserId
        },
        include: {
            model: context.models.User,
            as: "user"
        },
        include: {
            model: context.models.Status,
            as: "status"
        }
    });
    return userstatuses;
};