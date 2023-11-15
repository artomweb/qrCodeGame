let player;
const SF = 10;
let qrImg;
let goal;

function preload() {
  qrImg = loadImage("chart500.png");
}

function setup() {
  let canvas = createCanvas(29 * SF, 29 * SF);
  canvas.parent("sketch");
  goal = createVector(3, 8);
  player = new Player(SF, qrImg, goal);
  console.log(qrImg);
  //   rectMode(CENTER);
}
function draw() {
  background("grey");
  image(qrImg, 0, 0, width, height);
  fill("green");
  rect(goal.x * SF, goal.y * SF, SF, SF);
  player.draw();
}

function keyPressed() {
  //   console.log(keyCode);
  player.move(keyCode);
  return false;
}

function arrowButton(key) {
  player.move(key);
}
