const Question = `
  type Question {
    id: Int!
    name: String!
    description: String!
    type: String
    categoryId: Int!
    options: [QuestionOption!]!
  }

  type QuestionOption {
    id: Int!
    text: String!    
    price: Int!
  }

  input inputQuestionOptions {
    text: String!
    price: Int!
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
      categoryId: Int!
      options: [inputQuestionOptions]
    ): Question!

    editQuestion(
      id: Int!
      name: String
      description: String
      categoryId: Int
    ): Question!

    deleteQuestion(id: Int!): Question!

    addQuestionOption(
      text: String!
      price: Int!
      questionId: Int!
    ): QuestionOption!

    editQuestionOption(
      id: Int!
      text: String
      price: Int
      questionId: Int
    ): QuestionOption!

    deleteQuestionOption(id: Int!): QuestionOption!
  }
`

module.exports = Question;
