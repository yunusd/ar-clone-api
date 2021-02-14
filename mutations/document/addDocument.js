

module.exports = async (_, args, context) => {


    const document = await context.models.Document.create({
        name: args.fileName,
        url: fileUrl,
        user_categoryId: args.user_categoryId
    });

    return document;
};