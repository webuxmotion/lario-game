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

export { getGoombas1, getGoombas2 };