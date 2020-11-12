const {
    EmptyResultError
} = require('sequelize');
const {
    editUser_StatusValidation
} = require('../../validation/user_status')
module.exports = async (_, args, context) => {
    await editUser_StatusValidation.validateAsync(args, {
        abortEarly: false
    });
    try {
        const user_status = await context.models.User_Status.update({
            ...args
        }, {
            where: {
                id: args.id
            },
            returning: true,
            plain: true
        });
        return user_status[1].dataValues;
    } catch (error) {
        throw new EmptyResultError("User_Status not found!");
    }
};