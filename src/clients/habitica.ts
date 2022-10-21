import axios from "axios";
import { Axios } from "axios";
import config from "../private/habitica_config";

// Cached client instance.
let client: Axios;

/**
 * Memoized create function for an axios based habitica client
 */
export function getClient() {
  if (client) {
    return client;
  }

  client = axios.create({
    baseURL: "https://habitica.com/api/v3",
    headers: {
      "x-api-user": config.USER_ID,
      "x-api-key": config.API_KEY,
    },
  });

  return client;
}

export default {
  getClient,
};
