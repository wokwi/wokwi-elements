import { describe, it } from 'vitest';
import { TiltSwitchElement } from './tilt-switch-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('TiltSwitchElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new TiltSwitchElement());
    await savePng('wokwi-tilt-switch', pngData);
  });
});
