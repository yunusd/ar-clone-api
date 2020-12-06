const addRule = require('./addRule');
const editRule = require('./editRule');
const deleteRule = require('./deleteRule');

module.exports = {
    Mutation: {
        addRule,
        editRule,
        deleteRule,
    },
};