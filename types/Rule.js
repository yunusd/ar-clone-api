const Rule = `
  type Rule {
    id: Int
    name: String
    makeOfferprice: Int
    minServicePrice: Int
    maxServicePrice: Int
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
    addRule(name: String, makeOfferprice: Int, minServicePrice: Int, maxServicePrice: Int,contents: [inputRuleContent]): Rule!
    editRule(id: Int!, makeOfferprice: Int, minServicePrice: Int, maxServicePrice: Int, name: String): Rule!
    deleteRule(id: Int!): Rule!
  }
`

module.exports = Rule;
