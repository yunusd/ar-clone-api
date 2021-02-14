module.exports = async (...args) => {
    const [, params, context, ] = args;
    let comments = await context.models.Comment.findAll({
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
    }, {
        offset: params.offset,
        limit: params.limit
    });
    let count = await context.models.Comment.count({
        where: {
            userId: params.userId
        }
    });

    comments = JSON.parse(JSON.stringify(comments, null, 4));

    let commentAll = {
        count: count,
        comments: comments
    }

    return commentAll;
};