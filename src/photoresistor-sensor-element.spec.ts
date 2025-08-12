import { describe, it } from 'vitest';
import { PhotoresistorSensorElement } from './photoresistor-sensor-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('PhotoresistorSensorElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new PhotoresistorSensorElement());
    await savePng('wokwi-photoresistor-sensor', pngData);
  });
});
