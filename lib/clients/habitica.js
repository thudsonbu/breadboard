const axios          = require('axios');
const habiticaConfig = require('../../private/habitica_config');

const client = axios.create({
  baseURL: 'https://habitica.com/api/v3',
  headers: {
    'x-api-user': habiticaConfig.USER_ID,
    'x-api-key': habiticaConfig.API_KEY,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

module.exports = client;
