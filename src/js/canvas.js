import getGoombas from "./getGoombas";
import GenericObject from "./GenericObject";
import Player from "./Player";
import images from "./images";
import {
  collisitionTop,
  generateExplosion,
  hitBottomOfPlatform,
  hitSideOfPlatform,
  isCircleOnTopOfPlatform,
  isOnTopOfPlatform,
  objectsTouch,
} from "./utils";
import getFlowers from "./getFlowers";
import getPlatforms from "./getPlatforms";
import Particle from "./Particle";

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
export const gravity = 1.4;
const backgroundSpeed = 5;
let lastKey;
let player = new Player();
let platforms = [];
let background;
let background2;
let hills;
let genericObjects = [background, background2, hills];
let goombas = [];
let flowers = [];
let particles = [];
let scrollOffset = 0;

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

function init() {
  player = new Player();
  goombas = getGoombas();
  particles = [];
  flowers = getFlowers();
  background = new GenericObject({
    x: -1,
    y: -1,
    image: images.background,
  });
  background2 = new GenericObject({
    x: -1,
    y: images.background.height - 3,
    image: images.background,
  });
  hills = new GenericObject({
    x: -1,
    y: canvas.height - images.hills.height + 10,
    image: images.hills,
  });
  genericObjects = [background, background2, hills];

  scrollOffset = 0;
  lastKey = "right";

  platforms = getPlatforms({ canvas });
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach((object) => {
    object.update({ c });
    object.velocity.x = 0;
  });
  flowers.forEach((flower, index) => {
    if (
      objectsTouch({
        object1: player,
        object2: flower,
      })
    ) {
      player.powerUps.fireFlower = true;
      setTimeout(() => {
        flowers.splice(index, 1);
      }, 0);
    } else {
      flower.update({ c });
    }
  });
  platforms.forEach((platform) => {
    platform.update({ c });
    platform.velocity.x = 0;
  });
  goombas.forEach((goomba, index) => {
    goomba.update({ c });

    // remove goomba on fireball hit
    particles
      .filter((particle) => particle.fireball)
      .forEach((particle, particleIndex) => {
        if (
          particle.position.x + particle.radius >= goomba.position.x &&
          particle.position.x - particle.radius <=
            goomba.position.x + goomba.width &&
          particle.position.y + particle.radius >= goomba.position.y &&
          particle.position.y - particle.radius <=
            goomba.position.y + goomba.height
        ) {
          generateExplosion({
            particles,
            object: goomba,
          });

          setTimeout(() => {
            goombas.splice(index, 1);
            particles.splice(particleIndex, 1);
          }, 0);
        }
      });

    if (collisitionTop({ object1: player, object2: goomba })) {
      player.velocity.y = -20;

      setTimeout(() => {
        generateExplosion({
          particles,
          object: goomba,
        });

        goombas.splice(index, 1);
      }, 0);
    } else if (
      player.position.x + player.width >= goomba.position.x &&
      player.position.y + player.height >= goomba.position.y &&
      player.position.x <= goomba.position.x + goomba.width &&
      player.position.y <= goomba.position.y + goomba.height
    ) {
      // player hits goomba
      if (player.powerUps.fireFlower) {
        player.invincible = true;
        player.powerUps.fireFlower = false;

        setTimeout(() => {
          player.invincible = false;
        }, 1000);
      }
      if (!player.invincible) {
        init();
      }
    }
  });
  particles.forEach((particle, index) => {
    particle.update({ c });

    if (
      particle.fireball && (
        particle.position.x + particle.radius >= canvas.width ||
        particle.position.x - particle.radius <= 0
      )
    ) {
      setTimeout(() => {
        particles.splice(index, 1);
      }, 0);
    }
  });
  
  player.update({ c });

  let hitSide = false;

  if (
    keys.right.pressed &&
    player.position.x + player.width < canvas.width / 2
  ) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed && player.position.x > 200) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    // scrolling code
    if (keys.right.pressed) {
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        platform.velocity.x = -player.speed;

        if (platform.block && hitSideOfPlatform({ object: player, platform })) {
          platforms.forEach((el) => {
            el.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      }

      if (!hitSide) {
        scrollOffset += player.speed;

        genericObjects.forEach((object) => {
          object.velocity.x = -backgroundSpeed;
        });
        goombas.forEach((goomba) => {
          goomba.position.x -= player.speed;
        });
        flowers.forEach((flower) => {
          flower.position.x -= player.speed;
        });
        particles.forEach((particle) => {
          particle.position.x -= player.speed;
        });
      }
    } else if (keys.left.pressed && scrollOffset > 0) {
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        platform.velocity.x = player.speed;

        if (platform.block && hitSideOfPlatform({ object: player, platform })) {
          platforms.forEach((el) => {
            el.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      }

      if (!hitSide) {
        scrollOffset -= player.speed;

        genericObjects.forEach((object) => {
          object.velocity.x = backgroundSpeed;
        });
        goombas.forEach((goomba) => {
          goomba.position.x += player.speed;
        });
        flowers.forEach((flower) => {
          flower.position.x += player.speed;
        });
        particles.forEach((particle) => {
          particle.position.x += player.speed;
        });
      }
    }
  }

  // platform collision detection
  platforms.forEach((platform) => {
    if (isOnTopOfPlatform({ object: player, platform })) {
      player.velocity.y = 0;
    }

    if (platform.block && hitBottomOfPlatform({ object: player, platform })) {
      player.velocity.y = -player.velocity.y;
    }

    if (platform.block && hitSideOfPlatform({ object: player, platform })) {
      player.velocity.x = 0;
    }

    particles.forEach((particle, index) => {
      if (isCircleOnTopOfPlatform({ object: particle, platform })) {
        particle.velocity.y = -particle.velocity.y * 0.9;

        if (particle.radius - 0.8 < 0) {
          particles.splice(index, 1);
        } else {
          particle.radius -= 0.8;
        }
      }

      if (particle.ttl < 0) particles.splice(index, 1);
    });

    goombas.forEach((goomba) => {
      if (isOnTopOfPlatform({ object: goomba, platform })) {
        goomba.velocity.y = 0;
      }
    });

    flowers.forEach((flower) => {
      if (isOnTopOfPlatform({ object: flower, platform })) {
        flower.velocity.y = 0;
      }
    });
  });

  
  // win condition
  if (images.platform && scrollOffset + 100 + player.width > 6968 + 300) {
    console.log('you win')
  }

  if (player.position.y > canvas.height) {
    console.log("You lose");
    init();
  }

  if (player.velocity.y !== 0) return;

  // sprite switching
  let spriteRunRight;
  let spriteRunLeft;
  let spriteStandRight;
  let spriteStandLeft;

  if (player.powerUps.fireFlower) {
    spriteRunRight = player.sprites.run.fireFlower.right;
    spriteRunLeft = player.sprites.run.fireFlower.left;
    spriteStandRight = player.sprites.stand.fireFlower.right;
    spriteStandLeft = player.sprites.stand.fireFlower.left;
  } else {
    spriteRunRight = player.sprites.run.right;
    spriteRunLeft = player.sprites.run.left;
    spriteStandRight = player.sprites.stand.right;
    spriteStandLeft = player.sprites.stand.left;
  }

  if (
    keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== spriteRunRight
  ) {
    player.frames = 1;
    player.currentSprite = spriteRunRight;
  } else if (
    keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== spriteRunLeft
  ) {
    player.currentSprite = spriteRunLeft;
  } else if (
    !keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== spriteStandLeft
  ) {
    player.currentSprite = spriteStandLeft;
  } else if (
    !keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== spriteStandRight
  ) {
    player.currentSprite = spriteStandRight;
  }
}
window.onload = () => {
  init();
  animate();
};

addEventListener("keydown", ({ code }) => {
  switch (code) {
    case "ArrowLeft":
    case "KeyA":
      keys.left.pressed = true;
      lastKey = "left";
      break;
    case "ArrowRight":
    case "KeyD":
      keys.right.pressed = true;
      lastKey = "right";
      break;
    case "ArrowUp":
    case "Space":
    case "KeyW":
      if (player.velocity.y === 0) {
        player.velocity.y = -player.jumpVelocity;
      }

      let spriteJumpRight;
      let spriteJumpLeft;

      if (player.powerUps.fireFlower) {
        spriteJumpRight = player.sprites.jump.fireFlower.right;
        spriteJumpLeft = player.sprites.jump.fireFlower.left;
      } else {
        spriteJumpRight = player.sprites.jump.right;
        spriteJumpLeft = player.sprites.jump.left;
      }

      if (lastKey === "right") {
        player.currentSprite = spriteJumpRight;
      } else {
        player.currentSprite = spriteJumpLeft;
      }

      break;
    case "KeyF":
      if (!player.powerUps.fireFlower) return;

      let velocity = 15;

      if (lastKey === "left") velocity = -velocity;
      particles.push(
        new Particle({
          position: {
            x: player.position.x + player.width / 2,
            y: player.position.y + player.height / 2,
          },
          velocity: {
            x: velocity,
            y: 0,
          },
          radius: 5,
          color: "red",
          fireball: true
        })
      );
      break;
    default:
  }
});

addEventListener("keyup", ({ code }) => {
  switch (code) {
    case "ArrowLeft":
    case "KeyA":
      keys.left.pressed = false;
      break;
    case "ArrowRight":
    case "KeyD":
      keys.right.pressed = false;
      break;
    case "ArrowUp":
    case "Space":
    case "KeyW":
      break;
    default:
  }
});  