import { storiesOf } from '@storybook/web-components';
import { withKnobs, number } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import './neopixel-element';

storiesOf('Neopixel', module)
  .addDecorator(withKnobs)
  .add(
    'Neopixel: Red',
    () =>
      html`
        <wokwi-neopixel
          r="${number('r', 1, { min: 0, max: 1, range: true, step: 0.01 })}"
          g="${number('g', 0, { min: 0, max: 1, range: true, step: 0.01 })}"
          b="${number('b', 0, { min: 0, max: 1, range: true, step: 0.01 })}"
        ></wokwi-neopixel>
      `
  )
  .add(
    'Neopixel: White',
    () =>
      html`
        <wokwi-neopixel
          r="${number('r', 1, { min: 0, max: 1, range: true, step: 0.01 })}"
          g="${number('g', 1, { min: 0, max: 1, range: true, step: 0.01 })}"
          b="${number('b', 1, { min: 0, max: 1, range: true, step: 0.01 })}"
        ></wokwi-neopixel>
      `
  );
