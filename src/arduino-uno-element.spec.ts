import { describe, it } from 'vitest';
import { ArduinoUnoElement } from './arduino-uno-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('ArduinoUnoElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new ArduinoUnoElement(), ArduinoUnoElement.styles);
    await savePng('wokwi-arduino-uno', pngData);
  });
});
