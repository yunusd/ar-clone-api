const fs = require('fs');
const AWS = require('aws-sdk');
const {
    v4: guid
} = require('uuid');

const s3 = new AWS.S3({
    accessKeyId: "AKIASANNZVKDOSST2IMI",
    secretAccessKey: "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",
});


module.exports = async (_, args, context) => {

    const newGuid = guid();
    const file = await args.file
    const {
        createReadStream,
        filename,
        mimetype
    } = file
    const fileStream = createReadStream()

    const uploadParams = {
        Bucket: 'armut-clone-s3-common',
        Key: newGuid,
        Body: fileStream
    };
    const result = await s3.upload(uploadParams).promise()

    console.log(result.Location);
    const resultFile= {
        location: result.Location
    }
    return resultFile;
};