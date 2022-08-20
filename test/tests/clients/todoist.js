const { assert } = require('chai');

const client = require('../../../lib/clients/todoist');

describe( 'lib/clients/todoist', () => {

  it( 'should return a configured axios client', () => {
    const todoist = client.createRest('token');

    assert.strictEqual(
      todoist.defaults.baseURL,
      'https://api.todoist.com/rest/v1'
    );
    assert.strictEqual(
      todoist.defaults.headers.Authorization,
      'Bearer token'
    );
  });

});
