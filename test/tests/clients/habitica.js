const { assert } = require('chai');

const client = require('../../../lib/clients/habitica');

describe( 'lib/clients/habitica', () => {

  it( 'should return a configured axios client', () => {
    const habitica = client.create( 'user_id', 'api_key' );

    assert.strictEqual(
      habitica.defaults.baseURL,
      'https://habitica.com/api/v3'
    );
    assert.strictEqual( habitica.defaults.headers['x-api-user'], 'user_id' );
    assert.strictEqual( habitica.defaults.headers['x-api-key'], 'api_key' );
  });

});
