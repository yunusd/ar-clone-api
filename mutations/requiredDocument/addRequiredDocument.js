  module.exports = async (_, args, context) => {

      const requiredDocument = await context.models.RequiredDocument.create({
          ...args
      });
      return requiredDocument;
  };