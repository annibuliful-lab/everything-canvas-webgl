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

  get centerPoint() {
    return {
      top: this.x,
      left: this.y,
    };
  }

  set(option: SetOptionParam) {
    super.set(option);
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
