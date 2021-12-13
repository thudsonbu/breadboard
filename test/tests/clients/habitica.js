const { assert } = require('chai');

const habitica = require('../../../lib/clients/habitica');

describe( 'lib/clients/habitica', () => {
  it( 'should return a configured axios client', () => {
    assert.strictEqual(
      habitica.defaults.baseURL,
      'https://habitica.com/api/v3'
    );
  });
});
