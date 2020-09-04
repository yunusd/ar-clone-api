const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findById(id);
    },
    async allUser(root, args, { models }) {
      return models.User.findAll();
    },
    async catalog(root, { id }, { models }) {
      return models.Catalog.findById(id);
    },
    async allCatalog(root, args, { models }) {
      return models.Catalog.findAll();
    },
    async category(root, { id }, { models }) {
      return models.Category.findById(id);
    },
    async allCategory(root, args, { models }) {
      return models.Category.findAll({
        where: {
          [Op.or]: [
            { id: args.id },
            { name: args.name },
            { minPrice: args.minPrice },
            { maxPrice: args.maxPrice },
            { isPriceRange: args.isPriceRange },
            { price: args.price },
            { catalogId: args.catalogId },
          ],
        },
      });
    },
    async allCategoryByCatalogId(root, { id }, { models }) {
      return models.Category.findAll({
        where: {
          catalogId: {
            [Op.eq]: id,
          },
        },
      });
    },
    async allOffer(root, args, { models }) {
      return models.Offer.findAll({
        where: {
          [Op.or]: [
            { id: args.id },
            { price: args.price },
            { userId: args.userId },
            { serviceId: args.serviceId },
          ],
        },
      });
    },
    async allService(root, args, { models }) {
      return models.Service.findAll({
        where: {
          [Op.or]: [
            { id: args.id },
            { name: args.name },
            { price: args.price },
            { categoryId: args.categoryId },
            { userId: args.userId },
          ],
        },
      });
    },
  },
  Mutation: {
    async createUser(root, { firstName, lastName, email }, { models }) {
      return models.User.create({
        firstName,
        lastName,
        email,
      });
    },
    async createCatalog(root, { name }, { models }) {
      return models.Catalog.create({
        name
      });
    },
    async createCategory(
      root,
      { name, minPrice, maxPrice, isPriceRange, price, catalogId },
      { models }
    ) {
      return models.Category.create({
        name,
        minPrice,
        maxPrice,
        isPriceRange,
        price,
        catalogId,
      });
    },

    async createOffer(root, { price,userId,serviceId }, { models }) {
      return models.Offer.create({
        price,
        userId,
        serviceId
      });
    },
    async createService(root, { name,posterPath,price,categoryId,userId }, { models }) {
      return models.Service.create({
        name,
        posterPath,
        price,
        categoryId,
        userId,
      });
    },

  },
};

module.exports = resolvers;
