import { describe, it } from 'vitest';
import { BuzzerElement } from './buzzer-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('BuzzerElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new BuzzerElement(), BuzzerElement.styles);
    await savePng('wokwi-buzzer', pngData);
  });
});
