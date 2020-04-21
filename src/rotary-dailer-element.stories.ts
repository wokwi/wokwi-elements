import { withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './rotary-dialer-element';

storiesOf('Rotary Dialer', module)
  .addParameters({ component: 'wokwi-rotary-dialer' })
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => html`
      <wokwi-rotary-dialer value=${number('value', 5, { min: 1, max: 10 })}></wokwi-rotary-dialer>
    `
  );
