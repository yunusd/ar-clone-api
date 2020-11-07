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
const Address = require('./types/Address');
const City = require('./types/City');
const Country = require('./types/Country');
const State = require('./types/State');
const User_Category = require('./types/User_Category');
const Role = require('./types/Role');
const User_Role = require('./types/User_Role');

// Queries
const userQueries = require('./queries/user');
const catalogQueries = require('./queries/catalog');
const categoryQueries = require('./queries/category');
const offerQueries = require('./queries/offer');
const questionQueries = require('./queries/question');
const serviceQueries = require('./queries/service');
const faqQueries = require('./queries/faq');
const addressQueries = require('./queries/address');
const cityQueries = require('./queries/city');
const countryQueries = require('./queries/country');
const stateQueries = require('./queries/state');
const user_categoryQueries = require('./queries/user_category');
const roleQueries = require('./queries/role');
const user_roleQueries = require('./queries/user_role');

// Mutations
const userMutation = require('./mutations/user');
const catalogMutation = require('./mutations/catalog');
const categoryMutation = require('./mutations/category');
const offerMutation = require('./mutations/offer');
const questionMutation = require('./mutations/question');
const serviceMutation = require('./mutations/service');
const faqMutation = require('./mutations/faq');
const addressMutation = require('./mutations/address');
const cityMutation = require('./mutations/city');
const stateMutation = require('./mutations/state');
const countryMutation = require('./mutations/country');
const user_categoryMutation = require('./mutations/user_category');
const roleMutation = require('./mutations/role');
const user_roleMutation = require('./mutations/user_role');

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
  addressQueries,
  cityQueries,
  stateQueries,
  countryQueries,
  user_categoryQueries,
  roleQueries,
  user_roleQueries,
  
  // mutations
  userMutation,
  catalogMutation,
  categoryMutation,
  offerMutation,
  questionMutation,
  serviceMutation,
  faqMutation,
  addressMutation,
  cityMutation,
  stateMutation,
  countryMutation,
  user_categoryMutation,
  roleMutation,
  user_roleMutation,
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
    Address,
    City,
    State,
    Country,
    User_Category,
    Role,
    User_Role,
  ],
  resolvers,
});

module.exports = schema;
