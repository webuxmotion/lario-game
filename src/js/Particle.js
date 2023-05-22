import { gravity } from "./canvas";

class Particle {
  constructor({
    position,
    velocity,
    radius,
  }) {
    this.position = {
      x: position.x,
      y: position.y,
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y,
    }
    this.radius = radius;
    this.ttl = 300;
  }

  draw({ c }) {
    c.beginPath();
    c.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    c.fillStyle = "#654428";
    c.fill();
    c.closePath();
  }

  update({ c }) {
    this.draw({ c });
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // gravity
    if (this.isAboveTheBottom()) {
      this.velocity.y += gravity * 0.1;
    }

    this.ttl--;
  }

  isAboveTheBottom() {
    return this.getBaseY() <= canvas.height;
  }

  getBaseY() {
    return this.position.y + this.radius + this.velocity.y;
  }
}

export default Particle;