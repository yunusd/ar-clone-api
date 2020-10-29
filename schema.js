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
const Adress = require('./types/Adress');
const City = require('./types/City');
const Country = require('./types/Country');
const State = require('./types/State');

// Queries
const userQueries = require('./queries/user');
const catalogQueries = require('./queries/catalog');
const categoryQueries = require('./queries/category');
const offerQueries = require('./queries/offer');
const questionQueries = require('./queries/question');
const serviceQueries = require('./queries/service');
const faqQueries = require('./queries/faq');
const adressQueries = require('./queries/adress');
const cityQueries = require('./queries/city');
const countryQueries = require('./queries/country');
const stateQueries = require('./queries/state');

// Mutations
const userMutation = require('./mutations/user');
const catalogMutation = require('./mutations/catalog');
const categoryMutation = require('./mutations/category');
const offerMutation = require('./mutations/offer');
const questionMutation = require('./mutations/question');
const serviceMutation = require('./mutations/service');
const faqMutation = require('./mutations/faq');
const adressMutation = require('./mutations/adress');
const cityMutation = require('./mutations/city');
const stateMutation = require('./mutations/state');
const countryMutation = require('./mutations/country');

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
  adressQueries,
  cityQueries,
  stateQueries,
  countryQueries,
  
  // mutations
  userMutation,
  catalogMutation,
  categoryMutation,
  offerMutation,
  questionMutation,
  serviceMutation,
  faqMutation,
  adressMutation,
  cityMutation,
  stateMutation,
  countryMutation,
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
    Adress,
    City,
    State,
    Country,
  ],
  resolvers,
});

module.exports = schema;
