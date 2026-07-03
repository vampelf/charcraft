/**
 * Utility for loading and preprocessing images using the HTML Canvas API.
 */

export interface ProcessOptions {
  width: number;
  height: number;
  brightness: number; // -100 to 100
  contrast: number;   // -100 to 100
  invert: boolean;
}

/**
 * Loads an image from a file object.
 */
export function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      if (event.target?.result) {
        img.src = event.target.result as string;
      } else {
        reject(new Error('Failed to read file.'));
      }
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

/**
 * Resizes the image and retrieves the ImageData with brightness, contrast, and inversion settings applied.
 */
export function getAdjustedImageData(
  image: HTMLImageElement,
  options: ProcessOptions
): ImageData {
  const { width, height, brightness, contrast, invert } = options;

  // Create offscreen canvas for rendering
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Could not get 2D context from canvas.');
  }

  // Draw scaled image to canvas
  ctx.drawImage(image, 0, 0, width, height);

  // Retrieve pixel data
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  // Calculate contrast factor
  // Contrast slider range: -100 to 100
  // Convert to factor: factor = (259 * (C + 255)) / (255 * (259 - C))
  // Where C is from -255 to 255. Let's scale contrast from -100..100 to -128..128.
  const scaledContrast = (contrast / 100) * 128;
  const factor = (259 * (scaledContrast + 255)) / (255 * (259 - scaledContrast));

  // Convert brightness from -100..100 to -128..128
  const scaledBrightness = (brightness / 100) * 128;

  // Apply adjustments pixel by pixel
  for (let i = 0; i < data.length; i += 4) {
    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];

    // 1. Contrast Adjustment
    r = factor * (r - 128) + 128;
    g = factor * (g - 128) + 128;
    b = factor * (b - 128) + 128;

    // 2. Brightness Adjustment
    r += scaledBrightness;
    g += scaledBrightness;
    b += scaledBrightness;

    // Clamp values to [0, 255]
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    // 3. Optional Inversion
    if (invert) {
      r = 255 - r;
      g = 255 - g;
      b = 255 - b;
    }

    data[i] = r;
    data[i + 1] = g;
    data[i + 2] = b;
    // Keep alpha as is, though standard conversion processes solid image colors
  }

  return imageData;
}

/**
 * Calculates luminance for a pixel using NTSC standard weights.
 * Returns a value between 0 (black) and 255 (white).
 */
export function getLuminance(r: number, g: number, b: number): number {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}
