import { CanvasManager, Dimension } from "../core/canvas/canvasManager";
import { Circle } from "../core/shapes/circle";
import { Rectangle } from "../core/shapes/rectangle";

describe("draw function", () => {
  let canvas: HTMLCanvasElement, ctx;
  beforeEach(function () {
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
  });

  it("it should render rect", () => {
    const canvasDimension: Dimension = {
      width: 300,
      height: 300,
    };
    const canvasManager = new CanvasManager(canvas);
    canvasManager.setDimension(canvasDimension);

    const rect2 = new Rectangle({
      x: 150,
      y: 30,
      width: 100,
      height: 100,
      id: "Rect2",
    });

    rect2.set({
      fill: "yellow",
      borderColor: "black",
      borderWidth: 3,
      scaleX: 2,
      scaleY: 2,
    });
    const rect1 = new Rectangle({
      x: 30,
      y: 30,
      width: 100,
      height: 100,
      id: "Rect1",
    });
    const circle = new Circle({
      x: 200,
      y: 200,
      id: "Circle1",
      radius: 5,
    });

    canvasManager.add(circle);
    canvasManager.add(rect1);
    canvasManager.add(rect2);
    canvasManager.render();
  });
});
