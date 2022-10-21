import client from "../clients/habitica";
import { Axios } from "axios";
import log from "@starryinternet/jobi";

class Habitica {
  client: Axios;

  /**
   * Create new instance
   * @param userId - habitica user_id
   * @param apiKey - habitica api_key
   */
  constructor(userId: string, apiKey: string) {
    this.client = client.create(userId, apiKey);
  }

  /**
   * Get profile information
   */
  async getProfile() {
    log.debug("getProfile called");

    const res = await this.client.get("/user");

    return res.data;
  }

  /**
   * Create a new task in habitica
   * @param text - text to be displayed for the task
   * @param type - type of task [ todo, habit, daily, reward ]
   * @param difficulty - task difficulty [ trivial, easy, medium, hard ]
   */
  async createTask(text: string, type: string, difficulty: string) {
    log.debug("createTask called with: " + JSON.stringify({ text, type }));

    const res = await this.client.post("/tasks/user", {
      text,
      type,
      priority: this.difficultyToPriority(difficulty),
    });

    return res.data;
  }

  /**
   * Mark a task a todo as complete in habitica
   * @param taskId - task id to be marked as complete
   */
  async completeTask(taskId: string): Promise<any> {
    log.debug("completeTask called with: " + JSON.stringify(taskId));

    const res = await this.client.post(`/tasks/${taskId}/score/up`);

    return res.data;
  }

  /**
   * Accept completed task and add completed todo in habitica
   * @param args.text - todo text
   * @param args.difficulty - todo difficulty
   */
  async relayItem(text: string, difficulty: string) {
    const create = await this.createTask(text, "todo", difficulty);

    const update = await this.completeTask(create.data.data._id);

    return {
      _id: create.data.data._id,
      data: update.data.data,
    };
  }

  /**
   * Convert difficulty [ trivial, easy, medium, hard ] to habitica priority
   * @param difficulty - difficulty [ trivial, easy, medium, hard ]
   * @return corresponding priority value
   */
  difficultyToPriority(difficulty: string): number {
    const map = {
      trivial: 0.1,
      easy: 1,
      medium: 1.5,
      hard: 2,
    };

    return map[difficulty];
  }
}

export default Habitica;
