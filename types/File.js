const File = `  
    type File {
        location: String
        filename: String
        mimetype: String
        encoding: String
    }

    extend type Mutation {
        singleUploadStream(file: Upload!): File
    }
`;
module.exports = File;
