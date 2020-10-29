const Adress = `
  type Adress {
    id: Int!
    street: String!
    zipCode: String!
    deliveryPhoneNumber: String!
    addressDirections: String!
    city: City
    state: State
    country: Country
  }
  
  extend type Query {
    getAdress(id: Int!): Adress!
  }

  extend type Mutation {
    addAdress(street: String!, zipCode: String!,deliveryPhoneNumber: String!, addressDirections: String!,cityId:Int! ,stateId: Int, countryId: Int!): Adress!
    editAdress(street: String!, zipCode: String!,deliveryPhoneNumber: String!, addressDirections: String!,cityId:Int! ,stateId: Int, countryId: Int!, id: Int!): Adress!
    deleteAdress(id: Int!): Adress!
  }
`

module.exports = Adress;
