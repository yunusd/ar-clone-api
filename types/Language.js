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
    editWord(id:Int!,word: String!,lang: String): Words
}
`;
module.exports = Language;