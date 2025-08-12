import { describe, it } from 'vitest';
import { SevenSegmentElement } from './7segment-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('SevenSegmentElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new SevenSegmentElement(), SevenSegmentElement.styles);
    await savePng('wokwi-7segment', pngData);
  });
});
