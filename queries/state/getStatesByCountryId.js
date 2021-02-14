
module.exports = async (...args) => {
    const [, params, context, ] = args;
    console.log(params);
    const states = await context.models.State.findAll(
      {
          where: { countryId: params.countryId },
          include: { model: context.models.City, as: "cities" },        
      }
    );
    return states;
  };