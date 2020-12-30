module.exports = async (_, args, context) => {

  const category = await context.models.Category.create({
    name: args.name,
    posterPath: args.posterPath,
    minPrice: args.minPrice,
    maxPrice: args.maxPrice,
    isPriceRange: args.isPriceRange,
    requiredDocuments: args.requiredDocuments
  }, {
    include: {
      model: context.models.RequiredDocument,
      as: "requiredDocuments"
    }
  });
  await category.save();
  return category;
};