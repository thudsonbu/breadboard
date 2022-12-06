import log from "../utils/log-adapter";
import { Request } from "@hapi/hapi";

export default [
  {
    method: "POST",
    path: "/habitica/webhook",
    handler(request: Request, h) {
      log("received habitica webhook");

      console.log(request.payload);

      return h.response().code(200);
    },
  },
];
