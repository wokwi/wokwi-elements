import { describe, it } from 'vitest';
import { DipSwitch8Element } from './dip-switch-8-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('DipSwitch8Element', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new DipSwitch8Element());
    await savePng('wokwi-dip-switch-8', pngData);
  });
});
