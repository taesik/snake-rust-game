import init, { World } from 'snake_game';

// async function start() {
//   const wasm = init();
//   greet("Filip");
// }

init().then((_) => {
  const CELL_SIZE = 10;
  const world =  World.new();
  const worldWidth = world.width();
  const canvas = document.getElementById('snake-canvas');
  const ctx = canvas.getContext('2d');

  canvas.height = CELL_SIZE * worldWidth;
  canvas.width = CELL_SIZE * worldWidth;


  function drawWorld() {
    ctx.beginPath();

    for (let x = 0; x< worldWidth+1; x++) {
      ctx.moveTo(x * CELL_SIZE, 0);
      ctx.lineTo(x * CELL_SIZE, worldWidth * CELL_SIZE);
    }

    for (let y = 0; y< worldWidth+1; y++) {
      ctx.moveTo(0, y*CELL_SIZE);
      ctx.lineTo(worldWidth * CELL_SIZE , y*CELL_SIZE);
    }

    ctx.stroke();

  }

  drawWorld();
});