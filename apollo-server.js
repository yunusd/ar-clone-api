const { ApolloServer } = require('apollo-server-express');
const models = require('./db/models');
const schema = require('./schema');
const config = require('./config');

const server = new ApolloServer({
  schema,
  cors: config.corsOptions,
  context: ({req}) => ({
    user: req.user,
    models
   }),
});

module.exports = server;