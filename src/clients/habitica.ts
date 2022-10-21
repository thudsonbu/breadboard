import axios from "axios";
import { Axios } from "axios";

/**
 * Create a new axios instance configured for habitica api
 * @param userId - habitica user_id
 * @param apiKey - habitica api_key
 */
function create(userId: string, apiKey: string): Axios {
  return axios.create({
    baseURL: "https://habitica.com/api/v3",
    headers: {
      "x-api-user": userId,
      "x-api-key": apiKey,
    },
  });
}

export default {
  create,
};
