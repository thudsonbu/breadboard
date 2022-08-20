const logger = require('@starryinternet/jobi');
const client = require('../clients/habitica');

class Habitica {
  /**
   * Create new instance
   * @param {Object} opts
   * @param {string} opts.userId - habitica user_id
   * @param {string} opts.apiKey - habitica api_key
   * @returns {Habitica} - new instance
   */
  constructor( opts ) {
    this.client = client.create(
      opts.userId,
      opts.apiKey
    );
  }

  /**
   * Get profile information
   */
  async getProfile() {
    logger.debug('getProfile called');

    const res = await this.client.get('/user');

    return res.data;
  }

  /**
   * Create a new task in habitica
   * @param {Object} args - options
   * @param {string} args.text - text to be displayed for the task
   * @param {string} args.type - type of task [ todo, habit, daily, reward ]
   * @param {string} args.difficulty - task difficulty [ trivial, easy,
   * medium, hard ]
   * @returns {Promise<Response>}
   */
  async createTask( args ) {
    logger.debug( 'createTask called with: ' + JSON.stringify( args ) );

    const { text, type, difficulty } = args;

    const res = await this.client.post( '/tasks/user',
      {
        text,
        type,
        priority: this.difficultyToPriority( difficulty )
      }
    );

    return res.data;
  }

  /**
   * Mark a task a todo as complete in habitica
   * @param {string} taskId - task id to be marked as complete
   * @returns {Promise<Response>}
   */
  async completeTask( taskId ) {
    logger.debug( 'completeTask called with: ' + JSON.stringify( taskId ) );

    const res = await this.client.post(
      `/tasks/${ taskId }/score/up`
    );

    return res.data;
  }

  /**
   * Accept completed task and add completed todo in habitica
   * @param {Object} args - arguments
   * @param {string} args.text - todo text
   * @param {string} args.difficulty - todo difficulty
   * @return {Promise<Object>} results
   */
  async relayItem( args ) {
    const create = await this.createTask({
      text: args.text,
      type: 'todo',
      difficulty: args.difficulty
    });

    const update = await this.completeTask( create.data.data._id );

    return {
      _id: create.data.data._id,
      data: update.data.data
    };
  }

  /**
   * Convert difficulty [ trivial, easy, medium, hard ] to habitica priority
   * @param {string} difficulty - difficulty [ trivial, easy, medium, hard ]
   * @return {number} - corresponding priority value
   */
  difficultyToPriority( difficulty ) {
    const map = {
      trivial: 0.1,
      easy: 1,
      medium: 1.5,
      hard: 2
    };

    return map[ difficulty ];
  }
}

module.exports = Habitica;
