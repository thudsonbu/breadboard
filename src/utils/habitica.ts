import { getClient } from "../clients/habitica";
import log from "./log";

/**
 * Get profile information
 */
export async function getProfile() {
  log("getProfile called");

  const res = await getClient().get("/user");

  return res.data;
}

/**
 * Create a new task in habitica
 * @param text - text to be displayed for the task
 * @param type - type of task [ todo, habit, daily, reward ]
 * @param difficulty - task difficulty [ trivial, easy, medium, hard ]
 */
export async function createTask(
  text: string,
  type: string,
  difficulty: string
) {
  log("createTask called with: " + JSON.stringify({ text, type }));

  const res = await getClient().post("/tasks/user", {
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
export async function completeTask(taskId: string): Promise<any> {
  log("completeTask called with: " + JSON.stringify(taskId));

  const res = await getClient().post(`/tasks/${taskId}/score/up`);

  return res.data;
}

/**
 * Accept completed task and add completed todo in habitica
 * @param args.text - todo text
 * @param args.difficulty - todo difficulty
 */
export async function relayItem(text: string, difficulty: string) {
  const create = await createTask(text, "todo", difficulty);

  const update = await completeTask(create.data.data._id);

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
export function difficultyToPriority(difficulty: string): number {
  const map = {
    trivial: 0.1,
    easy: 1,
    medium: 1.5,
    hard: 2,
  };

  return map[difficulty];
}
