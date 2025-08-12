import { describe, it } from 'vitest';
import { HCSR04Element } from './hc-sr04-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('HCSR04Element', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new HCSR04Element());
    await savePng('wokwi-hc-sr04', pngData);
  });
});
