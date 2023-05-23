import getGoombas from "./getGoombas";
import GenericObject from "./GenericObject";
import Player from "./Player";
import images from "./images";
import getPlatforms from "./getPlatforms";
import Particle from "./Particle";
import { collisitionTop, hitBottomOfPlatform, hitSideOfPlatform, isCircleOnTopOfPlatform, isOnTopOfPlatform } from "./utils";

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
export const gravity = 1.4;
const backgroundSpeed = 5;
let lastKey;
let player = new Player();
let platforms;
let background;
let background2;
let hills;
let genericObjects = [background, background2, hills];
let goombas = [];
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
  platforms = getPlatforms();
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
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach((object) => {
    object.update({ c });
    object.velocity.x = 0;
  });
  platforms.forEach((platform) => {
    platform.update({ c });
    platform.velocity.x = 0;
  });
  goombas.forEach((goomba, index) => {
    goomba.update({ c });

    if (collisitionTop({ object1: player, object2: goomba })) {
      player.velocity.y = -20;

      setTimeout(() => {
        for (let i = 0; i < 50; i++) {
          particles.push(new Particle({
            position: {
              x: goomba.position.x + goomba.width / 2,
              y: goomba.position.y + goomba.height / 2,
            },
            velocity: {
              x: (Math.random() - 0.5) * 10,
              y: (Math.random() - 0.5) * 7,
            },
            radius: Math.random() * 3,
          }));
        }

        goombas.splice(index, 1);
      }, 0);
    } else if (
      player.position.x + player.width >= goomba.position.x &&
      player.position.y + player.height >= goomba.position.y &&
      player.position.x <= goomba.position.x + goomba.width &&
      player.position.y <= goomba.position.y + goomba.height
    ) {
      init();
    }
  });
  particles.forEach((particle) => particle.update({ c }));
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
    })

    goombas.forEach((goomba) => {
      if (isOnTopOfPlatform({ object: goomba, platform })) {
        goomba.velocity.y = 0;
      }
    });
  });

  if (player.velocity.y === 0) {
    if (
      keys.right.pressed &&
      lastKey === "right" &&
      player.currentSprite !== player.sprites.run.right
    ) {
      player.frames = 1;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
    } else if (
      keys.left.pressed &&
      lastKey === "left" &&
      player.currentSprite !== player.sprites.run.left
    ) {
      player.currentSprite = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
    } else if (
      !keys.left.pressed &&
      lastKey === "left" &&
      player.currentSprite !== player.sprites.stand.left
    ) {
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
    } else if (
      !keys.right.pressed &&
      lastKey === "right" &&
      player.currentSprite !== player.sprites.stand.right
    ) {
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
    }
  }

  const lastPlatformX = images.platform.width * 2 - 3 * 2 + 300;
  if (scrollOffset > lastPlatformX - canvas.width / 2 + 200) {
    console.log("You win");
  }

  if (player.position.y > canvas.height) {
    console.log("You lose");
    init();
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
      
      if (lastKey === 'right') {
        player.currentSprite = player.sprites.jump.right;
      } else {
        player.currentSprite = player.sprites.jump.left;
      }
      
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
