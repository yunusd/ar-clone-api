
module.exports = async (...args) => {
    const [, , context, ] = args;
    const states = await context.models.State.findAll(
      {
          where: { countryId: params.countryId },
          include: { model: context.models.City, as: "cities" },        
      }
    );
    return states;
  };