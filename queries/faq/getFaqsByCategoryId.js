
module.exports = async (...args) => {
    const [, , context, ] = args;
    const faqs = await context.models.Faq.findAll(
      {
          where: { categoryId: params.categoryId }        
      }
    );
    return faqs;
  };