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

  it("it should be defined class ", () => {
    const circle = createCircle();
    expect(circle).toBeDefined();
  });

  describe("set", () => {
    it("it should set new fill value", () => {
      const rect = createCircle();
      const newFill = "#0a4872";
      rect.set({ fill: newFill });
      expect(rect.toObject().fill).toEqual(newFill);
    });

    it("it should set scale attribute", () => {
      const rect = createCircle();
      const scale = {
        scaleX: 1,
        scaleY: 1.5,
      };

      rect.set(scale);
      expect(rect.toObject().scale).toEqual(scale);
    });

    it("it should set border attribute", () => {
      const rect = createCircle();

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
      const rect = createCircle();

      expect(rect.border).toEqual({
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
      });
    });

    it("it should contain position object", () => {
      expect(baseCircle.x).toEqual(BASE_PARAM.x);
      expect(baseCircle.y).toEqual(BASE_PARAM.y);
    });

    it("it should contain radius value", () => {
      expect(baseCircle.radius).toEqual(BASE_PARAM.radius);
    });

    it.todo("it should contain top left object position");
    it.todo("it should contain top right object position");
    it.todo("it should contain bottom left object position");
    it.todo("it should contain bottom right object position");
  });
});
