module.exports = async (...args) => {
  const [, params, context, ] = args;
  const user_category = await context.models.User_Category.findByPk(params.id, {
    include: [{
        model: context.models.User,
        as: "user"
      },
      {
        model: context.models.Category,
        as: "category"
      },
      {
        model: context.models.Status,
        as: "status"
      },
      {
        model: context.models.Document,
        as: "documents"
      },
      {
        model: context.models.Rule,
        as: "rules",
        include: {
          model: context.models.RuleContent,
          as: "contents",
          include: {
            model: context.models.Calendar,
            as: "calendars"
          }
        }
      },
    ]
  });
  return user_category;
};