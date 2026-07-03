import { getLuminance } from './imageProcessor';

export type AsciiRampName = 'simple' | 'standard' | 'detailed';

export const ASCII_RAMPS: Record<AsciiRampName, string> = {
  simple: ' .:-=+*#%@',
  standard: ' .\'`^",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$',
  detailed: ' .`^"\':;,-_~+=>!l|?\\/()[]{}1tI7iCcfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$@'
};

export interface AsciiConvertOptions {
  rampName: AsciiRampName;
  customRamp?: string;
  colored?: boolean;
}

/**
 * Converts pre-adjusted ImageData into a string representation of ASCII art.
 * Returns either plain text or HTML formatted colored text.
 */
export function convertToAscii(
  imageData: ImageData,
  options: AsciiConvertOptions
): string {
  const { rampName, customRamp, colored } = options;
  const ramp = customRamp || ASCII_RAMPS[rampName] || ASCII_RAMPS.standard;
  const { width, height, data } = imageData;
  const rampLength = ramp.length;

  let result = '';

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const offset = (y * width + x) * 4;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      const a = data[offset + 3];

      // If pixel is fully transparent, render space
      if (a === 0) {
        result += ' ';
        continue;
      }

      const luminance = getLuminance(r, g, b);
      // Map 0..255 luminance to index in the character ramp
      // Luminance = 0 -> dark -> right side of ramp (e.g. '@')
      // Luminance = 255 -> light -> left side of ramp (e.g. ' ')
      // We divide by 255.01 to ensure the index fits inside [0, rampLength - 1]
      const charIndex = Math.floor((luminance / 255.01) * rampLength);
      const char = ramp[charIndex] || ' ';

      if (colored) {
        // Build colored text in span blocks for HTML rendering
        result += `<span style="color: rgb(${r},${g},${b})">${escapeHtml(char)}</span>`;
      } else {
        result += char;
      }
    }
    result += '\n';
  }

  return result;
}

/**
 * Helper function to escape HTML entities
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
