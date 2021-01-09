const Service = `
  type Service {
    id: Int!
    posterPath: String!
    description: String!
    price: Float!
    categoryId: Int!
    userId: Int!
    addressId: Int
    address: Address
    offers: [Offer]
    contents: [ServiceContent]
    faqs: [Faq]
    calendarId: Int
    calendar: [Calendar]
  }
  
  input ServiceContentInput
  {
    questionId: Int!
    questionOptionId: Int!
  }

  extend type Query {
    getService(id: Int!): Service
    getServices(categoryId: Int): [Service]
    getServicesByUserId(userId: Int): [Service]
    getServiceByCategoryId(categoryId: Int!): [Service!]!
  }

  extend type Mutation {
    addService(
      calendarId: Int
      description: String!
      posterPath: String!
      price: Float!
      categoryId: Int!
      userId: Int!
      addressId : Int
      contents: [ServiceContentInput]
    ): Service!

    editService(
      id: Int!
      description: String!
      posterPath: String
      price: Float
      categoryId: Int
      userId: Int!
      addressId : Int
      calendarId: Int
    ): Service!

    deleteService(id: Int!): Service!
  }
`

module.exports = Service;
