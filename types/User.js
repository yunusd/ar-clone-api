const User = `
  type User {
    id: Int!
    firstName: String
    lastName: String
    email: String
    userName: String
    phoneNumber: String!
    type: String!
    adressId : Int
    adress: Adress
    services: [Service]
    offers: [Offer]
  }
  
  extend type Query {
    getUser(id: ID!): User
    getUsers: [User!]!
  }

  extend type Mutation {
    registerUser( firstName: String, lastName: String, email: String, userName: String, phoneNumber: String! , adressId : Int, type: String!): User!
  }
`

module.exports = User;
