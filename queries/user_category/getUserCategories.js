module.exports = async (...args) => {
    const [, params, context, ] = args;
    const user_category = await context.models.User_Category.findByPk(params.id, {
      include: {
        model: context.models.User,
        as: "user"
      },
      include: {
        model: context.models.Category,
        as: "category"
      },
    });
    return user_category;
  };