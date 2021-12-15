const axios = require('axios');

module.exports = {
  /**
   * Create a new axios instance configured for todoist api
   * @param {string} api_token - JWT without Bearer prefix
   * @returns {axios} - new instance
   */
  create( api_token ) {
    return axios.create({
      baseURL: 'https://api.todoist.com/rest/v1',
      headers: {
        'Authorization': 'Bearer ' + api_token
      }
    });
  }
};
