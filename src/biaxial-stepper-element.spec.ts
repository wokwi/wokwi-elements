import { describe, it } from 'vitest';
import { BiaxialStepperElement } from './biaxial-stepper-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('BiaxialStepperElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new BiaxialStepperElement());
    await savePng('wokwi-biaxial-stepper', pngData);
  });
});
