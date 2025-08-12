import { describe, it } from 'vitest';
import { Pushbutton6mmElement } from './pushbutton-6mm-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('Pushbutton6mmElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new Pushbutton6mmElement(), Pushbutton6mmElement.styles);
    await savePng('wokwi-pushbutton-6mm', pngData);
  });
});
