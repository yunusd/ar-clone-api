const User_Role = `
  type User_Role {
    id: Int!
    userId: Int!
    roleId: Int!
    user: User
    role: Role
  }
  
  extend type Query {
    getUser_Role(id: Int!): User_Role!
  }

  extend type Mutation {
    addUser_Role(userId: Int!,roleId: Int!): User_Role!
    editUser_Role(id: Int!, userId: Int!,roleId: Int!): User_Role!
    deleteUser_Role(id: Int!): User_Role!
  }
`

module.exports = User_Role;
