const Service = `
  type Service {
    id: Int!
    posterPath: String!
    price: Float!
    categoryId: Int!
    userId: Int!
    addressId: Int
    address: Address
    offers: [Offer]
  }
  
  extend type Query {
    getService(id: Int!): Service
    getServiceByCategoryId(categoryId: Int!): [Service!]!
  }

  extend type Mutation {
    addService(
      posterPath: String!
      price: Float!
      categoryId: Int!
      userId: Int!
      addressId : Int
    ): Service!

    editService(
      id: Int!
      posterPath: String
      price: Float
      categoryId: Int
      userId: Int!
      addressId : Int
    ): Service!

    deleteService(id: Int!): Service!
  }
`

module.exports = Service;
