const Country = `
  type Country {
    id: Int!
    name: String!
    cities : [City]
    states : [State]
}
  
  extend type Query {
    getCountry(id: Int!): Country!
    getCountries: [Country!]!
  }

  extend type Mutation {
    addCountry(name: String!): Country!
    editCountry(name: String!, id: Int!): Country!
    deleteCountry(id: Int!): Country!
  }
`

module.exports = Country;
