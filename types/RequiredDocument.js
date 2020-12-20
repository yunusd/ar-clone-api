const RequiredDocument = `
  type RequiredDocument {
    id: Int
    name: String
    description : String
    categoryId: Int
}
  
  extend type Query {
    getRequiredDocument(id: Int!): RequiredDocument
    getRequiredDocumentByCategoryId(categoryId: Int!): [RequiredDocument]
  }

  extend type Mutation {
    addRequiredDocument(name: String, description: String, categoryId:Int): RequiredDocument!
    editRequiredDocument(name: String,description: String, categoryId: Int, id: Int!): RequiredDocument!
    deleteRequiredDocument(id: Int!): RequiredDocument!
  }
`

module.exports = RequiredDocument;
