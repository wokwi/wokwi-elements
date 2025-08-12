import { describe, it } from 'vitest';
import { Ds1307Element } from './ds1307-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('Ds1307Element', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new Ds1307Element());
    await savePng('wokwi-ds1307', pngData);
  });
});
