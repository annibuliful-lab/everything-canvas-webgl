export type Dimension = {
  width: number;
  height: number;
};

export class CanvasManager {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number;
  height: number;

  constructor(canvas: HTMLCanvasElement) {
    this.element = canvas;
    this.context = canvas.getContext("2d");
  }

  setDimension(dimension: Dimension) {
    const { width, height } = dimension;
    this.element.width = width;
    this.element.height = height;
    this.width = width;
    this.height = height;
  }
}
