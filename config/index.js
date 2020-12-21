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

module.exports = {
    NODE_ENV,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_HOSTNAME,
    POSTGRES_PORT,
    POSTGRES_DB,
    corsOptions,
};
  