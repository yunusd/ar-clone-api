module.exports = async (...args) => {
    const [, params, context, ] = args;

    let comments = await context.models.Comment.findAll({
        include: 
        [
            {
          model: context.models.Service,
          as: "service",
          where: {
              categoryId : params.categoryId
          }
        },{
            model : context.models.User,
            as: "commentOwner"
        }],
      },{
        offset: params.offset,
        limit: params.limit
      })
      comments = JSON.parse(JSON.stringify(comments, null, 4));
 
      return comments;
};