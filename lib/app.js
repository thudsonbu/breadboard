const Hapi   = require('@hapi/hapi');
const log    = require('@starryinternet/jobi');
const routes = require('./routes');


const init = async() => {
  const port = process.env.NODE_ENV === 'production' ?
    80 : 3000;

  const server = Hapi.server({
    port,
    host: 'localhost'
  });

  server.route( routes );

  await server.start();

  log.info( 'hapi server started on port ' + port );

  return server;
};

module.exports = init;
