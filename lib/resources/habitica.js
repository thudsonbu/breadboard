const habitica = require('../clients/habitica');
const logger   = require('@starryinternet/jobi');

module.exports = {

  /**
   * Create a new task in habitica
   * @param args - options
   * @param args.text - text to be displayed for the task
   * @param args.type - type of task [ todo, habit, daily, reward ]
   * @param args.difficulty - difficulty of task Difficulty, options are 0.1, 1,
   *  1.5, 2; equivalent of Trivial, Easy, Medium, Hard.
   * @returns {Promise<Undefined>} - success
   */
  async createTask( args ) {
    logger.info( "createTask called with: " + JSON.stringify( args ) );
    const { text, type } = args;

    const res = await habitica.post(
      'tasks/user',
      {
        params: {
          text,
          type
        }
      }
    );

    return res;
  }
}
