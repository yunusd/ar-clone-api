const User = `
  type User {
    id: Int!
    firstName: String
    posterPath: String
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
    statusId: Int
    user_roles: [User_Role]
    winnerOffers : [Offer]
    profit : Float
  }
  
  input UserRoleInput{
    id: Int!
    userId: Int!
    roleId: Int!
  }

  extend type Query {
    getUser(id: Int!): User
    getCurrentUser: User
    getUsersStatistics: UsersStatistics
    getUsers(cityId : Int, countryId : Int, stateId : Int, catalogId: Int, statusId: Int, limit: Int, offset:Int,isServing : Boolean): [User!]!
  }

  extend type Mutation {
    editUser(
      id: Int!
      firstName: String
      posterPath: String
      lastName: String
      addressId : Int
      statusId: Int
    ): User
  
  }
`

module.exports = User;
