const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {

        let findWord = await context.models.Language.findByPk(args.id);
        findWord = JSON.parse(JSON.stringify(findWord, null, 4));
        if (findWord ==null) {
            throw new EmptyResultError("Word not found")
        }

        switch (args.lang) {
            case "tr": {
                findWord.tr = args.word
                let updatedWord = await doUpdate();
                console.log(updatedWord)
                return {
                    key: updatedWord.word,
                    value: updatedWord.tr
                }
            }
            case "kz": {
                findWord.kz = args.word
                let updatedWord = await doUpdate();
                return {
                    key: updatedWord.word,
                    value: updatedWord.kz
                }
            }
            case "ru": {
                findWord.ru = args.word
                let updatedWord = await doUpdate();
                console.log(updatedWord)
                return {
                    key: updatedWord.word,
                    value: updatedWord.ru
                }
            }
            default: {
                findWord.word = args.word
                let updatedWord = await doUpdate();
                return {
                    key: updatedWord.word,
                    value: updatedWord.word
                }
            }
        }

        async function doUpdate() {
            let updateWord = await context.models.Language.update({
                ...findWord
            }, {
                where: {
                    id: findWord.id
                },
                returning: true,
                plain: true
            });
            return updateWord[1].dataValues;
        }

    } catch (error) {
        throw new EmptyResultError("Word not found!");
    }
};