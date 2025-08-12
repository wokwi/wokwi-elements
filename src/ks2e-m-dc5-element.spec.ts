import { describe, it } from 'vitest';
import { KS2EMDC5Element } from './ks2e-m-dc5-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('KS2EMDC5Element', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new KS2EMDC5Element());
    await savePng('wokwi-ks2e-m-dc5', pngData);
  });
});
