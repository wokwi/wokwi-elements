import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit';
import './neopixel-matrix-element';

storiesOf('NeoPixel Matrix', module)
  .addParameters({ component: 'wokwi-neopixel-matrix' })
  .addDecorator(withKnobs)
  .add(
    '8x8, green background',
    () => html`
      <div style="display: inline-block; background: #363; padding: 4px">
        <wokwi-neopixel-matrix
          rows="${number('rows', 8, { min: 1, max: 32 })}"
          cols="${number('cols', 8, { min: 1, max: 32 })}"
          .blurLight="${boolean('blurLight', true)}"
          .animation="${boolean('animation', true)}"
        ></wokwi-neopixel-matrix>
      </div>
    `
  )
  .add(
    '16x16, dark background',
    () => html`
      <div style="display: inline-block; background: #333; padding: 4px">
        <wokwi-neopixel-matrix
          rows="16"
          cols="16"
          .animation="${boolean('animation', true)}"
        ></wokwi-neopixel-matrix>
      </div>
    `
  );
