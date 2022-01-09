const todoistClients = require('./lib/clients/todoist');

const clientId = '7cf4a927c4cd434687cf62b968d90dc5';
const clientSecret = '95717dedcd23468f9c8852262b2e8420';

todoistClients.oAuth( clientId, clientSecret ).then( ( res ) => {
  console.log( res );
});
