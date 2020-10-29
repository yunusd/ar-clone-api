
module.exports = async (_, args, context) => {
  const faq = await context.models.Faq.create({
    ...args,
  });
  return faq;
};