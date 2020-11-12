const User_Status = `
  type User_Status {
    userId: Int!
    user: User
    status: Status
    statusId: Int!
  }
  
  extend type Query {
    getUserStatus(userId: Int!): User_Status!
  }

  extend type Mutation {
    addUser_Status(userId: Int!,statusId: Int!): User_Status!
    editUser_Status(userId: Int!,statusId: Int!, id: Int!): User_Status!
    deleteUser_Status(id: Int!): User_Status!
  }
`

module.exports = User_Status;
