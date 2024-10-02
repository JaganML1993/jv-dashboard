const dotenv = require('dotenv');
dotenv.config();

const { MONGODB_URL, PORT, SECRET_ACCESS_TOKEN } = process.env;

module.exports = { MONGODB_URL, PORT, SECRET_ACCESS_TOKEN };
