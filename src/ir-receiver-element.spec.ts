import { describe, it } from 'vitest';
import { IRReceiverElement } from './ir-receiver-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('IRReceiverElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new IRReceiverElement());
    await savePng('wokwi-ir-receiver', pngData);
  });
});
