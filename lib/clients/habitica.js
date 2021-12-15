const axios = require('axios');

module.exports = {
  /**
   * Create a new axios instance configured for habitica api
   * @param {string} user_id - habitica user_id
   * @param {string} api_key - habitica api_key
   * @returns {axios} - new instance
   */
  create( user_id, api_key ) {
    return axios.create({
      baseURL: 'https://habitica.com/api/v3',
      headers: {
        'x-api-user': user_id,
        'x-api-key': api_key
      }
    });
  }
};
