const axios = require('axios');

module.exports = {
  /**
   * Create a new axios instance configured for habitica api
   * @param {string} userId - habitica user_id
   * @param {string} apiKey - habitica api_key
   * @returns {axios} - new instance
   */
  create( userId, apiKey ) {
    return axios.create({
      baseURL: 'https://habitica.com/api/v3',
      headers: {
        'x-api-user': userId,
        'x-api-key': apiKey
      }
    });
  }
};
