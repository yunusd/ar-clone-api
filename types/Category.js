const Category = `
  type Category {
    id: Int
    name: String
    minPrice: Float
    maxPrice: Float
    isPriceRange: Boolean
    catalogId: Int
    services: [Service]
    faqs: [Faq]
    questions: [Question]
  }
  
  extend type Query {
    getCategory(id: Int!): Category
    getCategories: [Category!]!
  }

  extend type Mutation {
    addCategory(
      name: String!
      minPrice: Float!
      maxPrice: Float!
      isPriceRange: Boolean!
      catalogId: Int!
    ): Category!

    editCategory(
      id: Int!
      name: String
      minPrice: Float
      maxPrice: Float
      isPriceRange: Boolean
      catalogId: Int
    ): Category!

    deleteCategory(id: Int!): Category!
  }
`

module.exports = Category;
