const axios = require('axios');
const config = require('../config');

const apiClient = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Authorization': `Bearer ${config.apiKey}`,
    'Accept': 'application/json'
  }
});

module.exports = apiClient;