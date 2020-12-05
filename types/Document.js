const Document = `
  type Document {
    id: Int
    name: String
    url : String
    user_categoryId: Int
}
  
  extend type Query {
    getDocument(id: Int!): Document
    getDocumentByUser_CategoryId(user_categoryId: Int!): [Document]
  }

  extend type Mutation {
    addDocument(name: String,user_categoryId:Int): Document!
    editDocument(name: String,url:String,user_categoryId: Int, id: Int!): Document!
    deleteDocument(id: Int!): Document!
  }
`

module.exports = Document;
