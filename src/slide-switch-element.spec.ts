import { describe, it } from 'vitest';
import { SlideSwitchElement } from './slide-switch-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('SlideSwitchElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new SlideSwitchElement(), SlideSwitchElement.styles);
    await savePng('wokwi-slide-switch', pngData);
  });
});
