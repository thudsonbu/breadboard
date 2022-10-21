import Todoist from "../classes/todoist";
import config from "../private/todoist_config";

export default {
  /**
   * Create a new instance of the todoist class
   */
  build() {
    return new Todoist(config.REST_API_TOKEN);
  },
};
