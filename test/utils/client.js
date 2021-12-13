const axios = require('axios');

const client = axios.create({
  baseURL: 'http://localhost:3000',
});

module.exports = client;
