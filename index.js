const Hapi = require('@hapi/hapi');
const logger = require('@starryinternet/jobi');
const habitica = require('./lib/clients/habitica');


const init = async() => {
  const port = process.env.PORT || 3000;

  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'POST',
    path: '/todos',
    handler: (req, h) => {

    }
  });

  await server.start();

  logger.info('hapi server started on port ' + port);
}

init();
