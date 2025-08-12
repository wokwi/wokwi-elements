import { describe, it } from 'vitest';
import { NeopixelMatrixElement } from './neopixel-matrix-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('NeopixelMatrixElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new NeopixelMatrixElement(), NeopixelMatrixElement.styles);
    await savePng('wokwi-neopixel-matrix', pngData);
  });
});
