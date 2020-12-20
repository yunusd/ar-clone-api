const { ApolloServer } = require('apollo-server-express');
const models = require('./db/models');
const schema = require('./schema');

const server = new ApolloServer({
  schema,
  context: ({req}) => ({
    user: req.user,
    models
   }),
});

module.exports = server;