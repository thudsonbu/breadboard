const logger = require('@starryinternet/jobi');


module.exports = {
  receiveWebhook( req, h ) {
    logger.info( 'receiveWebook', req );
  }
};
