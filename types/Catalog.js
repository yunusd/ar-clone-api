const Catalog = `
  type Catalog {
    id: Int!
    name: String!
    posterPath: String
    description: String
    categories: [Category]
  }
  
  extend type Query {
    getCatalog(id: Int!): Catalog!
    getCatalogs: [Catalog!]!
  }

  extend type Mutation {
    addCatalog(name: String!,posterPath: String,description: String): Catalog!
    editCatalog(name: String, posterPath: String, id: Int!,description: String): Catalog!
    deleteCatalog(id: Int!): Catalog!
  }
`

module.exports = Catalog;
