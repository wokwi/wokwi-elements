import { storiesOf } from '@storybook/web-components';
import { html } from 'lit';
import { withKnobs, number } from '@storybook/addon-knobs';

import './resistor-element';

storiesOf('Resistor', module)
  .addParameters({ component: 'wokwi-resistor' })
  .addDecorator(withKnobs())
  .add('1Ω', () => html`<wokwi-resistor value="${number('R', 1)}"></wokwi-resistor>`)
  .add('470Ω', () => html`<wokwi-resistor value="${number('R', 470)}"></wokwi-resistor>`);
