import { getClient } from "../src/services/habitica";
import ConsoleIO from "./consoleIO";

async function setupHabiticaWebhooks() {
  const consoleIO = new ConsoleIO();

  const url = await consoleIO.query(
    "Hi 👋, to setup habitica webhooks we need the origin that will " +
      "receive the webhooks. Enter the origin of your Breadboard instance " +
      "ie `https://breadboard.example.com` : \n\n"
  );

  await getClient().post("/user/webhook", {
    enabled: true,
    url: url + "/habitica/webhook",
    label: "Breadboard Tasks",
    type: "taskActivity",
    options: {
      created: true,
      updated: true,
      deleted: true,
      scored: true,
    },
  });

  console.log("\nIt worked!, webhooks are now setup 🎉");
}

setupHabiticaWebhooks().then(() => {
  console.log("\nBye 👋");
  process.exit(0);
});
