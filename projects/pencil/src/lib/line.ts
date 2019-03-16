export class Line {

  // Bresenham's Line Drawing Algorithm
  // https://rosettacode.org/wiki/Bitmap/Bresenham%27s_line_algorithm#JavaScript
  public static draw(point0: { x: number, y: number }, point1: { x: number, y: number }, pixel: (x, y) => void): void {
    let x0 = Math.trunc(point0.x);
    let y0 = Math.trunc(point0.y);
    const x1 = Math.trunc(point1.x);
    const y1 = Math.trunc(point1.y);

    const dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    const dy = Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    let err = (dx > dy ? dx : -dy) / 2;

    while (true) {
      pixel(x0, y0);
      if (x0 === x1 && y0 === y1) {
        break;
      }
      const e2 = err;
      if (e2 > -dx) {
        err -= dy;
        x0 += sx;
      }
      if (e2 < dy) {
        err += dx;
        y0 += sy;
      }
    }
  }

}
