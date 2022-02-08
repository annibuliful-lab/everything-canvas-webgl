import { ObjectPositioDimension } from "../../@types/Object";
import { ShapeBaseObject } from "../object";

const BASE_PARAM = {
  x: 10,
  y: 12,
  width: 120,
  height: 311,
  id: "BASE_PARAM",
};

function createShapeObject(data?: ObjectPositioDimension & { id: string }) {
  return new ShapeBaseObject(data ?? BASE_PARAM);
}

describe("ShapeBaseObject", () => {
  const baseShapeObject = createShapeObject();
  const baseRectObject = baseShapeObject.toObject();

  it("it should create Rectangle class", () => {
    expect(baseShapeObject).toBeDefined();
  });
  describe("bounding position", () => {
    it("it should return correct top left position", () => {
      expect(baseShapeObject.topLeft).toEqual({ x: 10, y: 12 });
    });

    it("it should return correct top right position", () => {
      expect(baseShapeObject.topRight).toEqual({ x: 130, y: 12 });
    });

    it("it should return correct bottom left position", () => {
      expect(baseShapeObject.bottomLeft).toEqual({ x: 10, y: 323 });
    });
    it("it should return correct bottom right position", () => {
      expect(baseShapeObject.bottomRight).toEqual({ x: 130, y: 323 });
    });
  });

  describe("set", () => {
    it("it should set new fill value", () => {
      const rect = createShapeObject();
      const newFill = "#0a4872";
      rect.set({ fill: newFill });
      expect(rect.toObject().fill).toEqual(newFill);
    });

    it("it should set scale attribute", () => {
      const rect = createShapeObject();
      const scale = {
        scaleX: 1,
        scaleY: 1.5,
      };

      rect.set(scale);
      expect(rect.toObject().scale).toEqual(scale);
    });

    it("it should set border attribute", () => {
      const rect = createShapeObject();

      const option = {
        borderColor: "red",
        borderWidth: 3,
      };
      rect.set(option);

      expect(rect.border).toEqual(option);
    });
  });

  describe("toObject ", () => {
    it("it should contain border attribute", () => {
      const rect = createShapeObject();

      expect(rect.border).toEqual({
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
      });
    });

    it("it should contain position object", () => {
      expect(baseRectObject.x).toEqual(BASE_PARAM.x);
      expect(baseRectObject.y).toEqual(BASE_PARAM.y);
    });

    it("it should contain dimension object", () => {
      expect(baseRectObject.widht).toEqual(BASE_PARAM.width);
      expect(baseRectObject.height).toEqual(BASE_PARAM.height);
    });
  });
});
