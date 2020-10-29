
module.exports = async (...args) => {
    const [, , context, ] = args;
    const cities = await context.models.City.findAll(
      {
          where: { stateId: params.stateId }        
      }
    );
    return cities;
  };