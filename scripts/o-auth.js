const ConsoleIO = require("./consoleIO");
const crypto = require("crypto");
const axios = require("axios");
const Hapi = require("@hapi/hapi");
const assert = require("assert");

/**
 * Perform OAuth flow and get an api token
 */
async function oAuth() {
  const consoleIO = new ConsoleIO();
  const secretString = crypto.randomBytes(64).toString("hex");

  let clientId;
  let clientSecret;

  // open server to listen for redirect
  server = new Hapi.server({
    port: 3232,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      try {
        assert(
          request.query.state === secretString,
          "Looks like someone has compromised this auth flow. Quit and " +
            "try to find a more secure network."
        );

        const accessTokenRes = await axios({
          method: "POST",
          url: "https://todoist.com/oauth/access_token",
          params: {
            client_id: clientId,
            client_secret: clientSecret,
            code: request.query.code,
          },
        });

        const token = accessTokenRes.data.access_token;

        console.log(
          "\nYou did it! The response in the browser includes an access token " +
            "for your integrations instance to use. You can go back to the " +
            "README now to see what to do with it."
        );

        return `<h3>Your access token is <code>${token}</code></h3>`;
      } catch (err) {
        console.log(err);
      }
    },
  });

  await server.start();

  console.log(
    "\nHi, 👋. To perform the OAuth flow, first enter your apps info: "
  );

  clientId = await consoleIO.query("\nEnter your client id: ");
  clientSecret = await consoleIO.query("\nEnter your client secret: ");

  const authUrl = `https://todoist.com/oauth/authorize?client_id=${clientId}&client_secret=${clientSecret}&scope=data:read_write,data:delete&state=${secretString}`;

  console.log(
    "\nNext, visit this url in your browser and click accept. " +
      "(if you want to)\n\n",
    authUrl
  );

  await consoleIO.query("");
}

oAuth().then(() => {
  console.log("Bye 👋");
  process.exit(0);
});
