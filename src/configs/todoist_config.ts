let config = {
  REST_API_TOKEN: "test-rest-api-token",
};

if (process.env.NODE_ENV !== "test") {
  config = {
    REST_API_TOKEN: process.env.TODOIST_REST_API_TOKEN,
  };
}

export default config;
