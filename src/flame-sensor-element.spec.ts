import { describe, it } from 'vitest';
import { FlameSensorElement } from './flame-sensor-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('FlameSensorElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new FlameSensorElement());
    await savePng('wokwi-flame-sensor', pngData);
  });
});
