const {
    addUser_StatusValidation
} = require('../../validation/user_status')
module.exports = async (_, args, context) => {
    await addUser_StatusValidation.validateAsync(args, {
        abortEarly: false
    });
    const user_status = await context.models.User_Status.create({
        ...args,
    });
    return user_status;
};