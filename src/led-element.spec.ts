import { describe, it } from 'vitest';
import { LEDElement } from './led-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('LEDElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new LEDElement(), LEDElement.styles);
    await savePng('wokwi-led', pngData);
  });
});
