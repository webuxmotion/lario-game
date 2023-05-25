import GenericObject from "./GenericObject";
import images from "./images";

const getGenericObjects1 = () => {
  const background = new GenericObject({
    x: -1,
    y: -1,
    image: images.background,
  });
  const background2 = new GenericObject({
    x: -1,
    y: images.background.height - 3,
    image: images.background,
  });
  const hills = new GenericObject({
    x: -1,
    y: canvas.height - images.hills.height + 10,
    image: images.hills,
  });
  const genericObjects = [background, background2, hills];

  return genericObjects;
}

const getGenericObjects2 = () => {
  const background = new GenericObject({
    x: -1,
    y: -1,
    image: images.level2.background
  });
  const background2 = new GenericObject({
    x: -1,
    y: images.level2.background.height - 3,
    image: images.level2.background
  });
  const hills = new GenericObject({
    x: -1,
    y: canvas.height - images.level2.mountains.height + 10,
    image: images.level2.mountains,
  });

  const genericObjects = [background, background2, hills];

  return genericObjects;
}

export { getGenericObjects1, getGenericObjects2 };