import { gravity } from "./canvas";

class Particle {
  constructor({
    position,
    velocity,
    radius,
    fireball,
    fades,
    color = "#654428",
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
    this.color = color;
    this.fireball = fireball;
    this.opacity = 1;
    this.fades = fades;
  }

  draw({ c }) {
    c.save();
    c.globalAlpha = this.opacity;
    c.beginPath();
    c.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.restore();
  }

  update({ c }) {
    this.ttl--;
    this.draw({ c });
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // gravity
    if (this.isAboveTheBottom()) {
      this.velocity.y += gravity * 0.1;
    }

    if (this.fades && this.opacity > 0) {
      this.opacity -= 0.01;
    }
    if (this.opacity < 0) this.opacity = 0;
  }

  isAboveTheBottom() {
    return this.getBaseY() <= canvas.height;
  }

  getBaseY() {
    return this.position.y + this.radius + this.velocity.y;
  }
}

export default Particle;