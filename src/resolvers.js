const { Op, EmptyResultError, where } = require("sequelize");
const db = require("../db/models");
const user = require("../db/models/user");
const resolvers = {
  Query: {
    async getAllUser(root, args, { models }) {
      return await models.User.findAll();
    },

    async getUser(root, id, { models }) {
      return await models.User.findByPk(id);
    },

    async getAllCatalog(root, args, { models }) {
      return await models.Catalog.findAll({
        include: { model: db.Category, as: "categories" },
      });
    },

    async getCatalog(root, { id }, { models }) {
      return await models.Catalog.findByPk(id, {
        include: { model: db.Category, as: "categories" },
      });
    },

    async getAllCategory(root, args, { models }) {
      return await models.Category.findAll({
        include: { model: db.Service, as: "services" },
      });
    },

    async getCategory(root, { id }, { models }) {
      return await models.Category.findByPk(id, {
        include: { model: db.Service, as: "services" },
      });
    },

    async getOffer(root, { id }, { models }) {
      return await models.Offer.findByPk(id, {
        include: [
          { model: db.Service, as: "services" },
          { model: db.User, as: "user" },
        ],
      });
    },

    async getOfferByServiceId(root, { serviceId }, { models }) {
      return await models.Offer.findAll({
        where: { serviceId: serviceId },
        include: [
          { model: db.Service, as: "service" },
          ,
          { model: db.User, as: "user" },
        ],
      });
    },

    async getService(root, { id }, { models }) {
      return await models.Service.findByPk(id);
    },

    async getServiceByCategoryId(root, { categoryId }, { models }) {
      return await models.Service.findAll({
        where: { CategoryId: categoryId },
      });
    },

    async getQuestion(root, { id }, { models }) {
      return await models.Question.findByPk(id);
    },

    async getQuestionByCategoryId(root, { categoryId }, { models }) {
      return await models.Question.findAll({
        where: { CategoryId: categoryId },
      });
    },
  },

  Mutation: {
    async updateQuestion(
      root,
      { id, question, description, questionType, categoryId },
      { models }
    ) {
      let getQuestion = await models.Question.findByPk(id);
      if (getQuestion == null) throw new EmptyResultError();
      if (question != null) getQuestion.question = question;
      if (description != null) getQuestion.description = description;
      if (questionType != null) getQuestion.questionType = questionType;
      if (categoryId != null) getQuestion.CategoryId = categoryId;
      await getQuestion.save();
      return getQuestion;
    },

    async createQuestion(
      root,
      { question, description, questionType, categoryId },
      { models }
    ) {
      return await models.Question.create({
        question,
        description,
        questionType,
        CategoryId: categoryId,
      });
    },

    async deleteQuestion(root, { id }, { models }) {
      if (
        await models.Question.destroy({
          where: {
            id: id,
          },
        })
      ) {
        return true;
      }
      return false;
    },

    async createQuestionOption(
      root,
      { optionText, maxPrice, minPrice, questionId },
      { models }
    ) {
      return await models.QuestionOption.create({
        optionText,
        maxPrice,
        minPrice,
        QuestionId: questionId,
      });
    },

    async updateQuestionOption(
      root,
      { optionText, maxPrice, minPrice, questionId, id },
      { models }
    ) {
      let getQuestionOption = await models.QuestionOption.findByPk(id);
      if (getQuestionOption == null) throw new EmptyResultError();
      if (optionText != null) getQuestionOption.optionText = optionText;
      if (maxPrice != null) getQuestionOption.maxPrice = maxPrice;
      if (minPrice != null) getQuestionOption.minPrice = minPrice;
      if (questionId != null) getQuestionOption.questionId = questionId;
      await getQuestionOption.save();
      return getQuestionOption;
    },

    async deleteQuestionOption(root, { id }, { models }) {
      if (
        await models.QuestionOption.destroy({
          where: {
            id: id,
          },
        })
      ) {
        return true;
      }
      return false;
    },

    async createUser(root, { firstName, lastName, email }, { models }) {
      return await models.User.create({
        firstName,
        lastName,
        email,
      });
    },

    async createCatalog(root, { name }, { models }) {
      return await models.Catalog.create({
        name,
      });
    },

    async updateCatalog(root, { name, id }, { models }) {
      let getCatalog = await models.Catalog.findByPk(id);
      if (getCatalog == null) throw new EmptyResultError();
      if (name != null) getCatalog.name = name;
      await getCatalog.save();
      return getCatalog;
    },

    async deleteCatalog(root, { id }, { models }) {
      if (
        await models.Catalog.destroy({
          where: {
            id: id,
          },
        })
      ) {
        return true;
      }
      return false;
    },

    async createCategory(
      root,
      { name, minPrice, maxPrice, isPriceRange, price, catalogId },
      { models }
    ) {
      return await models.Category.create({
        name,
        minPrice,
        maxPrice,
        isPriceRange,
        price,
        CatalogId: catalogId,
      });
    },

    async updateCategory(
      root,
      { name, minPrice, maxPrice, isPriceRange, price, catalogId, id },
      { models }
    ) {
      let getCategory = await models.Category.findByPk(id);
      if (getCategory == null) {
        throw new EmptyResultError();
      }
      if (name != null) getCategory.name = name;
      if (minPrice != null) getCategory.minPrice = minPrice;
      if (maxPrice != null) getCategory.maxPrice = maxPrice;
      if (isPriceRange != null) getCategory.isPriceRange = isPriceRange;
      if (price != null) getCategory.price = price;
      if (catalogId != null) getCategory.CatalogId = catalogId;
      await getCategory.save();
      return getCategory;
    },

    async deleteCategory(root, { id }, { models }) {
      if (
        await models.Category.destroy({
          where: {
            id: id,
          },
        })
      ) {
        return true;
      }
      return false;
    },

    async createOffer(root, { price, userId, serviceId }, { models }) {
      return await models.Offer.create({
        price,
        UserId: userId,
        ServiceId: serviceId,
      });
    },

    async updateOffer(root, { id, price, userId, serviceId }, { models }) {
      let getOffer = await models.Offer.findByPk(id);
      if (getOffer == null) throw new EmptyResultError();
      if (price != null) getOffer.price = price;
      if (userId != null) getOffer.UserId = userId;
      if (serviceId != null) getOffer.ServiceId = serviceId;
      await getOffer.save();
      return getOffer;
    },

    async deleteOffer(root, { id }, { models }) {
      if (
        await models.Offer.destroy({
          where: {
            id: id,
          },
        })
      ) {
        return true;
      }
      return false;
    },

    async createService(
      root,
      { name, posterPath, price, categoryId, userId },
      { models }
    ) {
      return await models.Service.create({
        name,
        posterPath,
        price,
        CategoryId: categoryId,
        UserId: userId,
      });
    },

    async updateService(
      root,
      { name, posterPath, price, categoryId, userId, id },
      { models }
    ) {
      let getService = await models.Service.findByPk(id);
      if (getService == null) throw EmptyResultError();
      if (name != null) getService.name = name;
      if (posterPath != null) getService.posterPath = posterPath;
      if (price != null) getService.price = price;
      if (categoryId != null) getService.CategoryId = categoryId;
      await getService.save();
      return getService;
    },

    async deleteService(root, { id }, { models }) {
      if (
        await models.Service.destroy({
          where: {
            id: id,
          },
        })
      ) {
        return true;
      }
      return false;
    },
  },
};

module.exports = resolvers;
