const User = `
  type User {
    id: Int!
    firstName: String
    lastName: String
    email: String
    userName: String
    phoneNumber: String!
    addressId : Int
    address: Address
    services: [Service]
    offers: [Offer]
    catalogId: Int
    userServiceCatalog: [Catalog]
    userServiceCategories: [User_Category]
    status: Status
    roles: [User_Role]
  }
  
  extend type Query {
    getUser(id: Int!): User
    getUsers: [User!]!
  }

  extend type Mutation {
    registerUser( firstName: String, lastName: String, email: String, userName: String, phoneNumber: String! , addressId : Int): User!
  }
`

module.exports = User;
