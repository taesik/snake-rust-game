import init, { World } from 'snake_game';

// async function start() {
//   const wasm = init();
//   greet("Filip");
// }

init().then((_) => {
  const world =  World.new();
  console.log(world.width);
});