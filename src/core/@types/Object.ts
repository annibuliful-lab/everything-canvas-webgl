export interface I2dPosition {
  x: number;
  y: number;
}

export interface I3dPosition extends I2dPosition {
  y: number;
  w?: number;
}

export interface I2dDimension {
  width: number;
  height: number;
}

export interface I3dDimension extends I2dDimension {
  depth: number;
}

export type ObjectPositioDimension = I2dPosition & {
  width?: number;
  height?: number;
};

export interface I2dDraw {
  draw(ctx: CanvasRenderingContext2D): void;
}

export interface I2dIntersection {
  contains(position: I2dPosition): boolean;
}

export interface I2dObject<T> {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  borderColor: string;
  borderWidth: number;
  angle: number;
  scaleX: number;
  scaleY: number;
  get left(): number;
  get right(): number;
  get top(): number;
  get bottom(): number;
  get topLeft(): I2dPosition;
  get topRight(): I2dPosition;
  get bottomLeft(): I2dPosition;
  get bottomRight(): I2dPosition;
  draw(ctx: CanvasRenderingContext2D): void;

  set(
    option: Partial<
      Omit<
        T,
        | "draw"
        | "contains"
        | "toObjects"
        | "left"
        | "right"
        | "top"
        | "bottom"
        | "topLeft"
        | "topRight"
        | "bottomLeft"
        | "bottomRight"
        | "setFill"
        | "border"
      >
    >
  ): void;
  toObject(): Object;
}
