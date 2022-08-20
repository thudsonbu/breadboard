const axios  = require('axios');
const crypto = require('crypto');
const log    = require('@starryinternet/jobi');

/**
 * Create a new axios instance configured for todoist rest api
 * @param {string} restApiToken - JWT without Bearer prefix
 * @returns {Axios} - new instance
 */
function createRest( restApiToken ) {
  return axios.create({
    baseURL: 'https://api.todoist.com/rest/v1',
    headers: {
      'Authorization': 'Bearer ' + restApiToken
    }
  });
}

let SYNC_API_TOKEN = undefined;

/**
 * Creates a new axios instance configured for the todoist sync api
 * @param {string} clientId - todoist application client id
 * @param {string} client_secret - todoist application client secret
 * @returns {Promise<Axios>} - new instance
 */
async function createSync( clientId, clientSecret ) {

  if ( !SYNC_API_TOKEN ) {
    SYNC_API_TOKEN = await oAuth( clientId, clientSecret );
  }

  return axios.create({
    baseURL: 'https://api.todoist.com/sync/v8/',
    headers: {
      'Authorization': 'Bearer ' + SYNC_API_TOKEN
    }
  });
}

/**
 * Perform OAuth flow for sync api to retrieve an api Token
 * @param {string} clientId - todoist application client id
 * @param {string} clientSecret - todoist application client secret
 * @returns {Promise<string>} - todoist sync api token
 */

async function oAuth( clientId, clientSecret ) {
  const secretString = crypto.randomBytes( 64 ).toString('hex');

  // eslint-disable-next-line
  const authUrl = `https://todoist.com/oauth/authorize?client_id=${ clientId }&client_secret=${ clientSecret }&scope=data:read;&state=${ secretString }`;

  const res = await axios.get( authUrl );

  log.info( res );
}

module.exports = {
  createRest,
  createSync,
  oAuth
};
