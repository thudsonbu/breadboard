const Habitica        = require('../classes/habitica');
const habiticaConfig = require('../../private/habitica_config');

module.exports = {
  /**
   * Build a new habitica instance using config from '/private/habitica_config'
   * @returns {Habitica} - new instance
   */
  build() {
    return new Habitica({
      userId: habiticaConfig.USER_ID,
      apiKey: habiticaConfig.API_KEY
    });
  }
};
