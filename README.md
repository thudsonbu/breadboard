# Breadboard

Breadboard is a micro service that receives webhooks from Todoist and Habitica
and keeps them in sync. It runs on node.js and uses the
[hapi](https://hapi.dev/) backend framework.

# Usage

To use integrations, you need to create a new application from the
[applications menu](https://developer.todoist.com/appconsole.html) in Todoist.
Set the OAuth redirect URL to http://localhost:3232. Next, you can use the
command `npm run o-auth` to retrieve an o-auth url which will guide you
through the OAuth process and output todoist credentials for integrations. (You
might need to clear your cookies before this).

Now that you have the `code` and `state` you can add them to the
`todoist_config.ts` file in `src/private` along with a rest api token like this:

```ts
export default {
  REST_API_TOKEN: "token_from_browser",
};
```

Habitica doesn't require the OAuth flow to be completed. Instead you can instead
visit the [api settings page](https://habitica.com/user/settings/api) and crab
the user id and client id. Add them to the `habitica_config.ts` file in
`src/private` like this:

```js
export default {
  USER_ID: "user_id",
  API_KEY: "api_token",
};
```

Habitica doesn't allow apps to be configured in an integrations console like
Todoist. Instead, you need to hit their api to create them. You can use
`npm run setup-webhooks` to a run a script that will guide you through that
process.

With those files in place, Breadboard is ready to be built and deployed.

# Development


