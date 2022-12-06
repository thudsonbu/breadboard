let config = {
  USER_ID: "test-user-id",
  API_KEY: "test-api-key",
};

if (process.env.NODE_ENV !== "test") {
  config = {
    USER_ID: process.env.HABITICA_USER_ID,
    API_KEY: process.env.HABITICA_API_KEY,
  };
}

export default config;
