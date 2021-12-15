const Hapi     = require('@hapi/hapi');
const logger   = require('@starryinternet/jobi');
const habitica = require('./habitica');


const init = async() => {
  const port = process.env.PORT || 3000;

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'POST',
    path: '/habitica/relay',
    handler: async( req, h ) => {
      logger.debug('request to /habitica/relay');

      await habitica.relayItem({
        text: 'todoist text',
        difficulty: 'todoist difficulty'
      });
    }
  });

  await server.start();

  logger.info( 'hapi server started on port ' + port );

  return server;
};

module.exports = init;
