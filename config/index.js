const {
    NODE_ENV,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_HOSTNAME,
    POSTGRES_PORT,
    POSTGRES_DB,
} = process.env;

const corsOptions = {
    origin: NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://localhost',
    credentials: true,
}

const cognitoOptions = NODE_ENV !== "production" ? {
    userPoolId: 'eu-central-1_osWFees3n',
    clientId: '3ao279vadjbqu5uirggpqr575c',
    jsonVerifyEndpoint: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_osWFees3n/.well-known/jwks.json",
    cognitoUrl: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_osWFees3n"
} : {
    userPoolId: 'eu-central-1_r5xN3j9T0',
    clientId: '5f0p7g7nfpct6umc8869n2uejr',
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