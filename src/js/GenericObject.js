class GenericObject {
  constructor({ x, y, image, block, text }) {
    this.position = {
      x,
      y,
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
    this.block = block;
    this.text = text;
  }

  draw({ c }) {
    c.drawImage(this.image, this.position.x, this.position.y);

    if (this.text) {
      c.fillStyle = 'red';
      c.fillText('sdfsdf', this.position.x, this.position.y);
    }
  }

  update({ c }) {
    this.draw({ c });
    this.position.x += this.velocity.x;
  }
}

export default GenericObject;