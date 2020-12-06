const getCalendar = require('./getCalendar');
const getCalendarsByRuleContentId = require('./getCalendarsByRuleContentId');

module.exports = {
  Query: {
    getCalendar,
    getCalendarsByRuleContentId,
  },
};