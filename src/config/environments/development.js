module.exports = {
    PORT: process.env.PORT,
    APPLICATION_NAME: process.env.APPLICATION_NAME,
    SWAGGER_DOC: process.env.SWAGGER_DOC,
    SWAGGER_PATH: `../../config/swagger/${process.env.SWAGGER_DOC}.json`,
    DB: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: "postgres",
        logging: false
    }
}