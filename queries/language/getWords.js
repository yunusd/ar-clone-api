const lodash = require('lodash')

module.exports = async (...args) => {
    const [, params, context, ] = args;

    let getWords = await context.models.Language.findAll();

    getWords = JSON.parse(JSON.stringify(getWords, null, 4));


    if (!getWords || getWords == null) {
        return null
    }

    let words = [];

    switch (params.lang) {
        case "tr":
            getWords.forEach(x => {
                words.push({
                    key: x.word,
                    value: x.tr
                })
            });
            break;
        case "ru":
            getWords.forEach(x => {
                words.push( {
                    key: x.word,
                    value: x.ru
                })
            });
            break;
        case "kz":
            getWords.forEach(x => {
                words.push({
                    key: x.word,
                    value: x.kz
                })
            });
            break;
        default:
            return null;            
    }


    return words;
};