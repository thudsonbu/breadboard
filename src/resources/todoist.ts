import { Request } from "@hapi/hapi";
import log from "../utils/log";

export default [
  {
    method: "POST",
    path: "/todoist/webhook",
    handler(request: Request, h) {
      log("received webhook");

      return h.response("hello world");
    },
  },
];
