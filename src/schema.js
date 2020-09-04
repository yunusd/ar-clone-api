const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: Int!
        firstName: String!
        lastName: String!
        email: String!
        userName: String!
        phoneNumber: String!
      }

    type Catalog {
        id: Int!
        name: String!
        categories: [Category!]!
    }
    type Category{
        id: Int!
        name: String!
        minPrice: Float!
        maxPrice: Float!
        isPriceRange: Boolean!
        price: Float!
        catalogId: String! 
        services: [Service!]!
    }
    type Offer {
        id: Int!
        price: Float!
        serviceId: Int!
        userId: Int!
    }
    type Service{
        id: Int!
        name: String!
        posterPath: String!
        price: Float!
        categoryId: Int!
        userId: Int!
    }

    type Query {
        user(id: Int!): User

        allUser: [User!]!

        catalog(id: Int!):Catalog

        allCatalog: [Catalog!]!

        category(id: Int!):Category

        allCategory:[Category!]!

        allCategoryByCatalogId(id: Int!): [Category!]!

        allOffer:[Offer!]!

        allService:[Service!]!

    }

    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!): User!
        
        createCatalog(name: String!): Catalog!

        createCategory(name: String!, minPrice: Float!, maxPrice: Float!, isPriceRange: Boolean!, price:Float!, catalogId: Int!): Category!
        createOffer( price: Float!,userId: Int!,serviceId: Int! ): Offer!
        createService(name: String!,posterPath: String!,price: Float!,categoryId: Int!,userId: Int!): Service!
    }
`;

module.exports = typeDefs;
