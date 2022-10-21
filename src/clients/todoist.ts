import axios from "axios";
import { Axios } from "axios";
import { randomBytes } from "crypto";
import log from "@starryinternet/jobi";

/**
 * Create a new axios instance configured for todoist rest api
 * @param restApiToken - JWT without Bearer prefix
 * @returns - new instance
 */
export function createRest(restApiToken: string): Axios {
  return axios.create({
    baseURL: "https://api.todoist.com/rest/v1",
    headers: {
      Authorization: "Bearer " + restApiToken,
    },
  });
}

let SYNC_API_TOKEN = undefined;

/**
 * Creates a new axios instance configured for the todoist sync api
 * @param clientId - todoist application client id
 * @param clientSecret - todoist application client secret
 * @returns new axios instance targeting to todoist sync api
 */
async function createSync(
  clientId: string,
  clientSecret: string
): Promise<Axios> {
  if (!SYNC_API_TOKEN) {
    SYNC_API_TOKEN = await oAuth(clientId, clientSecret);
  }

  return axios.create({
    baseURL: "https://api.todoist.com/sync/v8/",
    headers: {
      Authorization: "Bearer " + SYNC_API_TOKEN,
    },
  });
}

/**
 * Perform OAuth flow for sync api to retrieve an api Token
 * @param clientId - todoist application client id
 * @param clientSecret - todoist application client secret
 * @returns todoist sync api token
 */
async function oAuth(clientId: string, clientSecret: string): Promise<string> {
  const secretString = randomBytes(64).toString("hex");

  const authUrl = `https://todoist.com/oauth/authorize?client_id=${clientId}&client_secret=${clientSecret}&scope=data:read;&state=${secretString}`;

  const res = await axios.get(authUrl);

  log.info(res);

  return res.data;
}

module.exports = {
  createRest,
  createSync,
  oAuth,
};
