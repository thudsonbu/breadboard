const Hapi      = require('@hapi/hapi');
const log       = require('@starryinternet/jobi');
const resources = require('./resources');

const init = async() => {
  const port = process.env.PORT || 3000;

  const server = Hapi.server({
    port,
    host: 'localhost'
  });

  server.route( resources );

  await server.start();

  log.info( 'hapi server started on port ' + port );

  return server;
};

module.exports = init;
