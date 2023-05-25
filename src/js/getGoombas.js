import Goomba from "./Goomba";
import images from "./images";
const goombaWidth = 43.33

const getGoombas1 = () => [
  new Goomba({
    position: {
      x: 908 + images.lgPlatform.width - goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 400,
      traveled: 0
    }
  }),
  new Goomba({
    position: {
      x: 3249 + images.lgPlatform.width - goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 400,
      traveled: 0
    }
  }),
  new Goomba({
    position: {
      x: 3249 + images.lgPlatform.width - goombaWidth - goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 400,
      traveled: 0
    }
  }),
  new Goomba({
    position: {
      x:
        3249 +
        images.lgPlatform.width -
        goombaWidth -
        goombaWidth -
        goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 400,
      traveled: 0
    }
  }),
  new Goomba({
    position: {
      x:
        3249 +
        images.lgPlatform.width -
        goombaWidth -
        goombaWidth -
        goombaWidth -
        goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 400,
      traveled: 0
    }
  }),
  new Goomba({
    position: {
      x: 5135 + images.xtPlatform.width / 2 + goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 100,
      traveled: 0
    }
  }),
  new Goomba({
    position: {
      x: 6968,
      y: 0
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 100,
      traveled: 0
    }
  })
];

const getGoombas2 = () => [
  new Goomba({
    // single block goomba
    position: {
      x: 903 + images.level2.mdPlatform.width - goombaWidth,
      y: 100
    },
    velocity: {
      x: -2,
      y: 0
    },
    distance: {
      limit: 700,
      traveled: 0
    }
  }),
  new Goomba({
    // single block goomba
    position: {
      x:
        1878 +
        images.level2.lgPlatform.width +
        155 +
        200 +
        200 +
        200 +
        images.block.width / 2 -
        goombaWidth / 2,
      y: 100
    },
    velocity: {
      x: 0,
      y: 0
    },
    distance: {
      limit: 0,
      traveled: 0
    }
  }),
  new Goomba({
    position: {
      x: 3831 + images.level2.lgPlatform.width - goombaWidth,
      y: 100
    },
    velocity: {
      x: -1,
      y: 0
    },
    distance: {
      limit: images.level2.lgPlatform.width - goombaWidth,
      traveled: 0
    }
  }),

  new Goomba({
    position: {
      x: 4734,
      y: 100
    },
    velocity: {
      x: 1,
      y: 0
    },
    distance: {
      limit: images.level2.lgPlatform.width - goombaWidth,
      traveled: 0
    }
  })
];

export { getGoombas1, getGoombas2 };