  // TODO : joi
  module.exports = async (_, args, context) => {
      const content = await context.models.ServiceContent.create({
          ...args
      });
      return content;
  };