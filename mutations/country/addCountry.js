
module.exports = async (_, args, context) => {
    const country = await context.models.Country.create({
      ...args,
    });
    return country;
  };