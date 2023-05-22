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
  }),
  new Goomba({
    position: {
      x: 1000,
      y: 200,
    },
    velocity: {
      x: -0.5,
      y: 0,
    },
  }),
];

export default getGoombas;