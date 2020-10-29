
module.exports = async (...args) => {
    const [, , context, ] = args;
    const faqs = await context.models.Faq.findAll();
    return faqs;
  };