import { ObjectPositioDimension } from "../../@types/Object";
import { Circle } from "../circle";

const BASE_PARAM = {
  x: 10,
  y: 12,
  radius: 100,
  id: "BASE_PARAM",
};

function createCircle(
  data?: ObjectPositioDimension & { id: string; radius: number }
) {
  return new Circle(data ?? BASE_PARAM);
}

describe("Circle", () => {
  const baseCircle = createCircle();
  const baseCircleObject = baseCircle.toObject();

  it("it should be defined class ", () => {
    const circle = createCircle();
    expect(circle).toBeDefined();
  });

  describe("set", () => {
    it("it should set new radius value", () => {
      const circle = createCircle();
      const newRadius = 90;
      circle.set({ radius: newRadius });
      expect(circle.toObject().radius).toEqual(newRadius);
    });
    it("it should set new fill value", () => {
      const circle = createCircle();
      const newFill = "#0a4872";
      circle.set({ fill: newFill });
      expect(circle.toObject().fill).toEqual(newFill);
    });

    it("it should set scale attribute", () => {
      const circle = createCircle();
      const scale = {
        scaleX: 1,
        scaleY: 1.5,
      };

      circle.set(scale);
      expect(circle.toObject().scale).toEqual(scale);
    });

    it("it should set border attribute", () => {
      const circle = createCircle();

      const option = {
        borderColor: "red",
        borderWidth: 3,
      };
      circle.set(option);

      expect(circle.border).toEqual(option);
    });
  });

  describe("contains", () => {
    it("it should return true when circle contains point(10,10)", () => {
      expect(baseCircle.contains({ x: 10, y: 10 })).toBeTruthy();
    });
    it("it should return true when circle contains point(10,12)", () => {
      expect(baseCircle.contains({ x: 10, y: 12 })).toBeTruthy();
    });
    it("it should return false when circle does not contain point(10,13)", () => {
      expect(baseCircle.contains({ x: 10, y: 13 })).toBeTruthy();
    });

    it("it should return false when circle does not contain point(20,20)", () => {
      expect(baseCircle.contains({ x: 20, y: 20 })).toBeTruthy();
    });
  });

  describe("centerPoint function", () => {
    it("it should return center position", () => {
      expect(baseCircle.centerPoint.top).toEqual(BASE_PARAM.y);
      expect(baseCircle.centerPoint.left).toEqual(BASE_PARAM.x);
    });
  });

  describe("toObject ", () => {
    it("it should contain border attribute", () => {
      const cicle = createCircle();

      expect(cicle.border).toEqual({
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
      });
    });

    it("it should contain position object", () => {
      expect(baseCircle.x).toEqual(BASE_PARAM.x);
      expect(baseCircle.y).toEqual(BASE_PARAM.y);
    });

    it("it should contain radius value", () => {
      expect(baseCircle.toObject().radius).toEqual(BASE_PARAM.radius);
    });

    it("it should contain top left object position", () => {
      expect(baseCircleObject.boundingBox.topLeft).toEqual({ x: -90, y: 112 });
    });

    it("it should contain top right object position", () => {
      expect(baseCircleObject.boundingBox.topRight).toEqual({ x: 110, y: 112 });
    });

    it("it should contain bottom left object position", () => {
      expect(baseCircleObject.boundingBox.bottomLeft).toEqual({
        x: -90,
        y: 12,
      });
    });
    it("it should contain bottom right object position", () => {
      expect(baseCircleObject.boundingBox.bottomRight).toEqual({
        x: 110,
        y: 12,
      });
    });
  });
});
