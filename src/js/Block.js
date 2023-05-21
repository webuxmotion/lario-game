import GenericObject from "./GenericObject";
import images from "./images";

class Block extends GenericObject {
  constructor(params) {
    super({ image: images.blocks, ...params });
    
    this.width = 78;
    this.height = 79;
  }

  draw({ c }) {
    c.drawImage(
      this.image,
      183,
      17,
      78,
      79,
      this.position.x, 
      this.position.y,
      78,
      79,
    );
  }
}

Block.sizes = {
  width: 78,
  height: 79,
}

export default Block;