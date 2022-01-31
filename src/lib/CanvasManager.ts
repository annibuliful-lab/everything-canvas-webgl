import { Arc } from '../models';

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
    this.context2d = canvas.getContext('2d');
    const webgl = canvas.getContext('webgl');
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

  drawCircle(circle: Arc) {
    this.context2d.beginPath();

    this.context2d.arc(
      circle.x,
      circle.y,
      circle.radius,
      circle.startAngle,
      circle.endAngle,
      false
    );
    this.context2d.closePath();

    this.context2d.fillStyle = '#FFCC00';
    this.context2d.fill();

    this.context2d.lineWidth = 10;
    this.context2d.strokeStyle = '#DCB001';
    this.context2d.stroke();
  }

  randomSpawnCircle() {
    const randomCircle: Arc = {
      x: Math.floor(Math.random() * this.width),
      y: Math.floor(Math.random() * this.height),
      radius: Math.floor(Math.random() * 100),
      startAngle: 0,
      endAngle: 2 * Math.PI,
    };
    this.drawCircle(randomCircle);
  }
}
