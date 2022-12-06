import log from "./log-adapter";
import { getClient } from "../clients/todoist";

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
