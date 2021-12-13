const axios = require('axios');
const todoistConfig = require('../../private/todoist_config');

const client = axios.create({
  baseURL: 'https://api.todoist.com/rest/v1',
  headers: {
    'Authorization': 'Bearer ' + todoistConfig.API_TOKEN,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

module.exports = client;
