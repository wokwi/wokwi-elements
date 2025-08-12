import { describe, it } from 'vitest';
import { RGBLedElement } from './rgb-led-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('RGBLedElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new RGBLedElement());
    await savePng('wokwi-rgb-led', pngData);
  });
});
