const axios          = require('axios');
const habiticaConfig = require('../private/habitica_config');

axios.defaults.baseURL = 'http://habitica.com/api/v3';
axios.defaults.headers.common['x-api-user'] = habiticaConfig.USER_ID;
axios.defaults.headers.common['x-api-key'] = habiticaConfig.API_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

module.exports = axios;
