const { assert } = require('chai');

const todoist = require('../../../lib/clients/todoist');

describe( 'lib/clients/todoist', () => {
  it( 'should return a configured axios client', () => {
    assert.strictEqual(
      todoist.defaults.baseURL,
      'https://api.todoist.com/rest/v1'
    );
  });
});
