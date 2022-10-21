import axios from "axios";
import { Axios } from "axios";

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
