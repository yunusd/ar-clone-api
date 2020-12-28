const Question = `
  type Question {
    id: Int!
    name: String!
    description: String!
    type: String
    categoryId: Int!
    options: [QuestionOption]
  }

  type QuestionOption {
    id: Int!
    text: String!    
    minPrice: Int!
    maxPrice: Int!
  }

  input inputQuestionOptions {
    id: Int
    text: String
    minPrice: Int
    maxPrice: Int
  }


  extend type Query {
    getQuestion(id: Int!): Question!
    getQuestions(categoryId : Int): [Question]
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
      options : [inputQuestionOptions]
    ): Question!

    deleteQuestion(id: Int!): Question!

    addQuestionOption(
      text: String!
      minPrice: Int
      maxPrice: Int
      questionId: Int!
    ): QuestionOption!

    editQuestionOption(
      id: Int!
      text: String
      minPrice: Int
      maxPrice: Int
      questionId: Int
    ): QuestionOption!

    deleteQuestionOption(id: Int!): QuestionOption!
  }
`

module.exports = Question;
