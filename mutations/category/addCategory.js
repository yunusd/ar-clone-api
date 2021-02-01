const createLanguage = require('../../helpers/generateLanguageObject');


module.exports = async (_, args, context) => {

  let category = await context.models.Category.create({
    name: args.name,
    posterPath: args.posterPath,
    minPrice: args.minPrice,
    maxPrice: args.maxPrice,
    isPriceRange: args.isPriceRange,
    description: args.description,
    requiredDocuments: args.requiredDocuments
  }, {
    include: {
      model: context.models.RequiredDocument,
      as: "requiredDocuments"
    }
  });
  await category.save();
  category = JSON.parse(JSON.stringify(category, null, 4));

  await createLanguage({
    model: category,
    categoryId: category.id
  });

  if (category.requiredDocuments) {
    for (let index = 0; index < catalog.requiredDocuments.length; index++) {
      const reqDocument = catalog.requiredDocuments[index];
      await createLanguage({
        model: reqDocument,
        requiredDocumentId: reqDocument.id
      });
    }
  }

  return category;
};