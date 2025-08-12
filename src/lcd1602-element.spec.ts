import { describe, it } from 'vitest';
import { LCD1602Element } from './lcd1602-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('LCD1602Element', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new LCD1602Element(), LCD1602Element.styles);
    await savePng('wokwi-lcd1602', pngData);
  });
});
