const { assert } = require('chai');

const habitica = require('../../../lib/resources/habitica');

describe( 'lib/resources/habitica', () => {
  describe( '#getProfile', () => {
    it( 'should return profile data', async() => {
      const res = await habitica.getProfile();
      assert.deepStrictEqual( res.data.data.profile, { name: 'Tom Hudson' } );
    });
  });

  describe( '#relayTask', () => {
    it( 'should add a completed task with correct info', async() => {
      const before = await habitica.getProfile();
      const goldBefore = before.data.data.stats.gp;

      const res = await habitica.relayItem({
        text: 'test',
        difficulty: 'trivial'
      });

      assert.exists( res.data );
      assert.exists( res._id );

      const after = await habitica.getProfile();
      const goldAfter = after.data.data.stats.gp;

      assert.isTrue( goldAfter > goldBefore );
      assert.strictEqual( goldAfter, res.data.gp );
    });
  });
});
