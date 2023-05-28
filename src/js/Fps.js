class Fps {
  constructor({ canvasWidth }) {
    this.times = [];
    this.fps = 0;
    this.lastUpdate = 0;
    this.lastUpdateCounter = 0;
    this.items = [];
    this.lineWidth = 5;
    this.maxItems = 30;
    this.height = 50;
    this.width = this.maxItems * this.lineWidth;
    this.position = {
      x: canvasWidth - this.width - 20,
      y: 20
    }
  }

  draw({ c }) {
    c.save();

    c.globalAlpha = 0.2;
    c.fillStyle = "black";
    c.fillRect(this.position.x , this.position.y, this.width, this.height);

    for (let i = 0; i < this.maxItems; i++) {
      const item = this.items[i];
      if (item) {
        const height = item * this.height / 70;
        const x = this.position.x + i * this.lineWidth;
        const y = this.position.y + this.height - height;
  
        c.fillStyle = "green";
        
        if (item < 30) {
          c.fillStyle = "red";
        }
        c.globalAlpha = 0.2;
        c.fillRect(x, y, this.lineWidth, height);

        c.globalAlpha = 1;
        c.fillRect(x, y, this.lineWidth, 2);
      }
    }

    c.font = "20px Arial";
    c.fillText( `FPS: ${this.fps}` , this.position.x , this.position.y );
    
    c.restore();
  }

  update({ c }) {
    this.draw({ c });

    const now = performance.now();

    while (this.times.length > 0 && this.times[0] <= now - 1000) {
      this.times.shift();
    }

    const delta = (now - this.times[this.times.length - 1]) / 1000 || 0;
    if (!this.lastUpdate || (this.lastUpdateCounter - this.lastUpdate) >= 0.5) {
      this.lastUpdate = now;
      this.lastUpdateCounter = now;

      this.fps = this.times.length;
      if (this.items.length > this.maxItems) {
        this.items.shift();
      }
      this.items.push(this.fps);
    }
    this.lastUpdateCounter += delta;

    this.times.push(now);
  }
}

export default Fps;