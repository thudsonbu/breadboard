import app from "../../src/app";

describe("src/app", () => {
  it("should start and stop", async () => {
    const instance = await app.start();
    await instance.stop();
  });
});
