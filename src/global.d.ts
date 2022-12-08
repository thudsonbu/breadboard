type TodoistTaskLabel = {
  id: number;
  name: string;
};

type TodoistWebhook = {
  event_name: string;
  event_data: {
    content: string;
    labels: TodoistTaskLabel[];
  };
};

type TodoistDifficulty = "trivial" | "easy" | "medium" | "hard";

type HabiticaTaskType = "todo" | "habit" | "daily" | "reward";
type HabiticaPriority = 0.1 | 1 | 1.5 | 2;
type HabiticaWebookType = "scored" | "created" | "updated" | "deleted";

type HabiticaWebhook = {
  type: HabiticaWebookType;
  task: {
    id: string;
    type: HabiticaTaskType;
    priority: HabiticaPriority;
    text: string;
  };
  user: { _id: string };
};
