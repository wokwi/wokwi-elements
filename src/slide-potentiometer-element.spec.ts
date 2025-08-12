import { describe, it } from 'vitest';
import { SlidePotentiometerElement } from './slide-potentiometer-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('SlidePotentiometerElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(
      new SlidePotentiometerElement(),
      SlidePotentiometerElement.styles,
    );
    await savePng('wokwi-slide-potentiometer', pngData);
  });
});
