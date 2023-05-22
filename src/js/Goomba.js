import { gravity } from "./canvas";
import images from "./images";

class Goomba {
  constructor({ position, velocity }) {
    this.position = {
      x: position.x,
      y: position.y,
    }
    this.velocity = {
      x: velocity.x,
      y: velocity.y,
    }

    this.width = 43;
    this.height = 50;
    this.image = images.goomba;
    this.frames = 0;
  }

  draw({ c }) {
    c.drawImage(
      this.image,
      130 * this.frames,
      0,
      130,
      150,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update({ c }) {
    this.frames++;
    if (this.frames >= 58) {
      this.frames = 0;
    }
    this.draw({ c });
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // gravity
    if (this.isAboveTheBottom()) {
      this.velocity.y += gravity;
    }
  }

  isAboveTheBottom() {
    return this.getBaseY() <= canvas.height;
  }

  getBaseY() {
    return this.position.y + this.height + this.velocity.y;
  }
}

export default Goomba;