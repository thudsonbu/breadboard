const resources = require('../resources/todoist');


module.exports = [
  {
    method: 'post',
    path: '/todoist/receiveWebook',
    handler: resources.receiveWebhook
  }
];
