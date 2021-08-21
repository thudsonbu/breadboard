const axios         = require('axios');
const habitcaConfig = require('./private/habitica_config');

// get all tasks
axios.get(
  'https://habitica.com/api/v3/tasks/user',
  {
    headers: {
      'x-api-user': habitcaConfig.USER_ID,
      'x-api-key': habitcaConfig.API_KEY
    },
    params: {
      type: 'todos'
    }
  }
).then( ( res ) => {
  console.log( res );
}).catch( ( err ) => {
  console.error( err );
});

// create new task
axios.post(
  'https://habitica.com/api/v3/tasks/user',
  {
    'text': 'Habitical API',
    'type': 'todo'
  },
  {
    headers: {
      'x-api-user': habitcaConfig.USER_ID,
      'x-api-key': habitcaConfig.API_KEY
    },
  }
).then( ( res ) => {
  console.log( res );
}).catch( ( err ) => {
  console.error( err );
});


