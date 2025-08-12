import { describe, it } from 'vitest';
import { DHT22Element } from './dht22-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('DHT22Element', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new DHT22Element());
    await savePng('wokwi-dht22', pngData);
  });
});
