import Flower from './Flower';

const getFlowers = () => {
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

export default getFlowers;