import { CanvasManager, Dimension } from "./lib/CanvasManager";
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

  // resize canvas

  window.onresize = () => {
    canvasManager.setDimension(canvasDimension);
  };
};
