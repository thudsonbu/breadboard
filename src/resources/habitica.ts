import log from "../utils/log";
import { Request } from "@hapi/hapi";

export default [
  {
    method: "POST",
    path: "/habitica/webhook",
    handler(request: Request, h) {
      log("received habitica webhook");

      return h.response("hello world");
    },
  },
];
