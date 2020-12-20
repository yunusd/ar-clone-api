const fs = require('fs');
const AWS = require('aws-sdk');
const {
    v4: guid
} = require('uuid');

const s3 = new AWS.S3({
    accessKeyId: "AWS_ACCESS_KEY",
    secretAccessKey: "AWS_SECRET_ACCESS_KEY"
});

module.exports = async (args) => {

    const fileKey = guid();
    const uploadedFile = fs.readFile(args.fileName, (err, data) => {
        if (err) throw err;
        const params = {
            Bucket: 'testBucket', // pass your bucket name
            Key: fileKey, // file will be saved as testBucket/contacts.csv
            Body: JSON.stringify(data, null, 2)
        };
        s3.upload(params, function (s3Err, data) {
            if (s3Err) throw s3Err
            console.log(`File uploaded successfully at ${data.Location}`)
            return data;
        });
    });
    return uploadedFile;
};