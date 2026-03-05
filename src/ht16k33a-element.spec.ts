import { describe, it } from 'vitest';
import { Ht16k33aElement } from './ht16k33a-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('Ht16k33aElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new Ht16k33aElement());
    await savePng('wokwi-ht16k33a', pngData);
  });
});
