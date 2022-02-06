import { ObjectPositioDimension } from "../../@types/Object";
import { Rectangle } from "../rectangle";

const BASE_PARAM = {
  x: 10,
  y: 12,
  width: 120,
  height: 311,
  id: "BASE_PARAM",
};

const EXPECT_BOUNDING_BOX = {
  topLeft: { x: BASE_PARAM.x, y: BASE_PARAM.y },
  topRight: { x: 130, y: BASE_PARAM.y },
  bottomLeft: { x: BASE_PARAM.x, y: 323 },
  bottomRight: { x: 130, y: 323 },
};

function createRect(data?: ObjectPositioDimension & { id: string }) {
  return new Rectangle(data ?? BASE_PARAM);
}

describe("Rectangle", () => {
  const baseRect = createRect();
  const baseRectObject = baseRect.toObject();
  const baseBoundingBox = baseRectObject.boundingBox;

  it("it should create Rectangle class", () => {
    expect(baseRect).toBeDefined();
  });
  describe("bounding position", () => {
    it("it should return correct top left position", () => {
      expect(baseRect.topLeft).toEqual({ x: 10, y: 12 });
    });

    it("it should return correct top right position", () => {
      expect(baseRect.topRight).toEqual({ x: 130, y: 12 });
    });

    it("it should return correct bottom left position", () => {
      expect(baseRect.bottomLeft).toEqual({ x: 10, y: 323 });
    });
    it("it should return correct bottom right position", () => {
      expect(baseRect.bottomRight).toEqual({ x: 130, y: 323 });
    });
  });

  describe("set", () => {
    it("it should set new fill value", () => {
      const rect = createRect();
      const newFill = "#0a4872";
      rect.set({ fill: newFill });
      expect(rect.toObject().fill).toEqual(newFill);
    });

    it("it should set scale attribute", () => {
      const rect = createRect();
      const scale = {
        scaleX: 1,
        scaleY: 1.5,
      };

      rect.set(scale);
      expect(rect.toObject().scale).toEqual(scale);
    });

    it("it should set border attribute", () => {
      const rect = createRect();

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
      const rect = createRect();

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

    it("it should contain top left object position", () => {
      expect(baseBoundingBox.topLeft).toEqual(EXPECT_BOUNDING_BOX.topLeft);
    });
    it("it should contain top right object position", () => {
      expect(baseBoundingBox.topRight).toEqual(EXPECT_BOUNDING_BOX.topRight);
    });
    it("it should contain bottom left object position", () => {
      expect(baseBoundingBox.bottomLeft).toEqual(
        EXPECT_BOUNDING_BOX.bottomLeft
      );
    });
    it("it should contain bottom right object position", () => {
      expect(baseBoundingBox.bottomRight).toEqual(
        EXPECT_BOUNDING_BOX.bottomRight
      );
    });
  });

  describe("contains", () => {
    it("it should be true when rectangle contains point(10,30)", () => {
      expect(baseRect.contains({ x: 11, y: 30 })).toBeTruthy();
    });

    it("it should be true when rectangle contains point(60,60)", () => {
      expect(baseRect.contains({ x: 60, y: 60 })).toBeTruthy();
    });

    it("it should be true when rectangle contains point(120,311)", () => {
      expect(baseRect.contains({ y: 311, x: 120 })).toBeTruthy();
    });

    it("it should be true when rectangle contains point(90,130)", () => {
      expect(baseRect.contains({ x: 90, y: 130 })).toBeTruthy();
    });

    it("it should be false when rectangle does not contain point(333,140)", () => {
      expect(baseRect.contains({ x: 333, y: 140 })).toBeFalsy();
    });

    it("it should be false when rectangle does not contain point(5,5)", () => {
      expect(baseRect.contains({ x: 5, y: 5 })).toBeFalsy();
    });

    it("it should be false when rectangle does not contain point(324,12", () => {
      expect(baseRect.contains({ x: 324, y: 12 })).toBeFalsy();
    });
    it("ut should be false when rectangle does not contain point(324,355)", () => {
      expect(baseRect.contains({ x: 324, y: 355 })).toBeFalsy();
    });
  });
});
