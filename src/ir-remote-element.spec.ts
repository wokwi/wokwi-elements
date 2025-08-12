import { describe, it } from 'vitest';
import { IRRemoteElement } from './ir-remote-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('IRRemoteElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new IRRemoteElement(), IRRemoteElement.styles);
    await savePng('wokwi-ir-remote', pngData);
  });
});
