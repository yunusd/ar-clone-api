const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {
        const document = await context.models.Document.findByPk(args.id);

        const deletedDocument = await context.models.Document.destroy({
            where: {
                id: args.id,
            }
        });
        return deletedDocument ? document : new EmptyResultError("Document not found!");;
    } catch (error) {
        throw new Error(error);
    }
};