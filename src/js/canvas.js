import Block from "./Block";
import GenericObject from "./GenericObject";
import Player from "./Player";
import images from "./images";

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
export const gravity = 1.4;
const xBackgroundVelocityOnPressed = 5;
let lastKey;
// ends before platform creation starts
// https://youtu.be/4q2vvZn5aoo?t=2164
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let player = new Player();
let platforms;
let background;
let background2;
let hills;
let genericObjects = [background, background2, hills];
let scrollOffset = 0;

function init() {
  player = new Player();
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
let angle = 0;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach((object) => object.draw({ c }));
  platforms.forEach((platform) => platform.draw({ c }));
  player.update({ c, canvas });

  if (
    keys.right.pressed &&
    player.position.x + player.width < canvas.width / 2
  ) {
    player.velocity.x = player.xVelocityOnPressed;
  } else if (
    (keys.left.pressed && player.position.x > 200) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.xVelocityOnPressed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.xVelocityOnPressed;
      platforms.forEach((platform) => {
        platform.position.x -= player.xVelocityOnPressed;
      });
      genericObjects.forEach((object) => {
        object.position.x -= xBackgroundVelocityOnPressed;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.xVelocityOnPressed;
      platforms.forEach((platform) => {
        platform.position.x += player.xVelocityOnPressed;
      });
      genericObjects.forEach((object) => {
        object.position.x += xBackgroundVelocityOnPressed;
      });
    }
  }

  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width > platform.position.x &&
      player.position.x < platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
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

  console.log(images);
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
