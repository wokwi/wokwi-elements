import { describe, it } from 'vitest';
import { GasSensorElement } from './gas-sensor-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('GasSensorElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new GasSensorElement());
    await savePng('wokwi-gas-sensor', pngData);
  });
});
