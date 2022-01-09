const ConsoleIO = require('./consoleIO');
const crypto    = require('crypto');

/**
 * Perform OAuth flow for sync api to retrieve an api Token
 * @param {string} clientId - todoist application client id
 * @param {string} clientSecret - todoist application client secret
 * @returns {Promise<string>} - todoist sync api token
 */
async function oAuth() {
  const consoleIO = new ConsoleIO();

  const secretString = crypto.randomBytes( 64 ).toString('hex');

  const clientId     = await consoleIO.query('Enter clientId:');
  const clientSecret = await consoleIO.query('Enter clientSecret:');

  return authUrl = `https://todoist.com/oauth/authorize?client_id=${ clientId }&client_secret=${ clientSecret }&scope=data:read;&state=${ secretString }`;
}

oAuth().then( ( url ) => {
  console.log( url );
});
