import { describe, it } from 'vitest';
import { BigSoundSensorElement } from './big-sound-sensor-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('BigSoundSensorElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new BigSoundSensorElement());
    await savePng('wokwi-big-sound-sensor', pngData);
  });
});
