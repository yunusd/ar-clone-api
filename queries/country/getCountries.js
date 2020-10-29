
module.exports = async (...args) => {
    const [, , context, ] = args;
    const countries = await context.models.Country.findAll(
      {
          where: { stateId: params.stateId },
          include: { model: context.models.State, as: "states" },
          include: { model: context.models.City, as: "cities" },
        
      }
    );
    return countries;
  };