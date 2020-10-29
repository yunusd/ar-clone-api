const User = `
  type User {
    id: Int!
    firstName: String
    lastName: String
    email: String
    userName: String
    phoneNumber: String!
    adressId : Int
    adress: Adress
  }
  
  extend type Query {
    getUser(id: ID!): User
    getUsers: [User!]!
  }

  extend type Mutation {
    registerUser( firstName: String, lastName: String, email: String, userName: String, phoneNumber: String! , adressId : Int): User!
  }
`

module.exports = User;
