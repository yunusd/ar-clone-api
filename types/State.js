const State = `
  type State {
    id: Int!
    name: String!
    countryId : Int!
    cities : [City]
  }
  
  extend type Query {
    getState(id: Int!): State!
    getStatesByCountryId: [State!]!
  }

  extend type Mutation {
    addState(name: String!): State!
    editState(name: String!, id: Int!): State!
    deleteState(id: Int!): State!
  }
`

module.exports = State;
