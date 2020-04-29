import { withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './rotary-dialer-element';
import { logEvent } from 'storybook-events-logger';

storiesOf('Rotary Dialer', module)
  .addParameters({ component: 'wokwi-rotary-dialer' })
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => html` <wokwi-rotary-dialer @dialer-grab=${logEvent}></wokwi-rotary-dialer> `
  );
