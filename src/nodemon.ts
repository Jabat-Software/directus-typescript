import nodemon from 'nodemon';
import yargs from 'yargs';

const argv = yargs(process.argv.slice(2))
  .options('env', {
    alias: 'e',
    describe: 'Environment',
    default: 'production',
    choices: ['production', 'staging', 'dash', 'dev'], // TODO: Add more environments here if needed
  })
  .parseSync();

nodemon({
  exec: `cross-env NODE_ENV=development SERVE_APP=true env-cmd -f ./.config/${argv.env}.env ts-node ./src/start.ts`,
  ext: 'ts,env,liquid',
  watch: ['src', '.config', 'config'],
  delay: 500,
  events: {
    start: 'mkdir -p ./extensions && cp -r -f ./src/views ./extensions',
  },
})
  .on('start', () => {
    console.log('Process started');
  })
  .on('restart', () => {
    console.log('Process restarted');
  })
  .on('quit', () => {
    console.log('Process exited cleanly.');
    process.exit();
  });
