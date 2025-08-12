import { describe, it } from 'vitest';
import { NTCTemperatureSensorElement } from './ntc-temperature-sensor-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('NTCTemperatureSensorElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new NTCTemperatureSensorElement());
    await savePng('wokwi-ntc-temperature-sensor', pngData);
  });
});
