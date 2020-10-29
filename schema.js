const { makeExecutableSchema } = require('apollo-server-express');
const { merge } = require('lodash');

// Types
const User = require('./types/User');
const Catalog = require('./types/Catalog');
const Category = require('./types/Category');
const Offer = require('./types/Offer');
const Question = require('./types/Question');
const Service = require('./types/Service');
const Faq = require('./types/Faq');

// Queries
const userQueries = require('./queries/user');
const catalogQueries = require('./queries/catalog');
const categoryQueries = require('./queries/category');
const offerQueries = require('./queries/offer');
const questionQueries = require('./queries/question');
const serviceQueries = require('./queries/service');
const faqQueries = require('./queries/faq');

// Mutations
const userMutation = require('./mutations/user');
const catalogMutation = require('./mutations/catalog');
const categoryMutation = require('./mutations/category');
const offerMutation = require('./mutations/offer');
const questionMutation = require('./mutations/question');
const serviceMutation = require('./mutations/service');
const faqMutation = require('./mutations/faq');

const Root = `
  type Query {
    dummy: String
  },
  type Mutation {
    dummy: String
  },
  type Subscription {
    dummy: String
  },
  schema {
    query: Query,
    mutation: Mutation,
    subscription: Subscription,
  }
`;

const resolvers = merge(
  {},
  // queries
  userQueries,
  catalogQueries,
  categoryQueries,
  offerQueries,
  questionQueries,
  serviceQueries,
  faqQueries,
  
  // mutations
  userMutation,
  catalogMutation,
  categoryMutation,
  offerMutation,
  questionMutation,
  serviceMutation,
  faqMutation,
);

const schema = makeExecutableSchema({
  typeDefs: [
    Root,
    User,
    Catalog,
    Category,
    Offer,
    Question,
    Service,
    Faq,
  ],
  resolvers,
});

module.exports = schema;
