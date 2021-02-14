const fs = require('fs');
const AWS = require('aws-sdk');
const {
    v4: guid
} = require('uuid');
const {s3Options} = require('../../config');

const s3 = new AWS.S3({
    accessKeyId: s3Options.accessKeyId,
    secretAccessKey: s3Options.secretAccessKey,
});


module.exports = async (_, args, context) => {

    const newGuid = guid();
    const {createReadStream, ...rest} = await args.file.file

    const uploadParams = {
        Bucket: s3Options.bucket,
        Key: newGuid+ rest.filename.substring(rest.filename.indexOf('.')),
        Body: createReadStream()
    };
    const result = await s3.upload(uploadParams).promise()

    const resultFile= {
        location: result.Location,
        ...rest
    }
    return resultFile;
};