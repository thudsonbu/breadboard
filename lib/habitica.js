const Habitica = require('./classes/habitica');

const env = process.env.NODE_ENV;

function getInstance() {
  let habiticaConfig = {
    USER_ID: 'user-id',
    API_KEY: 'api-key'
  };

  if ( env !== 'test' ) {
    habiticaConfig = require('../private/habitica_config');
  }

  console.log( habiticaConfig );

  return new Habitica(
    habiticaConfig.USER_ID,
    habiticaConfig.API_KEY
  );
}

module.exports = getInstance();
