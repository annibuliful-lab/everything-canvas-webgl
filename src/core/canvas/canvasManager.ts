import { ShapeBaseObject } from "../shapes/object";

export type Dimension = {
  width: number;
  height: number;
};

export class CanvasManager {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number = 0;
  height: number = 0;
  private _objects: ShapeBaseObject[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.element = canvas;
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  add<T extends ShapeBaseObject>(object: T) {
    this._objects.push(object);
  }

  remove(id: string) {
    this._objects = this._objects.filter((object) => object.id !== id);
  }

  getObjects() {
    return this._objects;
  }

  render() {
    // Need to clear in every call render
    this.context.clearRect(0, 0, this.width, this.height);

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