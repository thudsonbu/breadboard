import { Server } from "@hapi/hapi";
import resources from "./resources";

export let server: Server;

export const init = async (): Promise<Server> => {
  const port = process.env.PORT || 3000;

  server = new Server({
    port,
    host: "localhost",
  });

  server.route(resources);

  await server.start();

  return server;
};

export const start = async function (): Promise<void> {
  console.log(`Listening on ${server.settings.host}:${server.settings.port}`);

  return server.start();
};

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection");
  console.error(err);
  process.exit(1);
});
