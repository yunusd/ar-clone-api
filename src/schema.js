const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    userName: String!
    phoneNumber: String!
  }

  type Catalog {
    id: Int!
    name: String!
    categories: [Category]
  }
  type Category {
    id: Int
    name: String
    minPrice: Float
    maxPrice: Float
    isPriceRange: Boolean
    price: Float
    catalogId: Int
    services: [Service]
  }
  type Offer {
    id: Int!
    price: Float!
    serviceId: Int!
    userId: Int!
    user: User!
    service: Service!
  }
  type Service {
    id: Int!
    name: String!
    posterPath: String!
    price: Float!
    categoryId: Int!
    userId: Int!
  }
  type Question {
    id: Int!
    question: String!
    description: String!
    questionType: Int!
    categoryId: Int!
    questionOptions: [QuestionOption!]!
  }

  type QuestionOption {
    id: Int!
    optionText: String!
    maxPrice: Float!
    minPrice: Float!
    questionId: Int!
  }

  type Query {
    getAllUser: [User!]!

    getUser: User!

    getCatalog(id: Int, name: String): Catalog!

    getAllCatalog: [Catalog!]!

    getCategory(id: Int!): Category

    getAllCategory: [Category!]!

    getOffer(id: Int!): Offer!

    getOfferByServiceId(serviceId: Int!): [Offer!]!

    getService(id: Int!): Service!

    getServiceByCategoryId(categoryId: Int!): [Service!]!

    getQuestion(id: Int!): Question!

    getQuestionByCategoryId(categoryId: Int!): [Question!]!
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!): User!

    createCatalog(name: String!): Catalog!

    updateCatalog(name: String, id: Int!): Catalog!

    deleteCatalog(id: Int!): Boolean!

    createCategory(
      name: String!
      minPrice: Float!
      maxPrice: Float!
      isPriceRange: Boolean!
      price: Float!
      catalogId: Int!
    ): Category!

    updateCategory(
      id: Int!
      name: String
      minPrice: Float
      maxPrice: Float
      isPriceRange: Boolean
      price: Float
      catalogId: Int
    ): Category!

    deleteCategory(id: Int!): Boolean!

    createOffer(price: Float!, userId: Int!, serviceId: Int!): Offer!

    updateOffer(id: Int!, price: Float, userId: Int, serviceId: Int): Offer!

    deleteOffer(id: Int!): Boolean!

    createService(
      name: String!
      posterPath: String!
      price: Float!
      categoryId: Int!
      userId: Int!
    ): Service!

    updateService(
      id: Int!
      name: String
      posterPath: String
      price: Float
      categoryId: Int
      userId: Int!
    ): Service!

    deleteService(id: Int!): Boolean!

    updateQuestion(
      id: Int!
      question: String
      description: String
      questionType: Int
      categoryId: Int
    ): Question!

    createQuestion(
      question: String!
      description: String!
      questionType: Int!
      categoryId: Int!
    ): Question!

    deleteQuestion(id: Int!): Boolean!

    createQuestionOption(
      optionText: String!
      maxPrice: Float!
      minPrice: Float!
      questionId: Int!
    ): QuestionOption!

    updateQuestionOption(
      id: Int!
      optionText: String
      maxPrice: Float
      minPrice: Float
      questionId: Int
    ): QuestionOption!

    deleteQuestionOption(id: Int!): Boolean!
  }
`;

module.exports = typeDefs;
