module.exports = async (...args) => {
    const [, params, context, ] = args;
    const country = await context.models.Country.findByPk(params.id,{
        include: { model: context.models.State, as: "states" },
        include: { model: context.models.City, as: "cities" },    
    });
    return country;
  };