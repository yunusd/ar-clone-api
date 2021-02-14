module.exports = async (...args) => {
    const [, params, context, ] = args;

    let comments = await context.models.Comment.findAll({
        include: [{
            model: context.models.Service,
            as: "service",
            where: {
                categoryId: params.categoryId
            }
        }, {
            model: context.models.User,
            foreignKey: "commentOwnerId",
            as: 'commentOwner'
        }, ],
    }, {
        offset: params.offset,
        limit: params.limit
    })
    let count = await context.models.Comment.count({
        include: [{
            model: context.models.Service,
            as: "service",
            where: {
                categoryId: params.categoryId
            }
        }],
    });

    comments = JSON.parse(JSON.stringify(comments, null, 4));

    let commentAll = {
        count: count,
        comments: comments
    }

    return commentAll;
};