import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './arduino-uno-element';

storiesOf('Arduino Uno', module)
  .addParameters({ component: 'wokwi-arduino-uno' })
  .addDecorator(withKnobs)
  .add(
    'Uno R3',
    () => html`
      <wokwi-arduino-uno
        .led13=${boolean('LED 13', false)}
        .ledTX=${boolean('TX LED', false)}
        .ledRX=${boolean('RX LED', false)}
        .ledPower=${boolean('Power LED', true)}
      ></wokwi-7segment>
    `
  )
  .add(
    'Uno R3 (Large)',
    () => html`
      <wokwi-arduino-uno
        style="zoom: 2"
        .led13=${boolean('LED 13', false)}
        .ledTX=${boolean('TX LED', false)}
        .ledRX=${boolean('RX LED', false)}
        .ledPower=${boolean('Power LED', true)}
      ></wokwi-arduino-uno>
    `
  );
