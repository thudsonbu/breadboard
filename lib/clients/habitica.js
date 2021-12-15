const axios = require('axios');

module.exports = {
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
