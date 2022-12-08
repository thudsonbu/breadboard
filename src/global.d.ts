export type TodoistTaskLabel = {
  id: number;
  name: string;
};

export type TodoistWebhook = {
  event_name: string;
  event_data: {
    content: string;
    labels: TodoistTaskLabel[];
  };
};

export type TodoistDifficulty = "trivial" | "easy" | "medium" | "hard";

export type HabiticaTaskType = "todo" | "habit" | "daily" | "reward";
export type HabiticaPriority = 0.1 | 1 | 1.5 | 2;
export type HabiticaWebhookType = "scored" | "created" | "updated" | "deleted";

export type HabiticaWebhook = {
  type: HabiticaWebhookType;
  task: {
    id: string;
    type: HabiticaTaskType;
    priority: HabiticaPriority;
    text: string;
  };
  user: { _id: string };
};
