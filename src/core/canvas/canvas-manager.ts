import { I2dPosition } from "../@types/Object";
import { ShapeBaseObject } from "../shapes/object";

export type Dimension = {
  width: number;
  height: number;
};

export interface ICanvasObject extends ShapeBaseObject {
  draw(ctx: CanvasRenderingContext2D): void;
  contains(position: I2dPosition): boolean;
  setCoords(): void;
  get boundingBox(): {
    topLeft: I2dPosition;
    topRight: I2dPosition;
    bottomLeft: I2dPosition;
    bottomRight: I2dPosition;
  };

  get left(): number;
  get right(): number;
  get top(): number;
  get topLeft(): I2dPosition;
  get topRight(): I2dPosition;
  get bottom(): number;
  get bottomLeft(): I2dPosition;
  get bottomRight(): I2dPosition;

  get centerPoint(): {
    top: number;
    left: number;
  };

  toObject(): any;
}

export class CanvasManager {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number = 0;
  height: number = 0;
  private _objects: ICanvasObject[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.element = canvas;
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  add<T extends ICanvasObject>(object: T) {
    this._objects.push(object);
  }

  remove(id: string) {
    this._objects = this._objects.filter((object) => object.id !== id);
  }

  getObjects() {
    return this._objects;
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  render() {
    // Need to clear in every call render
    this.clear();

    for (const object of this._objects) {
      object.draw(this.context);
    }
  }

  setDimension(dimension: Dimension) {
    const { width, height } = dimension;
    this.element.width = width;
    this.element.height = height;
    this.width = width;
    this.height = height;
  }
}
