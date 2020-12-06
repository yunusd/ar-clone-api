const RuleContent = `
  type RuleContent {
    id: Int
    ruleId: Int
    questionId: Int
    questionOptionId: Int
    addressId: Int
    adress: Address
    calendars: [Calendar]
    question: Question
    questionOption: QuestionOption
  }

  input inputCalendar {
    dayOfWeek: Int
    startHour: Int
    endHour: Int
    startMinute: Int
    endMinute: Int
  }

  extend type Query {
    getRuleContent(id: Int!): RuleContent
    getRuleContentByRuleId(ruleId: Int!): [RuleContent]
  }

  extend type Mutation {
    addRuleContent(ruleId: Int, questionId: Int, questionOptionId: Int, addressId: Int, calendars: [inputCalendar]): RuleContent
    editRuleContent(id: Int!, ruleId: Int, questionId: Int, questionOptionId: Int, addressId: Int): RuleContent
    deleteRuleContent(id: Int!): RuleContent!
  }
`

module.exports = RuleContent;