module.exports = async (_, args, context) => {

    // TODO commentOwner userdan bir hizmet almış olmalı
    const comment = await context.models.Comment.create({
        ...args,
    });
    return comment;
};