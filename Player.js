class Player {
  constructor(SF, img) {
    this.pos = createVector(28, 27);
    this.startPos = this.pos.copy();
    this.SF = SF;
    this.img = img;
    this.gameOn = true;
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
      //   console.log("left");
      this.pos.x = this.pos.x - 1;
    } else if (key === RIGHT_ARROW) {
      this.pos.x = this.pos.x + 1;
    } else if (key === UP_ARROW) {
      this.pos.y = this.pos.y - 1;
    } else if (key === DOWN_ARROW) {
      //   console.log("down", this.pos.y);
      this.pos.y = this.pos.y + 1;
    } else {
      return;
    }
    console.log(" ");
    // console.log((this.pos.x / 28) * 500 - 500 / this.SF);
    // console.log((this.pos.x / 28) * 500 - 500 / this.SF, (this.pos.y / 28) * 500 - 500 / this.SF);

    // let px = (this.pos.x / 29) * 500 - 500 / 29;
    // let py = (this.pos.y / 29) * 500 - 500 / 29;
    let px = ceil(map(this.pos.x, 0, 28, 0, 500) - 800 / 500 / 2);
    let py = ceil(map(this.pos.y, 0, 28, 0, 500) - 800 / 500 / 2);

    const pxCol = this.img.get(px, py);

    console.log(map(this.pos.x, 0, 28, 0, 500));
    console.log(this.pos.x, this.pos.y);
    console.log(px, py);
    console.log(pxCol);
    if (pxCol[0] === 255) {
      this.pos = this.startPos.copy();
    }
    if (this.pos.x == 0 && this.pos.y == 0) {
      this.gameOn = false;
    }
  }
}
