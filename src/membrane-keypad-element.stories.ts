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
    'Three Columns',
    () => html`
      <wokwi-membrane-keypad
        .threeColumns="${true}"
        @button-press=${logEvent}
        @button-release=${logEvent}
      ></wokwi-membrane-keypad>
    `
  );
