import { assert } from "chai";
import nock from "nock";
import config from "../../../src/configs/todoist_config";
import { getClient } from "../../../src/clients/todoist";

describe("src/clients/todoist", () => {
  beforeEach(nock.cleanAll);

  after(nock.cleanAll);

  it("should return a working habitica client", async () => {
    nock("https://api.todoist.com/rest/v1")
      .get("/")
      .matchHeader("Authorization", `Bearer ${config.REST_API_TOKEN}`)
      .reply(200, "ok");

    const res = await getClient().get("/");

    assert.equal(res.data, "ok");
  });
});
