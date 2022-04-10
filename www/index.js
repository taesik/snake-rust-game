import init, {greet} from 'snake_game';

// async function start() {
//   const wasm = init();
//   greet("Filip");
// }

init().then((wasm) => {
  wasm.greet('World');
  console.log('OK');
});