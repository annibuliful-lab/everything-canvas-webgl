import {
  I2dDraw,
  I2dIntersection,
  I2dPosition,
  ObjectPositioDimension,
} from "../@types/Object";
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

export class Rectangle
  extends ShapeBaseObject
  implements I2dDraw, I2dIntersection
{
  constructor(option: ObjectPositioDimension & { id: string }) {
    super(option);
  }

  set(option: SetOptionParam): void {
    for (const [key, value] of Object.entries(option)) {
      (<any>this)[key] = value;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    this.transformScale(ctx);
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.fill;
    this.drawStroke(ctx);
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
