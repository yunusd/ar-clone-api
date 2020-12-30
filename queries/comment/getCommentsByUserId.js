module.exports = async (...args) => {
    const [, params, context, ] = args;
    const comments = await context.models.Comment.findAll({
        include: [{
                model: context.models.User,
                foreignKey: "commentOwnerId",
                as: 'commentOwner'
            },
            {
                model: context.models.User,
                foreignKey: 'userId',
                as: 'user'
            }
        ],
        where: {
            userId: params.userId
        }
    });
    return comments;
};