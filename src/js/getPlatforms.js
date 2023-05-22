import Block from "./Block";
import GenericObject from "./GenericObject";
import images from "./images";

const getPlatforms = () => {
  return [
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
  ]
}

export default getPlatforms;