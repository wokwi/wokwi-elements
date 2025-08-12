import { describe, it } from 'vitest';
import { StepperMotorElement } from './stepper-motor-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('StepperMotorElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new StepperMotorElement());
    await savePng('wokwi-stepper-motor', pngData);
  });
});
