require('dotenv').config();

const config = {
  baseURL: process.env.CHECKMARX_BASE_URL,
  apiKey: process.env.CHECKMARX_API_KEY
};

module.exports = config;