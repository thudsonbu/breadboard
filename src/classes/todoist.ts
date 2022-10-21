import log from "@starryinternet/jobi";
import { Axios } from "axios";
import { createRest } from "../clients/todoist";

class Todoist {
  client: Axios;

  /**
   * Create new instance
   * @param restApiToken - api token for Todoist's rest api
   * @returns - new instance
   */
  constructor(restApiToken: string) {
    this.client = createRest(restApiToken);
  }

  /**
   * Get user's projects
   * @returns list of projects
   */
  async getProjects(): Promise<Object[]> {
    log.info("called getProjects");

    const res = await this.client.get("/projects");

    return res.data;
  }
}

export default Todoist;
