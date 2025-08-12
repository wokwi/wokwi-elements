import { describe, it } from 'vitest';
import { PushbuttonElement } from './pushbutton-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('PushbuttonElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new PushbuttonElement(), PushbuttonElement.styles);
    await savePng('wokwi-pushbutton', pngData);
  });
});
