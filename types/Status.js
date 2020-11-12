const Status = `
  type Status {
    name: String!
  }
  
  extend type Query {
    getStatus(id: Int!): Status!
    getAllStatus: [Status!]!
  }

  extend type Mutation {
    addStatus(name: String!): Status!
    editStatus(name: String!, id: Int!): Status!
    deleteStatus(id: Int!): Status!
  }
`

module.exports = Status;
