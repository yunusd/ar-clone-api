const addDocument = require('./addDocument');
const editDocument = require('./editDocument');
const deleteDocument = require('./deleteDocument');

module.exports = {
    Mutation: {
        addDocument,
        editDocument,
        deleteDocument,
    },
};