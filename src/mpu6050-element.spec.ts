import { describe, it } from 'vitest';
import { MPU6050Element } from './mpu6050-element';
import { renderToPng, savePng } from './utils/test-utils';

describe('MPU6050Element', () => {
  it('should render to svg', async () => {
    const pngData = await renderToPng(new MPU6050Element());
    await savePng('wokwi-mpu6050', pngData);
  });
});
