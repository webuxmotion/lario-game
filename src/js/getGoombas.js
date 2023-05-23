import Goomba from "./Goomba";

const getGoombas = () => [
  new Goomba({
    position: {
      x: 400,
      y: 200,
    },
    velocity: {
      x: -0.5,
      y: 0,
    },
    distanceLimit: 200
  }),
  new Goomba({
    position: {
      x: 800,
      y: 200,
    },
    velocity: {
      x: -0.5,
      y: 0,
    },
    distanceLimit: 300
  }),
  new Goomba({
    position: {
      x: 1500,
      y: 200,
    },
    velocity: {
      x: -0.5,
      y: 0,
    },
  }),
];

export default getGoombas;