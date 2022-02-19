import { colorNameToHex } from "./color-name-to-hex";
import { convertHexToRGBA } from "./hex-to-rgba";

export function getColor(color: string, opacity = 1) {
  return color.startsWith("#")
    ? convertHexToRGBA(color, opacity)
    : convertHexToRGBA(colorNameToHex(color), opacity);
}
