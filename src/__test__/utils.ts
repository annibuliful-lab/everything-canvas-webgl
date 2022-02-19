export function createCanvas() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  return { canvas, ctx };
}
