import { storiesOf } from '@storybook/web-components';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import './buzzer-element';

storiesOf('Buzzer', module)
  .addParameters({ component: 'wokwi-buzzer' })
  .addDecorator(withKnobs)
  .add(
    'Buzzer',
    () =>
      html`<div style="height: 20px"></div>
        <wokwi-buzzer .hasSignal=${boolean('hasSignal', false)}></wokwi-buzzer>`
  );
