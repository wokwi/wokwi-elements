import { describe, it } from 'vitest';
import { ESP32DevkitV1Element } from './esp32-devkit-v1-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('ESP32DevkitV1Element', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new ESP32DevkitV1Element());
    await savePng('wokwi-esp32-devkit-v1', pngData);
  });
});
