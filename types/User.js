const User = `
  type User {
    id: Int!
    firstName: String
    lastName: String
    email: String
    userName: String
    phoneNumber: String!
  }
  
  extend type Query {
    getUser(id: ID!): User
    getUsers: [User!]!
  }

  extend type Mutation {
    registerUser(firstName: String!, lastName: String!, email: String!): User!
  }
`

module.exports = User;
