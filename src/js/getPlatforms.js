import GenericObject from "./GenericObject";
import images from "./images";

const getPlatforms = ({ canvas }) => {
  const platforms = [
    new GenericObject({
      x: 908 + 100,
      y: canvas.height - images.platform.height - 300,
      image: images.blockTri,
      block: true
    }),
    new GenericObject({
      x: 908 + 100 + images.block.width,
      y: canvas.height - images.platform.height - 500,
      image: images.block,
      block: true
    }),
    new GenericObject({
      x: 1991 + images.lgPlatform.width - images.tPlatform.width,
      y: canvas.height - images.lgPlatform.height - images.tPlatform.height,
      image: images.tPlatform,
      block: false
    }),
    new GenericObject({
      x: 1991 + images.lgPlatform.width - images.tPlatform.width - 100,
      y:
        canvas.height -
        images.lgPlatform.height -
        images.tPlatform.height +
        images.block.height,
      image: images.block,
      block: true
    }),
    new GenericObject({
      x: 5712 + images.xtPlatform.width + 175,
      y: canvas.height - images.xtPlatform.height,
      image: images.block,
      block: true,
    }),
    new GenericObject({
      x: 6116 + 175,
      y: canvas.height - images.xtPlatform.height,
      image: images.block,
      block: true
    }),
    new GenericObject({
      x: 6116 + 175 * 2,
      y: canvas.height - images.xtPlatform.height,
      image: images.block,
      block: true
    }),
    new GenericObject({
      x: 6116 + 175 * 3,
      y: canvas.height - images.xtPlatform.height - 100,
      image: images.block,
      block: true
    }),
    new GenericObject({
      x: 6116 + 175 * 4,
      y: canvas.height - images.xtPlatform.height - 200,
      image: images.blockTri,
      block: true
    }),
    new GenericObject({
      x: 6116 + 175 * 4 + images.blockTri.width,
      y: canvas.height - images.xtPlatform.height - 200,
      image: images.blockTri,
      block: true,
    }),
    new GenericObject({
      x: 6968 + 300,
      y: canvas.height - images.lgPlatform.height,
      image: images.lgPlatform,
      block: true,
    }),
    new GenericObject({
      x: 6968 + 300 + images.lgPlatform.width - 2,
      y: canvas.height - images.lgPlatform.height,
      image: images.lgPlatform,
      block: true,
    })
  ]

  const platformsMap = [
    'lg',
    'lg',
    'gap',
    'lg',
    'gap',
    'gap',
    'lg',
    'gap',
    't',
    'gap',
    'xt',
    'gap',
    'xt',
    'gap',
    'gap',
    'xt',
  ];

  let platformDistance = 0;

  platformsMap.forEach((symbol) => {
    switch (symbol) {
      case 'lg':
        platforms.push(
          new GenericObject({
            x: platformDistance,
            y: canvas.height - images.lgPlatform.height,
            image: images.lgPlatform,
            block: true,
          })
        )
  
        platformDistance += images.lgPlatform.width - 2
  
        break
  
      case 'gap':
        platformDistance += 175
  
        break
  
      case 't':
        platforms.push(
          new GenericObject({
            x: platformDistance,
            y: canvas.height - images.tPlatform.height,
            image: images.tPlatform,
            block: true
          })
        )
  
        platformDistance += images.tPlatform.width - 2
  
        break;
  
      case 'xt':
        platforms.push(
          new GenericObject({
            x: platformDistance,
            y: canvas.height - images.xtPlatform.height,
            image: images.xtPlatform,
            block: true,
          })
        )
  
        platformDistance += images.xtPlatform.width - 2
  
        break;
    }
  });

  return platforms;
}

export default getPlatforms;