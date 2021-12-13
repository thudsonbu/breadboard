const habitica = require('../clients/habitica');
const logger   = require('@starryinternet/jobi');

module.exports = {
  /**
   * Get profile information
   */
  async getProfile() {
    logger.debug('getProfile called');

    return await habitica.get('/user');
  },

  /**
   * Create a new task in habitica
   * @param args - options
   * @param args.text - text to be displayed for the task
   * @param args.type - type of task [ todo, habit, daily, reward ]
   * @param args.difficulty - task difficulty [ trivial, easy, medium, hard ]
   * @returns {Promise<Response>}
   */
  async createTask( args ) {
    logger.debug( 'createTask called with: ' + JSON.stringify( args ) );
    const { text, type, difficulty } = args;

    return await habitica.post( '/tasks/user',
      {
        text,
        type,
        priority: this.difficultyToPriority( difficulty )
      }
    );
  },

  /**
   * Mark a task a todo as complete in habitica
   * @param {string} taskId - task id to be marked as complete
   * @returns {Promise<Response>}
   */
  async completeTask( taskId ) {
    logger.debug( 'completeTask called with: ' + JSON.stringify( taskId ) );

    return await habitica.post(
      `/tasks/${ taskId }/score/up`
    );
  },

  /**
   * Accept completed task and add completed todo in habitica
   * @param args - arguments
   * @param args.text - todo text
   * @param args.difficulty - todo difficulty
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
  },

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
};
