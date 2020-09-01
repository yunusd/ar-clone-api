const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        firstName: String!
        lastName: String!
        email: String!
      }

    type Query {
        user(id: Int!): User
        allUsers: [User!]!
    }

    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!): User!
    }
`

module.exports = typeDefs