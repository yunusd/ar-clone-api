const Catalog = `
  type Catalog {
    id: Int!
    name: String!
    posterPath: String
    categories: [Category]
  }
  
  extend type Query {
    getCatalog(id: Int!): Catalog!
    getCatalogs: [Catalog!]!
  }

  extend type Mutation {
    addCatalog(name: String!,posterPath: String): Catalog!
    editCatalog(name: String, posterPath: String, id: Int!): Catalog!
    deleteCatalog(id: Int!): Catalog!
  }
`

module.exports = Catalog;
