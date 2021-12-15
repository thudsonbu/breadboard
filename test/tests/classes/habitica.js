const { assert } = require('chai');
const rewire     = require('rewire');
const sinon      = require('sinon');
const Habitica   = require('../../../lib/classes/habitica');

const getModule = () => rewire('../../../lib/classes/habitica');

describe( 'lib/classes/habitica', () => {
  describe( '#constructor', () => {
    it( 'should create an instance of Habitica', () => {
      const instance = new Habitica({ user_id: 'id', api_key: 'key' });
      assert.strictEqual( instance, Habitica );
    });
    // it( 'should create an axios client', () => {
    //   const instance = getModule();

    //   const clientStub = {
    //     create: sinon.stub().returns({})
    //   };

    //   instance.__set__( 'client', clientStub );

    //   const habitica = new Habitica({
    //     user_id: 'user_id',
    //     api_key: 'api_key'
    //   });

    //   assert.instanceOf( habitica, Habitica );
    //   sinon.assert.calledOnceWithExactly(
    //     clientStub.create,
    //     'user_id',
    //     'api_key'
    //   );
    // });
  });
});
