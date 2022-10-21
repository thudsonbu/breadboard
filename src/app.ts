import { Server } from "@hapi/hapi";
import resources from "./resources";
import log from "./utils/log";

export let server: Server;

export const start = async (): Promise<Server> => {
  const port = process.env.PORT || 3000;

  server = new Server({
    port,
    host: "localhost",
  });

  server.route(resources);

  await server.start();

  log(`Integrations started on port ${port}`);

  return server;
};

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection");
  console.error(err);
  process.exit(1);
});

export default {
  start,
  server,
};
