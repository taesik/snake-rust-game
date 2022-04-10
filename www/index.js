import init, {greet} from 'snake_game';

init().then(() => {
  greet('World');
  console.log('OK');
});