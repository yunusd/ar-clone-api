const {
    NODE_ENV,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_HOSTNAME,
    POSTGRES_PORT,
    POSTGRES_DB,
} = process.env;

var whitelist = ['http://taktack.proje-kutusu.com/', 'http://www.taktack.com/']

const corsOptions = {
    origin: function (origin, callback) {
        if(NODE_ENV !== 'production' || NODE_ENV !== 'test'){
            callback(null, true)
        }
        else if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
}

const cognitoOptions = NODE_ENV !== "production" ? {
    userPoolId: 'eu-central-1_osWFees3n',
    clientId: '7iuj27tlivki4e589fvqg63uit',
    jsonVerifyEndpoint: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_osWFees3n/.well-known/jwks.json",
    cognitoUrl: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_osWFees3n"
} : {
    userPoolId: 'eu-central-1_r5xN3j9T0',
    clientId: '28de85j6d5kl7f7vuub0ko09bn',
    jsonVerifyEndpoint: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_r5xN3j9T0/.well-known/jwks.json",
    cognitoUrl: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_r5xN3j9T0"
}
const s3Options = NODE_ENV !== "production" ? {
    accessKeyId: "AKIATY4D7ACCTDIKBTVA",
    secretAccessKey: "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",
    bucket: "test-armut-clone-s3-common"
} : {
    accessKeyId: "AKIATY4D7ACCTDIKBTVA",
    secretAccessKey: "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",
    bucket: "prod-armut-clone-s3-common"
}

module.exports = {
    NODE_ENV,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_HOSTNAME,
    POSTGRES_PORT,
    POSTGRES_DB,
    corsOptions,
    cognitoOptions,
    s3Options
};