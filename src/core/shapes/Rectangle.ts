import {
  I2dDimension,
  I2dObject,
  I2dPosition,
  ObjectPositioDimension,
} from "../@types/Object";

export class Rectangle implements I2dObject<Rectangle> {
  x: number;
  y: number;
  width: number;
  height: number;
  fill = "#000000";
  borderColor = "rgba(0,0,0,0)";
  scaleX = 1;
  scaleY = 1;
  angle = 0;

  constructor({ x, y, width, height }: ObjectPositioDimension) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get left() {
    return this.x;
  }

  get right() {
    return this.x + this.width;
  }

  get top() {
    return this.y;
  }

  get bottom() {
    return this.y + this.height;
  }

  get topLeft() {
    return {
      x: this.x,
      y: this.y,
    };
  }

  get topRight() {
    return {
      x: this.right,
      y: this.y,
    };
  }

  get bottomLeft() {
    return {
      x: this.x,
      y: this.bottom,
    };
  }

  get bottomRight() {
    return {
      x: this.right,
      y: this.bottom,
    };
  }

  get boundingBox() {
    return {
      topLeft: this.topLeft,
      topRight: this.topRight,
      bottomLeft: this.bottomLeft,
      bottomRight: this.bottomRight,
    };
  }

  toObject() {
    return {
      x: this.x,
      y: this.y,
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      fill: this.fill,
      widht: this.width,
      height: this.height,
      boundingBox: this.boundingBox,
    };
  }

  setFill(fill: string) {
    this.fill = fill;
  }

  set<K extends keyof Rectangle, V extends Rectangle[K]>(option: Record<K, V>) {
    for (const key of Object.keys(option)) {
      (<any>this)[key] = option[key as K];
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.fill;
    ctx.strokeStyle = this.borderColor;
    ctx.fill();
    ctx.stroke();
  }

  contains(position: I2dPosition) {
    if (this.width === 0 || this.height === 0) {
      return false;
    }
    const { x, y } = position;

    const isInsideLeftEdge = x >= this.left;
    const isInsideRightEdge = x <= this.right;
    const isInsideBelowAndTopEdge = y >= this.top;
    const isInsideAboveAndBottomEdge = y <= this.bottom;

    if (
      isInsideLeftEdge &&
      isInsideRightEdge &&
      isInsideBelowAndTopEdge &&
      isInsideAboveAndBottomEdge
    ) {
      return true;
    }

    return false;
  }
}
