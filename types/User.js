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
    catalogId: Int
    userServiceCatalog: [Catalog]
    userServiceCategories: [User_Category]
  }
  
  extend type Query {
    getUser(id: Int!): User
    getUsers: [User!]!
  }

  extend type Mutation {
    registerUser( firstName: String, lastName: String, email: String, userName: String, phoneNumber: String! , adressId : Int, type: String!,catalogId: Int): User!
  }
`

module.exports = User;
