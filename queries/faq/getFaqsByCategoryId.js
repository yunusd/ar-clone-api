
module.exports = async (...args) => {
    const [, params, context, ] = args;
    const faqs = await context.models.Faq.findAll(
      {
          where: { categoryId: params.categoryId }        
      }
    );
    return faqs;
  };