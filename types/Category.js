const Category = `
  type Category {
    id: Int
    name: String
    posterPath: String
    minPrice: Float
    maxPrice: Float
    isPriceRange: Boolean
    catalogId: Int
    services: [Service]
    faqs: [Faq]
    questions: [Question]
    requiredDocuments: [RequiredDocument]
  }
  input requiredDocumentInput {
    id : Int
    name: String
    description : String
  }
  
  extend type Query {
    getCategory(id: Int!): Category
    getCategories(catalogId: Int): [Category!]!
  }

  extend type Mutation {
    addCategory(
      posterPath: String
      name: String!
      minPrice: Float!
      maxPrice: Float!
      isPriceRange: Boolean!
      catalogId: Int!
      requiredDocuments: [requiredDocumentInput]
    ): Category!

    editCategory(
      id: Int!
      posterPath: String
      name: String
      minPrice: Float
      maxPrice: Float
      isPriceRange: Boolean
      catalogId: Int
      requiredDocuments: [requiredDocumentInput]
    ): Category!

    deleteCategory(id: Int!): Category!
  }
`

module.exports = Category;
