import { describe, it } from 'vitest';
import { PIRMotionSensorElement } from './pir-motion-sensor-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('PIRMotionSensorElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new PIRMotionSensorElement());
    await savePng('wokwi-pir-motion-sensor', pngData);
  });
});
