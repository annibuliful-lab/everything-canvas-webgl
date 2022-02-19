import { CanvasManager } from "../../core/canvas/canvas-manager";
import "jest-canvas-mock";
import { createCircle, createRect } from "../../core/utils/testing";

describe("CanvasManager class", () => {
  let canvasManager: CanvasManager;
  beforeEach(() => {
    const canvas = document.createElement("canvas");
    canvasManager = new CanvasManager(canvas);
  });

  it("it should be defined", () => {
    const canvas = document.createElement("canvas");
    expect(new CanvasManager(canvas)).toBeTruthy();
  });

  describe("add function", () => {
    it("it should add rectangle", () => {
      const rect = createRect();
      canvasManager.add(rect);
      expect(
        canvasManager.getObjects().map((o) => o.toObject())
      ).toMatchSnapshot();
    });

    it("it should add circle", () => {
      const circle = createCircle();
      canvasManager.add(circle);
      expect(
        canvasManager.getObjects().map((o) => o.toObject())
      ).toMatchSnapshot();
    });

    it("it should add multiple objects", () => {
      const rect = createRect();
      const circle = createCircle();

      canvasManager.add(rect);
      canvasManager.add(circle);
      expect(
        canvasManager.getObjects().map((o) => o.toObject())
      ).toMatchSnapshot();
    });
  });
});
