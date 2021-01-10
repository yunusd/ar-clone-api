const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {

        let findWord = await context.models.Language.findOne({
            word: args.word
        });
        findWord = JSON.parse(JSON.stringify(findWord, null, 4));

        if (!findWord) {
            throw new EmptyResultError("Word not found")
        }

        const updateWord = await context.models.Language.update({
            ...args
        }, {
            where: {
                id: findWord.id
            },
            returning: true,
            plain: true
        });
        return updateWord[1].dataValues;
    } catch (error) {
        throw new EmptyResultError("Word not found!");
    }
};