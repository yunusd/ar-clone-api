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

const cognitoOptions = {
    userPoolId: 'eu-central-1_Z6stW5ra1',
    clientId: '4farvrhrkh2n84dt1brl2fl09e',
    jsonVerifyEndpoint: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_Z6stW5ra1/.well-known/jwks.json",
    cognitoUrl: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_Z6stW5ra1"
}

module.exports = {
    NODE_ENV,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_HOSTNAME,
    POSTGRES_PORT,
    POSTGRES_DB,
    corsOptions,
    cognitoOptions
};
  