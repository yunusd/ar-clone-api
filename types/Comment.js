const Comment = `
  type Comment {
    id: Int
    content: String
    commentOwnerId: Int
    point: Float
    userId: Int
    user: User
    createdAt : Date
    commentOwner: User
    serviceId: Int
    service : Service
}
  type AllComment {
    count: Int
    comments: [Comment]    
  }
  extend type Query {
    getComment(id: Int!): Comment!
    getCommentsByUserId(userId: Int!,limit: Int, offset:Int): AllComment
    getCommentsCategoryId(categoryId: Int!,limit: Int, offset:Int): AllComment!
  }

  extend type Mutation {
    addComment(content: String!,userId: Int!, commentOwnerId: Int!,point: Float,serviceId: Int): Comment!
    editComment(content: String!,userId: Int!, commentOwnerId: Int!,point: Float, id: Int!,serviceId: Int): Comment!
    deleteComment(id: Int!): Comment!
  }
`

module.exports = Comment;
