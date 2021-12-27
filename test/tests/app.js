const app = require('../../lib/app');

describe( 'lib/app', () => {

  it( 'should start and stop', async() => {
    const instance = await app();
    await instance.stop();
  });

});
