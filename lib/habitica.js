const habiticaConfig = require('../private/habitica_config');
const Habitica       = require('./classes/habitica');

module.exports = new Habitica(
  habiticaConfig.USER_ID,
  habiticaConfig.API_KEY
);
