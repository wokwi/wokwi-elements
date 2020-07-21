import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import { logEvent } from 'storybook-events-logger';
import './membrane-keypad-element';

storiesOf('Membrane Keypad', module)
  .addParameters({ component: 'wokwi-membrane-keypad' })
  .add(
    'Default',
    () => html`
      <wokwi-membrane-keypad
        @button-press=${logEvent}
        @button-release=${logEvent}
      ></wokwi-membrane-keypad>
    `
  )
  .add(
    'With connector',
    () => html`
      <wokwi-membrane-keypad
        @button-press=${logEvent}
        @button-release=${logEvent}
        .connector=${true}
      ></wokwi-membrane-keypad>
    `
  )
  .add(
    'Three columns',
    () => html`
      <wokwi-membrane-keypad
        columns="3"
        @button-press=${logEvent}
        @button-release=${logEvent}
      ></wokwi-membrane-keypad>
    `
  )
  .add(
    'Three columns + connector',
    () => html`
      <wokwi-membrane-keypad
        columns="3"
        @button-press=${logEvent}
        @button-release=${logEvent}
        .connector=${true}
      ></wokwi-membrane-keypad>
    `
  );
