const addRuleContent = require('./addRuleContent');
const editRuleContent = require('./editRuleContent');
const deleteRuleContent = require('./deleteRuleContent');

module.exports = {
    Mutation: {
        addRuleContent,
        editRuleContent,
        deleteRuleContent,
    },
};