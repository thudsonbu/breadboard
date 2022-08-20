const app        = require('../../../lib/app');
const client     = require('../../utils/client');
const { assert } = require('chai');

describe( 'lib/resources/todoist', () => {

  before( async() => {
    this.server = await app();
  });

  after( async() => {
    await this.server.stop();
  });

  it( 'should receive a webhook', async() => {
    const res = await client.post('/todoist/webhook');

    assert.equal( res.status, 200 );
    assert.equal( res.data, 'hello world' );
  });

});
