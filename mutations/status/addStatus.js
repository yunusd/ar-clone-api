const {
    addStatusValidation
} = require('../../validation/status')

module.exports = async (_, args, context) => {
    await addStatusValidation.validateAsync(args, {
        abortEarly: false
    });
    const status = await context.models.Status.create({
        ...args,
    });
    return status;
};