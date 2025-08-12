import { describe, it } from 'vitest';
import { ArduinoMegaElement } from './arduino-mega-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('ArduinoMegaElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new ArduinoMegaElement(), ArduinoMegaElement.styles);
    await savePng('wokwi-arduino-mega', pngData);
  });
});
