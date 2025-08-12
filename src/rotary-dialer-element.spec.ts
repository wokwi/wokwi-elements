import { describe, it } from 'vitest';
import { RotaryDialerElement } from './rotary-dialer-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('RotaryDialerElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new RotaryDialerElement(), RotaryDialerElement.styles);
    await savePng('wokwi-rotary-dialer', pngData);
  });
});
