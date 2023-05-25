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
    this.powerUps = {
      fireFlower: false
    }
    this.image = images.spriteMarioStandRight;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: images.spriteMarioStandRight,
        left: images.spriteMarioStandLeft,
        fireFlower: {
          right: images.spriteFireFlowerStandRight,
          left: images.spriteFireFlowerStandLeft,
        }
      },
      run: {
        right: images.spriteMarioRunRight,
        left: images.spriteMarioRunLeft,
        fireFlower: {
          right: images.spriteFireFlowerRunRight,
          left: images.spriteFireFlowerRunLeft,
        }
      },
      jump: {
        right: images.spriteMarioJumpRight,
        left: images.spriteMarioJumpLeft,
        fireFlower: {
          right: images.spriteFireFlowerJumpRight,
          left: images.spriteFireFlowerJumpLeft,
        }
      },
      shoot: {
        fireFlower: {
          right: images.spriteFireFlowerShootRight,
          left: images.spriteFireFlowerShootLeft
        }
      }
    }
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.frameWidth;
    this.invincible = false;
    this.opacity = 1;
    this.shooting = false;
  }

  draw({ c }) {
    c.save();
    c.globalAlpha = this.opacity;
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
    c.restore();
  }

  update({ c }) {
    this.frames++;

    if (
      (this.currentSprite === this.sprites.stand.right ||
      this.currentSprite === this.sprites.stand.left ||
      this.currentSprite === this.sprites.stand.fireFlower.right ||
      this.currentSprite === this.sprites.stand.fireFlower.left)
    ) {
      this.frames = 0;
    } else if (
      this.frames > 28 && 
      (this.currentSprite === this.sprites.run.right ||
      this.currentSprite === this.sprites.run.left ||
      this.currentSprite === this.sprites.run.fireFlower.right ||
      this.currentSprite === this.sprites.run.fireFlower.left)
    ) {
      this.frames = 0;
    } else if (
      this.currentSprite === this.sprites.jump.right ||
      this.currentSprite === this.sprites.jump.left ||
      this.currentSprite === this.sprites.jump.fireFlower.right ||
      this.currentSprite === this.sprites.jump.fireFlower.left ||
      this.currentSprite === this.sprites.shoot.fireFlower.right ||
      this.currentSprite === this.sprites.shoot.fireFlower.left
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

    if (this.invincible) {
      if (this.opacity === 1) {
        this.opacity = 0;
      } else {
        this.opacity = 1;
      }
    } else {
      this.opacity = 1;
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