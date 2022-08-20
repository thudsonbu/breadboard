const todoist  = require('./todoist');
const habitica = require('./habitica');

module.exports = [
  ...todoist,
  ...habitica
];
