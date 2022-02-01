import {
  I2dDimension,
  I2dObject,
  I2dPosition,
  ObjectPositioDimension,
} from "../@types/Object";

export class Rectangle implements I2dObject {
  x: number;
  y: number;
  width: number;
  height: number;
  fill = "#000000";
  scaleX = 1;
  scaleY = 1;

  constructor({ x, y, width, height }: ObjectPositioDimension) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  toObject() {
    return {
      x: this.x,
      y: this.y,
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      fill: this.fill,
    };
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.fill;
    ctx.fill();
    ctx.stroke();
  }

  //TODO: add contains functionality and test
  contains(position: I2dPosition) {
    if (this.width === 0 || this.height === 0) {
      return false;
    }

    return false;
  }
}
