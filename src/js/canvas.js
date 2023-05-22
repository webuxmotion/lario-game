import Block from "./Block";
import getGoombas from "./goombas";
import GenericObject from "./GenericObject";
import Player from "./Player";
import images from "./images";

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
  platforms = [
    new Block({
      x: 400,
      y: 400,
    }),
    new Block({
      x: 400 + Block.sizes.width,
      y: 400,
    }),
    new GenericObject({
      x: 0,
      y: canvas.height - images.platform.height,
      image: images.platform,
    }),
    new GenericObject({
      x: images.platform.width - 3 + 300,
      y: canvas.height - images.platform.height,
      image: images.platform,
    }),
    // the last platform
    new GenericObject({
      x: images.platform.width * 2 - 3 * 2 + 300,
      y: canvas.height - images.platform.height,
      image: images.platform,
    }),
    new GenericObject({
      x: 400,
      y: canvas.height - 300,
      image: images.platform,
    }),
    new GenericObject({
      x: 600,
      y: canvas.height - 600,
      image: images.platform,
    }),
  ];
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
  genericObjects.forEach((object) => object.draw({ c }));
  platforms.forEach((platform) => platform.draw({ c }));
  goombas.forEach((goomba, index) => {
    goomba.update({ c });

    if (collisitionTop({ object1: player, object2: goomba })) {
      player.velocity.y = -20;

      setTimeout(() => {
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
  player.update({ c, canvas });

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

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
      goombas.forEach((goomba) => {
        goomba.position.x -= player.speed;
      });
      genericObjects.forEach((object) => {
        object.position.x -= backgroundSpeed;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });
      goombas.forEach((goomba) => {
        goomba.position.x += player.speed;
      });
      genericObjects.forEach((object) => {
        object.position.x += backgroundSpeed;
      });
    }
  }

  function isOnTopOfPlatform({ object, platform }) {
    return (
      object.position.y + object.height <= platform.position.y &&
      object.position.y + object.height + object.velocity.y >=
        platform.position.y &&
      object.position.x + object.width > platform.position.x &&
      object.position.x < platform.position.x + platform.width
    );
  }

  function collisitionTop({ object1, object2 }) {
    return (
      object1.position.y + object1.height <= object2.position.y &&
      object1.position.y + object1.height + object1.velocity.y >=
        object2.position.y &&
      object1.position.x + object1.width > object2.position.x &&
      object1.position.x < object2.position.x + object2.width
    );
  }

  // platform collision detection
  platforms.forEach((platform) => {
    if (isOnTopOfPlatform({ object: player, platform })) {
      player.velocity.y = 0;
    }

    goombas.forEach((goomba) => {
      if (isOnTopOfPlatform({ object: goomba, platform })) {
        goomba.velocity.y = 0;
      }
    });
  });

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
      player.velocity.y = -player.jumpVelocity;
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
