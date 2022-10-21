import Habitica from "../classes/habitica";
import config from "../private/habitica_config";

export default {
  /**
   * Build a new habitica instance using config from '/private/habitica_config'
   * @returns habitica instance configured with user id and api key
   */
  build() {
    return new Habitica(config.USER_ID, config.API_KEY);
  },
};
