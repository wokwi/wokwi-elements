import { describe, it } from 'vitest';
import { FranzininhoElement } from './franzininho-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('FranzininhoElement', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new FranzininhoElement(), FranzininhoElement.styles);
    await savePng('wokwi-franzininho', pngData);
  });
});
