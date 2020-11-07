const Address = `
  type Address {
    id: Int!
    street: String!
    zipCode: String!
    deliveryPhoneNumber: String!
    addressDirections: String!
    cityId:Int!
    stateId: Int
    countryId: Int!
    city: City
    state: State
    country: Country
  }
  
  extend type Query {
    getAddress(id: Int!): Address!
  }

  extend type Mutation {
    addAddress(street: String!, zipCode: String!,deliveryPhoneNumber: String!, addressDirections: String!,cityId:Int! ,stateId: Int, countryId: Int!): Address!
    editAddress(street: String!, zipCode: String!,deliveryPhoneNumber: String!, addressDirections: String!,cityId:Int! ,stateId: Int, countryId: Int!, id: Int!): Address!
    deleteAddress(id: Int!): Address!
  }
`

module.exports = Address;
