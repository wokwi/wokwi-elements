import { describe, it } from 'vitest';
import { LEDRingElement } from './led-ring-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('LEDRingElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new LEDRingElement());
    await savePng('wokwi-led-ring', pngData);
  });
});
