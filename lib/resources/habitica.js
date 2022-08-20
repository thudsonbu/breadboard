const log = require('@starryinternet/jobi');

module.exports = [
  {
    method: 'POST',
    path: '/habitica/webhook',
    handler( req, h ) {
      log.info('received habitica webhook');

      return h.response('hello world');
    }
  }
];
