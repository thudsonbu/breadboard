const habitica = require('../lib/singletons/habitica');

habitica.createTask({
  text: 'New todo',
  type: 'todo',
  difficulty: 'trivial'
});
