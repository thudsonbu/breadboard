import log from "../utils/log-adapter";
import axios from "axios";
import { Axios } from "axios";
import config from "../configs/todoist_config";

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

/**
 * Get user's projects
 * @returns list of projects
 */
export async function getProjects(): Promise<Object[]> {
  log("called getProjects");

  const client = getClient();

  const res = await client.get("/projects");

  return res.data;
}
