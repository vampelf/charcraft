import { getLuminance } from './imageProcessor';

export interface BrailleConvertOptions {
  threshold?: number; // 0..255, default 127
  colored?: boolean;
}

/**
 * Converts pre-adjusted ImageData into a string representation of Unicode Braille art.
 * Images are processed in 2x4 pixel blocks, where each block corresponds to one Braille character.
 */
export function convertToBraille(
  imageData: ImageData,
  options: BrailleConvertOptions = {}
): string {
  const { threshold = 127, colored = false } = options;
  const { width, height, data } = imageData;

  let result = '';

  // Braille character maps to a 2x4 grid of dots
  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 2) {
      let byte = 0;
      let rSum = 0;
      let gSum = 0;
      let bSum = 0;
      let pixelCount = 0;

      // Bit configurations for the 2x4 Braille grid:
      // Col 0: Dot 1 (0x01), Dot 2 (0x02), Dot 3 (0x04), Dot 7 (0x40)
      // Col 1: Dot 4 (0x08), Dot 5 (0x10), Dot 6 (0x20), Dot 8 (0x80)
      const grid = [
        { dx: 0, dy: 0, bit: 0x01 }, // Dot 1
        { dx: 0, dy: 1, bit: 0x02 }, // Dot 2
        { dx: 0, dy: 2, bit: 0x04 }, // Dot 3
        { dx: 1, dy: 0, bit: 0x08 }, // Dot 4
        { dx: 1, dy: 1, bit: 0x10 }, // Dot 5
        { dx: 1, dy: 2, bit: 0x20 }, // Dot 6
        { dx: 0, dy: 3, bit: 0x40 }, // Dot 7
        { dx: 1, dy: 3, bit: 0x80 }  // Dot 8
      ];

      for (const dot of grid) {
        const px = x + dot.dx;
        const py = y + dot.dy;

        // If coordinates exceed image bounds, treat as off-canvas / inactive
        if (px >= width || py >= height) continue;

        pixelCount++;
        const offset = (py * width + px) * 4;
        const r = data[offset];
        const g = data[offset + 1];
        const b = data[offset + 2];
        const a = data[offset + 3];

        rSum += r;
        gSum += g;
        bSum += b;

        // A pixel is "active" (drawn dot) if it is opaque and its luminance is below threshold (dark).
        if (a > 0) {
          const luminance = getLuminance(r, g, b);
          if (luminance < threshold) {
            byte |= dot.bit;
          }
        }
      }

      // Unicode Braille Patterns starts at codepoint 0x2800
      const char = String.fromCharCode(0x2800 + byte);

      if (colored && pixelCount > 0) {
        const avgR = Math.round(rSum / pixelCount);
        const avgG = Math.round(gSum / pixelCount);
        const avgB = Math.round(bSum / pixelCount);
        result += `<span style="color: rgb(${avgR},${avgG},${avgB})">${char}</span>`;
      } else {
        result += char;
      }
    }
    result += '\n';
  }

  return result;
}
