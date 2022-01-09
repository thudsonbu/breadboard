const Hapi   = require('@hapi/hapi');
const logger = require('@starryinternet/jobi');
const routes = require('./routes');


const init = async() => {
  const port = process.env.PORT || 3000;

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route( routes );

  await server.start();

  logger.info( 'hapi server started on port ' + port );

  return server;
};

module.exports = init;
