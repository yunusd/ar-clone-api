const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {
        const content = await context.models.ServiceContent.findByPk(args.id);

        const deletedServiceContent = await context.models.ServiceContent.destroy({
            where: {
                id: args.id,
            }
        });
        return deletedServiceContent ? content : new EmptyResultError("ServiceContent not found!");;
    } catch (error) {
        throw new Error(error);
    }
};