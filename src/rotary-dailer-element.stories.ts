import { withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './rotary-dialer-element';
import { logEvent } from 'storybook-events-logger';

storiesOf('Rotary Dialer', module)
  .addParameters({ component: 'wokwi-rotary-dialer' })
  .addDecorator(withKnobs)
  .add('Start', () => html` <wokwi-rotary-dialer @dial-start=${logEvent}></wokwi-rotary-dialer> `)
  .add('Dial', () => html` <wokwi-rotary-dialer @dial=${logEvent}></wokwi-rotary-dialer> `)
  .add('End', () => html` <wokwi-rotary-dialer @dial-end=${logEvent}></wokwi-rotary-dialer> `);
