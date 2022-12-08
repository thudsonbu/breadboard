import log from "../utils/log-adapter";
import { relayItem } from "../services/habitica";
import { Request } from "@hapi/hapi";

type TodoistWebhookRequest = Request & {
  payload: TodoistWebhook;
};

export default [
  {
    method: "POST",
    path: "/todoist/webhook",
    async handler(request: TodoistWebhookRequest, h) {
      log("received webhook", request.payload);

      const content = request.payload.event_data.content;
      const event_name = request.payload.event_name;

      const difficulty = (request.payload.event_data.labels.find((label) => {
        return (
          label?.name &&
          ["trivial", "easy", "medium", "hard"].includes(label.name)
        );
      }).name || "medium") as TodoistDifficulty;

      if (event_name === "item:completed") {
        log("item completed:", content);

        await relayItem(content, difficulty);
      }

      return h.response().code(200);
    },
  },
];
