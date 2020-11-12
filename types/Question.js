const Question = `
  type Question {
    id: Int!
    name: String!
    description: String!
    type: String!
    categoryId: Int!
    options: [QuestionOption!]!
  }

  type QuestionOption {
    id: Int!
    text: String!
    maxPrice: Float!
    minPrice: Float!
  }

  input inputQuestionOptions {
    text: String!
    maxPrice: Float!
    minPrice: Float!
  }


  extend type Query {
    getQuestion(id: Int!): Question!
    getQuestions: [Question]
    getQuestionsByCategoryId(categoryId: Int!): [Question!]!
  }

  extend type Mutation {
    addQuestion(
      name: String!
      description: String!
      type: String!
      categoryId: Int!
      options: [inputQuestionOptions]
    ): Question!

    editQuestion(
      id: Int!
      name: String
      description: String
      type: Int
      categoryId: Int
    ): Question!

    deleteQuestion(id: Int!): Question!

    addQuestionOption(
      text: String!
      maxPrice: Float!
      minPrice: Float!
      questionId: Int!
    ): QuestionOption!

    editQuestionOption(
      id: Int!
      text: String
      maxPrice: Float
      minPrice: Float
      questionId: Int
    ): QuestionOption!

    deleteQuestionOption(id: Int!): QuestionOption!
  }
`

module.exports = Question;
