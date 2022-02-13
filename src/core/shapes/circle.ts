import { I2dPosition } from "../@types/Object";
import { ShapeBaseObject, ShapeBaseObjectConstructorParam } from "./object";

type SetOptionParam = Partial<
  Omit<
    Circle,
    | "draw"
    | "contains"
    | "toObjects"
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "setFill"
    | "border"
    | "boundingBox"
  >
>;
export class Circle extends ShapeBaseObject {
  radius: number = 1;
  constructor({
    radius,
    ...option
  }: ShapeBaseObjectConstructorParam & { radius: number }) {
    super(option);
    this.radius = radius;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    this.transformScale(ctx);
    this.transformAngle(ctx);

    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.fill;
    this.drawStroke(ctx);
    ctx.fill();
    ctx.stroke();
    this.resetTransform(ctx);
  }
  get left() {
    return this.x - this.radius;
  }

  get right() {
    return this.x + this.radius;
  }

  get top() {
    return this.y + this.radius;
  }

  get topLeft() {
    return {
      x: this.left,
      y: this.top,
    };
  }

  get topRight() {
    return {
      x: this.right,
      y: this.top,
    };
  }

  get bottom() {
    return this.y - this.height;
  }

  get bottomLeft() {
    return {
      x: this.left,
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

  get centerPoint() {
    return {
      top: this.x,
      left: this.y,
    };
  }

  set(option: SetOptionParam) {
    super.set(option);
  }

  contains(position: I2dPosition) {
    // implement pythagorean
    const distanceX = position.x - this.x;
    const distanceY = position.y - this.y;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance <= this.radius) {
      return true;
    }

    return false;
  }

  toObject() {
    return {
      x: this.x,
      y: this.y,
      radius: this.radius,
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      fill: this.fill,
      widht: this.width,
      height: this.height,
      boundingBox: this.boundingBox,
      border: this.border,
      scale: this.scale,
    };
  }
}
