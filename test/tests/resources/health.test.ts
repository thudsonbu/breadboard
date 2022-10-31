import app from "../../../src/app";
import { Server } from "@hapi/hapi";
import axios from "axios";
import { assert } from "chai";

describe("src/resources/health", () => {
  let instance: Server;

  before(async () => {
    instance = await app.start();
  });

  after(async () => {
    await instance.stop();
  });

  it("should return 200", async () => {
    const res = await axios.get("http://localhost:3000/health");

    assert.equal(res.status, 200);
    assert.equal(res.data, "ok");
  });
});
