const { assert } = require('chai');
const Habitica   = require('../../../lib/classes/habitica');


describe( 'lib/classes/habitica', () => {

  describe( '#constructor', () => {

    it( 'should create an instance of Habitica', () => {
      const instance = new Habitica({ user_id: 'id', api_key: 'key' });
      assert.instanceOf( instance, Habitica );
    });

  });

});
