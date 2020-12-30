const getComment = require('./getComment');
const getCommentsByUserId = require('./getCommentsByUserId');

module.exports = {
    Query: {
        getComment,
        getCommentsByUserId,
    },
};