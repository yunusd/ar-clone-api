
module.exports = async (...args) => {
    const [, , context, ] = args;
    const cities = await context.models.City.findAll(
      {
          where: { countryId: params.countryId }        
      }
    );
    return cities;
  };