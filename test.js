const habitica = require('./lib/resources/habitica');
const logger   = require('@starryinternet/jobi');

async function main() {
  const res = await habitica.createTask({
    text: 'new task',
    type: 'todo',
  });
}

main();
