import { describe, it } from 'vitest';
import { ILI9341Element } from './ili9341-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('ILI9341Element', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new ILI9341Element(), ILI9341Element.styles);
    await savePng('wokwi-ili9341', pngData);
  });
});
