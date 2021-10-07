require('dotenv').config();
const PRODUCTION = require('./production');
const DEVELOPMENT = require('./development');

const { NODE_ENV } = process.env;
let currentEnv = DEVELOPMENT;
if (NODE_ENV === "production") {
    currentEnv = PRODUCTION;
}

module.exports = currentEnv;