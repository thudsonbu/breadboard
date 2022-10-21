import log from "@starryinternet/jobi";

export default [
  {
    method: "POST",
    path: "/todoist/webhook",
    handler(req, h) {
      log.info("received webhook");

      return h.response("hello world");
    },
  },
];
