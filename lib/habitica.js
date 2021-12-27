const habiticaConfig = require('../private/habitica_config') || {};
const Habitica       = require('./classes/habitica');

const env = process.env.NODE_ENV;

function getInstance() {
  if ( env === 'test' ) {
    return new Habitica(
      'user-id',
      'api-key'
    );
  } else {
    return new Habitica(
      habiticaConfig.USER_ID,
      habiticaConfig.API_KEY
    );
  }
}

module.exports = getInstance();
