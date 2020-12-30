const Faq = `
  type Faq {
    id: Int!
    question: String!
    answer: String!
    categoryId: Int!
  }
  
  extend type Query {
    getFaq(id: Int!): Faq!
    getFaqs(categoryId: Int): [Faq!]!
  }

  extend type Mutation {
    addFaq(question: String, answer: String,categoryId: Int!): Faq!
    editFaq(id: Int!, question: String, answer: String,categoryId: Int!): Faq!
    deleteFaq(id: Int!): Faq!
  }
`

module.exports = Faq;
