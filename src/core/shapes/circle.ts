import { I2dPosition } from "../@types/Object";
import { ICanvasObject } from "../canvas/canvas-manager";
import { getColor } from "../utils/get-color";
import { ShapeBaseObject, ShapeBaseObjectConstructorParam } from "./object";

type SetOptionParam = Partial<
  Omit<
    Circle,
    | "draw"
    | "contains"
    | "toObject"
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
export class Circle extends ShapeBaseObject implements ICanvasObject {
  radius: number = 1;
  constructor({
    radius,
    ...option
  }: ShapeBaseObjectConstructorParam & { radius: number }) {
    super(option);
    this.radius = radius;
  }

  // TODO: implement set coordinate functionality
  setCoords(): void {
    throw new Error("Method not implemented.");
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    this.transformScale(ctx);
    this.transformAngle(ctx);

    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = getColor(this.fill, this.opacity);
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
      top: this.y,
      left: this.x,
    };
  }

  set(option: SetOptionParam) {
    super.set(option);
  }

  contains(position: I2dPosition) {
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
      opacity: this.opacity,
      radius: this.radius,
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      fill: this.fill,
      width: this.width,
      height: this.height,
      boundingBox: this.boundingBox,
      border: this.border,
      scale: this.scale,
    };
  }
}
