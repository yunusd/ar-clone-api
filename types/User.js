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
    status: String
    user_roles: [User_Role]
    winnerOffers : [Offer]
    profit : Float
    rating : Float
    comments: [Comment]
  }
  
  input UserRoleInput{
    id: Int!
    userId: Int!
    roleId: Int!
  }

  extend type Query {
    getUser(id: Int!): User
    getCurrentUser: User
    getUsersStatistics(cityId : Int, countryId : Int, stateId : Int, catalogId: Int,isServing : Boolean,status: String): UsersStatistics
    getUsers(cityId : Int, countryId : Int, stateId : Int, catalogId: Int, limit: Int, offset:Int,isServing : Boolean,status: String): [User!]!
  }

  extend type Mutation {
    editUser(
      id: Int!
      firstName: String
      posterPath: String
      lastName: String
      addressId : Int
      status : String
    ): User
  
  }
`

module.exports = User;
