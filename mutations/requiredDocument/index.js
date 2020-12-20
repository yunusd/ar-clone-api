const addRequiredDocument = require('./addRequiredDocument');
const editRequiredDocument = require('./editRequiredDocument');
const deleteRequiredDocument = require('./deleteRequiredDocument');

module.exports = {
    Mutation: {
        addRequiredDocument,
        editRequiredDocument,
        deleteRequiredDocument,
    },
};