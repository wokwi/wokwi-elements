import { describe, it } from 'vitest';
import { SSD1306Element } from './ssd1306-element';
import { renderToPng, savePng } from './utils/test-utils';

class MockImageData {
  colorSpace = 'srgb' as const;
  width: number;
  height: number;
  data: Uint8ClampedArray;

  constructor(data: Uint8ClampedArray | number, width: number, height: number = 0) {
    if (typeof data === 'number') {
      this.width = data;
      this.height = width;
      this.data = new Uint8ClampedArray(this.width * height * 4);
    } else {
      this.width = width;
      this.height = height;
      this.data = data;
    }
  }
}

describe('SSD1306Element', () => {
  it('should render to svg', async () => {
    global.ImageData = MockImageData as typeof ImageData;

    const pngData = await renderToPng(new SSD1306Element(), SSD1306Element.styles);
    await savePng('wokwi-ssd1306', pngData);
  });
});
