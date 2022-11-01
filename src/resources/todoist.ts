import log from "../utils/log";
import { relayItem } from "../utils/habitica";

type TodoistTaskLabel = {
  id: number;
  name: string;
};

type TodoistWebhook = {
  payload: {
    event_name: string;
    event_data: {
      content: string;
      labels: TodoistTaskLabel[];
    };
  };
};

export default [
  {
    method: "POST",
    path: "/todoist/webhook",
    async handler(request: TodoistWebhook, h) {
      log("received webhook", request.payload);

      const content = request.payload.event_data.content;
      const event_name = request.payload.event_name;

      const difficulty = request.payload.event_data.labels.find((label) => {
        return (
          label?.name &&
          ["trivial", "easy", "medium", "hard"].includes(label.name)
        );
      });

      if (event_name === "item:completed") {
        log("item completed:", content);

        await relayItem(content, difficulty?.name || "medium");
      }

      return h.response().code(200);
    },
  },
];
