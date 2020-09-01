import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './arduino-mega-element';

storiesOf('Arduino Mega', module)
  .addParameters({ component: 'wokwi-arduino-mega' })
  .addDecorator(withKnobs)
  .add(
    'Mega',
    () => html`
      <wokwi-arduino-mega
        .led13=${boolean('LED 13', false)}
        .ledTX=${boolean('TX LED', false)}
        .ledRX=${boolean('RX LED', false)}
        .ledPower=${boolean('Power LED', true)}
      ></wokwi-arduino-mega>
    `
  );
