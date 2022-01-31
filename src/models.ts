export type Position = {
  xPos: number;
  yPos: number;
};

export type Arc = {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  counterclockwise?: boolean;
};
