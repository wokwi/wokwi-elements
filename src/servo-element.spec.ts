import { describe, it } from 'vitest';
import { ServoElement } from './servo-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('ServoElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new ServoElement());
    await savePng('wokwi-servo', pngData);
  });
});
