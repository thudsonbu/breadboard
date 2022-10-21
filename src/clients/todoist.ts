import axios from "axios";
import { Axios } from "axios";
import config from "../private/todoist_config";

// Cached client instance
let client: Axios;

/**
 * Memoized create function for an axios based todoist rest client
 */
export function getClient() {
  if (client) {
    return client;
  }

  client = axios.create({
    baseURL: "https://api.todoist.com/rest/v1",
    headers: {
      Authorization: "Bearer " + config.REST_API_TOKEN,
    },
  });

  return client;
}

export default {
  getClient,
};
