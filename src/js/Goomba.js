import { gravity } from "./canvas";

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

    this.width = 50;
    this.height = 50;
  }

  draw({ c }) {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update({ c }) {
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