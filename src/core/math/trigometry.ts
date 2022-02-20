import { I2dPosition } from "../@types/Object";

export function angleToRadian(angle: number) {
  return (angle * Math.PI) / 180;
}

export function radianToAngle(radian: number) {
  return (radian * 180) / Math.PI;
}

export function angleBetweenTwoPoints(
  pointA: I2dPosition,
  pointB: I2dPosition
) {
  const diffX = pointA.x - pointB.x;
  const diffY = pointA.y - pointB.y;
  const radians = Math.atan2(diffY, diffX);
  const result = radianToAngle(radians);

  return result < 0 ? 360 + result : result;
}

type CalculateRotatePointParam = {
  origin: I2dPosition;
  point: I2dPosition;
  angle: number;
};
// https://stackoverflow.com/questions/34372480/rotate-point-about-another-point-in-degrees-python
export function calculateRotatePoint({
  origin,
  point,
  angle,
}: CalculateRotatePointParam) {
  const degree = angleToRadian(angle);

  const { x: ox, y: oy } = origin;
  const { x: px, y: py } = point;

  const newX = ox + Math.cos(degree) * (px - ox) - Math.sin(degree) * (py - oy);
  const newY = oy + Math.sin(degree) * (px - ox) + Math.cos(degree) * (py - oy);

  return {
    x: newX,
    y: newY,
  };
}

type GetBoundingBoxByRotateParam = Omit<CalculateRotatePointParam, "point"> & {
  points: [I2dPosition, I2dPosition, I2dPosition, I2dPosition];
};

export function getBoundingBoxByRotate({
  origin,
  points,
  angle,
}: GetBoundingBoxByRotateParam) {
  const rotatedPoints = points.map((point) =>
    calculateRotatePoint({ origin, angle, point })
  );
  const rotatedPointX = rotatedPoints.map((point) => point.x);
  const rotatedPointY = rotatedPoints.map((point) => point.y);
  const minX = Math.min(...rotatedPointX);
  const minY = Math.min(...rotatedPointY);
  const maxX = Math.max(...rotatedPointX);
  const maxY = Math.max(...rotatedPointY);

  return {
    topLeft: {
      x: minX,
      y: minY,
    },
    topRight: {
      x: maxX,
      y: minY,
    },
    bottomLeft: {
      x: minX,
      y: maxY,
    },
    bottomRight: {
      x: maxX,
      y: maxY,
    },
  };
}
