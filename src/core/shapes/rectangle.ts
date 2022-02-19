import { I2dPosition, ObjectPositioDimension } from "../@types/Object";
import { ICanvasObject } from "../canvas/canvasManager";
import { getColor } from "../utils/get-color";
import { ShapeBaseObject } from "./object";

type SetOptionParam = Partial<
  Omit<
    Rectangle,
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

export class Rectangle extends ShapeBaseObject implements ICanvasObject {
  constructor(option: ObjectPositioDimension & { id: string }) {
    super(option);
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

  get bottom() {
    return this.y + this.height;
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

  get centerPoint() {
    return {
      top: (this.top + this.height) / 2,
      left: (this.left + this.width) / 2,
    };
  }

  toObject() {
    return {
      x: this.x,
      y: this.y,
      opacity: this.opacity,
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      fill: this.fill,
      widht: this.width,
      height: this.height,
      boundingBox: this.boundingBox,
      centerPoint: this.centerPoint,
      border: this.border,
      scale: this.scale,
    };
  }

  set(option: SetOptionParam): void {
    for (const [key, value] of Object.entries(option)) {
      (<any>this)[key] = value;
    }
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

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    this.transformScale(ctx);
    this.transformAngle(ctx);

    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = getColor(this.fill, this.opacity);
    this.drawStroke(ctx);
    ctx.fill();
    ctx.stroke();
    this.resetTransform(ctx);
  }
}
