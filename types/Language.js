Language = `  
type Language {
    word: String,
    tr: String
    kz: String
    ru: String
}

extend type Query {
    getWords(lang: String!): [Words]
  }
  
extend type Mutation {
    editWord(word: String!, tr: String,kz: String,ru: String): Language
}
`;
module.exports = Language;