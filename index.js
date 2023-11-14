let player;
const SF = 100;
let qrImg;

function preload() {
  qrImg = loadImage("chart500.png");
}

function setup() {
  let canvas = createCanvas(29 * SF, 29 * SF);
  canvas.parent("sketch");
  player = new Player(SF, qrImg);
  //   rectMode(CENTER);
}
function draw() {
  background("grey");
  image(qrImg, 0, 0, width, height);
  fill("green");
  rect(0, 0, SF, SF);
  player.draw();
}

function keyPressed() {
  //   console.log(keyCode);
  player.move(keyCode);
}

function arrowButton(key) {
  player.move(key);
}
