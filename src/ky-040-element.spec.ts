import { describe, it } from 'vitest';
import { KY040Element } from './ky-040-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('KY040Element', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new KY040Element(), KY040Element.styles);
    await savePng('wokwi-ky-040', pngData);
  });
});
