import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import './franzininho-element';

storiesOf('Franzininho', module)
  .addParameters({ component: 'wokwi-franzininho' })
  .addDecorator(withKnobs)
  .add(
    'Franzininho',
    () => html`
      <wokwi-franzininho
        .led1=${boolean('LED 1', false)}
        .ledPower=${boolean('Power LED', true)}
        @button-press=${action('button-press')}
        @button-release=${action('button-press')}
      ></wokwi-franzininho>
    `
  );
