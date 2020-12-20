const ServiceContent = `
  type ServiceContent {
    id: Int!
    questionId: Int!
    questionOptionId: Int!
    question : Question
    questionOption: QuestionOption
  }
  
  extend type Query {
    getServiceContent(serviceId: Int!): [ServiceContent]
  }

  extend type Mutation {
    addServiceContent(
        questionId: Int!
        questionOptionId: Int!
    ): ServiceContent!

    editServiceContent(
      id: Int!
      questionId: Int!
      questionOptionId: Int!
    ): ServiceContent!

    deleteServiceContent(id: Int!): ServiceContent!
  }
`

module.exports = ServiceContent;
