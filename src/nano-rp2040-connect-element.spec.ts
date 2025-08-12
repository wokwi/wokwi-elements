import { describe, it } from 'vitest';
import { NanoRP2040ConnectElement } from './nano-rp2040-connect-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('NanoRP2040ConnectElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new NanoRP2040ConnectElement());
    await savePng('wokwi-nano-rp2040-connect', pngData);
  });
});
