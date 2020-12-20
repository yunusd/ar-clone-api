  
  module.exports = async (_, args, context) => {

    const offer_content = await context.models.Offer_Content.create({
      ...args
    });
    return offer_content;
  };