import { describe, it } from 'vitest';
import { PotentiometerElement } from './potentiometer-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('PotentiometerElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new PotentiometerElement(), PotentiometerElement.styles);
    await savePng('wokwi-potentiometer', pngData);
  });
});
