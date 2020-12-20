const {
    awsUpload
} = require('../../aws/fileUpload');

module.exports = async (_, args, context) => {

    const fileUrl = await awsUpload(args.data);
    if (fileUrl === null)
        throw MediaStreamError();

    const document = await context.models.Document.create({
        name: args.fileName,
        url: fileUrl,
        user_categoryId: args.user_categoryId
    });

    return document;
};