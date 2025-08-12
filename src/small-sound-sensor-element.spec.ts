import { describe, it } from 'vitest';
import { SmallSoundSensorElement } from './small-sound-sensor-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('SmallSoundSensorElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new SmallSoundSensorElement());
    await savePng('wokwi-small-sound-sensor', pngData);
  });
});
