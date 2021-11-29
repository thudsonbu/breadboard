const habitica = require('./clients/habitica');
const todoist  = require('./clients/todoist');

async function main() {

  const habiticaTasks = await habitica.get(
    'tasks/user',
    {
      params: {
        type: 'todos'
      }
    }
  );

  const todoistProjects = await todoist.get(
    'projects'
  );

  console.log( habiticaTasks.data );
  console.log( todoistProjects.data );
}

main();
