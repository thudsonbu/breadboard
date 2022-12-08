import log from "../utils/log-adapter";
import { Request } from "@hapi/hapi";

type HabiticaWebhookRequest = Request & {
  payload: HabiticaWebhook;
};

export default [
  {
    method: "POST",
    path: "/habitica/webhook",
    handler(request: HabiticaWebhookRequest, h) {
      log("received habitica webhook");

      console.log(request.payload);

      return h.response().code(200);
    },
  },
];
