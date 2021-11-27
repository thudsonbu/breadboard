const client = require('./clients/habitica');

async function main() {

  const res = await client.get(
    'tasks/user',
    {
      params: {
        type: 'todos'
      }
    }
  );

  console.log( res );
}

main();
