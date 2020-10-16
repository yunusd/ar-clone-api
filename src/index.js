const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const models = require('../db/models')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
})

module.exports = server;