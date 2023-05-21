import { gravity } from "./canvas";
import images from "./images";

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: canvas.height - 700,
    };
    this.velocity = {
      x: 0,
      y: 20,
    };
    this.width = 66;
    this.height = 150;
    this.jumpVelocity = 30;
    this.xVelocityOnPressed = 10;
    this.image = images.spriteStandRight;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: images.spriteStandRight,
        left: images.spriteStandLeft,
        cropWidth: 177,
        width: 66
      },
      run: {
        right: images.spriteRunRight,
        left: images.spriteRunLeft,
        cropWidth: 341,
        width: 127.875
      }
    }
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
  }

  draw(c) {
    c.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      400,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update({ c }) {
    this.frames++;

    if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right ||
      this.currentSprite === this.sprites.stand.left)) {
      this.frames = 0;
    } else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right ||
      this.currentSprite === this.sprites.run.left)) {
      this.frames = 0;
    }
    this.draw(c);
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

export default Player;