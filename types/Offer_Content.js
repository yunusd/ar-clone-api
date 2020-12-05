const Offer_Content = `
  type Offer_Content {
    id: Int
    photoUrl: String
    offerId: Int
  }
  
  extend type Query {
    getOffer_Content(id: Int!): Offer_Content!
    getOffer_ContentByOfferId(offerId: Int!): [Offer_Content!]!
  }

  extend type Mutation {
    addOffer_Content(photoUrl: String!, offerId: Int!): Offer_Content!
    editOffer_Content(id: Int!, photoUrl: String!, offerId: Int!): Offer_Content
    deleteOffer_Content(id: Int!): Offer_Content!
  }
`

module.exports = Offer_Content;
