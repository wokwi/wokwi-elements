import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import { logEvent } from 'storybook-events-logger';
import './arduino-nano-element';

storiesOf('Arduino Nano', module)
  .addParameters({ component: 'wokwi-arduino-nano' })
  .addDecorator(withKnobs)
  .add(
    'Nano',
    () => html`
      <wokwi-arduino-nano
        .led13=${boolean('LED 13', false)}
        .ledTX=${boolean('TX LED', false)}
        .ledRX=${boolean('RX LED', false)}
        .ledPower=${boolean('Power LED', true)}
        @button-press=${logEvent}
        @button-release=${logEvent}
      ></wokwi-arduino-nano>
    `
  );
