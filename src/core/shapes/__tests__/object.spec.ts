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
  describe("set", () => {
    it("it should set new fill value", () => {
      const rect = createShapeObject();
      const newFill = "#0a4872";
      rect.set({ fill: newFill });
      expect(rect.fill).toEqual(newFill);
    });

    it("it should set scale attribute", () => {
      const rect = createShapeObject();
      const scale = {
        scaleX: 1,
        scaleY: 1.5,
      };

      rect.set(scale);
      expect(rect.scale).toEqual(scale);
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
  });
});
