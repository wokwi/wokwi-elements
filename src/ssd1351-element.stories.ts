import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit';
import './ssd1351-element';

// export default {
//   title: 'SSD1351',
//   component: 'wokwi-ssd1351',
//   argTypes: {
//     value: { control: { type: 'number', min: 1, max: 10, step: 1 } },
//   },
//   args: {
//     value: 5,
//   },
// };

function toImageData(bitmap: Uint8Array, width: number, height: number) {
  const result = new ImageData(width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixIndex = Math.floor(y * width + x);

      const pixOffset = (y * width + x) * 4;

      // result.data[pixOffset + 0] = testScreen[pixIndex] << 16 && 256;
      // result.data[pixOffset + 1] = testScreen[pixIndex] << 8 && 256;
      // result.data[pixOffset + 2] = (testScreen[pixIndex] / 256) % 256;
      // result.data[pixOffset + 3] = 0xffffff;
      result.data[pixOffset + 0] = ((x % 128) / 128) * 255;
      result.data[pixOffset + 1] = ((y % 128) / 128) * 255;
      result.data[pixOffset + 2] = 255 - ((x % 128) / 128) * 255;
      result.data[pixOffset + 3] = 255;
    }
  }
  return result;
}

function testScreen(width: number, height: number) {
  const result = new ImageData(width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixOffset = (y * width + x) * 4;

      const xC = ((x % 128) / 128) * 255;

      result.data[pixOffset + 0] = xC;
      result.data[pixOffset + 1] = ((y % 128) / 128) * 255;
      result.data[pixOffset + 2] = 255 - xC;
      result.data[pixOffset + 3] = 255;
    }
  }
  return result;
}

storiesOf('SSD1351', module)
  .addParameters({ component: 'wokwi-ssd1351' })
  .addDecorator(withKnobs)
  .add('Default', () => html`<wokwi-ssd1351></wokwi-ssd1351>`)
  .add(
    'Test Screen',
    () => html`<wokwi-ssd1351 .imageData=${testScreen(128, 128)}></wokwi-ssd1351>`
  );
