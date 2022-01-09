const sinon      = require('sinon');
const { assert } = require('chai');
const rewire     = require('rewire');

const module_path = '../../../lib/classes/todoist';


describe( 'lib/classes/todoist', () => {

  describe( 'constructor', () => {

    it( 'should create a todoist instance', () => {
      const Todoist = require( module_path );

      const instance = new Todoist({
        restApiToken: 'rest',
        syncApiToken: 'sync'
      });

      assert.instanceOf( instance, Todoist );
    });

    it( 'should create a client with correct config', () => {
      const Todoist = rewire( module_path );

      const clientsStub = {
        createRest: sinon.stub().returns({}),
        createSync: sinon.stub().resolves({})
      };

      Todoist.__set__({ clients: clientsStub });

      new Todoist({
        restApiToken: 'rest',
        syncApiToken: 'sync'
      });

      sinon.assert.calledOnceWithExactly(
        clientsStub.createRest,
        'rest'
      );
    });

  });

});
