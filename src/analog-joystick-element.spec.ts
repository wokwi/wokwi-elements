import { describe, it } from 'vitest';
import { AnalogJoystickElement } from './analog-joystick-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('AnalogJoystickElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new AnalogJoystickElement(), AnalogJoystickElement.styles);
    await savePng('wokwi-analog-joystick', pngData);
  });
});
