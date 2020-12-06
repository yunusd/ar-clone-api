const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {
        const requiredDocument = await context.models.RequiredDocument.update({
            ...args
        }, {
            where: {
                id: args.id
            },
            returning: true,
            plain: true
        });
        return requiredDocument[1].dataValues;
    } catch (error) {
        throw new EmptyResultError("Required Document not found!");
    }
};