import { Rectangle } from "./core/shapes/rectangle";
import { CanvasManager, Dimension } from "./core/canvas/canvasManager";
import { Circle } from "./core/shapes/circle";
window.onload = () => {
  const canvas = document.getElementById(
    "canvas-playground"
  ) as HTMLCanvasElement;

  if (!canvas) {
    alert("Canvas Element not found");
  }

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const canvasDimension: Dimension = {
    width: windowWidth,
    height: windowHeight,
  };
  const canvasManager = new CanvasManager(canvas);
  canvasManager.setDimension(canvasDimension);
  function draw() {
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

    setTimeout(() => {
      canvasManager.remove(rect1.id);
      circle.set({
        radius: 50,
        fill: "green",
        borderColor: "yellow",
        borderWidth: 10,
        x: 100,
        y: 100,
      });
      canvasManager.render();
    }, 3000);

    setTimeout(() => {
      rect2.set({ x: 150, y: 150 });
      canvasManager.render();
    }, 5000);

    setTimeout(() => {
      rect2.set({ angle: 45 });
      canvasManager.render();
    }, 6000);
  }

  draw();

  // resize canvas

  window.onresize = () => {
    canvasManager.setDimension(canvasDimension);
    draw();
  };
};
