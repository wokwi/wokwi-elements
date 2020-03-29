import { storiesOf } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { html } from 'lit-html';
import './potentiometer-element';

storiesOf('potentiometer', module).add(
  'potentiometer',
  () =>
    html`
      <wokwi-potentiometer
        min="0"
        max="200"
        @potentiometer-value-changed=${action('potentiometer-value-changed')}
      ></wokwi-potentiometer>
    `
);
