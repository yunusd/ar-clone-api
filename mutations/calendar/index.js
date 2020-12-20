const addCalendar = require('./addCalendar');
const editCalendar = require('./editCalendar');
const deleteCalendar = require('./deleteCalendar');

module.exports = {
    Mutation: {
        addCalendar,
        editCalendar,
        deleteCalendar,
    },
};