const todoist = require('../lib/singletons/todoist');
const log     = require('@starryinternet/jobi');

async function main() {
  try {
    const res = await todoist.getProjects();

    log.info( 'res', res );
  } catch ( err ) {
    log.error( err );
  }
}

main().then();
