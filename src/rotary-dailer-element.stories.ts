import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit';
import './rotary-dialer-element';

storiesOf('Rotary Dialer', module)
  .addParameters({ component: 'wokwi-rotary-dialer' })
  .addDecorator(withKnobs)
  .add(
    'Default',
    () =>
      html`
        <wokwi-rotary-dialer
          @dial=${action('dial')}
          @dial-start=${action('dial-start')}
          @dial-end=${action('dial-end')}
        ></wokwi-rotary-dialer>
      `
  );
