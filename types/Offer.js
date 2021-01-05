const Offer = `
  type Offer {
    id: Int!
    price: Float!
    serviceId: Int!
    userId: Int!
    user: User
    service: Service
    isWinnerOffer : Boolean
  }
  
  extend type Query {
    getOffer(id: Int!): Offer!
    getOfferByServiceId(serviceId: Int!): [Offer!]!
  }

  extend type Mutation {
    addOffer(price: Float!, userId: Int!, serviceId: Int!): Offer!
    editOffer(id: Int!, price: Float, userId: Int, isWinnerOffer : Boolean ,serviceId: Int): Offer
    deleteOffer(id: Int!): Offer!
  }
`

module.exports = Offer;
