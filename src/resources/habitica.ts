import log from "@starryinternet/jobi";

export default [
  {
    method: "POST",
    path: "/habitica/webhook",
    handler(req, h) {
      log.info("received habitica webhook");

      return h.response("hello world");
    },
  },
];
