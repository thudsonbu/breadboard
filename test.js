const habitica = require('./lib/resources/habitica');
const logger   = require('@starryinternet/jobi');

async function main() {
  try {
    const res = await habitica.createTask({
      text: 'new task',
      type: 'todo',
    });
  } catch (err) {
    logger.error( err.message )
  }
}

main();
