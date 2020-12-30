module.exports = async (...args) => {
    const [, params, context, ] = args;
    const comment = await context.models.Comment.findByPk(params.id, {
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
        ]
    });
    return comment;
};