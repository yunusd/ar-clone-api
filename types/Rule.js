const Rule = `
  type Rule {
    id: Int
    name: String
    contents: [RuleContent]
  }



  input inputRuleContent {
    ruleId: Int
    questionId: Int
    questionOptionId: Int
    addressId: Int
    calendars: [inputCalendar]
  }

  extend type Query {
    getRule(id: Int!): Rule!
  }

  extend type Mutation {
    addRule(name: String,contents: [inputRuleContent]): Rule!
    editRule(id: Int!, name: String): Rule!
    deleteRule(id: Int!): Rule!
  }
`

module.exports = Rule;
