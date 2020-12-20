
module.exports = async (...args) => {
    const [, , context, ] = args;
    const countries = await context.models.Country.findAll(
      {
          include: { model: context.models.State, as: "states" },
          include: { model: context.models.City, as: "cities" },
        
      }
    );
    return countries;
  };