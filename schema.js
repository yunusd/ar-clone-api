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
const Dashboard = require('./types/Dashboard');
const ServiceContent = require('./types/Service_Content');
const OfferContent = require('./types/Offer_Content');
const Document = require('./types/Document');
const RequiredDocument = require('./types/RequiredDocument');
const Rule = require('./types/Rule');
const RuleContent = require('./types/RuleContent');
const Calendar = require('./types/Calendar');
const UserInfo = require('./types/UserInfo');
const File = require('./types/File');
const Comment = require('./types/Comment');
const UsersStatistics = require('./types/UsersStatistics');
const Language = require('./types/Language');
const Words = require('./types/Words');

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
const dashboardQueries = require('./queries/dashboard');
const service_contentQueries = require('./queries/service_content');
const offer_contentQueries = require('./queries/offer_content');
const documentQueries = require('./queries/document');
const requiredDocumentQueries = require('./queries/requiredDocument');
const ruleQueries = require('./queries/rule');
const ruleContentQueries = require('./queries/ruleContent');
const calendarQueries = require('./queries/calendar');
const userInfoQueries = require('./queries/userInfo');
const commentQueries = require('./queries/comment');
const languageQueries = require('./queries/language');

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
const service_contentMutation = require('./mutations/service_content');
const offer_contentMutation = require('./mutations/offer_content');
const documentMutation = require('./mutations/document');
const requiredDocumentMutation = require('./mutations/requiredDocument');
const ruleMutation = require('./mutations/rule');
const ruleContentMutation = require('./mutations/ruleContent');
const calendarMutation = require('./mutations/calendar');
const fileMutation = require('./mutations/file');
const commentMutation = require('./mutations/comment');
const languageMutation = require('./mutations/language');

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
  dashboardQueries,
  service_contentQueries,
  offer_contentQueries,
  documentQueries,
  requiredDocumentQueries,
  ruleQueries,
  ruleContentQueries,
  calendarQueries,
  userInfoQueries,
  commentQueries,
  languageQueries,
  
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
  service_contentMutation,
  offer_contentMutation,
  documentMutation,
  requiredDocumentMutation,
  ruleMutation,
  ruleContentMutation,
  calendarMutation,
  fileMutation,
  commentMutation,
  languageMutation,
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
    Dashboard,
    ServiceContent,
    OfferContent,
    Document,
    RequiredDocument,
    Rule,
    RuleContent,
    Calendar,
    UserInfo,
    File,
    Comment,
    UsersStatistics,
    Language,
    Words,
    `scalar Upload`,
    `scalar Date`,

  ],
  resolvers,
});

module.exports = schema;
