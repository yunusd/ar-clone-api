module.exports = async (...args) => {
    const [, params, context, ] = args;
    const state = await context.models.State.findByPk(params.id,
        {
            include: { model: context.models.City, as: "cities" },
        }
        );
    return state;
  };