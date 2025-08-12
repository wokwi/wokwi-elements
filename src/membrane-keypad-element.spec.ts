import { describe, it } from 'vitest';
import { MembraneKeypadElement } from './membrane-keypad-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('MembraneKeypadElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new MembraneKeypadElement(), MembraneKeypadElement.styles);
    await savePng('wokwi-membrane-keypad', pngData);
  });
});
