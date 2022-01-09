const readline = require('readline');

/**
 * Setup console i/o
 * @returns {ReadLine} - readline instance mapped to console
 */
class ConsoleIO {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  /**
   * Write query to console and get user's response
   * @param {String} message - question
   * @returns {Promise<String>} - response
   */
  async query( message ) {
    return new Promise( ( resolve, reject ) => {
      this.rl.question( message, ( response ) => {
        resolve( response );
      });
    });
  }
}

module.exports = ConsoleIO;
