const logger  = require('@starryinternet/jobi');
const clients = require('../clients/todoist');

class Todoist {

  /**
   * Create new instance
   * @param {Object} opts
   * @param {string} opts.restApiToken
   * @param {string} opts.syncApiToken
   * @returns {Todoist} - new instance
   */
  constructor( opts ) {
    this.restClient = clients.createRest( opts.restApiToken );
  }

  /**
   * Get user's projects
   * @returns {Object[]} - list of projects
  */
  async getProjects() {
    logger.info('called getProjects');

    const res = await this.restClient.get('/projects');

    return res.data;
  }
}

module.exports = Todoist;
