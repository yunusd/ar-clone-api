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
                    id: x.id,
                    key: x.word,
                    value: x.tr,
                    lang: "tr",
                })
            });
            break;
        case "ru":
            getWords.forEach(x => {
                words.push( {
                    id: x.id,
                    key: x.word,
                    value: x.ru,
                    lang: "ru",
                })
            });
            break;
        case "kz":
            getWords.forEach(x => {
                words.push({
                    id: x.id,
                    key: x.word,
                    value: x.kz,
                    lang: "kz",
                })
            });
            break;
        default:
            return null;            
    }


    return words;
};