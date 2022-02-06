import { I2dDraw, I2dObject, ObjectPositioDimension } from "../@types/Object";
import { IDENTITY_METRIX } from "../math/constants";
import { angleToRadian } from "../math/trigometry";

export class ShapeBaseObject implements I2dObject<ShapeBaseObject>, I2dDraw {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill = "#000000";
  borderColor = "rgba(0,0,0,0)";
  borderWidth = 0;
  scaleX = 1;
  scaleY = 1;
  angle = 0;

  constructor({
    x,
    y,
    width,
    height,
    id,
  }: ObjectPositioDimension & { id: string }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.id = id;
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

  get border() {
    return {
      borderColor: this.borderColor,
      borderWidth: this.borderWidth,
    };
  }

  get scale() {
    return {
      scaleX: this.scaleX,
      scaleY: this.scaleY,
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
      border: this.border,
      scale: this.scale,
    };
  }

  set(
    option: Partial<
      Omit<
        ShapeBaseObject,
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
      >
    >
  ): void {
    for (const [key, value] of Object.entries(option)) {
      (<any>this)[key] = value;
    }
  }

  transformScale(ctx: CanvasRenderingContext2D) {
    ctx.setTransform(IDENTITY_METRIX);
    ctx.scale(this.scaleX, this.scaleY);
  }

  transformAngle(ctx: CanvasRenderingContext2D) {
    ctx.rotate(angleToRadian(this.angle));
  }

  drawStroke(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderWidth;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    this.transformScale(ctx);
    this.transformAngle(ctx);
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.fill;
    this.drawStroke(ctx);
    ctx.fill();
    ctx.stroke();
    ctx.setTransform(IDENTITY_METRIX);
  }
}
