import { describe, it } from 'vitest';
import { LedBarGraphElement } from './led-bar-graph-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('LedBarGraphElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new LedBarGraphElement());
    await savePng('wokwi-led-bar-graph', pngData);
  });
});
