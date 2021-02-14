const getComment = require('./getComment');
const getCommentsByUserId = require('./getCommentsByUserId');
const getCommentsCategoryId = require('./getCommentsCategoryId');

module.exports = {
    Query: {
        getComment,
        getCommentsByUserId,
        getCommentsCategoryId
    },
};