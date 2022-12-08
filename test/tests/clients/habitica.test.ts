import { assert } from "chai";
import nock from "nock";
import config from "../../../src/configs/habitica_config";
import { getClient } from "../../../src/services/habitica";

describe("src/clients/habitica", () => {
  beforeEach(nock.cleanAll);

  after(nock.cleanAll);

  it("should return a working habitica client", async () => {
    nock("https://habitica.com/api/v3")
      .get("/")
      .matchHeader("x-api-user", config.USER_ID)
      .matchHeader("x-api-key", config.API_KEY)
      .reply(200, "ok");

    const res = await getClient().get("/");

    assert.equal(res.data, "ok");
  });
});
