import { describe, it } from 'vitest';
import { ArduinoNanoElement } from './arduino-nano-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('ArduinoNanoElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new ArduinoNanoElement(), ArduinoNanoElement.styles);
    await savePng('wokwi-arduino-nano', pngData);
  });
});
