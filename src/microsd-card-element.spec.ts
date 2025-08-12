import { describe, it } from 'vitest';
import { MicrosdCardElement } from './microsd-card-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('MicrosdCardElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new MicrosdCardElement());
    await savePng('wokwi-microsd-card', pngData);
  });
});
