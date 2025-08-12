import { describe, it } from 'vitest';
import { ResistorElement } from './resistor-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('ResistorElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new ResistorElement(), ResistorElement.styles);
    await savePng('wokwi-resistor', pngData);
  });
});
