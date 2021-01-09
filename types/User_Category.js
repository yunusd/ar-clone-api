const User_Category = `
  type User_Category {
    id: Int
    userId: Int
    user: User
    category: Category
    categoryId: Int
    status: String
    documents: [Document]
  }
  
  extend type Query {
    getUserCategories(id: Int!): User_Category
  }

  extend type Mutation {
    addUser_Category( userId: Int,categoryId:Int): User_Category!
    editUser_Category(id:Int!, userId: Int,categoryId:Int,status: String): User_Category!
    deleteUser_Category( id:Int! ): User_Category!
  }
`

module.exports = User_Category;
