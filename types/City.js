const City = `
  type City {
    id: Int!s
    name: String!
    stateId: Int
    countryId: Int!
}
  
  extend type Query {
    getCity(id: Int!): City!
    getCitiesByCountryId(countryId: Int!): [City!]!
    getCitiesByStateId(stateId: Int!): [City!]!
  }

  extend type Mutation {
    addCity(name: String!,stateId: Int, countryId: Int!): City!
    editCity(name: String!,stateId: Int, countryId: Int!, id: Int!): City!
    deleteCity(id: Int!): City!
  }
`

module.exports = City;
