const { assert } = require('chai');
const sinon      = require('sinon');
const rewire     = require('rewire');

const module_path = '../../../lib/classes/habitica';


describe( 'lib/classes/habitica', () => {

  describe( 'constructor', () => {

    it( 'should create an instance of Habitica', () => {
      const Habitica = require( module_path );

      const instance = new Habitica({ userId: 'id', apiKey: 'key' });

      assert.instanceOf( instance, Habitica );
    });

    it( 'should create a client with correct config', () => {
      const Habitica = rewire( module_path );

      const clientStub = {
        create: sinon.stub().resolves({})
      };

      Habitica.__set__({ client: clientStub });

      new Habitica({ apiKey: 'key', userId: 'user' });

      sinon.assert.calledOnceWithExactly(
        clientStub.create,
        'user',
        'key'
      );
    });

  });

});
