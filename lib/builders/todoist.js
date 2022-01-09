const Todoist       = require('../classes/todoist');
const todoistConfig = require('../../private/todoist_config');

module.exports = {
  build() {
    return new Todoist({
      restApiToken: todoistConfig.REST_API_TOKEN,
      syncApiToken: todoistConfig.SYNC_API_TOKEN
    });
  }
};
