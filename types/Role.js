const Role = `
  type Role {
    id: Int!
    name: String!
  }
  
  extend type Query {
    getRole(id: Int!): Role!
  }

  extend type Mutation {
    addRole(name: String): Role!
    editRole(id: Int!, name: String): Role!
    deleteRole(id: Int!): Role!
  }
`

module.exports = Role;
