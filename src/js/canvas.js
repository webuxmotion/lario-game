import gsap from 'gsap';
import { audio } from './audio';
import { getGoombas1, getGoombas2 } from "./getGoombas";
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
import { getFlowers1, getFlowers2 } from "./getFlowers";
import { getPlatforms1, getPlatforms2 } from "./getPlatforms";
import Particle from "./Particle";
import { getGenericObjects1, getGenericObjects2 } from './getGenericObjects';
import Fps from './Fps';

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
export let gravity = 1.4;
const backgroundSpeed = 5;
let lastKey;
let player;
let platforms = [];
let genericObjects = [];
let goombas = [];
let flowers = [];
let particles = [];
let scrollOffset;
let keys;
let flagPole;
let game;
let currentLevel = 1;
let fps = new Fps({ canvasWidth: canvas.width });

const restartButton = document.querySelector('.js-restart-button');
const winBlock = document.querySelector('.js-win');
restartButton.addEventListener('click', () => {
  hideWinMessage(winBlock);
  currentLevel = 1;
  selectLevel(currentLevel);
});
function hideWinMessage(el) {
  el.classList.remove('is-show');
}
function showWinMessage(el) {
  el.classList.add('is-show');
}

function selectLevel(currentLevel) {
  if (!audio.musicLevel1.playing()) audio.musicLevel1.play();
  
  switch (currentLevel) {
    case 1:
      init();
      break;
    case 2:
      initLevel2();
      break;
    default:
      showWinMessage(winBlock);
  }
}

function init() {
  player = new Player();
  scrollOffset = 0;
  game = {
    disableUserInput: false
  };
  keys = {
    right: {
      pressed: false,
    },
    left: {
      pressed: false,
    },
  }
  goombas = getGoombas1();
  particles = [];
  flowers = getFlowers1();
  genericObjects = getGenericObjects1();

  scrollOffset = 0;
  lastKey = "right";
  platforms = getPlatforms1({ canvas });
  flagPole = new GenericObject({
    x: 7650,
    y: canvas.height - images.lgPlatform.height - images.flagPole.height,
    image: images.flagPole,
  });
}

function initLevel2() {
  player = new Player();
  scrollOffset = 0;
  game = {
    disableUserInput: false
  };
  keys = {
    right: {
      pressed: false,
    },
    left: {
      pressed: false,
    },
  }
  goombas = getGoombas2();
  particles = [];
  flowers = getFlowers2();
  genericObjects = getGenericObjects2();

  scrollOffset = 0;
  lastKey = "right";
  platforms = getPlatforms2({ canvas });
  flagPole = new GenericObject({
    x: 7780,
    y: canvas.height - images.level2.lgPlatform.height - images.flagPole.height,
    image: images.flagPole
  })
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach((object) => {
    object.update({ c });
    object.velocity.x = 0;
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
  flagPole.update({ c });
  flagPole.velocity.x = 0;

  // mario touches flagpole
  // win condition
  // complete level
  if (
    !game.disableUserInput && 
    objectsTouch({
      object1: player,
      object2: flagPole
    })
  ) {
    let spriteStandRight;
    let spriteRunRight;
    if (player.powerUps.fireFlower) {
      spriteStandRight = player.sprites.stand.fireFlower.right;
      spriteRunRight = player.sprites.run.fireFlower.right;
    } else {
      spriteStandRight = player.sprites.stand.right;
      spriteRunRight = player.sprites.run.right;
    }
    audio.completeLevel.play()
    audio.musicLevel1.stop()
    game.disableUserInput = true;
    player.velocity.x = 0;
    player.velocity.y = 0;
    player.currentSprite = spriteStandRight;
    gravity = 0;

    // flagpole slide
    setTimeout(() => {
      audio.descend.play()
    }, 200);

    gsap.to(player.position, {
      y: flagPole.position.y + flagPole.height - player.height,
      duration: 1,
      onComplete() {
        player.currentSprite = spriteRunRight;
      }
    });
    gsap.to(player.position, {
      x: canvas.width,
      delay: 1,
      duration: 2,
      ease: 'power1.in'
    });

    const particleCount = 300;
    const radians = Math.PI * 2 / particleCount;
    const power = 8;
    let increment = 1;

    const intervalId = setInterval(() => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle({
          position: {
            x: canvas.width / 4 * increment,
            y: canvas.height / 3,
          },
          velocity: {
            x: Math.cos(radians * i) * power * Math.random(),
            y: Math.sin(radians * i) * power * Math.random()
          },
          radius: 3 * Math.random(),
          color: `hsl(${Math.random() * 200}, 50%, 50%)`,
          fades: true
        }))
      }
      audio.fireworkBurst.play();
      audio.fireworkWhistle.play();

      if (increment === 3) clearInterval(intervalId);

      increment++;
    }, 1000);

    // switch to the next level
    setTimeout(() => {
      gravity = 1.4;
      currentLevel++;
      selectLevel(currentLevel);
    }, 8000)
  }

  // mario obtains powerup
  flowers.forEach((flower, index) => {
    if (
      objectsTouch({
        object1: player,
        object2: flower,
      })
    ) {
      audio.obtainPowerUp.play();
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

  if (player.powerUps.fireFlower) {
    c.font = "20px Arial";
    c.fillStyle = 'white';
    c.fillText('Press F to fire', 50, 50);
  }
  goombas.forEach((goomba, index) => {
    goomba.update({ c });

    // remove goomba on fireball hit
    particles
      .forEach((particle, particleIndex) => {
        if (
          particle.fireball &&
          particle.position.x + particle.radius >= goomba.position.x &&
          particle.position.x - particle.radius <=
            goomba.position.x + goomba.width &&
          particle.position.y + particle.radius >= goomba.position.y &&
          particle.position.y - particle.radius <=
            goomba.position.y + goomba.height
        ) {
          audio.fireworkBurst.play();
          generateExplosion({
            particles,
            object: goomba,
          });

          setTimeout(() => {
            particles.splice(particleIndex, 1);
            goombas.splice(index, 1);
          }, 0);
        }
      });

    // goomba squash
    if (collisitionTop({ object1: player, object2: goomba })) {
      audio.goombaSquash.play();
      generateExplosion({
        particles,
        object: goomba,
      });
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
      // player hits goomba
      // lose fireflower / lose powerup
      if (player.powerUps.fireFlower) {
        player.invincible = true;
        player.powerUps.fireFlower = false;
        audio.losePowerUp.play();

        setTimeout(() => {
          player.invincible = false;
        }, 1000);
      }
      // player die
      if (!player.invincible) {
        audio.die.play();
        selectLevel(currentLevel);
      }
    }
  });
  
  player.update({ c });

  fps.update({ c });

  if (game.disableUserInput) return;

  // scrolling code starts
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

        flagPole.velocity.x -= player.speed;

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

        flagPole.velocity.x += player.speed;

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

  if (player.position.y > canvas.height) {
    audio.die.play();
    selectLevel(currentLevel)
  }

  // sprite switching

  if (player.shooting) {
    player.currentSprite = player.sprites.shoot.fireFlower.right;

    if (lastKey === 'left') {
      player.currentSprite = player.sprites.shoot.fireFlower.left;
    }

    return;
  }

  if (player.velocity.y !== 0) return;

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
  selectLevel(currentLevel);
  animate();
};

addEventListener("keydown", ({ code }) => {
  if (game.disableUserInput) return;

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
        audio.jump.play();

        player.velocity.y = -player.jumpVelocity;

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
      }

      break;
    case "KeyF":
      if (!player.powerUps.fireFlower) return;

      player.shooting = true;
      setTimeout(() => {
        player.shooting = false;
      }, 100);

      audio.fireFlowerShot.play();
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
  if (game.disableUserInput) return;

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