module.exports = async (...args) => {
    const [, params, context, ] = args;
    const faq = await context.models.Faq.findByPk(params.id);
    return faq;
  };