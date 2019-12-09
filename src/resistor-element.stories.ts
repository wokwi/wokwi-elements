import { storiesOf } from '@storybook/polymer';
import { html } from 'lit-html';
import { withKnobs, number } from '@storybook/addon-knobs';

import './resistor-element';

storiesOf('resistor', module)
  .addDecorator(withKnobs())
  .add(
    '1Ω',
    () =>
      html`
        <wokwi-resistor value="${number('R', 1)}"></wokwi-resistor>
      `
  )
  .add(
    '470Ω',
    () =>
      html`
        <wokwi-resistor value="${number('R', 470)}"></wokwi-resistor>
      `
  );
