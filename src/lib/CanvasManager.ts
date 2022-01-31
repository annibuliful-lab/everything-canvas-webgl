export type Dimension = {
  width: number;
  height: number;
};

export class CanvasManager {
  private element: HTMLCanvasElement;
  private context2d: CanvasRenderingContext2D;
  private webglContext: WebGLRenderingContext;
  private width: number;
  private height: number;

  constructor(canvas: HTMLCanvasElement) {
    this.element = canvas;
    this.context2d = canvas.getContext("2d");
    const webgl = canvas.getContext("webgl");
    if (webgl) {
      this.webglContext = webgl;
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
