const ServiceContent = `
  type ServiceContent {
    id: Int!
    questionId: Int!
    questionOptionId: Int!
    question : Question
    questionOption: QuestionOption
    photoUrl: String

  }
  
  extend type Query {
    getServiceContent(serviceId: Int!): [ServiceContent]
  }

  extend type Mutation {
    addServiceContent(
        questionId: Int!
        questionOptionId: Int!
        photoUrl: String
    ): ServiceContent!

    editServiceContent(
      id: Int!
      questionId: Int!
      questionOptionId: Int!
      photoUrl: String
    ): ServiceContent!

    deleteServiceContent(id: Int!): ServiceContent!
  }
`

module.exports = ServiceContent;
