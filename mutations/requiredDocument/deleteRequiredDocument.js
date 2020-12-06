const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {
        const requiredDocument = await context.models.RequiredDocument.findByPk(args.id);

        const deletedRequiredDocument = await context.models.RequiredDocument.destroy({
            where: {
                id: args.id,
            }
        });
        return deletedRequiredDocument ? requiredDocument : new EmptyResultError("Required Document not found!");
    } catch (error) {
        throw new Error(error);
    }
};