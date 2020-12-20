const File = `  
    type File {
        location: String
    }

    extend type Mutation {
        singleUploadStream(file: Upload!): File
    }
`;
module.exports = File;
