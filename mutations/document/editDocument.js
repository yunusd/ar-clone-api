const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {

    try {
        const document = await context.models.Document.update({
            ...args
        }, {
            where: {
                id: args.id
            },
            returning: true,
            plain: true
        });
        return document[1].dataValues;
    } catch (error) {
        throw new EmptyResultError("Document not found!");
    }
};