
module.exports = async (_, args, context) => {
    const city = await context.models.City.create({
      ...args,
    });
    return city;
  };