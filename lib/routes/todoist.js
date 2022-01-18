const resources = require('../resources/todoist');


module.exports = [
  {
    method: 'POST',
    path: '/todoist/receivewebhook',
    handler: resources.receiveWebhook
  }
];
