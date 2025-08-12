import { describe, it } from 'vitest';
import { NeoPixelElement } from './neopixel-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('NeoPixelElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new NeoPixelElement());
    await savePng('wokwi-neopixel', pngData);
  });
});
