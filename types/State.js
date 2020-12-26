const State = `
  type State {
    id: Int!
    name: String!
    countryId : Int!
    cities : [City]
  }
  
  extend type Query {
    getState(id: Int!): State!
    getStatesByCountryId(countryId: Int!): [State!]!
  }

  extend type Mutation {
    addState(name: String!,countryId:Int): State!
    editState(name: String, id: Int!,countryId:Int): State!  
    deleteState(id: Int!): State!
  }
`

module.exports = State;
