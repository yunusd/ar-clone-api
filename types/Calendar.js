const Calendar = `
  type Calendar {
    id: Int
    startDate: String
    endDate: String
    dayOfWeek: Int
    startHour: Int
    endHour: Int
    startMinute: Int
    endMinute: Int
    ruleContentId: Int
  }
  
  extend type Query {
    getCalendar(id: Int!): Calendar
    getCalendarsByRuleContentId(ruleContentId: Int!): [Calendar]
  }

  extend type Mutation {
    addCalendar(startDate: String, endDate: String, dayOfWeek: Int, startHour: Int, endHour: Int, startMinute: Int, endMinute: Int , ruleContentId: Int): Calendar!
    editCalendar(startDate: String, endDate: String, dayOfWeek: Int, startHour: Int, endHour: Int, startMinute: Int, endMinute: Int , ruleContentId: Int, id: Int!): Calendar!
    deleteCalendar(id: Int!): Calendar!
  }
`

module.exports = Calendar;