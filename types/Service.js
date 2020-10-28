const Service = `
  type Service {
    id: Int!
    name: String!
    posterPath: String!
    price: Float!
    categoryId: Int!
    userId: Int!
  }
  
  extend type Query {
    getService(id: Int!): Service
    getServiceByCategoryId(categoryId: Int!): [Service!]!
  }

  extend type Mutation {
    addService(
      name: String!
      posterPath: String!
      price: Float!
      categoryId: Int!
      userId: Int!
    ): Service!

    editService(
      id: Int!
      name: String
      posterPath: String
      price: Float
      categoryId: Int
      userId: Int!
    ): Service!

    deleteService(id: Int!): Service!
  }
`

module.exports = Service;
