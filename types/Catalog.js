const Catalog = `
  type Catalog {
    id: Int!
    name: String!
    categories: [Category]
  }
  
  extend type Query {
    getCatalog(id: Int, name: String): Catalog!
    getCatalogs: [Catalog!]!
  }

  extend type Mutation {
    addCatalog(name: String!): Catalog!
    editCatalog(name: String, id: Int!): Catalog!
    deleteCatalog(id: Int!): Catalog!
  }
`

module.exports = Catalog;
