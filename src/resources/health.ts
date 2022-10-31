import log from "../utils/log";
import { Request } from "@hapi/hapi";

export default [
  {
    method: "GET",
    path: "/health",
    handler(request: Request, h) {
      log("health check");

      return h.response("ok");
    },
  },
];
