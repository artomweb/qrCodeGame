class Player {
  constructor(SF, img, goal) {
    this.pos = createVector(28, 27);
    this.startPos = this.pos.copy();
    this.SF = SF;
    this.img = img;
    this.gameOn = true;
    this.goal = goal;
  }

  draw() {
    fill("red");
    // set(0, 0, 0);
    // updatePixels();
    noStroke();

    rect(this.pos.x * this.SF, this.pos.y * this.SF, 1 * this.SF, 1 * this.SF);
  }

  move(key) {
    // console.log("key: ", key);
    if (!this.gameOn) return;
    if (key === LEFT_ARROW) {
      this.pos.x = this.pos.x - 1;
    } else if (key === RIGHT_ARROW) {
      this.pos.x = this.pos.x + 1;
    } else if (key === UP_ARROW) {
      this.pos.y = this.pos.y - 1;
    } else if (key === DOWN_ARROW) {
      this.pos.y = this.pos.y + 1;
    } else {
      return;
    }
    console.log(" ");

    let px = map(this.pos.x, 0, 28, 500 / 28 / 2, 500 - 500 / 28 / 2);
    let py = map(this.pos.y, 0, 28, 500 / 28 / 2, 500 - 500 / 28 / 2);

    const pxCol = this.img.get(px, py);

    // console.log(map(this.pos.x, 0, 28, 0, 500));
    console.log(this.pos.x, this.pos.y);
    console.log(px, py);
    console.log(pxCol);
    if (pxCol[0] === 255) {
      this.pos = this.startPos.copy();
    }
    if (this.pos.x == this.goal.x && this.pos.y == this.goal.y) {
      this.gameOn = false;
    }
  }
}
