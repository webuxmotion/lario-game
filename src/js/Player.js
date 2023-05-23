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
    this.frameWidth = 398;
    this.frameHeight = 353;
    this.scale = 0.3;
    this.width = this.frameWidth * this.scale;
    this.height = this.frameHeight * this.scale;
    this.jumpVelocity = 30;
    this.speed = 10;
    this.image = images.spriteMarioStandRight;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: images.spriteMarioStandRight,
        left: images.spriteMarioStandLeft,
        cropWidth: this.frameWidth,
        width: this.width
      },
      run: {
        right: images.spriteMarioRunRight,
        left: images.spriteMarioRunLeft,
        cropWidth: this.frameWidth,
        width: this.width
      },
      jump: {
        right: images.spriteMarioJumpRight,
        left: images.spriteMarioJumpLeft,
        cropWidth: this.frameWidth,
        width: this.width
      }
    }
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
  }

  draw({ c }) {
    c.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      this.frameHeight,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update({ c }) {
    this.frames++;

    if (
      //this.frames > 58 && 
      (this.currentSprite === this.sprites.stand.right ||
      this.currentSprite === this.sprites.stand.left)
    ) {
      this.frames = 0;
    } else if (
      this.frames > 28 && 
      (this.currentSprite === this.sprites.run.right ||
      this.currentSprite === this.sprites.run.left)
    ) {
      this.frames = 0;
    } else if (
      this.currentSprite === this.sprites.jump.right ||
      this.currentSprite === this.sprites.jump.left
    ) {
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

export default Player;