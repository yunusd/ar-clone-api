const { Op } = require("sequelize");
const resolvers = {
  Query: {
    async getUser(
      root,
      { id, firstName, lastName, phoneNumber, email },
      { models }
    ) {
      return models.User.findAll({
        where: {
          [Op.or]: [
            { id: id },
            { firstName: firstName },
            { lastName: lastName },
            { phoneNumber: phoneNumber },
            { email: email },
          ],
        },
      });
    },

    async getCatalog(root, { id, name }, { models }) {
      return models.Catalog.findAll({
        where: {
          [Op.or]: [{ id: id }, { name: name }],
        },
      });
    },

    async getCategory(
      root,
      { id, name, isPriceRange, price, catalogId, minPrice, maxPrice },
      { models }
    ) {
      return models.Category.findAll({
        where: {
          [Op.or]: [
            { id: id },
            { name: name },
            { isPriceRange: isPriceRange },
            { price: price },
            { catalogId: catalogId },
          ],
          [Op.and]: [{ minPrice: minPrice }, { maxPrice: maxPrice }],
        },
      });
    },

    async getOffer(root, { id, price, userId, serviceId }, { models }) {
      return models.Offer.findAll({
        where: {
          [Op.or]: [
            { id: id },
            { price: price },
            { userId: userId },
            { serviceId: serviceId },
          ],
        },
      });
    },
    async getService(
      root,
      { id, name, price, categoryId, userId },
      { models }
    ) {
      return models.Service.findAll({
        where: {
          [Op.or]: [
            { id: id },
            { name: name },
            { price: price },
            { categoryId: categoryId },
            { userId: userId },
          ],
        },
      });
    },
    async getQuestion(root, { id, categoryId }, { models }) {
      return models.Question.findAll({
        include: {
          model: QuestionOption,
          required: true,
        },
        where: {
          [Op.or]: [{ id: id }, { categoryId: categoryId }],
        },
      });
    },
  },
  Mutation: {
    async createQuestion(
      root,
      { question, description, questionType, categoryId, questionOptions },
      { models }
    ) {
      return models.Question.create({
        question,
        description,
        questionType,
        categoryId,
        questionOptions,
      });
    },
    async createQuestionOption(
      root,
      { optionText, maxPrice, minPrice, questionId },
      { models }
    ) {
      return models.QuestionOption.create({
        optionText,
        maxPrice,
        minPrice,
        questionId,
      });
    },
    async createUser(root, { firstName, lastName, email }, { models }) {
      return models.User.create({
        firstName,
        lastName,
        email,
      });
    },
    async createCatalog(root, { name }, { models }) {
      return models.Catalog.create({
        name,
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

    async createOffer(root, { price, userId, serviceId }, { models }) {
      return models.Offer.create({
        price,
        userId,
        serviceId,
      });
    },
    async createService(
      root,
      { name, posterPath, price, categoryId, userId },
      { models }
    ) {
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
