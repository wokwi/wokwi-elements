import { describe, it } from 'vitest';
import { HX711Element } from './hx711-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('HX711Element', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new HX711Element(), HX711Element.styles);
    await savePng('wokwi-hx711', pngData);
  });
});
