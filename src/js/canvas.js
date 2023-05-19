const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 1.4;
// ends before platform creation starts
// https://youtu.be/4q2vvZn5aoo?t=2164

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: canvas.height - 200,
    };
    this.velocity = {
      x: 0,
      y: 20,
    };
    this.width = 30;
    this.height = 30;
    this.jumpVelocity = 30;
    this.xVelocityOnPressed = 10;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // gravity
    if (this.isAboveTheBottom()) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }

  isAboveTheBottom() {
    return this.getBaseY() <= canvas.height;
  }

  getBaseY() {
    return this.position.y + this.height + this.velocity.y;
  }
}

class Platform {
  constructor({ x, y }) {
    this.position = {
      x,
      y
    };

    this.width = 200;
    this.height = 20;
  }

  draw() {
    c.fillStyle = "blue";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new Player();
const platforms = [
    new Platform({ x: 200, y: canvas.height - 200 }),
    new Platform({ x: 300, y: canvas.height - 100 }),
    new Platform({ x: 400, y: canvas.height - 150 })
];
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};
let scrollOffset = 0;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platforms.forEach((platform) => platform.draw());

  if (
    keys.right.pressed &&
    player.position.x + player.width < canvas.width / 2
  ) {
    player.velocity.x = player.xVelocityOnPressed;
  } else if (keys.left.pressed && player.position.x > 200) {
    player.velocity.x = -player.xVelocityOnPressed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach((platform) => {
        platform.position.x -= player.xVelocityOnPressed;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      platforms.forEach((platform) => {
        platform.position.x += player.xVelocityOnPressed;
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

  if (scrollOffset > 2000) {
    console.log('You win');
  }
}

animate();

addEventListener("keydown", ({ code }) => {
  switch (code) {
    case "ArrowLeft":
    case "KeyA":
      keys.left.pressed = true;
      break;
    case "ArrowRight":
    case "KeyD":
      keys.right.pressed = true;
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
