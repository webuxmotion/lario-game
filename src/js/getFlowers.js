import Flower from './Flower';

const getFlowers1 = () => {
  return [
    new Flower({
      position: {
        x: 400,
        y: 100,
      },
      velocity: {
        x: 0,
        y: 0
      }
    })
  ]
}

const getFlowers2 = () => {
  return [
    new Flower({
      position: {
        x: 4734 - 28,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      }
    })
  ]
}

export { getFlowers1, getFlowers2 };